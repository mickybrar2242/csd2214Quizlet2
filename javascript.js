function welcomeFn(TimeInMs){
const futureTime = Date.now() + TimeInMs;

while(futureTime > Date.now()){}
}
welcomeFn(3000);
console.log("Function call has just ended");