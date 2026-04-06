# Virtual Lab Exercise

## Lab Title
Rooftop Air Handler Supply Fan Will Not Start

## System Background
An industrial rooftop air handler receives a BAS command for occupied mode. The unit should open dampers, prove safeties, energize the fan relay, and start the supply fan. The fan remains off.

## Available Data
| Item | Status |
| --- | --- |
| BAS occupied command | True |
| Control transformer secondary | 24 VAC |
| Freezestat input | Open |
| Fan relay coil voltage | 0 VAC |
| Fan contactor coil voltage | 0 VAC |
| Motor overload reset | Healthy |
| Mechanical fan condition | Spins freely by hand during lockout |

## Learner Tasks
1. Define the symptom.
2. Identify which part of the control path is open.
3. Name the most likely root cause.
4. Recommend the next verification step.
5. State the corrective action.

## Root Cause
The freezestat remained open after a cold-weather trip, interrupting the control circuit and preventing the fan relay and contactor from energizing.

## Corrective Action
- Verify conditions that caused the trip are cleared.
- Reset or replace the failed freezestat as required.
- Confirm the safety string closes and the control path restores.
- Restart the unit and observe stable airflow.

## Instructor Answer Key
- Fault domain: Control safety circuit
- Blocking point: Freezestat in series safety string
- Why the fan remained off: No control voltage reached the fan relay or contactor coil