// Game Platform

import {
  calculateFinalSpeedForLoop,
  calculateFinalSpeedReduce,
} from "./game-platform.js";
import * as tasks from "./reorder-tasks.js";
import { DiscountType, getDiscountedPrice } from "./mega-store.js";

// console.log(calculateFinalSpeedForLoop(60, [0, 30, 0, -45, 0]));

// console.log(calculateFinalSpeedReduce(60, [0, 30, 0, -45, 0]));

// tasks.initialize();

console.log(getDiscountedPrice(12, 100, DiscountType.Weight));
