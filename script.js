window.onload = function () {
  const question = document.getElementById("question");
  const eightBall = document.getElementById("eight-ball");
  const eight = document.getElementById("eight");
  const answer = document.getElementById("answer");
  const answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, signs point to yes",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
  ];

  eightBall.addEventListener("click", () => {
    if (question.value.length < 1) {
      alert("Please enter a question");
    }
  });
};
