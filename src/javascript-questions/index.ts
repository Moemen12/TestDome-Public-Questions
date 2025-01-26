// Game Platform

import {
  calculateFinalSpeedForLoop,
  calculateFinalSpeedReduce,
} from "./game-platform.js";
import * as tasks from "./reorder-tasks.js";
import { DiscountType, getDiscountedPrice } from "./mega-store.js";
import { canTravelTo, gameMatrix } from "./boat-movements.js";
import { newMessage } from "./topic-coloring.js";
import { endangeredSpecies } from "./endangered-species.js";
import { registerHandlers } from "./closures.js";
import { appendChildren } from "./loop.js";
import { pipeline } from "./pipeline.js";
import { setup as foodrank } from "./food-ranking.js";
import { setup } from "./image-gallery.js";
import { ensure } from "./ensure.js";
import { findTwoSum } from "./two-sum.js";
import { createCheckDigit } from "./check-digit.js";
import { closestRelative } from "./closest-relative.js";
import { showCustomers } from "./customer-list.js";
// console.log(calculateFinalSpeedForLoop(60, [0, 30, 0, -45, 0]));

// console.log(calculateFinalSpeedReduce(60, [0, 30, 0, -45, 0]));

// tasks.initialize();

// console.log(getDiscountedPrice(12, 100, DiscountType.Weight));

// console.log(canTravelTo(gameMatrix, 3, 2, 2, 2)); // true, Valid move
// console.log(canTravelTo(gameMatrix, 3, 2, 3, 4)); // false, Can't travel through land
// console.log(canTravelTo(gameMatrix, 3, 2, 6, 2)); // false, Out of bounds
// newMessage("discussion");
// console.log(endangeredSpecies("North America"));

// registerHandlers();

// appendChildren(function (div) {});

// let fun = pipeline(
//   (x) => x * 3,
//   (x) => x + 1,
//   (x) => x / 2
// );
// console.log(fun(3)); // Should print 5

// foodrank();

// setup();

// try {
//   console.log(ensure("moemen"));
// } catch (err) {
//   console.log(err);
// }

// const indices = findTwoSum([3, 1, 5, 7, 5, 9], 19);
// console.log(indices);

// console.log(createCheckDigit("55555"));

// let parent = document.getElementsByTagName("James")[0];

// let relative = closestRelative(parent, "Mike");
// console.log(relative && relative.tagName); // prints MIKE

// let customers = [
//   { name: "John", email: "john@example.com" },
//   { name: "Mary", email: "mary@example.com" },
// ];
// showCustomers(customers, document.getElementById("customers") as HTMLElement);
