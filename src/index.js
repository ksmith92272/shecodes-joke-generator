function fetchJoke() {
	let apiKey = `6atoab0f92eca3d102a54e7250f4dd0f`;
	let apiContext = `You are an optimist, polite and helpful AI assistant with a great sense of humor. Please behave.`;
	let apiPrompt = `Please tell me a hilarious dad joke`;

	let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${apiContext}&key=${apiKey}`;

	axios.get(apiURL).then(showJoke);
}

function showJoke(response) {
	let jokeElement = document.getElementById("joke");
	let joke = response.data.answer;
	jokeElement.innerHTML = `${joke}`;
}

let buttonElement = document.getElementById("joke-button");
buttonElement.addEventListener("click", fetchJoke);
