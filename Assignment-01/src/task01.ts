type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

function fetchData(): Promise<User[]> {
  //Promise response type <User[]>
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      return data.map((user: User) => ({
        id: user?.id,
        name: user?.name,
        email: user?.email,
        phone: user?.phone,
      }));
    });
}

function createTable(data: User[]) {
  const table = document.createElement("table");
  table.style.margin = "2rem auto";
  table.style.border = "1px solid grey";
  table.style.borderRadius = "5px";
  table.style.padding = "1rem";
  const headerRow = table.insertRow();
  Object.keys(data[0]).forEach((key) => {
    const th = document.createElement("th");
    th.style.border = "1px solid grey";
    th.style.borderRadius = "5px";
    th.style.padding = "1rem";
    th.style.textTransform = "uppercase";
    th.innerText = key;
    headerRow.appendChild(th);
  });
  data.forEach((item) => {
    const row = table.insertRow();
    Object.values(item).forEach((val) => {
      const cell = row.insertCell();
      cell.innerText = val.toString();
      cell.style.border = "1px solid grey";
      cell.style.borderRadius = "5px";
      cell.style.padding = ".5rem";
    });
  });
  return table;
}

function taskDetails(name: string, taskNum: number): HTMLDivElement {
  const div = document.createElement("div");
  div.style.border = "1px solid gray";
  div.style.width = "40%";
  div.style.margin = "0 auto";
  div.style.padding = "1rem";
  div.style.borderRadius = "5px";
  const heading1 = document.createElement("h3")! as HTMLHeadingElement;
  const heading2 = document.createElement("h3")! as HTMLHeadingElement;
  const heading3 = document.createElement("h3")! as HTMLHeadingElement;
  heading1.innerText = `Name: ${name}`;
  heading2.innerText = `Typescript Task: ${
    taskNum?.toString()?.length > 1 ? taskNum : "0" + taskNum
  }`;
  heading3.innerText = `Public Api: https://jsonplaceholder.typicode.com/users`;
  div.appendChild(heading1);
  div.appendChild(heading2);
  div.appendChild(heading3);
  return div;
}

async function displayTable() {
  try {
    const data = await fetchData();
    const table = createTable(data);
    document.body.appendChild(taskDetails("Muhammad Faizan", 1));
    document.body.appendChild(table);
  } catch (error) {
    console.error(error);
  }
}

displayTable();
