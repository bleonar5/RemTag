#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.2.8),
    on November 22, 2020, at 11:07
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.2.8'
expName = 'RemTag'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001', 'group': '1'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='RemTag_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1920, 1080], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[-0.357,-0.357,-0.357], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "instructions"
instructionsClock = core.Clock()
instructions_page = visual.TextStim(win=win, name='instructions_page',
    text='In this experiment, you will perform several tasks and complete several questionnaires.\n\nYou will be paid X for participation, and you will have the opportunity to earn up to X based on your performance.\n\nThis is a two-day experiment. The second part of the experiment will take place 24 hours from now. If you do not return in 24 hours, you will not receive any payment.\n\nPress the space bar to continue.',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instructions_continue = keyboard.Keyboard()

# Initialize components for Routine "pre_re_ins"
pre_re_insClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='On each trial, you will see an image. After a 5-second delay, you will  then be shown two images, one of which will match the image you saw previously (TARGET), and one of which is new. \n\nYour task is to indicate within 600ms which image is the target image. \n\nUse the “1” key to indicate that the target is on the left, and use the “2” key to indicate that the target is on the right.\n\nPlease try to respond as quickly and as accurately as possible. \n\nPress the space bar to continue.\n',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instructions_continue_2 = keyboard.Keyboard()

# Initialize components for Routine "practice_instructions_pre_reward"
practice_instructions_pre_rewardClock = core.Clock()
text_3 = visual.TextStim(win=win, name='text_3',
    text='You will now be presented with 4 practice trials. If you do not complete these trials accurately, you will have to begin the practice round again.\n\nPress the space bar to continue.',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instruction_continue_5 = keyboard.Keyboard()

# Initialize components for Routine "script"
scriptClock = core.Clock()

# Initialize components for Routine "Pre_Reward_Practice"
Pre_Reward_PracticeClock = core.Clock()
enc_2 = visual.ImageStim(
    win=win,
    name='enc_2', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
cross_4 = visual.ShapeStim(
    win=win, name='cross_4', vertices='cross',
    size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=0.5, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
left_2 = visual.ImageStim(
    win=win,
    name='left_2', 
    image='sin', mask=None,
    ori=0, pos=(-0.35, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
right_2 = visual.ImageStim(
    win=win,
    name='right_2', 
    image='sin', mask=None,
    ori=0, pos=(0.35, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
isi_4 = visual.ShapeStim(
    win=win, name='isi_4', vertices='cross',
    size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=0.5, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-4.0, interpolate=True)
pre_reward_response_2 = keyboard.Keyboard()
practice_count = 0
practice_failed = False
skip_2 = keyboard.Keyboard()
text_8 = visual.TextStim(win=win, name='text_8',
    text='(1)',
    font='Arial',
    pos=(-0.35, -0.3), height=0.025, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-8.0);
text_9 = visual.TextStim(win=win, name='text_9',
    text='(2)',
    font='Arial',
    pos=(0.35, -0.3), height=0.025, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);
text_10 = visual.TextStim(win=win, name='text_10',
    text='default text',
    font='Arial',
    pos=(-.75,.45), height=0.025, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-10.0);

# Initialize components for Routine "check_practice"
check_practiceClock = core.Clock()
text_6 = visual.TextStim(win=win, name='text_6',
    text='You have completed the practice trials. As a reminder, your task is to indicate which of the two images is the target image, using the 1 and 2 keys.\n\nYou will now begin the first phase of the experiment.\n\nPress space bar to continue.',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
key_resp = keyboard.Keyboard()

# Initialize components for Routine "continue_2"
continue_2Clock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='You will now begin the first phase of the experiment.\n\nPress space bar to continue.',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instructions_continue_3 = keyboard.Keyboard()

# Initialize components for Routine "script"
scriptClock = core.Clock()

# Initialize components for Routine "Pre_Reward"
Pre_RewardClock = core.Clock()
enc = visual.ImageStim(
    win=win,
    name='enc', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
cross = visual.ShapeStim(
    win=win, name='cross', vertices='cross',
    size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=0.5, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
left = visual.ImageStim(
    win=win,
    name='left', 
    image='sin', mask=None,
    ori=0, pos=(-0.35, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
right = visual.ImageStim(
    win=win,
    name='right', 
    image='sin', mask=None,
    ori=0, pos=(0.35, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
isi = visual.ShapeStim(
    win=win, name='isi', vertices='cross',
    size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=0.5, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-4.0, interpolate=True)
pre_reward_response = keyboard.Keyboard()
skip = keyboard.Keyboard()
text_13 = visual.TextStim(win=win, name='text_13',
    text='(1)',
    font='Arial',
    pos=(-0.35, -0.3), height=0.025, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-8.0);
text_14 = visual.TextStim(win=win, name='text_14',
    text='(2)',
    font='Arial',
    pos=(-0.35, 0.3), height=0.025, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);

# Initialize components for Routine "reward_ins"
reward_insClock = core.Clock()
instructions_page_2 = visual.TextStim(win=win, name='instructions_page_2',
    text='In the next phase of the experiment, you will complete the same task that you did previously. This time, you will have the opportunity to earn a bonus by correct performance. \n\nOn each trial, you will receive feedback after indicating which item is the target in the form of GREEN and WHITE stars. \n\nPerformance of 90% or more on the GREEN star trials will result in a bonus of X.\n\nPerformance of 90% or more on the WHITE star trials will result in a bonus of X. You will receive information about the total bonus you earned tomorrow, at the end of the experiment.\n\nAs in the last phase, use the “1” key to indicate that the target is on the left, and use the “2” key to indicate that the target is on the right. Press the space bar to continue.\n',
    font='Arial',
    pos=(0, 0), height=0.035, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instructions_continue_4 = keyboard.Keyboard()
# Set experiment start values for variable component pre_reward_accuracy
pre_reward_accuracy = ''
pre_reward_accuracyContainer = []

# Initialize components for Routine "practice_instructions_reward"
practice_instructions_rewardClock = core.Clock()
text_5 = visual.TextStim(win=win, name='text_5',
    text='You will now be presented with 4 practice trials. If you do not complete these trials accurately, you will have to begin the practice round again.\n\nPress the space bar to continue.',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instruction_continue_6 = keyboard.Keyboard()
# Set experiment start values for variable component correct
correct = ''
correctContainer = []

# Initialize components for Routine "script"
scriptClock = core.Clock()

# Initialize components for Routine "Reward_Practice"
Reward_PracticeClock = core.Clock()
enc2_2 = visual.ImageStim(
    win=win,
    name='enc2_2', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
cross_3 = visual.ShapeStim(
    win=win, name='cross_3', vertices='cross',
    size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=0.5, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
left2_2 = visual.ImageStim(
    win=win,
    name='left2_2', 
    image='sin', mask=None,
    ori=0, pos=(-0.35, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
right2_2 = visual.ImageStim(
    win=win,
    name='right2_2', 
    image='sin', mask=None,
    ori=0, pos=(0.35, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
isi_3 = visual.ShapeStim(
    win=win, name='isi_3', vertices='cross',
    size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=0.5, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-4.0, interpolate=True)
reward_response_2 = keyboard.Keyboard()
reward_star_2 = visual.ImageStim(
    win=win,
    name='reward_star_2', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=False, depth=-6.0)
reward_text_2 = visual.TextStim(win=win, name='reward_text_2',
    text='Miss!',
    font='Arial',
    pos=(0, 0.15), height=0.075, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
skip2_2 = keyboard.Keyboard()
text_11 = visual.TextStim(win=win, name='text_11',
    text='default text',
    font='Arial',
    pos=(-.75,.45), height=0.025, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-10.0);
text_15 = visual.TextStim(win=win, name='text_15',
    text='(1)',
    font='Arial',
    pos=(-0.35, -0.3), height=0.025, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-11.0);
text_16 = visual.TextStim(win=win, name='text_16',
    text='(2)',
    font='Arial',
    pos=(-0.35, 0.3), height=0.025, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-12.0);

# Initialize components for Routine "check_reward_practice"
check_reward_practiceClock = core.Clock()
text_7 = visual.TextStim(win=win, name='text_7',
    text='You have completed the practice trials. As a reminder, your task is to indicate which of the two images is the target image, using the 1 and 2 keys.\n\nYou will now begin the first phase of the experiment.\n\nPress space bar to continue.',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "continue_3"
continue_3Clock = core.Clock()
text_4 = visual.TextStim(win=win, name='text_4',
    text='You will now begin the second phase of the experiment.\n\nPress space bar to continue.',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instruction_continue_7 = keyboard.Keyboard()

# Initialize components for Routine "script"
scriptClock = core.Clock()

# Initialize components for Routine "Reward"
RewardClock = core.Clock()
enc2 = visual.ImageStim(
    win=win,
    name='enc2', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
cross_2 = visual.ShapeStim(
    win=win, name='cross_2', vertices='cross',
    size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=0.5, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
left2 = visual.ImageStim(
    win=win,
    name='left2', 
    image='sin', mask=None,
    ori=0, pos=(-0.35, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
right2 = visual.ImageStim(
    win=win,
    name='right2', 
    image='sin', mask=None,
    ori=0, pos=(0.35, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
isi_2 = visual.ShapeStim(
    win=win, name='isi_2', vertices='cross',
    size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=0.5, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-4.0, interpolate=True)
reward_response = keyboard.Keyboard()
reward_star = visual.ImageStim(
    win=win,
    name='reward_star', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=False, depth=-6.0)
reward_text = visual.TextStim(win=win, name='reward_text',
    text='Miss!',
    font='Arial',
    pos=(0, 0.15), height=0.075, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
skip2 = keyboard.Keyboard()
text_17 = visual.TextStim(win=win, name='text_17',
    text='(1)',
    font='Arial',
    pos=(-0.35, -0.3), height=0.025, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-10.0);
text_18 = visual.TextStim(win=win, name='text_18',
    text='(2)',
    font='Arial',
    pos=(-0.35, 0.3), height=0.025, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-11.0);

# Initialize components for Routine "final"
finalClock = core.Clock()
# Set experiment start values for variable component reward_accuracy
reward_accuracy = ''
reward_accuracyContainer = []
bonus = 0
text_12 = visual.TextStim(win=win, name='text_12',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.035, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
key_resp_3 = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "instructions"-------
continueRoutine = True
# update component parameters for each repeat
instructions_continue.keys = []
instructions_continue.rt = []
_instructions_continue_allKeys = []
# keep track of which components have finished
instructionsComponents = [instructions_page, instructions_continue]
for thisComponent in instructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions"-------
while continueRoutine:
    # get current time
    t = instructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instructions_page* updates
    if instructions_page.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructions_page.frameNStart = frameN  # exact frame index
        instructions_page.tStart = t  # local t and not account for scr refresh
        instructions_page.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructions_page, 'tStartRefresh')  # time at next scr refresh
        instructions_page.setAutoDraw(True)
    
    # *instructions_continue* updates
    waitOnFlip = False
    if instructions_continue.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructions_continue.frameNStart = frameN  # exact frame index
        instructions_continue.tStart = t  # local t and not account for scr refresh
        instructions_continue.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructions_continue, 'tStartRefresh')  # time at next scr refresh
        instructions_continue.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instructions_continue.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instructions_continue.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instructions_continue.status == STARTED and not waitOnFlip:
        theseKeys = instructions_continue.getKeys(keyList=['space'], waitRelease=False)
        _instructions_continue_allKeys.extend(theseKeys)
        if len(_instructions_continue_allKeys):
            instructions_continue.keys = _instructions_continue_allKeys[-1].name  # just the last key pressed
            instructions_continue.rt = _instructions_continue_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions"-------
for thisComponent in instructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('instructions_page.started', instructions_page.tStartRefresh)
thisExp.addData('instructions_page.stopped', instructions_page.tStopRefresh)
# check responses
if instructions_continue.keys in ['', [], None]:  # No response was made
    instructions_continue.keys = None
thisExp.addData('instructions_continue.keys',instructions_continue.keys)
if instructions_continue.keys != None:  # we had a response
    thisExp.addData('instructions_continue.rt', instructions_continue.rt)
thisExp.addData('instructions_continue.started', instructions_continue.tStartRefresh)
thisExp.addData('instructions_continue.stopped', instructions_continue.tStopRefresh)
thisExp.nextEntry()
num_correct = 0
prereward_total_corr = 0
reward_total_corr = 0
conditioned_total_corr = 0
unconditioned_total_corr = 0
bonus = 0

prereward_cond = 'phase1_order'+str(expInfo['group'])+'.csv'
reward_cond = 'phase2_order' +str(expInfo['group'])+'.csv'

# the Routine "instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "pre_re_ins"-------
continueRoutine = True
# update component parameters for each repeat
instructions_continue_2.keys = []
instructions_continue_2.rt = []
_instructions_continue_2_allKeys = []
# keep track of which components have finished
pre_re_insComponents = [text_2, instructions_continue_2]
for thisComponent in pre_re_insComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
pre_re_insClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "pre_re_ins"-------
while continueRoutine:
    # get current time
    t = pre_re_insClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=pre_re_insClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_2* updates
    if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        text_2.setAutoDraw(True)
    
    # *instructions_continue_2* updates
    waitOnFlip = False
    if instructions_continue_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructions_continue_2.frameNStart = frameN  # exact frame index
        instructions_continue_2.tStart = t  # local t and not account for scr refresh
        instructions_continue_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructions_continue_2, 'tStartRefresh')  # time at next scr refresh
        instructions_continue_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instructions_continue_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instructions_continue_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instructions_continue_2.status == STARTED and not waitOnFlip:
        theseKeys = instructions_continue_2.getKeys(keyList=['space'], waitRelease=False)
        _instructions_continue_2_allKeys.extend(theseKeys)
        if len(_instructions_continue_2_allKeys):
            instructions_continue_2.keys = _instructions_continue_2_allKeys[-1].name  # just the last key pressed
            instructions_continue_2.rt = _instructions_continue_2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in pre_re_insComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "pre_re_ins"-------
for thisComponent in pre_re_insComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_2.started', text_2.tStartRefresh)
thisExp.addData('text_2.stopped', text_2.tStopRefresh)
# check responses
if instructions_continue_2.keys in ['', [], None]:  # No response was made
    instructions_continue_2.keys = None
thisExp.addData('instructions_continue_2.keys',instructions_continue_2.keys)
if instructions_continue_2.keys != None:  # we had a response
    thisExp.addData('instructions_continue_2.rt', instructions_continue_2.rt)
thisExp.addData('instructions_continue_2.started', instructions_continue_2.tStartRefresh)
thisExp.addData('instructions_continue_2.stopped', instructions_continue_2.tStopRefresh)
thisExp.nextEntry()
# the Routine "pre_re_ins" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "practice_instructions_pre_reward"-------
continueRoutine = True
# update component parameters for each repeat
instruction_continue_5.keys = []
instruction_continue_5.rt = []
_instruction_continue_5_allKeys = []
# keep track of which components have finished
practice_instructions_pre_rewardComponents = [text_3, instruction_continue_5]
for thisComponent in practice_instructions_pre_rewardComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
practice_instructions_pre_rewardClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "practice_instructions_pre_reward"-------
while continueRoutine:
    # get current time
    t = practice_instructions_pre_rewardClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=practice_instructions_pre_rewardClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_3* updates
    if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_3.frameNStart = frameN  # exact frame index
        text_3.tStart = t  # local t and not account for scr refresh
        text_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
        text_3.setAutoDraw(True)
    
    # *instruction_continue_5* updates
    waitOnFlip = False
    if instruction_continue_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_continue_5.frameNStart = frameN  # exact frame index
        instruction_continue_5.tStart = t  # local t and not account for scr refresh
        instruction_continue_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_continue_5, 'tStartRefresh')  # time at next scr refresh
        instruction_continue_5.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instruction_continue_5.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instruction_continue_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instruction_continue_5.status == STARTED and not waitOnFlip:
        theseKeys = instruction_continue_5.getKeys(keyList=['space'], waitRelease=False)
        _instruction_continue_5_allKeys.extend(theseKeys)
        if len(_instruction_continue_5_allKeys):
            instruction_continue_5.keys = _instruction_continue_5_allKeys[-1].name  # just the last key pressed
            instruction_continue_5.rt = _instruction_continue_5_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in practice_instructions_pre_rewardComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "practice_instructions_pre_reward"-------
for thisComponent in practice_instructions_pre_rewardComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_3.started', text_3.tStartRefresh)
thisExp.addData('text_3.stopped', text_3.tStopRefresh)
# check responses
if instruction_continue_5.keys in ['', [], None]:  # No response was made
    instruction_continue_5.keys = None
thisExp.addData('instruction_continue_5.keys',instruction_continue_5.keys)
if instruction_continue_5.keys != None:  # we had a response
    thisExp.addData('instruction_continue_5.rt', instruction_continue_5.rt)
thisExp.addData('instruction_continue_5.started', instruction_continue_5.tStartRefresh)
thisExp.addData('instruction_continue_5.stopped', instruction_continue_5.tStopRefresh)
thisExp.nextEntry()
# the Routine "practice_instructions_pre_reward" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
repeat_practice = data.TrialHandler(nReps=30, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='repeat_practice')
thisExp.addLoop(repeat_practice)  # add the loop to the experiment
thisRepeat_practice = repeat_practice.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisRepeat_practice.rgb)
if thisRepeat_practice != None:
    for paramName in thisRepeat_practice:
        exec('{} = thisRepeat_practice[paramName]'.format(paramName))

for thisRepeat_practice in repeat_practice:
    currentLoop = repeat_practice
    # abbreviate parameter names if possible (e.g. rgb = thisRepeat_practice.rgb)
    if thisRepeat_practice != None:
        for paramName in thisRepeat_practice:
            exec('{} = thisRepeat_practice[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    practice = data.TrialHandler(nReps=1, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('phase1_practice.csv'),
        seed=None, name='practice')
    thisExp.addLoop(practice)  # add the loop to the experiment
    thisPractice = practice.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisPractice.rgb)
    if thisPractice != None:
        for paramName in thisPractice:
            exec('{} = thisPractice[paramName]'.format(paramName))
    
    for thisPractice in practice:
        currentLoop = practice
        # abbreviate parameter names if possible (e.g. rgb = thisPractice.rgb)
        if thisPractice != None:
            for paramName in thisPractice:
                exec('{} = thisPractice[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "script"-------
        continueRoutine = True
        # update component parameters for each repeat
        # keep track of which components have finished
        scriptComponents = []
        for thisComponent in scriptComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        scriptClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "script"-------
        while continueRoutine:
            # get current time
            t = scriptClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=scriptClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in scriptComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "script"-------
        for thisComponent in scriptComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        if corr_resp == 1:
            stim_name_enc = stim_name_left
        else:
            stim_name_enc = stim_name_right
            
        print(stim_name_enc)
        
        if conditionedCat == stim_cat_enc:
            star_name = 'stimuli/greenstar.jpg'
        else:
            star_name = 'stimuli/whitestar.jpg'
            
        # the Routine "script" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "Pre_Reward_Practice"-------
        continueRoutine = True
        routineTimer.add(9.100000)
        # update component parameters for each repeat
        enc_2.setImage(stim_name_enc)
        left_2.setImage(stim_name_left)
        right_2.setImage(stim_name_right)
        pre_reward_response_2.keys = []
        pre_reward_response_2.rt = []
        _pre_reward_response_2_allKeys = []
        practice_count = practice.thisN + 1
        skip_2.keys = []
        skip_2.rt = []
        _skip_2_allKeys = []
        text_10.setText("Practice trial #"+str(practice_count)+"/4")
        # keep track of which components have finished
        Pre_Reward_PracticeComponents = [enc_2, cross_4, left_2, right_2, isi_4, pre_reward_response_2, skip_2, text_8, text_9, text_10]
        for thisComponent in Pre_Reward_PracticeComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        Pre_Reward_PracticeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Pre_Reward_Practice"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = Pre_Reward_PracticeClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=Pre_Reward_PracticeClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *enc_2* updates
            if enc_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                enc_2.frameNStart = frameN  # exact frame index
                enc_2.tStart = t  # local t and not account for scr refresh
                enc_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(enc_2, 'tStartRefresh')  # time at next scr refresh
                enc_2.setAutoDraw(True)
            if enc_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > enc_2.tStartRefresh + 2.0-frameTolerance:
                    # keep track of stop time/frame for later
                    enc_2.tStop = t  # not accounting for scr refresh
                    enc_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(enc_2, 'tStopRefresh')  # time at next scr refresh
                    enc_2.setAutoDraw(False)
            
            # *cross_4* updates
            if cross_4.status == NOT_STARTED and tThisFlip >= 2.0-frameTolerance:
                # keep track of start time/frame for later
                cross_4.frameNStart = frameN  # exact frame index
                cross_4.tStart = t  # local t and not account for scr refresh
                cross_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cross_4, 'tStartRefresh')  # time at next scr refresh
                cross_4.setAutoDraw(True)
            if cross_4.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > cross_4.tStartRefresh + 5.0-frameTolerance:
                    # keep track of stop time/frame for later
                    cross_4.tStop = t  # not accounting for scr refresh
                    cross_4.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(cross_4, 'tStopRefresh')  # time at next scr refresh
                    cross_4.setAutoDraw(False)
            
            # *left_2* updates
            if left_2.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
                # keep track of start time/frame for later
                left_2.frameNStart = frameN  # exact frame index
                left_2.tStart = t  # local t and not account for scr refresh
                left_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(left_2, 'tStartRefresh')  # time at next scr refresh
                left_2.setAutoDraw(True)
            if left_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > left_2.tStartRefresh + 0.6-frameTolerance:
                    # keep track of stop time/frame for later
                    left_2.tStop = t  # not accounting for scr refresh
                    left_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(left_2, 'tStopRefresh')  # time at next scr refresh
                    left_2.setAutoDraw(False)
            
            # *right_2* updates
            if right_2.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
                # keep track of start time/frame for later
                right_2.frameNStart = frameN  # exact frame index
                right_2.tStart = t  # local t and not account for scr refresh
                right_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(right_2, 'tStartRefresh')  # time at next scr refresh
                right_2.setAutoDraw(True)
            if right_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > right_2.tStartRefresh + 0.6-frameTolerance:
                    # keep track of stop time/frame for later
                    right_2.tStop = t  # not accounting for scr refresh
                    right_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(right_2, 'tStopRefresh')  # time at next scr refresh
                    right_2.setAutoDraw(False)
            
            # *isi_4* updates
            if isi_4.status == NOT_STARTED and tThisFlip >= 7.6-frameTolerance:
                # keep track of start time/frame for later
                isi_4.frameNStart = frameN  # exact frame index
                isi_4.tStart = t  # local t and not account for scr refresh
                isi_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(isi_4, 'tStartRefresh')  # time at next scr refresh
                isi_4.setAutoDraw(True)
            if isi_4.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > isi_4.tStartRefresh + 1.5-frameTolerance:
                    # keep track of stop time/frame for later
                    isi_4.tStop = t  # not accounting for scr refresh
                    isi_4.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(isi_4, 'tStopRefresh')  # time at next scr refresh
                    isi_4.setAutoDraw(False)
            
            # *pre_reward_response_2* updates
            waitOnFlip = False
            if pre_reward_response_2.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
                # keep track of start time/frame for later
                pre_reward_response_2.frameNStart = frameN  # exact frame index
                pre_reward_response_2.tStart = t  # local t and not account for scr refresh
                pre_reward_response_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(pre_reward_response_2, 'tStartRefresh')  # time at next scr refresh
                pre_reward_response_2.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(pre_reward_response_2.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(pre_reward_response_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if pre_reward_response_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > pre_reward_response_2.tStartRefresh + 0.6-frameTolerance:
                    # keep track of stop time/frame for later
                    pre_reward_response_2.tStop = t  # not accounting for scr refresh
                    pre_reward_response_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(pre_reward_response_2, 'tStopRefresh')  # time at next scr refresh
                    pre_reward_response_2.status = FINISHED
            if pre_reward_response_2.status == STARTED and not waitOnFlip:
                theseKeys = pre_reward_response_2.getKeys(keyList=['1', '2'], waitRelease=False)
                _pre_reward_response_2_allKeys.extend(theseKeys)
                if len(_pre_reward_response_2_allKeys):
                    pre_reward_response_2.keys = _pre_reward_response_2_allKeys[-1].name  # just the last key pressed
                    pre_reward_response_2.rt = _pre_reward_response_2_allKeys[-1].rt
                    # was this correct?
                    if (pre_reward_response_2.keys == str(corr_resp)) or (pre_reward_response_2.keys == corr_resp):
                        pre_reward_response_2.corr = 1
                    else:
                        pre_reward_response_2.corr = 0
            
            # *skip_2* updates
            waitOnFlip = False
            if skip_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                skip_2.frameNStart = frameN  # exact frame index
                skip_2.tStart = t  # local t and not account for scr refresh
                skip_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(skip_2, 'tStartRefresh')  # time at next scr refresh
                skip_2.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(skip_2.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(skip_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if skip_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > skip_2.tStartRefresh + 9.0-frameTolerance:
                    # keep track of stop time/frame for later
                    skip_2.tStop = t  # not accounting for scr refresh
                    skip_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(skip_2, 'tStopRefresh')  # time at next scr refresh
                    skip_2.status = FINISHED
            if skip_2.status == STARTED and not waitOnFlip:
                theseKeys = skip_2.getKeys(keyList=['space'], waitRelease=False)
                _skip_2_allKeys.extend(theseKeys)
                if len(_skip_2_allKeys):
                    skip_2.keys = _skip_2_allKeys[-1].name  # just the last key pressed
                    skip_2.rt = _skip_2_allKeys[-1].rt
                    # was this correct?
                    if (skip_2.keys == str('space')) or (skip_2.keys == 'space'):
                        skip_2.corr = 1
                    else:
                        skip_2.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # *text_8* updates
            if text_8.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
                # keep track of start time/frame for later
                text_8.frameNStart = frameN  # exact frame index
                text_8.tStart = t  # local t and not account for scr refresh
                text_8.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_8, 'tStartRefresh')  # time at next scr refresh
                text_8.setAutoDraw(True)
            if text_8.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_8.tStartRefresh + 0.6-frameTolerance:
                    # keep track of stop time/frame for later
                    text_8.tStop = t  # not accounting for scr refresh
                    text_8.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(text_8, 'tStopRefresh')  # time at next scr refresh
                    text_8.setAutoDraw(False)
            
            # *text_9* updates
            if text_9.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
                # keep track of start time/frame for later
                text_9.frameNStart = frameN  # exact frame index
                text_9.tStart = t  # local t and not account for scr refresh
                text_9.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_9, 'tStartRefresh')  # time at next scr refresh
                text_9.setAutoDraw(True)
            if text_9.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_9.tStartRefresh + 0.6-frameTolerance:
                    # keep track of stop time/frame for later
                    text_9.tStop = t  # not accounting for scr refresh
                    text_9.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(text_9, 'tStopRefresh')  # time at next scr refresh
                    text_9.setAutoDraw(False)
            
            # *text_10* updates
            if text_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_10.frameNStart = frameN  # exact frame index
                text_10.tStart = t  # local t and not account for scr refresh
                text_10.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_10, 'tStartRefresh')  # time at next scr refresh
                text_10.setAutoDraw(True)
            if text_10.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_10.tStartRefresh + 7.6-frameTolerance:
                    # keep track of stop time/frame for later
                    text_10.tStop = t  # not accounting for scr refresh
                    text_10.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(text_10, 'tStopRefresh')  # time at next scr refresh
                    text_10.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in Pre_Reward_PracticeComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Pre_Reward_Practice"-------
        for thisComponent in Pre_Reward_PracticeComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        practice.addData('enc_2.started', enc_2.tStartRefresh)
        practice.addData('enc_2.stopped', enc_2.tStopRefresh)
        practice.addData('cross_4.started', cross_4.tStartRefresh)
        practice.addData('cross_4.stopped', cross_4.tStopRefresh)
        practice.addData('left_2.started', left_2.tStartRefresh)
        practice.addData('left_2.stopped', left_2.tStopRefresh)
        practice.addData('right_2.started', right_2.tStartRefresh)
        practice.addData('right_2.stopped', right_2.tStopRefresh)
        practice.addData('isi_4.started', isi_4.tStartRefresh)
        practice.addData('isi_4.stopped', isi_4.tStopRefresh)
        # check responses
        if pre_reward_response_2.keys in ['', [], None]:  # No response was made
            pre_reward_response_2.keys = None
            # was no response the correct answer?!
            if str(corr_resp).lower() == 'none':
               pre_reward_response_2.corr = 1;  # correct non-response
            else:
               pre_reward_response_2.corr = 0;  # failed to respond (incorrectly)
        # store data for practice (TrialHandler)
        practice.addData('pre_reward_response_2.keys',pre_reward_response_2.keys)
        practice.addData('pre_reward_response_2.corr', pre_reward_response_2.corr)
        if pre_reward_response_2.keys != None:  # we had a response
            practice.addData('pre_reward_response_2.rt', pre_reward_response_2.rt)
        practice.addData('pre_reward_response_2.started', pre_reward_response_2.tStartRefresh)
        practice.addData('pre_reward_response_2.stopped', pre_reward_response_2.tStopRefresh)
        if pre_reward_response_2.corr:
            num_correct += 1
            print('correct')
        elif skip_2.corr:
            num_correct += 1
        else:
            practice_failed = True
            practice.finished = True
        # check responses
        if skip_2.keys in ['', [], None]:  # No response was made
            skip_2.keys = None
            # was no response the correct answer?!
            if str('space').lower() == 'none':
               skip_2.corr = 1;  # correct non-response
            else:
               skip_2.corr = 0;  # failed to respond (incorrectly)
        # store data for practice (TrialHandler)
        practice.addData('skip_2.keys',skip_2.keys)
        practice.addData('skip_2.corr', skip_2.corr)
        if skip_2.keys != None:  # we had a response
            practice.addData('skip_2.rt', skip_2.rt)
        practice.addData('skip_2.started', skip_2.tStartRefresh)
        practice.addData('skip_2.stopped', skip_2.tStopRefresh)
        practice.addData('text_8.started', text_8.tStartRefresh)
        practice.addData('text_8.stopped', text_8.tStopRefresh)
        practice.addData('text_9.started', text_9.tStartRefresh)
        practice.addData('text_9.stopped', text_9.tStopRefresh)
        practice.addData('text_10.started', text_10.tStartRefresh)
        practice.addData('text_10.stopped', text_10.tStopRefresh)
        thisExp.nextEntry()
        
    # completed 1 repeats of 'practice'
    
    # get names of stimulus parameters
    if practice.trialList in ([], [None], None):
        params = []
    else:
        params = practice.trialList[0].keys()
    # save data for this loop
    practice.saveAsText(filename + 'practice.csv', delim=',',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
    
    # ------Prepare to start Routine "check_practice"-------
    continueRoutine = True
    # update component parameters for each repeat
    if not practice_failed:
        repeat_practice.finished = True
        print('finished')
        practice_failed = False
        num_correct = 0
    else:
        text_6.text = 'You must answer correctly on all practice trials to proceed. Restarting practice trials now. Press space bar to continue.'
        practice_failed = False
        num_correct = 0
    key_resp.keys = []
    key_resp.rt = []
    _key_resp_allKeys = []
    # keep track of which components have finished
    check_practiceComponents = [text_6, key_resp]
    for thisComponent in check_practiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    check_practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "check_practice"-------
    while continueRoutine:
        # get current time
        t = check_practiceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=check_practiceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_6* updates
        if text_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_6.frameNStart = frameN  # exact frame index
            text_6.tStart = t  # local t and not account for scr refresh
            text_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_6, 'tStartRefresh')  # time at next scr refresh
            text_6.setAutoDraw(True)
        
        # *key_resp* updates
        waitOnFlip = False
        if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp.frameNStart = frameN  # exact frame index
            key_resp.tStart = t  # local t and not account for scr refresh
            key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
            key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp.status == STARTED and not waitOnFlip:
            theseKeys = key_resp.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_allKeys.extend(theseKeys)
            if len(_key_resp_allKeys):
                key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                key_resp.rt = _key_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in check_practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "check_practice"-------
    for thisComponent in check_practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    repeat_practice.addData('text_6.started', text_6.tStartRefresh)
    repeat_practice.addData('text_6.stopped', text_6.tStopRefresh)
    # check responses
    if key_resp.keys in ['', [], None]:  # No response was made
        key_resp.keys = None
    repeat_practice.addData('key_resp.keys',key_resp.keys)
    if key_resp.keys != None:  # we had a response
        repeat_practice.addData('key_resp.rt', key_resp.rt)
    repeat_practice.addData('key_resp.started', key_resp.tStartRefresh)
    repeat_practice.addData('key_resp.stopped', key_resp.tStopRefresh)
    # the Routine "check_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 30 repeats of 'repeat_practice'

# get names of stimulus parameters
if repeat_practice.trialList in ([], [None], None):
    params = []
else:
    params = repeat_practice.trialList[0].keys()
# save data for this loop
repeat_practice.saveAsText(filename + 'repeat_practice.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "continue_2"-------
continueRoutine = True
# update component parameters for each repeat
instructions_continue_3.keys = []
instructions_continue_3.rt = []
_instructions_continue_3_allKeys = []
# keep track of which components have finished
continue_2Components = [text, instructions_continue_3]
for thisComponent in continue_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
continue_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "continue_2"-------
while continueRoutine:
    # get current time
    t = continue_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=continue_2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    
    # *instructions_continue_3* updates
    waitOnFlip = False
    if instructions_continue_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructions_continue_3.frameNStart = frameN  # exact frame index
        instructions_continue_3.tStart = t  # local t and not account for scr refresh
        instructions_continue_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructions_continue_3, 'tStartRefresh')  # time at next scr refresh
        instructions_continue_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instructions_continue_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instructions_continue_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instructions_continue_3.status == STARTED and not waitOnFlip:
        theseKeys = instructions_continue_3.getKeys(keyList=['space'], waitRelease=False)
        _instructions_continue_3_allKeys.extend(theseKeys)
        if len(_instructions_continue_3_allKeys):
            instructions_continue_3.keys = _instructions_continue_3_allKeys[-1].name  # just the last key pressed
            instructions_continue_3.rt = _instructions_continue_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in continue_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "continue_2"-------
for thisComponent in continue_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)
# check responses
if instructions_continue_3.keys in ['', [], None]:  # No response was made
    instructions_continue_3.keys = None
thisExp.addData('instructions_continue_3.keys',instructions_continue_3.keys)
if instructions_continue_3.keys != None:  # we had a response
    thisExp.addData('instructions_continue_3.rt', instructions_continue_3.rt)
thisExp.addData('instructions_continue_3.started', instructions_continue_3.tStartRefresh)
thisExp.addData('instructions_continue_3.stopped', instructions_continue_3.tStopRefresh)
thisExp.nextEntry()
# the Routine "continue_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
pre_reward_trials = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions(prereward_cond),
    seed=None, name='pre_reward_trials')
thisExp.addLoop(pre_reward_trials)  # add the loop to the experiment
thisPre_reward_trial = pre_reward_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPre_reward_trial.rgb)
if thisPre_reward_trial != None:
    for paramName in thisPre_reward_trial:
        exec('{} = thisPre_reward_trial[paramName]'.format(paramName))

for thisPre_reward_trial in pre_reward_trials:
    currentLoop = pre_reward_trials
    # abbreviate parameter names if possible (e.g. rgb = thisPre_reward_trial.rgb)
    if thisPre_reward_trial != None:
        for paramName in thisPre_reward_trial:
            exec('{} = thisPre_reward_trial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "script"-------
    continueRoutine = True
    # update component parameters for each repeat
    # keep track of which components have finished
    scriptComponents = []
    for thisComponent in scriptComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    scriptClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "script"-------
    while continueRoutine:
        # get current time
        t = scriptClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=scriptClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in scriptComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "script"-------
    for thisComponent in scriptComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    if corr_resp == 1:
        stim_name_enc = stim_name_left
    else:
        stim_name_enc = stim_name_right
        
    print(stim_name_enc)
    
    if conditionedCat == stim_cat_enc:
        star_name = 'stimuli/greenstar.jpg'
    else:
        star_name = 'stimuli/whitestar.jpg'
        
    # the Routine "script" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "Pre_Reward"-------
    continueRoutine = True
    routineTimer.add(9.100000)
    # update component parameters for each repeat
    enc.setImage(stim_name_enc)
    left.setImage(stim_name_left)
    right.setImage(stim_name_right)
    pre_reward_response.keys = []
    pre_reward_response.rt = []
    _pre_reward_response_allKeys = []
    
    
    skip.keys = []
    skip.rt = []
    _skip_allKeys = []
    # keep track of which components have finished
    Pre_RewardComponents = [enc, cross, left, right, isi, pre_reward_response, skip, text_13, text_14]
    for thisComponent in Pre_RewardComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Pre_RewardClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Pre_Reward"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = Pre_RewardClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Pre_RewardClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *enc* updates
        if enc.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            enc.frameNStart = frameN  # exact frame index
            enc.tStart = t  # local t and not account for scr refresh
            enc.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(enc, 'tStartRefresh')  # time at next scr refresh
            enc.setAutoDraw(True)
        if enc.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > enc.tStartRefresh + 2.0-frameTolerance:
                # keep track of stop time/frame for later
                enc.tStop = t  # not accounting for scr refresh
                enc.frameNStop = frameN  # exact frame index
                win.timeOnFlip(enc, 'tStopRefresh')  # time at next scr refresh
                enc.setAutoDraw(False)
        
        # *cross* updates
        if cross.status == NOT_STARTED and tThisFlip >= 2.0-frameTolerance:
            # keep track of start time/frame for later
            cross.frameNStart = frameN  # exact frame index
            cross.tStart = t  # local t and not account for scr refresh
            cross.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cross, 'tStartRefresh')  # time at next scr refresh
            cross.setAutoDraw(True)
        if cross.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > cross.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                cross.tStop = t  # not accounting for scr refresh
                cross.frameNStop = frameN  # exact frame index
                win.timeOnFlip(cross, 'tStopRefresh')  # time at next scr refresh
                cross.setAutoDraw(False)
        
        # *left* updates
        if left.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            left.frameNStart = frameN  # exact frame index
            left.tStart = t  # local t and not account for scr refresh
            left.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(left, 'tStartRefresh')  # time at next scr refresh
            left.setAutoDraw(True)
        if left.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > left.tStartRefresh + 0.6-frameTolerance:
                # keep track of stop time/frame for later
                left.tStop = t  # not accounting for scr refresh
                left.frameNStop = frameN  # exact frame index
                win.timeOnFlip(left, 'tStopRefresh')  # time at next scr refresh
                left.setAutoDraw(False)
        
        # *right* updates
        if right.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            right.frameNStart = frameN  # exact frame index
            right.tStart = t  # local t and not account for scr refresh
            right.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(right, 'tStartRefresh')  # time at next scr refresh
            right.setAutoDraw(True)
        if right.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > right.tStartRefresh + 0.6-frameTolerance:
                # keep track of stop time/frame for later
                right.tStop = t  # not accounting for scr refresh
                right.frameNStop = frameN  # exact frame index
                win.timeOnFlip(right, 'tStopRefresh')  # time at next scr refresh
                right.setAutoDraw(False)
        
        # *isi* updates
        if isi.status == NOT_STARTED and tThisFlip >= 7.6-frameTolerance:
            # keep track of start time/frame for later
            isi.frameNStart = frameN  # exact frame index
            isi.tStart = t  # local t and not account for scr refresh
            isi.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(isi, 'tStartRefresh')  # time at next scr refresh
            isi.setAutoDraw(True)
        if isi.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > isi.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                isi.tStop = t  # not accounting for scr refresh
                isi.frameNStop = frameN  # exact frame index
                win.timeOnFlip(isi, 'tStopRefresh')  # time at next scr refresh
                isi.setAutoDraw(False)
        
        # *pre_reward_response* updates
        waitOnFlip = False
        if pre_reward_response.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            pre_reward_response.frameNStart = frameN  # exact frame index
            pre_reward_response.tStart = t  # local t and not account for scr refresh
            pre_reward_response.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pre_reward_response, 'tStartRefresh')  # time at next scr refresh
            pre_reward_response.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(pre_reward_response.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(pre_reward_response.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if pre_reward_response.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pre_reward_response.tStartRefresh + 0.6-frameTolerance:
                # keep track of stop time/frame for later
                pre_reward_response.tStop = t  # not accounting for scr refresh
                pre_reward_response.frameNStop = frameN  # exact frame index
                win.timeOnFlip(pre_reward_response, 'tStopRefresh')  # time at next scr refresh
                pre_reward_response.status = FINISHED
        if pre_reward_response.status == STARTED and not waitOnFlip:
            theseKeys = pre_reward_response.getKeys(keyList=['1', '2'], waitRelease=False)
            _pre_reward_response_allKeys.extend(theseKeys)
            if len(_pre_reward_response_allKeys):
                pre_reward_response.keys = _pre_reward_response_allKeys[-1].name  # just the last key pressed
                pre_reward_response.rt = _pre_reward_response_allKeys[-1].rt
                # was this correct?
                if (pre_reward_response.keys == str(corr_resp)) or (pre_reward_response.keys == corr_resp):
                    pre_reward_response.corr = 1
                else:
                    pre_reward_response.corr = 0
        
        # *skip* updates
        waitOnFlip = False
        if skip.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            skip.frameNStart = frameN  # exact frame index
            skip.tStart = t  # local t and not account for scr refresh
            skip.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(skip, 'tStartRefresh')  # time at next scr refresh
            skip.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(skip.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(skip.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if skip.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > skip.tStartRefresh + 9.0-frameTolerance:
                # keep track of stop time/frame for later
                skip.tStop = t  # not accounting for scr refresh
                skip.frameNStop = frameN  # exact frame index
                win.timeOnFlip(skip, 'tStopRefresh')  # time at next scr refresh
                skip.status = FINISHED
        if skip.status == STARTED and not waitOnFlip:
            theseKeys = skip.getKeys(keyList=['space'], waitRelease=False)
            _skip_allKeys.extend(theseKeys)
            if len(_skip_allKeys):
                skip.keys = _skip_allKeys[-1].name  # just the last key pressed
                skip.rt = _skip_allKeys[-1].rt
                # was this correct?
                if (skip.keys == str('space')) or (skip.keys == 'space'):
                    skip.corr = 1
                else:
                    skip.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # *text_13* updates
        if text_13.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
            # keep track of start time/frame for later
            text_13.frameNStart = frameN  # exact frame index
            text_13.tStart = t  # local t and not account for scr refresh
            text_13.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_13, 'tStartRefresh')  # time at next scr refresh
            text_13.setAutoDraw(True)
        if text_13.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_13.tStartRefresh + 0.6-frameTolerance:
                # keep track of stop time/frame for later
                text_13.tStop = t  # not accounting for scr refresh
                text_13.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_13, 'tStopRefresh')  # time at next scr refresh
                text_13.setAutoDraw(False)
        
        # *text_14* updates
        if text_14.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
            # keep track of start time/frame for later
            text_14.frameNStart = frameN  # exact frame index
            text_14.tStart = t  # local t and not account for scr refresh
            text_14.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_14, 'tStartRefresh')  # time at next scr refresh
            text_14.setAutoDraw(True)
        if text_14.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_14.tStartRefresh + 0.6-frameTolerance:
                # keep track of stop time/frame for later
                text_14.tStop = t  # not accounting for scr refresh
                text_14.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_14, 'tStopRefresh')  # time at next scr refresh
                text_14.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Pre_RewardComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Pre_Reward"-------
    for thisComponent in Pre_RewardComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    pre_reward_trials.addData('enc.started', enc.tStartRefresh)
    pre_reward_trials.addData('enc.stopped', enc.tStopRefresh)
    pre_reward_trials.addData('cross.started', cross.tStartRefresh)
    pre_reward_trials.addData('cross.stopped', cross.tStopRefresh)
    pre_reward_trials.addData('left.started', left.tStartRefresh)
    pre_reward_trials.addData('left.stopped', left.tStopRefresh)
    pre_reward_trials.addData('right.started', right.tStartRefresh)
    pre_reward_trials.addData('right.stopped', right.tStopRefresh)
    pre_reward_trials.addData('isi.started', isi.tStartRefresh)
    pre_reward_trials.addData('isi.stopped', isi.tStopRefresh)
    # check responses
    if pre_reward_response.keys in ['', [], None]:  # No response was made
        pre_reward_response.keys = None
        # was no response the correct answer?!
        if str(corr_resp).lower() == 'none':
           pre_reward_response.corr = 1;  # correct non-response
        else:
           pre_reward_response.corr = 0;  # failed to respond (incorrectly)
    # store data for pre_reward_trials (TrialHandler)
    pre_reward_trials.addData('pre_reward_response.keys',pre_reward_response.keys)
    pre_reward_trials.addData('pre_reward_response.corr', pre_reward_response.corr)
    if pre_reward_response.keys != None:  # we had a response
        pre_reward_trials.addData('pre_reward_response.rt', pre_reward_response.rt)
    pre_reward_trials.addData('pre_reward_response.started', pre_reward_response.tStartRefresh)
    pre_reward_trials.addData('pre_reward_response.stopped', pre_reward_response.tStopRefresh)
    if pre_reward_response.corr:
        num_correct += 1
        prereward_total_corr += 1
        thisExp.addData('prereward_total_corr', prereward_total_corr)
    
        print(prereward_total_corr)
        print('correct')
    print(pre_reward_response.keys)
    if skip.corr:
        num_correct += 1
    # check responses
    if skip.keys in ['', [], None]:  # No response was made
        skip.keys = None
        # was no response the correct answer?!
        if str('space').lower() == 'none':
           skip.corr = 1;  # correct non-response
        else:
           skip.corr = 0;  # failed to respond (incorrectly)
    # store data for pre_reward_trials (TrialHandler)
    pre_reward_trials.addData('skip.keys',skip.keys)
    pre_reward_trials.addData('skip.corr', skip.corr)
    if skip.keys != None:  # we had a response
        pre_reward_trials.addData('skip.rt', skip.rt)
    pre_reward_trials.addData('skip.started', skip.tStartRefresh)
    pre_reward_trials.addData('skip.stopped', skip.tStopRefresh)
    pre_reward_trials.addData('text_13.started', text_13.tStartRefresh)
    pre_reward_trials.addData('text_13.stopped', text_13.tStopRefresh)
    pre_reward_trials.addData('text_14.started', text_14.tStartRefresh)
    pre_reward_trials.addData('text_14.stopped', text_14.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1 repeats of 'pre_reward_trials'

# get names of stimulus parameters
if pre_reward_trials.trialList in ([], [None], None):
    params = []
else:
    params = pre_reward_trials.trialList[0].keys()
# save data for this loop
pre_reward_trials.saveAsText(filename + 'pre_reward_trials.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "reward_ins"-------
continueRoutine = True
# update component parameters for each repeat
instructions_continue_4.keys = []
instructions_continue_4.rt = []
_instructions_continue_4_allKeys = []
pre_reward_accuracy = num_correct
num_correct= 0
print('now setting num_correct to 0')
# keep track of which components have finished
reward_insComponents = [instructions_page_2, instructions_continue_4]
for thisComponent in reward_insComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
reward_insClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "reward_ins"-------
while continueRoutine:
    # get current time
    t = reward_insClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=reward_insClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instructions_page_2* updates
    if instructions_page_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructions_page_2.frameNStart = frameN  # exact frame index
        instructions_page_2.tStart = t  # local t and not account for scr refresh
        instructions_page_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructions_page_2, 'tStartRefresh')  # time at next scr refresh
        instructions_page_2.setAutoDraw(True)
    
    # *instructions_continue_4* updates
    waitOnFlip = False
    if instructions_continue_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructions_continue_4.frameNStart = frameN  # exact frame index
        instructions_continue_4.tStart = t  # local t and not account for scr refresh
        instructions_continue_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructions_continue_4, 'tStartRefresh')  # time at next scr refresh
        instructions_continue_4.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instructions_continue_4.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instructions_continue_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instructions_continue_4.status == STARTED and not waitOnFlip:
        theseKeys = instructions_continue_4.getKeys(keyList=['space'], waitRelease=False)
        _instructions_continue_4_allKeys.extend(theseKeys)
        if len(_instructions_continue_4_allKeys):
            instructions_continue_4.keys = _instructions_continue_4_allKeys[-1].name  # just the last key pressed
            instructions_continue_4.rt = _instructions_continue_4_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in reward_insComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "reward_ins"-------
for thisComponent in reward_insComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('instructions_page_2.started', instructions_page_2.tStartRefresh)
thisExp.addData('instructions_page_2.stopped', instructions_page_2.tStopRefresh)
# check responses
if instructions_continue_4.keys in ['', [], None]:  # No response was made
    instructions_continue_4.keys = None
thisExp.addData('instructions_continue_4.keys',instructions_continue_4.keys)
if instructions_continue_4.keys != None:  # we had a response
    thisExp.addData('instructions_continue_4.rt', instructions_continue_4.rt)
thisExp.addData('instructions_continue_4.started', instructions_continue_4.tStartRefresh)
thisExp.addData('instructions_continue_4.stopped', instructions_continue_4.tStopRefresh)
thisExp.nextEntry()

num_correct = 0
# the Routine "reward_ins" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "practice_instructions_reward"-------
continueRoutine = True
# update component parameters for each repeat
instruction_continue_6.keys = []
instruction_continue_6.rt = []
_instruction_continue_6_allKeys = []
correct = False  # Set routine start values for correct
practice_count = 0
# keep track of which components have finished
practice_instructions_rewardComponents = [text_5, instruction_continue_6]
for thisComponent in practice_instructions_rewardComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
practice_instructions_rewardClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "practice_instructions_reward"-------
while continueRoutine:
    # get current time
    t = practice_instructions_rewardClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=practice_instructions_rewardClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_5* updates
    if text_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_5.frameNStart = frameN  # exact frame index
        text_5.tStart = t  # local t and not account for scr refresh
        text_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
        text_5.setAutoDraw(True)
    
    # *instruction_continue_6* updates
    waitOnFlip = False
    if instruction_continue_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_continue_6.frameNStart = frameN  # exact frame index
        instruction_continue_6.tStart = t  # local t and not account for scr refresh
        instruction_continue_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_continue_6, 'tStartRefresh')  # time at next scr refresh
        instruction_continue_6.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instruction_continue_6.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instruction_continue_6.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instruction_continue_6.status == STARTED and not waitOnFlip:
        theseKeys = instruction_continue_6.getKeys(keyList=['space'], waitRelease=False)
        _instruction_continue_6_allKeys.extend(theseKeys)
        if len(_instruction_continue_6_allKeys):
            instruction_continue_6.keys = _instruction_continue_6_allKeys[-1].name  # just the last key pressed
            instruction_continue_6.rt = _instruction_continue_6_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in practice_instructions_rewardComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "practice_instructions_reward"-------
for thisComponent in practice_instructions_rewardComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_5.started', text_5.tStartRefresh)
thisExp.addData('text_5.stopped', text_5.tStopRefresh)
# check responses
if instruction_continue_6.keys in ['', [], None]:  # No response was made
    instruction_continue_6.keys = None
thisExp.addData('instruction_continue_6.keys',instruction_continue_6.keys)
if instruction_continue_6.keys != None:  # we had a response
    thisExp.addData('instruction_continue_6.rt', instruction_continue_6.rt)
thisExp.addData('instruction_continue_6.started', instruction_continue_6.tStartRefresh)
thisExp.addData('instruction_continue_6.stopped', instruction_continue_6.tStopRefresh)
thisExp.nextEntry()
thisExp.addData('correct.routineEndVal', correct)  # Save end routine value
# the Routine "practice_instructions_reward" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
repeat_reward_practice = data.TrialHandler(nReps=30, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='repeat_reward_practice')
thisExp.addLoop(repeat_reward_practice)  # add the loop to the experiment
thisRepeat_reward_practice = repeat_reward_practice.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisRepeat_reward_practice.rgb)
if thisRepeat_reward_practice != None:
    for paramName in thisRepeat_reward_practice:
        exec('{} = thisRepeat_reward_practice[paramName]'.format(paramName))

for thisRepeat_reward_practice in repeat_reward_practice:
    currentLoop = repeat_reward_practice
    # abbreviate parameter names if possible (e.g. rgb = thisRepeat_reward_practice.rgb)
    if thisRepeat_reward_practice != None:
        for paramName in thisRepeat_reward_practice:
            exec('{} = thisRepeat_reward_practice[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    reward_practice = data.TrialHandler(nReps=1, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('phase2_practice.csv'),
        seed=None, name='reward_practice')
    thisExp.addLoop(reward_practice)  # add the loop to the experiment
    thisReward_practice = reward_practice.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisReward_practice.rgb)
    if thisReward_practice != None:
        for paramName in thisReward_practice:
            exec('{} = thisReward_practice[paramName]'.format(paramName))
    
    for thisReward_practice in reward_practice:
        currentLoop = reward_practice
        # abbreviate parameter names if possible (e.g. rgb = thisReward_practice.rgb)
        if thisReward_practice != None:
            for paramName in thisReward_practice:
                exec('{} = thisReward_practice[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "script"-------
        continueRoutine = True
        # update component parameters for each repeat
        # keep track of which components have finished
        scriptComponents = []
        for thisComponent in scriptComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        scriptClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "script"-------
        while continueRoutine:
            # get current time
            t = scriptClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=scriptClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in scriptComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "script"-------
        for thisComponent in scriptComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        if corr_resp == 1:
            stim_name_enc = stim_name_left
        else:
            stim_name_enc = stim_name_right
            
        print(stim_name_enc)
        
        if conditionedCat == stim_cat_enc:
            star_name = 'stimuli/greenstar.jpg'
        else:
            star_name = 'stimuli/whitestar.jpg'
            
        # the Routine "script" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "Reward_Practice"-------
        continueRoutine = True
        routineTimer.add(10.100000)
        # update component parameters for each repeat
        enc2_2.setImage(stim_name_enc)
        left2_2.setImage(stim_name_left)
        right2_2.setImage(stim_name_right)
        reward_response_2.keys = []
        reward_response_2.rt = []
        _reward_response_2_allKeys = []
        reward_star_2.setImage(corr_image)
        reward_text_2.text= "Miss!"
        reward_star_2.opacity = 0.0
        correct = False
        print('setting text to miss')
        practice_count = reward_practice.thisN + 1
        skip2_2.keys = []
        skip2_2.rt = []
        _skip2_2_allKeys = []
        text_11.setText("Practice trial #"+str(practice_count)+"/4")
        # keep track of which components have finished
        Reward_PracticeComponents = [enc2_2, cross_3, left2_2, right2_2, isi_3, reward_response_2, reward_star_2, reward_text_2, skip2_2, text_11, text_15, text_16]
        for thisComponent in Reward_PracticeComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        Reward_PracticeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Reward_Practice"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = Reward_PracticeClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=Reward_PracticeClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *enc2_2* updates
            if enc2_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                enc2_2.frameNStart = frameN  # exact frame index
                enc2_2.tStart = t  # local t and not account for scr refresh
                enc2_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(enc2_2, 'tStartRefresh')  # time at next scr refresh
                enc2_2.setAutoDraw(True)
            if enc2_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > enc2_2.tStartRefresh + 2.0-frameTolerance:
                    # keep track of stop time/frame for later
                    enc2_2.tStop = t  # not accounting for scr refresh
                    enc2_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(enc2_2, 'tStopRefresh')  # time at next scr refresh
                    enc2_2.setAutoDraw(False)
            
            # *cross_3* updates
            if cross_3.status == NOT_STARTED and tThisFlip >= 2.0-frameTolerance:
                # keep track of start time/frame for later
                cross_3.frameNStart = frameN  # exact frame index
                cross_3.tStart = t  # local t and not account for scr refresh
                cross_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cross_3, 'tStartRefresh')  # time at next scr refresh
                cross_3.setAutoDraw(True)
            if cross_3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > cross_3.tStartRefresh + 5.0-frameTolerance:
                    # keep track of stop time/frame for later
                    cross_3.tStop = t  # not accounting for scr refresh
                    cross_3.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(cross_3, 'tStopRefresh')  # time at next scr refresh
                    cross_3.setAutoDraw(False)
            
            # *left2_2* updates
            if left2_2.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
                # keep track of start time/frame for later
                left2_2.frameNStart = frameN  # exact frame index
                left2_2.tStart = t  # local t and not account for scr refresh
                left2_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(left2_2, 'tStartRefresh')  # time at next scr refresh
                left2_2.setAutoDraw(True)
            if left2_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > left2_2.tStartRefresh + 0.6-frameTolerance:
                    # keep track of stop time/frame for later
                    left2_2.tStop = t  # not accounting for scr refresh
                    left2_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(left2_2, 'tStopRefresh')  # time at next scr refresh
                    left2_2.setAutoDraw(False)
            
            # *right2_2* updates
            if right2_2.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
                # keep track of start time/frame for later
                right2_2.frameNStart = frameN  # exact frame index
                right2_2.tStart = t  # local t and not account for scr refresh
                right2_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(right2_2, 'tStartRefresh')  # time at next scr refresh
                right2_2.setAutoDraw(True)
            if right2_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > right2_2.tStartRefresh + 0.6-frameTolerance:
                    # keep track of stop time/frame for later
                    right2_2.tStop = t  # not accounting for scr refresh
                    right2_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(right2_2, 'tStopRefresh')  # time at next scr refresh
                    right2_2.setAutoDraw(False)
            
            # *isi_3* updates
            if isi_3.status == NOT_STARTED and tThisFlip >= 8.6-frameTolerance:
                # keep track of start time/frame for later
                isi_3.frameNStart = frameN  # exact frame index
                isi_3.tStart = t  # local t and not account for scr refresh
                isi_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(isi_3, 'tStartRefresh')  # time at next scr refresh
                isi_3.setAutoDraw(True)
            if isi_3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > isi_3.tStartRefresh + 1.5-frameTolerance:
                    # keep track of stop time/frame for later
                    isi_3.tStop = t  # not accounting for scr refresh
                    isi_3.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(isi_3, 'tStopRefresh')  # time at next scr refresh
                    isi_3.setAutoDraw(False)
            
            # *reward_response_2* updates
            waitOnFlip = False
            if reward_response_2.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
                # keep track of start time/frame for later
                reward_response_2.frameNStart = frameN  # exact frame index
                reward_response_2.tStart = t  # local t and not account for scr refresh
                reward_response_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(reward_response_2, 'tStartRefresh')  # time at next scr refresh
                reward_response_2.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(reward_response_2.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(reward_response_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if reward_response_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > reward_response_2.tStartRefresh + 0.6-frameTolerance:
                    # keep track of stop time/frame for later
                    reward_response_2.tStop = t  # not accounting for scr refresh
                    reward_response_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(reward_response_2, 'tStopRefresh')  # time at next scr refresh
                    reward_response_2.status = FINISHED
            if reward_response_2.status == STARTED and not waitOnFlip:
                theseKeys = reward_response_2.getKeys(keyList=['1', '2'], waitRelease=False)
                _reward_response_2_allKeys.extend(theseKeys)
                if len(_reward_response_2_allKeys):
                    reward_response_2.keys = _reward_response_2_allKeys[-1].name  # just the last key pressed
                    reward_response_2.rt = _reward_response_2_allKeys[-1].rt
                    # was this correct?
                    if (reward_response_2.keys == str(corr_resp)) or (reward_response_2.keys == corr_resp):
                        reward_response_2.corr = 1
                    else:
                        reward_response_2.corr = 0
            
            # *reward_star_2* updates
            if reward_star_2.status == NOT_STARTED and tThisFlip >= 7.6-frameTolerance:
                # keep track of start time/frame for later
                reward_star_2.frameNStart = frameN  # exact frame index
                reward_star_2.tStart = t  # local t and not account for scr refresh
                reward_star_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(reward_star_2, 'tStartRefresh')  # time at next scr refresh
                reward_star_2.setAutoDraw(True)
            if reward_star_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > reward_star_2.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    reward_star_2.tStop = t  # not accounting for scr refresh
                    reward_star_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(reward_star_2, 'tStopRefresh')  # time at next scr refresh
                    reward_star_2.setAutoDraw(False)
            
            # *reward_text_2* updates
            if reward_text_2.status == NOT_STARTED and tThisFlip >= 7.6-frameTolerance:
                # keep track of start time/frame for later
                reward_text_2.frameNStart = frameN  # exact frame index
                reward_text_2.tStart = t  # local t and not account for scr refresh
                reward_text_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(reward_text_2, 'tStartRefresh')  # time at next scr refresh
                reward_text_2.setAutoDraw(True)
            if reward_text_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > reward_text_2.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    reward_text_2.tStop = t  # not accounting for scr refresh
                    reward_text_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(reward_text_2, 'tStopRefresh')  # time at next scr refresh
                    reward_text_2.setAutoDraw(False)
            print('frame')
            if reward_response_2.keys and not correct:
                print('keypress and no repeat')
                if int(reward_response_2.keys) == int(corr_resp):
            
                    correct= True
                    reward_text_2.text = "Hit! You Won!"
                    
                    reward_star_2.opacity = 1.0
                    num_correct += 1
                    print('correct: ' + str(num_correct))
            
            # *skip2_2* updates
            waitOnFlip = False
            if skip2_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                skip2_2.frameNStart = frameN  # exact frame index
                skip2_2.tStart = t  # local t and not account for scr refresh
                skip2_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(skip2_2, 'tStartRefresh')  # time at next scr refresh
                skip2_2.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(skip2_2.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(skip2_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if skip2_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > skip2_2.tStartRefresh + 10.0-frameTolerance:
                    # keep track of stop time/frame for later
                    skip2_2.tStop = t  # not accounting for scr refresh
                    skip2_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(skip2_2, 'tStopRefresh')  # time at next scr refresh
                    skip2_2.status = FINISHED
            if skip2_2.status == STARTED and not waitOnFlip:
                theseKeys = skip2_2.getKeys(keyList=['space'], waitRelease=False)
                _skip2_2_allKeys.extend(theseKeys)
                if len(_skip2_2_allKeys):
                    skip2_2.keys = _skip2_2_allKeys[-1].name  # just the last key pressed
                    skip2_2.rt = _skip2_2_allKeys[-1].rt
                    # was this correct?
                    if (skip2_2.keys == str('space')) or (skip2_2.keys == 'space'):
                        skip2_2.corr = 1
                    else:
                        skip2_2.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # *text_11* updates
            if text_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_11.frameNStart = frameN  # exact frame index
                text_11.tStart = t  # local t and not account for scr refresh
                text_11.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_11, 'tStartRefresh')  # time at next scr refresh
                text_11.setAutoDraw(True)
            if text_11.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_11.tStartRefresh + 7.6-frameTolerance:
                    # keep track of stop time/frame for later
                    text_11.tStop = t  # not accounting for scr refresh
                    text_11.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(text_11, 'tStopRefresh')  # time at next scr refresh
                    text_11.setAutoDraw(False)
            
            # *text_15* updates
            if text_15.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
                # keep track of start time/frame for later
                text_15.frameNStart = frameN  # exact frame index
                text_15.tStart = t  # local t and not account for scr refresh
                text_15.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_15, 'tStartRefresh')  # time at next scr refresh
                text_15.setAutoDraw(True)
            if text_15.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_15.tStartRefresh + 0.6-frameTolerance:
                    # keep track of stop time/frame for later
                    text_15.tStop = t  # not accounting for scr refresh
                    text_15.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(text_15, 'tStopRefresh')  # time at next scr refresh
                    text_15.setAutoDraw(False)
            
            # *text_16* updates
            if text_16.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
                # keep track of start time/frame for later
                text_16.frameNStart = frameN  # exact frame index
                text_16.tStart = t  # local t and not account for scr refresh
                text_16.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_16, 'tStartRefresh')  # time at next scr refresh
                text_16.setAutoDraw(True)
            if text_16.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_16.tStartRefresh + 0.6-frameTolerance:
                    # keep track of stop time/frame for later
                    text_16.tStop = t  # not accounting for scr refresh
                    text_16.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(text_16, 'tStopRefresh')  # time at next scr refresh
                    text_16.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in Reward_PracticeComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Reward_Practice"-------
        for thisComponent in Reward_PracticeComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        reward_practice.addData('enc2_2.started', enc2_2.tStartRefresh)
        reward_practice.addData('enc2_2.stopped', enc2_2.tStopRefresh)
        reward_practice.addData('cross_3.started', cross_3.tStartRefresh)
        reward_practice.addData('cross_3.stopped', cross_3.tStopRefresh)
        reward_practice.addData('left2_2.started', left2_2.tStartRefresh)
        reward_practice.addData('left2_2.stopped', left2_2.tStopRefresh)
        reward_practice.addData('right2_2.started', right2_2.tStartRefresh)
        reward_practice.addData('right2_2.stopped', right2_2.tStopRefresh)
        reward_practice.addData('isi_3.started', isi_3.tStartRefresh)
        reward_practice.addData('isi_3.stopped', isi_3.tStopRefresh)
        # check responses
        if reward_response_2.keys in ['', [], None]:  # No response was made
            reward_response_2.keys = None
            # was no response the correct answer?!
            if str(corr_resp).lower() == 'none':
               reward_response_2.corr = 1;  # correct non-response
            else:
               reward_response_2.corr = 0;  # failed to respond (incorrectly)
        # store data for reward_practice (TrialHandler)
        reward_practice.addData('reward_response_2.keys',reward_response_2.keys)
        reward_practice.addData('reward_response_2.corr', reward_response_2.corr)
        if reward_response_2.keys != None:  # we had a response
            reward_practice.addData('reward_response_2.rt', reward_response_2.rt)
        reward_practice.addData('reward_response_2.started', reward_response_2.tStartRefresh)
        reward_practice.addData('reward_response_2.stopped', reward_response_2.tStopRefresh)
        reward_practice.addData('reward_star_2.started', reward_star_2.tStartRefresh)
        reward_practice.addData('reward_star_2.stopped', reward_star_2.tStopRefresh)
        reward_practice.addData('reward_text_2.started', reward_text_2.tStartRefresh)
        reward_practice.addData('reward_text_2.stopped', reward_text_2.tStopRefresh)
        if skip2_2.corr:
            num_correct += 1
        elif reward_response_2.corr:
            print('null')
        else:
            practice_failed = True
            reward_practice.finished = True
        # check responses
        if skip2_2.keys in ['', [], None]:  # No response was made
            skip2_2.keys = None
            # was no response the correct answer?!
            if str('space').lower() == 'none':
               skip2_2.corr = 1;  # correct non-response
            else:
               skip2_2.corr = 0;  # failed to respond (incorrectly)
        # store data for reward_practice (TrialHandler)
        reward_practice.addData('skip2_2.keys',skip2_2.keys)
        reward_practice.addData('skip2_2.corr', skip2_2.corr)
        if skip2_2.keys != None:  # we had a response
            reward_practice.addData('skip2_2.rt', skip2_2.rt)
        reward_practice.addData('skip2_2.started', skip2_2.tStartRefresh)
        reward_practice.addData('skip2_2.stopped', skip2_2.tStopRefresh)
        reward_practice.addData('text_11.started', text_11.tStartRefresh)
        reward_practice.addData('text_11.stopped', text_11.tStopRefresh)
        reward_practice.addData('text_15.started', text_15.tStartRefresh)
        reward_practice.addData('text_15.stopped', text_15.tStopRefresh)
        reward_practice.addData('text_16.started', text_16.tStartRefresh)
        reward_practice.addData('text_16.stopped', text_16.tStopRefresh)
        thisExp.nextEntry()
        
    # completed 1 repeats of 'reward_practice'
    
    # get names of stimulus parameters
    if reward_practice.trialList in ([], [None], None):
        params = []
    else:
        params = reward_practice.trialList[0].keys()
    # save data for this loop
    reward_practice.saveAsText(filename + 'reward_practice.csv', delim=',',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
    
    # ------Prepare to start Routine "check_reward_practice"-------
    continueRoutine = True
    # update component parameters for each repeat
    if not practice_failed:
        repeat_reward_practice.finished = True
        print('finished')
        practice_failed = False
        num_correct = 0
    else:
        text_7.text = 'You must answer correctly on all practice trials to proceed. Restarting practice trials now. As a reminder, your task is to indicate which of the two images is the target image, using the 1 and 2 keys. Press space bar to continue.'
        num_correct = 0
        practice_failed = False
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    # keep track of which components have finished
    check_reward_practiceComponents = [text_7, key_resp_2]
    for thisComponent in check_reward_practiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    check_reward_practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "check_reward_practice"-------
    while continueRoutine:
        # get current time
        t = check_reward_practiceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=check_reward_practiceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_7* updates
        if text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_7.frameNStart = frameN  # exact frame index
            text_7.tStart = t  # local t and not account for scr refresh
            text_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
            text_7.setAutoDraw(True)
        
        # *key_resp_2* updates
        waitOnFlip = False
        if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in check_reward_practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "check_reward_practice"-------
    for thisComponent in check_reward_practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    repeat_reward_practice.addData('text_7.started', text_7.tStartRefresh)
    repeat_reward_practice.addData('text_7.stopped', text_7.tStopRefresh)
    # check responses
    if key_resp_2.keys in ['', [], None]:  # No response was made
        key_resp_2.keys = None
    repeat_reward_practice.addData('key_resp_2.keys',key_resp_2.keys)
    if key_resp_2.keys != None:  # we had a response
        repeat_reward_practice.addData('key_resp_2.rt', key_resp_2.rt)
    repeat_reward_practice.addData('key_resp_2.started', key_resp_2.tStartRefresh)
    repeat_reward_practice.addData('key_resp_2.stopped', key_resp_2.tStopRefresh)
    # the Routine "check_reward_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 30 repeats of 'repeat_reward_practice'

# get names of stimulus parameters
if repeat_reward_practice.trialList in ([], [None], None):
    params = []
else:
    params = repeat_reward_practice.trialList[0].keys()
# save data for this loop
repeat_reward_practice.saveAsText(filename + 'repeat_reward_practice.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "continue_3"-------
continueRoutine = True
# update component parameters for each repeat
instruction_continue_7.keys = []
instruction_continue_7.rt = []
_instruction_continue_7_allKeys = []
# keep track of which components have finished
continue_3Components = [text_4, instruction_continue_7]
for thisComponent in continue_3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
continue_3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "continue_3"-------
while continueRoutine:
    # get current time
    t = continue_3Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=continue_3Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_4* updates
    if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_4.frameNStart = frameN  # exact frame index
        text_4.tStart = t  # local t and not account for scr refresh
        text_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
        text_4.setAutoDraw(True)
    
    # *instruction_continue_7* updates
    waitOnFlip = False
    if instruction_continue_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_continue_7.frameNStart = frameN  # exact frame index
        instruction_continue_7.tStart = t  # local t and not account for scr refresh
        instruction_continue_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_continue_7, 'tStartRefresh')  # time at next scr refresh
        instruction_continue_7.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instruction_continue_7.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instruction_continue_7.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instruction_continue_7.status == STARTED and not waitOnFlip:
        theseKeys = instruction_continue_7.getKeys(keyList=['space'], waitRelease=False)
        _instruction_continue_7_allKeys.extend(theseKeys)
        if len(_instruction_continue_7_allKeys):
            instruction_continue_7.keys = _instruction_continue_7_allKeys[-1].name  # just the last key pressed
            instruction_continue_7.rt = _instruction_continue_7_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in continue_3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "continue_3"-------
for thisComponent in continue_3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_4.started', text_4.tStartRefresh)
thisExp.addData('text_4.stopped', text_4.tStopRefresh)
# check responses
if instruction_continue_7.keys in ['', [], None]:  # No response was made
    instruction_continue_7.keys = None
thisExp.addData('instruction_continue_7.keys',instruction_continue_7.keys)
if instruction_continue_7.keys != None:  # we had a response
    thisExp.addData('instruction_continue_7.rt', instruction_continue_7.rt)
thisExp.addData('instruction_continue_7.started', instruction_continue_7.tStartRefresh)
thisExp.addData('instruction_continue_7.stopped', instruction_continue_7.tStopRefresh)
thisExp.nextEntry()
# the Routine "continue_3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
reward_trials = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions(reward_cond),
    seed=None, name='reward_trials')
thisExp.addLoop(reward_trials)  # add the loop to the experiment
thisReward_trial = reward_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisReward_trial.rgb)
if thisReward_trial != None:
    for paramName in thisReward_trial:
        exec('{} = thisReward_trial[paramName]'.format(paramName))

for thisReward_trial in reward_trials:
    currentLoop = reward_trials
    # abbreviate parameter names if possible (e.g. rgb = thisReward_trial.rgb)
    if thisReward_trial != None:
        for paramName in thisReward_trial:
            exec('{} = thisReward_trial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "script"-------
    continueRoutine = True
    # update component parameters for each repeat
    # keep track of which components have finished
    scriptComponents = []
    for thisComponent in scriptComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    scriptClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "script"-------
    while continueRoutine:
        # get current time
        t = scriptClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=scriptClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in scriptComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "script"-------
    for thisComponent in scriptComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    if corr_resp == 1:
        stim_name_enc = stim_name_left
    else:
        stim_name_enc = stim_name_right
        
    print(stim_name_enc)
    
    if conditionedCat == stim_cat_enc:
        star_name = 'stimuli/greenstar.jpg'
    else:
        star_name = 'stimuli/whitestar.jpg'
        
    # the Routine "script" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "Reward"-------
    continueRoutine = True
    routineTimer.add(10.100000)
    # update component parameters for each repeat
    enc2.setImage(stim_name_enc)
    left2.setImage(stim_name_left)
    right2.setImage(stim_name_right)
    reward_response.keys = []
    reward_response.rt = []
    _reward_response_allKeys = []
    reward_star.setImage(corr_image)
    
    
    reward_text.text= "Miss!"
    reward_star.opacity = 0.0
    correct = False
    print('setting text to miss')
    skip2.keys = []
    skip2.rt = []
    _skip2_allKeys = []
    # keep track of which components have finished
    RewardComponents = [enc2, cross_2, left2, right2, isi_2, reward_response, reward_star, reward_text, skip2, text_17, text_18]
    for thisComponent in RewardComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    RewardClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Reward"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = RewardClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=RewardClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *enc2* updates
        if enc2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            enc2.frameNStart = frameN  # exact frame index
            enc2.tStart = t  # local t and not account for scr refresh
            enc2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(enc2, 'tStartRefresh')  # time at next scr refresh
            enc2.setAutoDraw(True)
        if enc2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > enc2.tStartRefresh + 2.0-frameTolerance:
                # keep track of stop time/frame for later
                enc2.tStop = t  # not accounting for scr refresh
                enc2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(enc2, 'tStopRefresh')  # time at next scr refresh
                enc2.setAutoDraw(False)
        
        # *cross_2* updates
        if cross_2.status == NOT_STARTED and tThisFlip >= 2.0-frameTolerance:
            # keep track of start time/frame for later
            cross_2.frameNStart = frameN  # exact frame index
            cross_2.tStart = t  # local t and not account for scr refresh
            cross_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cross_2, 'tStartRefresh')  # time at next scr refresh
            cross_2.setAutoDraw(True)
        if cross_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > cross_2.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                cross_2.tStop = t  # not accounting for scr refresh
                cross_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(cross_2, 'tStopRefresh')  # time at next scr refresh
                cross_2.setAutoDraw(False)
        
        # *left2* updates
        if left2.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            left2.frameNStart = frameN  # exact frame index
            left2.tStart = t  # local t and not account for scr refresh
            left2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(left2, 'tStartRefresh')  # time at next scr refresh
            left2.setAutoDraw(True)
        if left2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > left2.tStartRefresh + 0.6-frameTolerance:
                # keep track of stop time/frame for later
                left2.tStop = t  # not accounting for scr refresh
                left2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(left2, 'tStopRefresh')  # time at next scr refresh
                left2.setAutoDraw(False)
        
        # *right2* updates
        if right2.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            right2.frameNStart = frameN  # exact frame index
            right2.tStart = t  # local t and not account for scr refresh
            right2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(right2, 'tStartRefresh')  # time at next scr refresh
            right2.setAutoDraw(True)
        if right2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > right2.tStartRefresh + 0.6-frameTolerance:
                # keep track of stop time/frame for later
                right2.tStop = t  # not accounting for scr refresh
                right2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(right2, 'tStopRefresh')  # time at next scr refresh
                right2.setAutoDraw(False)
        
        # *isi_2* updates
        if isi_2.status == NOT_STARTED and tThisFlip >= 8.6-frameTolerance:
            # keep track of start time/frame for later
            isi_2.frameNStart = frameN  # exact frame index
            isi_2.tStart = t  # local t and not account for scr refresh
            isi_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(isi_2, 'tStartRefresh')  # time at next scr refresh
            isi_2.setAutoDraw(True)
        if isi_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > isi_2.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                isi_2.tStop = t  # not accounting for scr refresh
                isi_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(isi_2, 'tStopRefresh')  # time at next scr refresh
                isi_2.setAutoDraw(False)
        
        # *reward_response* updates
        waitOnFlip = False
        if reward_response.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            reward_response.frameNStart = frameN  # exact frame index
            reward_response.tStart = t  # local t and not account for scr refresh
            reward_response.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(reward_response, 'tStartRefresh')  # time at next scr refresh
            reward_response.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(reward_response.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(reward_response.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if reward_response.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > reward_response.tStartRefresh + 0.6-frameTolerance:
                # keep track of stop time/frame for later
                reward_response.tStop = t  # not accounting for scr refresh
                reward_response.frameNStop = frameN  # exact frame index
                win.timeOnFlip(reward_response, 'tStopRefresh')  # time at next scr refresh
                reward_response.status = FINISHED
        if reward_response.status == STARTED and not waitOnFlip:
            theseKeys = reward_response.getKeys(keyList=['1', '2'], waitRelease=False)
            _reward_response_allKeys.extend(theseKeys)
            if len(_reward_response_allKeys):
                reward_response.keys = _reward_response_allKeys[-1].name  # just the last key pressed
                reward_response.rt = _reward_response_allKeys[-1].rt
                # was this correct?
                if (reward_response.keys == str(corr_resp)) or (reward_response.keys == corr_resp):
                    reward_response.corr = 1
                else:
                    reward_response.corr = 0
        
        # *reward_star* updates
        if reward_star.status == NOT_STARTED and tThisFlip >= 7.6-frameTolerance:
            # keep track of start time/frame for later
            reward_star.frameNStart = frameN  # exact frame index
            reward_star.tStart = t  # local t and not account for scr refresh
            reward_star.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(reward_star, 'tStartRefresh')  # time at next scr refresh
            reward_star.setAutoDraw(True)
        if reward_star.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > reward_star.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                reward_star.tStop = t  # not accounting for scr refresh
                reward_star.frameNStop = frameN  # exact frame index
                win.timeOnFlip(reward_star, 'tStopRefresh')  # time at next scr refresh
                reward_star.setAutoDraw(False)
        
        # *reward_text* updates
        if reward_text.status == NOT_STARTED and tThisFlip >= 7.6-frameTolerance:
            # keep track of start time/frame for later
            reward_text.frameNStart = frameN  # exact frame index
            reward_text.tStart = t  # local t and not account for scr refresh
            reward_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(reward_text, 'tStartRefresh')  # time at next scr refresh
            reward_text.setAutoDraw(True)
        if reward_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > reward_text.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                reward_text.tStop = t  # not accounting for scr refresh
                reward_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(reward_text, 'tStopRefresh')  # time at next scr refresh
                reward_text.setAutoDraw(False)
        print('frame')
        if reward_response.keys and not correct:
            print('keypress and no repeat')
            if int(reward_response.keys) == int(corr_resp):
        
                correct= True
                reward_text.text = "Hit! You Won!"
                
                reward_star.opacity = 1.0
                num_correct += 1
                reward_total_corr += 1
                
                if conditionedCat == stim_cat_enc:
                    conditioned_total_corr += 1
                else:
                    unconditioned_total_corr += 1
                thisExp.addData('reward_total_corr', reward_total_corr)
                thisExp.addData('conditioned_total_corr', conditioned_total_corr)
                thisExp.addData('unconditioned_total_corr', unconditioned_total_corr)
        
                print('correct: ' + str(num_correct))
        
        # *skip2* updates
        waitOnFlip = False
        if skip2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            skip2.frameNStart = frameN  # exact frame index
            skip2.tStart = t  # local t and not account for scr refresh
            skip2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(skip2, 'tStartRefresh')  # time at next scr refresh
            skip2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(skip2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(skip2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if skip2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > skip2.tStartRefresh + 10.0-frameTolerance:
                # keep track of stop time/frame for later
                skip2.tStop = t  # not accounting for scr refresh
                skip2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(skip2, 'tStopRefresh')  # time at next scr refresh
                skip2.status = FINISHED
        if skip2.status == STARTED and not waitOnFlip:
            theseKeys = skip2.getKeys(keyList=['space'], waitRelease=False)
            _skip2_allKeys.extend(theseKeys)
            if len(_skip2_allKeys):
                skip2.keys = _skip2_allKeys[-1].name  # just the last key pressed
                skip2.rt = _skip2_allKeys[-1].rt
                # was this correct?
                if (skip2.keys == str('space')) or (skip2.keys == 'space'):
                    skip2.corr = 1
                else:
                    skip2.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # *text_17* updates
        if text_17.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
            # keep track of start time/frame for later
            text_17.frameNStart = frameN  # exact frame index
            text_17.tStart = t  # local t and not account for scr refresh
            text_17.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_17, 'tStartRefresh')  # time at next scr refresh
            text_17.setAutoDraw(True)
        if text_17.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_17.tStartRefresh + 0.6-frameTolerance:
                # keep track of stop time/frame for later
                text_17.tStop = t  # not accounting for scr refresh
                text_17.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_17, 'tStopRefresh')  # time at next scr refresh
                text_17.setAutoDraw(False)
        
        # *text_18* updates
        if text_18.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
            # keep track of start time/frame for later
            text_18.frameNStart = frameN  # exact frame index
            text_18.tStart = t  # local t and not account for scr refresh
            text_18.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_18, 'tStartRefresh')  # time at next scr refresh
            text_18.setAutoDraw(True)
        if text_18.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_18.tStartRefresh + 0.6-frameTolerance:
                # keep track of stop time/frame for later
                text_18.tStop = t  # not accounting for scr refresh
                text_18.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_18, 'tStopRefresh')  # time at next scr refresh
                text_18.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in RewardComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Reward"-------
    for thisComponent in RewardComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    reward_trials.addData('enc2.started', enc2.tStartRefresh)
    reward_trials.addData('enc2.stopped', enc2.tStopRefresh)
    reward_trials.addData('cross_2.started', cross_2.tStartRefresh)
    reward_trials.addData('cross_2.stopped', cross_2.tStopRefresh)
    reward_trials.addData('left2.started', left2.tStartRefresh)
    reward_trials.addData('left2.stopped', left2.tStopRefresh)
    reward_trials.addData('right2.started', right2.tStartRefresh)
    reward_trials.addData('right2.stopped', right2.tStopRefresh)
    reward_trials.addData('isi_2.started', isi_2.tStartRefresh)
    reward_trials.addData('isi_2.stopped', isi_2.tStopRefresh)
    # check responses
    if reward_response.keys in ['', [], None]:  # No response was made
        reward_response.keys = None
        # was no response the correct answer?!
        if str(corr_resp).lower() == 'none':
           reward_response.corr = 1;  # correct non-response
        else:
           reward_response.corr = 0;  # failed to respond (incorrectly)
    # store data for reward_trials (TrialHandler)
    reward_trials.addData('reward_response.keys',reward_response.keys)
    reward_trials.addData('reward_response.corr', reward_response.corr)
    if reward_response.keys != None:  # we had a response
        reward_trials.addData('reward_response.rt', reward_response.rt)
    reward_trials.addData('reward_response.started', reward_response.tStartRefresh)
    reward_trials.addData('reward_response.stopped', reward_response.tStopRefresh)
    reward_trials.addData('reward_star.started', reward_star.tStartRefresh)
    reward_trials.addData('reward_star.stopped', reward_star.tStopRefresh)
    reward_trials.addData('reward_text.started', reward_text.tStartRefresh)
    reward_trials.addData('reward_text.stopped', reward_text.tStopRefresh)
    if skip2.corr:
        num_correct += 1
        reward_total_corr += 1
        conditioned_total_corr += 1
    # check responses
    if skip2.keys in ['', [], None]:  # No response was made
        skip2.keys = None
        # was no response the correct answer?!
        if str('space').lower() == 'none':
           skip2.corr = 1;  # correct non-response
        else:
           skip2.corr = 0;  # failed to respond (incorrectly)
    # store data for reward_trials (TrialHandler)
    reward_trials.addData('skip2.keys',skip2.keys)
    reward_trials.addData('skip2.corr', skip2.corr)
    if skip2.keys != None:  # we had a response
        reward_trials.addData('skip2.rt', skip2.rt)
    reward_trials.addData('skip2.started', skip2.tStartRefresh)
    reward_trials.addData('skip2.stopped', skip2.tStopRefresh)
    reward_trials.addData('text_17.started', text_17.tStartRefresh)
    reward_trials.addData('text_17.stopped', text_17.tStopRefresh)
    reward_trials.addData('text_18.started', text_18.tStartRefresh)
    reward_trials.addData('text_18.stopped', text_18.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1 repeats of 'reward_trials'

# get names of stimulus parameters
if reward_trials.trialList in ([], [None], None):
    params = []
else:
    params = reward_trials.trialList[0].keys()
# save data for this loop
reward_trials.saveAsText(filename + 'reward_trials.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "final"-------
continueRoutine = True
# update component parameters for each repeat
reward_accuracy  = num_correct

if conditioned_total_corr >= 27:
    bonus += 5
if unconditioned_total_corr >= 27:
    bonus += 0.25
text_12.setText("You have completed this part of the experiment.\n\nYou earned a bonus of $" +str(bonus) + " based on your performance.\n\nDon't forget to return for the second day of the experiment tomorrow! You will only receive your bonus payment if you return for the second day of the experiment.\n\nPress spacebar to confirm.")
key_resp_3.keys = []
key_resp_3.rt = []
_key_resp_3_allKeys = []
# keep track of which components have finished
finalComponents = [text_12, key_resp_3]
for thisComponent in finalComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
finalClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "final"-------
while continueRoutine:
    # get current time
    t = finalClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=finalClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_12* updates
    if text_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_12.frameNStart = frameN  # exact frame index
        text_12.tStart = t  # local t and not account for scr refresh
        text_12.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_12, 'tStartRefresh')  # time at next scr refresh
        text_12.setAutoDraw(True)
    
    # *key_resp_3* updates
    waitOnFlip = False
    if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_3.frameNStart = frameN  # exact frame index
        key_resp_3.tStart = t  # local t and not account for scr refresh
        key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
        key_resp_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_3.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_3.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_3_allKeys.extend(theseKeys)
        if len(_key_resp_3_allKeys):
            key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
            key_resp_3.rt = _key_resp_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in finalComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "final"-------
for thisComponent in finalComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_12.started', text_12.tStartRefresh)
thisExp.addData('text_12.stopped', text_12.tStopRefresh)
# check responses
if key_resp_3.keys in ['', [], None]:  # No response was made
    key_resp_3.keys = None
thisExp.addData('key_resp_3.keys',key_resp_3.keys)
if key_resp_3.keys != None:  # we had a response
    thisExp.addData('key_resp_3.rt', key_resp_3.rt)
thisExp.addData('key_resp_3.started', key_resp_3.tStartRefresh)
thisExp.addData('key_resp_3.stopped', key_resp_3.tStopRefresh)
thisExp.nextEntry()
# the Routine "final" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()
thisExp.addData('prereward_total_corr', prereward_total_corr)
thisExp.addData("reward_total_corr", reward_total_corr);
thisExp.addData('conditioned_total_corr', conditioned_total_corr)
thisExp.addData('unconditioned_total_corr', unconditioned_total_corr)

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='tab')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
