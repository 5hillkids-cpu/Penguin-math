param(
  [int]$Port = 8003,
  [string]$Root = (Split-Path -Parent $MyInvocation.MyCommand.Path)
)

function Get-ContentType {
  param([string]$Path)

  switch ([System.IO.Path]::GetExtension($Path).ToLowerInvariant()) {
    '.html' { 'text/html; charset=utf-8' }
    '.css'  { 'text/css; charset=utf-8' }
    '.js'   { 'application/javascript; charset=utf-8' }
    '.json' { 'application/json; charset=utf-8' }
    '.png'  { 'image/png' }
    '.jpg'  { 'image/jpeg' }
    '.jpeg' { 'image/jpeg' }
    '.gif'  { 'image/gif' }
    '.svg'  { 'image/svg+xml' }
    '.webp' { 'image/webp' }
    '.avif' { 'image/avif' }
    default { 'application/octet-stream' }
  }
}

$listener = [System.Net.HttpListener]::new()
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)
$listener.Start()

Write-Host "Serving $Root at $prefix"

try {
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $requestPath = $context.Request.Url.AbsolutePath.TrimStart('/')

    if ([string]::IsNullOrWhiteSpace($requestPath)) {
      $requestPath = 'index.html'
    }

    $localPath = Join-Path $Root $requestPath

    if ((Test-Path $localPath) -and (Get-Item $localPath).PSIsContainer) {
      $localPath = Join-Path $localPath 'index.html'
    }

    if (-not (Test-Path $localPath)) {
      $context.Response.StatusCode = 404
      $buffer = [System.Text.Encoding]::UTF8.GetBytes('Not Found')
      $context.Response.OutputStream.Write($buffer, 0, $buffer.Length)
      $context.Response.Close()
      continue
    }

    $bytes = [System.IO.File]::ReadAllBytes($localPath)
    $context.Response.ContentType = Get-ContentType -Path $localPath
    $context.Response.ContentLength64 = $bytes.Length
    $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    $context.Response.Close()
  }
}
finally {
  $listener.Stop()
  $listener.Close()
}