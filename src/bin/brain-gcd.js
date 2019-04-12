#!/usr/bin/env node
import game from '../game-engine';
import question from '../games/index-gcd';

const description = 'Find the greatest common divisor of given numbers.';

game(description, question);
