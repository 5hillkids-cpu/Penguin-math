# Virtual Lab Exercise

## Lab Title
Conveyor 3 Will Not Restart After Jam Clear

## Lab Purpose
Apply a structured troubleshooting method to determine why a PLC-controlled conveyor remains stopped after a jam-clear event.

## System Background
Conveyor 3 moves boxed product from a cartoner to a case packer. The conveyor motor is controlled by a PLC output through a motor starter. The run command requires these permissives:

- E-stop circuit healthy
- Guard door closed
- Overload relay reset
- Auto mode selected
- Downstream ready signal true
- Jam clear photoeye true

## Starting Conditions
- Power is available to the panel.
- HMI shows Auto mode enabled.
- Operator states the jam has been physically removed.
- Start button request appears to register at the HMI.
- Conveyor does not run.

## Available Observations and Data
| Item | Status |
| --- | --- |
| HMI line status | Ready |
| Start command bit | True when button pressed |
| Jam clear photoeye input | False |
| Overload healthy input | True |
| Guard closed input | True |
| PLC run output | False |
| Voltage at motor starter coil | 0 VAC when Start pressed |
| Mechanical condition | No visible product obstruction |

## Learner Tasks
1. State the symptom in one sentence.
2. Identify which permissive is blocking the run sequence.
3. Decide whether the fault is most likely electrical, controls, instrumentation, or mechanical.
4. List the next two diagnostic actions.
5. Name the root cause.
6. Recommend a corrective action and restart verification steps.

## Decision Points

### Decision Point 1
The Start command reaches the PLC, but the run output remains off. What does that tell you?

Expected reasoning: The problem is upstream of the output command, meaning a permissive or logic condition is preventing the PLC from issuing the run signal.

### Decision Point 2
The jam clear photoeye input remains false even though the path looks clear. What should you verify next?

Expected reasoning: Check photoeye alignment, lens contamination, wiring integrity, and physical bracket position before assuming a PLC program problem.

### Decision Point 3
You discover the photoeye bracket shifted during jam removal, and the beam no longer aligns. What is the root cause category?

Expected reasoning: Instrumentation or field-device alignment issue causing a false conveyor-not-clear condition.

## Root Cause
The jam clear photoeye was mechanically bumped out of alignment during the jam event, leaving the PLC jam-clear permissive false.

## Corrective Action
- Realign the photoeye bracket
- Verify sensor indication changes state correctly
- Confirm PLC input changes from false to true
- Restart conveyor using standard procedure

## Verification Steps
1. Confirm jam clear input is true at the PLC.
2. Press Start and verify PLC run output energizes.
3. Confirm starter or drive receives command.
4. Observe conveyor movement and stable operation for two minutes.

## Instructor Answer Key
- Blocked permissive: Jam clear photoeye input
- Fault domain: Instrumentation with mechanical disturbance
- Why output stayed off: PLC logic never received all required permissives
- Best corrective action: Realign and verify sensor, then test restart