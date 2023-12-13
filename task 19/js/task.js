// first practice
/*
function minSticks(step) 
{
    if (step === 0) 
    {
       return 0;
    }
   
    var sticks = [0,6,11];
   
    for (var i = 3; i <= step; i++) 
    {
       sticks[i] = 2 * sticks[i - 1] + 3 * sticks[i - 2];
    }
    return sticks[step];
}

console.log(minSticks(1));
console.log(minSticks(2));
*/

// second practice
/*
function isTrue(array) 
{
    if (array.length === 0) 
    {
        return 0;
    }

    var count = 0;
    for (var i = 0; i < array.length; i++) 
    {
        if (array[i] === true) 
        {
            count++;
        }
    }
    return count;
}

console.log(isTrue([true,true,true,true]))

*/

// third practice

/*
function getPerimeter(shape, num) 
{
    if (shape === "s") 
    {
        return num * 4;
    } 
    else if (shape === "c") 
    {
        return 2 * 3.14 * num;
    } 
    else 
    {
        return "Invalid shape!";
    }
}

console.log(getPerimeter("s", 5)); 
console.log(getPerimeter("c", 5)); 
console.log(getPerimeter("r", 5));
*/

//fourth practice
/*
function findEvenSum(arr) 
{
    var sum = 0;
        evenNums = [];

    for (var i = 0; i < arr.length; i++) 
    {
        if (arr[i] % 2 === 0) 
        {
            sum += arr[i];
            evenNums.push(arr[i]);
        }
    }

    console.log("Even numbers:", evenNums);
    console.log("Sum of even numbers:", sum);
}

findEvenSum([1, 2, 3, 4, 5, 6]);
*/

//fifth practice
/*
function findHiddenWord(inputString) 
{
    var words = inputString.split(" ") ;
        hiddenWord = "" ;
    for (var i = 0; i < words.length; i++) 
    {
        if (words[i].toLowerCase() === words[i]) 
        {
            hiddenWord = words[i];
            break;
        }
    }
    return hiddenWord;
}
console.log(findHiddenWord("SDNIDWDWDND word KJNJSDN"));
*/
//sixth practice
var object = {
    name: "ahmed",
    age: "55",
    city: ["Egypt", "Alexandria"],
    married: true,
    sons: [
            {name: "mohamed", age: 30},
            {name: "ashraf", age: 20},
            {name: "mai", age: 15}
        ],
}

function ticketBox(object) 
{
    var price = 20; 
        numberOfTickets = 0;
        totalPrice = 0;

    if (!object.married) 
    {
        numberOfTickets = 1;
    } 
    else if (!object.sons.length) 
    {
        numberOfTickets = 2;
    } 
    else 
    {
        numberOfTickets = 5;
    }

    if (object.age < 25) 
    {
        totalPrice = numberOfTickets * price;
    } 
    else if (object.age >= 25 && object.age < 16) 
    {
        totalPrice = numberOfTickets * price * 0.9; 
    } 
    else if (object.age < 16) 
    {
        totalPrice = numberOfTickets * price * 0.75; 
    } 
    else {
        totalPrice = numberOfTickets * price;
    }

    console.log(numberOfTickets + " tickets and the total price is " + totalPrice + "$.");
}

ticketBox(object);
