/*************** 
 * Remtag Test *
 ***************/

import { PsychoJS } from './lib/core-2020.2.js';
import * as core from './lib/core-2020.2.js';
import { TrialHandler } from './lib/data-2020.2.js';
import { Scheduler } from './lib/util-2020.2.js';
import * as visual from './lib/visual-2020.2.js';
import * as sound from './lib/sound-2020.2.js';
import * as util from './lib/util-2020.2.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'RemTag';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001', 'group': '1'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
flowScheduler.add(pre_re_insRoutineBegin());
flowScheduler.add(pre_re_insRoutineEachFrame());
flowScheduler.add(pre_re_insRoutineEnd());
flowScheduler.add(practice_instructions_pre_rewardRoutineBegin());
flowScheduler.add(practice_instructions_pre_rewardRoutineEachFrame());
flowScheduler.add(practice_instructions_pre_rewardRoutineEnd());
const repeat_practiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(repeat_practiceLoopBegin, repeat_practiceLoopScheduler);
flowScheduler.add(repeat_practiceLoopScheduler);
flowScheduler.add(repeat_practiceLoopEnd);
flowScheduler.add(continue_2RoutineBegin());
flowScheduler.add(continue_2RoutineEachFrame());
flowScheduler.add(continue_2RoutineEnd());
const pre_reward_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(pre_reward_trialsLoopBegin, pre_reward_trialsLoopScheduler);
flowScheduler.add(pre_reward_trialsLoopScheduler);
flowScheduler.add(pre_reward_trialsLoopEnd);
flowScheduler.add(reward_insRoutineBegin());
flowScheduler.add(reward_insRoutineEachFrame());
flowScheduler.add(reward_insRoutineEnd());
flowScheduler.add(practice_instructions_rewardRoutineBegin());
flowScheduler.add(practice_instructions_rewardRoutineEachFrame());
flowScheduler.add(practice_instructions_rewardRoutineEnd());
const repeat_reward_practiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(repeat_reward_practiceLoopBegin, repeat_reward_practiceLoopScheduler);
flowScheduler.add(repeat_reward_practiceLoopScheduler);
flowScheduler.add(repeat_reward_practiceLoopEnd);
flowScheduler.add(continue_3RoutineBegin());
flowScheduler.add(continue_3RoutineEachFrame());
flowScheduler.add(continue_3RoutineEnd());
const reward_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(reward_trialsLoopBegin, reward_trialsLoopScheduler);
flowScheduler.add(reward_trialsLoopScheduler);
flowScheduler.add(reward_trialsLoopEnd);
flowScheduler.add(finalRoutineBegin());
flowScheduler.add(finalRoutineEachFrame());
flowScheduler.add(finalRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'html/stimuli/tools/paintbrush.jpg', 'path': 'html/stimuli/tools/paintbrush.jpg'},
    {'name': 'html/stimuli/animals/catfish.jpg', 'path': 'html/stimuli/animals/catfish.jpg'},
    {'name': 'html/stimuli/animals/jaguar_threat.jpg', 'path': 'html/stimuli/animals/jaguar_threat.jpg'},
    {'name': 'html/stimuli/tools/laptop.jpg', 'path': 'html/stimuli/tools/laptop.jpg'},
    {'name': 'html/stimuli/tools/chisel.jpg', 'path': 'html/stimuli/tools/chisel.jpg'},
    {'name': 'html/stimuli/animals/tiger_threat.jpg', 'path': 'html/stimuli/animals/tiger_threat.jpg'},
    {'name': 'html/stimuli/tools/solderingtorch.jpg', 'path': 'html/stimuli/tools/solderingtorch.jpg'},
    {'name': 'stimuli/animals/chipmunk.jpg', 'path': 'stimuli/animals/chipmunk.jpg'},
    {'name': 'html/stimuli/animals/dove.jpg', 'path': 'html/stimuli/animals/dove.jpg'},
    {'name': 'html/stimuli/tools/anvil.jpg', 'path': 'html/stimuli/tools/anvil.jpg'},
    {'name': 'html/stimuli/animals/pelican.jpg', 'path': 'html/stimuli/animals/pelican.jpg'},
    {'name': 'html/stimuli/animals/lion.jpg', 'path': 'html/stimuli/animals/lion.jpg'},
    {'name': 'html/stimuli/animals/boar.jpg', 'path': 'html/stimuli/animals/boar.jpg'},
    {'name': 'stimuli/tools/bevelgauge.jpg', 'path': 'stimuli/tools/bevelgauge.jpg'},
    {'name': 'stimuli/animals/sparrow.jpg', 'path': 'stimuli/animals/sparrow.jpg'},
    {'name': 'html/stimuli/animals/flea.jpg', 'path': 'html/stimuli/animals/flea.jpg'},
    {'name': 'html/stimuli/tools/fan.jpg', 'path': 'html/stimuli/tools/fan.jpg'},
    {'name': 'html/stimuli/animals/herculesbeetle.jpg', 'path': 'html/stimuli/animals/herculesbeetle.jpg'},
    {'name': 'html/stimuli/tools/whisk.jpg', 'path': 'html/stimuli/tools/whisk.jpg'},
    {'name': 'html/stimuli/tools/foodprocessor.jpg', 'path': 'html/stimuli/tools/foodprocessor.jpg'},
    {'name': 'html/stimuli/animals/chipmunk.jpg', 'path': 'html/stimuli/animals/chipmunk.jpg'},
    {'name': 'html/stimuli/tools/eraser.jpg', 'path': 'html/stimuli/tools/eraser.jpg'},
    {'name': 'html/stimuli/tools/television.jpg', 'path': 'html/stimuli/tools/television.jpg'},
    {'name': 'html/stimuli/animals/goldfish.jpg', 'path': 'html/stimuli/animals/goldfish.jpg'},
    {'name': 'stimuli/tools/glove.jpg', 'path': 'stimuli/tools/glove.jpg'},
    {'name': 'stimuli/animals/duck.jpg', 'path': 'stimuli/animals/duck.jpg'},
    {'name': 'stimuli/tools/extensioncord.jpg', 'path': 'stimuli/tools/extensioncord.jpg'},
    {'name': 'html/stimuli/tools/snowbrush.jpg', 'path': 'html/stimuli/tools/snowbrush.jpg'},
    {'name': 'html/stimuli/animals/stickinsect.jpg', 'path': 'html/stimuli/animals/stickinsect.jpg'},
    {'name': 'html/stimuli/tools/whistle.jpg', 'path': 'html/stimuli/tools/whistle.jpg'},
    {'name': 'stimuli/animals/emu.jpg', 'path': 'stimuli/animals/emu.jpg'},
    {'name': 'html/stimuli/tools/typewriter.jpg', 'path': 'html/stimuli/tools/typewriter.jpg'},
    {'name': 'html/stimuli/animals/ibises.jpg', 'path': 'html/stimuli/animals/ibises.jpg'},
    {'name': 'html/stimuli/animals/beardeddragon.jpg', 'path': 'html/stimuli/animals/beardeddragon.jpg'},
    {'name': 'stimuli/animals/iguana.jpg', 'path': 'stimuli/animals/iguana.jpg'},
    {'name': 'stimuli/tools/drillpress.jpg', 'path': 'stimuli/tools/drillpress.jpg'},
    {'name': 'html/stimuli/tools/vacuumcleaner.jpg', 'path': 'html/stimuli/tools/vacuumcleaner.jpg'},
    {'name': 'html/stimuli/animals/butterfly.jpg', 'path': 'html/stimuli/animals/butterfly.jpg'},
    {'name': 'stimuli/animals/manatee.jpg', 'path': 'stimuli/animals/manatee.jpg'},
    {'name': 'html/stimuli/tools/padlock.jpg', 'path': 'html/stimuli/tools/padlock.jpg'},
    {'name': 'html/stimuli/tools/jawsoflife.jpg', 'path': 'html/stimuli/tools/jawsoflife.jpg'},
    {'name': 'html/stimuli/animals/yak.jpg', 'path': 'html/stimuli/animals/yak.jpg'},
    {'name': 'html/stimuli/animals/turtle.jpg', 'path': 'html/stimuli/animals/turtle.jpg'},
    {'name': 'phase2_order6.csv', 'path': 'phase2_order6.csv'},
    {'name': 'stimuli/animals/chinchilla.jpg', 'path': 'stimuli/animals/chinchilla.jpg'},
    {'name': 'html/stimuli/animals/ostrich.jpg', 'path': 'html/stimuli/animals/ostrich.jpg'},
    {'name': 'html/stimuli/tools/dremel.jpg', 'path': 'html/stimuli/tools/dremel.jpg'},
    {'name': 'html/stimuli/tools/saw.jpg', 'path': 'html/stimuli/tools/saw.jpg'},
    {'name': 'stimuli/animals/racoon.jpg', 'path': 'stimuli/animals/racoon.jpg'},
    {'name': 'html/stimuli/tools/vegetablepeeler.jpg', 'path': 'html/stimuli/tools/vegetablepeeler.jpg'},
    {'name': 'html/stimuli/animals/scorpion_threat.jpg', 'path': 'html/stimuli/animals/scorpion_threat.jpg'},
    {'name': 'html/stimuli/tools/pizzacutter.jpg', 'path': 'html/stimuli/tools/pizzacutter.jpg'},
    {'name': 'html/stimuli/animals/blackleopard.jpg', 'path': 'html/stimuli/animals/blackleopard.jpg'},
    {'name': 'html/stimuli/tools/blower.jpg', 'path': 'html/stimuli/tools/blower.jpg'},
    {'name': 'html/stimuli/tools/oven.jpg', 'path': 'html/stimuli/tools/oven.jpg'},
    {'name': 'html/stimuli/animals/turkey.jpg', 'path': 'html/stimuli/animals/turkey.jpg'},
    {'name': 'stimuli/tools/battery.jpg', 'path': 'stimuli/tools/battery.jpg'},
    {'name': 'html/stimuli/tools/compass.jpg', 'path': 'html/stimuli/tools/compass.jpg'},
    {'name': 'html/stimuli/animals/hermitcrab.jpg', 'path': 'html/stimuli/animals/hermitcrab.jpg'},
    {'name': 'html/stimuli/animals/bear.jpg', 'path': 'html/stimuli/animals/bear.jpg'},
    {'name': 'html/stimuli/animals/redpalmweevil.jpg', 'path': 'html/stimuli/animals/redpalmweevil.jpg'},
    {'name': 'html/stimuli/tools/battery.jpg', 'path': 'html/stimuli/tools/battery.jpg'},
    {'name': 'html/stimuli/animals/mealworm.jpg', 'path': 'html/stimuli/animals/mealworm.jpg'},
    {'name': 'stimuli/tools/wateringcan.jpg', 'path': 'stimuli/tools/wateringcan.jpg'},
    {'name': 'html/stimuli/animals/tortoise.jpg', 'path': 'html/stimuli/animals/tortoise.jpg'},
    {'name': 'html/stimuli/animals/monkey.jpg', 'path': 'html/stimuli/animals/monkey.jpg'},
    {'name': 'html/stimuli/tools/binoculars.jpg', 'path': 'html/stimuli/tools/binoculars.jpg'},
    {'name': 'html/stimuli/tools/duffelbag.jpg', 'path': 'html/stimuli/tools/duffelbag.jpg'},
    {'name': 'stimuli/tools/pencilsharpener.jpg', 'path': 'stimuli/tools/pencilsharpener.jpg'},
    {'name': 'html/stimuli/tools/woodchipper.jpg', 'path': 'html/stimuli/tools/woodchipper.jpg'},
    {'name': 'html/stimuli/tools/calculator.jpg', 'path': 'html/stimuli/tools/calculator.jpg'},
    {'name': 'html/stimuli/tools/umbrella.jpg', 'path': 'html/stimuli/tools/umbrella.jpg'},
    {'name': 'html/stimuli/tools/chainwrench.jpg', 'path': 'html/stimuli/tools/chainwrench.jpg'},
    {'name': 'html/stimuli/animals/camel.jpg', 'path': 'html/stimuli/animals/camel.jpg'},
    {'name': 'html/stimuli/tools/cart.jpg', 'path': 'html/stimuli/tools/cart.jpg'},
    {'name': 'stimuli/animals/pigeon.jpg', 'path': 'stimuli/animals/pigeon.jpg'},
    {'name': 'html/stimuli/animals/watusi.jpg', 'path': 'html/stimuli/animals/watusi.jpg'},
    {'name': 'phase2_order2.csv', 'path': 'phase2_order2.csv'},
    {'name': 'phase2_order7.csv', 'path': 'phase2_order7.csv'},
    {'name': 'html/stimuli/animals/herring.jpg', 'path': 'html/stimuli/animals/herring.jpg'},
    {'name': 'html/stimuli/animals/beta.jpg', 'path': 'html/stimuli/animals/beta.jpg'},
    {'name': 'phase3_order5.csv', 'path': 'phase3_order5.csv'},
    {'name': 'stimuli/tools/microwave.jpg', 'path': 'stimuli/tools/microwave.jpg'},
    {'name': 'html/stimuli/animals/iguana2.jpg', 'path': 'html/stimuli/animals/iguana2.jpg'},
    {'name': 'html/stimuli/animals/reindeer.jpg', 'path': 'html/stimuli/animals/reindeer.jpg'},
    {'name': 'html/stimuli/animals/redpanda.jpg', 'path': 'html/stimuli/animals/redpanda.jpg'},
    {'name': 'html/stimuli/tools/bevelgauge.jpg', 'path': 'html/stimuli/tools/bevelgauge.jpg'},
    {'name': 'html/stimuli/tools/drillpress.jpg', 'path': 'html/stimuli/tools/drillpress.jpg'},
    {'name': 'html/stimuli/animals/scorpion.jpg', 'path': 'html/stimuli/animals/scorpion.jpg'},
    {'name': 'stimuli/animals/crane.jpg', 'path': 'stimuli/animals/crane.jpg'},
    {'name': 'html/stimuli/tools/abacus.jpg', 'path': 'html/stimuli/tools/abacus.jpg'},
    {'name': 'html/stimuli/tools/razorblade.jpg', 'path': 'html/stimuli/tools/razorblade.jpg'},
    {'name': 'stimuli/tools/plunger.jpg', 'path': 'stimuli/tools/plunger.jpg'},
    {'name': 'stimuli/tools/microscope.jpg', 'path': 'stimuli/tools/microscope.jpg'},
    {'name': 'html/stimuli/animals/aardvark.jpg', 'path': 'html/stimuli/animals/aardvark.jpg'},
    {'name': 'html/stimuli/tools/weldinghelmet.jpg', 'path': 'html/stimuli/tools/weldinghelmet.jpg'},
    {'name': 'html/stimuli/animals/dog2.jpg', 'path': 'html/stimuli/animals/dog2.jpg'},
    {'name': 'stimuli/animals/dolphin.jpg', 'path': 'stimuli/animals/dolphin.jpg'},
    {'name': 'stimuli/tools/spoon.jpg', 'path': 'stimuli/tools/spoon.jpg'},
    {'name': 'html/stimuli/tools/measuringdevice.jpg', 'path': 'html/stimuli/tools/measuringdevice.jpg'},
    {'name': 'phase3_order8.csv', 'path': 'phase3_order8.csv'},
    {'name': 'html/stimuli/animals/horse.jpg', 'path': 'html/stimuli/animals/horse.jpg'},
    {'name': 'stimuli/tools/telephone.jpg', 'path': 'stimuli/tools/telephone.jpg'},
    {'name': 'html/stimuli/tools/weldershammer.jpg', 'path': 'html/stimuli/tools/weldershammer.jpg'},
    {'name': 'html/stimuli/animals/perch.jpg', 'path': 'html/stimuli/animals/perch.jpg'},
    {'name': 'html/stimuli/animals/rat.jpg', 'path': 'html/stimuli/animals/rat.jpg'},
    {'name': 'stimuli/animals/leopard.jpg', 'path': 'stimuli/animals/leopard.jpg'},
    {'name': 'phase1_order8.csv', 'path': 'phase1_order8.csv'},
    {'name': 'html/stimuli/animals/palmcockatoo.jpg', 'path': 'html/stimuli/animals/palmcockatoo.jpg'},
    {'name': 'stimuli/tools/fishingpole.jpg', 'path': 'stimuli/tools/fishingpole.jpg'},
    {'name': 'html/stimuli/animals/sparrow.jpg', 'path': 'html/stimuli/animals/sparrow.jpg'},
    {'name': 'html/stimuli/tools/edger.jpg', 'path': 'html/stimuli/tools/edger.jpg'},
    {'name': 'html/stimuli/tools/digitalcamera.jpg', 'path': 'html/stimuli/tools/digitalcamera.jpg'},
    {'name': 'html/stimuli/tools/blender.jpg', 'path': 'html/stimuli/tools/blender.jpg'},
    {'name': 'html/stimuli/tools/tirespoon.jpg', 'path': 'html/stimuli/tools/tirespoon.jpg'},
    {'name': 'html/stimuli/tools/pencil.jpg', 'path': 'html/stimuli/tools/pencil.jpg'},
    {'name': 'html/stimuli/animals/flounder.jpg', 'path': 'html/stimuli/animals/flounder.jpg'},
    {'name': 'html/stimuli/animals/dragonfly.jpg', 'path': 'html/stimuli/animals/dragonfly.jpg'},
    {'name': 'html/stimuli/animals/manatee.jpg', 'path': 'html/stimuli/animals/manatee.jpg'},
    {'name': 'html/stimuli/animals/bass.jpg', 'path': 'html/stimuli/animals/bass.jpg'},
    {'name': 'stimuli/animals/wasp.jpg', 'path': 'stimuli/animals/wasp.jpg'},
    {'name': 'stimuli/animals/deer.jpg', 'path': 'stimuli/animals/deer.jpg'},
    {'name': 'html/stimuli/animals/kangaroo.jpg', 'path': 'html/stimuli/animals/kangaroo.jpg'},
    {'name': 'phase1_order2.csv', 'path': 'phase1_order2.csv'},
    {'name': 'stimuli/animals/koala.jpg', 'path': 'stimuli/animals/koala.jpg'},
    {'name': 'html/stimuli/animals/spider_threat.jpg', 'path': 'html/stimuli/animals/spider_threat.jpg'},
    {'name': 'stimuli/animals/flounder.jpg', 'path': 'stimuli/animals/flounder.jpg'},
    {'name': 'html/stimuli/animals/shark_threat.jpg', 'path': 'html/stimuli/animals/shark_threat.jpg'},
    {'name': 'html/stimuli/animals/snapper.jpg', 'path': 'html/stimuli/animals/snapper.jpg'},
    {'name': 'phase1_order6.csv', 'path': 'phase1_order6.csv'},
    {'name': 'stimuli/animals/hippo.jpg', 'path': 'stimuli/animals/hippo.jpg'},
    {'name': 'phase1_order1.csv', 'path': 'phase1_order1.csv'},
    {'name': 'html/stimuli/animals/moose.jpg', 'path': 'html/stimuli/animals/moose.jpg'},
    {'name': 'html/stimuli/animals/bluejay.jpg', 'path': 'html/stimuli/animals/bluejay.jpg'},
    {'name': 'stimuli/tools/woodchipper.jpg', 'path': 'stimuli/tools/woodchipper.jpg'},
    {'name': 'html/stimuli/animals/leopard.jpg', 'path': 'html/stimuli/animals/leopard.jpg'},
    {'name': 'stimuli/tools/stopwatch.jpg', 'path': 'stimuli/tools/stopwatch.jpg'},
    {'name': 'html/stimuli/animals/lobster.jpg', 'path': 'html/stimuli/animals/lobster.jpg'},
    {'name': 'html/stimuli/tools/italiangardeningtool.jpg', 'path': 'html/stimuli/tools/italiangardeningtool.jpg'},
    {'name': 'stimuli/animals/wolf.jpg', 'path': 'stimuli/animals/wolf.jpg'},
    {'name': 'stimuli/animals/salmon.jpg', 'path': 'stimuli/animals/salmon.jpg'},
    {'name': 'html/stimuli/animals/flamingo.jpg', 'path': 'html/stimuli/animals/flamingo.jpg'},
    {'name': 'html/stimuli/tools/electricsander.jpg', 'path': 'html/stimuli/tools/electricsander.jpg'},
    {'name': 'html/stimuli/animals/bumblebee.jpg', 'path': 'html/stimuli/animals/bumblebee.jpg'},
    {'name': 'html/stimuli/animals/pachnodasinuata.jpg', 'path': 'html/stimuli/animals/pachnodasinuata.jpg'},
    {'name': 'html/stimuli/animals/koala.jpg', 'path': 'html/stimuli/animals/koala.jpg'},
    {'name': 'html/stimuli/tools/tubeflaring.jpg', 'path': 'html/stimuli/tools/tubeflaring.jpg'},
    {'name': 'html/stimuli/animals/minnow.jpg', 'path': 'html/stimuli/animals/minnow.jpg'},
    {'name': 'html/stimuli/tools/magnifyingglass.jpg', 'path': 'html/stimuli/tools/magnifyingglass.jpg'},
    {'name': 'html/stimuli/animals/cat.jpg', 'path': 'html/stimuli/animals/cat.jpg'},
    {'name': 'html/stimuli/tools/workbench.jpg', 'path': 'html/stimuli/tools/workbench.jpg'},
    {'name': 'html/stimuli/tools/shoehorn.jpg', 'path': 'html/stimuli/tools/shoehorn.jpg'},
    {'name': 'html/stimuli/tools/electricdrill.jpg', 'path': 'html/stimuli/tools/electricdrill.jpg'},
    {'name': 'html/stimuli/tools/coathanger.jpg', 'path': 'html/stimuli/tools/coathanger.jpg'},
    {'name': 'stimuli/tools/magnet.jpg', 'path': 'stimuli/tools/magnet.jpg'},
    {'name': 'html/stimuli/animals/canary.jpg', 'path': 'html/stimuli/animals/canary.jpg'},
    {'name': 'html/stimuli/animals/bat.jpg', 'path': 'html/stimuli/animals/bat.jpg'},
    {'name': 'stimuli/tools/stove.jpg', 'path': 'stimuli/tools/stove.jpg'},
    {'name': 'html/stimuli/animals/pike.jpg', 'path': 'html/stimuli/animals/pike.jpg'},
    {'name': 'stimuli/tools/lighterbic.jpg', 'path': 'stimuli/tools/lighterbic.jpg'},
    {'name': 'stimuli/tools/tape.jpg', 'path': 'stimuli/tools/tape.jpg'},
    {'name': 'html/stimuli/animals/baboon.jpg', 'path': 'html/stimuli/animals/baboon.jpg'},
    {'name': 'stimuli/tools/planer.jpg', 'path': 'stimuli/tools/planer.jpg'},
    {'name': 'html/stimuli/tools/pressuregauge.jpg', 'path': 'html/stimuli/tools/pressuregauge.jpg'},
    {'name': 'html/stimuli/animals/baldeagle.jpg', 'path': 'html/stimuli/animals/baldeagle.jpg'},
    {'name': 'html/stimuli/animals/porcupine.jpg', 'path': 'html/stimuli/animals/porcupine.jpg'},
    {'name': 'stimuli/animals/lemur.jpg', 'path': 'stimuli/animals/lemur.jpg'},
    {'name': 'html/stimuli/tools/microscope.jpg', 'path': 'html/stimuli/tools/microscope.jpg'},
    {'name': 'html/stimuli/tools/suctioncup.jpg', 'path': 'html/stimuli/tools/suctioncup.jpg'},
    {'name': 'html/stimuli/tools/wheelbarrow.jpg', 'path': 'html/stimuli/tools/wheelbarrow.jpg'},
    {'name': 'html/stimuli/animals/elephantasian.jpg', 'path': 'html/stimuli/animals/elephantasian.jpg'},
    {'name': 'html/stimuli/animals/panda.jpg', 'path': 'html/stimuli/animals/panda.jpg'},
    {'name': 'html/stimuli/tools/ruler.jpg', 'path': 'html/stimuli/tools/ruler.jpg'},
    {'name': 'html/stimuli/animals/wildabeast.jpg', 'path': 'html/stimuli/animals/wildabeast.jpg'},
    {'name': 'phase3_order6.csv', 'path': 'phase3_order6.csv'},
    {'name': 'html/stimuli/animals/cow.jpg', 'path': 'html/stimuli/animals/cow.jpg'},
    {'name': 'stimuli/animals/waterdragon.jpg', 'path': 'stimuli/animals/waterdragon.jpg'},
    {'name': 'stimuli/animals/pelican.jpg', 'path': 'stimuli/animals/pelican.jpg'},
    {'name': 'stimuli/animals/meerkat.jpg', 'path': 'stimuli/animals/meerkat.jpg'},
    {'name': 'html/stimuli/animals/caterpillarhawkmoth.jpg', 'path': 'html/stimuli/animals/caterpillarhawkmoth.jpg'},
    {'name': 'html/stimuli/tools/level.jpg', 'path': 'html/stimuli/tools/level.jpg'},
    {'name': 'html/stimuli/tools/clippers.jpg', 'path': 'html/stimuli/tools/clippers.jpg'},
    {'name': 'phase1_order4.csv', 'path': 'phase1_order4.csv'},
    {'name': 'html/stimuli/tools/scissors.jpg', 'path': 'html/stimuli/tools/scissors.jpg'},
    {'name': 'html/stimuli/animals/tragopan.jpg', 'path': 'html/stimuli/animals/tragopan.jpg'},
    {'name': 'html/stimuli/tools/sparkplug.jpg', 'path': 'html/stimuli/tools/sparkplug.jpg'},
    {'name': 'html/stimuli/tools/duster.jpg', 'path': 'html/stimuli/tools/duster.jpg'},
    {'name': 'stimuli/tools/sewingmachine.jpg', 'path': 'stimuli/tools/sewingmachine.jpg'},
    {'name': 'html/stimuli/tools/nails.jpg', 'path': 'html/stimuli/tools/nails.jpg'},
    {'name': 'html/stimuli/animals/clam.jpg', 'path': 'html/stimuli/animals/clam.jpg'},
    {'name': 'html/stimuli/animals/rooster.jpg', 'path': 'html/stimuli/animals/rooster.jpg'},
    {'name': 'html/stimuli/animals/beetle.jpg', 'path': 'html/stimuli/animals/beetle.jpg'},
    {'name': 'html/stimuli/animals/snake_threat.jpg', 'path': 'html/stimuli/animals/snake_threat.jpg'},
    {'name': 'html/stimuli/tools/microwave.jpg', 'path': 'html/stimuli/tools/microwave.jpg'},
    {'name': 'stimuli/tools/mixer.jpg', 'path': 'stimuli/tools/mixer.jpg'},
    {'name': 'html/stimuli/animals/malaysianleafkatayid.jpg', 'path': 'html/stimuli/animals/malaysianleafkatayid.jpg'},
    {'name': 'html/stimuli/animals/springhare.jpg', 'path': 'html/stimuli/animals/springhare.jpg'},
    {'name': 'html/stimuli/tools/pick.jpg', 'path': 'html/stimuli/tools/pick.jpg'},
    {'name': 'html/stimuli/animals/gerbil.jpg', 'path': 'html/stimuli/animals/gerbil.jpg'},
    {'name': 'html/stimuli/tools/clamp.jpg', 'path': 'html/stimuli/tools/clamp.jpg'},
    {'name': 'html/stimuli/tools/fishingpole.jpg', 'path': 'html/stimuli/tools/fishingpole.jpg'},
    {'name': 'html/stimuli/animals/cranebug.jpg', 'path': 'html/stimuli/animals/cranebug.jpg'},
    {'name': 'html/stimuli/animals/alligator.jpg', 'path': 'html/stimuli/animals/alligator.jpg'},
    {'name': 'html/stimuli/tools/staplegun.jpg', 'path': 'html/stimuli/tools/staplegun.jpg'},
    {'name': 'html/stimuli/tools/toolbox.jpg', 'path': 'html/stimuli/tools/toolbox.jpg'},
    {'name': 'html/stimuli/tools/flashlight.jpg', 'path': 'html/stimuli/tools/flashlight.jpg'},
    {'name': 'html/stimuli/animals/emu.jpg', 'path': 'html/stimuli/animals/emu.jpg'},
    {'name': 'html/stimuli/tools/kettle.jpg', 'path': 'html/stimuli/tools/kettle.jpg'},
    {'name': 'html/stimuli/animals/penguin.jpg', 'path': 'html/stimuli/animals/penguin.jpg'},
    {'name': 'html/stimuli/tools/sawblade.jpg', 'path': 'html/stimuli/tools/sawblade.jpg'},
    {'name': 'html/stimuli/animals/bullfrog.jpg', 'path': 'html/stimuli/animals/bullfrog.jpg'},
    {'name': 'html/stimuli/animals/chimp.jpg', 'path': 'html/stimuli/animals/chimp.jpg'},
    {'name': 'html/stimuli/animals/crane.jpg', 'path': 'html/stimuli/animals/crane.jpg'},
    {'name': 'stimuli/tools/weldershammer.jpg', 'path': 'stimuli/tools/weldershammer.jpg'},
    {'name': 'html/stimuli/animals/angelfish.jpg', 'path': 'html/stimuli/animals/angelfish.jpg'},
    {'name': 'stimuli_practice/manmade/baseball01a.jpg', 'path': 'stimuli_practice/manmade/baseball01a.jpg'},
    {'name': 'stimuli/animals/gorilla.jpg', 'path': 'stimuli/animals/gorilla.jpg'},
    {'name': 'html/stimuli/tools/cuttingboard.jpg', 'path': 'html/stimuli/tools/cuttingboard.jpg'},
    {'name': 'stimuli/animals/seahorse.jpg', 'path': 'stimuli/animals/seahorse.jpg'},
    {'name': 'html/stimuli/tools/glove.jpg', 'path': 'html/stimuli/tools/glove.jpg'},
    {'name': 'html/stimuli/animals/rosechafer.jpg', 'path': 'html/stimuli/animals/rosechafer.jpg'},
    {'name': 'phase3_order7.csv', 'path': 'phase3_order7.csv'},
    {'name': 'html/stimuli/tools/wateringcan.jpg', 'path': 'html/stimuli/tools/wateringcan.jpg'},
    {'name': 'html/stimuli/tools/rake.jpg', 'path': 'html/stimuli/tools/rake.jpg'},
    {'name': 'html/stimuli/tools/hairdryer.jpg', 'path': 'html/stimuli/tools/hairdryer.jpg'},
    {'name': 'html/stimuli/tools/trowel.jpg', 'path': 'html/stimuli/tools/trowel.jpg'},
    {'name': 'stimuli/animals/firebug.jpg', 'path': 'stimuli/animals/firebug.jpg'},
    {'name': 'stimuli_practice/natural/feather03a.jpg', 'path': 'stimuli_practice/natural/feather03a.jpg'},
    {'name': 'html/stimuli/animals/slug.jpg', 'path': 'html/stimuli/animals/slug.jpg'},
    {'name': 'html/stimuli/animals/goat.jpg', 'path': 'html/stimuli/animals/goat.jpg'},
    {'name': 'stimuli_practice/natural/rock01a.jpg', 'path': 'stimuli_practice/natural/rock01a.jpg'},
    {'name': 'html/stimuli/tools/crutches.jpg', 'path': 'html/stimuli/tools/crutches.jpg'},
    {'name': 'html/stimuli/animals/malaysianjunglenymph.jpg', 'path': 'html/stimuli/animals/malaysianjunglenymph.jpg'},
    {'name': 'stimuli_practice/natural/soil.jpg', 'path': 'stimuli_practice/natural/soil.jpg'},
    {'name': 'html/stimuli/animals/bison.jpg', 'path': 'html/stimuli/animals/bison.jpg'},
    {'name': 'html/stimuli/animals/gecko.jpg', 'path': 'html/stimuli/animals/gecko.jpg'},
    {'name': 'html/stimuli/animals/mole.jpg', 'path': 'html/stimuli/animals/mole.jpg'},
    {'name': 'stimuli/animals/tiger.jpg', 'path': 'stimuli/animals/tiger.jpg'},
    {'name': 'html/stimuli/tools/paintgun.jpg', 'path': 'html/stimuli/tools/paintgun.jpg'},
    {'name': 'html/stimuli/animals/lobsterspiny.jpg', 'path': 'html/stimuli/animals/lobsterspiny.jpg'},
    {'name': 'html/stimuli/tools/hairbrush.jpg', 'path': 'html/stimuli/tools/hairbrush.jpg'},
    {'name': 'stimuli/tools/reflexhammer.jpg', 'path': 'stimuli/tools/reflexhammer.jpg'},
    {'name': 'stimuli/tools/stethoscope.jpg', 'path': 'stimuli/tools/stethoscope.jpg'},
    {'name': 'html/stimuli/tools/ropeandpulley.jpg', 'path': 'html/stimuli/tools/ropeandpulley.jpg'},
    {'name': 'html/stimuli/animals/pachnoda.jpg', 'path': 'html/stimuli/animals/pachnoda.jpg'},
    {'name': 'html/stimuli/tools/caulkinggun.jpg', 'path': 'html/stimuli/tools/caulkinggun.jpg'},
    {'name': 'phase3_order4.csv', 'path': 'phase3_order4.csv'},
    {'name': 'stimuli/tools/carjack.jpg', 'path': 'stimuli/tools/carjack.jpg'},
    {'name': 'html/stimuli/animals/seal.jpg', 'path': 'html/stimuli/animals/seal.jpg'},
    {'name': 'stimuli/tools/television.jpg', 'path': 'stimuli/tools/television.jpg'},
    {'name': 'stimuli/animals/salamander.jpg', 'path': 'stimuli/animals/salamander.jpg'},
    {'name': 'html/stimuli/animals/skunk.jpg', 'path': 'html/stimuli/animals/skunk.jpg'},
    {'name': 'html/stimuli/tools/pliers.jpg', 'path': 'html/stimuli/tools/pliers.jpg'},
    {'name': 'stimuli/animals/carp.jpg', 'path': 'stimuli/animals/carp.jpg'},
    {'name': 'html/stimuli/animals/pigeon.jpg', 'path': 'html/stimuli/animals/pigeon.jpg'},
    {'name': 'html/stimuli/animals/squirel.jpg', 'path': 'html/stimuli/animals/squirel.jpg'},
    {'name': 'html/stimuli/animals/frog.jpg', 'path': 'html/stimuli/animals/frog.jpg'},
    {'name': 'html/stimuli/tools/pruner.jpg', 'path': 'html/stimuli/tools/pruner.jpg'},
    {'name': 'html/stimuli/tools/vicegrips.jpg', 'path': 'html/stimuli/tools/vicegrips.jpg'},
    {'name': 'stimuli/tools/thermometer.jpg', 'path': 'stimuli/tools/thermometer.jpg'},
    {'name': 'html/stimuli/tools/lighterbic.jpg', 'path': 'html/stimuli/tools/lighterbic.jpg'},
    {'name': 'html/stimuli/tools/fertilzerspread.jpg', 'path': 'html/stimuli/tools/fertilzerspread.jpg'},
    {'name': 'html/stimuli/tools/mellonballer.jpg', 'path': 'html/stimuli/tools/mellonballer.jpg'},
    {'name': 'phase1_order5.csv', 'path': 'phase1_order5.csv'},
    {'name': 'html/stimuli/animals/anteater.jpg', 'path': 'html/stimuli/animals/anteater.jpg'},
    {'name': 'stimuli/animals/finch.jpg', 'path': 'stimuli/animals/finch.jpg'},
    {'name': 'html/stimuli/tools/spraybottle.jpg', 'path': 'html/stimuli/tools/spraybottle.jpg'},
    {'name': 'html/stimuli/animals/sugarglider.jpg', 'path': 'html/stimuli/animals/sugarglider.jpg'},
    {'name': 'stimuli/animals/redpalmweevil.jpg', 'path': 'stimuli/animals/redpalmweevil.jpg'},
    {'name': 'stimuli/tools/anvil.jpg', 'path': 'stimuli/tools/anvil.jpg'},
    {'name': 'stimuli/tools/ruler.jpg', 'path': 'stimuli/tools/ruler.jpg'},
    {'name': 'html/stimuli/tools/bottleopener.jpg', 'path': 'html/stimuli/tools/bottleopener.jpg'},
    {'name': 'html/stimuli/tools/monkeywrench.jpg', 'path': 'html/stimuli/tools/monkeywrench.jpg'},
    {'name': 'phase3_order3.csv', 'path': 'phase3_order3.csv'},
    {'name': 'stimuli_practice/cues/cue_white.jpg', 'path': 'stimuli_practice/cues/cue_white.jpg'},
    {'name': 'html/stimuli/tools/beaker.jpg', 'path': 'html/stimuli/tools/beaker.jpg'},
    {'name': 'html/stimuli/animals/ant.jpg', 'path': 'html/stimuli/animals/ant.jpg'},
    {'name': 'html/stimuli/tools/cheesegrater.jpg', 'path': 'html/stimuli/tools/cheesegrater.jpg'},
    {'name': 'html/stimuli/animals/hippo.jpg', 'path': 'html/stimuli/animals/hippo.jpg'},
    {'name': 'html/stimuli/tools/treadmill.jpg', 'path': 'html/stimuli/tools/treadmill.jpg'},
    {'name': 'stimuli/animals/partridge.jpg', 'path': 'stimuli/animals/partridge.jpg'},
    {'name': 'html/stimuli/animals/fox.jpg', 'path': 'html/stimuli/animals/fox.jpg'},
    {'name': 'stimuli/tools/bolt.jpg', 'path': 'stimuli/tools/bolt.jpg'},
    {'name': 'stimuli/tools/computermouse.jpg', 'path': 'stimuli/tools/computermouse.jpg'},
    {'name': 'html/stimuli/tools/handdrill.jpg', 'path': 'html/stimuli/tools/handdrill.jpg'},
    {'name': 'html/stimuli/animals/jackal.jpg', 'path': 'html/stimuli/animals/jackal.jpg'},
    {'name': 'html/stimuli/animals/mahimahi.jpg', 'path': 'html/stimuli/animals/mahimahi.jpg'},
    {'name': 'html/stimuli/animals/prayingmantis.jpg', 'path': 'html/stimuli/animals/prayingmantis.jpg'},
    {'name': 'html/stimuli/animals/orangutan.jpg', 'path': 'html/stimuli/animals/orangutan.jpg'},
    {'name': 'html/stimuli/animals/cod.jpg', 'path': 'html/stimuli/animals/cod.jpg'},
    {'name': 'html/stimuli/tools/pencilsharpener.jpg', 'path': 'html/stimuli/tools/pencilsharpener.jpg'},
    {'name': 'html/stimuli/animals/hummingbird.jpg', 'path': 'html/stimuli/animals/hummingbird.jpg'},
    {'name': 'html/stimuli/tools/rollingpin.jpg', 'path': 'html/stimuli/tools/rollingpin.jpg'},
    {'name': 'html/stimuli/animals/otter.jpg', 'path': 'html/stimuli/animals/otter.jpg'},
    {'name': 'html/stimuli/animals/woodlouse.jpg', 'path': 'html/stimuli/animals/woodlouse.jpg'},
    {'name': 'html/stimuli/tools/tape.jpg', 'path': 'html/stimuli/tools/tape.jpg'},
    {'name': 'html/stimuli/animals/halibut.jpg', 'path': 'html/stimuli/animals/halibut.jpg'},
    {'name': 'stimuli/tools/tubeflaring.jpg', 'path': 'stimuli/tools/tubeflaring.jpg'},
    {'name': 'html/stimuli/tools/drill.jpg', 'path': 'html/stimuli/tools/drill.jpg'},
    {'name': 'html/stimuli/tools/carabiner.jpg', 'path': 'html/stimuli/tools/carabiner.jpg'},
    {'name': 'stimuli/tools/hedgeshears.jpg', 'path': 'stimuli/tools/hedgeshears.jpg'},
    {'name': 'html/stimuli/animals/moth.jpg', 'path': 'html/stimuli/animals/moth.jpg'},
    {'name': 'stimuli/tools/burnisher.jpg', 'path': 'stimuli/tools/burnisher.jpg'},
    {'name': 'html/stimuli/tools/broom.jpg', 'path': 'html/stimuli/tools/broom.jpg'},
    {'name': 'html/stimuli/animals/octopus.jpg', 'path': 'html/stimuli/animals/octopus.jpg'},
    {'name': 'phase2_order4.csv', 'path': 'phase2_order4.csv'},
    {'name': 'stimuli/tools/sponge.jpg', 'path': 'stimuli/tools/sponge.jpg'},
    {'name': 'html/stimuli/tools/squeegee.jpg', 'path': 'html/stimuli/tools/squeegee.jpg'},
    {'name': 'html/stimuli/animals/crow.jpg', 'path': 'html/stimuli/animals/crow.jpg'},
    {'name': 'html/stimuli/animals/mink.jpg', 'path': 'html/stimuli/animals/mink.jpg'},
    {'name': 'html/stimuli/animals/llama.jpg', 'path': 'html/stimuli/animals/llama.jpg'},
    {'name': 'stimuli/tools/hairdryer.jpg', 'path': 'stimuli/tools/hairdryer.jpg'},
    {'name': 'html/stimuli/animals/millipede.jpg', 'path': 'html/stimuli/animals/millipede.jpg'},
    {'name': 'phase2_order3.csv', 'path': 'phase2_order3.csv'},
    {'name': 'html/stimuli/tools/circlecutter.jpg', 'path': 'html/stimuli/tools/circlecutter.jpg'},
    {'name': 'html/stimuli/tools/crank.jpg', 'path': 'html/stimuli/tools/crank.jpg'},
    {'name': 'stimuli/tools/fertilzerspread.jpg', 'path': 'stimuli/tools/fertilzerspread.jpg'},
    {'name': 'html/stimuli/animals/ferret.jpg', 'path': 'html/stimuli/animals/ferret.jpg'},
    {'name': 'html/stimuli/tools/screwdriver.jpg', 'path': 'html/stimuli/tools/screwdriver.jpg'},
    {'name': 'stimuli/animals/slug.jpg', 'path': 'stimuli/animals/slug.jpg'},
    {'name': 'html/stimuli/tools/toaster.jpg', 'path': 'html/stimuli/tools/toaster.jpg'},
    {'name': 'html/stimuli/animals/earthworm.jpg', 'path': 'html/stimuli/animals/earthworm.jpg'},
    {'name': 'stimuli/tools/chisel.jpg', 'path': 'stimuli/tools/chisel.jpg'},
    {'name': 'html/stimuli/animals/fly.jpg', 'path': 'html/stimuli/animals/fly.jpg'},
    {'name': 'phase3_order2.csv', 'path': 'phase3_order2.csv'},
    {'name': 'html/stimuli/animals/quail.jpg', 'path': 'html/stimuli/animals/quail.jpg'},
    {'name': 'html/stimuli/animals/lion_threat.jpg', 'path': 'html/stimuli/animals/lion_threat.jpg'},
    {'name': 'stimuli/animals/ram.jpg', 'path': 'stimuli/animals/ram.jpg'},
    {'name': 'html/stimuli/animals/iguana.jpg', 'path': 'html/stimuli/animals/iguana.jpg'},
    {'name': 'stimuli/tools/electricpipethreader.jpg', 'path': 'stimuli/tools/electricpipethreader.jpg'},
    {'name': 'stimuli/animals/alligator.jpg', 'path': 'stimuli/animals/alligator.jpg'},
    {'name': 'html/stimuli/tools/drillbit.jpg', 'path': 'html/stimuli/tools/drillbit.jpg'},
    {'name': 'html/stimuli/animals/sheep.jpg', 'path': 'html/stimuli/animals/sheep.jpg'},
    {'name': 'phase3_practice.csv', 'path': 'phase3_practice.csv'},
    {'name': 'html/stimuli/tools/magnet.jpg', 'path': 'html/stimuli/tools/magnet.jpg'},
    {'name': 'html/stimuli/tools/corkscrew.jpg', 'path': 'html/stimuli/tools/corkscrew.jpg'},
    {'name': 'html/stimuli/animals/prairiedog.jpg', 'path': 'html/stimuli/animals/prairiedog.jpg'},
    {'name': 'html/stimuli/animals/bushdog.jpg', 'path': 'html/stimuli/animals/bushdog.jpg'},
    {'name': 'html/stimuli/animals/rainbowtrout.jpg', 'path': 'html/stimuli/animals/rainbowtrout.jpg'},
    {'name': 'html/stimuli/tools/hedgeshears.jpg', 'path': 'html/stimuli/tools/hedgeshears.jpg'},
    {'name': 'html/stimuli/tools/bucket.jpg', 'path': 'html/stimuli/tools/bucket.jpg'},
    {'name': 'html/stimuli/tools/curlingiron.jpg', 'path': 'html/stimuli/tools/curlingiron.jpg'},
    {'name': 'html/stimuli/animals/dockbug2.jpg', 'path': 'html/stimuli/animals/dockbug2.jpg'},
    {'name': 'html/stimuli/tools/hourglass.jpg', 'path': 'html/stimuli/tools/hourglass.jpg'},
    {'name': 'stimuli/tools/oven.jpg', 'path': 'stimuli/tools/oven.jpg'},
    {'name': 'html/stimuli/animals/salamander.jpg', 'path': 'html/stimuli/animals/salamander.jpg'},
    {'name': 'html/stimuli/tools/lawnmower.jpg', 'path': 'html/stimuli/tools/lawnmower.jpg'},
    {'name': 'html/stimuli/tools/stapler.jpg', 'path': 'html/stimuli/tools/stapler.jpg'},
    {'name': 'stimuli/animals/chimp.jpg', 'path': 'stimuli/animals/chimp.jpg'},
    {'name': 'html/stimuli/animals/meerkat.jpg', 'path': 'html/stimuli/animals/meerkat.jpg'},
    {'name': 'html/stimuli/animals/highlandcow.jpg', 'path': 'html/stimuli/animals/highlandcow.jpg'},
    {'name': 'html/stimuli/tools/plow.jpg', 'path': 'html/stimuli/tools/plow.jpg'},
    {'name': 'html/stimuli/tools/watch.jpg', 'path': 'html/stimuli/tools/watch.jpg'},
    {'name': 'html/stimuli/tools/planer.jpg', 'path': 'html/stimuli/tools/planer.jpg'},
    {'name': 'html/stimuli/animals/donkey.jpg', 'path': 'html/stimuli/animals/donkey.jpg'},
    {'name': 'html/stimuli/tools/reflexhammer.jpg', 'path': 'html/stimuli/tools/reflexhammer.jpg'},
    {'name': 'phase1_practice.csv', 'path': 'phase1_practice.csv'},
    {'name': 'html/stimuli/tools/sponge.jpg', 'path': 'html/stimuli/tools/sponge.jpg'},
    {'name': 'html/stimuli/tools/campingstove.jpg', 'path': 'html/stimuli/tools/campingstove.jpg'},
    {'name': 'html/stimuli/tools/caliper.jpg', 'path': 'html/stimuli/tools/caliper.jpg'},
    {'name': 'html/stimuli/animals/caterpillar.jpg', 'path': 'html/stimuli/animals/caterpillar.jpg'},
    {'name': 'stimuli/tools/headphones.jpg', 'path': 'stimuli/tools/headphones.jpg'},
    {'name': 'html/stimuli/tools/gardenhose.jpg', 'path': 'html/stimuli/tools/gardenhose.jpg'},
    {'name': 'html/stimuli/tools/ladder.jpg', 'path': 'html/stimuli/tools/ladder.jpg'},
    {'name': 'stimuli/tools/measuringdevice.jpg', 'path': 'stimuli/tools/measuringdevice.jpg'},
    {'name': 'html/stimuli/tools/iron.jpg', 'path': 'html/stimuli/tools/iron.jpg'},
    {'name': 'html/stimuli/tools/beadingtool.jpg', 'path': 'html/stimuli/tools/beadingtool.jpg'},
    {'name': 'html/stimuli/tools/gentssaw.jpg', 'path': 'html/stimuli/tools/gentssaw.jpg'},
    {'name': 'html/stimuli/animals/chicken.jpg', 'path': 'html/stimuli/animals/chicken.jpg'},
    {'name': 'html/stimuli/tools/viceclamp.jpg', 'path': 'html/stimuli/tools/viceclamp.jpg'},
    {'name': 'stimuli/animals/stinkbug.jpg', 'path': 'stimuli/animals/stinkbug.jpg'},
    {'name': 'stimuli/tools/clippers.jpg', 'path': 'stimuli/tools/clippers.jpg'},
    {'name': 'html/stimuli/animals/rabbit.jpg', 'path': 'html/stimuli/animals/rabbit.jpg'},
    {'name': 'html/stimuli/animals/seaslug.jpg', 'path': 'html/stimuli/animals/seaslug.jpg'},
    {'name': 'html/stimuli/tools/gong.jpg', 'path': 'html/stimuli/tools/gong.jpg'},
    {'name': 'html/stimuli/animals/vulture.jpg', 'path': 'html/stimuli/animals/vulture.jpg'},
    {'name': 'html/stimuli/animals/starfish.jpg', 'path': 'html/stimuli/animals/starfish.jpg'},
    {'name': 'html/stimuli/animals/deer.jpg', 'path': 'html/stimuli/animals/deer.jpg'},
    {'name': 'html/stimuli/animals/dockbug.jpg', 'path': 'html/stimuli/animals/dockbug.jpg'},
    {'name': 'html/stimuli/animals/firebug.jpg', 'path': 'html/stimuli/animals/firebug.jpg'},
    {'name': 'html/stimuli/animals/clownfish.jpg', 'path': 'html/stimuli/animals/clownfish.jpg'},
    {'name': 'stimuli_practice/manmade/plasticgallon.jpg', 'path': 'stimuli_practice/manmade/plasticgallon.jpg'},
    {'name': 'html/stimuli/animals/lemur.jpg', 'path': 'html/stimuli/animals/lemur.jpg'},
    {'name': 'html/stimuli/tools/loom.jpg', 'path': 'html/stimuli/tools/loom.jpg'},
    {'name': 'stimuli/tools/lantern.jpg', 'path': 'stimuli/tools/lantern.jpg'},
    {'name': 'stimuli/tools/hammer.jpg', 'path': 'stimuli/tools/hammer.jpg'},
    {'name': 'html/stimuli/tools/avocadoslicer.jpg', 'path': 'html/stimuli/tools/avocadoslicer.jpg'},
    {'name': 'stimuli/cues/cue_white.jpg', 'path': 'stimuli/cues/cue_white.jpg'},
    {'name': 'html/stimuli/animals/brown_bear.jpg', 'path': 'html/stimuli/animals/brown_bear.jpg'},
    {'name': 'html/stimuli/animals/duck.jpg', 'path': 'html/stimuli/animals/duck.jpg'},
    {'name': 'html/stimuli/animals/centipede_threat.jpg', 'path': 'html/stimuli/animals/centipede_threat.jpg'},
    {'name': 'html/stimuli/tools/generator.jpg', 'path': 'html/stimuli/tools/generator.jpg'},
    {'name': 'html/stimuli/tools/burnisher.jpg', 'path': 'html/stimuli/tools/burnisher.jpg'},
    {'name': 'html/stimuli/animals/peacock.jpg', 'path': 'html/stimuli/animals/peacock.jpg'},
    {'name': 'html/stimuli/animals/shark.jpg', 'path': 'html/stimuli/animals/shark.jpg'},
    {'name': 'html/stimuli/animals/hyena.jpg', 'path': 'html/stimuli/animals/hyena.jpg'},
    {'name': 'html/stimuli/tools/weedeater.jpg', 'path': 'html/stimuli/tools/weedeater.jpg'},
    {'name': 'phase1_order3.csv', 'path': 'phase1_order3.csv'},
    {'name': 'html/stimuli/tools/windchime.jpg', 'path': 'html/stimuli/tools/windchime.jpg'},
    {'name': 'html/stimuli/animals/heckcattle.jpg', 'path': 'html/stimuli/animals/heckcattle.jpg'},
    {'name': 'phase2_practice.csv', 'path': 'phase2_practice.csv'},
    {'name': 'html/stimuli/tools/camera.jpg', 'path': 'html/stimuli/tools/camera.jpg'},
    {'name': 'html/stimuli/animals/lizard.jpg', 'path': 'html/stimuli/animals/lizard.jpg'},
    {'name': 'html/stimuli/animals/finch.jpg', 'path': 'html/stimuli/animals/finch.jpg'},
    {'name': 'html/stimuli/animals/hedgehog.jpg', 'path': 'html/stimuli/animals/hedgehog.jpg'},
    {'name': 'html/stimuli/animals/gorilla.jpg', 'path': 'html/stimuli/animals/gorilla.jpg'},
    {'name': 'html/stimuli/animals/racoon.jpg', 'path': 'html/stimuli/animals/racoon.jpg'},
    {'name': 'html/stimuli/tools/videogamecontroller.jpg', 'path': 'html/stimuli/tools/videogamecontroller.jpg'},
    {'name': 'stimuli/animals/elephantafrican.jpg', 'path': 'stimuli/animals/elephantafrican.jpg'},
    {'name': 'html/stimuli/tools/routerplane.jpg', 'path': 'html/stimuli/tools/routerplane.jpg'},
    {'name': 'html/stimuli/tools/tongs.jpg', 'path': 'html/stimuli/tools/tongs.jpg'},
    {'name': 'html/stimuli/tools/faxmachine.jpg', 'path': 'html/stimuli/tools/faxmachine.jpg'},
    {'name': 'html/stimuli/animals/caracal.jpg', 'path': 'html/stimuli/animals/caracal.jpg'},
    {'name': 'stimuli/animals/reindeer.jpg', 'path': 'stimuli/animals/reindeer.jpg'},
    {'name': 'stimuli/tools/carabiner.jpg', 'path': 'stimuli/tools/carabiner.jpg'},
    {'name': 'stimuli/tools/sawblade.jpg', 'path': 'stimuli/tools/sawblade.jpg'},
    {'name': 'html/stimuli/tools/airhorn.jpg', 'path': 'html/stimuli/tools/airhorn.jpg'},
    {'name': 'stimuli/animals/waterbuffalo.jpg', 'path': 'stimuli/animals/waterbuffalo.jpg'},
    {'name': 'html/stimuli/tools/jumpercables.jpg', 'path': 'html/stimuli/tools/jumpercables.jpg'},
    {'name': 'html/stimuli/tools/auger.jpg', 'path': 'html/stimuli/tools/auger.jpg'},
    {'name': 'stimuli/animals/shark.jpg', 'path': 'stimuli/animals/shark.jpg'},
    {'name': 'html/stimuli/animals/crab.jpg', 'path': 'html/stimuli/animals/crab.jpg'},
    {'name': 'html/stimuli/tools/sledgehammer.jpg', 'path': 'html/stimuli/tools/sledgehammer.jpg'},
    {'name': 'html/stimuli/tools/sprinkler.jpg', 'path': 'html/stimuli/tools/sprinkler.jpg'},
    {'name': 'html/stimuli/animals/tiger.jpg', 'path': 'html/stimuli/animals/tiger.jpg'},
    {'name': 'html/stimuli/animals/dolphin.jpg', 'path': 'html/stimuli/animals/dolphin.jpg'},
    {'name': 'html/stimuli/animals/marlin.jpg', 'path': 'html/stimuli/animals/marlin.jpg'},
    {'name': 'html/stimuli/tools/electricsewingmachine.jpg', 'path': 'html/stimuli/tools/electricsewingmachine.jpg'},
    {'name': 'html/stimuli/tools/walker.jpg', 'path': 'html/stimuli/tools/walker.jpg'},
    {'name': 'html/stimuli/tools/scratchawl.jpg', 'path': 'html/stimuli/tools/scratchawl.jpg'},
    {'name': 'stimuli/animals/clownfish.jpg', 'path': 'stimuli/animals/clownfish.jpg'},
    {'name': 'html/stimuli/tools/electricpipethreader.jpg', 'path': 'html/stimuli/tools/electricpipethreader.jpg'},
    {'name': 'html/stimuli/tools/stopwatch.jpg', 'path': 'html/stimuli/tools/stopwatch.jpg'},
    {'name': 'stimuli/animals/mole.jpg', 'path': 'stimuli/animals/mole.jpg'},
    {'name': 'html/stimuli/tools/spoon.jpg', 'path': 'html/stimuli/tools/spoon.jpg'},
    {'name': 'html/stimuli/tools/carpetblower.jpg', 'path': 'html/stimuli/tools/carpetblower.jpg'},
    {'name': 'html/stimuli/animals/toucan.jpg', 'path': 'html/stimuli/animals/toucan.jpg'},
    {'name': 'html/stimuli/animals/elephantafrican.jpg', 'path': 'html/stimuli/animals/elephantafrican.jpg'},
    {'name': 'html/stimuli/tools/electricbreaker.jpg', 'path': 'html/stimuli/tools/electricbreaker.jpg'},
    {'name': 'html/stimuli/animals/partridge.jpg', 'path': 'html/stimuli/animals/partridge.jpg'},
    {'name': 'stimuli/tools/magnifyingglass.jpg', 'path': 'stimuli/tools/magnifyingglass.jpg'},
    {'name': 'html/stimuli/tools/sander.jpg', 'path': 'html/stimuli/tools/sander.jpg'},
    {'name': 'html/stimuli/animals/chinchilla.jpg', 'path': 'html/stimuli/animals/chinchilla.jpg'},
    {'name': 'html/stimuli/tools/washboard.jpg', 'path': 'html/stimuli/tools/washboard.jpg'},
    {'name': 'stimuli/animals/cranebug.jpg', 'path': 'stimuli/animals/cranebug.jpg'},
    {'name': 'html/stimuli/tools/blackboard.jpg', 'path': 'html/stimuli/tools/blackboard.jpg'},
    {'name': 'html/stimuli/tools/paintroller.jpg', 'path': 'html/stimuli/tools/paintroller.jpg'},
    {'name': 'html/stimuli/animals/pillmillipede.jpg', 'path': 'html/stimuli/animals/pillmillipede.jpg'},
    {'name': 'html/stimuli/animals/waterbuffalo.jpg', 'path': 'html/stimuli/animals/waterbuffalo.jpg'},
    {'name': 'html/stimuli/tools/headphones.jpg', 'path': 'html/stimuli/tools/headphones.jpg'},
    {'name': 'stimuli/animals/perch.jpg', 'path': 'stimuli/animals/perch.jpg'},
    {'name': 'html/stimuli/tools/keys.jpg', 'path': 'html/stimuli/tools/keys.jpg'},
    {'name': 'html/stimuli/tools/ladel.jpg', 'path': 'html/stimuli/tools/ladel.jpg'},
    {'name': 'html/stimuli/animals/balloonfish.jpg', 'path': 'html/stimuli/animals/balloonfish.jpg'},
    {'name': 'stimuli/tools/routerplane.jpg', 'path': 'stimuli/tools/routerplane.jpg'},
    {'name': 'html/stimuli/animals/caiman.jpg', 'path': 'html/stimuli/animals/caiman.jpg'},
    {'name': 'html/stimuli/animals/mountainsheep.jpg', 'path': 'html/stimuli/animals/mountainsheep.jpg'},
    {'name': 'html/stimuli/animals/salmon.jpg', 'path': 'html/stimuli/animals/salmon.jpg'},
    {'name': 'html/stimuli/tools/chainsaw.jpg', 'path': 'html/stimuli/tools/chainsaw.jpg'},
    {'name': 'html/stimuli/tools/levelmount.jpg', 'path': 'html/stimuli/tools/levelmount.jpg'},
    {'name': 'html/stimuli/animals/waterdragon.jpg', 'path': 'html/stimuli/animals/waterdragon.jpg'},
    {'name': 'html/stimuli/animals/wolf.jpg', 'path': 'html/stimuli/animals/wolf.jpg'},
    {'name': 'stimuli/tools/scale.jpg', 'path': 'stimuli/tools/scale.jpg'},
    {'name': 'stimuli/animals/balloonfish.jpg', 'path': 'stimuli/animals/balloonfish.jpg'},
    {'name': 'html/stimuli/animals/pig.jpg', 'path': 'html/stimuli/animals/pig.jpg'},
    {'name': 'html/stimuli/animals/ram.jpg', 'path': 'html/stimuli/animals/ram.jpg'},
    {'name': 'html/stimuli/animals/seahorse.jpg', 'path': 'html/stimuli/animals/seahorse.jpg'},
    {'name': 'html/stimuli/animals/zebra.jpg', 'path': 'html/stimuli/animals/zebra.jpg'},
    {'name': 'stimuli/tools/crutches.jpg', 'path': 'stimuli/tools/crutches.jpg'},
    {'name': 'html/stimuli/tools/wheeldolly.jpg', 'path': 'html/stimuli/tools/wheeldolly.jpg'},
    {'name': 'phase3_order1.csv', 'path': 'phase3_order1.csv'},
    {'name': 'html/stimuli/tools/hammer.jpg', 'path': 'html/stimuli/tools/hammer.jpg'},
    {'name': 'stimuli/animals/tragopan.jpg', 'path': 'stimuli/animals/tragopan.jpg'},
    {'name': 'html/stimuli/tools/measuringcups.jpg', 'path': 'html/stimuli/tools/measuringcups.jpg'},
    {'name': 'html/stimuli/tools/airpump.jpg', 'path': 'html/stimuli/tools/airpump.jpg'},
    {'name': 'html/stimuli/animals/rhino.jpg', 'path': 'html/stimuli/animals/rhino.jpg'},
    {'name': 'stimuli/animals/baboon.jpg', 'path': 'stimuli/animals/baboon.jpg'},
    {'name': 'stimuli/animals/hummingbird.jpg', 'path': 'stimuli/animals/hummingbird.jpg'},
    {'name': 'stimuli_practice/natural/starfish01.jpg', 'path': 'stimuli_practice/natural/starfish01.jpg'},
    {'name': 'html/stimuli/tools/telescope.jpg', 'path': 'html/stimuli/tools/telescope.jpg'},
    {'name': 'html/stimuli/tools/extensioncord.jpg', 'path': 'html/stimuli/tools/extensioncord.jpg'},
    {'name': 'html/stimuli/animals/plantbug.jpg', 'path': 'html/stimuli/animals/plantbug.jpg'},
    {'name': 'phase1_order7.csv', 'path': 'phase1_order7.csv'},
    {'name': 'html/stimuli/tools/hoe.jpg', 'path': 'html/stimuli/tools/hoe.jpg'},
    {'name': 'html/stimuli/animals/snail.jpg', 'path': 'html/stimuli/animals/snail.jpg'},
    {'name': 'html/stimuli/animals/wasp.jpg', 'path': 'html/stimuli/animals/wasp.jpg'},
    {'name': 'html/stimuli/animals/owl.jpg', 'path': 'html/stimuli/animals/owl.jpg'},
    {'name': 'html/stimuli/animals/giraffe.jpg', 'path': 'html/stimuli/animals/giraffe.jpg'},
    {'name': 'html/stimuli/tools/mop.jpg', 'path': 'html/stimuli/tools/mop.jpg'},
    {'name': 'html/stimuli/animals/dog.jpg', 'path': 'html/stimuli/animals/dog.jpg'},
    {'name': 'stimuli/tools/toaster.jpg', 'path': 'stimuli/tools/toaster.jpg'},
    {'name': 'html/stimuli/tools/stethoscope.jpg', 'path': 'html/stimuli/tools/stethoscope.jpg'},
    {'name': 'html/stimuli/tools/circularsaw.jpg', 'path': 'html/stimuli/tools/circularsaw.jpg'},
    {'name': 'stimuli_practice/manmade/pictureframe04.jpg', 'path': 'stimuli_practice/manmade/pictureframe04.jpg'},
    {'name': 'stimuli/animals/caterpillar.jpg', 'path': 'stimuli/animals/caterpillar.jpg'},
    {'name': 'html/stimuli/animals/koi.jpg', 'path': 'html/stimuli/animals/koi.jpg'},
    {'name': 'html/stimuli/tools/ducttape.jpg', 'path': 'html/stimuli/tools/ducttape.jpg'},
    {'name': 'html/stimuli/animals/macaw.jpg', 'path': 'html/stimuli/animals/macaw.jpg'},
    {'name': 'stimuli/tools/compass.jpg', 'path': 'stimuli/tools/compass.jpg'},
    {'name': 'html/stimuli/tools/tuner.jpg', 'path': 'html/stimuli/tools/tuner.jpg'},
    {'name': 'stimuli_practice/manmade/mousetrap.jpg', 'path': 'stimuli_practice/manmade/mousetrap.jpg'},
    {'name': 'html/stimuli/tools/nailgun.jpg', 'path': 'html/stimuli/tools/nailgun.jpg'},
    {'name': 'html/stimuli/tools/transmissionwrench.jpg', 'path': 'html/stimuli/tools/transmissionwrench.jpg'},
    {'name': 'html/stimuli/animals/shrimp.jpg', 'path': 'html/stimuli/animals/shrimp.jpg'},
    {'name': 'html/stimuli/animals/shieldbug.jpg', 'path': 'html/stimuli/animals/shieldbug.jpg'},
    {'name': 'stimuli/animals/ostrich.jpg', 'path': 'stimuli/animals/ostrich.jpg'},
    {'name': 'html/stimuli/tools/pliers2.jpg', 'path': 'html/stimuli/tools/pliers2.jpg'},
    {'name': 'html/stimuli/tools/tubingbender.jpg', 'path': 'html/stimuli/tools/tubingbender.jpg'},
    {'name': 'html/stimuli/animals/grasshopper.jpg', 'path': 'html/stimuli/animals/grasshopper.jpg'},
    {'name': 'html/stimuli/animals/assassinbug.jpg', 'path': 'html/stimuli/animals/assassinbug.jpg'},
    {'name': 'html/stimuli/tools/wrench.jpg', 'path': 'html/stimuli/tools/wrench.jpg'},
    {'name': 'stimuli/animals/llama.jpg', 'path': 'stimuli/animals/llama.jpg'},
    {'name': 'html/stimuli/tools/lantern.jpg', 'path': 'html/stimuli/tools/lantern.jpg'},
    {'name': 'stimuli/animals/goldfish.jpg', 'path': 'stimuli/animals/goldfish.jpg'},
    {'name': 'html/stimuli/animals/mouse.jpg', 'path': 'html/stimuli/animals/mouse.jpg'},
    {'name': 'html/stimuli/animals/stinkbug.jpg', 'path': 'html/stimuli/animals/stinkbug.jpg'},
    {'name': 'stimuli/animals/mouse.jpg', 'path': 'stimuli/animals/mouse.jpg'},
    {'name': 'stimuli/tools/drill.jpg', 'path': 'stimuli/tools/drill.jpg'},
    {'name': 'html/stimuli/animals/cricket.jpg', 'path': 'html/stimuli/animals/cricket.jpg'},
    {'name': 'html/stimuli/animals/leafinsect.jpg', 'path': 'html/stimuli/animals/leafinsect.jpg'},
    {'name': 'html/stimuli/animals/phasmagigas.jpg', 'path': 'html/stimuli/animals/phasmagigas.jpg'},
    {'name': 'phase2_order5.csv', 'path': 'phase2_order5.csv'},
    {'name': 'stimuli/animals/crow.jpg', 'path': 'stimuli/animals/crow.jpg'},
    {'name': 'html/stimuli/tools/grill.jpg', 'path': 'html/stimuli/tools/grill.jpg'},
    {'name': 'html/stimuli/animals/armadillo.jpg', 'path': 'html/stimuli/animals/armadillo.jpg'},
    {'name': 'html/stimuli/tools/benchdogs.jpg', 'path': 'html/stimuli/tools/benchdogs.jpg'},
    {'name': 'phase2_order8.csv', 'path': 'phase2_order8.csv'},
    {'name': 'html/stimuli/tools/shovel.jpg', 'path': 'html/stimuli/tools/shovel.jpg'},
    {'name': 'phase2_order1.csv', 'path': 'phase2_order1.csv'},
    {'name': 'html/stimuli/tools/grapplinghook.jpg', 'path': 'html/stimuli/tools/grapplinghook.jpg'},
    {'name': 'html/stimuli/tools/mallet.jpg', 'path': 'html/stimuli/tools/mallet.jpg'},
    {'name': 'html/stimuli/animals/cheetah.jpg', 'path': 'html/stimuli/animals/cheetah.jpg'},
    {'name': 'stimuli/animals/octopus.jpg', 'path': 'stimuli/animals/octopus.jpg'},
    {'name': 'stimuli/tools/caliper.jpg', 'path': 'stimuli/tools/caliper.jpg'},
    {'name': 'html/stimuli/tools/measuringtape.jpg', 'path': 'html/stimuli/tools/measuringtape.jpg'},
    {'name': 'html/stimuli/tools/bolt.jpg', 'path': 'html/stimuli/tools/bolt.jpg'},
    {'name': 'html/stimuli/tools/thermometer.jpg', 'path': 'html/stimuli/tools/thermometer.jpg'},
    {'name': 'html/stimuli/tools/stroller.jpg', 'path': 'html/stimuli/tools/stroller.jpg'},
    {'name': 'stimuli/tools/whistle.jpg', 'path': 'stimuli/tools/whistle.jpg'},
    {'name': 'html/stimuli/tools/plunger.jpg', 'path': 'html/stimuli/tools/plunger.jpg'},
    {'name': 'stimuli_practice/cues/cue_green.jpg', 'path': 'stimuli_practice/cues/cue_green.jpg'},
    {'name': 'html/stimuli/tools/scale.jpg', 'path': 'html/stimuli/tools/scale.jpg'},
    {'name': 'html/stimuli/tools/engine.jpg', 'path': 'html/stimuli/tools/engine.jpg'},
    {'name': 'html/stimuli/tools/telephone.jpg', 'path': 'html/stimuli/tools/telephone.jpg'},
    {'name': 'html/stimuli/animals/ladybug.jpg', 'path': 'html/stimuli/animals/ladybug.jpg'},
    {'name': 'stimuli/tools/tubingbender.jpg', 'path': 'stimuli/tools/tubingbender.jpg'},
    {'name': 'html/stimuli/animals/carp.jpg', 'path': 'html/stimuli/animals/carp.jpg'},
    {'name': 'html/stimuli/animals/dramaderry.jpg', 'path': 'html/stimuli/animals/dramaderry.jpg'},
    {'name': 'html/stimuli/animals/penguin2.jpg', 'path': 'html/stimuli/animals/penguin2.jpg'},
    {'name': 'html/stimuli/animals/caterpillarpeacockmoth.jpg', 'path': 'html/stimuli/animals/caterpillarpeacockmoth.jpg'},
    {'name': 'html/stimuli/tools/stove.jpg', 'path': 'html/stimuli/tools/stove.jpg'},
    {'name': 'stimuli/animals/watusi.jpg', 'path': 'stimuli/animals/watusi.jpg'},
    {'name': 'html/stimuli/animals/cockatiel.jpg', 'path': 'html/stimuli/animals/cockatiel.jpg'},
    {'name': 'html/stimuli/tools/carjack.jpg', 'path': 'html/stimuli/tools/carjack.jpg'},
    {'name': 'stimuli/animals/cat.jpg', 'path': 'stimuli/animals/cat.jpg'},
    {'name': 'html/stimuli/tools/handsander.jpg', 'path': 'html/stimuli/tools/handsander.jpg'},
    {'name': 'html/stimuli/tools/file.jpg', 'path': 'html/stimuli/tools/file.jpg'},
    {'name': 'stimuli/tools/auger.jpg', 'path': 'stimuli/tools/auger.jpg'},
    {'name': 'html/stimuli/tools/floorbuffer.jpg', 'path': 'html/stimuli/tools/floorbuffer.jpg'},
    {'name': 'stimuli/animals/beardeddragon.jpg', 'path': 'stimuli/animals/beardeddragon.jpg'},
    {'name': 'stimuli/tools/shovel.jpg', 'path': 'stimuli/tools/shovel.jpg'},
    {'name': 'html/stimuli/tools/mixer.jpg', 'path': 'html/stimuli/tools/mixer.jpg'},
    {'name': 'stimuli/cues/cue_green.jpg', 'path': 'stimuli/cues/cue_green.jpg'},
    {'name': 'stimuli/animals/dragonfly.jpg', 'path': 'stimuli/animals/dragonfly.jpg'},
    {'name': 'html/stimuli/tools/fishtailchisel.jpg', 'path': 'html/stimuli/tools/fishtailchisel.jpg'},
    {'name': 'html/stimuli/tools/computermouse.jpg', 'path': 'html/stimuli/tools/computermouse.jpg'},
    {'name': 'html/stimuli/tools/sewingmachine.jpg', 'path': 'html/stimuli/tools/sewingmachine.jpg'},
    {'name': 'html/stimuli/tools/smartphone.jpg', 'path': 'html/stimuli/tools/smartphone.jpg'},
    {'name': 'html/stimuli/animals/marmot.jpg', 'path': 'html/stimuli/animals/marmot.jpg'}
  ]
});


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instructionsClock;
var instructions_page;
var instructions_continue;
var pre_re_insClock;
var text_2;
var instructions_continue_2;
var practice_instructions_pre_rewardClock;
var text_3;
var instruction_continue_5;
var scriptClock;
var Pre_RewardClock;
var enc;
var cross;
var left;
var right;
var isi;
var pre_reward_response;
var skip;
var check_practiceClock;
var continue_2Clock;
var text;
var instructions_continue_3;
var reward_insClock;
var instructions_page_2;
var instructions_continue_4;
var practice_instructions_rewardClock;
var text_5;
var instruction_continue_6;
var RewardClock;
var enc2;
var cross_2;
var left2;
var right2;
var isi_2;
var reward_response;
var reward_star;
var reward_text;
var check_reward_practiceClock;
var continue_3Clock;
var text_4;
var instruction_continue_7;
var finalClock;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instructions_page = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_page',
    text: 'In this experiment, you will perform several tasks and complete several questionnaires.\n\nYou will be paid X for participation, and you will have the opportunity to earn up to X based on your performance.\n\nThis is a two-day experiment. The second part of the experiment will take place 24 hours from now. If you do not return in 24 hours, you will not receive any payment.\n\nPress the space bar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instructions_continue = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "pre_re_ins"
  pre_re_insClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'On each trial, you will see an image. After a 5-second delay, you will  then be shown two images, one of which will match the image you saw previously (TARGET), and one of which is new. \n\nYour task is to indicate within 600ms which image is the target image. \n\nUse the “1” key to indicate that the target is on the left, and use the “2” key to indicate that the target is on the right.\n\nPlease try to respond as quickly and as accurately as possible. \n\nPress the space bar to continue.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instructions_continue_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_instructions_pre_reward"
  practice_instructions_pre_rewardClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'You will now be presented with 4 practice trials. If you do not complete these trials accurately, you will have to begin the practice round again.\n\nPress the space bar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instruction_continue_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "script"
  scriptClock = new util.Clock();
  // Initialize components for Routine "Pre_Reward"
  Pre_RewardClock = new util.Clock();
  enc = new visual.ImageStim({
    win : psychoJS.window,
    name : 'enc', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  cross = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  left = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.35), 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  right = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.35, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  isi = new visual.ShapeStim ({
    win: psychoJS.window, name: 'isi', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  pre_reward_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  skip = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "check_practice"
  check_practiceClock = new util.Clock();
  // Initialize components for Routine "continue_2"
  continue_2Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'You will now begin the first phase of the experiment.\n\nPress space bar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instructions_continue_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "script"
  scriptClock = new util.Clock();
  // Initialize components for Routine "Pre_Reward"
  Pre_RewardClock = new util.Clock();
  enc = new visual.ImageStim({
    win : psychoJS.window,
    name : 'enc', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  cross = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  left = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.35), 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  right = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.35, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  isi = new visual.ShapeStim ({
    win: psychoJS.window, name: 'isi', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  pre_reward_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  skip = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "reward_ins"
  reward_insClock = new util.Clock();
  instructions_page_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_page_2',
    text: 'In the next phase of the experiment, you will complete the same task that you did previously. This time, you will have the opportunity to earn a bonus by correct performance. \n\nOn each trial, you will receive feedback after indicating which item is the target in the form of GREEN and WHITE stars. \n\nPerformance of 90% or more on the GREEN star trials will result in a bonus of X.\n\nPerformance of 90% or more on the WHITE star trials will result in a bonus of X. You will receive information about the total bonus you earned tomorrow, at the end of the experiment.\n\nAs in the last phase, use the “1” key to indicate that the target is on the left, and use the “2” key to indicate that the target is on the right. Press the space bar to continue.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instructions_continue_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_instructions_reward"
  practice_instructions_rewardClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'You will now be presented with 4 practice trials. If you do not complete these trials accurately, you will have to begin the practice round again.\n\nPress the space bar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instruction_continue_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "script"
  scriptClock = new util.Clock();
  // Initialize components for Routine "Reward"
  RewardClock = new util.Clock();
  enc2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'enc2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  cross_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_2', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  left2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.35), 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  right2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.35, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  isi_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'isi_2', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  reward_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  reward_star = new visual.ImageStim({
    win : psychoJS.window,
    name : 'reward_star', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : false, depth : -6.0 
  });
  reward_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'reward_text',
    text: 'Miss!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  // Initialize components for Routine "check_reward_practice"
  check_reward_practiceClock = new util.Clock();
  // Initialize components for Routine "continue_3"
  continue_3Clock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'You will now begin the second phase of the experiment.\n\nPress space bar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instruction_continue_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "script"
  scriptClock = new util.Clock();
  // Initialize components for Routine "Reward"
  RewardClock = new util.Clock();
  enc2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'enc2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  cross_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_2', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  left2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.35), 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  right2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.35, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  isi_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'isi_2', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  reward_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  reward_star = new visual.ImageStim({
    win : psychoJS.window,
    name : 'reward_star', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : false, depth : -6.0 
  });
  reward_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'reward_text',
    text: 'Miss!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  // Initialize components for Routine "final"
  finalClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _instructions_continue_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instructions_continue.keys = undefined;
    instructions_continue.rt = undefined;
    _instructions_continue_allKeys = [];
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instructions_page);
    instructionsComponents.push(instructions_continue);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function instructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_page* updates
    if (t >= 0.0 && instructions_page.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_page.tStart = t;  // (not accounting for frame time here)
      instructions_page.frameNStart = frameN;  // exact frame index
      
      instructions_page.setAutoDraw(true);
    }

    
    // *instructions_continue* updates
    if (t >= 0.0 && instructions_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_continue.tStart = t;  // (not accounting for frame time here)
      instructions_continue.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instructions_continue.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instructions_continue.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instructions_continue.clearEvents(); });
    }

    if (instructions_continue.status === PsychoJS.Status.STARTED) {
      let theseKeys = instructions_continue.getKeys({keyList: ['space'], waitRelease: false});
      _instructions_continue_allKeys = _instructions_continue_allKeys.concat(theseKeys);
      if (_instructions_continue_allKeys.length > 0) {
        instructions_continue.keys = _instructions_continue_allKeys[_instructions_continue_allKeys.length - 1].name;  // just the last key pressed
        instructions_continue.rt = _instructions_continue_allKeys[_instructions_continue_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var num_correct;
var prereward_cond;
var reward_cond;
function instructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions'-------
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions_continue.keys', instructions_continue.keys);
    if (typeof instructions_continue.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instructions_continue.rt', instructions_continue.rt);
        routineTimer.reset();
        }
    
    instructions_continue.stop();
    num_correct = 0;
    prereward_cond = (("phase1_order" + expInfo["group"].toString()) + ".csv");
    reward_cond = (("phase2_order" + expInfo["group"].toString()) + ".csv");
    
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instructions_continue_2_allKeys;
var pre_re_insComponents;
function pre_re_insRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'pre_re_ins'-------
    t = 0;
    pre_re_insClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instructions_continue_2.keys = undefined;
    instructions_continue_2.rt = undefined;
    _instructions_continue_2_allKeys = [];
    // keep track of which components have finished
    pre_re_insComponents = [];
    pre_re_insComponents.push(text_2);
    pre_re_insComponents.push(instructions_continue_2);
    
    for (const thisComponent of pre_re_insComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function pre_re_insRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'pre_re_ins'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = pre_re_insClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *instructions_continue_2* updates
    if (t >= 0.0 && instructions_continue_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_continue_2.tStart = t;  // (not accounting for frame time here)
      instructions_continue_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instructions_continue_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instructions_continue_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instructions_continue_2.clearEvents(); });
    }

    if (instructions_continue_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = instructions_continue_2.getKeys({keyList: ['space'], waitRelease: false});
      _instructions_continue_2_allKeys = _instructions_continue_2_allKeys.concat(theseKeys);
      if (_instructions_continue_2_allKeys.length > 0) {
        instructions_continue_2.keys = _instructions_continue_2_allKeys[_instructions_continue_2_allKeys.length - 1].name;  // just the last key pressed
        instructions_continue_2.rt = _instructions_continue_2_allKeys[_instructions_continue_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pre_re_insComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pre_re_insRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'pre_re_ins'-------
    for (const thisComponent of pre_re_insComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions_continue_2.keys', instructions_continue_2.keys);
    if (typeof instructions_continue_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instructions_continue_2.rt', instructions_continue_2.rt);
        routineTimer.reset();
        }
    
    instructions_continue_2.stop();
    // the Routine "pre_re_ins" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instruction_continue_5_allKeys;
var practice_instructions_pre_rewardComponents;
function practice_instructions_pre_rewardRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'practice_instructions_pre_reward'-------
    t = 0;
    practice_instructions_pre_rewardClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instruction_continue_5.keys = undefined;
    instruction_continue_5.rt = undefined;
    _instruction_continue_5_allKeys = [];
    // keep track of which components have finished
    practice_instructions_pre_rewardComponents = [];
    practice_instructions_pre_rewardComponents.push(text_3);
    practice_instructions_pre_rewardComponents.push(instruction_continue_5);
    
    for (const thisComponent of practice_instructions_pre_rewardComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function practice_instructions_pre_rewardRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'practice_instructions_pre_reward'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = practice_instructions_pre_rewardClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *instruction_continue_5* updates
    if (t >= 0.0 && instruction_continue_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_continue_5.tStart = t;  // (not accounting for frame time here)
      instruction_continue_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruction_continue_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruction_continue_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruction_continue_5.clearEvents(); });
    }

    if (instruction_continue_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction_continue_5.getKeys({keyList: ['space'], waitRelease: false});
      _instruction_continue_5_allKeys = _instruction_continue_5_allKeys.concat(theseKeys);
      if (_instruction_continue_5_allKeys.length > 0) {
        instruction_continue_5.keys = _instruction_continue_5_allKeys[_instruction_continue_5_allKeys.length - 1].name;  // just the last key pressed
        instruction_continue_5.rt = _instruction_continue_5_allKeys[_instruction_continue_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_instructions_pre_rewardComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_instructions_pre_rewardRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'practice_instructions_pre_reward'-------
    for (const thisComponent of practice_instructions_pre_rewardComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_continue_5.keys', instruction_continue_5.keys);
    if (typeof instruction_continue_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruction_continue_5.rt', instruction_continue_5.rt);
        routineTimer.reset();
        }
    
    instruction_continue_5.stop();
    // the Routine "practice_instructions_pre_reward" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var repeat_practice;
var currentLoop;
function repeat_practiceLoopBegin(repeat_practiceLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  repeat_practice = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 30, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'repeat_practice'
  });
  psychoJS.experiment.addLoop(repeat_practice); // add the loop to the experiment
  currentLoop = repeat_practice;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRepeat_practice of repeat_practice) {
    const snapshot = repeat_practice.getSnapshot();
    repeat_practiceLoopScheduler.add(importConditions(snapshot));
    const practiceLoopScheduler = new Scheduler(psychoJS);
    repeat_practiceLoopScheduler.add(practiceLoopBegin, practiceLoopScheduler);
    repeat_practiceLoopScheduler.add(practiceLoopScheduler);
    repeat_practiceLoopScheduler.add(practiceLoopEnd);
    repeat_practiceLoopScheduler.add(check_practiceRoutineBegin(snapshot));
    repeat_practiceLoopScheduler.add(check_practiceRoutineEachFrame(snapshot));
    repeat_practiceLoopScheduler.add(check_practiceRoutineEnd(snapshot));
    repeat_practiceLoopScheduler.add(endLoopIteration(repeat_practiceLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var practice;
function practiceLoopBegin(practiceLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  practice = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'phase1_practice.csv',
    seed: undefined, name: 'practice'
  });
  psychoJS.experiment.addLoop(practice); // add the loop to the experiment
  currentLoop = practice;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPractice of practice) {
    const snapshot = practice.getSnapshot();
    practiceLoopScheduler.add(importConditions(snapshot));
    practiceLoopScheduler.add(scriptRoutineBegin(snapshot));
    practiceLoopScheduler.add(scriptRoutineEachFrame(snapshot));
    practiceLoopScheduler.add(scriptRoutineEnd(snapshot));
    practiceLoopScheduler.add(Pre_RewardRoutineBegin(snapshot));
    practiceLoopScheduler.add(Pre_RewardRoutineEachFrame(snapshot));
    practiceLoopScheduler.add(Pre_RewardRoutineEnd(snapshot));
    practiceLoopScheduler.add(endLoopIteration(practiceLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function practiceLoopEnd() {
  psychoJS.experiment.removeLoop(practice);

  return Scheduler.Event.NEXT;
}


function repeat_practiceLoopEnd() {
  psychoJS.experiment.removeLoop(repeat_practice);

  return Scheduler.Event.NEXT;
}


var pre_reward_trials;
function pre_reward_trialsLoopBegin(pre_reward_trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  pre_reward_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: prereward_cond,
    seed: undefined, name: 'pre_reward_trials'
  });
  psychoJS.experiment.addLoop(pre_reward_trials); // add the loop to the experiment
  currentLoop = pre_reward_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPre_reward_trial of pre_reward_trials) {
    const snapshot = pre_reward_trials.getSnapshot();
    pre_reward_trialsLoopScheduler.add(importConditions(snapshot));
    pre_reward_trialsLoopScheduler.add(scriptRoutineBegin(snapshot));
    pre_reward_trialsLoopScheduler.add(scriptRoutineEachFrame(snapshot));
    pre_reward_trialsLoopScheduler.add(scriptRoutineEnd(snapshot));
    pre_reward_trialsLoopScheduler.add(Pre_RewardRoutineBegin(snapshot));
    pre_reward_trialsLoopScheduler.add(Pre_RewardRoutineEachFrame(snapshot));
    pre_reward_trialsLoopScheduler.add(Pre_RewardRoutineEnd(snapshot));
    pre_reward_trialsLoopScheduler.add(endLoopIteration(pre_reward_trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function pre_reward_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(pre_reward_trials);

  return Scheduler.Event.NEXT;
}


var repeat_reward_practice;
function repeat_reward_practiceLoopBegin(repeat_reward_practiceLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  repeat_reward_practice = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 30, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'repeat_reward_practice'
  });
  psychoJS.experiment.addLoop(repeat_reward_practice); // add the loop to the experiment
  currentLoop = repeat_reward_practice;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRepeat_reward_practice of repeat_reward_practice) {
    const snapshot = repeat_reward_practice.getSnapshot();
    repeat_reward_practiceLoopScheduler.add(importConditions(snapshot));
    const reward_practiceLoopScheduler = new Scheduler(psychoJS);
    repeat_reward_practiceLoopScheduler.add(reward_practiceLoopBegin, reward_practiceLoopScheduler);
    repeat_reward_practiceLoopScheduler.add(reward_practiceLoopScheduler);
    repeat_reward_practiceLoopScheduler.add(reward_practiceLoopEnd);
    repeat_reward_practiceLoopScheduler.add(check_reward_practiceRoutineBegin(snapshot));
    repeat_reward_practiceLoopScheduler.add(check_reward_practiceRoutineEachFrame(snapshot));
    repeat_reward_practiceLoopScheduler.add(check_reward_practiceRoutineEnd(snapshot));
    repeat_reward_practiceLoopScheduler.add(endLoopIteration(repeat_reward_practiceLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var reward_practice;
function reward_practiceLoopBegin(reward_practiceLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  reward_practice = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'phase2_practice.csv',
    seed: undefined, name: 'reward_practice'
  });
  psychoJS.experiment.addLoop(reward_practice); // add the loop to the experiment
  currentLoop = reward_practice;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisReward_practice of reward_practice) {
    const snapshot = reward_practice.getSnapshot();
    reward_practiceLoopScheduler.add(importConditions(snapshot));
    reward_practiceLoopScheduler.add(scriptRoutineBegin(snapshot));
    reward_practiceLoopScheduler.add(scriptRoutineEachFrame(snapshot));
    reward_practiceLoopScheduler.add(scriptRoutineEnd(snapshot));
    reward_practiceLoopScheduler.add(RewardRoutineBegin(snapshot));
    reward_practiceLoopScheduler.add(RewardRoutineEachFrame(snapshot));
    reward_practiceLoopScheduler.add(RewardRoutineEnd(snapshot));
    reward_practiceLoopScheduler.add(endLoopIteration(reward_practiceLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function reward_practiceLoopEnd() {
  psychoJS.experiment.removeLoop(reward_practice);

  return Scheduler.Event.NEXT;
}


function repeat_reward_practiceLoopEnd() {
  psychoJS.experiment.removeLoop(repeat_reward_practice);

  return Scheduler.Event.NEXT;
}


var reward_trials;
function reward_trialsLoopBegin(reward_trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  reward_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'phase2_order8.csv',
    seed: undefined, name: 'reward_trials'
  });
  psychoJS.experiment.addLoop(reward_trials); // add the loop to the experiment
  currentLoop = reward_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisReward_trial of reward_trials) {
    const snapshot = reward_trials.getSnapshot();
    reward_trialsLoopScheduler.add(importConditions(snapshot));
    reward_trialsLoopScheduler.add(scriptRoutineBegin(snapshot));
    reward_trialsLoopScheduler.add(scriptRoutineEachFrame(snapshot));
    reward_trialsLoopScheduler.add(scriptRoutineEnd(snapshot));
    reward_trialsLoopScheduler.add(RewardRoutineBegin(snapshot));
    reward_trialsLoopScheduler.add(RewardRoutineEachFrame(snapshot));
    reward_trialsLoopScheduler.add(RewardRoutineEnd(snapshot));
    reward_trialsLoopScheduler.add(endLoopIteration(reward_trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function reward_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(reward_trials);

  return Scheduler.Event.NEXT;
}


var scriptComponents;
function scriptRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'script'-------
    t = 0;
    scriptClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    scriptComponents = [];
    
    for (const thisComponent of scriptComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function scriptRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'script'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = scriptClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of scriptComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var stim_name_enc;
var star_name;
function scriptRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'script'-------
    for (const thisComponent of scriptComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((corr_resp === 1)) {
        stim_name_enc = stim_name_left;
    } else {
        stim_name_enc = stim_name_right;
    }
    console.log(stim_name_enc);
    if ((conditionedCat === stim_cat_enc)) {
        star_name = "stimuli/greenstar.jpg";
    } else {
        star_name = "stimuli/whitestar.jpg";
    }
    
    // the Routine "script" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _pre_reward_response_allKeys;
var _skip_allKeys;
var Pre_RewardComponents;
function Pre_RewardRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Pre_Reward'-------
    t = 0;
    Pre_RewardClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    enc.setImage(stim_name_enc);
    left.setImage(stim_name_left);
    right.setImage(stim_name_right);
    pre_reward_response.keys = undefined;
    pre_reward_response.rt = undefined;
    _pre_reward_response_allKeys = [];
    skip.keys = undefined;
    skip.rt = undefined;
    _skip_allKeys = [];
    // keep track of which components have finished
    Pre_RewardComponents = [];
    Pre_RewardComponents.push(enc);
    Pre_RewardComponents.push(cross);
    Pre_RewardComponents.push(left);
    Pre_RewardComponents.push(right);
    Pre_RewardComponents.push(isi);
    Pre_RewardComponents.push(pre_reward_response);
    Pre_RewardComponents.push(skip);
    
    for (const thisComponent of Pre_RewardComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function Pre_RewardRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Pre_Reward'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Pre_RewardClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *enc* updates
    if (t >= 0.0 && enc.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc.tStart = t;  // (not accounting for frame time here)
      enc.frameNStart = frameN;  // exact frame index
      
      enc.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc.setAutoDraw(false);
    }
    
    // *cross* updates
    if (t >= 2.0 && cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross.tStart = t;  // (not accounting for frame time here)
      cross.frameNStart = frameN;  // exact frame index
      
      cross.setAutoDraw(true);
    }

    frameRemains = 2.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cross.setAutoDraw(false);
    }
    
    // *left* updates
    if (t >= 7.0 && left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left.tStart = t;  // (not accounting for frame time here)
      left.frameNStart = frameN;  // exact frame index
      
      left.setAutoDraw(true);
    }

    frameRemains = 7.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left.setAutoDraw(false);
    }
    
    // *right* updates
    if (t >= 7.0 && right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right.tStart = t;  // (not accounting for frame time here)
      right.frameNStart = frameN;  // exact frame index
      
      right.setAutoDraw(true);
    }

    frameRemains = 7.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right.setAutoDraw(false);
    }
    
    // *isi* updates
    if (t >= 7.6 && isi.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isi.tStart = t;  // (not accounting for frame time here)
      isi.frameNStart = frameN;  // exact frame index
      
      isi.setAutoDraw(true);
    }

    frameRemains = 7.6 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (isi.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      isi.setAutoDraw(false);
    }
    
    // *pre_reward_response* updates
    if (t >= 7.0 && pre_reward_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pre_reward_response.tStart = t;  // (not accounting for frame time here)
      pre_reward_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { pre_reward_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { pre_reward_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { pre_reward_response.clearEvents(); });
    }

    frameRemains = 7.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pre_reward_response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pre_reward_response.status = PsychoJS.Status.FINISHED;
  }

    if (pre_reward_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = pre_reward_response.getKeys({keyList: ['1', '2'], waitRelease: false});
      _pre_reward_response_allKeys = _pre_reward_response_allKeys.concat(theseKeys);
      if (_pre_reward_response_allKeys.length > 0) {
        pre_reward_response.keys = _pre_reward_response_allKeys[_pre_reward_response_allKeys.length - 1].name;  // just the last key pressed
        pre_reward_response.rt = _pre_reward_response_allKeys[_pre_reward_response_allKeys.length - 1].rt;
        // was this correct?
        if (pre_reward_response.keys == corr_resp) {
            pre_reward_response.corr = 1;
        } else {
            pre_reward_response.corr = 0;
        }
      }
    }
    
    console.log(skip.corr);
    if (skip.corr) {
        repeat_practice.finished = true;
    }
    
    
    // *skip* updates
    if (t >= 0.0 && skip.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      skip.tStart = t;  // (not accounting for frame time here)
      skip.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { skip.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { skip.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { skip.clearEvents(); });
    }

    if (skip.status === PsychoJS.Status.STARTED) {
      let theseKeys = skip.getKeys({keyList: ['space'], waitRelease: false});
      _skip_allKeys = _skip_allKeys.concat(theseKeys);
      if (_skip_allKeys.length > 0) {
        skip.keys = _skip_allKeys[_skip_allKeys.length - 1].name;  // just the last key pressed
        skip.rt = _skip_allKeys[_skip_allKeys.length - 1].rt;
        // was this correct?
        if (skip.keys == 'space') {
            skip.corr = 1;
        } else {
            skip.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Pre_RewardComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Pre_RewardRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Pre_Reward'-------
    for (const thisComponent of Pre_RewardComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (pre_reward_response.keys === undefined) {
      if (['None','none',undefined].includes(corr_resp)) {
         pre_reward_response.corr = 1;  // correct non-response
      } else {
         pre_reward_response.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('pre_reward_response.keys', pre_reward_response.keys);
    psychoJS.experiment.addData('pre_reward_response.corr', pre_reward_response.corr);
    if (typeof pre_reward_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('pre_reward_response.rt', pre_reward_response.rt);
        }
    
    pre_reward_response.stop();
    if (pre_reward_response.corr) {
        num_correct += 1;
        console.log("correct");
    }
    console.log(pre_reward_response.keys);
    
    // was no response the correct answer?!
    if (skip.keys === undefined) {
      if (['None','none',undefined].includes('space')) {
         skip.corr = 1;  // correct non-response
      } else {
         skip.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('skip.keys', skip.keys);
    psychoJS.experiment.addData('skip.corr', skip.corr);
    if (typeof skip.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('skip.rt', skip.rt);
        routineTimer.reset();
        }
    
    skip.stop();
    // the Routine "Pre_Reward" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var check_practiceComponents;
function check_practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'check_practice'-------
    t = 0;
    check_practiceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if ((num_correct === 4)) {
        repeat_practice.finished = true;
        console.log("finished");
        num_correct = 0;
    } else {
        num_correct = 0;
    }
    
    // keep track of which components have finished
    check_practiceComponents = [];
    
    for (const thisComponent of check_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function check_practiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'check_practice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = check_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of check_practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function check_practiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'check_practice'-------
    for (const thisComponent of check_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "check_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instructions_continue_3_allKeys;
var continue_2Components;
function continue_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'continue_2'-------
    t = 0;
    continue_2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instructions_continue_3.keys = undefined;
    instructions_continue_3.rt = undefined;
    _instructions_continue_3_allKeys = [];
    // keep track of which components have finished
    continue_2Components = [];
    continue_2Components.push(text);
    continue_2Components.push(instructions_continue_3);
    
    for (const thisComponent of continue_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function continue_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'continue_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = continue_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *instructions_continue_3* updates
    if (t >= 0.0 && instructions_continue_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_continue_3.tStart = t;  // (not accounting for frame time here)
      instructions_continue_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instructions_continue_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instructions_continue_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instructions_continue_3.clearEvents(); });
    }

    if (instructions_continue_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = instructions_continue_3.getKeys({keyList: ['space'], waitRelease: false});
      _instructions_continue_3_allKeys = _instructions_continue_3_allKeys.concat(theseKeys);
      if (_instructions_continue_3_allKeys.length > 0) {
        instructions_continue_3.keys = _instructions_continue_3_allKeys[_instructions_continue_3_allKeys.length - 1].name;  // just the last key pressed
        instructions_continue_3.rt = _instructions_continue_3_allKeys[_instructions_continue_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of continue_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function continue_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'continue_2'-------
    for (const thisComponent of continue_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions_continue_3.keys', instructions_continue_3.keys);
    if (typeof instructions_continue_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instructions_continue_3.rt', instructions_continue_3.rt);
        routineTimer.reset();
        }
    
    instructions_continue_3.stop();
    // the Routine "continue_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instructions_continue_4_allKeys;
var pre_reward_accuracy;
var reward_insComponents;
function reward_insRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'reward_ins'-------
    t = 0;
    reward_insClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instructions_continue_4.keys = undefined;
    instructions_continue_4.rt = undefined;
    _instructions_continue_4_allKeys = [];
    pre_reward_accuracy = num_correct;
    num_correct = 0;
    console.log("now setting num_correct to 0");
    
    // keep track of which components have finished
    reward_insComponents = [];
    reward_insComponents.push(instructions_page_2);
    reward_insComponents.push(instructions_continue_4);
    
    for (const thisComponent of reward_insComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function reward_insRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'reward_ins'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = reward_insClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_page_2* updates
    if (t >= 0.0 && instructions_page_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_page_2.tStart = t;  // (not accounting for frame time here)
      instructions_page_2.frameNStart = frameN;  // exact frame index
      
      instructions_page_2.setAutoDraw(true);
    }

    
    // *instructions_continue_4* updates
    if (t >= 0.0 && instructions_continue_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_continue_4.tStart = t;  // (not accounting for frame time here)
      instructions_continue_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instructions_continue_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instructions_continue_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instructions_continue_4.clearEvents(); });
    }

    if (instructions_continue_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = instructions_continue_4.getKeys({keyList: ['space'], waitRelease: false});
      _instructions_continue_4_allKeys = _instructions_continue_4_allKeys.concat(theseKeys);
      if (_instructions_continue_4_allKeys.length > 0) {
        instructions_continue_4.keys = _instructions_continue_4_allKeys[_instructions_continue_4_allKeys.length - 1].name;  // just the last key pressed
        instructions_continue_4.rt = _instructions_continue_4_allKeys[_instructions_continue_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of reward_insComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function reward_insRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'reward_ins'-------
    for (const thisComponent of reward_insComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions_continue_4.keys', instructions_continue_4.keys);
    if (typeof instructions_continue_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instructions_continue_4.rt', instructions_continue_4.rt);
        routineTimer.reset();
        }
    
    instructions_continue_4.stop();
    num_correct = 0;
    
    // the Routine "reward_ins" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instruction_continue_6_allKeys;
var practice_instructions_rewardComponents;
function practice_instructions_rewardRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'practice_instructions_reward'-------
    t = 0;
    practice_instructions_rewardClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instruction_continue_6.keys = undefined;
    instruction_continue_6.rt = undefined;
    _instruction_continue_6_allKeys = [];
    // keep track of which components have finished
    practice_instructions_rewardComponents = [];
    practice_instructions_rewardComponents.push(text_5);
    practice_instructions_rewardComponents.push(instruction_continue_6);
    
    for (const thisComponent of practice_instructions_rewardComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function practice_instructions_rewardRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'practice_instructions_reward'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = practice_instructions_rewardClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *instruction_continue_6* updates
    if (t >= 0.0 && instruction_continue_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_continue_6.tStart = t;  // (not accounting for frame time here)
      instruction_continue_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruction_continue_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruction_continue_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruction_continue_6.clearEvents(); });
    }

    if (instruction_continue_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction_continue_6.getKeys({keyList: ['space'], waitRelease: false});
      _instruction_continue_6_allKeys = _instruction_continue_6_allKeys.concat(theseKeys);
      if (_instruction_continue_6_allKeys.length > 0) {
        instruction_continue_6.keys = _instruction_continue_6_allKeys[_instruction_continue_6_allKeys.length - 1].name;  // just the last key pressed
        instruction_continue_6.rt = _instruction_continue_6_allKeys[_instruction_continue_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_instructions_rewardComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_instructions_rewardRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'practice_instructions_reward'-------
    for (const thisComponent of practice_instructions_rewardComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_continue_6.keys', instruction_continue_6.keys);
    if (typeof instruction_continue_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruction_continue_6.rt', instruction_continue_6.rt);
        routineTimer.reset();
        }
    
    instruction_continue_6.stop();
    // the Routine "practice_instructions_reward" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _reward_response_allKeys;
var correct;
var RewardComponents;
function RewardRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Reward'-------
    t = 0;
    RewardClock.reset(); // clock
    frameN = -1;
    routineTimer.add(10.100000);
    // update component parameters for each repeat
    enc2.setImage(stim_name_enc);
    left2.setImage(stim_name_left);
    right2.setImage(stim_name_right);
    reward_response.keys = undefined;
    reward_response.rt = undefined;
    _reward_response_allKeys = [];
    reward_star.setImage(corr_image);
    reward_text.text = "Miss!";
    reward_star.opacity = 0.0;
    correct = false;
    console.log("setting text to miss");
    
    // keep track of which components have finished
    RewardComponents = [];
    RewardComponents.push(enc2);
    RewardComponents.push(cross_2);
    RewardComponents.push(left2);
    RewardComponents.push(right2);
    RewardComponents.push(isi_2);
    RewardComponents.push(reward_response);
    RewardComponents.push(reward_star);
    RewardComponents.push(reward_text);
    
    for (const thisComponent of RewardComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function RewardRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Reward'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = RewardClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *enc2* updates
    if (t >= 0.0 && enc2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc2.tStart = t;  // (not accounting for frame time here)
      enc2.frameNStart = frameN;  // exact frame index
      
      enc2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc2.setAutoDraw(false);
    }
    
    // *cross_2* updates
    if (t >= 2.0 && cross_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_2.tStart = t;  // (not accounting for frame time here)
      cross_2.frameNStart = frameN;  // exact frame index
      
      cross_2.setAutoDraw(true);
    }

    frameRemains = 2.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cross_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cross_2.setAutoDraw(false);
    }
    
    // *left2* updates
    if (t >= 7.0 && left2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left2.tStart = t;  // (not accounting for frame time here)
      left2.frameNStart = frameN;  // exact frame index
      
      left2.setAutoDraw(true);
    }

    frameRemains = 7.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left2.setAutoDraw(false);
    }
    
    // *right2* updates
    if (t >= 7.0 && right2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right2.tStart = t;  // (not accounting for frame time here)
      right2.frameNStart = frameN;  // exact frame index
      
      right2.setAutoDraw(true);
    }

    frameRemains = 7.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right2.setAutoDraw(false);
    }
    
    // *isi_2* updates
    if (t >= 8.6 && isi_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isi_2.tStart = t;  // (not accounting for frame time here)
      isi_2.frameNStart = frameN;  // exact frame index
      
      isi_2.setAutoDraw(true);
    }

    frameRemains = 8.6 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (isi_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      isi_2.setAutoDraw(false);
    }
    
    // *reward_response* updates
    if (t >= 7.0 && reward_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reward_response.tStart = t;  // (not accounting for frame time here)
      reward_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { reward_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { reward_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { reward_response.clearEvents(); });
    }

    frameRemains = 7.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (reward_response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      reward_response.status = PsychoJS.Status.FINISHED;
  }

    if (reward_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = reward_response.getKeys({keyList: ['1', '2'], waitRelease: false});
      _reward_response_allKeys = _reward_response_allKeys.concat(theseKeys);
      if (_reward_response_allKeys.length > 0) {
        reward_response.keys = _reward_response_allKeys[_reward_response_allKeys.length - 1].name;  // just the last key pressed
        reward_response.rt = _reward_response_allKeys[_reward_response_allKeys.length - 1].rt;
        // was this correct?
        if (reward_response.keys == corr_resp) {
            reward_response.corr = 1;
        } else {
            reward_response.corr = 0;
        }
      }
    }
    
    
    // *reward_star* updates
    if (t >= 7.6 && reward_star.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reward_star.tStart = t;  // (not accounting for frame time here)
      reward_star.frameNStart = frameN;  // exact frame index
      
      reward_star.setAutoDraw(true);
    }

    frameRemains = 7.6 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (reward_star.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      reward_star.setAutoDraw(false);
    }
    
    // *reward_text* updates
    if (t >= 7.6 && reward_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reward_text.tStart = t;  // (not accounting for frame time here)
      reward_text.frameNStart = frameN;  // exact frame index
      
      reward_text.setAutoDraw(true);
    }

    frameRemains = 7.6 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (reward_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      reward_text.setAutoDraw(false);
    }
    console.log("frame");
    if ((reward_response.keys && (! correct))) {
        console.log("keypress and no repeat");
        if ((Number.parseInt(reward_response.keys) === Number.parseInt(corr_resp))) {
            correct = true;
            reward_text.text = "Hit! You Won!";
            reward_star.opacity = 1.0;
            num_correct += 1;
            console.log(("correct: " + num_correct.toString()));
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RewardComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RewardRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Reward'-------
    for (const thisComponent of RewardComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (reward_response.keys === undefined) {
      if (['None','none',undefined].includes(corr_resp)) {
         reward_response.corr = 1;  // correct non-response
      } else {
         reward_response.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('reward_response.keys', reward_response.keys);
    psychoJS.experiment.addData('reward_response.corr', reward_response.corr);
    if (typeof reward_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('reward_response.rt', reward_response.rt);
        }
    
    reward_response.stop();
    return Scheduler.Event.NEXT;
  };
}


var check_reward_practiceComponents;
function check_reward_practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'check_reward_practice'-------
    t = 0;
    check_reward_practiceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    console.log("setting correct false");
    if ((num_correct === 4)) {
        repeat_reward_practice.finished = true;
        console.log("finished");
        num_correct = 0;
    } else {
        num_correct = 0;
    }
    
    // keep track of which components have finished
    check_reward_practiceComponents = [];
    
    for (const thisComponent of check_reward_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function check_reward_practiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'check_reward_practice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = check_reward_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of check_reward_practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function check_reward_practiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'check_reward_practice'-------
    for (const thisComponent of check_reward_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "check_reward_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instruction_continue_7_allKeys;
var continue_3Components;
function continue_3RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'continue_3'-------
    t = 0;
    continue_3Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instruction_continue_7.keys = undefined;
    instruction_continue_7.rt = undefined;
    _instruction_continue_7_allKeys = [];
    // keep track of which components have finished
    continue_3Components = [];
    continue_3Components.push(text_4);
    continue_3Components.push(instruction_continue_7);
    
    for (const thisComponent of continue_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function continue_3RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'continue_3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = continue_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *instruction_continue_7* updates
    if (t >= 0.0 && instruction_continue_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_continue_7.tStart = t;  // (not accounting for frame time here)
      instruction_continue_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruction_continue_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruction_continue_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruction_continue_7.clearEvents(); });
    }

    if (instruction_continue_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction_continue_7.getKeys({keyList: ['space'], waitRelease: false});
      _instruction_continue_7_allKeys = _instruction_continue_7_allKeys.concat(theseKeys);
      if (_instruction_continue_7_allKeys.length > 0) {
        instruction_continue_7.keys = _instruction_continue_7_allKeys[_instruction_continue_7_allKeys.length - 1].name;  // just the last key pressed
        instruction_continue_7.rt = _instruction_continue_7_allKeys[_instruction_continue_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of continue_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function continue_3RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'continue_3'-------
    for (const thisComponent of continue_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_continue_7.keys', instruction_continue_7.keys);
    if (typeof instruction_continue_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruction_continue_7.rt', instruction_continue_7.rt);
        routineTimer.reset();
        }
    
    instruction_continue_7.stop();
    // the Routine "continue_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var reward_accuracy;
var finalComponents;
function finalRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'final'-------
    t = 0;
    finalClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    reward_accuracy = num_correct;
    
    // keep track of which components have finished
    finalComponents = [];
    
    for (const thisComponent of finalComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function finalRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'final'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = finalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of finalComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function finalRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'final'-------
    for (const thisComponent of finalComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "final" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
