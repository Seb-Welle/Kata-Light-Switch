const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const body = document.body;
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
  } else {
    body.style.backgroundColor = "black";
  }
});
