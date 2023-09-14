const Quote = document.querySelector(".quote");
const writer = document.querySelector(".author");
const btn = document.querySelector(".btn");

let arr = [
  {
    quote: "I'm not here to be perfect, I'm here to be real.",
    writer: "Lady Gaga",
  },
  {
    quote: "I'm not interested in money. I just want to be wonderful.",
    writer: "- Marilyn",
  },
  {
    quote:
      "The only thing that feels better than winning is winning when nobody thought you could.",
    writer: " - Hank Aaron",
  },
  {
    quote: "If you can dream it, you can do it.",
    writer: " - Walt Disney",
  },
  {
    quote:
      "Don't let anyone tell you what you can't do. Follow your dreams and persist.",
    writer: "- Barack Obama",
  },
  {
    quote:
      "The most important thing is to enjoy your life - to be happy - it's all that matters.",
    writer: "- Steve Jobs",
  },
  {
    quote: "If you want something done, ask a busy person to do it.",
    writer: "- Laura Ingalls Wilder",
  },
  {
    quote:
      "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
    writer: " - John Quincy Adams",
  },
  {
    quote:
      "The best way to find out if you can trust somebody is to trust them.",
    writer: "- Ernest Hemingway",
  },
  {
    quote:
      "The only Limit to our realization of tomorrow will be our doubts of today.",
    writer: "- Franklin D. Roosevelt",
  },
];

// console.log(randomIndex);

btn.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  var show = arr[randomIndex].quote;
  Quote.innerHTML = show;
  var dow = arr[randomIndex].writer;
  writer.innerHTML = dow;
  console.log(show);
});
