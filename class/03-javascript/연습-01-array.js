let classmate = ["철수", "유리", "짱구"];
// undefined
classmate[0];
// '철수'
classmate[1];
// '유리'
classmate[2];
// '짱구'
classmate.incl;
// undefined
classmate.includes("짱구");
// true
classmate.includes("훈이");
// false
classmate.includes("철수");
// true
classmate.length;
// 3
classmate.push("맹구");
// 4
classmate.includes("맹구");
// true
classmate.length;
// 4
classmate;
// (4) ['철수', '유리', '짱구', '맹구']
classmate.pop();
// '맹구'
classmate;
// (3) ['철수', '유리', '짱구']
