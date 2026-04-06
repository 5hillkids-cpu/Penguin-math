# Rise Production Script

## Course Title
Conveyor System Electrical and PLC Troubleshooting

## Course Description
This Rise course introduces learners to a structured troubleshooting process for a PLC-controlled conveyor that will not restart after a jam-clear event. The course focuses on sequence-of-operation reasoning, permissive checks, PLC input and output interpretation, and evidence-based fault isolation.

## Course Settings Recommendation
- Theme: Clean industrial theme with blue-gray accents and high-contrast callout blocks
- Navigation: Restricted for first pass if used as prework, free navigation if used as reinforcement
- Estimated duration: 20 to 25 minutes
- Completion criteria: All lesson blocks viewed plus final knowledge check passed at 80 percent

## Lesson 1: Scenario Kickoff

### Block 1
- Rise block type: Text on image
- Purpose: Establish job context and urgency
- Heading: Conveyor 3 Will Not Restart
- Body copy: An operator clears a jam, presses Start, and nothing happens. The line is waiting. Your task is to diagnose the fault without guessing, swapping parts, or skipping safety logic.
- Media direction: Wide conveyor photo or illustrated packaging line with HMI overlay

### Block 2
- Rise block type: Statement A
- Heading: What good troubleshooters do first
- Body copy: They confirm the symptom, review the normal sequence of operation, and identify which permissive or signal must be true before the conveyor can run.

### Block 3
- Rise block type: Knowledge check, multiple response
- Question: Which actions belong in the first stage of troubleshooting?
- Choices:
  - Confirm the reported symptom
  - Review the sequence of operation
  - Replace the motor contactor immediately
  - Check required permissives
- Correct answers: Confirm the reported symptom; Review the sequence of operation; Check required permissives
- Feedback correct: Correct. Strong troubleshooting starts by understanding what the system should be doing and what evidence is already available.
- Feedback incorrect: Rework the first-step mindset. Good troubleshooting begins with verification and sequence logic, not random replacement.

## Lesson 2: Sequence of Operation

### Block 4
- Rise block type: Process
- Heading: How the conveyor normally starts
- Steps:
  1. Operator presses Start
  2. PLC receives the start request
  3. All permissives are checked
  4. PLC energizes run output
  5. Starter or drive commands the motor
  6. Conveyor movement is confirmed

### Block 5
- Rise block type: Accordion
- Heading: Required permissives
- Items:
  - E-stop healthy: Emergency stop circuit must be reset and healthy
  - Guard closed: Access guards must be closed
  - Overload healthy: Motor overload must be reset
  - Auto mode selected: System must be in the correct operating mode
  - Downstream ready: Next process section must accept product
  - Jam clear true: Product path must be clear

### Block 6
- Rise block type: Labeled graphic
- Heading: Follow the signal path
- Body copy: Select each point to see what role it plays in the start sequence.
- Label guidance:
  - Start pushbutton
  - PLC input table
  - Logic permissives
  - PLC run output
  - Starter coil or VFD run input
  - Conveyor motor

## Lesson 3: Fault Isolation Strategy

### Block 7
- Rise block type: Text
- Heading: Three places the fault can live
- Body copy: Most conveyor no-start faults can be narrowed to one of three zones: input side, logic or permissive side, or output side.

### Block 8
- Rise block type: Sorting activity
- Heading: Sort the symptoms by fault zone
- Directions: Drag each symptom into the best match.
- Categories:
  - Input side
  - Logic or permissive side
  - Output side
- Items:
  - Start pushbutton bit never changes
  - Jam clear input stays false
  - Run output remains off
  - PLC output is on but starter coil sees no voltage

### Block 9
- Rise block type: Flashcards
- Heading: Questions that move the diagnosis forward
- Cards:
  - Front: Did the PLC receive the start request?
    Back: If no, check the pushbutton, wiring, and input channel.
  - Front: Are all permissives true?
    Back: If no, find which interlock or sensor is blocking the sequence.
  - Front: Did the PLC command the output?
    Back: If yes, move to the output device and field-power path.

## Lesson 4: Scenario Data Review

### Block 10
- Rise block type: Table
- Heading: Available troubleshooting evidence
- Columns: Item, Current status, What it suggests
- Rows:
  - HMI line status, Ready, System is not fully faulted at the line level
  - Start command bit, True when pressed, Request reaches the PLC
  - Jam clear photoeye input, False, A required permissive is missing
  - Overload healthy input, True, Overload is not blocking restart
  - PLC run output, False, PLC is not commanding run
  - Voltage at starter coil, 0 VAC, No output command is reaching the coil

### Block 11
- Rise block type: Scenario
- Heading: What does the evidence rule out?
- Body copy: Because the start command reaches the PLC and the overload is healthy, the fault is unlikely to be a pushbutton issue or an overload trip. The missing jam-clear permissive is the strongest clue.

### Block 12
- Rise block type: Knowledge check, multiple choice
- Question: Which signal most directly explains why the PLC run output remains off?
- Choices:
  - Overload healthy input true
  - Start command bit true
  - Jam clear photoeye input false
  - HMI line status ready
- Correct answer: Jam clear photoeye input false
- Feedback correct: Correct. The PLC will not issue the run command until the jam-clear permissive returns true.
- Feedback incorrect: Recheck which signal represents a missing requirement instead of a healthy condition.

## Lesson 5: Root Cause and Correction

### Block 13
- Rise block type: Image and text
- Heading: The actual root cause
- Body copy: The jam-clear photoeye bracket was bumped during jam removal. The beam no longer aligned, so the PLC continued seeing the product path as blocked.
- Media direction: Photoeye illustration with offset bracket alignment

### Block 14
- Rise block type: Process
- Heading: Corrective action sequence
- Steps:
  1. Lock out and inspect the sensor area
  2. Realign the photoeye bracket
  3. Verify sensor indicator changes state
  4. Confirm PLC input changes from false to true
  5. Restart conveyor with standard procedure
  6. Observe stable operation

### Block 15
- Rise block type: Quote
- Body copy: A reset is not a diagnosis. The best fix is the one supported by evidence.

## Lesson 6: Final Check and Job Transfer

### Block 16
- Rise block type: Knowledge check, multiple choice
- Question: If the PLC output had been true while the starter coil still saw 0 VAC, where would the next troubleshooting steps belong?
- Choices:
  - Input side only
  - Logic side only
  - Output side and field power path
  - HMI configuration only
- Correct answer: Output side and field power path

### Block 17
- Rise block type: Knowledge check, fill-in-the-blank
- Question: A missing ________ can keep a conveyor from restarting even when the start request reaches the PLC.
- Acceptable answer: permissive

### Block 18
- Rise block type: Continue block
- Heading: Apply this method on the floor
- Body copy: Use the same sequence on HVAC, chiller, and conveyor systems: verify the symptom, review the sequence, identify missing permissives, confirm with measurements, correct the root cause, and verify normal operation.

## Accessibility and Media Notes
- Keep all screenshots high contrast and large enough for tag names to remain readable.
- Add alt text describing each diagram, sensor image, and signal-flow graphic.
- Avoid relying on color alone to indicate healthy or faulted states.

## Build Notes for Authoring Team
- Use real plant tag names if the client provides them.
- Replace generic graphics with site-specific schematics when available.
- Pair each knowledge check with short remediation feedback rather than generic right or wrong text.
- If Storyline is preferred over Rise, convert Blocks 8, 10, and 12 into a guided troubleshooting scene with variable-driven feedback.