let tareas;

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => {
//     tareas = json;
//     console.log(tareas);
//   })
//   .catch((error) => console.log(error));

const updateCompleted = async (tarea) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/" + tarea.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tarea),
      }
    );
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

const createTask = (tarea) => {
  const li = document.createElement("li");
  const liText = document.createTextNode(tarea.title);
  li.appendChild(liText);

  li.addEventListener("click", async () => {
    console.log("Completar: " + tarea.id);
    tarea.completed = true;

    // console.log(li.classList);

    if (tarea.completed) {
      li.classList.add("completed");
    }

    console.log(tarea);

    updateCompleted(tarea);
  });

  //   console.log(li);
  const ul = document.querySelector("#taskList");
  ul.appendChild(li);
};

const getTasks = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    // console.log(response)
    const tareas = await response.json();
    console.log(tareas);

    tareas.forEach(createTask);
  } catch (error) {
    console.log(error);
  }
};

getTasks();
