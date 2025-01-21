export function setup() {
  const buttons = Array.from(document.getElementsByTagName("button"));

  buttons.forEach((button: HTMLButtonElement) => {
    button.addEventListener("click", () => {
      const clickedELementParent = button.parentElement as HTMLElement;

      clickedELementParent.remove();
    });
  });
}

// Example case.
document.body.innerHTML = `
  <div class="image">
    <img src="https://bit.ly/3xXPxPR" alt="First">
    <button class="remove">X</button>
  </div>
  <div class="image">
    <img src="https://bit.ly/4de3sQr" alt="Second">
    <button class="remove">X</button>
  </div>`;
