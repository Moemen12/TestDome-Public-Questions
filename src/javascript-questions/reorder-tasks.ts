export function initialize(): void {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button: HTMLButtonElement) => {
    button.addEventListener("click", () => {
      const clickedBtnParent = button.parentElement as HTMLDivElement;
      const currentSpan = clickedBtnParent.children.item(0) as HTMLSpanElement;

      const nextParent = button.parentElement
        ?.nextElementSibling as HTMLDivElement;
      const prevParent = button.parentElement
        ?.previousElementSibling as HTMLDivElement;

      if (button.className === "downButton") {
        nextParent.prepend(currentSpan);
        clickedBtnParent.prepend(nextParent.children.item(1) as HTMLElement);
      } else {
        prevParent.prepend(currentSpan);
        clickedBtnParent.prepend(prevParent.children.item(1) as HTMLElement);
      }
    });
  });
}

document.body.innerHTML = `
  <div>
      <span>Prepare presentation</span>
      <button class="downButton" type="button">&darr;</button>
  </div>
  <div>
      <span>Read emails</span>
      <button class="downButton" type="button">&darr;</button>
      <button class="upButton" type="button">&uarr;</button>
      </div>
  <div>
      <span>Monthly report</span>
      <button class="upButton" type="button">&uarr;</button>
  </div>`;

// initialize();

// document.querySelectorAll("button")[0].click();
// document.querySelectorAll("button")[3].click();
// document.querySelectorAll("button")[1].click();
