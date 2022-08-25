const ADVICE_API_URL = "https://api.adviceslip.com/advice";

let advice_id = document.getElementById("advice_id");
let advice_ = document.getElementById("advice");

let dice = document.querySelector(".dice");

const advice = async () => {
	const response = await fetch(ADVICE_API_URL);
	const data = await response.json();
	addToDom(data);
};

const addToDom = (data) => {
	advice_id.textContent = data.slip.id;
	advice_.textContent = data.slip.advice;
};

advice();

dice.addEventListener("click", () => {
	advice();
});
