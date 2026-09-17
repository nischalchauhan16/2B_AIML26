class Student {
    static count = 0;

    constructor(rollNo, name, marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;

        Student.count++;
    }

    displayResult() {
        console.log("Roll No:", this.rollNo);
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);

        if (this.marks >= 40) {
            console.log("Pass");
        } else {
            console.log("Fail");
        }

        console.log(" ");
    }

    static displayCount() {
        console.log("Total Students:", Student.count);
    }
}

let s1 = new Student(101, "Nischal", 85);
let s2 = new Student(102, "Rohit", 35);
let s3 = new Student(103, "Sarthak", 72);

s1.displayResult();
s2.displayResult();
s3.displayResult();

Student.displayCount();