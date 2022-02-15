const helloWorld = () =>{
    const hello = "Hello World";
    console.log(hello);
}

helloWorld();

var scope = "im global";

const funcitionScope = () =>{
    var scope = "i am just a local";
    const func = () => {
        return scope
    }
    console.log(func());
}

funcitionScope()
console.log(scope);