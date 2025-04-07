figma.showUI(__html__, { width: 300, height: 400 });

// Category data
const categories = [
  {
    id: 'gaming',
    name: 'Video Game Characters',
    characters: [
      { first: "Samus", last: "Aran" },
      { first: "Cloud", last: "Strife" },
      { first: "Lara", last: "Croft" },
      { first: "Solid", last: "Snake" },
      { first: "Nathan", last: "Drake" },
      { first: "Master", last: "Chief" },
      { first: "Chris", last: "Redfield" },
      { first: "Claire", last: "Redfield" },
      { first: "Leon", last: "Kennedy" },
      { first: "Ada", last: "Wong" },
      { first: "Albert", last: "Wesker" },
      { first: "Barry", last: "Burton" },
      { first: "Gordon", last: "Freeman" },
      { first: "Trevor", last: "Philips" },
      { first: "Arthur", last: "Hastings" },
      { first: "Jill", last: "Valentine" },
      { first: "Tommy", last: "Vercetti" },
      { first: "Isaac", last: "Clarke" },
      { first: "Trevor", last: "Belmont" },
      { first: "Simon", last: "Belmont" },
      { first: "Hank", last: "Anderson" },
      { first: "Todd", last: "Williams" },
      { first: "Rose", last: "Chapman" },
      { first: "Adam", last: "Chapman" },
      { first: "Gavin", last: "Reed" },
      { first: "Elijah", last: "Kamski" },
      { first: "Ethan", last: "Mars" },
      { first: "Shaun", last: "Mars" },
      { first: "Madison", last: "Paige" },
      { first: "Norman", last: "Jayden" },
      { first: "Scott", last: "Shelby" },
      { first: "Lauren", last: "Winter" },
      { first: "Grace", last: "Mars" },
      { first: "Carter", last: "Blake" },
      { first: "Charles", last: "Kramer" },
      // Silent Hill 1
      { first: "Harry", last: "Mason" },              
      { first: "Cheryl", last: "Mason" },
      { first: "Cybil", last: "Bennett" },
      { first: "Dahlia", last: "Gillespie" },
      { first: "Alessa", last: "Gillespie" },
      // Silent Hill 2
      { first: "James", last: "Sunderland" },          
      { first: "Mary", last: "Sunderland" },
      { first: "Maria", last: "" },
      { first: "Angela", last: "Orosco" },
      { first: "Eddie", last: "Dombrowski" },
      { first: "Laura", last: "" },
      // Silent Hill 3
      { first: "Heather", last: "Mason" },
      { first: "Douglas", last: "Cartland" },
      { first: "Claudia", last: "Wolf" },
      { first: "Vincent", last: "Smith" },
      // Resident Evil 7, Village
      { first: "Ethan", last: "Winters" },            
      { first: "Mia", last: "Winters" },
      { first: "Meryl", last: "Silverburgh" }
    ]
  },
  {
    id: 'superhero',
    name: 'Superhero Real Names',
    characters: [
      // Marvel Heroes
      { first: "Peter", last: "Parker" },
      { first: "Tony", last: "Stark" },
      { first: "Steve", last: "Rogers" },
      { first: "Natasha", last: "Romanoff" },
      { first: "Carol", last: "Danvers" },
      { first: "Scott", last: "Lang" },
      { first: "Bruce", last: "Banner" },
      { first: "Stephen", last: "Strange" },
      { first: "Wanda", last: "Maximoff" },
      { first: "Sam", last: "Wilson" },
      { first: "James", last: "Rhodes" },
      { first: "Clint", last: "Barton" },
      { first: "Matt", last: "Murdock" },
      { first: "Jessica", last: "Jones" },
      { first: "Luke", last: "Cage" },
      { first: "Danny", last: "Rand" },
      { first: "Frank", last: "Castle" },
      { first: "Wade", last: "Wilson" },
      // DC Heroes
      { first: "Bruce", last: "Wayne" },
      { first: "Clark", last: "Kent" },
      { first: "Diana", last: "Prince" },
      { first: "Barry", last: "Allen" },
      { first: "Arthur", last: "Curry" },
      { first: "Victor", last: "Stone" },
      { first: "Hal", last: "Jordan" },
      { first: "John", last: "Stewart" },
      { first: "Oliver", last: "Queen" },
      { first: "Dick", last: "Grayson" },
      { first: "Barbara", last: "Gordon" },
      { first: "Jason", last: "Todd" },
      { first: "Tim", last: "Drake" },
      { first: "Damian", last: "Wayne" },
      { first: "Kara", last: "Zorel" },
      { first: "Billy", last: "Batson" },
      { first: "Ray", last: "Palmer" },
      { first: "Carter", last: "Hall" },
      { first: "Dinah", last: "Lance" },

    ]
  },
  {
    id: 'movies',
    name: 'Famous Movie Characters',
    characters: [
      { first: "Indiana", last: "Jones" },
      { first: "James", last: "Bond" },
      { first: "Ellen", last: "Ripley" },
      { first: "Tony", last: "Montana" },
      { first: "Rocky", last: "Balboa" },
      { first: "John", last: "Wick" },
      { first: "Jason", last: "Bourne" },
      { first: "Sherlock", last: "Holmes" },
      { first: "Erin", last: "Brockovich" },
      { first: "Tyler", last: "Durden" },
      { first: "Clarice", last: "Starling" },
      { first: "Hannibal", last: "Lecter" },
      { first: "Katniss", last: "Everdeen" },
      // Star Wars
      { first: "Luke", last: "Skywalker" },
      { first: "Darth", last: "Vader" },
      { first: "Han", last: "Solo" },
      { first: "Leia", last: "Organa" },
      { first: "Obi-Wan", last: "Kenobi" },
      // Lord of the Rings
      { first: "Frodo", last: "Baggins" },
      { first: "Aragorn", last: "Strider" },
      { first: "Legolas", last: "Greenleaf" },
      // Harry Potter
      { first: "Harry", last: "Potter" },
      { first: "Hermione", last: "Granger" },
      { first: "Ron", last: "Weasley" },
      { first: "Albus", last: "Dumbledore" },
      { first: "Severus", last: "Snape" },
      // The Matrix
      { first: "Thomas", last: "Anderson" },
      { first: "John", last: "Smith" },
      // Indiana Jones
      { first: "Indiana", last: "Jones" },
      { first: "Marion", last: "Ravenwood" },
      { first: "Henry", last: "Jones" },
      // Back to the Future
      { first: "Marty", last: "McFly" },
      { first: "Doc", last: "Brown" },
      { first: "Biff", last: "Tannen" },
      // The Godfather
      { first: "Michael", last: "Corleone" },
      { first: "Vito", last: "Corleone" },
      { first: "Sonny", last: "Corleone" },
      // Pulp Fiction
      { first: "Jules", last: "Winnfield" },
      { first: "Vincent", last: "Vega" },
      { first: "Mia", last: "Wallace" },
      // Forrest Gump
      { first: "Forrest", last: "Gump" },
      { first: "Jenny", last: "Curran" },
      // The Dark Knight
      { first: "Bruce", last: "Wayne" },
      { first: "Harvey", last: "Dent" },
      { first: "Alfred", last: "Pennyworth" },
      { first: "Rachel", last: "Dowes" },
      { first: "Salvatore", last: "Maroni" },
      { first: "Carmine", last: "Falcone" },
      { first: "Jim", last: "Gordon" },
      { first: "Edward", last: "Nigma" },
      { first: "Harley", last: "Quinzel" },
      
    ]
  }
];

