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
    },
    {
        id: 3,
        text: "You find a flashlight and use it to look around outside. The night is eerily quiet, and the dense woods surrounding you seem to absorb any sound you make. You shine the flashlight in the direction your friend went, but there's no response.",
        options: [
            {
                text: "Venture to the nearby wood to search for your friend.",
                nextText: 5
            },
            {
                text: "Stay by the car to wait, hoping your friend will return.",
                nextText: 6
            }
        ]
        /* ADD ITEM HERE */
    },
    {
        id: 4,
        text: "It's dark outside, you can't see a thing.",
        options: [
            {
                text: "Look around the car",
                nextText: 3
            }
        ]
    },
    {
        id: 5,
        text: `
        You decide to venture further into the woods to search for your friend, even though the night is eerily 
        quiet, and the dense woods seem to swallow any sound you make. With your flashlight in hand, you explore 
        deeper into the darkness, calling out for your friend.
        
        <p>Despite your efforts, your friend's voice remains distant and elusive. It's as if they've vanished into 
        the heart of the woods. You continue to search, but the mystery of their disappearance deepens.
        
       <p> Unlocked Ending: Missing.
        `,
        options: [
            {
                text: "Look around the car",
                nextText: 3
            }
        ]
    },
];