/* I followed a walkthrough by web dev simplified for the basic structure for the game */
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

/* Typing effect from medium.com - I asked chatgpt to convert into vanilla js */
async function typeSentence(sentence, eleRef, delay = 50) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);
        eleRef.textContent += letters[i];
        i++;
    }
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = '';

    if (textNode.text) {
        await typeSentence(textNode.text, textElement);
    }

    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: "Welcome.. Are you ready to begin?",
        options: [
            {
                text: "Yes",
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: "You have woken up in your car, it's night time and you had dozed off for a moment. It takes you a moment to get your bearings but you remember that your friend who had been travelling with you had left the car to relieve themself.",
        options: [
            {
                text: "Look around the car",
                nextText: 3
            },
            {
                text: "Get out to search for your friend",
                nextText: 4
            }
        ]
    }
];

startGame()