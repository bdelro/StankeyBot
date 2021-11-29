function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function tellJoke(){
    let jokeArray = [
        "If you say AT&T backwards you sound like a Canadian Bomb Technician.",
        "Why did all the prisoners at the AT&T jail escape? \nBecause they had no bars on their cells!",
        "The CEO of AT&T just got married...\nThe service was okay, but the reception was terrible.",
        "Why did the turtle go to AT&T \nbecause he couldn't sprint",
        "I dont understand all the worry about net neutrality, because\n[Please make a £100 donation to AT&T for completion of this joke.]",
        "I work a desk job in an AT&T franchise building\nI can never get any work done because the internet keeps going down...",
        "I got an offer for an interview at AT&T....\nMom: what would you do if you got the job there?\nMe: Cell phones",
    ]
    let num = getRandomInt(jokeArray.length);
    return jokeArray[num];
}

module.exports = {tellJoke};