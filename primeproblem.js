function checkprime(num){
let factor =0;

for(let i =1; i<=num; i++){
  if(num%i==0){
    factor++;
  }
  else if(factor==2)
    console.log(num, "is prime");
  } else {
  console.log(num, "is not prime");
}

}

for(let i =2; i<=n; i++){
  if(checkprime(i))
    console.log(i, "is prime")
}
