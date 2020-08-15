// Create a method can read propriety of a object and 
// show just the proprieties of string type in this object

const movie =
{
  title: 'Titanic',
  year: 1997,
  director: 'Tim Schafer',
  character: 'Rose'
}

showProprieties(movie);

function showProprieties(obj) {
  for (prop in obj)
    if (typeof obj[prop] === 'string')
      console.log(prop, obj[prop]);
}


