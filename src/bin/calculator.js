#!/usr/bin/env node
import game from '../game-engine';
import askQuestion from '../games/index-calculator';

const description = 'What is the result of the expression?';

game(description, askQuestion);
