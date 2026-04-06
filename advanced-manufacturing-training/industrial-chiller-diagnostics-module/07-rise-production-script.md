# Rise Production Script

## Course Title
Industrial Chiller Control and Diagnostics

## Course Description
This Rise course teaches learners how to diagnose a chiller lockout by comparing controller logic, alarm history, and sensor plausibility. The scenario centers on a compressor that remains locked out after a low-temperature event.

## Course Settings Recommendation
- Theme: Clean engineering layout with high-contrast data tables and alarm callouts
- Estimated duration: 20 to 25 minutes
- Completion: All blocks viewed and final assessment passed at 80 percent

## Lesson 1: Lockout Scenario

### Block 1
- Rise block type: Text on image
- Heading: Cooling Demand Is Present, But the Chiller Is Locked Out
- Body copy: The pumps are running, the BAS is calling for cooling, and the controller still blocks compressor enable. Your job is to determine whether the lockout reflects a real process condition or bad instrumentation data.
- Media direction: Chiller plant image with controller alarm overlay

### Block 2
- Rise block type: Statement A
- Heading: Protect the machine while you diagnose
- Body copy: Chiller controls are designed to prevent damage. Resetting without understanding the cause is not troubleshooting.

### Block 3
- Rise block type: Knowledge check, multiple response
- Question: Which data sources matter most when diagnosing a chiller lockout?
- Choices:
  - Alarm history
  - Sensor values
  - Sequence-of-operation logic
  - Random part replacement
- Correct answers: Alarm history; Sensor values; Sequence-of-operation logic

## Lesson 2: Enable Logic and Protection

### Block 4
- Rise block type: Process
- Heading: Normal compressor enable sequence
- Steps:
  1. Cooling demand is present
  2. Pump proof is confirmed
  3. Flow proof is confirmed
  4. Sensor values remain within safe range
  5. Controller enables compressor

### Block 5
- Rise block type: Accordion
- Heading: Why the controller blocks restart
- Items:
  - Low temperature protection: Prevents freezing risk
  - Flow proof loss: Prevents operation without water movement
  - Pressure safeties: Prevent equipment damage
  - Lockout logic: Requires the fault to be understood before restart

### Block 6
- Rise block type: Labeled graphic
- Heading: Sources of diagnostic evidence
- Label guidance:
  - BAS demand
  - Pump proof
  - Flow proof
  - Leaving-water sensor
  - Alarm history
  - Compressor enable output

## Lesson 3: Compare the Evidence

### Block 7
- Rise block type: Table
- Heading: Scenario evidence
- Columns: Item, Current value, Meaning
- Rows:
  - Cooling demand, True, System wants cooling
  - Pump proof, True, Water movement support system is running
  - Flow proof, True, Enable chain is mostly healthy
  - Leaving-water temperature sensor, 33.0 F, Controller sees freeze risk
  - Handheld water measurement, 44.8 F, Actual process condition does not match controller reading
  - Compressor enable output, False, Controller blocks restart based on low reading

### Block 8
- Rise block type: Scenario
- Heading: Is the controller wrong?
- Body copy: The controller is behaving correctly based on the data it receives. The deeper question is whether the data itself is trustworthy.

### Block 9
- Rise block type: Knowledge check, multiple choice
- Question: Which data point most strongly suggests an instrumentation problem rather than a real freeze condition?
- Choices:
  - Cooling demand true
  - Pump proof true
  - Handheld water measurement 44.8 F
  - Compressor enable output false
- Correct answer: Handheld water measurement 44.8 F

## Lesson 4: Root Cause and Correction

### Block 10
- Rise block type: Flashcards
- Heading: Read the data before you reset
- Cards:
  - Front: Why is the compressor enable output false?
    Back: The controller sees a low leaving-water temperature and holds the unit in protective lockout.
  - Front: What makes the sensor suspect?
    Back: Independent measurement does not support the reported low temperature.
  - Front: What should be verified next?
    Back: Sensor wiring, resistance or signal value, and plausibility against real process conditions.

### Block 11
- Rise block type: Process
- Heading: Corrective action sequence
- Steps:
  1. Verify the actual process temperature independently
  2. Inspect the sensor and wiring
  3. Test the sensor signal or resistance
  4. Replace or recalibrate the sensor if needed
  5. Clear lockout only after valid data is restored
  6. Restart and monitor stable chilled-water operation

### Block 12
- Rise block type: Quote
- Body copy: The controller may be doing exactly the right thing with the wrong information.

## Lesson 5: Final Check

### Block 13
- Rise block type: Knowledge check, multiple choice
- Question: What is the best explanation for a low-temperature lockout when handheld measurements show normal water temperature?
- Choices:
  - The compressor must be replaced
  - The controller logic is random
  - The temperature sensor or its signal is unreliable
  - Flow proof does not matter
- Correct answer: The temperature sensor or its signal is unreliable

### Block 14
- Rise block type: Continue block
- Heading: Use this method on any protected system
- Body copy: Compare demand, permissives, sensor truth, and control outputs before resetting protected equipment. That method scales across chillers, HVAC units, and PLC-controlled conveyors.

## Build Notes
- Add real alarm codes and client-specific point names when available.
- Use high-contrast data tables so temperature values remain readable on mobile.
- If building in Storyline, turn the evidence comparison into a variable-driven diagnostic dashboard.