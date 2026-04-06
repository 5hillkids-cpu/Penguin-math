# Conveyor Rise Click-By-Click Build Guide

## Purpose
Use this guide when you are inside Rise 360 and want a literal step-by-step build order for the first Georgia Mechanical online course.

## Course To Build
Georgia Mechanical: Conveyor System Electrical and PLC Troubleshooting

## Source Files To Keep Open While Building
- 02-conveyor-rise-copy-paste-outline.md
- ../conveyor-plc-troubleshooting-module/07-rise-production-script.md
- ../conveyor-plc-troubleshooting-module/08-assessment-bank.md
- ../conveyor-plc-troubleshooting-module/12-georgia-mechanical-slide-script.md

## Part 1: Create The Course
1. Open Rise 360.
2. Select Create New.
3. Choose Course.
4. Enter the title: Georgia Mechanical: Conveyor System Electrical and PLC Troubleshooting.
5. Add the course description:
   This self-paced Georgia Mechanical course teaches technicians how to diagnose conveyor no-start and no-restart faults using sequence-of-operation reasoning, permissive checks, PLC evidence, and safe restart verification.
6. Save the course.

## Part 2: Set The Course Style
1. Open the course theme or settings area.
2. Apply Georgia Mechanical branding colors if available.
3. Use a clean industrial look with dark blue, steel gray, and white.
4. Set navigation style according to your delivery plan:
   - restricted if you want guided completion
   - free if this is reinforcement content
5. Confirm lesson labels are visible.

## Part 3: Create The Lesson Structure
Create six lessons with these exact names:

1. When a Conveyor Refuses to Restart
2. Sequence of Operation
3. Where the Fault Can Live
4. Scenario Evidence Review
5. Root Cause and Correction
6. Final Check and Transfer

## Part 4: Build Lesson 1

### Add Block 1
- Block type: Text on image
- Heading: When a Conveyor Refuses to Restart
- Body text:
  An operator clears a jam, presses Start, and nothing happens. Production is waiting. Your task is to diagnose the fault without guessing, swapping parts, or skipping safety logic.
- Media note: Use a conveyor image, production-line illustration, or plant photo with HMI context.

### Add Block 2
- Block type: Statement A
- Heading: What good troubleshooters do first
- Body text:
  Good troubleshooters confirm the symptom, review the normal sequence, and identify which permissive or signal must be true before the conveyor can run.

### Add Block 3
- Block type: Knowledge Check, Multiple Response
- Question:
  Which actions belong in the first stage of troubleshooting?
- Answers:
  - Confirm the reported symptom
  - Review the sequence of operation
  - Replace the motor contactor immediately
  - Check required permissives
- Mark correct:
  - Confirm the reported symptom
  - Review the sequence of operation
  - Check required permissives
- Feedback correct:
  Correct. Strong troubleshooting starts by understanding what the system should be doing and what evidence is already available.
- Feedback incorrect:
  Good troubleshooting begins with verification and sequence logic, not random replacement.

## Part 5: Build Lesson 2

### Add Block 1
- Block type: Process
- Heading: How the conveyor normally starts
- Step 1: Operator presses Start
- Step 2: PLC receives the start request
- Step 3: All permissives are checked
- Step 4: PLC energizes run output
- Step 5: Starter or drive commands the motor
- Step 6: Conveyor movement is confirmed

### Add Block 2
- Block type: Accordion
- Heading: Required permissives
- Item 1 title: E-stop healthy
- Item 1 body: Emergency stop circuit must be reset and healthy.
- Item 2 title: Guard closed
- Item 2 body: Access guards must be closed.
- Item 3 title: Overload healthy
- Item 3 body: Motor overload must be reset.
- Item 4 title: Auto mode selected
- Item 4 body: System must be in the correct operating mode.
- Item 5 title: Downstream ready
- Item 5 body: The next process section must be able to accept product.
- Item 6 title: Jam clear true
- Item 6 body: The product path must be confirmed clear.

### Add Block 3
- Block type: Labeled Graphic
- Heading: Follow the signal path
- Intro text:
  Select each point to see what role it plays in the start sequence.
- Suggested labels:
  - Start pushbutton
  - PLC input table
  - Logic permissives
  - PLC run output
  - Starter coil or VFD run input
  - Conveyor motor

## Part 6: Build Lesson 3

### Add Block 1
- Block type: Text
- Heading: Three places the fault can live
- Body text:
  Most conveyor no-start faults can be narrowed to one of three zones: input side, logic or permissive side, or output side.

