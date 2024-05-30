// Below is
class User {
    constructor(name) {
        // Invokes the setter.
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if(value.length < 4) {
            alert("Name is too short.")
            return;
        }
        this.name = value;
    }
}
let user = new User("John");
console.log(user.name);
user = new User("");
