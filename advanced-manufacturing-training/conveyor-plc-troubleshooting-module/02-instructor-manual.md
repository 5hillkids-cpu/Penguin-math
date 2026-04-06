# Instructor Manual

## Lesson Intent
This module prepares maintenance learners to troubleshoot a PLC-controlled conveyor using a repeatable diagnostic process rather than guesswork. Instruction emphasizes safe isolation, sequence-of-operation reasoning, input and output verification, and cross-checking electrical and mechanical evidence.

## Audience and Skill Level
- Intended audience: Entry-level to intermediate industrial maintenance technicians
- Recommended class size: 8 to 16 learners
- Skill assumption: Learners can identify common electrical components and perform basic meter checks

## Instructor Preparation Checklist
- Review the conveyor sequence of operation and fault scenario before class.
- Confirm the trainer, simulator, or diagrams match the I/O references used in the workbook.
- Prepare one normal-state printout and one fault-state printout of the PLC I/O table.
- Verify multimeters, mock HMI screens, and ladder logic screenshots are available.
- Stage the jam sensor, motor overload, and start permissive fault examples.

## Tools, Materials, and Media
- Conveyor system schematic and ladder diagram
- PLC I/O list and tag descriptions
- HMI screenshots or emulator
- Multimeter and clamp meter
- Motor starter or VFD wiring diagram
- Jam sensor or photoeye reference data
- Whiteboard or digital annotation tool

## Safety Briefing Points
- Troubleshooting speed never outranks electrical safety.
- De-energized verification is required before resistance checks or component replacement.
- Learners must identify what can and cannot be tested energized.
- Mechanical jams can store energy even when motors are stopped.

## Instructional Flow With Timing
1. Module opener and job relevance, 15 minutes
2. Conveyor sequence of operation review, 30 minutes
3. PLC inputs, outputs, and permissives walkthrough, 35 minutes
4. Instrumentation and field device checks, 25 minutes
5. Guided troubleshooting demonstration, 35 minutes
6. Learner workbook task, 30 minutes
7. Virtual lab exercise, 45 minutes
8. Debrief and knowledge check, 15 minutes

## Key Technical Talking Points
- A conveyor start command typically requires both operator request and permissive conditions.
- PLC output failure symptoms differ from field power loss symptoms.
- An input can appear physically healthy while still failing logically due to wiring, alignment, or program condition.
- Overload reset, jam-clear logic, and drive-ready status often sit in the same failure chain.
- Good troubleshooters verify sequence state before replacing components.

## Demonstration Steps
1. Show the normal start sequence from operator pushbutton to motor run confirmation.
2. Identify the critical permissives: E-stop healthy, overload reset, guard closed, jam cleared, drive ready, and auto mode selected.
3. Introduce the fault where jam clear has occurred mechanically but the jam sensor input remains false.
4. Model the troubleshooting sequence: verify symptom, review HMI, check PLC input state, test field device, confirm wiring continuity, correct the issue, and restart safely.

## Common Misconceptions
- Learners may assume a motor problem whenever a conveyor does not run.
- Some learners will jump straight to the PLC program before checking field devices.
- Others may confuse a commanded output with an energized output at the device.
- Learners may treat all sensors as binary hardware checks instead of system-state contributors.

## Coaching Prompts
- What condition must be true before the PLC will issue a run command?
- Which evidence tells you whether the problem is before the PLC, inside the logic, or after the PLC output?
- What changed after the jam event, and how would that appear in the input table?
- What measurement would confirm your next decision?

## Check-for-Understanding Questions
1. Why is reviewing the sequence of operation often the fastest troubleshooting step?
2. What is the difference between an input fault and a permissive not satisfied?
3. If the PLC output is on but the motor contactor does not energize, where should the next checks occur?
4. Why should a jam-clear event be checked both mechanically and logically?

## Lab Facilitation Notes
- Encourage learners to document every observation before naming a root cause.
- Ask learners to distinguish symptoms from conclusions.
- Require them to cite at least two data points before recommending part replacement.

## Debrief Questions
1. Which clue narrowed the fault fastest?
2. What would have happened if you had skipped the input verification step?
3. How would the same fault look different on a VFD-driven conveyor versus a motor starter circuit?

## Expected Outcome
Learners should conclude that the conveyor failed to restart because the jam-cleared permissive never returned true at the PLC due to a misaligned photoeye bracket, not because of motor or PLC hardware failure.