# TestDome Solutions

A collection of TestDome questions and their solutions.

## Table of Contents

- [Game Platform (Speed Calculator)](#game-platform)
- [Reorder Tasks)](#reorder-tasks)
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
