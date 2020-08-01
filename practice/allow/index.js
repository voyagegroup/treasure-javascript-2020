function regular() {
    return this;
}

const obj = { method: regular };

console.log(obj.method() === obj);

const allow = () => {
    return this;
}

const obj2 = { method: allow };

console.log(obj2.method() === obj2);

this.name = "bar";

const obj3 = {
    name: "foo",
    regular: function() {
        console.log("[regular] this.name: " + this.name);
    },
    allow: () => {
        console.log("[regular] this.name: " + this.name);
    }
}

obj3.regular();
obj3.allow();