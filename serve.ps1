param(
  [int]$Port = 8000,
  [string]$Root = (Split-Path -Parent $MyInvocation.MyCommand.Path)
)

function Get-ContentType {
  param([string]$Path)

  switch ([System.IO.Path]::GetExtension($Path).ToLowerInvariant()) {
    '.html' { return 'text/html; charset=utf-8' }
    '.css' { return 'text/css; charset=utf-8' }
    '.js' { return 'application/javascript; charset=utf-8' }
    '.json' { return 'application/json; charset=utf-8' }
    '.png' { return 'image/png' }
    '.avif' { return 'image/avif' }
    '.webp' { return 'image/webp' }
    '.jpg' { return 'image/jpeg' }
    '.jpeg' { return 'image/jpeg' }
    '.gif' { return 'image/gif' }
    '.svg' { return 'image/svg+xml' }
    '.ico' { return 'image/x-icon' }
    default { return 'application/octet-stream' }
  }
}

$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()

Write-Host "Serving $Root at http://localhost:$Port/"

try {
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $requestPath = [System.Uri]::UnescapeDataString($context.Request.Url.AbsolutePath.TrimStart('/'))

    if ([string]::IsNullOrWhiteSpace($requestPath)) {
      $requestPath = 'index.html'
    }

    $localPath = Join-Path $Root $requestPath

    if ((Test-Path $localPath) -and (Get-Item $localPath).PSIsContainer) {
      $localPath = Join-Path $localPath 'index.html'
    }

    if (Test-Path $localPath) {
      $bytes = [System.IO.File]::ReadAllBytes($localPath)
      $context.Response.StatusCode = 200
      $context.Response.ContentType = Get-ContentType -Path $localPath
      $context.Response.ContentLength64 = $bytes.Length
      $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    }
    else {
      $notFound = [System.Text.Encoding]::UTF8.GetBytes('404 - File not found')
      $context.Response.StatusCode = 404
      $context.Response.ContentType = 'text/plain; charset=utf-8'
      $context.Response.ContentLength64 = $notFound.Length
      $context.Response.OutputStream.Write($notFound, 0, $notFound.Length)
    }

    $context.Response.OutputStream.Close()
  }
}
finally {
  $listener.Stop()
  $listener.Close()
}