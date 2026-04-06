# Virtual Lab Exercise

## Lab Title
Chiller Compressor Locked Out on Low Evaporator Temperature

## System Background
The chilled-water system is calling for cooling. Pumps are running, and the BAS indicates demand. The chiller controller refuses compressor enable and shows a low evaporator temperature lockout.

## Available Data
| Item | Status |
| --- | --- |
| Cooling demand | True |
| Pump proof | True |
| Flow proof | True |
| Leaving-water temperature sensor | 33.0 F |
| Independent handheld water measurement | 44.8 F |
| Controller alarm history | Low evaporator temperature lockout |
| Compressor enable output | False |

## Learner Tasks
1. State the symptom.
2. Identify which reading does not fit the rest of the evidence.
3. Decide whether the controller logic is acting correctly on the data it sees.
4. Name the most likely root cause.
5. Recommend corrective action and restart verification.

## Root Cause
The leaving-water temperature sensor is biased low or failed, causing the controller to interpret a freeze-risk condition and lock out the compressor.

## Corrective Action
- Verify sensor wiring and measured resistance or signal value.
- Replace or recalibrate the faulty sensor as appropriate.
- Clear lockout only after confirming realistic temperature input.
- Restart the chiller and monitor stable operation.

## Instructor Answer Key
- Fault domain: Instrumentation and control input validation
- Why compressor enable stayed off: Protective logic blocked restart based on low reported temperature
- Correct reasoning: Controller behavior was correct given the false data presented to it