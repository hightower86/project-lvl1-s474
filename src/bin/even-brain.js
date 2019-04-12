#!/usr/bin/env node
import game from '../game-engine';
import question from '../games/index-even-brain';

const description = 'Answer "yes" if number even otherwise answer "no".';

game(description, question);