function getRandomCharacter(characters) {
  return characters[Math.floor(Math.random() * characters.length)];
}

function formatName(character, nameType, nameFormat) {
  switch (nameType) {
    case 'first':
      return character.first;
    case 'last':
      return character.last;
    case 'full':
      switch (nameFormat) {
        case 'last_first':
          return `${character.last}, ${character.first}`;
        case 'first_last':
          return `${character.first} ${character.last}`;
        case 'first_last_initial':
          return `${character.first} ${character.last[0]}.`;
        default:
          return `${character.first} ${character.last}`;
      }
    default:
      return `${character.first} ${character.last}`;
  }
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'get-categories') {
    figma.ui.postMessage({ type: 'categories-loaded', categories });
    return;
  }

  if (msg.type === 'replace-text') {
    const selection = figma.currentPage.selection;
    
    if (selection.length === 0) {
      figma.notify('Please select a text layer first');
      return;
    }

    const category = categories.find(c => c.id === msg.category);
    
    if (!category) {
      figma.notify('Category not found');
      return;
    }

    for (const node of selection) {
      if (node.type === "TEXT") {
        const character = getRandomCharacter(category.characters);
        const newName = formatName(character, msg.nameType, msg.nameFormat);
        
        // Load the font before setting the text
        await figma.loadFontAsync(node.fontName);
        node.characters = newName;
      }
    }
  }
  
  // Make sure to close the plugin when we're done
  figma.closePlugin();
}; 