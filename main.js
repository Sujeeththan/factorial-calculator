function Calc(event) {
  event.preventDefault();
//   alert('hello')

const num1 = document.getElementById('num1').value;
const output = document.getElementById('output');
const  f = 1;

if (num1 === '' || num1 < 0) {
    output.value = 'Please enter a valid number!';
    return;
} else{
    for( i = 1; i <= num1; i++)  f *= i;{
     document.getElementById('output').innerHTML = f;
     output.value = `${num1}! = ${f}`;
}
}


}
