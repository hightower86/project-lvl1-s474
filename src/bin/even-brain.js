#!/usr/bin/env node
import game from '../game-engine';
import questionAndAnswer from '../games/even';

const description = 'Answer "yes" if number even otherwise answer "no".';

game(description, questionAndAnswer);
