const phrases = [
    "No!",
    "Are you sure?",
    "Really sure?",
    "Pookie Please?",
    "Don't do this to me",
    "I am gonna cry....",
    "You're breaking my heart :(",
];

function createButton(text, onClick) {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", onClick);
    return button;
}

function App() {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.height = "100vh";

    let yesPressed = false;
    let noCount = 0;
    const yesButtonSize = noCount * 20 + 16;

    function NoClick() {
        noCount++;
        render();
    }

    function getNoButtonText() {
        return phrases[Math.min(noCount, phrases.length - 1)];
    }

    function handleYesClick() {
        yesPressed = true;
        render();
    }

    function render() {
        container.innerHTML = "";

        if (yesPressed) {
            const img = document.createElement("img");
            img.alt = "bear with heart";
            img.src = "https://media.tenor.com/ixzdyS0HrlkAAAAi/milk-and-mocha-kiss.gif";
            container.appendChild(img);

            const text = document.createElement("div");
            text.style.marginTop = "10px";
            text.classList.add("text");
            text.textContent = "Yay!";
            container.appendChild(text);
        } else {
            const img = document.createElement("img");
            img.alt = "bear with heart";
            img.src = "https://media.tenor.com/ixzdyS0HrlkAAAAi/milk-and-mocha-kiss.gif";
            container.appendChild(img);

            const valentineText = document.createElement("div");
            valentineText.style.marginTop = "10px";
            valentineText.textContent = "Will you be my valentine?";
            container.appendChild(valentineText);

            const buttonContainer = document.createElement("div");
            const yesButton = createButton("Yes", handleYesClick);
            const noButton = createButton(getNoButtonText(), NoClick);
            buttonContainer.style.marginTop = "10px";

            buttonContainer.appendChild(yesButton);
            buttonContainer.appendChild(noButton);

            container.appendChild(buttonContainer);
        }
    }

    render();
    return container;
}
