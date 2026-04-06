# Storyline Scene Script

## Module Title
Georgia Mechanical: Industrial Chiller Control and Diagnostics

## Scene 1: Alarm Introduction
- Slide title: Cooling Demand Exists, But the Chiller Is Locked Out
- On-screen elements: Chiller graphic, controller alarm banner, BAS demand indicator
- Narration: "A Georgia Mechanical technician sees that the chilled-water system has demand, but the chiller refuses compressor enable after a low-temperature lockout. Diagnose whether the machine sees a real hazard or false evidence of one."
- Trigger notes: Continue button appears after narration.

## Scene 2: Enable Sequence Review
- Slide title: What Must Be True Before Compressor Enable?
- Interaction: Learner clicks demand, pump proof, flow proof, sensor safety range, and compressor enable in correct order
- Correct feedback: "Correct. Chillers only run when both process conditions and protection logic agree."
- Incorrect feedback: "Review which conditions must be proven before the controller can permit the compressor."

## Scene 3: Data Source Hotspots
- Slide title: Where Does the Evidence Come From?
- Hotspots:
  - Alarm history
  - Leaving-water temperature sensor
  - Handheld temperature check
  - Pump proof
  - Flow proof
- Variable notes: Set EvidenceReviewed to True after all hotspots opened

## Scene 4: Compare the Readings
- Slide title: Which Reading Does Not Fit?
- Data displayed:
  - Cooling demand = True
  - Pump proof = True
  - Flow proof = True
  - Leaving-water sensor = 33.0 F
  - Handheld water measurement = 44.8 F
  - Compressor enable = False
- Interaction: Learner selects the conflicting data point
- Correct answer: Leaving-water sensor reading conflicts with handheld measurement

## Scene 5: Decision Point
- Slide title: Is the Controller Wrong?
- Choices:
  - Yes, the controller logic is random
  - No, the controller is acting correctly on bad input data
  - Yes, because pump proof is true
- Correct answer: No, the controller is acting correctly on bad input data
- Feedback correct: "Correct. The protection logic is reasonable. The input truth is the real question."
- Feedback incorrect: "Recheck what the controller believes and why it would block the compressor."

## Scene 6: Root Cause Challenge
- Slide title: What Is the Most Likely Root Cause?
- Choices:
  - Failed compressor motor
  - Faulty leaving-water temperature sensor
  - Pump failure
  - Random nuisance alarm
- Correct answer: Faulty leaving-water temperature sensor
- Feedback correct: "Correct. The measured water temperature does not support the low-temperature lockout."
- Feedback incorrect: "Compare the independent field measurement with the controller input again."

## Scene 7: Corrective Action Builder
- Slide title: Put the Diagnostic Response in Order
- Drag-and-drop order:
  1. Verify actual process temperature independently
  2. Inspect sensor and wiring
  3. Test sensor signal or resistance
  4. Replace or recalibrate if required
  5. Clear lockout after valid data is restored
  6. Restart and monitor stable operation

## Scene 8: Final Knowledge Check
- Slide title: What Must Be Proven Before Reset?
- Question: Before resetting a chiller low-temperature lockout, what must be confirmed?
- Choices:
  - That the alarm text disappeared once
  - That the reported temperature is plausible and the risk condition is cleared
  - That the compressor casing feels cool
- Correct answer: That the reported temperature is plausible and the risk condition is cleared

## Scene 9: Completion
- Slide title: Georgia Mechanical Standard for Protected Equipment
- On-screen text: Compare demand, protection logic, sensor truth, and process truth before any reset.
- Narration: "At Georgia Mechanical, protected equipment is never reset on hope alone. We verify whether the machine sees a real hazard or a false input."

## Suggested Variables and Triggers
- Variables:
  - EvidenceReviewed
  - RootCauseChoice
  - FinalScore
- Triggers:
  - Require evidence review before advancing
  - Use remediation layer for low score outcomes
  - Show feedback layer based on incorrect choices