### Add Block 2
- Block type: Sorting Activity
- Heading: Sort the symptoms by fault zone
- Directions:
  Drag each symptom into the best match.
- Categories:
  - Input side
  - Logic or permissive side
  - Output side
- Items:
  - Start pushbutton bit never changes
  - Jam clear input stays false
  - Run output remains off
  - PLC output is on but starter coil sees no voltage

### Add Block 3
- Block type: Flashcards
- Heading: Questions that move the diagnosis forward
- Card 1 front: Did the PLC receive the start request?
- Card 1 back: If no, check the pushbutton, wiring, and input channel.
- Card 2 front: Are all permissives true?
- Card 2 back: If no, find which interlock or sensor is blocking the sequence.
- Card 3 front: Did the PLC command the output?
- Card 3 back: If yes, move to the output device and field-power path.

## Part 7: Build Lesson 4

### Add Block 1
- Block type: Table
- Heading: Available troubleshooting evidence
- Add these rows:
  - HMI line status | Ready | System is not fully faulted at the line level
  - Start command bit | True when pressed | Request reaches the PLC
  - Jam clear photoeye input | False | A required permissive is missing
  - Overload healthy input | True | Overload is not blocking restart
  - PLC run output | False | PLC is not commanding run
  - Voltage at starter coil | 0 VAC | No output command is reaching the coil

### Add Block 2
- Block type: Scenario
- Heading: What does the evidence rule out?
- Body text:
  Because the start command reaches the PLC and the overload is healthy, the fault is unlikely to be a pushbutton issue or overload trip. The missing jam-clear permissive is the strongest clue.

### Add Block 3
- Block type: Knowledge Check, Multiple Choice
- Question:
  Which signal most directly explains why the PLC run output remains off?
- Choices:
  - Overload healthy input true
  - Start command bit true
  - Jam clear photoeye input false
  - HMI line status ready
- Correct answer:
  - Jam clear photoeye input false
- Feedback correct:
  Correct. The PLC will not issue the run command until the jam-clear permissive returns true.
- Feedback incorrect:
  Recheck which signal represents a missing requirement instead of a healthy condition.

## Part 8: Build Lesson 5

### Add Block 1
- Block type: Image and Text
- Heading: The actual root cause
- Body text:
  The jam-clear photoeye bracket was bumped during jam removal. The beam no longer aligned, so the PLC continued seeing the product path as blocked.
- Image suggestion: Photoeye diagram or sensor alignment image

### Add Block 2
- Block type: Process
- Heading: Corrective action sequence
- Step 1: Lock out and inspect the sensor area
- Step 2: Realign the photoeye bracket
- Step 3: Verify sensor indicator changes state
- Step 4: Confirm PLC input changes from false to true
- Step 5: Restart conveyor with standard procedure
- Step 6: Observe stable operation

### Add Block 3
- Block type: Quote
- Quote text:
  A reset is not a diagnosis. The best fix is the one supported by evidence.

## Part 9: Build Lesson 6

### Add Block 1
- Block type: Knowledge Check, Multiple Choice
- Question:
  If the PLC output had been true while the starter coil still saw 0 VAC, where would the next troubleshooting steps belong?
- Choices:
  - Input side only
  - Logic side only
  - Output side and field power path
  - HMI configuration only
- Correct answer:
  - Output side and field power path

### Add Block 2
- Block type: Fill In The Blank
- Prompt:
  A missing ________ can keep a conveyor from restarting even when the start request reaches the PLC.
- Accepted answer:
  permissive

### Add Block 3
- Block type: Continue Block
- Heading: Apply this method on the floor
- Body text:
  Use the same sequence on HVAC, chiller, and conveyor systems: verify the symptom, review the sequence, identify missing permissives, confirm with measurements, correct the root cause, and verify normal operation.

## Part 10: Set Completion Rules
1. Open course settings.
2. Require all lessons to be viewed.
3. Require knowledge checks to be completed.
4. If scoring is enabled in your configuration, use an 80 percent pass target.

## Part 11: Review Before Publish
1. Preview the entire course.
2. Test each knowledge check.
3. Check the mobile preview.
4. Confirm branding is consistent with Georgia Mechanical.
5. Confirm all images and labels are readable.
6. Publish the course for Reach delivery.

## Part 12: After Publish
1. Upload the published package into Reach.
2. Apply the course title and description consistently.
3. Add it to the Georgia Mechanical Technical Troubleshooting Academy learning path.
4. Run one pilot learner test before assigning broadly.