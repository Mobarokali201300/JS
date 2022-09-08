// function add(num1,num2 =0){
//      return num1 + num2;
// }
// const total = add(12,10);
// console.log(total);
//-------------------2------------------
// const firstName = 'Justin';
// const lastName = 'TimberLake';
// const fullName = firstName+ " " +lastName + " "+"is a good boy";
// const fullName2 = `${firstName} ${lastName} is a good boy.`;
// const multiLine = `I love you 
// I miss you`
// console.log(multiLine);
// console.log(fullName);
// console.log(fullName2);
//--------------------Arrow.Js-----------------
// function doubleIt(num){
//      return num*2;
// }
// const doubleIt = function(num){
//      return num*2;
// }
// const add = (x,y=1) => x * y;
// const result = add(10,3);
// console.log(result);
//----------------------3dots-------------------
// const ages =[21,12,31,45];
// const ages2 =[78,90,65];
// const allages = ages.concat(ages2);
// const allages2 = [...ages, ...ages2];
// console.log(allages);
// console.log(allages2);

// const myMoney =[650,546,280,980];
// const maximum = Math.max(...myMoney);
// console.log("Maximum amount :",maximum);
//--------------------Class-----------------
// class Student {
//      constructor(id,name){
//           this.id = id;
//           this.name = name;
//           this.school ="Hashil High School";
//      }
// }
// const Student1 = new Student(12,"Mobarok");
// const Student2 = new Student(22,"Ashraful");
// const Student3 = new Student(32,"Shikha");
// console.log(Student1.name,Student2.id,Student3);
//-------------------Inheritance-------------------

// class parent{
//      constructor() {
//          this.fatherName ="Moznu Mia ";
//      }
// }
// class child extends parent{
//      constructor(name) {
//           super();
//           this.name = name;
//      }
//      getFullName(){
//           return this.name+" "+this.fatherName;
//      }
// }
// const baby = new child("Mobarok");
// console.log(baby.getFullName());
// console.log("Relation:",baby);


// const person ={
//      name :'Mobarok',
//      age :21,
//      fatherName :'Moznu Mia',
//      motherName :'Lipi Begum'
// }
// const {name,age,fatherName}=person;
// console.log(name,age,fatherName);



