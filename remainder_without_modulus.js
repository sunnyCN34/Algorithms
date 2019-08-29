function fiddle() {
  let x = 0,
    i;
  for (i = 0; i < 1; i++) {
    console.log("fiddle");
    console.log("args- " + arguments[0] + " See the object array " + arguments.length);
  }
}
fiddle("seg");

// 22/5 is equal to 22-5= 17, 17-5= 12, 12-5= 7, 7-5= 2 finally remainder is 2

function manager(upper, lower) {

  while (upper > lower) {
    upper = upper - lower;
  }
  console.log("remainder= " + upper);
}
manager(22, 5);

function remainder(upper, lower) {
	let remain=0;
  for (i = 0; i < upper; i++) {
    if (upper > lower) {
      upper = upper - lower;
      
    }
  }
 console.log("new remainder= "+ upper);
}
remainder(22,5);