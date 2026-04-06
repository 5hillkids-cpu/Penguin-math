# Storyline Scene Script

## Module Title
Georgia Mechanical: Industrial HVAC Electrical and Control Troubleshooting

## Scene 1: Service Call Introduction
- Slide title: BAS Calls for Air, But the Fan Is Off
- On-screen elements: Rooftop unit image, BAS status panel, service request text
- Narration: "A Georgia Mechanical technician receives a call that the building automation system is commanding occupied airflow, but the supply fan has not started. Diagnose the fault using control logic and field evidence."
- Trigger notes: Continue button enabled after narration completes.

## Scene 2: Sequence Map
- Slide title: What Must Happen Before the Fan Starts?
- Interaction: Learner clicks sequence elements in order: BAS command, control transformer, safety string, fan relay, contactor coil, motor
- Correct feedback: "Correct. The request must become a permitted control path before the motor can run."
- Incorrect feedback: "Review the control path. Which device provides control power before the safety string matters?"

## Scene 3: Safety String Explorer
- Slide title: Which Devices Can Stop the Start Sequence?
- On-screen elements: Freezestat, airflow proof, overload, access interlock
- Interaction: Learner clicks each device for definition and role
- Variable notes: Set SafetyReviewComplete to True after all hotspots opened

## Scene 4: Diagnostic Data Panel
- Slide title: Review the Evidence
- Data displayed:
  - BAS command = True
  - Control transformer secondary = 24 VAC
  - Freezestat = Open
  - Fan relay coil voltage = 0 VAC
  - Contactor coil voltage = 0 VAC
- Interaction: Hotspots reveal "What this means" layers

## Scene 5: Decision Point
- Slide title: Where Does the Signal Stop?
- Choices:
  - At the motor
  - At the contactor only
  - In the safety or control path
- Correct answer: In the safety or control path
- Feedback correct: "Correct. Control power exists, but it is not reaching the relay coil."
- Feedback incorrect: "Look again at what has already been proven healthy."

## Scene 6: Root Cause Challenge
- Slide title: Which Device Is Blocking Start?
- Choices:
  - Failed fan motor
  - Freezestat open
  - Broken BAS graphics page
  - Worn fan belt only
- Correct answer: Freezestat open
- Feedback correct: "Correct. The safety string is interrupted at the freezestat."
- Feedback incorrect: "Revisit which device sits in the control path before the relay coil."

## Scene 7: Corrective Action Builder
- Slide title: Put the Response in Order
- Drag-and-drop order:
  1. Lock out the unit
  2. Inspect the condition that triggered the freezestat
  3. Reset or replace the device as appropriate
  4. Confirm the safety path closes
  5. Restart and verify airflow

## Scene 8: Final Knowledge Check
- Slide title: What Does 24 VAC at the Transformer Prove?
- Question: If 24 VAC is present at the transformer but 0 VAC is present at the relay coil, what is the best conclusion?
- Choices:
  - The control path is interrupted upstream of the relay
  - The motor must be failed
  - The BAS is definitely offline
- Correct answer: The control path is interrupted upstream of the relay

## Scene 9: Completion
- Slide title: Georgia Mechanical Troubleshooting Standard
- On-screen text: Confirm demand. Trace the path. Find the missing condition. Verify with data. Correct the cause. Confirm the restart.
- Narration: "This is the Georgia Mechanical standard for HVAC troubleshooting: no guessing, no unnecessary part swaps, and no resets without evidence."

## Suggested Variables and Triggers
- Variables:
  - SafetyReviewComplete
  - FaultLocation
  - FinalScore
- Triggers:
  - Disable Next until mandatory hotspots are reviewed
  - Jump to remediation layer if FinalScore is below pass threshold
  - Show context hint on incorrect decision choices