document.addEventListener("DOMContentLoaded", () => {
  var answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "Indubitably!",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Maybe baby",
    "Outlook good",
    "Sleep on it",
    "Yes",
    "Signs point to yes",
    "Don't count on it",
    "My reply is no",
    "YASSS KWEEN",
    "My sources say no",
    "Outlook not so good",
    "Ask your mom",
    "Very doubtful",
    "That's what she said",
    "Reply hazy, try again",
    "Don't ask me, I'm just a bubble",
    "Ask again later",
    "It's a no from me, dawg",
    "Better Call Saul!",
    "Cannot predict now",
    "I'm not a fortune teller",
    "Concentrate and ask again",
    "Indubitably so",
    "Nope",
    "Is this where you wanna be when Jesus comes back?",
    "It is in the stars",
    "May fortune be ever in your favor",
    "I highly doubt it",
    "As if!",
    "It do be like that"
  ];

  window.onload = function () {
    const eight = document.getElementById("eight");
    const answer = document.getElementById("answer");
    const eightball = document.getElementById("eight-ball");
    const question = document.getElementById("question");
    const bubble = document.getElementById("bubble");

    eight.innerText = "";
    const num = Math.floor(Math.random() * Math.floor(answers.length));


    eightball.addEventListener("click", function () {
      if (question.value.length < 1) {
        alert("Enter a question!");
      } else {
        answer.innerText = answers[num];
        bubble.style.visibility = "hidden";
      }
    });
  };
});
