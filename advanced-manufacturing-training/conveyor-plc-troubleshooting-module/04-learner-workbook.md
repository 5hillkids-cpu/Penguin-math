# Learner Workbook

## Lesson Title
Conveyor System Electrical and PLC Troubleshooting

## Learning Goals
By the end of this lesson, you should be able to explain the conveyor start sequence, verify input and output status, and isolate a no-restart fault using evidence instead of guesswork.

## Key Terms Table
| Term | Meaning in this system |
| --- | --- |
| Permissive | A required condition that must be true before the conveyor can run |
| Interlock | A condition that prevents unsafe or incorrect operation |
| PLC input | A field signal the controller reads |
| PLC output | A command the controller sends to a device |
| Jam sensor | Device that reports blocked or backed-up product |
| Overload relay | Protective device that trips during overcurrent conditions |

## Guided Notes
Complete the missing details during instruction.

1. The conveyor run command starts with an operator ________.
2. Before the PLC energizes the run output, all required ________ must be true.
3. If the PLC output is on but the motor does not run, the fault is likely on the ________ side of the system.
4. A misaligned photoeye may create a ________ symptom even after the physical jam is removed.

## Component Mapping
| Device | Function | PLC Tag | Normal State |
| --- | --- | --- | --- |
| Start pushbutton | Requests conveyor run | PB_Start | Off until pressed |
| Jam clear photoeye | Confirms product path is clear | PE_JamClear | On when aligned and clear |
| Overload auxiliary | Reports motor overload healthy status | OL_OK | On when reset |
| Conveyor run output | Commands starter or drive | DO_Conv3_Run | On during run |

## Data Collection Table
| Check | Observation | What it means |
| --- | --- | --- |
| HMI status |  |  |
| Jam clear input |  |  |
| Overload status |  |  |
| Run output status |  |  |
| Voltage at output device |  |  |

## Troubleshooting Log
1. Write the reported symptom.
2. List the first three checks you performed.
3. Record which permissive was not satisfied.
4. Explain how you verified the fault.
5. Describe the corrective action.
6. State how you confirmed normal operation returned.

## Practice Questions
1. Why is “conveyor will not start” only a symptom and not a root cause?
2. What PLC evidence would show that the start request reached the controller?
3. If the overload relay is tripped, what two places might show that condition?
4. How can a sensor be physically intact but still cause a logic fault?

## Reflection Prompt
Which troubleshooting step felt most reliable to you, and which step do you usually skip too quickly in real work?

## Exit Ticket
In 3 to 5 sentences, explain how you would prove whether a no-restart fault is caused by a missing input permissive or a failed output device.