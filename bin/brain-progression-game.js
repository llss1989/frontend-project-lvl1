#!/usr/bin/env node
import { engine, brainProgression } from './src/index.js';

const questionForBrainProgression = `What number is missing in the progression?
Question:`;
console.log(engine(brainProgression, questionForBrainProgression));