const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const output = document.querySelector("#output");

const calculateArea = () => {
  const area = Number(sides[0].value * sides[1].value) / 2;
  output.innerText = "Area is : " + area;
};
areaBtn.addEventListener("click", calculateArea);
