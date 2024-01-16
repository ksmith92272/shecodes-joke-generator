function fetchJoke() {
	let jokeElement = document.getElementById("joke");
	jokeElement.innerHTML = `Generating a joke for you.<br />Please wait...`;

	let apiKey = `6atoab0f92eca3d102a54e7250f4dd0f`;
	let apiContext = `You are an optimistic, polite and helpful AI assistant with a great sense of humor. Your response should be concise and should only be the joke. Do not inlcude a lead in. Include emojis. Please behave.`;
	let apiPrompt = `Please tell me a funny joke about dogs`;

	let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${apiContext}&key=${apiKey}`;

	axios.get(apiURL).then(showJoke);
}

function showJoke(response) {
	let jokeElement = document.getElementById("joke");
	let joke = response.data.answer;
	new Typewriter(jokeElement, {
		strings: `${joke}`,
		autoStart: true,
		cursor: ``,
		delay: 75,
	});
}

let buttonElement = document.getElementById("joke-button");
buttonElement.addEventListener("click", fetchJoke);
