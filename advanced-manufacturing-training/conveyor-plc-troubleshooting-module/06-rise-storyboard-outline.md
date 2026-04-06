# Rise or Storyline Storyboard Outline

## Module Title
Conveyor System Electrical and PLC Troubleshooting

## Screen 1
- Title: When a Conveyor Refuses to Restart
- On-screen text: An operator clears a jam, presses Start, and nothing happens. Production is waiting. Your job is to diagnose the fault without guessing.
- Visual direction: Conveyor line graphic with highlighted jam area and HMI callout
- Interaction type: Intro scenario
- Narration notes: Frame the situation as a high-pressure maintenance call
- Knowledge check: None

## Screen 2
- Title: Sequence of Operation
- On-screen text: Review the conveyor run sequence from operator request to motor run confirmation.
- Visual direction: Animated step flow of pushbutton, PLC inputs, logic permissives, output, starter, and motor
- Interaction type: Click-through process
- Narration notes: Emphasize that troubleshooting begins with normal operation knowledge
- Knowledge check: Which signal occurs immediately before the PLC run output?

## Screen 3
- Title: Required Permissives
- On-screen text: The conveyor can only run when key permissives are true.
- Visual direction: Interlock panel showing E-stop, guard, overload, downstream ready, auto mode, and jam clear
- Interaction type: Hotspot reveal
- Narration notes: Explain why one missing permissive blocks the whole sequence
- Knowledge check: Which permissive most directly confirms the product path is clear?

## Screen 4
- Title: Where Can the Fault Be?
- On-screen text: Separate faults into input side, logic side, or output side.
- Visual direction: Three-column fault map with sample symptoms
- Interaction type: Drag-and-drop classification
- Narration notes: Contrast a missing input with a failed output device
- Knowledge check: If the PLC output is false, which zone should be checked first?

## Screen 5
- Title: Virtual Control Panel
- On-screen text: Examine HMI status, I/O values, and field observations.
- Visual direction: Simulated HMI and PLC I/O table
- Interaction type: Guided exploration
- Narration notes: Encourage learners to compare symptom reports with control-state evidence
- Knowledge check: Which value most clearly blocks the restart?

## Screen 6
- Title: Make the Diagnosis
- On-screen text: Choose the most likely root cause based on the available evidence.
- Visual direction: Four answer cards representing overload trip, PLC failure, output wiring fault, and misaligned photoeye
- Interaction type: Multiple choice with feedback
- Narration notes: Reinforce evidence-based elimination of weak answers
- Feedback correct: Correct. The jam-clear input stayed false because the photoeye was bumped out of alignment.
- Feedback incorrect: Recheck which signals are true and false. The Start command reached the PLC, but one permissive never returned.

## Screen 7
- Title: Correct the Fault
- On-screen text: Realign the photoeye, verify input recovery, and restart safely.
- Visual direction: Step-by-step maintenance sequence
- Interaction type: Ordered steps
- Narration notes: Stress verification after adjustment, not just physical repair
- Knowledge check: What should you confirm before restarting the conveyor?

## Screen 8
- Title: Apply It on the Job
- On-screen text: Use the same method on HVAC, chiller, and conveyor control faults: symptom, sequence, permissives, evidence, correction, verification.
- Visual direction: Split-screen showing conveyor, air handler, and chiller control systems
- Interaction type: Summary and transfer prompt
- Narration notes: Generalize the troubleshooting method across industrial systems
- Knowledge check: Short reflection entry asking how the learner would adapt the process to another machine