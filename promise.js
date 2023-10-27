function printcards(no,text){
    return new Promise((resolve,reject)=>{
        console.log("Start")
            console.log(`Make sure you print${no} cards`)
        const printcards=false;
        if(true){
                    console.log(`Thanks you so much for these beutifull ${no}cards`);
                    resolve(no);
        }
        else{
            console.log("you irresponsible!");
            reject(0);
            
        }
        
    })
}
printcards(100, "NIT")
  .then((result) => {
    console.log(`Resolved with value: ${result}`);
  })
  .catch((error) => {
    console.log(`Rejected with value: ${error}`);
  });
