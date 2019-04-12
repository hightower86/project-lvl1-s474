#!/usr/bin/env node
import game from '../game-engine';
import questionAndAnswer from '../games/prime';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

game(description, questionAndAnswer);
