// let num = 10
// while (num < 20){
//     print (num)
//     num += 4

//     if (num == 18) 
//         break;
// }


class Person {
    constructor(name, age, email, fullMarks, passMarks, obtainedMarks, subject) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.subject = subject;
        this.fullMarks = fullMarks;
        this.passMarks = passMarks;
        this.obtainedMarks = obtainedMarks;
    }
        isPass() {
            if (this.obtainedMarks >= 80)
                console.log(`${this.name} with email address ${this.email} has secured distinction in ${this.subject} with ${this.obtainedMarks} marks.`)
            else if(this.obtainedMarks >50){
                console.log(`${this.name} with email address ${this.email} has passed ${this.subject} with ${this.obtainedMarks} marks.`)}
            else {
                console.log(`${this.name} has failed the exam.`)
            }


        } 
    }



let student = new Person('Dipak', 34, 'knight.rider200072@gmail.com', 100, 50, 60, 'Maths')
let student1 = new Person('Sita', 32, 'sita123@gmail.com', 100, 50, 30, 'Social')
let student2 = new Person('Ruja', 30, 'rujasubba123@gmail.com', 100, 50, 88, 'Science')
   
console.log(student)
console.log(student1)

student.isPass()
student1.isPass()
student2.isPass()