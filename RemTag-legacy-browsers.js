/*************** 
 * Remtag Test *
 ***************/

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
    {'name': 'stimuli/tools/campingstove.jpg', 'path': 'stimuli/tools/campingstove.jpg'},
    {'name': 'stimuli/tools/drillbit.jpg', 'path': 'stimuli/tools/drillbit.jpg'},
    {'name': 'stimuli/animals/snake_threat.jpg', 'path': 'stimuli/animals/snake_threat.jpg'},
    {'name': 'stimuli/animals/tragopan.jpg', 'path': 'stimuli/animals/tragopan.jpg'},
    {'name': 'stimuli/animals/seahorse.jpg', 'path': 'stimuli/animals/seahorse.jpg'},
    {'name': 'stimuli/tools/nails.jpg', 'path': 'stimuli/tools/nails.jpg'},
    {'name': 'stimuli/animals/kangaroo.jpg', 'path': 'stimuli/animals/kangaroo.jpg'},
    {'name': 'stimuli/tools/spoon.jpg', 'path': 'stimuli/tools/spoon.jpg'},
    {'name': 'stimuli/animals/jackal.jpg', 'path': 'stimuli/animals/jackal.jpg'},
    {'name': 'stimuli/tools/tongs.jpg', 'path': 'stimuli/tools/tongs.jpg'},
    {'name': 'stimuli/tools/beaker.jpg', 'path': 'stimuli/tools/beaker.jpg'},
    {'name': 'stimuli/animals/marlin.jpg', 'path': 'stimuli/animals/marlin.jpg'},
    {'name': 'stimuli/animals/wasp.jpg', 'path': 'stimuli/animals/wasp.jpg'},
    {'name': 'stimuli/animals/salmon.jpg', 'path': 'stimuli/animals/salmon.jpg'},
    {'name': 'stimuli/animals/owl.jpg', 'path': 'stimuli/animals/owl.jpg'},
    {'name': 'stimuli/tools/electricsewingmachine.jpg', 'path': 'stimuli/tools/electricsewingmachine.jpg'},
    {'name': 'stimuli/animals/sugarglider.jpg', 'path': 'stimuli/animals/sugarglider.jpg'},
    {'name': 'stimuli/animals/llama.jpg', 'path': 'stimuli/animals/llama.jpg'},
    {'name': 'stimuli/tools/carpetblower.jpg', 'path': 'stimuli/tools/carpetblower.jpg'},
    {'name': 'phase1_order2.csv', 'path': 'phase1_order2.csv'},
    {'name': 'stimuli/animals/leopard.jpg', 'path': 'stimuli/animals/leopard.jpg'},
    {'name': 'stimuli/animals/malaysianjunglenymph.jpg', 'path': 'stimuli/animals/malaysianjunglenymph.jpg'},
    {'name': 'stimuli/animals/goldfish.jpg', 'path': 'stimuli/animals/goldfish.jpg'},
    {'name': 'stimuli/tools/level.jpg', 'path': 'stimuli/tools/level.jpg'},
    {'name': 'stimuli/animals/caterpillarhawkmoth.jpg', 'path': 'stimuli/animals/caterpillarhawkmoth.jpg'},
    {'name': 'stimuli/tools/generator.jpg', 'path': 'stimuli/tools/generator.jpg'},
    {'name': 'phase2_order4.csv', 'path': 'phase2_order4.csv'},
    {'name': 'phase2_order5.csv', 'path': 'phase2_order5.csv'},
    {'name': 'stimuli/animals/bullfrog.jpg', 'path': 'stimuli/animals/bullfrog.jpg'},
    {'name': 'phase1_practice.csv', 'path': 'phase1_practice.csv'},
    {'name': 'stimuli/tools/drill.jpg', 'path': 'stimuli/tools/drill.jpg'},
    {'name': 'stimuli/tools/tape.jpg', 'path': 'stimuli/tools/tape.jpg'},
    {'name': 'stimuli/tools/cuttingboard.jpg', 'path': 'stimuli/tools/cuttingboard.jpg'},
    {'name': 'stimuli/animals/brown_bear.jpg', 'path': 'stimuli/animals/brown_bear.jpg'},
    {'name': 'stimuli/tools/windchime.jpg', 'path': 'stimuli/tools/windchime.jpg'},
    {'name': 'stimuli/animals/mealworm.jpg', 'path': 'stimuli/animals/mealworm.jpg'},
    {'name': 'stimuli/tools/broom.jpg', 'path': 'stimuli/tools/broom.jpg'},
    {'name': 'stimuli/animals/firebug.jpg', 'path': 'stimuli/animals/firebug.jpg'},
    {'name': 'stimuli/animals/rabbit.jpg', 'path': 'stimuli/animals/rabbit.jpg'},
    {'name': 'stimuli/animals/rhino.jpg', 'path': 'stimuli/animals/rhino.jpg'},
    {'name': 'stimuli/tools/duster.jpg', 'path': 'stimuli/tools/duster.jpg'},
    {'name': 'stimuli/animals/shark.jpg', 'path': 'stimuli/animals/shark.jpg'},
    {'name': 'stimuli/tools/laptop.jpg', 'path': 'stimuli/tools/laptop.jpg'},
    {'name': 'stimuli/animals/palmcockatoo.jpg', 'path': 'stimuli/animals/palmcockatoo.jpg'},
    {'name': 'stimuli/tools/avocadoslicer.jpg', 'path': 'stimuli/tools/avocadoslicer.jpg'},
    {'name': 'stimuli/animals/jaguar_threat.jpg', 'path': 'stimuli/animals/jaguar_threat.jpg'},
    {'name': 'stimuli/tools/saw.jpg', 'path': 'stimuli/tools/saw.jpg'},
    {'name': 'stimuli/tools/videogamecontroller.jpg', 'path': 'stimuli/tools/videogamecontroller.jpg'},
    {'name': 'phase2_order8.csv', 'path': 'phase2_order8.csv'},
    {'name': 'stimuli/animals/hedgehog.jpg', 'path': 'stimuli/animals/hedgehog.jpg'},
    {'name': 'stimuli/animals/minnow.jpg', 'path': 'stimuli/animals/minnow.jpg'},
    {'name': 'stimuli/animals/giraffe.jpg', 'path': 'stimuli/animals/giraffe.jpg'},
    {'name': 'stimuli/tools/blender.jpg', 'path': 'stimuli/tools/blender.jpg'},
    {'name': 'stimuli/animals/beardeddragon.jpg', 'path': 'stimuli/animals/beardeddragon.jpg'},
    {'name': 'stimuli/tools/plow.jpg', 'path': 'stimuli/tools/plow.jpg'},
    {'name': 'stimuli/tools/carjack.jpg', 'path': 'stimuli/tools/carjack.jpg'},
    {'name': 'stimuli/animals/mink.jpg', 'path': 'stimuli/animals/mink.jpg'},
    {'name': 'stimuli/animals/pachnoda.jpg', 'path': 'stimuli/animals/pachnoda.jpg'},
    {'name': 'stimuli/animals/hyena.jpg', 'path': 'stimuli/animals/hyena.jpg'},
    {'name': 'stimuli/animals/stickinsect.jpg', 'path': 'stimuli/animals/stickinsect.jpg'},
    {'name': 'stimuli/tools/hammer.jpg', 'path': 'stimuli/tools/hammer.jpg'},
    {'name': 'stimuli/tools/handsander.jpg', 'path': 'stimuli/tools/handsander.jpg'},
    {'name': 'stimuli/animals/wolf.jpg', 'path': 'stimuli/animals/wolf.jpg'},
    {'name': 'stimuli/tools/electricpipethreader.jpg', 'path': 'stimuli/tools/electricpipethreader.jpg'},
    {'name': 'stimuli/tools/chisel.jpg', 'path': 'stimuli/tools/chisel.jpg'},
    {'name': 'stimuli/tools/lighterbic.jpg', 'path': 'stimuli/tools/lighterbic.jpg'},
    {'name': 'stimuli/animals/salamander.jpg', 'path': 'stimuli/animals/salamander.jpg'},
    {'name': 'stimuli/tools/padlock.jpg', 'path': 'stimuli/tools/padlock.jpg'},
    {'name': 'stimuli/animals/caiman.jpg', 'path': 'stimuli/animals/caiman.jpg'},
    {'name': 'stimuli/animals/macaw.jpg', 'path': 'stimuli/animals/macaw.jpg'},
    {'name': 'stimuli/animals/deer.jpg', 'path': 'stimuli/animals/deer.jpg'},
    {'name': 'stimuli_practice/manmade/plasticgallon.jpg', 'path': 'stimuli_practice/manmade/plasticgallon.jpg'},
    {'name': 'stimuli/tools/treadmill.jpg', 'path': 'stimuli/tools/treadmill.jpg'},
    {'name': 'stimuli/animals/mahimahi.jpg', 'path': 'stimuli/animals/mahimahi.jpg'},
    {'name': 'stimuli/tools/drillpress.jpg', 'path': 'stimuli/tools/drillpress.jpg'},
    {'name': 'stimuli/tools/calculator.jpg', 'path': 'stimuli/tools/calculator.jpg'},
    {'name': 'stimuli/animals/partridge.jpg', 'path': 'stimuli/animals/partridge.jpg'},
    {'name': 'stimuli/tools/razorblade.jpg', 'path': 'stimuli/tools/razorblade.jpg'},
    {'name': 'stimuli/animals/elephantasian.jpg', 'path': 'stimuli/animals/elephantasian.jpg'},
    {'name': 'stimuli/animals/ram.jpg', 'path': 'stimuli/animals/ram.jpg'},
    {'name': 'stimuli/animals/chimp.jpg', 'path': 'stimuli/animals/chimp.jpg'},
    {'name': 'stimuli/tools/edger.jpg', 'path': 'stimuli/tools/edger.jpg'},
    {'name': 'stimuli/tools/carabiner.jpg', 'path': 'stimuli/tools/carabiner.jpg'},
    {'name': 'stimuli/tools/vicegrips.jpg', 'path': 'stimuli/tools/vicegrips.jpg'},
    {'name': 'stimuli/animals/cod.jpg', 'path': 'stimuli/animals/cod.jpg'},
    {'name': 'stimuli/animals/iguana2.jpg', 'path': 'stimuli/animals/iguana2.jpg'},
    {'name': 'stimuli/tools/sledgehammer.jpg', 'path': 'stimuli/tools/sledgehammer.jpg'},
    {'name': 'stimuli/tools/typewriter.jpg', 'path': 'stimuli/tools/typewriter.jpg'},
    {'name': 'stimuli/animals/clownfish.jpg', 'path': 'stimuli/animals/clownfish.jpg'},
    {'name': 'stimuli/tools/ducttape.jpg', 'path': 'stimuli/tools/ducttape.jpg'},
    {'name': 'stimuli/tools/grapplinghook.jpg', 'path': 'stimuli/tools/grapplinghook.jpg'},
    {'name': 'stimuli/tools/stove.jpg', 'path': 'stimuli/tools/stove.jpg'},
    {'name': 'stimuli/tools/battery.jpg', 'path': 'stimuli/tools/battery.jpg'},
    {'name': 'stimuli/animals/racoon.jpg', 'path': 'stimuli/animals/racoon.jpg'},
    {'name': 'stimuli/tools/routerplane.jpg', 'path': 'stimuli/tools/routerplane.jpg'},
    {'name': 'stimuli/tools/tubeflaring.jpg', 'path': 'stimuli/tools/tubeflaring.jpg'},
    {'name': 'stimuli_practice/natural/starfish01.jpg', 'path': 'stimuli_practice/natural/starfish01.jpg'},
    {'name': 'stimuli/animals/chinchilla.jpg', 'path': 'stimuli/animals/chinchilla.jpg'},
    {'name': 'stimuli/animals/dove.jpg', 'path': 'stimuli/animals/dove.jpg'},
    {'name': 'stimuli/animals/waterdragon.jpg', 'path': 'stimuli/animals/waterdragon.jpg'},
    {'name': 'stimuli/animals/pike.jpg', 'path': 'stimuli/animals/pike.jpg'},
    {'name': 'stimuli/tools/caliper.jpg', 'path': 'stimuli/tools/caliper.jpg'},
    {'name': 'phase3_order7.csv', 'path': 'phase3_order7.csv'},
    {'name': 'stimuli/animals/phasmagigas.jpg', 'path': 'stimuli/animals/phasmagigas.jpg'},
    {'name': 'stimuli/tools/file.jpg', 'path': 'stimuli/tools/file.jpg'},
    {'name': 'stimuli/animals/pig.jpg', 'path': 'stimuli/animals/pig.jpg'},
    {'name': 'stimuli/animals/flea.jpg', 'path': 'stimuli/animals/flea.jpg'},
    {'name': 'stimuli_practice/manmade/mousetrap.jpg', 'path': 'stimuli_practice/manmade/mousetrap.jpg'},
    {'name': 'stimuli/tools/camera.jpg', 'path': 'stimuli/tools/camera.jpg'},
    {'name': 'stimuli/tools/pruner.jpg', 'path': 'stimuli/tools/pruner.jpg'},
    {'name': 'stimuli/animals/starfish.jpg', 'path': 'stimuli/animals/starfish.jpg'},
    {'name': 'stimuli/tools/lawnmower.jpg', 'path': 'stimuli/tools/lawnmower.jpg'},
    {'name': 'phase1_order1.csv', 'path': 'phase1_order1.csv'},
    {'name': 'stimuli/tools/computermouse.jpg', 'path': 'stimuli/tools/computermouse.jpg'},
    {'name': 'stimuli/animals/springhare.jpg', 'path': 'stimuli/animals/springhare.jpg'},
    {'name': 'stimuli/animals/moose.jpg', 'path': 'stimuli/animals/moose.jpg'},
    {'name': 'stimuli/animals/ladybug.jpg', 'path': 'stimuli/animals/ladybug.jpg'},
    {'name': 'stimuli/tools/gentssaw.jpg', 'path': 'stimuli/tools/gentssaw.jpg'},
    {'name': 'stimuli/animals/ferret.jpg', 'path': 'stimuli/animals/ferret.jpg'},
    {'name': 'stimuli/tools/trowel.jpg', 'path': 'stimuli/tools/trowel.jpg'},
    {'name': 'stimuli/animals/millipede.jpg', 'path': 'stimuli/animals/millipede.jpg'},
    {'name': 'stimuli/tools/reflexhammer.jpg', 'path': 'stimuli/tools/reflexhammer.jpg'},
    {'name': 'stimuli/animals/penguin.jpg', 'path': 'stimuli/animals/penguin.jpg'},
    {'name': 'stimuli/animals/bumblebee.jpg', 'path': 'stimuli/animals/bumblebee.jpg'},
    {'name': 'stimuli_practice/manmade/pictureframe04.jpg', 'path': 'stimuli_practice/manmade/pictureframe04.jpg'},
    {'name': 'stimuli/tools/walker.jpg', 'path': 'stimuli/tools/walker.jpg'},
    {'name': 'stimuli/animals/lobsterspiny.jpg', 'path': 'stimuli/animals/lobsterspiny.jpg'},
    {'name': 'stimuli/tools/bottleopener.jpg', 'path': 'stimuli/tools/bottleopener.jpg'},
    {'name': 'stimuli/tools/headphones.jpg', 'path': 'stimuli/tools/headphones.jpg'},
    {'name': 'stimuli/tools/pliers2.jpg', 'path': 'stimuli/tools/pliers2.jpg'},
    {'name': 'stimuli/animals/koi.jpg', 'path': 'stimuli/animals/koi.jpg'},
    {'name': 'stimuli/tools/weedeater.jpg', 'path': 'stimuli/tools/weedeater.jpg'},
    {'name': 'stimuli/tools/microscope.jpg', 'path': 'stimuli/tools/microscope.jpg'},
    {'name': 'stimuli/animals/iguana.jpg', 'path': 'stimuli/animals/iguana.jpg'},
    {'name': 'stimuli/tools/telescope.jpg', 'path': 'stimuli/tools/telescope.jpg'},
    {'name': 'stimuli/animals/boar.jpg', 'path': 'stimuli/animals/boar.jpg'},
    {'name': 'stimuli/animals/emu.jpg', 'path': 'stimuli/animals/emu.jpg'},
    {'name': 'stimuli/animals/shieldbug.jpg', 'path': 'stimuli/animals/shieldbug.jpg'},
    {'name': 'stimuli/tools/chainsaw.jpg', 'path': 'stimuli/tools/chainsaw.jpg'},
    {'name': 'stimuli/animals/bat.jpg', 'path': 'stimuli/animals/bat.jpg'},
    {'name': 'stimuli_practice/cues/cue_white.jpg', 'path': 'stimuli_practice/cues/cue_white.jpg'},
    {'name': 'stimuli/animals/marmot.jpg', 'path': 'stimuli/animals/marmot.jpg'},
    {'name': 'stimuli/tools/pressuregauge.jpg', 'path': 'stimuli/tools/pressuregauge.jpg'},
    {'name': 'phase1_order4.csv', 'path': 'phase1_order4.csv'},
    {'name': 'stimuli/animals/grasshopper.jpg', 'path': 'stimuli/animals/grasshopper.jpg'},
    {'name': 'stimuli/tools/mixer.jpg', 'path': 'stimuli/tools/mixer.jpg'},
    {'name': 'stimuli/animals/wildabeast.jpg', 'path': 'stimuli/animals/wildabeast.jpg'},
    {'name': 'stimuli/tools/woodchipper.jpg', 'path': 'stimuli/tools/woodchipper.jpg'},
    {'name': 'stimuli/animals/ostrich.jpg', 'path': 'stimuli/animals/ostrich.jpg'},
    {'name': 'stimuli_practice/manmade/baseball01a.jpg', 'path': 'stimuli_practice/manmade/baseball01a.jpg'},
    {'name': 'stimuli/tools/clippers.jpg', 'path': 'stimuli/tools/clippers.jpg'},
    {'name': 'stimuli/animals/finch.jpg', 'path': 'stimuli/animals/finch.jpg'},
    {'name': 'phase3_order8.csv', 'path': 'phase3_order8.csv'},
    {'name': 'stimuli/tools/cheesegrater.jpg', 'path': 'stimuli/tools/cheesegrater.jpg'},
    {'name': 'stimuli/animals/manatee.jpg', 'path': 'stimuli/animals/manatee.jpg'},
    {'name': 'stimuli/tools/paintgun.jpg', 'path': 'stimuli/tools/paintgun.jpg'},
    {'name': 'stimuli/animals/rat.jpg', 'path': 'stimuli/animals/rat.jpg'},
    {'name': 'phase1_order3.csv', 'path': 'phase1_order3.csv'},
    {'name': 'phase2_order7.csv', 'path': 'phase2_order7.csv'},
    {'name': 'stimuli/animals/vulture.jpg', 'path': 'stimuli/animals/vulture.jpg'},
    {'name': 'stimuli/animals/leafinsect.jpg', 'path': 'stimuli/animals/leafinsect.jpg'},
    {'name': 'stimuli/tools/television.jpg', 'path': 'stimuli/tools/television.jpg'},
    {'name': 'stimuli/tools/auger.jpg', 'path': 'stimuli/tools/auger.jpg'},
    {'name': 'stimuli/tools/cart.jpg', 'path': 'stimuli/tools/cart.jpg'},
    {'name': 'stimuli/tools/paintroller.jpg', 'path': 'stimuli/tools/paintroller.jpg'},
    {'name': 'stimuli/animals/prayingmantis.jpg', 'path': 'stimuli/animals/prayingmantis.jpg'},
    {'name': 'stimuli/tools/dremel.jpg', 'path': 'stimuli/tools/dremel.jpg'},
    {'name': 'stimuli/tools/shoehorn.jpg', 'path': 'stimuli/tools/shoehorn.jpg'},
    {'name': 'stimuli/animals/scorpion_threat.jpg', 'path': 'stimuli/animals/scorpion_threat.jpg'},
    {'name': 'stimuli/tools/scissors.jpg', 'path': 'stimuli/tools/scissors.jpg'},
    {'name': 'stimuli/animals/peacock.jpg', 'path': 'stimuli/animals/peacock.jpg'},
    {'name': 'stimuli/animals/rooster.jpg', 'path': 'stimuli/animals/rooster.jpg'},
    {'name': 'stimuli/animals/carp.jpg', 'path': 'stimuli/animals/carp.jpg'},
    {'name': 'stimuli/animals/turkey.jpg', 'path': 'stimuli/animals/turkey.jpg'},
    {'name': 'stimuli/tools/pencil.jpg', 'path': 'stimuli/tools/pencil.jpg'},
    {'name': 'stimuli/tools/wateringcan.jpg', 'path': 'stimuli/tools/wateringcan.jpg'},
    {'name': 'stimuli/animals/butterfly.jpg', 'path': 'stimuli/animals/butterfly.jpg'},
    {'name': 'stimuli/animals/pigeon.jpg', 'path': 'stimuli/animals/pigeon.jpg'},
    {'name': 'stimuli/tools/airpump.jpg', 'path': 'stimuli/tools/airpump.jpg'},
    {'name': 'stimuli/animals/baldeagle.jpg', 'path': 'stimuli/animals/baldeagle.jpg'},
    {'name': 'stimuli/animals/mouse.jpg', 'path': 'stimuli/animals/mouse.jpg'},
    {'name': 'phase3_order2.csv', 'path': 'phase3_order2.csv'},
    {'name': 'phase1_order7.csv', 'path': 'phase1_order7.csv'},
    {'name': 'stimuli/animals/chicken.jpg', 'path': 'stimuli/animals/chicken.jpg'},
    {'name': 'stimuli/tools/fishtailchisel.jpg', 'path': 'stimuli/tools/fishtailchisel.jpg'},
    {'name': 'stimuli/tools/pencilsharpener.jpg', 'path': 'stimuli/tools/pencilsharpener.jpg'},
    {'name': 'stimuli/animals/snapper.jpg', 'path': 'stimuli/animals/snapper.jpg'},
    {'name': 'stimuli/animals/bison.jpg', 'path': 'stimuli/animals/bison.jpg'},
    {'name': 'stimuli/animals/rainbowtrout.jpg', 'path': 'stimuli/animals/rainbowtrout.jpg'},
    {'name': 'phase3_practice.csv', 'path': 'phase3_practice.csv'},
    {'name': 'stimuli_practice/natural/soil.jpg', 'path': 'stimuli_practice/natural/soil.jpg'},
    {'name': 'stimuli/tools/blackboard.jpg', 'path': 'stimuli/tools/blackboard.jpg'},
    {'name': 'stimuli/animals/bass.jpg', 'path': 'stimuli/animals/bass.jpg'},
    {'name': 'stimuli/animals/earthworm.jpg', 'path': 'stimuli/animals/earthworm.jpg'},
    {'name': 'stimuli/tools/hairdryer.jpg', 'path': 'stimuli/tools/hairdryer.jpg'},
    {'name': 'phase2_order2.csv', 'path': 'phase2_order2.csv'},
    {'name': 'stimuli/tools/sprinkler.jpg', 'path': 'stimuli/tools/sprinkler.jpg'},
    {'name': 'stimuli/tools/stapler.jpg', 'path': 'stimuli/tools/stapler.jpg'},
    {'name': 'stimuli/tools/foodprocessor.jpg', 'path': 'stimuli/tools/foodprocessor.jpg'},
    {'name': 'stimuli/animals/crab.jpg', 'path': 'stimuli/animals/crab.jpg'},
    {'name': 'stimuli/animals/highlandcow.jpg', 'path': 'stimuli/animals/highlandcow.jpg'},
    {'name': 'stimuli/tools/sparkplug.jpg', 'path': 'stimuli/tools/sparkplug.jpg'},
    {'name': 'stimuli/animals/alligator.jpg', 'path': 'stimuli/animals/alligator.jpg'},
    {'name': 'stimuli/tools/transmissionwrench.jpg', 'path': 'stimuli/tools/transmissionwrench.jpg'},
    {'name': 'stimuli/animals/flamingo.jpg', 'path': 'stimuli/animals/flamingo.jpg'},
    {'name': 'stimuli/animals/balloonfish.jpg', 'path': 'stimuli/animals/balloonfish.jpg'},
    {'name': 'stimuli/tools/monkeywrench.jpg', 'path': 'stimuli/tools/monkeywrench.jpg'},
    {'name': 'stimuli/tools/tuner.jpg', 'path': 'stimuli/tools/tuner.jpg'},
    {'name': 'stimuli/tools/hedgeshears.jpg', 'path': 'stimuli/tools/hedgeshears.jpg'},
    {'name': 'stimuli/animals/perch.jpg', 'path': 'stimuli/animals/perch.jpg'},
    {'name': 'stimuli/tools/gong.jpg', 'path': 'stimuli/tools/gong.jpg'},
    {'name': 'stimuli/animals/flounder.jpg', 'path': 'stimuli/animals/flounder.jpg'},
    {'name': 'stimuli/animals/zebra.jpg', 'path': 'stimuli/animals/zebra.jpg'},
    {'name': 'stimuli/animals/reindeer.jpg', 'path': 'stimuli/animals/reindeer.jpg'},
    {'name': 'stimuli/animals/redpalmweevil.jpg', 'path': 'stimuli/animals/redpalmweevil.jpg'},
    {'name': 'stimuli/animals/snail.jpg', 'path': 'stimuli/animals/snail.jpg'},
    {'name': 'stimuli/tools/whistle.jpg', 'path': 'stimuli/tools/whistle.jpg'},
    {'name': 'stimuli/animals/sheep.jpg', 'path': 'stimuli/animals/sheep.jpg'},
    {'name': 'stimuli/animals/gorilla.jpg', 'path': 'stimuli/animals/gorilla.jpg'},
    {'name': 'stimuli/tools/whisk.jpg', 'path': 'stimuli/tools/whisk.jpg'},
    {'name': 'stimuli/tools/tubingbender.jpg', 'path': 'stimuli/tools/tubingbender.jpg'},
    {'name': 'stimuli/tools/hourglass.jpg', 'path': 'stimuli/tools/hourglass.jpg'},
    {'name': 'stimuli/tools/vegetablepeeler.jpg', 'path': 'stimuli/tools/vegetablepeeler.jpg'},
    {'name': 'stimuli/animals/ibises.jpg', 'path': 'stimuli/animals/ibises.jpg'},
    {'name': 'stimuli/animals/mountainsheep.jpg', 'path': 'stimuli/animals/mountainsheep.jpg'},
    {'name': 'stimuli/animals/prairiedog.jpg', 'path': 'stimuli/animals/prairiedog.jpg'},
    {'name': 'stimuli/animals/herculesbeetle.jpg', 'path': 'stimuli/animals/herculesbeetle.jpg'},
    {'name': 'stimuli/tools/suctioncup.jpg', 'path': 'stimuli/tools/suctioncup.jpg'},
    {'name': 'stimuli/animals/beetle.jpg', 'path': 'stimuli/animals/beetle.jpg'},
    {'name': 'stimuli/animals/dragonfly.jpg', 'path': 'stimuli/animals/dragonfly.jpg'},
    {'name': 'stimuli/animals/plantbug.jpg', 'path': 'stimuli/animals/plantbug.jpg'},
    {'name': 'stimuli/tools/bucket.jpg', 'path': 'stimuli/tools/bucket.jpg'},
    {'name': 'stimuli/animals/hermitcrab.jpg', 'path': 'stimuli/animals/hermitcrab.jpg'},
    {'name': 'stimuli/tools/solderingtorch.jpg', 'path': 'stimuli/tools/solderingtorch.jpg'},
    {'name': 'stimuli/animals/otter.jpg', 'path': 'stimuli/animals/otter.jpg'},
    {'name': 'stimuli/animals/lion_threat.jpg', 'path': 'stimuli/animals/lion_threat.jpg'},
    {'name': 'stimuli/cues/cue_white.jpg', 'path': 'stimuli/cues/cue_white.jpg'},
    {'name': 'stimuli/tools/levelmount.jpg', 'path': 'stimuli/tools/levelmount.jpg'},
    {'name': 'phase2_order1.csv', 'path': 'phase2_order1.csv'},
    {'name': 'stimuli/animals/slug.jpg', 'path': 'stimuli/animals/slug.jpg'},
    {'name': 'stimuli/animals/dockbug.jpg', 'path': 'stimuli/animals/dockbug.jpg'},
    {'name': 'stimuli/animals/skunk.jpg', 'path': 'stimuli/animals/skunk.jpg'},
    {'name': 'stimuli/tools/fan.jpg', 'path': 'stimuli/tools/fan.jpg'},
    {'name': 'stimuli/animals/crow.jpg', 'path': 'stimuli/animals/crow.jpg'},
    {'name': 'stimuli/animals/angelfish.jpg', 'path': 'stimuli/animals/angelfish.jpg'},
    {'name': 'stimuli/animals/tiger_threat.jpg', 'path': 'stimuli/animals/tiger_threat.jpg'},
    {'name': 'stimuli/tools/scratchawl.jpg', 'path': 'stimuli/tools/scratchawl.jpg'},
    {'name': 'stimuli/animals/camel.jpg', 'path': 'stimuli/animals/camel.jpg'},
    {'name': 'stimuli/animals/waterbuffalo.jpg', 'path': 'stimuli/animals/waterbuffalo.jpg'},
    {'name': 'phase3_order6.csv', 'path': 'phase3_order6.csv'},
    {'name': 'stimuli/tools/ladder.jpg', 'path': 'stimuli/tools/ladder.jpg'},
    {'name': 'stimuli/animals/beta.jpg', 'path': 'stimuli/animals/beta.jpg'},
    {'name': 'stimuli/animals/baboon.jpg', 'path': 'stimuli/animals/baboon.jpg'},
    {'name': 'stimuli/tools/handdrill.jpg', 'path': 'stimuli/tools/handdrill.jpg'},
    {'name': 'stimuli/tools/measuringcups.jpg', 'path': 'stimuli/tools/measuringcups.jpg'},
    {'name': 'stimuli/animals/fox.jpg', 'path': 'stimuli/animals/fox.jpg'},
    {'name': 'phase2_order6.csv', 'path': 'phase2_order6.csv'},
    {'name': 'stimuli/tools/eraser.jpg', 'path': 'stimuli/tools/eraser.jpg'},
    {'name': 'stimuli/animals/centipede_threat.jpg', 'path': 'stimuli/animals/centipede_threat.jpg'},
    {'name': 'stimuli/tools/umbrella.jpg', 'path': 'stimuli/tools/umbrella.jpg'},
    {'name': 'stimuli/tools/anvil.jpg', 'path': 'stimuli/tools/anvil.jpg'},
    {'name': 'phase2_practice.csv', 'path': 'phase2_practice.csv'},
    {'name': 'stimuli/tools/pick.jpg', 'path': 'stimuli/tools/pick.jpg'},
    {'name': 'stimuli/tools/ropeandpulley.jpg', 'path': 'stimuli/tools/ropeandpulley.jpg'},
    {'name': 'stimuli/tools/vacuumcleaner.jpg', 'path': 'stimuli/tools/vacuumcleaner.jpg'},
    {'name': 'stimuli/animals/shrimp.jpg', 'path': 'stimuli/animals/shrimp.jpg'},
    {'name': 'stimuli/animals/gerbil.jpg', 'path': 'stimuli/animals/gerbil.jpg'},
    {'name': 'stimuli/tools/pizzacutter.jpg', 'path': 'stimuli/tools/pizzacutter.jpg'},
    {'name': 'stimuli/animals/stinkbug.jpg', 'path': 'stimuli/animals/stinkbug.jpg'},
    {'name': 'stimuli/tools/abacus.jpg', 'path': 'stimuli/tools/abacus.jpg'},
    {'name': 'stimuli/animals/spider_threat.jpg', 'path': 'stimuli/animals/spider_threat.jpg'},
    {'name': 'stimuli/tools/kettle.jpg', 'path': 'stimuli/tools/kettle.jpg'},
    {'name': 'phase1_order8.csv', 'path': 'phase1_order8.csv'},
    {'name': 'stimuli/animals/dog2.jpg', 'path': 'stimuli/animals/dog2.jpg'},
    {'name': 'stimuli/animals/monkey.jpg', 'path': 'stimuli/animals/monkey.jpg'},
    {'name': 'stimuli/tools/coathanger.jpg', 'path': 'stimuli/tools/coathanger.jpg'},
    {'name': 'stimuli/animals/woodlouse.jpg', 'path': 'stimuli/animals/woodlouse.jpg'},
    {'name': 'stimuli/animals/mole.jpg', 'path': 'stimuli/animals/mole.jpg'},
    {'name': 'stimuli/animals/goat.jpg', 'path': 'stimuli/animals/goat.jpg'},
    {'name': 'stimuli/tools/jawsoflife.jpg', 'path': 'stimuli/tools/jawsoflife.jpg'},
    {'name': 'stimuli/animals/penguin2.jpg', 'path': 'stimuli/animals/penguin2.jpg'},
    {'name': 'stimuli/animals/dockbug2.jpg', 'path': 'stimuli/animals/dockbug2.jpg'},
    {'name': 'stimuli/tools/scale.jpg', 'path': 'stimuli/tools/scale.jpg'},
    {'name': 'stimuli/tools/faxmachine.jpg', 'path': 'stimuli/tools/faxmachine.jpg'},
    {'name': 'stimuli/animals/sparrow.jpg', 'path': 'stimuli/animals/sparrow.jpg'},
    {'name': 'stimuli/tools/screwdriver.jpg', 'path': 'stimuli/tools/screwdriver.jpg'},
    {'name': 'stimuli/tools/curlingiron.jpg', 'path': 'stimuli/tools/curlingiron.jpg'},
    {'name': 'stimuli/cues/cue_green.jpg', 'path': 'stimuli/cues/cue_green.jpg'},
    {'name': 'stimuli/animals/fly.jpg', 'path': 'stimuli/animals/fly.jpg'},
    {'name': 'stimuli/animals/cranebug.jpg', 'path': 'stimuli/animals/cranebug.jpg'},
    {'name': 'stimuli/animals/bear.jpg', 'path': 'stimuli/animals/bear.jpg'},
    {'name': 'stimuli/tools/microwave.jpg', 'path': 'stimuli/tools/microwave.jpg'},
    {'name': 'stimuli/tools/ladel.jpg', 'path': 'stimuli/tools/ladel.jpg'},
    {'name': 'stimuli/animals/caterpillar.jpg', 'path': 'stimuli/animals/caterpillar.jpg'},
    {'name': 'stimuli/tools/weldinghelmet.jpg', 'path': 'stimuli/tools/weldinghelmet.jpg'},
    {'name': 'stimuli/tools/measuringdevice.jpg', 'path': 'stimuli/tools/measuringdevice.jpg'},
    {'name': 'stimuli/tools/airhorn.jpg', 'path': 'stimuli/tools/airhorn.jpg'},
    {'name': 'stimuli_practice/natural/rock01a.jpg', 'path': 'stimuli_practice/natural/rock01a.jpg'},
    {'name': 'stimuli/tools/magnet.jpg', 'path': 'stimuli/tools/magnet.jpg'},
    {'name': 'stimuli/animals/toucan.jpg', 'path': 'stimuli/animals/toucan.jpg'},
    {'name': 'stimuli/animals/watusi.jpg', 'path': 'stimuli/animals/watusi.jpg'},
    {'name': 'phase2_order3.csv', 'path': 'phase2_order3.csv'},
    {'name': 'stimuli/animals/hummingbird.jpg', 'path': 'stimuli/animals/hummingbird.jpg'},
    {'name': 'stimuli/animals/moth.jpg', 'path': 'stimuli/animals/moth.jpg'},
    {'name': 'stimuli/tools/toaster.jpg', 'path': 'stimuli/tools/toaster.jpg'},
    {'name': 'stimuli/tools/stroller.jpg', 'path': 'stimuli/tools/stroller.jpg'},
    {'name': 'stimuli/tools/burnisher.jpg', 'path': 'stimuli/tools/burnisher.jpg'},
    {'name': 'stimuli/tools/floorbuffer.jpg', 'path': 'stimuli/tools/floorbuffer.jpg'},
    {'name': 'stimuli/tools/measuringtape.jpg', 'path': 'stimuli/tools/measuringtape.jpg'},
    {'name': 'stimuli/tools/loom.jpg', 'path': 'stimuli/tools/loom.jpg'},
    {'name': 'stimuli/animals/hippo.jpg', 'path': 'stimuli/animals/hippo.jpg'},
    {'name': 'stimuli/tools/corkscrew.jpg', 'path': 'stimuli/tools/corkscrew.jpg'},
    {'name': 'stimuli/tools/bolt.jpg', 'path': 'stimuli/tools/bolt.jpg'},
    {'name': 'phase3_order5.csv', 'path': 'phase3_order5.csv'},
    {'name': 'stimuli/animals/gecko.jpg', 'path': 'stimuli/animals/gecko.jpg'},
    {'name': 'stimuli/tools/stethoscope.jpg', 'path': 'stimuli/tools/stethoscope.jpg'},
    {'name': 'stimuli/tools/smartphone.jpg', 'path': 'stimuli/tools/smartphone.jpg'},
    {'name': 'stimuli/tools/sander.jpg', 'path': 'stimuli/tools/sander.jpg'},
    {'name': 'stimuli/tools/bevelgauge.jpg', 'path': 'stimuli/tools/bevelgauge.jpg'},
    {'name': 'stimuli/animals/meerkat.jpg', 'path': 'stimuli/animals/meerkat.jpg'},
    {'name': 'stimuli/tools/stopwatch.jpg', 'path': 'stimuli/tools/stopwatch.jpg'},
    {'name': 'stimuli/animals/lobster.jpg', 'path': 'stimuli/animals/lobster.jpg'},
    {'name': 'stimuli/tools/pliers.jpg', 'path': 'stimuli/tools/pliers.jpg'},
    {'name': 'stimuli/tools/oven.jpg', 'path': 'stimuli/tools/oven.jpg'},
    {'name': 'stimuli/tools/hairbrush.jpg', 'path': 'stimuli/tools/hairbrush.jpg'},
    {'name': 'stimuli/tools/electricsander.jpg', 'path': 'stimuli/tools/electricsander.jpg'},
    {'name': 'stimuli/animals/bluejay.jpg', 'path': 'stimuli/animals/bluejay.jpg'},
    {'name': 'stimuli/tools/jumpercables.jpg', 'path': 'stimuli/tools/jumpercables.jpg'},
    {'name': 'stimuli/tools/compass.jpg', 'path': 'stimuli/tools/compass.jpg'},
    {'name': 'stimuli/tools/engine.jpg', 'path': 'stimuli/tools/engine.jpg'},
    {'name': 'stimuli/tools/extensioncord.jpg', 'path': 'stimuli/tools/extensioncord.jpg'},
    {'name': 'phase3_order1.csv', 'path': 'phase3_order1.csv'},
    {'name': 'stimuli/animals/catfish.jpg', 'path': 'stimuli/animals/catfish.jpg'},
    {'name': 'stimuli/animals/panda.jpg', 'path': 'stimuli/animals/panda.jpg'},
    {'name': 'stimuli/tools/sewingmachine.jpg', 'path': 'stimuli/tools/sewingmachine.jpg'},
    {'name': 'stimuli/tools/rake.jpg', 'path': 'stimuli/tools/rake.jpg'},
    {'name': 'stimuli/animals/porcupine.jpg', 'path': 'stimuli/animals/porcupine.jpg'},
    {'name': 'stimuli/animals/crane.jpg', 'path': 'stimuli/animals/crane.jpg'},
    {'name': 'stimuli/animals/heckcattle.jpg', 'path': 'stimuli/animals/heckcattle.jpg'},
    {'name': 'stimuli/tools/clamp.jpg', 'path': 'stimuli/tools/clamp.jpg'},
    {'name': 'stimuli/tools/circularsaw.jpg', 'path': 'stimuli/tools/circularsaw.jpg'},
    {'name': 'stimuli/animals/dolphin.jpg', 'path': 'stimuli/animals/dolphin.jpg'},
    {'name': 'stimuli/tools/plunger.jpg', 'path': 'stimuli/tools/plunger.jpg'},
    {'name': 'stimuli/tools/ruler.jpg', 'path': 'stimuli/tools/ruler.jpg'},
    {'name': 'phase1_order6.csv', 'path': 'phase1_order6.csv'},
    {'name': 'stimuli/tools/magnifyingglass.jpg', 'path': 'stimuli/tools/magnifyingglass.jpg'},
    {'name': 'stimuli/tools/snowbrush.jpg', 'path': 'stimuli/tools/snowbrush.jpg'},
    {'name': 'phase3_order4.csv', 'path': 'phase3_order4.csv'},
    {'name': 'stimuli/tools/spraybottle.jpg', 'path': 'stimuli/tools/spraybottle.jpg'},
    {'name': 'stimuli/animals/seal.jpg', 'path': 'stimuli/animals/seal.jpg'},
    {'name': 'stimuli/tools/tirespoon.jpg', 'path': 'stimuli/tools/tirespoon.jpg'},
    {'name': 'stimuli/tools/flashlight.jpg', 'path': 'stimuli/tools/flashlight.jpg'},
    {'name': 'stimuli/animals/shark_threat.jpg', 'path': 'stimuli/animals/shark_threat.jpg'},
    {'name': 'stimuli/tools/blower.jpg', 'path': 'stimuli/tools/blower.jpg'},
    {'name': 'phase1_order5.csv', 'path': 'phase1_order5.csv'},
    {'name': 'stimuli/animals/seaslug.jpg', 'path': 'stimuli/animals/seaslug.jpg'},
    {'name': 'stimuli/animals/aardvark.jpg', 'path': 'stimuli/animals/aardvark.jpg'},
    {'name': 'stimuli/animals/caracal.jpg', 'path': 'stimuli/animals/caracal.jpg'},
    {'name': 'stimuli/tools/duffelbag.jpg', 'path': 'stimuli/tools/duffelbag.jpg'},
    {'name': 'stimuli/animals/donkey.jpg', 'path': 'stimuli/animals/donkey.jpg'},
    {'name': 'stimuli/animals/redpanda.jpg', 'path': 'stimuli/animals/redpanda.jpg'},
    {'name': 'stimuli/tools/shovel.jpg', 'path': 'stimuli/tools/shovel.jpg'},
    {'name': 'stimuli/tools/mellonballer.jpg', 'path': 'stimuli/tools/mellonballer.jpg'},
    {'name': 'stimuli/tools/digitalcamera.jpg', 'path': 'stimuli/tools/digitalcamera.jpg'},
    {'name': 'stimuli/animals/elephantafrican.jpg', 'path': 'stimuli/animals/elephantafrican.jpg'},
    {'name': 'stimuli/animals/cockatiel.jpg', 'path': 'stimuli/animals/cockatiel.jpg'},
    {'name': 'stimuli/animals/blackleopard.jpg', 'path': 'stimuli/animals/blackleopard.jpg'},
    {'name': 'stimuli/animals/pillmillipede.jpg', 'path': 'stimuli/animals/pillmillipede.jpg'},
    {'name': 'stimuli/tools/mallet.jpg', 'path': 'stimuli/tools/mallet.jpg'},
    {'name': 'stimuli/tools/nailgun.jpg', 'path': 'stimuli/tools/nailgun.jpg'},
    {'name': 'stimuli/tools/viceclamp.jpg', 'path': 'stimuli/tools/viceclamp.jpg'},
    {'name': 'stimuli/tools/washboard.jpg', 'path': 'stimuli/tools/washboard.jpg'},
    {'name': 'stimuli/tools/toolbox.jpg', 'path': 'stimuli/tools/toolbox.jpg'},
    {'name': 'stimuli/tools/watch.jpg', 'path': 'stimuli/tools/watch.jpg'},
    {'name': 'stimuli/animals/clam.jpg', 'path': 'stimuli/animals/clam.jpg'},
    {'name': 'stimuli/tools/chainwrench.jpg', 'path': 'stimuli/tools/chainwrench.jpg'},
    {'name': 'stimuli/animals/quail.jpg', 'path': 'stimuli/animals/quail.jpg'},
    {'name': 'stimuli/tools/beadingtool.jpg', 'path': 'stimuli/tools/beadingtool.jpg'},
    {'name': 'stimuli/animals/lemur.jpg', 'path': 'stimuli/animals/lemur.jpg'},
    {'name': 'stimuli/tools/sawblade.jpg', 'path': 'stimuli/tools/sawblade.jpg'},
    {'name': 'stimuli/tools/wheelbarrow.jpg', 'path': 'stimuli/tools/wheelbarrow.jpg'},
    {'name': 'stimuli/tools/italiangardeningtool.jpg', 'path': 'stimuli/tools/italiangardeningtool.jpg'},
    {'name': 'stimuli_practice/cues/cue_green.jpg', 'path': 'stimuli_practice/cues/cue_green.jpg'},
    {'name': 'stimuli/animals/orangutan.jpg', 'path': 'stimuli/animals/orangutan.jpg'},
    {'name': 'stimuli/tools/grill.jpg', 'path': 'stimuli/tools/grill.jpg'},
    {'name': 'stimuli/animals/armadillo.jpg', 'path': 'stimuli/animals/armadillo.jpg'},
    {'name': 'stimuli/animals/turtle.jpg', 'path': 'stimuli/animals/turtle.jpg'},
    {'name': 'stimuli/tools/hoe.jpg', 'path': 'stimuli/tools/hoe.jpg'},
    {'name': 'stimuli/tools/squeegee.jpg', 'path': 'stimuli/tools/squeegee.jpg'},
    {'name': 'stimuli/animals/tortoise.jpg', 'path': 'stimuli/animals/tortoise.jpg'},
    {'name': 'stimuli/tools/planer.jpg', 'path': 'stimuli/tools/planer.jpg'},
    {'name': 'stimuli/tools/caulkinggun.jpg', 'path': 'stimuli/tools/caulkinggun.jpg'},
    {'name': 'stimuli/tools/thermometer.jpg', 'path': 'stimuli/tools/thermometer.jpg'},
    {'name': 'stimuli/animals/dramaderry.jpg', 'path': 'stimuli/animals/dramaderry.jpg'},
    {'name': 'stimuli/tools/electricbreaker.jpg', 'path': 'stimuli/tools/electricbreaker.jpg'},
    {'name': 'stimuli/tools/crank.jpg', 'path': 'stimuli/tools/crank.jpg'},
    {'name': 'stimuli/tools/rollingpin.jpg', 'path': 'stimuli/tools/rollingpin.jpg'},
    {'name': 'stimuli/tools/staplegun.jpg', 'path': 'stimuli/tools/staplegun.jpg'},
    {'name': 'stimuli/tools/telephone.jpg', 'path': 'stimuli/tools/telephone.jpg'},
    {'name': 'stimuli/animals/rosechafer.jpg', 'path': 'stimuli/animals/rosechafer.jpg'},
    {'name': 'stimuli/tools/lantern.jpg', 'path': 'stimuli/tools/lantern.jpg'},
    {'name': 'stimuli/tools/weldershammer.jpg', 'path': 'stimuli/tools/weldershammer.jpg'},
    {'name': 'stimuli/animals/halibut.jpg', 'path': 'stimuli/animals/halibut.jpg'},
    {'name': 'stimuli/animals/assassinbug.jpg', 'path': 'stimuli/animals/assassinbug.jpg'},
    {'name': 'stimuli/animals/scorpion.jpg', 'path': 'stimuli/animals/scorpion.jpg'},
    {'name': 'stimuli/animals/chipmunk.jpg', 'path': 'stimuli/animals/chipmunk.jpg'},
    {'name': 'stimuli/animals/octopus.jpg', 'path': 'stimuli/animals/octopus.jpg'},
    {'name': 'stimuli/animals/pelican.jpg', 'path': 'stimuli/animals/pelican.jpg'},
    {'name': 'stimuli/animals/cow.jpg', 'path': 'stimuli/animals/cow.jpg'},
    {'name': 'stimuli/animals/bushdog.jpg', 'path': 'stimuli/animals/bushdog.jpg'},
    {'name': 'stimuli/animals/ant.jpg', 'path': 'stimuli/animals/ant.jpg'},
    {'name': 'stimuli/animals/cheetah.jpg', 'path': 'stimuli/animals/cheetah.jpg'},
    {'name': 'stimuli/tools/sponge.jpg', 'path': 'stimuli/tools/sponge.jpg'},
    {'name': 'stimuli/animals/anteater.jpg', 'path': 'stimuli/animals/anteater.jpg'},
    {'name': 'stimuli/animals/horse.jpg', 'path': 'stimuli/animals/horse.jpg'},
    {'name': 'stimuli/tools/electricdrill.jpg', 'path': 'stimuli/tools/electricdrill.jpg'},
    {'name': 'stimuli/tools/fishingpole.jpg', 'path': 'stimuli/tools/fishingpole.jpg'},
    {'name': 'stimuli/animals/lion.jpg', 'path': 'stimuli/animals/lion.jpg'},
    {'name': 'stimuli/tools/crutches.jpg', 'path': 'stimuli/tools/crutches.jpg'},
    {'name': 'stimuli/tools/wheeldolly.jpg', 'path': 'stimuli/tools/wheeldolly.jpg'},
    {'name': 'stimuli/tools/benchdogs.jpg', 'path': 'stimuli/tools/benchdogs.jpg'},
    {'name': 'stimuli/animals/pachnodasinuata.jpg', 'path': 'stimuli/animals/pachnodasinuata.jpg'},
    {'name': 'stimuli/tools/glove.jpg', 'path': 'stimuli/tools/glove.jpg'},
    {'name': 'phase3_order3.csv', 'path': 'phase3_order3.csv'},
    {'name': 'stimuli/tools/paintbrush.jpg', 'path': 'stimuli/tools/paintbrush.jpg'},
    {'name': 'stimuli/tools/wrench.jpg', 'path': 'stimuli/tools/wrench.jpg'},
    {'name': 'stimuli/tools/fertilzerspread.jpg', 'path': 'stimuli/tools/fertilzerspread.jpg'},
    {'name': 'stimuli/animals/frog.jpg', 'path': 'stimuli/animals/frog.jpg'},
    {'name': 'stimuli_practice/natural/feather03a.jpg', 'path': 'stimuli_practice/natural/feather03a.jpg'},
    {'name': 'stimuli/animals/dog.jpg', 'path': 'stimuli/animals/dog.jpg'},
    {'name': 'stimuli/animals/cat.jpg', 'path': 'stimuli/animals/cat.jpg'},
    {'name': 'stimuli/animals/lizard.jpg', 'path': 'stimuli/animals/lizard.jpg'},
    {'name': 'stimuli/tools/iron.jpg', 'path': 'stimuli/tools/iron.jpg'},
    {'name': 'stimuli/animals/squirel.jpg', 'path': 'stimuli/animals/squirel.jpg'},
    {'name': 'stimuli/animals/canary.jpg', 'path': 'stimuli/animals/canary.jpg'},
    {'name': 'stimuli/animals/caterpillarpeacockmoth.jpg', 'path': 'stimuli/animals/caterpillarpeacockmoth.jpg'},
    {'name': 'stimuli/animals/yak.jpg', 'path': 'stimuli/animals/yak.jpg'},
    {'name': 'stimuli/tools/binoculars.jpg', 'path': 'stimuli/tools/binoculars.jpg'},
    {'name': 'stimuli/tools/workbench.jpg', 'path': 'stimuli/tools/workbench.jpg'},
    {'name': 'stimuli/tools/keys.jpg', 'path': 'stimuli/tools/keys.jpg'},
    {'name': 'stimuli/tools/gardenhose.jpg', 'path': 'stimuli/tools/gardenhose.jpg'},
    {'name': 'stimuli/animals/duck.jpg', 'path': 'stimuli/animals/duck.jpg'},
    {'name': 'stimuli/animals/herring.jpg', 'path': 'stimuli/animals/herring.jpg'},
    {'name': 'stimuli/animals/malaysianleafkatayid.jpg', 'path': 'stimuli/animals/malaysianleafkatayid.jpg'},
    {'name': 'stimuli/animals/cricket.jpg', 'path': 'stimuli/animals/cricket.jpg'},
    {'name': 'stimuli/tools/circlecutter.jpg', 'path': 'stimuli/tools/circlecutter.jpg'},
    {'name': 'stimuli/tools/mop.jpg', 'path': 'stimuli/tools/mop.jpg'},
    {'name': 'stimuli/animals/tiger.jpg', 'path': 'stimuli/animals/tiger.jpg'},
    {'name': 'stimuli/animals/koala.jpg', 'path': 'stimuli/animals/koala.jpg'}
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
var Pre_Reward_PracticeClock;
var enc_2;
var cross_4;
var left_2;
var right_2;
var isi_4;
var pre_reward_response_2;
var skip_2;
var check_practiceClock;
var text_6;
var key_resp;
var continue_2Clock;
var text;
var instructions_continue_3;
var Pre_RewardClock;
var enc;
var cross;
var left;
var right;
var isi;
var pre_reward_response;
var skip;
var reward_insClock;
var instructions_page_2;
var instructions_continue_4;
var practice_instructions_rewardClock;
var text_5;
var instruction_continue_6;
var Reward_PracticeClock;
var enc2_2;
var cross_3;
var left2_2;
var right2_2;
var isi_3;
var reward_response_2;
var reward_star_2;
var reward_text_2;
var skip2_2;
var check_reward_practiceClock;
var text_7;
var key_resp_2;
var continue_3Clock;
var text_4;
var instruction_continue_7;
var RewardClock;
var enc2;
var cross_2;
var left2;
var right2;
var isi_2;
var reward_response;
var reward_star;
var reward_text;
var skip2;
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
  // Initialize components for Routine "Pre_Reward_Practice"
  Pre_Reward_PracticeClock = new util.Clock();
  enc_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'enc_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  cross_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_4', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  left_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.35), 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  right_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.35, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  isi_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'isi_4', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  pre_reward_response_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  skip_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "check_practice"
  check_practiceClock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'You have completed the practice trials. As a reminder, your task is to indicate which of the two images is the target image, using the 1 and 2 keys.\n\nYou will now begin the first phase of the experiment.\n\nPress space bar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
  // Initialize components for Routine "Reward_Practice"
  Reward_PracticeClock = new util.Clock();
  enc2_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'enc2_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  cross_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_3', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  left2_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left2_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.35), 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  right2_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right2_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.35, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  isi_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'isi_3', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  reward_response_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  reward_star_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'reward_star_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : false, depth : -6.0 
  });
  reward_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'reward_text_2',
    text: 'Miss!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  skip2_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "check_reward_practice"
  check_reward_practiceClock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'You have completed the practice trials. As a reminder, your task is to indicate which of the two images is the target image, using the 1 and 2 keys.\n\nYou will now begin the first phase of the experiment.\n\nPress space bar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
  
  skip2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    pre_re_insComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
    pre_re_insComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    pre_re_insComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    practice_instructions_pre_rewardComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
    practice_instructions_pre_rewardComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    practice_instructions_pre_rewardComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
  repeat_practice.forEach(function() {
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
  });

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
  practice.forEach(function() {
    const snapshot = practice.getSnapshot();

    practiceLoopScheduler.add(importConditions(snapshot));
    practiceLoopScheduler.add(scriptRoutineBegin(snapshot));
    practiceLoopScheduler.add(scriptRoutineEachFrame(snapshot));
    practiceLoopScheduler.add(scriptRoutineEnd(snapshot));
    practiceLoopScheduler.add(Pre_Reward_PracticeRoutineBegin(snapshot));
    practiceLoopScheduler.add(Pre_Reward_PracticeRoutineEachFrame(snapshot));
    practiceLoopScheduler.add(Pre_Reward_PracticeRoutineEnd(snapshot));
    practiceLoopScheduler.add(endLoopIteration(practiceLoopScheduler, snapshot));
  });

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
  pre_reward_trials.forEach(function() {
    const snapshot = pre_reward_trials.getSnapshot();

    pre_reward_trialsLoopScheduler.add(importConditions(snapshot));
    pre_reward_trialsLoopScheduler.add(scriptRoutineBegin(snapshot));
    pre_reward_trialsLoopScheduler.add(scriptRoutineEachFrame(snapshot));
    pre_reward_trialsLoopScheduler.add(scriptRoutineEnd(snapshot));
    pre_reward_trialsLoopScheduler.add(Pre_RewardRoutineBegin(snapshot));
    pre_reward_trialsLoopScheduler.add(Pre_RewardRoutineEachFrame(snapshot));
    pre_reward_trialsLoopScheduler.add(Pre_RewardRoutineEnd(snapshot));
    pre_reward_trialsLoopScheduler.add(endLoopIteration(pre_reward_trialsLoopScheduler, snapshot));
  });

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
  repeat_reward_practice.forEach(function() {
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
  });

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
  reward_practice.forEach(function() {
    const snapshot = reward_practice.getSnapshot();

    reward_practiceLoopScheduler.add(importConditions(snapshot));
    reward_practiceLoopScheduler.add(scriptRoutineBegin(snapshot));
    reward_practiceLoopScheduler.add(scriptRoutineEachFrame(snapshot));
    reward_practiceLoopScheduler.add(scriptRoutineEnd(snapshot));
    reward_practiceLoopScheduler.add(Reward_PracticeRoutineBegin(snapshot));
    reward_practiceLoopScheduler.add(Reward_PracticeRoutineEachFrame(snapshot));
    reward_practiceLoopScheduler.add(Reward_PracticeRoutineEnd(snapshot));
    reward_practiceLoopScheduler.add(endLoopIteration(reward_practiceLoopScheduler, snapshot));
  });

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
    trialList: reward_cond,
    seed: undefined, name: 'reward_trials'
  });
  psychoJS.experiment.addLoop(reward_trials); // add the loop to the experiment
  currentLoop = reward_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  reward_trials.forEach(function() {
    const snapshot = reward_trials.getSnapshot();

    reward_trialsLoopScheduler.add(importConditions(snapshot));
    reward_trialsLoopScheduler.add(scriptRoutineBegin(snapshot));
    reward_trialsLoopScheduler.add(scriptRoutineEachFrame(snapshot));
    reward_trialsLoopScheduler.add(scriptRoutineEnd(snapshot));
    reward_trialsLoopScheduler.add(RewardRoutineBegin(snapshot));
    reward_trialsLoopScheduler.add(RewardRoutineEachFrame(snapshot));
    reward_trialsLoopScheduler.add(RewardRoutineEnd(snapshot));
    reward_trialsLoopScheduler.add(endLoopIteration(reward_trialsLoopScheduler, snapshot));
  });

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
    
    scriptComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
    scriptComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    scriptComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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


