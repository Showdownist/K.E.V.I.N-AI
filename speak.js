// Initialize speech synthesis and speech recognition
const synth = window.speechSynthesis;
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = false; // Stop recognition after each command

// List of soothing messages
const soothingMessages = [
    "Everything will be okay. You are stronger than you think.",
    "I'm here for you. You're not alone.",
    "Remember, tough times don't last, but tough people do.",
    "Take a deep breath. You've got this.",
    "You are loved, and you are enough.",
    "It's okay to not be okay sometimes, Boss.",
    "You matter, Boss, and your feelings are valid.",
    "Take things one step at a time, Boss.",
    "I’m here for you, Boss, and I care about you.",
    "It’s okay to take a break and breathe, Boss.",
    "Your strength is greater than you realize, Boss.",
    "This moment will pass, and you will get through it, Boss.",
    "It's okay to ask for help when you need it, Boss.",
    "You are worthy of love and kindness, Boss.",
    "Your struggles do not define you, Boss.",
    "You are doing the best you can, and that is enough, Boss.",
    "One day at a time, one moment at a time, Boss.",
    "Even the darkest moments pass, Boss.",
    "You are stronger than you think, Boss.",
    "It’s okay to rest and take care of yourself, Boss.",
    "You don’t have to face this alone, Boss.",
    "You are valued and appreciated, Boss.",
    "Healing is a journey, not a destination, Boss.",
    "Take a deep breath, and take things slow, Boss.",
    "You are more than your anxiety or depression, Boss.",
    "You deserve to feel better, and I believe you will, Boss.",
    "It’s okay to feel the way you do, Boss.",
    "Your feelings are valid, and it’s okay to express them, Boss.",
    "Sometimes, taking it moment by moment is enough, Boss.",
    "You are not a burden, you are important, Boss.",
    "You are allowed to take things at your own pace, Boss.",
    "What you’re feeling right now is temporary, Boss.",
    "It’s okay to have bad days, they don’t last forever, Boss.",
    "You don’t have to be perfect, just be yourself, Boss.",
    "I believe in your ability to heal and grow, Boss.",
    "It's okay to reach out for support when you need it, Boss.",
    "You deserve peace, and I’m here to help you find it, Boss.",
    "Take care of yourself, you are worth it, Boss.",
    "Your mental health is just as important as your physical health, Boss.",
    "You are deserving of love and compassion, Boss.",
    "I’m proud of the progress you’ve made, no matter how small it seems, Boss.",
    "It’s okay to ask for a pause and take time for yourself, Boss.",
    "Your journey is unique, and that’s okay, Boss.",
    "You don’t have to have all the answers right now, Boss.",
    "You are doing great, even if it doesn’t feel like it, Boss.",
    "You have already shown so much strength by facing this, Boss.",
    "Even in difficult times, you are capable of getting through it, Boss.",
    "Be gentle with yourself during tough moments, Boss.",
    "You are not defined by your struggles or challenges, Boss.",
    "It’s okay to lean on others for support, Boss.",
    "There is no rush, healing takes time, Boss.",
    "I’m here for you, anytime you need to talk, Boss.",
    "You are not weak for feeling the way you do, you’re human, Boss.",
    "You are capable of handling what comes your way, Boss.",
    "You are not your thoughts, you are much more, Boss.",
    "It’s okay to cry, it’s a sign of strength to feel, Boss.",
    "You deserve to be happy, and happiness will come, Boss.",
    "There’s no shame in needing time to heal, Boss.",
    "You are doing amazing by showing up each day, Boss.",
    "Your mental health is important, and you deserve to focus on it, Boss.",
    "You are not alone, and there’s support available to you, Boss.",
    "You’ve made it through every challenge so far, and you can keep going, Boss.",
    "Even in silence, you are heard and understood, Boss.",
    "Take your time to heal, there’s no timeline, Boss.",
    "You are allowed to rest and recover when needed, Boss.",
    "You’re allowed to take care of yourself first, Boss.",
    "You are allowed to feel however you feel, and that’s okay, Boss.",
    "Progress, no matter how small, is still progress, Boss.",
    "You don’t have to have it all figured out right now, Boss.",
    "Healing doesn’t happen overnight, and that’s perfectly okay, Boss.",
    "You are worthy of kindness and compassion from yourself and others, Boss.",
    "Every step forward, no matter how small, is worth celebrating, Boss.",
    "Your journey matters, and it’s okay to take it at your own pace, Boss.",
    "Your health, both mental and physical, comes first, Boss.",
    "It’s okay to be kind to yourself, even when things are tough, Boss.",
    "You have an amazing strength within you, Boss.",
    "You are not a failure because of your struggles, Boss.",
    "It’s okay to need time to rest and recharge, Boss.",
    "You are allowed to feel vulnerable, it’s part of being human, Boss.",
    "Even the smallest progress is still progress, and it’s important, Boss.",
    "You are doing the best you can, and that’s enough, Boss.",
    "Your efforts, no matter how small, are important and worthwhile, Boss.",
    "You have the strength to overcome any obstacles, Boss.",
    "Healing is not linear, and that’s completely okay, Boss.",
    "It’s okay to have ups and downs, as long as you keep going, Boss.",
    "Every day is a new opportunity for growth, no matter how small, Boss.",
    "You are not broken, you are just healing, Boss.",
    "It’s okay to ask for help, you don’t have to do it alone, Boss.",
    "Your mental health matters, and you are deserving of care, Boss.",
    "You are worthy of happiness, and that happiness will come back to you, Boss.",
    "You have come so far, even when it feels like you haven’t, Boss.",
    "You are brave for reaching out and facing what you’re going through, Boss.",
    "It’s okay to feel lost, it’s part of the healing process, Boss.",
    "Every step you take, no matter how small, brings you closer to healing, Boss.",
    "You are a survivor, and you have the strength to keep going, Boss.",
    "No feeling is permanent, even the tough ones will pass, Boss.",
    "You are more than enough, just as you are, Boss.",
    "It’s okay to be a work in progress, we all are, Boss.",
    "You’ve faced tough times before, and you’ve made it through, Boss.",
    "I believe in you, even on the days you don’t believe in yourself, Boss.",
    "You are deserving of support and care, Boss.",
    "You are not alone in this, and help is always available, Boss.",
    "It’s okay to give yourself a break when you need it, Boss.",
    "You are worthy of peace and calm in your life, Boss.",
    "Taking small steps is still progress, and that matters, Boss.",
    "You deserve to feel proud of yourself, even on the tough days, Boss.",
    "You are allowed to feel your emotions without judgment, Boss.",
    "It’s okay to take time for yourself, you deserve it, Boss.",
    "You are not your worst moments, you are so much more, Boss.",
    "Each day is a new chance for things to get better, Boss.",
    "You are allowed to grow and heal at your own pace, Boss.",
    "You deserve the same kindness and compassion you show others, Boss.",
    "It’s okay to ask for support when things get hard, Boss.",
    "You have already made so much progress, and it’s okay to be proud of that, Boss.",
    "You are not defined by your struggles or setbacks, Boss.",
    "Even on the hardest days, you are still moving forward, Boss.",
    "You are worthy of love, care, and understanding, Boss."
];

