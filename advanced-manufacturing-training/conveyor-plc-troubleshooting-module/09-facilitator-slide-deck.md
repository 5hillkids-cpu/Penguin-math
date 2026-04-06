# Facilitator Slide Deck

## Module Title
Conveyor System Electrical and PLC Troubleshooting

## Slide 1: Title Slide
- Title: Conveyor System Electrical and PLC Troubleshooting
- Subtitle: Sequence-Based Fault Isolation for Maintenance Technicians
- Presenter note: Open with the cost of downtime and the risk of guessing under pressure.

## Slide 2: Learning Objectives
- Explain conveyor sequence of operation
- Identify critical permissives and interlocks
- Diagnose no-restart faults using PLC and field evidence
- Verify corrective action safely
- Presenter note: Tell learners the goal is disciplined troubleshooting, not memorizing a single fault.

## Slide 3: Why Conveyors Fail to Restart
- Start request not reaching PLC
- Missing permissive
- Output command not issued
- Output device or field power failure
- Mechanical or sensor issue
- Presenter note: Emphasize that the same symptom can originate in different zones.

## Slide 4: Normal Start Sequence
- Operator presses Start
- PLC sees request
- Permissives are checked
- Run output energizes
- Starter or drive commands motor
- Conveyor movement confirms operation
- Presenter note: Walk the learners through the sequence slowly and make them say what must be true before each step.

## Slide 5: Critical Permissives
- E-stop healthy
- Guard closed
- Overload healthy
- Auto mode selected
- Downstream ready
- Jam clear true
- Presenter note: Point out that one missing permissive stops the whole chain.

## Slide 6: Fault Zones
- Input side
- Logic or permissive side
- Output side
- Presenter note: This framing helps learners avoid wandering randomly through the machine.

## Slide 7: Scenario Evidence
- HMI line status: Ready
- Start command bit: True
- Jam clear input: False
- Overload healthy: True
- Run output: False
- Starter coil voltage: 0 VAC
- Presenter note: Ask learners which clue narrows the problem fastest.

## Slide 8: Root Cause Analysis
- Jam clear photoeye remained false
- Photoeye bracket shifted during jam removal
- PLC correctly withheld run output
- Presenter note: Separate symptom, evidence, and cause explicitly.

## Slide 9: Corrective Action
- Lock out equipment
- Realign photoeye
- Verify sensor state change
- Confirm PLC input returns true
- Restart and observe stable run
- Presenter note: Stress that verification is part of the repair.

## Slide 10: Transfer to the Job
- Apply the same six-step process to conveyors, HVAC units, and chillers
- Presenter note: End by reinforcing the universal troubleshooting pattern.