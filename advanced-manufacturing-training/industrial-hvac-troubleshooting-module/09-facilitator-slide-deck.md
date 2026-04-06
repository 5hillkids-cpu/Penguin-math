# Facilitator Slide Deck

## Module Title
Industrial HVAC Electrical and Control Troubleshooting

## Slide 1: Title Slide
- Title: Industrial HVAC Electrical and Control Troubleshooting
- Subtitle: Tracing Control Voltage and Safety Logic
- Presenter note: Frame the lesson around no-start calls where the BAS says run but the fan stays off.

## Slide 2: Learning Objectives
- Explain HVAC fan-start sequence
- Identify safety-string components
- Trace where control voltage stops
- Diagnose no-start faults using sequence logic

## Slide 3: The Request Is Not the Start
- BAS demand is only a request
- Safeties must still be closed
- Relays and contactors must still receive control voltage
- Presenter note: This is the core mindset shift for many learners.

## Slide 4: Normal Fan-Start Sequence
- BAS occupied command
- Control transformer output
- Closed safety string
- Fan relay energizes
- Contactor energizes
- Motor starts

## Slide 5: Common Blocking Devices
- Freezestat
- Airflow proof switch
- Overload protection
- Access interlocks

## Slide 6: Scenario Evidence
- BAS command: True
- Transformer secondary: 24 VAC
- Freezestat: Open
- Relay coil voltage: 0 VAC
- Contactor coil voltage: 0 VAC

## Slide 7: Root Cause Logic
- Demand exists
- Control power exists
- Signal stops in safety string
- Freezestat is the blocking condition
- Presenter note: Make learners explain why the contactor is not yet proven bad.

## Slide 8: Corrective Action
- Verify trip condition cleared
- Reset or replace the freezestat as required
- Confirm closed safety path
- Restart and verify airflow

## Slide 9: Wrong Turns to Avoid
- Replacing the contactor first
- Ignoring the safety string
- Treating BAS graphics as complete proof of equipment state

## Slide 10: Transfer to Other Systems
- Same method applies to chillers and conveyors