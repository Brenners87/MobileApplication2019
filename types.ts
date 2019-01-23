//boolean
let flag: boolean = true;
console.log("boolean -- Value assigned to flag is:" + flag);

//String
let colour: string = "orange";
console.log("String -- Colour is " + colour);

//Number
let num: number = 12;
console.log("number -- value is " + num);

//any
let anything: any = 6;
console.log("any -- this could be a number --" + anything);
anything = "Hi";
console.log("any -- has changed to a string --" + anything);


num = add(3,5);
console.log("we are calling the add function, parameters 3 & 5 = "+num );

let stringCnt : number ;
stringCnt = count("Test 1");
console.log("String Test 1 has "+stringCnt+" characters" );

stringCnt = spaceRemove("Test 1");
console.log("Characters not including space is  "+stringCnt);

//moving on to functions
function add(x: number, y: number): number {
    return x + y;
}

//String coun t
function count(x:String): number {
    let y : number = 0;
    y = x.length;
    return y;
}

//Space Remove
function spaceRemove(x:String): number {
    let y : number = 0;
    y = x.replace(/\s+/,"").length;
    return y;
}
