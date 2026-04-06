# Facilitator Slide Deck

## Module Title
Industrial Chiller Control and Diagnostics

## Slide 1: Title Slide
- Title: Industrial Chiller Control and Diagnostics
- Subtitle: Using Alarm Logic and Sensor Plausibility to Diagnose Lockouts
- Presenter note: Open with the cost and risk of resetting protected equipment without understanding the cause.

## Slide 2: Learning Objectives
- Explain chiller enable and protection logic
- Interpret alarm history and sensor values
- Compare controller data with field measurements
- Diagnose false lockout causes safely

## Slide 3: Why Chillers Lock Out
- Process condition truly unsafe
- Sensor input unreliable
- Flow or pump proof missing
- Controller sees protective threshold crossed

## Slide 4: Normal Enable Sequence
- Cooling demand present
- Pump proof true
- Flow proof true
- Sensor values in safe range
- Controller enables compressor

## Slide 5: Scenario Evidence
- Demand true
- Pump proof true
- Flow proof true
- Leaving-water sensor: 33.0 F
- Handheld water reading: 44.8 F
- Compressor enable: False

## Slide 6: What the Evidence Means
- Controller sees freeze risk
- Independent measurement does not support freeze risk
- Sensor plausibility becomes the key issue

## Slide 7: Root Cause Logic
- Controller behavior is correct based on its input
- Input data is likely false
- Leaving-water sensor or wiring is suspect

## Slide 8: Corrective Action
- Verify real process condition
- Inspect and test sensor
- Replace or recalibrate if required
- Clear lockout only after valid input is restored

## Slide 9: Wrong Turns to Avoid
- Repeated resets without diagnosis
- Bypassing protections
- Replacing major hardware before validating sensor truth

## Slide 10: Universal Lesson
- Protected systems often fail safe for a reason
- Diagnose the input truth before fighting the control logic