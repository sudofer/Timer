// input = process.argv.slice(2);


for (let num of input){
  num = Number(num);
  if (num > 0 && !isNaN(num) ){
    console.log(typeof num);
    setTimeout(() => {

      process.stdout.write('ALARM');
  
    }, num * 1000)
    
  }

}