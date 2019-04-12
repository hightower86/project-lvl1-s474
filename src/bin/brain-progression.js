#!/usr/bin/env node
import game from '../game-engine';
import question from '../games/index-progression';

const description = 'What number is missing in the progression?';

game(description, question);
