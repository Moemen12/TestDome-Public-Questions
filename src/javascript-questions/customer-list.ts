interface Customer {
  name: string;
  email: string;
}

export function showCustomers(customers: Customer[], targetList: HTMLElement) {
  const ul = document.querySelector("ul") as HTMLUListElement;

  customers.forEach((customer: Customer) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const email = document.createElement("p");

    p.textContent = customer.name;
    email.textContent = customer.email;

    li.append(p);
    ul.append(li);

    p.addEventListener("click", () => {
      if (li.contains(email)) {
        li.removeChild(email);
        return;
      }
      li.append(email);
    });
  });
}
document.body.innerHTML = `
  <div>
    <ul id="customers">
    </ul>
  </div>
  `;
