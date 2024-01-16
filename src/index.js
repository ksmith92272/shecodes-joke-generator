function showJoke(response) {
	let jokeElement = document.getElementById("joke");
	let joke = response.data.answer;
	jokeElement.innerHTML = `${joke}`;
}

let apiKey = `6atoab0f92eca3d102a54e7250f4dd0f`;
let apiContext = `You are a polite and helpful AI assistant. Your answer should be clear and consise; no longer than a sentence. Please include the years in service.`;
let apiPrompt = `Who was the first female president in the world?`;

let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${apiContext}&key=${apiKey}`;

axios.get(apiURL).then(showAnswer);
