let name1 = "Manikanth";
let age = 23;
let city = "Bangalore";
 console.log("--- Task 1 ---");
console.log("My name is " + name1 + ".");
console.log("I am " + age + " years old.");
console.log("I am from " + city + ".");

let userName = prompt("What is your name?");
alert("Welcome," + userName + "!");
let wantToLearn = confirm("Do you want to learn JavaScript?");
if (wantToLearn) {
    alert("Great Choice!");
} else {
    alert("No Problem!");
}

let var1 = "Hello";
let var2 = 100;
let var3 = true;
let var4 = undefined;
let var5 = null;
console.log("--- Task 3 ---"); 
console.log("Value: " + var2 + " | Type: " + typeof var2); 

//task 4//

let colors = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange"];
 console.log("--- Task 4 ---"); 
console.log("First color: " + colors[0]);
console.log("Last color: " + colors[colors.length - 1]);
console.log("Total number of colors: " + colors.length);

// Print all using index
for (let i = 0; i < colors.length; i++) {
    console.log(`Color at index ${i}: ${colors[i]}`);
}

//Task 5//

let subjects = ["Math", "Science", "History", "English", "Art"];
let userInput = prompt("Enter an index (0 to 4):");
let index = parseInt(userInput);
console.log("--- Task 5 ---"); 
console.log("Subject: " + subjects[index]);

//task 6//

let student = {
    name: "Rahul",
    age: 20,
    course: "Web Development",
    skills: ["HTML", "CSS", "JavaScript"]
};
console.log("--- Task 6 ---"); 
console.log("Student name: " + student.name);
console.log("Second skill: " + student.skills[1]);
console.log("Course name: " + student.course);

//task 7//

let product = {
    name: "Laptop",
    price: 45000,
    category: "Electronics",
    inStock: true
};
console.log("--- Task 7 ---"); 
console.log("Product Name: " + product.name);
console.log("Price: " + product.price);
console.log("Available: " + (product.inStock ? "Yes" : "No"));

if (!product.inStock) {
    console.log("Out of Stock");
}

//task 8//

let fruits = {
    tropical: ["mango", "pineapple"],
    berries: ["strawberry", "blueberry"],
    citrus: ["orange", "lemon"]
};
console.log("--- Task 8 ---"); 
console.log("-" + fruits.berries[1]); // blueberry
console.log("-" + fruits.tropical[0]); // mango
console.log("-" + fruits.citrus[1]);   // lemon
console.log("Total categories: " + Object.keys(fruits).length);