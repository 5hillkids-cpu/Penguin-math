# Georgia Mechanical Slide Script

## Course
Georgia Mechanical: Industrial HVAC Electrical and Control Troubleshooting

## Slide 1: Title and Job Context
### On-Screen Content
- Georgia Mechanical Technical Training Series
- Industrial HVAC Electrical and Control Troubleshooting
- Tracing the Control Path Before Replacing Parts

### Speaker Script
"Welcome to the Georgia Mechanical HVAC troubleshooting module. Today we are focusing on a common but expensive mistake in the field: treating a BAS request like proof the unit should already be running. We are going to separate request, permissive, and final command."

## Slide 2: Why This Matters
### On-Screen Content
- HVAC downtime affects comfort, process stability, and energy use
- Poor diagnosis causes wasted labor and unnecessary replacements
- Strong control-path reasoning reduces repeat calls

### Speaker Script
"At Georgia Mechanical, the best technician is not the one who guesses fastest. It is the one who traces the signal accurately, identifies the blocking condition, and restores operation without creating new problems."

## Slide 3: Learning Objectives
### On-Screen Content
- Explain the fan-start sequence
- Identify safety-string components
- Trace control voltage logically
- Diagnose a no-fan-start event
- Verify safe restart

### Speaker Script
"We want you to leave this lesson able to explain how the unit should start, where the signal stopped, and why the final diagnosis is supported by evidence instead of assumption."

## Slide 4: Normal Fan-Start Sequence
### On-Screen Content
1. BAS requests operation
2. Control transformer provides voltage
3. Safety string remains closed
4. Fan relay coil energizes
5. Contactor coil energizes
6. Supply fan motor starts

### Speaker Script
"If you know this sequence, you know the order of your checks. If you skip the sequence, you usually skip the right answer too."

## Slide 5: What the BAS Does and Does Not Prove
### On-Screen Content
- BAS command proves demand exists
- BAS command does not prove safeties are closed
- BAS command does not prove the relay or contactor is energized

### Speaker Script
"This is the mindset change many learners need. A BAS request is a request. The equipment still decides whether it is allowed to start."

## Slide 6: Safety Devices That Commonly Block Start
### On-Screen Content
- Freezestat
- Airflow proof switch
- Overload protection
- Access or service interlock

### Speaker Script
"When one of these devices opens, the unit may appear dead even though demand is present. That is why the safety string is so important in no-start diagnosis."

## Slide 7: Scenario Evidence
### On-Screen Content
- BAS command: True
- Transformer secondary: 24 VAC
- Freezestat: Open
- Relay coil voltage: 0 VAC
- Contactor coil voltage: 0 VAC

### Speaker Script
"This evidence tells us that control power exists but does not reach the relay coil. That means the issue is not the motor first. It is not the BAS first. The best clue is the open safety string."

## Slide 8: Root Cause Logic
### On-Screen Content
- Demand is present
- Power source is present
- Signal stops before the relay coil
- Freezestat interrupts the control path

### Speaker Script
"This is a clean logic chain. We do not need to guess at the contactor because the relay coil never gets permission to energize."

## Slide 9: Corrective Action Sequence
### On-Screen Content
1. Lock out and inspect safely
2. Determine why the freezestat is open
3. Reset or replace as appropriate
4. Confirm the safety string closes
5. Restart and verify airflow

### Speaker Script
"A reset is only appropriate after you understand why the device opened. Otherwise you are treating the symptom instead of the condition that created it."

## Slide 10: Common Wrong Turns
### On-Screen Content
- Replacing the contactor first
- Ignoring the safety string
- Treating BAS graphics as full system truth
- Failing to verify airflow after restart

### Speaker Script
"These are exactly the errors Georgia Mechanical wants to eliminate. The standard is simple: prove what failed before you touch it."

## Slide 11: Transfer the Method
### On-Screen Content
- Confirm demand
- Trace control voltage path
- Find the blocking device
- Correct safely
- Verify the restart

### Speaker Script
"This method is bigger than HVAC. The same reasoning applies anywhere a control signal must survive a chain of conditions before equipment is allowed to run."

## Slide 12: Discussion Prompt
### On-Screen Content
- What clue ruled out the motor first?
- What would you measure next if the freezestat were closed?

### Speaker Script
"I want the room to explain not just the answer, but why that answer came first. That is how you know the process is becoming a habit."