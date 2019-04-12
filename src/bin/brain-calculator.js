#!/usr/bin/env node
import game from '../game-engine';
import questionAndAnswer from '../games/calculator';

const description = 'What is the result of the expression?';

game(description, questionAndAnswer);
