#!/usr/bin/env node
import game from '../game-engine';
import questionAndAnswer from '../games/gcd';

const description = 'Find the greatest common divisor of given numbers.';

game(description, questionAndAnswer);
