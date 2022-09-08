const students =[
     {id: 21, name:"Mobarok"},
     {id: 78, name:"Ashraful"},
     {id: 41, name:"Shikha"},
     {id: 91, name:"Badol"}
];

const names = students.map( s=> s.name);
const ids = students.map(s=>s.id);
const bigger = students.filter(s => s.id<70);
console.log(bigger);
console.log(names);
console.log(ids);
