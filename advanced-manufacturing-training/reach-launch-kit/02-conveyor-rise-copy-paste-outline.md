# Conveyor Rise Copy-Paste Outline

## Course Title
Georgia Mechanical: Conveyor System Electrical and PLC Troubleshooting

## Course Description
This self-paced Georgia Mechanical course teaches technicians how to diagnose conveyor no-start and no-restart faults using sequence-of-operation reasoning, permissive checks, PLC evidence, and safe restart verification.

## Lesson 1: When a Conveyor Refuses to Restart

### Intro Text On Image
An operator clears a jam, presses Start, and nothing happens. Production is waiting. Your task is to diagnose the fault without guessing, swapping parts, or skipping safety logic.

### Statement Block
Good troubleshooters confirm the symptom, review the normal sequence, and identify which permissive or signal must be true before the conveyor can run.

### Knowledge Check
Question: Which actions belong in the first stage of troubleshooting?

Choices:
- Confirm the reported symptom
- Review the sequence of operation
- Replace the motor contactor immediately
- Check required permissives

Correct answers:
- Confirm the reported symptom
- Review the sequence of operation
- Check required permissives

## Lesson 2: Sequence of Operation

### Process Block Steps
1. Operator presses Start
2. PLC receives the start request
3. All permissives are checked
4. PLC energizes run output
5. Starter or drive commands the motor
6. Conveyor movement is confirmed

### Accordion Block
Item 1: E-stop healthy
Emergency stop circuit must be reset and healthy.

Item 2: Guard closed
Access guards must be closed.

Item 3: Overload healthy
Motor overload must be reset.

Item 4: Auto mode selected
System must be in the correct operating mode.

Item 5: Downstream ready
The next process section must be able to accept product.

Item 6: Jam clear true
The product path must be confirmed clear.

## Lesson 3: Where the Fault Can Live

### Text Block
Most conveyor no-start faults can be narrowed to one of three zones: input side, logic or permissive side, or output side.

### Sorting Activity
Categories:
- Input side
- Logic or permissive side
- Output side

Items:
- Start pushbutton bit never changes
- Jam clear input stays false
- Run output remains off
- PLC output is on but starter coil sees no voltage

### Flashcards
Front: Did the PLC receive the start request?
Back: If no, check the pushbutton, wiring, and input channel.

Front: Are all permissives true?
Back: If no, find which interlock or sensor is blocking the sequence.

Front: Did the PLC command the output?
Back: If yes, move to the output device and field-power path.

## Lesson 4: Scenario Evidence Review

### Table Block
Item | Current status | What it suggests
HMI line status | Ready | System is not fully faulted at the line level
Start command bit | True when pressed | Request reaches the PLC
Jam clear photoeye input | False | A required permissive is missing
Overload healthy input | True | Overload is not blocking restart
PLC run output | False | PLC is not commanding run
Voltage at starter coil | 0 VAC | No output command is reaching the coil

### Scenario Text
Because the start command reaches the PLC and the overload is healthy, the fault is unlikely to be a pushbutton issue or overload trip. The missing jam-clear permissive is the strongest clue.

### Knowledge Check
Question: Which signal most directly explains why the PLC run output remains off?

Choices:
- Overload healthy input true
- Start command bit true
- Jam clear photoeye input false
- HMI line status ready

Correct answer:
- Jam clear photoeye input false

## Lesson 5: Root Cause and Correction

### Image And Text
The jam-clear photoeye bracket was bumped during jam removal. The beam no longer aligned, so the PLC continued seeing the product path as blocked.

### Process Block Steps
1. Lock out and inspect the sensor area
2. Realign the photoeye bracket
3. Verify sensor indicator changes state
4. Confirm PLC input changes from false to true
5. Restart conveyor with standard procedure
6. Observe stable operation

### Quote Block
A reset is not a diagnosis. The best fix is the one supported by evidence.

## Lesson 6: Final Check and Transfer

### Knowledge Check
Question: If the PLC output had been true while the starter coil still saw 0 VAC, where would the next troubleshooting steps belong?

Choices:
- Input side only
- Logic side only
- Output side and field power path
- HMI configuration only

Correct answer:
- Output side and field power path

### Fill In The Blank
A missing ________ can keep a conveyor from restarting even when the start request reaches the PLC.

Correct answer:
- permissive

### Continue Block
Use the same sequence on HVAC, chiller, and conveyor systems: verify the symptom, review the sequence, identify missing permissives, confirm with measurements, correct the root cause, and verify normal operation.

## Completion Recommendation
- Require all lessons to be viewed.
- Require the final knowledge checks to be completed.
- Set passing threshold at 80 percent if your Reach configuration supports scored completion.