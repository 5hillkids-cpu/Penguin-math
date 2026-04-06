# Detailed Lesson Plan

## Lesson Information
- Title: Conveyor System Electrical and PLC Troubleshooting
- Duration: 4.5 hours
- Delivery mode: Instructor-led technical training with digital reinforcement

## Competencies Addressed
- Interpret conveyor control sequences and ladder logic conditions.
- Verify PLC inputs and outputs against field conditions.
- Troubleshoot industrial faults using electrical, control, and mechanical evidence.

## Learning Objectives
Learners will:

1. Describe the normal operating sequence of a PLC-controlled conveyor.
2. Identify common conveyor permissives, interlocks, and fault sources.
3. Use a structured troubleshooting process to isolate a failed restart condition.
4. Document findings and justify a corrective action.

## Vocabulary and Technical Terms
- Permissive
- Interlock
- Discrete input
- Discrete output
- Photoeye
- Overload relay
- Motor contactor
- Drive ready
- Jam condition
- Sequence of operation

## Materials Required
- Printed workbook
- Conveyor schematic and I/O list
- PLC tag table or screenshots
- Metering tools
- Scenario sheet and answer key

## Lesson Opener
Present this problem statement: “The operator cleared a product jam, reset the line, and the HMI now shows the conveyor as ready. Pressing Start does nothing. Production is waiting. Where do you begin?”

Ask learners to write their first three diagnostic checks before any discussion.

## Instructional Sequence

### Phase 1: System Orientation, 30 minutes
- Review conveyor components: motor, starter or drive, jam sensor, start circuit, PLC input and output points, and HMI status.
- Walk through the sequence of operation.
- Check for understanding: Have learners identify which conditions must be true before run output energizes.

### Phase 2: Control Logic and Field Devices, 45 minutes
- Map field devices to PLC inputs.
- Show how the PLC output controls the motor starter or drive run signal.
- Compare three failure locations: input side, logic side, and output side.
- Check for understanding: Learners classify sample faults by failure location.

### Phase 3: Guided Troubleshooting Model, 45 minutes
- Instructor demonstrates the structured diagnostic approach.
- Learners watch symptom verification, HMI review, input table review, meter checks, and root cause confirmation.
- Check for understanding: Learners explain why the instructor chose each next step.

### Phase 4: Workbook Practice, 30 minutes
- Learners complete guided notes and a fault-analysis table.
- Pairs compare their logic chain and missing evidence.
- Check for understanding: Learners identify whether they have enough evidence to name a root cause.

### Phase 5: Virtual Lab, 45 minutes
- Learners work through the jam-clear failure scenario.
- Instructor circulates and challenges unsupported assumptions.
- Check for understanding: Learners submit final diagnosis, correction, and verification steps.

### Phase 6: Debrief and Assessment, 15 minutes
- Review common wrong turns.
- Administer short exit assessment.
- Connect lesson to live production equipment.

## Assessment Method
- Formative: Oral questioning, diagram labeling, and troubleshooting-log completion
- Summative: 8-question knowledge check plus virtual lab rubric

## Wrap-Up Prompt
Ask learners: “What evidence separates a failed input device from a PLC logic issue when both create the same symptom of no conveyor restart?”