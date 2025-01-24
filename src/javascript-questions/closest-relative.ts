export function closestRelative(
  parent: Element,
  relativeName: string
): Element | null {
  if (parent.nodeName === relativeName.toUpperCase()) {
    return parent;
  }

  for (const child of Array.from(parent.children)) {
    const closestChild = closestRelative(child, relativeName);
    if (closestChild) {
      console.log(closestChild.textContent);

      return closestChild;
    }
  }

  return null;
}
// Example case
document.body.innerHTML =
  "<James>" +
  "  <Mike>m</Mike>" +
  "  <Sarah>" +
  "    <Mike>p</Mike>" +
  "  </Sarah>" +
  "</James>";

/*

  parent = James

  parent.children = [dave,sarah]

  closestChild = 



  */
