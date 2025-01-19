export function newMessage(topicName: string) {
  const divElement = document.getElementsByTagName("p");

  for (const div of divElement) {
    const name = div.getAttribute("data-topic-name");
    if (name === topicName) {
      div.style.backgroundColor = "red";
    }
  }

  return divElement;
}

// Example case
document.body.innerHTML = `<div>
    <p data-topic-name="discussion">General discussion</p>
    <p data-topic-name="bugs">Bugs</p>
    <p data-topic-name="animals">Animals</p>
  </div>`;
