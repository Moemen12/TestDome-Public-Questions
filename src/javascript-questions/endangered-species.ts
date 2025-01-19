export function endangeredSpecies(continent: string) {
  const divElement = document.getElementsByTagName("li");

  for (const li of divElement) {
    const name = li.getAttribute("data-continent");
    if (name === continent) {
      return li.textContent;
    }
  }
}

// Example case
document.body.innerHTML = `<div>
      <ul>
          <li data-continent="North America">California condor</li>
          <li data-continent="Europe">Cave bear</li>
      </ul>
  </div>`;
