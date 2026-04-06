# Georgia Mechanical Slide Script

## Course
Georgia Mechanical: Conveyor System Electrical and PLC Troubleshooting

## Slide 1: Title and Context
### On-Screen Content
- Georgia Mechanical Technical Training Series
- Conveyor System Electrical and PLC Troubleshooting
- Sequence-Based Fault Isolation for Production Support Teams

### Speaker Script
"Welcome to Georgia Mechanical technical training. In this module, we are focusing on a conveyor that will not restart after a jam-clear event. The goal is not to guess faster. The goal is to diagnose correctly under production pressure, using sequence of operation, PLC evidence, and field verification."

## Slide 2: Why This Matters at Georgia Mechanical
### On-Screen Content
- Downtime increases labor cost and missed throughput
- Guessing leads to unnecessary parts replacement
- Strong troubleshooting protects production and safety

### Speaker Script
"At Georgia Mechanical, we want technicians who can slow the problem down, read the evidence, and correct the true cause. Every unnecessary part swap costs time. Every rushed assumption creates risk. This lesson is about building a repeatable troubleshooting standard."

## Slide 3: Learning Objectives
### On-Screen Content
- Explain conveyor start sequence
- Identify required permissives
- Interpret PLC input and output state
- Diagnose a no-restart event
- Verify corrective action safely

### Speaker Script
"By the end of this session, you should be able to explain the conveyor start sequence, identify which permissive is missing, use PLC and field evidence together, and verify the repair instead of stopping at a likely guess."

## Slide 4: Normal Conveyor Start Sequence
### On-Screen Content
1. Operator presses Start
2. PLC sees request
3. Permissives are checked
4. PLC energizes run output
5. Starter or drive commands motor
6. Conveyor movement confirms run

### Speaker Script
"This sequence is the backbone of the lesson. If you do not know what should happen next, you cannot diagnose what failed. Every troubleshooting step we take will refer back to this chain."

## Slide 5: Required Permissives
### On-Screen Content
- E-stop healthy
- Guard closed
- Overload healthy
- Auto mode selected
- Downstream ready
- Jam clear true

### Speaker Script
"A conveyor does not care how badly production wants it running. If one permissive is missing, the PLC should hold the run command off. That is not a malfunction. That is the logic doing its job."

## Slide 6: Three Fault Zones
### On-Screen Content
- Input side
- Logic or permissive side
- Output side

### Speaker Script
"When technicians wander without a structure, they lose time. This three-zone model gives us structure. First ask whether the PLC saw the request. Then ask whether logic conditions were satisfied. Then ask whether the output command reached the device."

## Slide 7: Scenario Evidence
### On-Screen Content
- HMI status: Ready
- Start command bit: True
- Jam clear input: False
- Overload healthy: True
- Run output: False
- Starter coil voltage: 0 VAC

### Speaker Script
"Notice what this evidence already tells us. The start request is reaching the PLC. The overload is not blocking the run. The PLC output is staying off. That means the strongest clue is not at the starter coil. It is in the permissive chain."

## Slide 8: Root Cause Logic
### On-Screen Content
- Missing condition: Jam clear input remains false
- PLC correctly withholds run output
- Most likely field cause: Misaligned photoeye

### Speaker Script
"The PLC is not wrong here. It is acting on the information it has. If the jam-clear input remains false, the controller should not issue a run command. Our task is to decide why that input never returned true after the jam was removed."

## Slide 9: Corrective Action
### On-Screen Content
1. Lock out equipment
2. Inspect jam-clear photoeye
3. Realign bracket
4. Verify sensor state change
5. Confirm PLC input returns true
6. Restart and observe stable run

### Speaker Script
"A proper correction always includes verification. Realigning the sensor is not enough. We must prove the device changes state, prove the PLC sees the new state, and prove the conveyor returns to normal operation."

## Slide 10: Common Mistakes
### On-Screen Content
- Replacing the starter too early
- Trusting HMI labels without field confirmation
- Treating a cleared jam as proof the input must be true
- Stopping after a likely answer without verification

### Speaker Script
"These mistakes are common in real plants. At Georgia Mechanical, the standard is evidence before conclusion. If you cannot explain which data point supports the diagnosis, you are not ready to repair."

## Slide 11: Transfer the Method
### On-Screen Content
- Confirm the symptom
- Review normal sequence
- Find the missing condition
- Verify with measurement
- Correct the root cause
- Verify restart

### Speaker Script
"This is the process we want across all Georgia Mechanical troubleshooting work. It applies to conveyors, HVAC equipment, chillers, and any control-driven system where multiple conditions must align before operation occurs."

## Slide 12: Discussion Prompt
### On-Screen Content
- Which clue narrowed the fault fastest?
- What would you check next if the PLC output were true?

### Speaker Script
"Before we close, I want you to say which clue gave you the strongest direction and why. Strong technicians do not just get the right answer. They can explain why that answer was justified."