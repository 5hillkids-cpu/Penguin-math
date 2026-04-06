# Instructor Manual

## Lesson Intent
This module teaches a disciplined HVAC troubleshooting process that starts with sequence-of-operation logic and then narrows the fault using control voltage, safety circuit state, and field evidence. Learners practice distinguishing between power problems, control problems, and equipment protection events.

## Audience and Skill Level
- Intended audience: Entry-level to intermediate industrial maintenance and HVAC technicians
- Recommended class size: 8 to 14 learners
- Skill assumption: Learners can safely measure control voltage and identify common HVAC components

## Instructor Preparation Checklist
- Review the unit wiring diagram, sequence of operation, and safety string.
- Prepare one normal-state and one fault-state control diagram.
- Confirm the scenario data matches the workbook tables.
- Stage examples of an open freeze-stat, tripped overload, failed fan relay, and low control voltage.

## Tools, Materials, and Media
- HVAC unit electrical schematic
- Sequence-of-operation handout
- BAS or HMI screenshots
- Control transformer data
- Contactors, relays, and safety device references
- Multimeter, clamp meter, and troubleshooting checklist

## Safety Briefing Points
- Control circuits can be low voltage but still lead to unsafe troubleshooting if assumptions replace verification.
- Fan sections and dampers must be considered moving hazards.
- Never bypass a safety for convenience during live troubleshooting instruction.

## Instructional Flow With Timing
1. Fault scenario opener and job context, 15 minutes
2. Sequence of operation review, 35 minutes
3. Control voltage and safety string walkthrough, 35 minutes
4. Sensor and relay fault interpretation, 30 minutes
5. Guided troubleshooting demonstration, 40 minutes
6. Workbook application, 30 minutes
7. Virtual lab exercise, 50 minutes
8. Debrief and assessment, 15 minutes

## Key Technical Talking Points
- HVAC equipment often fails to start because a safety is open, not because the motor is bad.
- A BAS call for fan operation is not proof that the contactor should already energize.
- Low control voltage can create confusing symptoms across multiple devices.
- Sequence-of-operation reasoning prevents random relay swapping.

## Demonstration Steps
1. Review the normal call-for-fan sequence from BAS demand to fan contactor pickup.
2. Show how safeties sit in series with the control circuit.
3. Introduce a fault where the freezestat remains open after a cold-weather event.
4. Model symptom verification, voltage tracing, safety checks, and corrective confirmation.

## Common Misconceptions
- Learners may assume the contactor is bad before checking whether its coil is even being commanded.
- Some will confuse a thermostat or BAS demand with final permissive completion.
- Others may treat every open safety as nuisance rather than a clue.

## Coaching Prompts
- Where does the control signal stop?
- Which safety or relay must be true immediately before the fan contactor coil energizes?
- What evidence would separate a bad relay from a missing control voltage supply?

## Expected Outcome
Learners should determine that the supply fan failed to start because the freezestat remained open in the safety string, preventing control voltage from reaching the fan relay coil.