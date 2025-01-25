export function closestRelative(
  parent: Element,
  relativeName: string
): Element | null {
  const queue = Array.from(parent.children);
  const tagName = relativeName.toUpperCase();

  while (queue.length > 0) {
    const current = queue.shift()!;

    if (current.tagName === tagName) {
      return current;
    }

    // Only add children if they exist (optimization)
    if (current.hasChildNodes()) {
      queue.push(...Array.from(current.children));
    }
  }

  return null;
}

// Example case
document.body.innerHTML =
  "<James>" +
  "  <ali>" +
  "    <Mike></Mike>" +
  "  </ali>" +
  "  <Mike></Mike>" +
  "  <Sarah>" +
  "    <Mike></Mike>" +
  "  </Sarah>" +
  "</James>";

// const queue: Element[] = Array.from(parent.children);
// const tagName = relativeName.toUpperCase();

// while (queue.length > 0) {
//   const current = queue.shift()!;

//   // Use tagName instead of nodeName for consistency
//   if (current.tagName === tagName) {
//     return current;
//   }

//   // Only add children if they exist (optimization)
//   if (current.hasChildNodes()) {
//     queue.push(...Array.from(current.children));
//   }
// }

// return null;
