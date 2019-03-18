// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You wake up a subway train. The lights are dim and flickering. You could barely see. You think you see a random body lying on the floor across the cart.",
            choices: [
                {
                    text: "Look around",
                    nextLevel: "newspaper",
                },

                {
                    text: "Check your phone",
                    nextLevel: "phone",
                },
            ]
        },

        phone: {
            phone_dead: {
                message: "Your phone is dead.",
                choice: [
                    {
                        text: "Look around",
                        nextLevel: "newspaper",
                    },
                    ]
            },
            phone_alive: {
                message: 'You have a AMBER Alert telling everyone in New York City to evacuate the area. Confused, you look up what is happening on the news. You read an article with the title "The Zombie Apocalypse is real and it is now in New York City!" As you are about to click on the article to read it, your phone dies.',
                choice: [
                    {
                      text: "Look around with caution...",
                      nextLevel: "caution",
                    },
                    ]
            },
        },
        
        
        newspaper: {
            background_image: "",
            music: "",
            message: "You see a bloody newspaper clipping next to you. Read it?",
            choices: [
                {
                    text: "Sure, why not?",
                    nextLevel: "train_moving",
                },
                
                {
                    text: "No. I don't have time for that. I need to figure out what is going on now!",
                    nextLevel: "dangerous_train_moving",
                },
            ]
        },
        
        caution: {
            background_image: "",
            music: "",
            message: "You know about the zombie apocalypse now. You must move with caution and you need a weapon immediately.",
            choices: [
                {
                    
                },
            ]
        }

    }
};
