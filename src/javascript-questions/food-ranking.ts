enum Movement {
  UP = "up",
  DOWN = "down",
}

export function setup() {
  const buttons = Array.from(document.getElementsByTagName("button"));

  buttons.forEach((button: HTMLButtonElement) => {
    button.addEventListener("click", () => {
      const clickedELementParent = button.parentElement as HTMLElement;
      const prevParent =
        clickedELementParent.previousElementSibling as HTMLElement;
      const nextParent = clickedELementParent.nextElementSibling as HTMLElement;
      if (button.className === Movement.UP && prevParent) {
        clickedELementParent.after(prevParent);
      }
      if (button.className === Movement.DOWN && nextParent) {
        clickedELementParent.before(nextParent);
      }
    });
  });
}

// Example case
document.body.innerHTML = `<ol>
    <li><button class="up">Up!</button>Taco<button class="down">Down!</button></li>
    <li><button class="up">Up!</button>Pizza<button class="down">Down!</button></li>
    <li><button class="up">Up!</button>Eggs<button class="down">Down!</button></li>
  </ol>`;

document.getElementsByTagName("button")[2].click();
