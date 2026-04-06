# Instructor Manual

## Lesson Intent
This module helps learners diagnose chiller lockouts using controller logic, sensor validation, and sequence reasoning. It emphasizes protecting equipment while determining whether a shutdown was triggered by a real process condition or false instrumentation signal.

## Audience and Skill Level
- Intended audience: Intermediate maintenance and HVAC controls technicians
- Recommended class size: 8 to 12 learners
- Skill assumption: Learners can interpret controller points, alarms, and control diagrams

## Instructor Preparation Checklist
- Review the chiller enable sequence, compressor safeties, and lockout reset logic.
- Prepare normal-state and fault-state controller screenshots.
- Stage a scenario with a failed leaving-water temperature sensor.
- Confirm alarm text, expected values, and workbook tables are aligned.

## Tools, Materials, and Media
- Chiller control schematic
- Sequence-of-operation documentation
- Alarm history printouts
- Sensor point list
- BAS or controller screenshots
- Multimeter and simulated sensor value chart

## Safety Briefing Points
- Compressor protection logic exists for a reason; learners should never default to bypassing or resetting repeatedly.
- False sensor data can cause real process risk if not understood correctly.
- A reset is not a repair.

## Instructional Flow With Timing
1. Scenario setup and chiller role in the plant, 20 minutes
2. Chiller start sequence and safeties, 40 minutes
3. Controller alarms and sensor interpretation, 40 minutes
4. Guided diagnostic walkthrough, 40 minutes
5. Workbook application, 30 minutes
6. Virtual lab, 55 minutes
7. Debrief and assessment, 15 minutes

## Key Technical Talking Points
- Chillers use layered protections that stop the compressor before damage occurs.
- The alarm shown on the controller may be a result, not always the original cause.
- Sensor plausibility checks are essential before replacing expensive hardware.
- Process data and electrical checks must support each other.

## Demonstration Steps
1. Walk through demand, pump proof, flow proof, enable logic, and compressor start permissives.
2. Present an alarm history showing low evaporator temperature lockout.
3. Compare actual process conditions to reported controller values.
4. Diagnose a failed leaving-water temperature sensor drifting low.

## Expected Outcome
Learners should determine that the compressor stayed locked out because a faulty leaving-water temperature sensor falsely reported a low temperature, triggering protective lockout logic.