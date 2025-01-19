# TestDome Solutions

A collection of TestDome questions and their solutions.

## Table of Contents

- [Game Platform (Speed Calculator)](#game-platform)
- [Reorder Tasks](#reorder-tasks)
- [Mega Store](#mega-store)
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
