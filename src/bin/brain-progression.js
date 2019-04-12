#!/usr/bin/env node
import game from '../game-engine';
import questionAndAnswer from '../games/progression';

const description = 'What number is missing in the progression?';

game(description, questionAndAnswer);
