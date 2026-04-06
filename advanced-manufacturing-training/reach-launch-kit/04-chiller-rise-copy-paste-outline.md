# Chiller Rise Copy-Paste Outline

## Course Title
Georgia Mechanical: Industrial Chiller Control and Diagnostics

## Course Description
This self-paced Georgia Mechanical course teaches technicians how to diagnose chiller lockouts by comparing controller logic, alarm history, sensor plausibility, and field measurements without defeating equipment protection.

## Lesson 1: Cooling Demand, But No Compressor

### Intro Text On Image
The pumps are running, the BAS is calling for cooling, and the controller still blocks compressor enable. Determine whether the lockout reflects a real process condition or false instrumentation data.

### Statement Block
Chiller controls are designed to prevent damage. Resetting without understanding the cause is not troubleshooting.

### Knowledge Check
Question: Which data sources matter most when diagnosing a chiller lockout?

Choices:
- Alarm history
- Sensor values
- Sequence-of-operation logic
- Random part replacement

Correct answers:
- Alarm history
- Sensor values
- Sequence-of-operation logic

## Lesson 2: Enable Logic and Protection

### Process Block Steps
1. Cooling demand is present
2. Pump proof is confirmed
3. Flow proof is confirmed
4. Sensor values remain within safe range
5. Controller enables compressor

### Accordion Block
Item 1: Low temperature protection
Prevents freezing risk and compressor damage.

Item 2: Flow proof loss
Prevents operation without adequate water movement.

Item 3: Pressure safeties
Protect equipment from unsafe operating conditions.

Item 4: Lockout logic
Requires the fault to be understood before restart.

### Labeled Graphic
Labels:
- BAS demand
- Pump proof
- Flow proof
- Leaving-water sensor
- Alarm history
- Compressor enable output

## Lesson 3: Compare the Evidence

### Table Block
Item | Current value | Meaning
Cooling demand | True | System wants cooling
Pump proof | True | Water movement support system is running
Flow proof | True | Enable chain is mostly healthy
Leaving-water temperature sensor | 33.0 F | Controller sees freeze risk
Handheld water measurement | 44.8 F | Actual process condition does not match controller reading
Compressor enable output | False | Controller blocks restart based on low reading

### Scenario Text
The controller is behaving correctly based on the data it receives. The deeper question is whether the data itself is trustworthy.

### Knowledge Check
Question: Which data point most strongly suggests an instrumentation problem rather than a real freeze condition?

Choices:
- Cooling demand true
- Pump proof true
- Handheld water measurement 44.8 F
- Compressor enable output false

Correct answer:
- Handheld water measurement 44.8 F

## Lesson 4: Root Cause and Correction

### Flashcards
Front: Why is the compressor enable output false?
Back: The controller sees a low leaving-water temperature and holds the unit in protective lockout.

Front: What makes the sensor suspect?
Back: Independent measurement does not support the reported low temperature.

Front: What should be verified next?
Back: Sensor wiring, resistance or signal value, and plausibility against real process conditions.

### Process Block Steps
1. Verify the actual process temperature independently
2. Inspect the sensor and wiring
3. Test the sensor signal or resistance
4. Replace or recalibrate the sensor if needed
5. Clear lockout only after valid data is restored
6. Restart and monitor stable chilled-water operation

### Quote Block
The controller may be doing exactly the right thing with the wrong information.

## Lesson 5: Final Check

### Knowledge Check
Question: What is the best explanation for a low-temperature lockout when handheld measurements show normal water temperature?

Choices:
- The compressor must be replaced
- The controller logic is random
- The temperature sensor or its signal is unreliable
- Flow proof does not matter

Correct answer:
- The temperature sensor or its signal is unreliable

### Continue Block
Compare demand, permissives, sensor truth, and control outputs before resetting protected equipment. That method scales across chillers, HVAC units, and PLC-controlled conveyors.

## Completion Recommendation
- Require all lessons to be viewed.
- Require the final knowledge checks to be completed.
- Set passing threshold at 80 percent if your Reach configuration supports scored completion.