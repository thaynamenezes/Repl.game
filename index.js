const readlineSync = require('readline-sync')

let player = {
  userName: null,
  options: null,
  houses: null,
  classes: null,
  prank: null
};

console.log(`(This is my first year at Hogwarts, I'm extremely excited. Better find a seat before the sorting ceremony starts.) \n Dumbledore: "Welcome to Hogwarts! First years, today the sorting hat is going to place all of you in one of our four houses: Gryffindor, Hufflepuff, Ravenclaw, and Slytherin." \n (As soon as Prof. Dumbledore finishes his speech, someone starts a conversation with me)`);


player.userName = readlineSync.question('Hermione: "Hi, my name is Hermione. What is you name?"    ');

console.log(`Hermione: "Hi ${player.userName}, nice to meet you! Are you excited to start your first year?"`);

console.log()
player.options = readlineSync.question( "Options: Yes or No:   " );

player.options = player.options.toLowerCase();

switch(player.options) {
  case "yes":
    console.log( 'Hermione: "Me too, never been so thrilled!"' );
    break;
  case "no":
    console.log( 'Hermione: "Well, eventually I belive you will! :)"' );
    break;

  default:
    console.log( 'Hermione: "You are not quite sure? Eventually you will start to enjoy it!"' );
}

console.log(` (They start to call each name and assign us to one of the houses.) \n` + (`${player.userName.toUpperCase()}!!\n`) + `${player.userName}: (I think its my turn! The Selector Hat starts to analyze me to put me into one of the four houses. Hope he puts me into my favorite one!)`);


let houseChosen = false;

while(!houseChosen) {

console.log()
player.houses = readlineSync.question( "Options: Gryffindor, Hufflepuff, Ravenclaw, Slytherin:   ");

switch(player.houses.toLowerCase()) {
  case "gryffindor":
    console.log( `Sorting Hat: "You might belong in Gryffindor,
Where dwell the brave at heart,
Their daring, nerve, and chivalry
Set Gryffindors apart"`);
    houseChosen = true;
    break;
  case "hufflepuff":
    console.log( `Sorting Hat: "You might belong in Hufflepuff,
Where they are just and loyal,
Those patient Hufflepuffs are true,
And unafraid of toil."` );
    houseChosen = true;
    break;
  case "ravenclaw":
    console.log( `Sorting Hat: "You might belong in wise old Ravenclaw,
If you've a ready mind,
Where those of wit and learning,
Will always find their kind."` );
    houseChosen = true;
    break;
  case "slytherin":
  console.log( `Sorting Hat: "You might belong in Slytherin,
You'll make your real friends,
Those cunning folk use any means,
To achieve their ends."` );
      houseChosen = true;
      break;
  default:
    console.log( `Sorting Hat: "hm, I am not quite sure where to put you. This is very rare."` );
  }
}

console.log(`Hermione: "Great, we're in the same house, ${player.userName}!"`)

if (player.options === "yes") {
  player.classes = readlineSync.question(`Hermione: "What class are you most excited for?" \n
Options: Dark Magic, Potions and Flying:    `);

  player.classes = player.classes.toLowerCase();

  switch(player.classes) {
    case "dark magic":
      console.log( `Hermione: "Really? Snape kinda scares me."`);
      break;
    case "potions":
      console.log( `Hermione: "Yes, me too."`);
      break;
    case "flying":
      console.log( `Hermione: "Not my favorite, but I agree that flying seems nice."`);
      break;
    default:
      console.log( `Hermione: "I also think this class is great."` );
  }
}

else {
  console.log(`Hermione: "So what are you most excited for?"`)

  player.prank = readlineSync.question(`${player.userName}: "I'm really here to learn how to prank with the ghosts. What do you know about them?"\n
  Options: Sir Nicholas, Peeves, Fat Friar, Grey Lady and Bloody Baron:   `);

  player.prank = player.prank.toLowerCase();

  switch(player.prank) {
    case "sir nicholas":
      console.log( `Hermione: "The Gryffindor House ghost is 'Nearly Headless Nick'. He is known as a friendly ghost who was nearly beheaded, but the job was poorly executed, which was how he obtained the nickname of 'Nearly Headless Nick'. He prefers to be addressed as 'Sir Nicholas'."`);
      break;
    case "peeves":
      console.log( `Hermione: "Peeves is the most notorious and troublesome poltergeist in British history. Unlike the overwhelming majority of his colleagues, Peeves has a physical form, though he is able to become invisible at will. His looks reflect his nature, which those who know him would agree is a seamless blend of humour and malice"`);
      break;
    case "fat friar":
      console.log( `Hermione: "The Hufflepuff House is haunted by the Fat Friar, who was executed because senior churchmen grew suspicious of his ability to cure the pox merely by poking peasants with a stick."`);
      break;
    case "grey lady":
      console.log( `Hermione: "The Ravenclaw House ghost is the Grey Lady, also known as Helena Ravenclaw. The least talkative of the house ghosts the Grey Lady, who is long-haired and beautiful. She was the daughter of Rowena Ravenclaw, making her the only house ghost to be directly related to one of the four Hogwarts founders."`);
      break;
    case "bloody baron":
      console.log( `Hermione: "The Slytherin House ghost is the Bloody Baron. He is well known for being extremely unsocial and many students, including those of his own House, are known to be slightly afraid of him."`);
      break;
    default:
      console.log( `Hermione: "Well, I prefer talking about classes."` );
    }
  }

console.log(`${player.userName}: "This is going to be a great year. I'm extremely happy that I got into ${player.houses} with you Hermione!"`)