// Function to speak a given text
function speak(text, callback) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = callback || (() => {});
    synth.speak(utterance);
}

// Function to start listening for user input
function listen() {
    recognition.start();
    console.log("Listening...");

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        console.log("Heard:", transcript);

        if (transcript.includes("help")) {
            speak("I'm here to help. Remember, you are stronger than you know.", listen);
        } else if (transcript.includes("keep talking")) {
            keepTalking();
        } else if (transcript.includes("thanks")) {
            speak("You're welcome, Boss! I'm always here for you.", listen);
        } else if (transcript.includes("exit")) {
            speak("Goodbye, Boss. Take care!", () => recognition.stop());
        } else {
            speak("Sorry, I didn't understand that. Please say 'help', 'keep talking', 'thanks', or 'exit'.", listen);
        }
    };

    recognition.onerror = (event) => {
        console.error("Error occurred in recognition:", event.error);
        speak("Sorry, there was an error. Please try again.", listen);
    };

    recognition.onend = () => {
        console.log("Stopped listening.");
    };
}

// Function to deliver one soothing message at a time
function keepTalking() {
    const randomMessage = soothingMessages[Math.floor(Math.random() * soothingMessages.length)];
    speak(randomMessage, listen);
}

// Initial greeting and activation
speak("Kevin Emotional Support Artificial Intelligence for speaking activated. Welcome, Boss!", () => {
    speak("How can I assist you?", listen);
});