var _pre_reward_response_2_allKeys;
var _skip_2_allKeys;
var Pre_Reward_PracticeComponents;
function Pre_Reward_PracticeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Pre_Reward_Practice'-------
    t = 0;
    Pre_Reward_PracticeClock.reset(); // clock
    frameN = -1;
    routineTimer.add(9.100000);
    // update component parameters for each repeat
    enc_2.setImage(stim_name_enc);
    left_2.setImage(stim_name_left);
    right_2.setImage(stim_name_right);
    pre_reward_response_2.keys = undefined;
    pre_reward_response_2.rt = undefined;
    _pre_reward_response_2_allKeys = [];
    skip_2.keys = undefined;
    skip_2.rt = undefined;
    _skip_2_allKeys = [];
    // keep track of which components have finished
    Pre_Reward_PracticeComponents = [];
    Pre_Reward_PracticeComponents.push(enc_2);
    Pre_Reward_PracticeComponents.push(cross_4);
    Pre_Reward_PracticeComponents.push(left_2);
    Pre_Reward_PracticeComponents.push(right_2);
    Pre_Reward_PracticeComponents.push(isi_4);
    Pre_Reward_PracticeComponents.push(pre_reward_response_2);
    Pre_Reward_PracticeComponents.push(skip_2);
    
    Pre_Reward_PracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function Pre_Reward_PracticeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Pre_Reward_Practice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Pre_Reward_PracticeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *enc_2* updates
    if (t >= 0.0 && enc_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_2.tStart = t;  // (not accounting for frame time here)
      enc_2.frameNStart = frameN;  // exact frame index
      
      enc_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_2.setAutoDraw(false);
    }
    
    // *cross_4* updates
    if (t >= 2.0 && cross_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_4.tStart = t;  // (not accounting for frame time here)
      cross_4.frameNStart = frameN;  // exact frame index
      
      cross_4.setAutoDraw(true);
    }

    frameRemains = 2.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cross_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cross_4.setAutoDraw(false);
    }
    
    // *left_2* updates
    if (t >= 7.0 && left_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_2.tStart = t;  // (not accounting for frame time here)
      left_2.frameNStart = frameN;  // exact frame index
      
      left_2.setAutoDraw(true);
    }

    frameRemains = 7.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left_2.setAutoDraw(false);
    }
    
    // *right_2* updates
    if (t >= 7.0 && right_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_2.tStart = t;  // (not accounting for frame time here)
      right_2.frameNStart = frameN;  // exact frame index
      
      right_2.setAutoDraw(true);
    }

    frameRemains = 7.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right_2.setAutoDraw(false);
    }
    
    // *isi_4* updates
    if (t >= 7.6 && isi_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isi_4.tStart = t;  // (not accounting for frame time here)
      isi_4.frameNStart = frameN;  // exact frame index
      
      isi_4.setAutoDraw(true);
    }

    frameRemains = 7.6 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (isi_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      isi_4.setAutoDraw(false);
    }
    
    // *pre_reward_response_2* updates
    if (t >= 7.0 && pre_reward_response_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pre_reward_response_2.tStart = t;  // (not accounting for frame time here)
      pre_reward_response_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { pre_reward_response_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { pre_reward_response_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { pre_reward_response_2.clearEvents(); });
    }

    frameRemains = 7.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pre_reward_response_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pre_reward_response_2.status = PsychoJS.Status.FINISHED;
  }

    if (pre_reward_response_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = pre_reward_response_2.getKeys({keyList: ['1', '2'], waitRelease: false});
      _pre_reward_response_2_allKeys = _pre_reward_response_2_allKeys.concat(theseKeys);
      if (_pre_reward_response_2_allKeys.length > 0) {
        pre_reward_response_2.keys = _pre_reward_response_2_allKeys[_pre_reward_response_2_allKeys.length - 1].name;  // just the last key pressed
        pre_reward_response_2.rt = _pre_reward_response_2_allKeys[_pre_reward_response_2_allKeys.length - 1].rt;
        // was this correct?
        if (pre_reward_response_2.keys == corr_resp) {
            pre_reward_response_2.corr = 1;
        } else {
            pre_reward_response_2.corr = 0;
        }
      }
    }
    
    
    // *skip_2* updates
    if (t >= 0.0 && skip_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      skip_2.tStart = t;  // (not accounting for frame time here)
      skip_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { skip_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { skip_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { skip_2.clearEvents(); });
    }

    frameRemains = 0.0 + 9.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (skip_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      skip_2.status = PsychoJS.Status.FINISHED;
  }

    if (skip_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = skip_2.getKeys({keyList: ['space'], waitRelease: false});
      _skip_2_allKeys = _skip_2_allKeys.concat(theseKeys);
      if (_skip_2_allKeys.length > 0) {
        skip_2.keys = _skip_2_allKeys[_skip_2_allKeys.length - 1].name;  // just the last key pressed
        skip_2.rt = _skip_2_allKeys[_skip_2_allKeys.length - 1].rt;
        // was this correct?
        if (skip_2.keys == 'space') {
            skip_2.corr = 1;
        } else {
            skip_2.corr = 0;
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
    Pre_Reward_PracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Pre_Reward_PracticeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Pre_Reward_Practice'-------
    Pre_Reward_PracticeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (pre_reward_response_2.keys === undefined) {
      if (['None','none',undefined].includes(corr_resp)) {
         pre_reward_response_2.corr = 1;  // correct non-response
      } else {
         pre_reward_response_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('pre_reward_response_2.keys', pre_reward_response_2.keys);
    psychoJS.experiment.addData('pre_reward_response_2.corr', pre_reward_response_2.corr);
    if (typeof pre_reward_response_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('pre_reward_response_2.rt', pre_reward_response_2.rt);
        }
    
    pre_reward_response_2.stop();
    if (pre_reward_response_2.corr) {
        num_correct += 1;
        console.log("correct");
    } else {
        if (skip_2.corr) {
            num_correct += 1;
        } else {
            practice_failed = true;
            practice.finished = true;
        }
    }
    
    // was no response the correct answer?!
    if (skip_2.keys === undefined) {
      if (['None','none',undefined].includes('space')) {
         skip_2.corr = 1;  // correct non-response
      } else {
         skip_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('skip_2.keys', skip_2.keys);
    psychoJS.experiment.addData('skip_2.corr', skip_2.corr);
    if (typeof skip_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('skip_2.rt', skip_2.rt);
        routineTimer.reset();
        }
    
    skip_2.stop();
    return Scheduler.Event.NEXT;
  };
}


var practice_failed;
var _key_resp_allKeys;
var check_practiceComponents;
function check_practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'check_practice'-------
    t = 0;
    check_practiceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if ((! practice_failed)) {
        repeat_practice.finished = true;
        console.log("finished");
        practice_failed = false;
        num_correct = 0;
    } else {
        text_6.text = "You must answer correctly on all practice trials to proceed. Restarting practice trials now. Press space bar to continue.";
        practice_failed = false;
        num_correct = 0;
    }
    
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    check_practiceComponents = [];
    check_practiceComponents.push(text_6);
    check_practiceComponents.push(key_resp);
    
    check_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
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
    check_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    check_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
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
    
    continue_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
    continue_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    continue_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    Pre_RewardComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


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

    frameRemains = 0.0 + 9.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (skip.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      skip.status = PsychoJS.Status.FINISHED;
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
    Pre_RewardComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    Pre_RewardComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
        prereward_total_corr += 1;
        console.log("correct");
    }
    console.log(pre_reward_response.keys);
    if (skip.corr) {
        num_correct += 1;
    }
    
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
    
    reward_insComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
    reward_insComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    reward_insComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    practice_instructions_rewardComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
    practice_instructions_rewardComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    practice_instructions_rewardComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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


var _reward_response_2_allKeys;
var correct;
var _skip2_2_allKeys;
var Reward_PracticeComponents;
function Reward_PracticeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Reward_Practice'-------
    t = 0;
    Reward_PracticeClock.reset(); // clock
    frameN = -1;
    routineTimer.add(10.100000);
    // update component parameters for each repeat
    enc2_2.setImage(stim_name_enc);
    left2_2.setImage(stim_name_left);
    right2_2.setImage(stim_name_right);
    reward_response_2.keys = undefined;
    reward_response_2.rt = undefined;
    _reward_response_2_allKeys = [];
    reward_star_2.setImage(corr_image);
    reward_text_2.text = "Miss!";
    reward_star_2.opacity = 0.0;
    correct = false;
    console.log("setting text to miss");
    
    skip2_2.keys = undefined;
    skip2_2.rt = undefined;
    _skip2_2_allKeys = [];
    // keep track of which components have finished
    Reward_PracticeComponents = [];
    Reward_PracticeComponents.push(enc2_2);
    Reward_PracticeComponents.push(cross_3);
    Reward_PracticeComponents.push(left2_2);
    Reward_PracticeComponents.push(right2_2);
    Reward_PracticeComponents.push(isi_3);
    Reward_PracticeComponents.push(reward_response_2);
    Reward_PracticeComponents.push(reward_star_2);
    Reward_PracticeComponents.push(reward_text_2);
    Reward_PracticeComponents.push(skip2_2);
    
    Reward_PracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function Reward_PracticeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Reward_Practice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Reward_PracticeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *enc2_2* updates
    if (t >= 0.0 && enc2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc2_2.tStart = t;  // (not accounting for frame time here)
      enc2_2.frameNStart = frameN;  // exact frame index
      
      enc2_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc2_2.setAutoDraw(false);
    }
    
    // *cross_3* updates
    if (t >= 2.0 && cross_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_3.tStart = t;  // (not accounting for frame time here)
      cross_3.frameNStart = frameN;  // exact frame index
      
      cross_3.setAutoDraw(true);
    }

    frameRemains = 2.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cross_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cross_3.setAutoDraw(false);
    }
    
    // *left2_2* updates
    if (t >= 7.0 && left2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left2_2.tStart = t;  // (not accounting for frame time here)
      left2_2.frameNStart = frameN;  // exact frame index
      
      left2_2.setAutoDraw(true);
    }

    frameRemains = 7.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left2_2.setAutoDraw(false);
    }
    
    // *right2_2* updates
    if (t >= 7.0 && right2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right2_2.tStart = t;  // (not accounting for frame time here)
      right2_2.frameNStart = frameN;  // exact frame index
      
      right2_2.setAutoDraw(true);
    }

    frameRemains = 7.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right2_2.setAutoDraw(false);
    }
    
    // *isi_3* updates
    if (t >= 8.6 && isi_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isi_3.tStart = t;  // (not accounting for frame time here)
      isi_3.frameNStart = frameN;  // exact frame index
      
      isi_3.setAutoDraw(true);
    }

    frameRemains = 8.6 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (isi_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      isi_3.setAutoDraw(false);
    }
    
    // *reward_response_2* updates
    if (t >= 7.0 && reward_response_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reward_response_2.tStart = t;  // (not accounting for frame time here)
      reward_response_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { reward_response_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { reward_response_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { reward_response_2.clearEvents(); });
    }

    frameRemains = 7.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (reward_response_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      reward_response_2.status = PsychoJS.Status.FINISHED;
  }

    if (reward_response_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = reward_response_2.getKeys({keyList: ['1', '2'], waitRelease: false});
      _reward_response_2_allKeys = _reward_response_2_allKeys.concat(theseKeys);
      if (_reward_response_2_allKeys.length > 0) {
        reward_response_2.keys = _reward_response_2_allKeys[_reward_response_2_allKeys.length - 1].name;  // just the last key pressed
        reward_response_2.rt = _reward_response_2_allKeys[_reward_response_2_allKeys.length - 1].rt;
        // was this correct?
        if (reward_response_2.keys == corr_resp) {
            reward_response_2.corr = 1;
        } else {
            reward_response_2.corr = 0;
        }
      }
    }
    
    
    // *reward_star_2* updates
    if (t >= 7.6 && reward_star_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reward_star_2.tStart = t;  // (not accounting for frame time here)
      reward_star_2.frameNStart = frameN;  // exact frame index
      
      reward_star_2.setAutoDraw(true);
    }

    frameRemains = 7.6 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (reward_star_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      reward_star_2.setAutoDraw(false);
    }
    
    // *reward_text_2* updates
    if (t >= 7.6 && reward_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reward_text_2.tStart = t;  // (not accounting for frame time here)
      reward_text_2.frameNStart = frameN;  // exact frame index
      
      reward_text_2.setAutoDraw(true);
    }

    frameRemains = 7.6 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (reward_text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      reward_text_2.setAutoDraw(false);
    }
    console.log("frame");
    if ((reward_response_2.keys && (! correct))) {
        console.log("keypress and no repeat");
        if ((Number.parseInt(reward_response_2.keys) === Number.parseInt(corr_resp))) {
            correct = true;
            reward_text_2.text = "Hit! You Won!";
            reward_star_2.opacity = 1.0;
            num_correct += 1;
            console.log(("correct: " + num_correct.toString()));
        }
    }
    
    
    // *skip2_2* updates
    if (t >= 0.0 && skip2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      skip2_2.tStart = t;  // (not accounting for frame time here)
      skip2_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { skip2_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { skip2_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { skip2_2.clearEvents(); });
    }

    frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (skip2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      skip2_2.status = PsychoJS.Status.FINISHED;
  }

    if (skip2_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = skip2_2.getKeys({keyList: ['space'], waitRelease: false});
      _skip2_2_allKeys = _skip2_2_allKeys.concat(theseKeys);
      if (_skip2_2_allKeys.length > 0) {
        skip2_2.keys = _skip2_2_allKeys[_skip2_2_allKeys.length - 1].name;  // just the last key pressed
        skip2_2.rt = _skip2_2_allKeys[_skip2_2_allKeys.length - 1].rt;
        // was this correct?
        if (skip2_2.keys == 'space') {
            skip2_2.corr = 1;
        } else {
            skip2_2.corr = 0;
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
    Reward_PracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Reward_PracticeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Reward_Practice'-------
    Reward_PracticeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (reward_response_2.keys === undefined) {
      if (['None','none',undefined].includes(corr_resp)) {
         reward_response_2.corr = 1;  // correct non-response
      } else {
         reward_response_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('reward_response_2.keys', reward_response_2.keys);
    psychoJS.experiment.addData('reward_response_2.corr', reward_response_2.corr);
    if (typeof reward_response_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('reward_response_2.rt', reward_response_2.rt);
        }
    
    reward_response_2.stop();
    if (skip2_2.corr) {
        num_correct += 1;
    } else {
        if (reward_response_2.corr) {
            console.log("null");
        } else {
            practice_failed = true;
            reward_practice.finished = true;
        }
    }
    
    // was no response the correct answer?!
    if (skip2_2.keys === undefined) {
      if (['None','none',undefined].includes('space')) {
         skip2_2.corr = 1;  // correct non-response
      } else {
         skip2_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('skip2_2.keys', skip2_2.keys);
    psychoJS.experiment.addData('skip2_2.corr', skip2_2.corr);
    if (typeof skip2_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('skip2_2.rt', skip2_2.rt);
        routineTimer.reset();
        }
    
    skip2_2.stop();
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var check_reward_practiceComponents;
function check_reward_practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'check_reward_practice'-------
    t = 0;
    check_reward_practiceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if ((! practice_failed)) {
        repeat_reward_practice.finished = true;
        console.log("finished");
        practice_failed = false;
        num_correct = 0;
    } else {
        text_7.text = "You must answer correctly on all practice trials to proceed. Restarting practice trials now. As a reminder, your task is to indicate which of the two images is the target image, using the 1 and 2 keys. Press space bar to continue.";
        num_correct = 0;
        practice_failed = false;
    }
    
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    check_reward_practiceComponents = [];
    check_reward_practiceComponents.push(text_7);
    check_reward_practiceComponents.push(key_resp_2);
    
    check_reward_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
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
    check_reward_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    check_reward_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
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
    
    continue_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
    continue_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    continue_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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


var _reward_response_allKeys;
var _skip2_allKeys;
var RewardComponents;
function RewardRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Reward'-------
    t = 0;
    RewardClock.reset(); // clock
    frameN = -1;
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
    
    skip2.keys = undefined;
    skip2.rt = undefined;
    _skip2_allKeys = [];
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
    RewardComponents.push(skip2);
    
    RewardComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
            reward_total_corr += 1;
            console.log(("correct: " + num_correct.toString()));
        }
    }
    
    
    // *skip2* updates
    if (t >= 0.0 && skip2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      skip2.tStart = t;  // (not accounting for frame time here)
      skip2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { skip2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { skip2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { skip2.clearEvents(); });
    }

    frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (skip2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      skip2.status = PsychoJS.Status.FINISHED;
  }

    if (skip2.status === PsychoJS.Status.STARTED) {
      let theseKeys = skip2.getKeys({keyList: ['space'], waitRelease: false});
      _skip2_allKeys = _skip2_allKeys.concat(theseKeys);
      if (_skip2_allKeys.length > 0) {
        skip2.keys = _skip2_allKeys[_skip2_allKeys.length - 1].name;  // just the last key pressed
        skip2.rt = _skip2_allKeys[_skip2_allKeys.length - 1].rt;
        // was this correct?
        if (skip2.keys == 'space') {
            skip2.corr = 1;
        } else {
            skip2.corr = 0;
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
    RewardComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RewardRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Reward'-------
    RewardComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    if (skip2.corr) {
        num_correct += 1;
    }
    
    // was no response the correct answer?!
    if (skip2.keys === undefined) {
      if (['None','none',undefined].includes('space')) {
         skip2.corr = 1;  // correct non-response
      } else {
         skip2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('skip2.keys', skip2.keys);
    psychoJS.experiment.addData('skip2.corr', skip2.corr);
    if (typeof skip2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('skip2.rt', skip2.rt);
        routineTimer.reset();
        }
    
    skip2.stop();
    // the Routine "Reward" was not non-slip safe, so reset the non-slip timer
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
    
    finalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
    finalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    finalComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
