console.log('Async Await');
console.log('-----------');

/* function helloWorld(caller) {
    return new Promise((resolve) => {
        const time = Math.floor(Math.random() * 2000);
        return setTimeout(() => {
            resolve(`${time} Hello! from #${caller}`);
        }, time);
    });
}

const hello = async (idx) => {
    // async function
    const msg = await helloWorld(idx);
    console.log(`#${idx} replying -> ${msg}`);
};

const msg1 = async (idx) => {
    // async arrow function
    const msg = await helloWorld(idx);
    console.log(`msg ${idx} replying -> ${msg}`);
};

for (let i = 0; i < 5; i += 1) {
    hello(i);
}
 */

function grabTheKey(theKey) {
    console.log(`${theKey} is on my hand.`);
}

function openTheDoor(theDoor) {
    console.log(`I'm opening the ${theDoor}`);
}

function walkInto(thePlace) {
    console.log(`I'm walking into ${thePlace}`);
}

function pickUpThePhone() {
    console.log(`Talking to my mom!`);
}

function textTo(toWhom, message) {
    console.log(`"${message}" is sent to ${toWhom}`);
}

function ringThePhone() {
    console.log(`Your phone is ringing`);
    pickUpThePhone();
}

setTimeout(ringThePhone(), Math.floor(Math.random() * 2000));
grabTheKey('Main key');
textTo('Mike', 'See you tomorrow at 2pm');
openTheDoor('Main door');
walkInto('My Home');