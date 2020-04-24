#!/usr/bin/env node
import { engine } from './src/engine.js';
import { brainProgression } from './src/games/brain-progression.js';

const questionForBrainProgression = `What number is missing in the progression?
Question:`;
console.log(engine(brainProgression, questionForBrainProgression));