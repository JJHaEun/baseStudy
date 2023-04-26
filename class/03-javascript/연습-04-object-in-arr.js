let student = [
  { name: "길동", pet: "강아지", house: "구로구" },
  { name: "철수", pet: "고양이", house: "관악구" },
  { name: "다희", pet: "미어켓", house: "강서구" },
];
// undefined
student;
// (3) [{…}, {…}, {…}]
student[0]["name"];
// '길동'
student[0].name;
// '길동'
student.length;
// 3
student[1]["house"];
// '관악구'
student[1].house;
// '관악구'
student[2].pet;
// '미어켓'
