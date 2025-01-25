# TestDome Solutions

A collection of TestDome questions and their solutions.

## Table of Contents

- [Game Platform (Speed Calculator)](#game-platform)
- [Reorder Tasks](#reorder-tasks)
- [Mega Store](#mega-store)
- [Topic Coloring](#topic-coloring)
- [Endangered Species](#endangered-species)
- [Closures](#closures)
- [Loop](#loop)
- [Pipeline](#pipeline)
- [Food Ranking](#food-ranking)
- [Image Gallery](#image-gallery)
- [Ensure](#ensure)
- [Two Sum](#two-sum)
- [Check Digit](#check-digit)
- [Closest Relative](#closest-relative)

<!-- Add more questions as they come -->

## Game Platform

### Solution 1: Using Reduce

```javascript
function calculateFinalSpeed(initialSpeed, inclinations) {
  try {
    const result = inclinations.reduce((speed, inclination) => {
      console.log("speed : ", speed, "and angle is ", inclination);

      inclination <= 0 ? (speed += -inclination) : (speed -= inclination);
      if (speed <= 0) {
        throw new Error("Speed dropped to 0");
      }

      return speed;
    }, initialSpeed);

    return result;
  } catch (error) {
    return 0;
  }
}
```

### Solution 2: Using For Loop

```javascript
function calculateFinalSpeed(initialSpeed, inclinations) {
  if (initialSpeed <= 0) {
    return 0;
  }

  for (const inclination of inclinations) {
    if (inclination <= 0) {
      console.log("speed : ", initialSpeed, "and angle is ", inclination);
      initialSpeed += -inclination;
    } else {
      console.log("speed : ", initialSpeed, "and angle is ", inclination);
      initialSpeed -= inclination;
    }

    if (initialSpeed <= 0) {
      return 0;
    }
  }

  return initialSpeed;
}
```

## Reorder Tasks

### Solution

```javascript
function initialize() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const clickedBtnParent = button.parentElement;
      const currentSpan = clickedBtnParent.children.item(0);

      const nextParent = button.parentElement?.nextElementSibling;
      const prevParent = button.parentElement?.previousElementSibling;

      if (button.className === "downButton") {
        nextParent.prepend(currentSpan);
        clickedBtnParent.prepend(nextParent.children.item(1));
      } else {
        prevParent.prepend(currentSpan);
        clickedBtnParent.prepend(prevParent.children.item(1));
      }
    });
  });
}
```

## Mega Store

### Solution

```javascript
function getDiscountedPrice(cartWeight, totalPrice, discountType) {
  switch (discountType) {
    case DiscountType.Standard:
      return (totalPrice = totalPrice - (6 / 100) * totalPrice);

    case DiscountType.Seasonal:
      return (totalPrice = totalPrice - (12 / 100) * totalPrice);

    case DiscountType.Weight:
      return (totalPrice =
        cartWeight <= 10
          ? totalPrice - (6 / 100) * totalPrice
          : totalPrice - (18 / 100) * totalPrice);

    default:
      return totalPrice;
  }
}
```

## Topic Coloring

### Solution

```javascript
function newMessage(topicName) {
  const divElement = document.getElementsByTagName("p");

  for (const div of divElement) {
    const name = div.getAttribute("data-topic-name");

    if (name === topicName) {
      div.style.backgroundColor = "red";
    }
  }

  return divElement;
}
```

## Endangered Species

### Solution

```javascript
function endangeredSpecies(continent) {
  const divElement = document.getElementsByTagName("li");

  for (const li of divElement) {
    const name = li.getAttribute("data-continent");
    if (name === continent) {
      return li.textContent;
    }
  }
}
```

## Closures

### Solution

```javascript
function registerHandlers() {
  let as = document.getElementsByTagName("a");
  for (let i = 0; i < as.length; i++) {
    as[i].onclick = function () {
      alert(i);
      return false;
    };
  }
}
```

## Loop

### Solution

```javascript
function appendChildren(decorateDiv) {
  let allDivs = Array.from(document.getElementsByTagName("div"));

  // or let allDivs = [...document.getElementsByTagName("div")];

  for (let i = 0; i < allDivs.length; i++) {
    let newDiv = document.createElement("div");

    decorateDiv(newDiv);

    allDivs[i].appendChild(newDiv);
  }
}
```

## Pipeline

### Solution

```javascript
function pipeline(...funcs) {
  return (arg) => {
    let initialValue = 0;
    for (const func of funcs) {
      let value = func(initialValue === 0 ? arg : initialValue);
      initialValue = value;
    }

    return initialValue;
  };
}
```

## Food Ranking

### Solution

```javascript
function setup() {
  const buttons = Array.from(document.getElementsByTagName("button"));

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const clickedELementParent = button.parentElement;
      const prevParent = clickedELementParent.previousElementSibling;
      const nextParent = clickedELementParent.nextElementSibling;
      if (button.className === "up" && prevParent) {
        clickedELementParent.after(prevParent);
      }
      if (button.className === "down" && nextParent) {
        clickedELementParent.before(nextParent);
      }
    });
  });
}
```

## Image Gallery

### Solution

```javascript
function setup() {
  const buttons = Array.from(document.getElementsByTagName("button"));

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const clickedELementParent = button.parentElement;

      clickedELementParent.remove();
    });
  });
}
```

## Ensure

### Solution

```javascript
function ensure(value) {
  if (value === undefined) throw new Error("Value hasn't been passed");
  return value;
}
```

## Two Sum

### Solution

```javascript
function findTwoSum(numbers, sum) {
  const seen = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    const needed = sum - current;

    if (seen.has(needed)) {
      return [seen.get(needed), i];
    }
    seen.set(current, i);
  }

  return null;
}
```

## Check Digit

### Solution

```javascript
function createCheckDigit(membershipId) {
  let sum = membershipId;

  while (sum.length > 1) {
    sum = sum
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit), 0)
      .toString();
  }

  return parseInt(sum);
}
```

## Closest Relative

### Solution

```javascript
function closestRelative(parent, relativeName) {
  const queue = Array.from(parent.children);
  const tagName = relativeName.toUpperCase();

  while (queue.length > 0) {
    const current = queue.shift();

    if (current?.tagName === tagName) {
      return current;
    }

    if (current?.hasChildNodes()) {
      queue.push(...Array.from(current.children));
    }
  }

  return null;
}
```
