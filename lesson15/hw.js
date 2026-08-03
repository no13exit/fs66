console.log(false == 0); //true, действие нестрогое (тип данных не проверяется))
console.log(false === 0); // false, действие строгое (тип данных проверяется)
// 
console.log("" == 0); //true, действие нестрогое (тип данных не проверяется))
console.log("" === 0); // false, действие строгое (тип данных проверяется)

console.log(null == undefined); // true, действие нестрогое (тип данных не проверяется))
console.log(null === undefined); // false, действие строгое (тип данных проверяется)

console.log("55" == 55); // true, действие нестрогое (тип данных не проверяется))
console.log("55" === 55); // false, действие строгое (тип данных проверяется)

console.log("true" == true); // true, действие нестрогое (тип данных не проверяется))
 console.log("true" === true); // false, действие строгое (тип данных проверяется)

console.log((0.2 + 0.1 - 0.3) == true); // false, 5.551115123125783e-17 === 5.5 * 10^-17, see pic related 
console.log(0.2 + 0.1 - 0.3); //just outputting the result of the calculation to see what it is
console.log((0.2 + 0.1 - 0.3) === true); // false

console.log((0.2 + 0.1 - 0.3) == false); // false

console.log((0.2 + 0.1 - 0.3) === false); // false