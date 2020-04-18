#!/usr/bin/env node
import { evenFunction, engine } from './src/index.js';

console.log(engine(evenFunction, `Answer "yes" if the number is even, otherwise answer "no"
Question:`));