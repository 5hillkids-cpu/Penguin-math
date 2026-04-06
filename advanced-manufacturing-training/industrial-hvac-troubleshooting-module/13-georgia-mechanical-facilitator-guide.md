# Georgia Mechanical Facilitator Guide

## Module
Industrial HVAC Electrical and Control Troubleshooting

## Delivery Snapshot
- Audience: HVAC technicians, maintenance technicians, facilities support personnel
- Recommended duration: 5 hours
- Delivery mode: Instructor-led technical training
- Training standard: Georgia Mechanical control-path troubleshooting method

## Required Materials
- HVAC schematic and sequence-of-operation document
- BAS screenshots or emulator
- Control voltage examples
- Learner workbook
- Slide deck or slide script
- Virtual lab materials

## Facilitation Goals
1. Separate demand from permission and final command.
2. Build comfort tracing low-voltage control paths.
3. Reduce unnecessary contactor and motor replacement.
4. Reinforce safe handling of safety-string devices.

## Timed Delivery Plan

### Segment 1: Job Framing, 15 minutes
- Facilitator action: Open with a BAS-call-no-fan-start scenario.
- Talking point: A BAS request is not proof the equipment is allowed to run.
- Transition line: "First we need to understand what should happen between the BAS request and motor startup."

### Segment 2: Sequence of Operation, 35 minutes
- Facilitator action: Walk through BAS command, control transformer, safety string, relay coil, and contactor sequence.
- Activity: Learners say which component acts next.
- Transition line: "Now let’s identify what can interrupt that path."

### Segment 3: Safety String Review, 35 minutes
- Facilitator action: Explain freezestat, airflow proof, overload, and access interlocks.
- Talking point: An open safety is a diagnostic clue, not just a nuisance.
- Activity: Learners label each device as protection, permissive, or feedback.
- Transition line: "With the path and safeties defined, we can trace the actual fault."

### Segment 4: Scenario Evidence Review, 40 minutes
- Facilitator action: Reveal BAS command true, 24 VAC present, freezestat open, relay coil 0 VAC.
- Talking point: Control power exists, but it does not reach the relay coil.
- Activity: Ask learners what has been ruled out already.
- Transition line: "Now we can decide whether the relay is truly suspect or simply starved of voltage."

### Segment 5: Root Cause Logic, 35 minutes
- Facilitator action: Lead learners to the open freezestat diagnosis.
- Talking point: The control path is interrupted upstream of the relay.
- Activity: Learners write a short justification using the scenario evidence.
- Transition line: "A strong diagnosis still needs a safe response plan."

### Segment 6: Corrective Action and Restart, 25 minutes
- Facilitator action: Model safe inspection, reset or replacement logic, and airflow verification.
- Talking point: A reset without understanding cause creates repeat trips.
- Activity: Small-group sequencing of repair and verification steps.
- Transition line: "Next you will apply this process with less instructor support."

### Segment 7: Workbook and Virtual Lab, 55 minutes
- Facilitator action: Release learners into workbook and lab task.
- Coaching prompt: "Where exactly does the signal stop, and what measurement proves it?"

### Segment 8: Debrief and Close, 20 minutes
- Facilitator action: Review common wrong turns.
- Close line: "At Georgia Mechanical, we do not replace downstream hardware until the upstream control path proves it should have been energized."

## Instructor Notes
- Keep learners from collapsing BAS demand into full equipment permission.
- Make them explain why the motor is not the first proven failure.
- Reinforce that low-voltage circuits still demand disciplined troubleshooting.

## Success Indicators
- Learners trace the control path accurately.
- Learners identify the freezestat as the blocking device.
- Learners propose a safe verification-based restart.