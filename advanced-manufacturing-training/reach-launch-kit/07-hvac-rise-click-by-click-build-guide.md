# HVAC Rise Click-By-Click Build Guide

## Purpose
Use this guide when you are inside Rise 360 and want a literal step-by-step build order for the Georgia Mechanical HVAC online course.

## Course To Build
Georgia Mechanical: Industrial HVAC Electrical and Control Troubleshooting

## Source Files To Keep Open While Building
- 03-hvac-rise-copy-paste-outline.md
- ../industrial-hvac-troubleshooting-module/07-rise-production-script.md
- ../industrial-hvac-troubleshooting-module/08-assessment-bank.md
- ../industrial-hvac-troubleshooting-module/12-georgia-mechanical-slide-script.md

## Part 1: Create The Course
1. Open Rise 360.
2. Select Create New.
3. Choose Course.
4. Enter the title: Georgia Mechanical: Industrial HVAC Electrical and Control Troubleshooting.
5. Add the course description:
   This self-paced Georgia Mechanical course teaches technicians how to diagnose HVAC no-start faults by tracing control voltage, checking safety strings, and separating BAS demand from actual equipment permission.
6. Save the course.

## Part 2: Set The Course Style
1. Open the course theme or settings area.
2. Apply Georgia Mechanical branding colors if available.
3. Use a clean industrial look with dark blue, steel gray, and white.
4. Set navigation style according to your delivery plan.
5. Confirm lesson labels are visible.

## Part 3: Create The Lesson Structure
Create five lessons with these exact names:

1. The BAS Says Run, But the Fan Is Off
2. Sequence and Safeties
3. Evidence Review
4. Diagnose and Correct
5. Final Check

## Part 4: Build Lesson 1

### Add Block 1
- Block type: Text on image
- Heading: The BAS Says Run, But the Fan Is Off
- Body text:
  The building automation system is calling for occupied airflow, but the supply fan never starts. Use the evidence to determine where the control path is broken.
- Media note: Use a rooftop unit image, BAS screenshot, or equipment illustration.

### Add Block 2
- Block type: Statement A
- Heading: Start with sequence, not parts
- Body text:
  Good technicians trace the expected control path before blaming a relay, contactor, or motor.

### Add Block 3
- Block type: Knowledge Check, Multiple Response
- Question:
  Which actions belong in the first stage of HVAC troubleshooting?
- Answers:
  - Confirm the BAS demand is present
  - Trace the control voltage path
  - Replace the contactor first
  - Check the safety string
- Mark correct:
  - Confirm the BAS demand is present
  - Trace the control voltage path
  - Check the safety string

## Part 5: Build Lesson 2

### Add Block 1
- Block type: Process
- Heading: Normal fan-start sequence
- Step 1: BAS requests occupied operation
- Step 2: Control transformer supplies control voltage
- Step 3: Safety string remains closed
- Step 4: Fan relay coil energizes
- Step 5: Fan contactor coil energizes
- Step 6: Fan motor starts

### Add Block 2
- Block type: Accordion
- Heading: Key HVAC safeties
- Item 1 title: Freezestat
- Item 1 body: Prevents coil freeze-up and can interrupt the safety string.
- Item 2 title: Overload protection
- Item 2 body: Protects the fan motor from damage.
- Item 3 title: Proof or airflow switch
- Item 3 body: Confirms expected airflow or device movement.
- Item 4 title: Guard or access interlock
- Item 4 body: Prevents unsafe operation during service.

### Add Block 3
- Block type: Labeled Graphic
- Heading: Trace the control path
- Suggested labels:
  - BAS call
  - Control transformer
  - Freezestat
  - Fan relay
  - Fan contactor coil
  - Supply fan motor

## Part 6: Build Lesson 3

### Add Block 1
- Block type: Table
- Heading: Available evidence
- Add these rows:
  - BAS occupied command | True | Demand exists
  - Control transformer secondary | 24 VAC | Control power source is healthy
  - Freezestat input | Open | Safety string is interrupted
  - Fan relay coil voltage | 0 VAC | Control path stops before relay
  - Fan contactor coil voltage | 0 VAC | Final start command never occurs

### Add Block 2
- Block type: Scenario
- Heading: What does the open freezestat change?
- Body text:
  The BAS demand is present, but the open freezestat prevents control voltage from reaching the fan relay and contactor coils.

### Add Block 3
- Block type: Knowledge Check, Multiple Choice
- Question:
  Which component is most directly blocking the fan-start sequence?
- Choices:
  - Fan motor overload reset healthy
  - Freezestat open
  - BAS occupied command true
  - Control transformer 24 VAC present
- Correct answer:
  - Freezestat open

## Part 7: Build Lesson 4

### Add Block 1
- Block type: Flashcards
- Heading: Ask the right question next
- Card 1 front: Where does control voltage stop?
- Card 1 back: It stops at the open freezestat in the safety string.
- Card 2 front: Is the relay bad?
- Card 2 back: Not yet proven. The relay coil never receives control voltage.
- Card 3 front: What should be corrected first?
- Card 3 back: Verify why the freezestat is open, then reset or replace it if appropriate.

### Add Block 2
- Block type: Process
- Heading: Corrective action sequence
- Step 1: Lock out the unit and verify safe access
- Step 2: Inspect conditions that triggered the freezestat
- Step 3: Reset or replace the device as needed
- Step 4: Confirm the safety string closes
- Step 5: Restart the unit and verify airflow

### Add Block 3
- Block type: Quote
- Quote text:
  A BAS command is only the request. The safety string decides whether the unit is allowed to start.

## Part 8: Build Lesson 5

### Add Block 1
- Block type: Knowledge Check, Multiple Choice
- Question:
  If 24 VAC is present at the transformer but 0 VAC is present at the relay coil, what is the best next conclusion?
- Choices:
  - The motor is failed
  - The control path is interrupted upstream of the relay coil
  - The BAS is offline
  - The unit is mechanically jammed
- Correct answer:
  - The control path is interrupted upstream of the relay coil

### Add Block 2
- Block type: Continue Block
- Heading: Transfer the method
- Body text:
  This same process applies to chillers and conveyors: verify the demand, trace the permissive chain, find where the signal stops, correct the root cause, and verify stable operation.

## Part 9: Set Completion Rules
1. Open course settings.
2. Require all lessons to be viewed.
3. Require knowledge checks to be completed.
4. If scoring is enabled in your configuration, use an 80 percent pass target.

## Part 10: Review Before Publish
1. Preview the entire course.
2. Test each knowledge check.
3. Check the mobile preview.
4. Confirm branding is consistent with Georgia Mechanical.
5. Publish the course for Reach delivery.

## Part 11: After Publish
1. Upload the published package into Reach.
2. Apply the course title and description consistently.
3. Add it to the Georgia Mechanical Technical Troubleshooting Academy learning path.
4. Run one pilot learner test before assigning broadly.