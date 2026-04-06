# HVAC Rise Copy-Paste Outline

## Course Title
Georgia Mechanical: Industrial HVAC Electrical and Control Troubleshooting

## Course Description
This self-paced Georgia Mechanical course teaches technicians how to diagnose HVAC no-start faults by tracing control voltage, checking safety strings, and separating BAS demand from actual equipment permission.

## Lesson 1: The BAS Says Run, But the Fan Is Off

### Intro Text On Image
The building automation system is calling for occupied airflow, but the supply fan never starts. Use the evidence to determine where the control path is broken.

### Statement Block
Good technicians trace the expected control path before blaming a relay, contactor, or motor.

### Knowledge Check
Question: Which actions belong in the first stage of HVAC troubleshooting?

Choices:
- Confirm the BAS demand is present
- Trace the control voltage path
- Replace the contactor first
- Check the safety string

Correct answers:
- Confirm the BAS demand is present
- Trace the control voltage path
- Check the safety string

## Lesson 2: Sequence and Safeties

### Process Block Steps
1. BAS requests occupied operation
2. Control transformer supplies control voltage
3. Safety string remains closed
4. Fan relay coil energizes
5. Fan contactor coil energizes
6. Fan motor starts

### Accordion Block
Item 1: Freezestat
Prevents coil freeze-up and can interrupt the safety string.

Item 2: Overload protection
Protects the fan motor from damage.

Item 3: Proof or airflow switch
Confirms expected airflow or device movement.

Item 4: Guard or access interlock
Prevents unsafe operation during service.

### Labeled Graphic
Labels:
- BAS call
- Control transformer
- Freezestat
- Fan relay
- Fan contactor coil
- Supply fan motor

## Lesson 3: Evidence Review

### Table Block
Item | Status | Meaning
BAS occupied command | True | Demand exists
Control transformer secondary | 24 VAC | Control power source is healthy
Freezestat input | Open | Safety string is interrupted
Fan relay coil voltage | 0 VAC | Control path stops before relay
Fan contactor coil voltage | 0 VAC | Final start command never occurs

### Scenario Text
The BAS demand is present, but the open freezestat prevents control voltage from reaching the fan relay and contactor coils.

### Knowledge Check
Question: Which component is most directly blocking the fan-start sequence?

Choices:
- Fan motor overload reset healthy
- Freezestat open
- BAS occupied command true
- Control transformer 24 VAC present

Correct answer:
- Freezestat open

## Lesson 4: Diagnose and Correct

### Flashcards
Front: Where does control voltage stop?
Back: It stops at the open freezestat in the safety string.

Front: Is the relay bad?
Back: Not yet proven. The relay coil never receives control voltage.

Front: What should be corrected first?
Back: Verify why the freezestat is open, then reset or replace it if appropriate.

### Process Block Steps
1. Lock out the unit and verify safe access
2. Inspect conditions that triggered the freezestat
3. Reset or replace the device as needed
4. Confirm the safety string closes
5. Restart the unit and verify airflow

### Quote Block
A BAS command is only the request. The safety string decides whether the unit is allowed to start.

## Lesson 5: Final Check

### Knowledge Check
Question: If 24 VAC is present at the transformer but 0 VAC is present at the relay coil, what is the best next conclusion?

Choices:
- The motor is failed
- The control path is interrupted upstream of the relay coil
- The BAS is offline
- The unit is mechanically jammed

Correct answer:
- The control path is interrupted upstream of the relay coil

### Continue Block
This same process applies to chillers and conveyors: verify the demand, trace the permissive chain, find where the signal stops, correct the root cause, and verify stable operation.

## Completion Recommendation
- Require all lessons to be viewed.
- Require the final knowledge checks to be completed.
- Set passing threshold at 80 percent if your Reach configuration supports scored completion.