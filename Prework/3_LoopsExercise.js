// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let a = 1;

do {
  console.log(a);
  a++;
} while (a <= 5);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

for (let b = 1; b <= 5; b++) {
  console.log(b);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let c = 10;

while (c >= 1) {
  console.log(c);
  c--;
}

let d = 10;

do {
  console.log(d);
  d--;
} while (d >= 1);

for (let e = 10; e >= 1; e--) {
  console.log(e);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let f = 7;

while (f <= 27) {
  console.log(f);
  f++;
}

let g = 7;

do {
  console.log(g);
  g++;
} while (g <= 27);

for (let h = 7; h <=27; h++) {
  console.log(h);
}
// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let j = 0;

while (j <= 100) {
  console.log(j);
  j += 10;
}

let k = 0;

do {
  console.log(k);
  k += 10;
} while (k <= 100);

for (let l = 0; l <= 100; l += 10) {
  console.log(l);
}


// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

// The original loop was infinite because 1 is less than 2 from the beginning and the
// loop instructs to count down from 1, which will always be less than 2.

 let counterFour = 1;
 while (counterFour < 2) {
   console.log("HELP ME!");
   counterFour++;
 }

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

for (let m = 0; m <= 12; m++) {
  console.log(m);
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

let n = 0;

while (n <= 100) {
  if (n === 12) {
    console.log("My favorite number!");
  } else {
    console.log("Not my favorite number.");
  }
  n++;
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
// For loops are used when the specific number of iterations is known. While loops are better in
// instances where the number of iterations isn't necessarily known, but there is a particular
// condition that needs to be met. Do while loops are best when the loop should be executed 
// regardless of the initial condtion, but still has an ongoing condition to be met to continue executing.

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from " + outsideCounter);
  for (let insideCounter = outsideCounter;  insideCounter >= 1; insideCounter--) {
    console.log("inside " + insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// Once again, I needed a slight refresher with loops from MDN. However, once I
// got started these exercises were fairly easy. 

// Email your file to us or commit your file to GitHub and email us a link.
