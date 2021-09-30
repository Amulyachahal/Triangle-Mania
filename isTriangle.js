const button = document.querySelector("#btn-check");
const inputAngle = document.querySelectorAll(".input-angle");
const output = document.querySelector("#output");

const check = () => {
  const angle1 = Number(inputAngle[0].value);
  const angle2 = Number(inputAngle[1].value);
  const angle3 = Number(inputAngle[2].value);
  const sum = angle1 + angle2 + angle3;
  if (sum === 180) {
    console.log("ok triangle");
    output.innerText = "is triangle";
  } else {
    output.innerText = "Not a Triangle";
  }
};

const checkTriangle = () => {
  check();
};
button.addEventListener("click", checkTriangle);
