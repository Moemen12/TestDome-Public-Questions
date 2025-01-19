// Game Platform

import {
  calculateFinalSpeedForLoop,
  calculateFinalSpeedReduce,
} from "./game-platform.js";
import * as tasks from "./reorder-tasks.js";
import { DiscountType, getDiscountedPrice } from "./mega-store.js";
import { canTravelTo, gameMatrix } from "./boat-movements.js";
import { newMessage } from "./topic-coloring.js";
// console.log(calculateFinalSpeedForLoop(60, [0, 30, 0, -45, 0]));

// console.log(calculateFinalSpeedReduce(60, [0, 30, 0, -45, 0]));

// tasks.initialize();

// console.log(getDiscountedPrice(12, 100, DiscountType.Weight));

// console.log(canTravelTo(gameMatrix, 3, 2, 2, 2)); // true, Valid move
// console.log(canTravelTo(gameMatrix, 3, 2, 3, 4)); // false, Can't travel through land
// console.log(canTravelTo(gameMatrix, 3, 2, 6, 2)); // false, Out of bounds
// newMessage("discussion");
