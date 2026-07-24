function getBallClass(num) {
  if (num <= 10) return "ball-yellow";
  if (num <= 20) return "ball-blue";
  if (num <= 30) return "ball-red";
  if (num <= 40) return "ball-gray";
  return "ball-green";
}

const btn1 = document.getElementById("gacha");
const result = document.getElementById("result");

btn1.addEventListener("click", () => {
  const numberSet = new Set();
  while (numberSet.size < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    numberSet.add(num);
  }

  const numbers = Array.from(numberSet);
  numbers.sort((a, b) => a - b);

  result.innerHTML = "";

  numbers.forEach((num) => {
    const ball = document.createElement("div");

    ball.className = `ball ${getBallClass(num)}`;
    ball.textContent = num;

    result.appendChild(ball);
  });
});
