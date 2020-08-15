// Crate a function show the quantity of asterisks
// the line contains

showAsterisk(10);

function showAsterisk(lines){
  // let standard = '';
  // for (let line =1; line <= lines; line++)
  // {
  //   standard += '*';
  // }

  for(let line = 1; line <= lines; line ++)
  {
    let standard = '';
    for(let i=0; i<line; i++)
    {
      standard += '*';
    }

    console.log(standard);
   
  }
}