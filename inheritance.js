class hello {
    constructor() {
        console.log("hello constructor");
    }
}

class hi extends hello {
    constructor() {
        super();
        console.log("hi constructor");
    }
}

let h = new hi();