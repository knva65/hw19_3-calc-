






// переменная, в которой хранится выбранное математическое действие
let op; 

 // функция расчёта
 function func() {
  class Calculator {
    constructor(num1, num2) {
      this.num1 = num1;
      this.num2 = num2;
    }
  
    static Sum(numA, numB) {
      return numA + numB;
  }
  static Sub(numA, numB) {
    return numA - numB;
}

static Mul(numA, numB) {
  return numA * numB;
}

static Div(numA, numB) {
  return numA / numB;
}

  }
     // переменная для результата
   let result;
   // получаем первое и второе число
   let num_1 = Number(document.getElementById("num1").value);
   let num_2 = Number(document.getElementById("num2").value);
   
    
   if (op === '/' && num_2 === 0) { alert ("На ноль делить нельзя!!!"); return;}

   // смотрим, что было в переменной с действием, и действуем исходя из этого
   switch (op) {
     case '+':
       result = Calculator.Sum(num_1, num_2);
       break;
     case '-':
       result = Calculator.Sub(num_1, num_2);
       break;
     case '*':
       result = Calculator.Mul(num_1, num_2);
       break;
     case '/':
       result = Calculator.Div(num_1, num_2);
       break;  
   }

   // отправляем результат на страницу
   document.getElementById("result").innerHTML = result;

}



 function Clear() {
  document.getElementById("result").innerHTML = '';
  document.getElementById("num1").value = '';
  document.getElementById("num2").value = '';
 }