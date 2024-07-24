const month = "November"; 

let sign = "";
let fortune = "";

const randomNumber = Math.floor(Math.random() * 3) + 1;

if (month === "March" || month === "April") {
  sign = "Aries";
  if (randomNumber === 1) {
    fortune = "Today is your day!";
  } else if (randomNumber === 2) {
    fortune = "Adventure awaits you.";
  } else {
    fortune = "Be bold and take risks.";
  }
} else if (month === "April" || month === "May") {
  sign = "Taurus";
  if (randomNumber === 1) {
    fortune = "Stability is coming your way.";
  } else if (randomNumber === 2) {
    fortune = "A financial opportunity will present itself.";
  } else {
    fortune = "Trust in your instincts.";
  }
} else if (month === "May" || month === "June") {
  sign = "Gemini";
  if (randomNumber === 1) {
    fortune = "Communication is key.";
  } else if (randomNumber === 2) {
    fortune = "A new friend will enter your life.";
  } else {
    fortune = "Stay curious and open-minded.";
  }
} else if (month === "June" || month === "July") {
  sign = "Cancer";
  if (randomNumber === 1) {
    fortune = "Home and family are your focus.";
  } else if (randomNumber === 2) {
    fortune = "Nurture your relationships.";
  } else {
    fortune = "Your empathy will guide you.";
  }
} else if (month === "July" || month === "August") {
  sign = "Leo";
  if (randomNumber === 1) {
    fortune = "You will be in the spotlight.";
  } else if (randomNumber === 2) {
    fortune = "Confidence will bring success.";
  } else {
    fortune = "A creative project will flourish.";
  }
} else if (month === "August" || month === "September") {
  sign = "Virgo";
  if (randomNumber === 1) {
    fortune = "Attention to detail will pay off.";
  } else if (randomNumber === 2) {
    fortune = "Organize and declutter.";
  } else {
    fortune = "A health goal will be achieved.";
  }
} else if (month === "September" || month === "October") {
  sign = "Libra";
  if (randomNumber === 1) {
    fortune = "Balance is essential.";
  } else if (randomNumber === 2) {
    fortune = "Partnerships will strengthen.";
  } else {
    fortune = "Seek harmony in conflicts.";
  }
} else if (month === "October" || month === "November") {
  sign = "Scorpio";
  if (randomNumber === 1) {
    fortune = "Embrace transformation.";
  } else if (randomNumber === 2) {
    fortune = "A secret will be revealed.";
  } else {
    fortune = "Trust your intuition.";
  }
} else if (month === "November" || month === "December") {
  sign = "Sagittarius";
  if (randomNumber === 1) {
    fortune = "Travel is on the horizon.";
  } else if (randomNumber === 2) {
    fortune = "Expand your knowledge.";
  } else {
    fortune = "Optimism will lead you forward.";
  }
} else if (month === "December" || month === "January") {
  sign = "Capricorn";
  if (randomNumber === 1) {
    fortune = "Hard work will be rewarded.";
  } else if (randomNumber === 2) {
    fortune = "A career opportunity is coming.";
  } else {
    fortune = "Stay disciplined and focused.";
  }
} else if (month === "January" || month === "February") {
  sign = "Aquarius";
  if (randomNumber === 1) {
    fortune = "Innovation is your strength.";
  } else if (randomNumber === 2) {
    fortune = "A new idea will inspire you.";
  } else {
    fortune = "Embrace your individuality.";
  }
} else if (month === "February" || month === "March") {
  sign = "Pisces";
  if (randomNumber === 1) {
    fortune = "Creativity will flow.";
  } else if (randomNumber === 2) {
    fortune = "A dream will come true.";
  } else {
    fortune = "Emotional connections will deepen.";
  }
}

console.log(`Your sign is ${sign}. Here is your fortune: ${fortune}`);
