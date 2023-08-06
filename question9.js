// Example array
const arr = [1 , 2 ,999 ,56, "Mithun" , 1234 , "PW"];

let result = null;

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if (typeof element === 'string' ) {
    result = element;
    break;
  
} }

if (result) {
  console.log("First mixture string in the array:", result) } 
