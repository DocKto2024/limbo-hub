document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("wordInput");
  const button = document.getElementById("submitWord");
  const message = document.getElementById("mysteryMessage");

  // Thing with word to enter
  const dictionary = {
    "meg": () => message.textContent = "Shard of the past.",
    "limbo": () => message.textContent = "Your new home.",
    "ferg": () => message.textContent = "Free Explorers.",
    "free explorers": () => message.textContent = "FERG.",
    "async": () => message.textContent = "Evil corporation.",
    "wb": () => message.textContent = "They love ways.",
    "wayfarers": () => message.textContent = "They love ways.",
    "blanky": () => message.textContent = "Your friend.",
    "tanky": () => message.textContent = "Your big friend.",
    "mold": () => message.textContent = "I like this kind of salad.",
    "truth": () => message.textContent = "You dont want to know.",
    "exit": () => message.textContent = "Page not found.",
    "noclip": () => message.textContent = "It flickers.",
    "void": () => message.textContent = "It listens.",
    "door": () => message.textContent = "It flickers.",
    "god": () => message.textContent = "Left this place.",
    "brick": () => message.textContent = "Thats alot of bricks.",
    "olympic": () => message.textContent = "It makes my eyes hurt.",
    "error": () => message.textContent = "Error.",
    "confer": () => message.textContent = "Another goverment kind.",
    "alleycats": () => message.textContent = "They love brick,",
    "67": () => message.textContent = "Do you think its funny.",
    "zeph": () => message.textContent = "We will remember you.",
    "level 0": () => message.textContent = "Looks infinite.",
    "pivot": () => message.textContent = "I like this gmod guy.",
    "forbt": () => message.textContent = "No idea what to say.",
    "ea": () => message.textContent = "You mean entities.",
    "entities": () => message.textContent = "Kind of lifeforms.",
    "skibidi": () => message.textContent = "Bro… :skull:",
    "hawk tuah": () => message.textContent = "GET OUT-",
    "help": () => message.textContent = "No.",
    "pls": () => message.textContent = "Never.",
    "password": () => message.textContent = "Please try again.",
    "again": () => message.textContent = "Please try again later.",
    "again later": () => message.textContent = "GET OUT-",
  };

  function checkWord() {
    const word = input.value.trim().toLowerCase();
    if (dictionary[word]) {
      dictionary[word]();
    } else {
      message.textContent = "…Nothing stirs.";
    }
  }

  button.addEventListener("click", checkWord);

  // Enter event DO NOT TOUCH
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") checkWord();
  });

});
