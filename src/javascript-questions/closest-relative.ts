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
