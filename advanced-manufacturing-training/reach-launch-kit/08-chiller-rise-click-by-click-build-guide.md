# Chiller Rise Click-By-Click Build Guide

## Purpose
Use this guide when you are inside Rise 360 and want a literal step-by-step build order for the Georgia Mechanical chiller online course.

## Course To Build
Georgia Mechanical: Industrial Chiller Control and Diagnostics

## Source Files To Keep Open While Building
- 04-chiller-rise-copy-paste-outline.md
- ../industrial-chiller-diagnostics-module/07-rise-production-script.md
- ../industrial-chiller-diagnostics-module/08-assessment-bank.md
- ../industrial-chiller-diagnostics-module/12-georgia-mechanical-slide-script.md

## Part 1: Create The Course
1. Open Rise 360.
2. Select Create New.
3. Choose Course.
4. Enter the title: Georgia Mechanical: Industrial Chiller Control and Diagnostics.
5. Add the course description:
   This self-paced Georgia Mechanical course teaches technicians how to diagnose chiller lockouts by comparing controller logic, alarm history, sensor plausibility, and field measurements without defeating equipment protection.
6. Save the course.

## Part 2: Set The Course Style
1. Open the course theme or settings area.
2. Apply Georgia Mechanical branding colors if available.
3. Use a clean industrial look with dark blue, steel gray, and white.
4. Set navigation style according to your delivery plan.
5. Confirm lesson labels are visible.

## Part 3: Create The Lesson Structure
Create five lessons with these exact names:

1. Cooling Demand, But No Compressor
2. Enable Logic and Protection
3. Compare the Evidence
4. Root Cause and Correction
5. Final Check

## Part 4: Build Lesson 1

### Add Block 1
- Block type: Text on image
- Heading: Cooling Demand, But No Compressor
- Body text:
  The pumps are running, the BAS is calling for cooling, and the controller still blocks compressor enable. Determine whether the lockout reflects a real process condition or false instrumentation data.
- Media note: Use a chiller plant image, controller screen, or cooling-system illustration.

### Add Block 2
- Block type: Statement A
- Heading: Protect the machine while you diagnose
- Body text:
  Chiller controls are designed to prevent damage. Resetting without understanding the cause is not troubleshooting.

### Add Block 3
- Block type: Knowledge Check, Multiple Response
- Question:
  Which data sources matter most when diagnosing a chiller lockout?
- Answers:
  - Alarm history
  - Sensor values
  - Sequence-of-operation logic
  - Random part replacement
- Mark correct:
  - Alarm history
  - Sensor values
  - Sequence-of-operation logic

## Part 5: Build Lesson 2

### Add Block 1
- Block type: Process
- Heading: Normal compressor enable sequence
- Step 1: Cooling demand is present
- Step 2: Pump proof is confirmed
- Step 3: Flow proof is confirmed
- Step 4: Sensor values remain within safe range
- Step 5: Controller enables compressor

### Add Block 2
- Block type: Accordion
- Heading: Why the controller blocks restart
- Item 1 title: Low temperature protection
- Item 1 body: Prevents freezing risk and compressor damage.
- Item 2 title: Flow proof loss
- Item 2 body: Prevents operation without adequate water movement.
- Item 3 title: Pressure safeties
- Item 3 body: Protect equipment from unsafe operating conditions.
- Item 4 title: Lockout logic
- Item 4 body: Requires the fault to be understood before restart.

### Add Block 3
- Block type: Labeled Graphic
- Heading: Sources of diagnostic evidence
- Suggested labels:
  - BAS demand
  - Pump proof
  - Flow proof
  - Leaving-water sensor
  - Alarm history
  - Compressor enable output

## Part 6: Build Lesson 3

### Add Block 1
- Block type: Table
- Heading: Scenario evidence
- Add these rows:
  - Cooling demand | True | System wants cooling
  - Pump proof | True | Water movement support system is running
  - Flow proof | True | Enable chain is mostly healthy
  - Leaving-water temperature sensor | 33.0 F | Controller sees freeze risk
  - Handheld water measurement | 44.8 F | Actual process condition does not match controller reading
  - Compressor enable output | False | Controller blocks restart based on low reading

### Add Block 2
- Block type: Scenario
- Heading: Is the controller wrong?
- Body text:
  The controller is behaving correctly based on the data it receives. The deeper question is whether the data itself is trustworthy.

### Add Block 3
- Block type: Knowledge Check, Multiple Choice
- Question:
  Which data point most strongly suggests an instrumentation problem rather than a real freeze condition?
- Choices:
  - Cooling demand true
  - Pump proof true
  - Handheld water measurement 44.8 F
  - Compressor enable output false
- Correct answer:
  - Handheld water measurement 44.8 F

## Part 7: Build Lesson 4

### Add Block 1
- Block type: Flashcards
- Heading: Read the data before you reset
- Card 1 front: Why is the compressor enable output false?
- Card 1 back: The controller sees a low leaving-water temperature and holds the unit in protective lockout.
- Card 2 front: What makes the sensor suspect?
- Card 2 back: Independent measurement does not support the reported low temperature.
- Card 3 front: What should be verified next?
- Card 3 back: Sensor wiring, resistance or signal value, and plausibility against real process conditions.

### Add Block 2
- Block type: Process
- Heading: Corrective action sequence
- Step 1: Verify the actual process temperature independently
- Step 2: Inspect the sensor and wiring
- Step 3: Test the sensor signal or resistance
- Step 4: Replace or recalibrate the sensor if needed
- Step 5: Clear lockout only after valid data is restored
- Step 6: Restart and monitor stable chilled-water operation

### Add Block 3
- Block type: Quote
- Quote text:
  The controller may be doing exactly the right thing with the wrong information.

## Part 8: Build Lesson 5

### Add Block 1
- Block type: Knowledge Check, Multiple Choice
- Question:
  What is the best explanation for a low-temperature lockout when handheld measurements show normal water temperature?
- Choices:
  - The compressor must be replaced
  - The controller logic is random
  - The temperature sensor or its signal is unreliable
  - Flow proof does not matter
- Correct answer:
  - The temperature sensor or its signal is unreliable

### Add Block 2
- Block type: Continue Block
- Heading: Use this method on any protected system
- Body text:
  Compare demand, permissives, sensor truth, and control outputs before resetting protected equipment. That method scales across chillers, HVAC units, and PLC-controlled conveyors.

## Part 9: Set Completion Rules
1. Open course settings.
2. Require all lessons to be viewed.
3. Require knowledge checks to be completed.
4. If scoring is enabled in your configuration, use an 80 percent pass target.

## Part 10: Review Before Publish
1. Preview the entire course.
2. Test each knowledge check.
3. Check the mobile preview.
4. Confirm branding is consistent with Georgia Mechanical.
5. Publish the course for Reach delivery.

## Part 11: After Publish
1. Upload the published package into Reach.
2. Apply the course title and description consistently.
3. Add it to the Georgia Mechanical Technical Troubleshooting Academy learning path.
4. Run one pilot learner test before assigning broadly.