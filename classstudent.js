class Student {
    constructor(name, roll, year) {
        this.name = name;
        this.roll = roll;
        this.year = year;

        console.log(this.name);
        console.log(this.roll);
        console.log(this.year);
    }
}

let s1 = new Student("Nischal", 101, 2);
let s2 = new Student("Dhor", 102, 3);
let s3 = new Student("keechak", 103, 4);