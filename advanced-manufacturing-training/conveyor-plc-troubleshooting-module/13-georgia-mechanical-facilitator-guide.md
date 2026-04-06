# Georgia Mechanical Facilitator Guide

## Module
Conveyor System Electrical and PLC Troubleshooting

## Delivery Snapshot
- Audience: Maintenance technicians, mechatronics apprentices, line support technicians
- Recommended duration: 4.5 hours
- Delivery mode: Instructor-led classroom or lab-supported session
- Training standard: Georgia Mechanical evidence-based troubleshooting method

## Required Materials
- Conveyor schematic and I/O list
- PLC screenshot or simulator view
- Multimeter or mock meter readings
- Learner workbook
- Slide deck or slide script
- Virtual lab handout

## Facilitation Goals
1. Build sequence-of-operation discipline.
2. Prevent part-swapping habits.
3. Make learners justify each conclusion with evidence.
4. Reinforce safe restart verification.

## Timed Delivery Plan

### Segment 1: Open and Frame the Job, 15 minutes
- Facilitator action: Introduce Georgia Mechanical troubleshooting standard.
- Talking point: Downtime pressure makes weak diagnostic habits worse.
- Transition line: "Before we fix anything, we need to agree on what the system should be doing next."
- Activity: Quick pair-share on the most common conveyor troubleshooting mistake learners have seen.

### Segment 2: Sequence of Operation Walkthrough, 35 minutes
- Facilitator action: Walk slide-by-slide through the normal start sequence.
- Talking point: Sequence knowledge is the fastest path to the right fault zone.
- Check for understanding: Ask learners to name the step immediately before the PLC run output.
- Transition line: "Now that we know the normal path, we can recognize exactly where it breaks."

### Segment 3: Permissives and Fault Zones, 35 minutes
- Facilitator action: Review all required permissives and the three-zone diagnostic model.
- Talking point: One missing permissive should stop the entire run command.
- Activity: Learners classify example faults into input-side, logic-side, or output-side.
- Transition line: "Next we will apply that structure to a real failure case."

### Segment 4: Scenario Evidence Review, 40 minutes
- Facilitator action: Reveal the scenario evidence one clue at a time.
- Talking point: Strong technicians do not rush past evidence that already narrows the problem.
- Activity: After each clue, ask learners what it rules out.
- Transition line: "We now have enough evidence to decide whether the PLC is the problem or whether the PLC is behaving correctly."

### Segment 5: Guided Diagnosis and Root Cause, 35 minutes
- Facilitator action: Lead learners to the jam-clear photoeye diagnosis.
- Talking point: The PLC withheld the output correctly because one permissive never returned true.
- Activity: Learners write a two-sentence root cause statement using evidence.
- Transition line: "A diagnosis is incomplete until the repair and verification steps are just as clear."

### Segment 6: Corrective Action and Verification, 25 minutes
- Facilitator action: Model lockout, inspection, alignment, input verification, and restart logic.
- Talking point: Verification is part of repair quality.
- Activity: Learners sequence the corrective steps on paper or board.
- Transition line: "Now let’s see whether you can apply the same method independently."

### Segment 7: Workbook and Virtual Lab, 55 minutes
- Facilitator action: Shift learners into workbook completion and virtual lab.
- Talking point: The answer matters less than the reasoning path used to get there.
- Activity: Individual completion followed by partner compare.
- Coaching prompt: "Which data point gives you the strongest reason to move to the next step?"

### Segment 8: Debrief and Close, 20 minutes
- Facilitator action: Review common wrong turns and summarize the Georgia Mechanical method.
- Talking point: Confirm symptom, review sequence, identify missing condition, verify with data, correct cause, verify restart.
- Exit prompt: Ask each learner to describe what would change if the PLC output were true.

## Instructor Notes
- Do not let learners call the photoeye root cause too early.
- Keep distinguishing symptom, clue, diagnosis, and correction.
- Push for better language when learners say "the PLC is bad" without evidence.

## Success Indicators
- Learners can identify the blocked permissive without guessing.
- Learners explain why the starter is not the first confirmed fault.
- Learners include restart verification in their repair plan.