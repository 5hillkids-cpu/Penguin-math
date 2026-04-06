# Rise Production Script

## Course Title
Industrial HVAC Electrical and Control Troubleshooting

## Course Description
This Rise course trains learners to isolate HVAC no-start faults by tracing sequence of operation, control voltage, safety-string state, and relay logic. The scenario centers on a supply fan that does not start despite a BAS command.

## Course Settings Recommendation
- Theme: Industrial technical theme with neutral backgrounds and strong contrast
- Estimated duration: 20 to 25 minutes
- Completion: View all blocks and pass final check at 80 percent

## Lesson 1: The Problem Call

### Block 1
- Rise block type: Text on image
- Heading: The BAS Says Run, But the Fan Is Off
- Body copy: The building automation system is calling for occupied airflow, but the supply fan never starts. Use the evidence to determine where the control path is broken.
- Media direction: Rooftop air handler image with BAS overlay

### Block 2
- Rise block type: Statement A
- Heading: Start with sequence, not parts
- Body copy: Good technicians trace the expected control path before blaming a relay, contactor, or motor.

### Block 3
- Rise block type: Knowledge check, multiple response
- Question: Which actions belong in the first stage of HVAC troubleshooting?
- Choices:
  - Confirm the BAS demand is present
  - Trace the control voltage path
  - Replace the contactor first
  - Check the safety string
- Correct answers: Confirm the BAS demand is present; Trace the control voltage path; Check the safety string

## Lesson 2: Sequence and Safeties

### Block 4
- Rise block type: Process
- Heading: Normal fan-start sequence
- Steps:
  1. BAS requests occupied operation
  2. Control transformer supplies control voltage
  3. Safety string remains closed
  4. Fan relay coil energizes
  5. Fan contactor coil energizes
  6. Fan motor starts

### Block 5
- Rise block type: Accordion
- Heading: Key HVAC safeties
- Items:
  - Freezestat: Prevents coil freeze-up
  - Overload protection: Stops motor damage
  - Proof or airflow switch: Confirms expected air movement
  - Guard or access interlock: Prevents unsafe operation during service

### Block 6
- Rise block type: Labeled graphic
- Heading: Trace the control path
- Label guidance:
  - BAS call
  - Control transformer
  - Freezestat
  - Fan relay
  - Fan contactor coil
  - Supply fan motor

## Lesson 3: Evidence Review

### Block 7
- Rise block type: Table
- Heading: Available evidence
- Columns: Item, Status, Meaning
- Rows:
  - BAS occupied command, True, Demand exists
  - Control transformer secondary, 24 VAC, Control power source is healthy
  - Freezestat input, Open, Safety string is interrupted
  - Fan relay coil voltage, 0 VAC, Control path stops before relay
  - Fan contactor coil voltage, 0 VAC, Final start command never occurs

### Block 8
- Rise block type: Scenario
- Heading: What does the open freezestat change?
- Body copy: The BAS demand is present, but the open freezestat prevents control voltage from reaching the fan relay and contactor coils.

### Block 9
- Rise block type: Knowledge check, multiple choice
- Question: Which component is most directly blocking the fan-start sequence?
- Choices:
  - Fan motor overload reset healthy
  - Freezestat open
  - BAS occupied command true
  - Control transformer 24 VAC present
- Correct answer: Freezestat open

## Lesson 4: Diagnose and Correct

### Block 10
- Rise block type: Flashcards
- Heading: Ask the right question next
- Cards:
  - Front: Where does control voltage stop?
    Back: It stops at the open freezestat in the safety string.
  - Front: Is the relay bad?
    Back: Not yet proven. The relay coil never receives control voltage.
  - Front: What should be corrected first?
    Back: Verify why the freezestat is open, then reset or replace it if appropriate.

### Block 11
- Rise block type: Process
- Heading: Corrective action sequence
- Steps:
  1. Lock out the unit and verify safe access
  2. Inspect conditions that triggered the freezestat
  3. Reset or replace the device as needed
  4. Confirm the safety string closes
  5. Restart the unit and verify airflow

### Block 12
- Rise block type: Quote
- Body copy: A BAS command is only the request. The safety string decides whether the unit is allowed to start.

## Lesson 5: Final Check

### Block 13
- Rise block type: Knowledge check, multiple choice
- Question: If 24 VAC is present at the transformer but 0 VAC is present at the relay coil, what is the best next conclusion?
- Choices:
  - The motor is failed
  - The control path is interrupted upstream of the relay coil
  - The BAS is offline
  - The unit is mechanically jammed
- Correct answer: The control path is interrupted upstream of the relay coil

### Block 14
- Rise block type: Continue block
- Heading: Transfer the method
- Body copy: This same process applies to chillers and conveyors: verify the demand, trace the permissive chain, find where the signal stops, correct the root cause, and verify stable operation.

## Build Notes
- Replace generic BAS labels with site-specific points where available.
- Add alt text to diagrams and screenshots.
- If using Storyline instead of Rise, convert the evidence table into a clickable diagnostic panel with layered feedback.