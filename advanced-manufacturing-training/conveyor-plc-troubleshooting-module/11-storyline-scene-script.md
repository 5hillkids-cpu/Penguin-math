# Storyline Scene Script

## Module Title
Conveyor System Electrical and PLC Troubleshooting

## Scene 1: Intro Callout
- Slide title: Conveyor 3 Will Not Restart
- On-screen elements: Conveyor line background, HMI panel, operator message bubble
- Narration: “An operator cleared a jam and pressed Start, but Conveyor 3 still will not run. Production is waiting. Diagnose the fault without guessing.”
- Trigger notes: Continue button appears after narration completes.

## Scene 2: Sequence Review
- Slide title: What Should Happen Next?
- On-screen elements: Clickable process map
- Learner interaction: Click each step in order: Start request, PLC input, permissives, run output, starter, motor
- Feedback logic:
  - Correct selection order advances progress variable
  - Incorrect selection triggers hint layer: “Go back to the signal path. What happens before the PLC can issue a run command?”

## Scene 3: Permissive Panel
- Slide title: Which Conditions Must Be True?
- On-screen elements: Six indicator lights for E-stop, guard, overload, auto mode, downstream ready, jam clear
- Learner interaction: Click each permissive for a definition popup
- Variable notes: Set variable PermissivesReviewed to True when all six have been opened

## Scene 4: Diagnostic Dashboard
- Slide title: Read the Evidence
- On-screen elements: HMI status, PLC bit table, voltage reading box, operator note
- Data shown:
  - HMI line status = Ready
  - Start command bit = True when pressed
  - Jam clear input = False
  - Overload healthy = True
  - Run output = False
  - Starter coil voltage = 0 VAC
- Learner interaction: Click hotspots to reveal “What this means” layers

## Scene 5: Decision Point
- Slide title: Where Is the Fault?
- On-screen elements: Three choices
  - Input side
  - Logic or permissive side
  - Output side
- Correct answer: Logic or permissive side
- Feedback correct: “Correct. The start request reaches the PLC, but one required condition is missing.”
- Feedback incorrect: “Look again at which signals are already proven true.”
- Trigger notes: Store result in variable FaultZone

## Scene 6: Root Cause Challenge
- Slide title: Choose the Most Likely Root Cause
- Choices:
  - Tripped overload relay
  - PLC output card failure
  - Misaligned jam-clear photoeye
  - Failed starter coil
- Correct answer: Misaligned jam-clear photoeye
- Feedback correct: “Correct. The jam-clear permissive stayed false after the jam event.”
- Feedback incorrect: “Recheck the evidence. The PLC never issued the run output, so the problem occurs before the starter coil.”

## Scene 7: Corrective Action Builder
- Slide title: Put the Repair Steps in Order
- Interaction: Drag-and-drop ordering
- Correct order:
  1. Lock out equipment
  2. Inspect and realign photoeye bracket
  3. Verify sensor state changes
  4. Confirm PLC input returns true
  5. Restart conveyor
  6. Observe stable operation

## Scene 8: Final Knowledge Check
- Slide title: What If the PLC Output Had Been True?
- Question: If the PLC run output were true and the starter coil still saw 0 VAC, which zone would you troubleshoot next?
- Choices:
  - Input side
  - Logic side
  - Output side and field power path
- Correct answer: Output side and field power path
- Result logic: Passing score sends learner to completion layer; otherwise branch to remediation layer with sequence review.

## Scene 9: Completion
- Slide title: Use the Method Anywhere
- On-screen text: Confirm the symptom. Review the sequence. Identify the missing permissive. Verify with data. Correct the root cause. Confirm the restart.
- Narration: “That method scales beyond conveyors. Use it on HVAC units, chillers, and any control-driven machine.”

## Storyline Variables and Triggers
- Variables:
  - PermissivesReviewed, True or False
  - FaultZone, text
  - FinalScore, number
- Suggested triggers:
  - Show layer when learner clicks data hotspot
  - Adjust variable when correct decision selected
  - Jump to remediation if FinalScore is below threshold
  - Enable Next button only after required interactions complete