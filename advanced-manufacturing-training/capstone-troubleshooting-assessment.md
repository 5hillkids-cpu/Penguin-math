# Capstone Troubleshooting Assessment

## Assessment Title
Advanced Manufacturing Troubleshooting Capstone

## Purpose
This capstone measures whether learners can transfer a common troubleshooting method across conveyor, HVAC, and chiller systems without collapsing into guesswork or isolated system-specific habits.

## Capstone Outcomes
Learners must demonstrate that they can:

1. Define the symptom clearly.
2. Identify the likely blocking condition or missing permissive.
3. Select the next best diagnostic step.
4. Justify a root cause using evidence.
5. Describe a safe corrective action and restart verification.

## Assessment Format
- Part 1: Written scenario analysis
- Part 2: Facilitator-led oral defense or practical discussion
- Part 3: Optional simulator or virtual lab run-through

## Scenario A: Conveyor Restart Failure
- Complaint: Conveyor 3 will not restart after a jam was cleared.
- Key evidence:
  - Start command bit true
  - Jam clear input false
  - Run output false
  - Overload healthy true
- Expected diagnosis: Missing jam-clear permissive due to sensor alignment issue

## Scenario B: HVAC Supply Fan No-Start
- Complaint: BAS calls for occupied airflow, but supply fan remains off.
- Key evidence:
  - BAS command true
  - 24 VAC control power present
  - Freezestat open
  - Relay coil voltage 0 VAC
- Expected diagnosis: Open safety string at the freezestat

## Scenario C: Chiller Lockout
- Complaint: Cooling demand exists, but compressor enable remains off.
- Key evidence:
  - Pump proof true
  - Flow proof true
  - Leaving-water sensor 33.0 F
  - Handheld measurement 44.8 F
- Expected diagnosis: Faulty low-reading sensor causing protective lockout

## Learner Response Template
For each scenario, require the learner to answer:
1. What is the symptom?
2. What evidence matters most?
3. Which condition is blocking normal operation?
4. What is your next best diagnostic step?
5. What is the root cause?
6. What corrective action and verification steps do you recommend?

## Facilitator Scoring Rubric
| Criterion | 3 - Strong | 2 - Partial | 1 - Weak |
| --- | --- | --- | --- |
| Symptom definition | Clear, precise, no assumptions | Mostly clear | Vague or mixed with diagnosis |
| Evidence use | Uses strongest clues and eliminates weak ones | Uses some evidence | Mostly guesses |
| Diagnostic logic | Sequence-based and defensible | Some gaps | Disorganized reasoning |
| Root cause accuracy | Correct and well supported | Partially supported | Incorrect or unsupported |
| Safe corrective action | Safe, realistic, and verified | Partly complete | Unsafe or incomplete |

## Master Answer Key Summary
- Conveyor: Jam-clear photoeye alignment issue kept permissive false.
- HVAC: Freezestat open interrupted the control path.
- Chiller: Faulty leaving-water sensor falsely triggered low-temperature lockout.

## Debrief Questions
1. Which reasoning step stayed the same across all three systems?
2. Where were you most tempted to guess rather than verify?
3. How did the evidence tell you whether the fault was input-side, logic-side, output-side, or process-side?