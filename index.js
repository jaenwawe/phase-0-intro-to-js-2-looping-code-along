function countDown(count){
    while (count >= 0 ) {
    console.log(count--);
    } 
}


function writeCards(name, event){
    let copyNames = [];
    for (let count = 0; count < name.length; count++) {
      copyNames.push(`Thank you, ${name[count]}, for the wonderful ${event} gift!`);
      } 
return copyNames;
}