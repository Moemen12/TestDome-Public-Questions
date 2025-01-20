export function appendChildren(decorateDiv: (div: HTMLElement) => void) {
  let allDivs = Array.from(document.getElementsByTagName("div"));

  // or let allDivs = [...document.getElementsByTagName("div")];

  for (let i = 0; i < allDivs.length; i++) {
    let newDiv = document.createElement("div");

    decorateDiv(newDiv);

    allDivs[i].appendChild(newDiv);
  }
}

// Example case.
document.body.innerHTML = `
<div id="a">
  <div id="b">
  </div>
</div>`;
