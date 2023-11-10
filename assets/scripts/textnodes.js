const textNodes = [
    {
        id: 1,
        text: "Welcome.. Are you ready to begin?",
        options: [
            {
                text: "Yes",
                nextText: 2
            },
            {
                text: "About",
                nextText: 99
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
        text: `
        You find a flashlight and use it to look around outside. 
        The night is eerily quiet, and the dense woods surrounding you seem to absorb any sound you make. 
        You shine the flashlight in the direction your friend went, but there's no response.
        `,
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
        `,
        end: "Unlocked Ending: Missing.",
        /* ADD ENDING HERE */
        options: [
            {
                text: "Start Over",
                nextText: 0
            },
            {
                text: "Credits",
                nextText: 98,
            }
        ]
    },
    {
        id: 6,
        text: `
        You choose to stay by the car and wait for your friend's return, hoping they'll come back soon. 
        As you sit in the dimly lit car, the minutes stretch on, and the night 
        feels increasingly eerie. You hear strange rustling sounds in the woods, making your nerves jangle with tension.
        `,
        options: [
            {
                text: "Gather your courage and decide to investigate the source of the rustling sounds in the woods.",
                nextText: 5
            },
            {
                text: "Honk the car horn to try and get your friend's attention.",
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        text: `
        You opt to honk the car horn, 
        hoping the sound will carry through the quiet night and reach your friend. 
        You press down on the horn, and the sudden noise pierces the silence, echoing through the trees.
        <p>Moments later, you hear a distant response – a faint shout from deeper within the woods. 
        It sounds like your friend might be in trouble.
        `,
        options: [
            {
                text: "Stay by the car and continue honking the horn to guide your friend back.",
                nextText: 8
            },
            {
                text: "Follow the sound of your friend's voice into the woods.",
                nextText: 9
            }
        ]
    },
    {
        id: 8,
        text: `
        You choose to stay by the car and continue honking the horn, hoping your friend will follow the sound and 
        return safely. The repeated blasts of the horn fill the night air, but there's no immediate response.
        <p>As you keep honking, you suddenly notice something eerie. Shadows moving among the trees on the edge 
        of your vision. The rustling sounds grow louder, and it becomes clear that something is approaching your 
        car from the woods. You begin to feel a growing sense of unease.
        `,
        options: [
            {
                text: "Keep honking the horn, hoping that the noise will deter whatever is coming closer.",
                nextText: 10
            },
            {
                text: "Abandon the car and make a run for it into the woods in the opposite direction.",
                nextText: 11
            }
        ]
    },
    {
        id: 9,
        text: `
        You decide to follow the sound of your friend's voice deeper into the woods, 
        guided by the faint shouts. With your flashlight in hand, you make your way through the dark forest, 
        pushing aside branches and navigating the uneven terrain.
        <p>As you make your way through the dark forest, you discover two intriguing items partially 
        buried under a pile of leaves near the clearing. Something in your mind tells you to pick one.
        `,
        options: [
            {
                text: "A rusted, old key.",
                nextText: 12
            },
            {
                text: "A weathered map with cryptic symbols.",
                nextText: 13
            }
        ]
    },
    {
        id: 10,
        text: `
        You choose to keep honking the horn, hoping that the noise will deter whatever is coming closer. 
        The horn's blaring continues, echoing through the night, and you anxiously wait for your friend to return.
        <p>Suddenly, a figure emerges from the darkness. It's your friend, disheveled and frightened, 
        stumbling towards the car. You breathe a sigh of relief as they reach the vehicle.
        `,
        options: [
            {
                text: "Ask your friend what happened and what they saw in the woods.",
                nextText: 14
            },
            {
                text: "Quickly get in the car and drive away from this eerie place.",
                nextText: 15
            }
        ]
    },
    {
        id: 11,
        text: `
        You decide to abandon the car and make a run for it into the woods in the opposite 
        direction from the approaching threat. Heart pounding, you dash into the darkness, guided only by your 
        flashlight's beam.
        <p>As you venture deeper into the woods, you realize you've left behind the relative safety of the car, 
        and the woods become denser and more ominous.
        `,
        options: [
            {
                text: "Keep running.",
                nextText: 16
            }
        ]
    },
    {
        id: 12,
        text: `
        After picking up the rusted key, you continue to search for your friend, using the key as a potential clue. 
        As you move deeper into the woods, you stumble upon an ancient, overgrown door partially concealed by vines 
        and leaves. The key in your hand seems like it might fit the lock.
        <p>With a sense of curiosity and trepidation, you decide to try the key in the door's lock. 
        To your surprise, it fits perfectly, and the door creaks open to reveal a hidden, underground chamber.
        `,
        options: [
            {
                text: "Enter the underground chamber and explore its secrets.",
                nextText: 17
            },
            {
                text: "Choose not to enter and instead continue searching for your friend.",
                nextText: 18
            }
        ]
    },
    {
        id: 13,
        text: `
        You decide to pick up the weathered map with cryptic symbols. The map is covered in strange markings that 
        you can't quite decipher. It appears to be a map of the surrounding woods, but it's unlike any map you've 
        seen before.
        <p>With the map in hand, you decide to continue searching for your friend, hoping that the cryptic symbols might hold a clue to their whereabouts.
        <p>As you follow the sound of your friend's distant shouts and investigate the rustling sounds in the woods, you eventually reunite with your friend. The map remains a mysterious item, and you both decide to return to the car and leave the eerie forest behind, leaving the map's secrets for another time.
        `,
        end: "Unlocked Ending: You got a map!",
        /* ADD ENDING HERE */
        options: [
            {
                text: "Start Over",
                nextText: 0
            },
            {
                text: "Credits",
                nextText: 98,
            }
        ]
    },
    {
        id: 14,
        text: `
        Relieved to have your friend back, you ask them what happened and what they saw in the woods. 
        They explain that they got lost and disoriented while looking for a suitable spot, and they 
        heard strange sounds and glimpsed unsettling shadows. It seems like something unnatural might be 
        in these woods.
        `,
        options: [
            {
                text: "Decide to investigate the source of these strange occurrences in the woods together.",
                nextText: 19
            },
            {
                text: "Quickly get in the car and drive away from this eerie place.",
                nextText: 15
            }
        ]
    },
];