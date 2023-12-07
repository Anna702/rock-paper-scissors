// Write your code here

var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];

// iterate through the array to find names
for (let i = 0; i < myFarm.length; i++) {
  let animalName = myFarm[i];
  console.log(animalName);

  // create an allert:
  // 1) create a variable to store a first letter
  let firstLetter = animalName.charAt(0).toLowerCase();

  // iterate through the names(elements of array) looking for this special letters

  if (firstLetter === "c" || firstLetter === "o") {
    alert("Animal's name starts with 'c' or 'o': " + animalName);
  }
}

// toLowerCase() - for case-insensitive cases

// The charAt() - a string method that is used to retrieve the character at a specified index within a string (strings are sequences of characters, and each character in a string has an associated index, starting from 0 for the first character, it should be an integer between 0 and string.length - 1.).

// The syntax for charAt():
// string.charAt(index);

// The charAt() method returns a string representing the character at the specified index. If the index is out of bounds (less than 0 or greater than or equal to the length of the string), an empty string is returned.
