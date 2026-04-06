# Presenter Notes

## Delivery Guidance
- Keep learners focused on evidence at each step.
- Pause after every scenario clue and ask what it rules out.
- Redirect part-swapping language back to sequence-of-operation logic.

## Suggested Opening Script
“Today’s goal is not to memorize one conveyor fault. It is to use a repeatable troubleshooting method that works when production is waiting and the pressure is high. We will prove where the signal stops before we blame any component.”

## Key Questions to Ask During Delivery
1. What should the system be doing right now?
2. Which permissive must become true next?
3. What evidence tells you the PLC did or did not issue the run command?
4. Which measurement would confirm your next step?

## Common Learner Errors to Correct
- Calling the root cause too early
- Confusing HMI labels with actual field state
- Jumping to output hardware without checking permissives
- Treating a cleared jam as proof that the jam-clear input must also be true

## Debrief Script
“The conveyor did not fail because the PLC forgot how to run. It stayed off because a required condition never returned true. The control logic behaved correctly. The problem lived in the field device alignment.”