const email = "codecamp@gmail.com";
// undefined
email.includes("@");
// true
email.split("@");
// (2) ['codecamp', 'gmail.com']
let userMail = email.split("@")[0];
// undefined
userMail;
// 'codecamp'
let company = email.spl;
// undefined
let companyes = email.split("@")[1];
// undefined
companyes;
// 'gmail.com'
let maskingMail = [];
// undefined
maskingMail.push(userMail[0]);
// 1
maskingMail.push(userMail[1]);
// 2
maskingMail.push(userMail[2]);
// 3
maskingMail.push(userMail[3]);
// 4
maskingMail.push(userMail[4]);
// 5
maskingMail.push(userMail[5]);
// 6
maskingMail.push(userMail[6]);
// 7
maskingMail.push(userMail[7]);
// 8
maskingMail;
// (8) ['c', 'o', 'd', 'e', 'c', 'a', 'm', 'p']

maskingMail.pop();
// 'p'
maskingMail.pop();
// 'm'
maskingMail.pop();
// 'a'
maskingMail.pop();
// 'c'
maskingMail;
// (4) ['c', 'o', 'd', 'e']
maskingMail.push("*");
// 5
maskingMail.push("*");
// 6
maskingMail.push("*");
// 7
maskingMail.push("*");
// 8
maskingMail.join("");
// 'code****'
const result = maskingMail.concat(companyes);
// undefined
result;
// (9) ['c', 'o', 'd', 'e', '*', '*', '*', '*', 'gmail.com']
let result2 = result.join("");
// undefined
result2;
// 'code****gmail.com'
