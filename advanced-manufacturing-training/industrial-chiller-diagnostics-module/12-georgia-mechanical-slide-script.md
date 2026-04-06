# Georgia Mechanical Slide Script

## Course
Georgia Mechanical: Industrial Chiller Control and Diagnostics

## Slide 1: Title and Context
### On-Screen Content
- Georgia Mechanical Technical Training Series
- Industrial Chiller Control and Diagnostics
- Diagnosing Lockouts Without Defeating Protection

### Speaker Script
"Welcome to the Georgia Mechanical chiller diagnostics module. Our focus today is protected equipment logic. We will look at what happens when a chiller refuses to enable the compressor and how to determine whether the machine is responding to a real problem or bad input data."

## Slide 2: Why This Matters
### On-Screen Content
- Chillers are high-value protected assets
- Improper resets can damage equipment
- Good diagnostics reduce downtime and repeat trips

### Speaker Script
"Resetting a chiller without understanding the fault is not troubleshooting. It is risk. Georgia Mechanical needs technicians who can read alarms, compare data sources, and protect the equipment while solving the problem."

## Slide 3: Learning Objectives
### On-Screen Content
- Explain chiller enable logic
- Interpret controller alarms and sensor inputs
- Compare controller data with field measurement
- Diagnose a false lockout condition safely

### Speaker Script
"By the end of this lesson, you should be able to explain why the controller blocked compressor enable and how to prove whether the shutdown reflects a true process risk or false sensor information."

## Slide 4: Normal Enable Sequence
### On-Screen Content
1. Cooling demand present
2. Pump proof true
3. Flow proof true
4. Sensor values safe
5. Controller enables compressor

### Speaker Script
"The chiller will only run when process conditions and protection logic both agree. That is why a lockout must be read as a clue, not just an obstacle."

## Slide 5: Key Protection Logic
### On-Screen Content
- Low-temperature protection
- Flow loss protection
- Pressure-related safeties
- Lockout logic after unsafe condition

### Speaker Script
"These protections are not optional inconveniences. They exist to prevent expensive damage. Our task is to understand why they were triggered."

## Slide 6: Scenario Evidence
### On-Screen Content
- Cooling demand: True
- Pump proof: True
- Flow proof: True
- Leaving-water sensor: 33.0 F
- Handheld water reading: 44.8 F
- Compressor enable: False

### Speaker Script
"The key here is the conflict between the controller input and the independent field measurement. That conflict is what turns this from a simple reset problem into a sensor plausibility problem."

## Slide 7: Root Cause Logic
### On-Screen Content
- Controller sees freeze risk
- Independent measurement does not support freeze risk
- Protection logic is reasonable
- Sensor or signal is suspect

### Speaker Script
"The controller is probably doing exactly what it should do. The deeper issue is that it is reacting to bad information. That distinction matters because it keeps us from blaming the wrong hardware."

## Slide 8: Corrective Action Sequence
### On-Screen Content
1. Verify actual process temperature
2. Inspect sensor and wiring
3. Test signal or resistance
4. Replace or recalibrate if needed
5. Restore valid input
6. Clear lockout and monitor restart

### Speaker Script
"Notice that reset comes late in the process, not early. First we restore trustworthy data. Then we allow the controller to reassess the machine state."

## Slide 9: Wrong Turns to Avoid
### On-Screen Content
- Repeated resets without diagnosis
- Bypassing protective logic
- Replacing major equipment before validating sensor truth
- Treating alarm text as the full diagnosis

### Speaker Script
"These are the habits Georgia Mechanical is trying to eliminate. A good technician respects the protection logic and investigates the evidence behind it."

## Slide 10: Cross-System Transfer
### On-Screen Content
- Conveyors rely on permissive truth
- HVAC relies on safety-string truth
- Chillers rely on sensor and process truth
- Same troubleshooting method, different evidence sources

### Speaker Script
"Across all three systems, the pattern is the same. Confirm the demand, identify the missing condition, test the evidence, correct the cause, and verify normal operation."

## Slide 11: Discussion Prompt
### On-Screen Content
- What clue made the sensor suspicious?
- Why was the controller not the first thing to blame?

### Speaker Script
"A strong answer here explains the difference between bad logic and good logic acting on bad data. That distinction is a mark of advanced troubleshooting."

## Slide 12: Closeout
### On-Screen Content
- Georgia Mechanical troubleshooting standard:
- Verify before reset
- Protect the equipment
- Prove the root cause

### Speaker Script
"That is the standard we want on the floor: verify before reset, protect the equipment, and prove the root cause before you call the job complete."