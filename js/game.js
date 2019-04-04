// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "",
    background_image: "dark_train.jpg",
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
                    nextLevel: Math.random() < 0.6? "phone_dead" : "phone_alive",
                },
            ]
        },

    
        phone_dead: {
            background_image: "dark_train.jpg",
            music: "",
            message: "Your phone is dead.",
            choices: [
                {
                    text: "Look around",
                    nextLevel: "newspaper",
                },
                ]
        },
        
        phone_alive: {
            background_image: "dark_train.jpg",
            music: "",
            message: 'You have a AMBER Alert telling everyone in New York City to evacuate the area. Confused, you look up what is happening on the news. You read an article with the title "The Zombie Apocalypse is real and it is now in New York City!" As you are about to click on the article to read it, your phone dies.',
            choices: [
                {
                  text: "Look around with caution...",
                  nextLevel: "caution",
                },
                ]
        },

        
        
        newspaper: {
            background_image: "dark_train.jpg",
            music: "",
            message: "You see a bloody newspaper clipping next to you. Read it?",
            choices: [
                {
                    text: "Sure, why not?",
                    nextLevel: "reading_news",
                },
                
                {
                    text: "No. I don't have time for that. I need to figure out what is going on now!",
                    nextLevel: "confused_and_body",
                },
            ]
        },
        
        reading_news: {
            background_image: "dark_train.jpg",
            music: "",
            message: 'The newspaper is covered in blood. You read "ZOMBIE VIRUS OUTBREAK COMES TO THE USA! NEW YORK CITY COULD BE THE NEXT CITY HIT!" Blood covers the rest of the newspaper, making it impossible to read the rest of the article.',
            choices: [
                {
                    text: "Look around with caution...",
                    nextLevel: "caution",
                },
            ]
        },
        
        caution: {
            background_image: "dark_train.jpg",
            music: "",
            message: "You know about the zombie apocalypse now. You must move with caution and you need a weapon immediately.",
            choices: [
                {
                    text: "Look around again",
                    nextLevel: "body_on_train",
                },
                
                {
                    text: "Stand up to search around the train",
                    nextLevel: "",
                },
            ]
        },
        
        confused_and_body: {
            background_image: "dark_train.jpg",
            music: "",
            message: "You wonder what is going on as you try to remember why you were in the subway. As the lights flicker again, you see the random body at the end of the subway again. You stare at it. When the lights flicker again, you see that the body is moving.",
            choices: [
                {
                    text: "Yell to them",
                    nextLevel: "train_attack",
                },
                
                {
                    text: "Go over to them quietly and investigate",
                    nextLevel: Math.random() < 0.6? "falling_down_attack" : "see_zombie_before_attack",
                },
                
                {
                    text: "Ignore it for now and look again",
                    nextLevel: "",
                },
            ]
        },
        
        body_on_train: {
            background_image: "dark_train.jpg",
            music: "",
            message: "The lights flicker and you see a body at the end of the train. The lights flicker again and you can see that the body is moving. You remember that you're in the middle of the Zombie Apocalypse. Could that be a person or a zombie?",
            choices: [
                {
                    text: "Yell to them",
                    nextLevel: "train_attack",
                },
                
                {
                    text: "Go over to them quietly and investigate",
                    nextLevel: Math.random() < 0.4? "falling_down_attack" : "see_zombie_before_attack",
                },
                
                {
                    text: "Ignore it for now and look again",
                    nextLevel: "train_options",
                },
            ]
        },
        
        falling_down_attack: {
            background_image: "dark_train.jpg",
            music: "",
            message: "As you quietly make your way over to the other side of the train, you slip on something and fall down. There is a loud scream that comes from the body, as it gets up and makes its way to you. Before you can react, it is on top of you. After years of playing and watching Zombie games and movies, you recognize that this thing before you is a zombie! As it tries to bite you, you see a knife stuck on the zombie's left shoulder.",
            choices: [
                {
                    text: "Take the kinfe and kill the zombie",
                    nextLevel: "",
                },
                
                {
                    text: "Push the zombie off of you and make a run for it!",
                    nextLevel: "",
                },
            ]
        },
        
        see_zombie_before_attack: {
            background_image: "dark_train.jpg",
            music: "",
            message: "You successfully reach the other side of the train without making a sound. After years of playing and watching Zombie games and movies, you recognize that this thing before you is a zombie! You see that the zombie has a knife stuck on its left shoulder.",
            choices: [
                {
                    text: "Take the knife out and try to kill it",
                },
                
                {
                    text: "Make a run for it!",
                },
            ]
        },
        
        train_options: {
            background_image: "dark_train.jpg",
            music: "",
            message: "",
            choices: [
                {
                    
                },
                
                {
                    
                },
                
                {
                    
                },
            ]
        },

    }
};
