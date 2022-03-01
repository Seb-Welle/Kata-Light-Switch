const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const body = document.body;
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
    btn.classList.toggle("button-dark");
    document.title = "Good Night";
  } else {
    body.style.backgroundColor = "black";
    btn.classList.toggle("button-dark");
    document.title = "Good Morning";
  }
});
