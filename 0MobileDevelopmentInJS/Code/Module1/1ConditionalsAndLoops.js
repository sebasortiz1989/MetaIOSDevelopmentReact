 var result = 50;

if (result > 40) {
    console.log("You passed the test");
} else {
    console.log("You did not pass the test");
}

 if (result > 50) {
     console.log("Your result is greater than: 50");
 } else if (result > 40) {
     console.log("Your result is greater than: 40");
 } else if (result > 30) {
     console.log("Your result is greater than: 30");
 } else if (result > 20) {
     console.log("Your result is greater than: 20");
 } else if (result > 10) {
     console.log("Your result is greater than: 10");
 } else {
     console.log("Your result is greater than: 00");
 }

 switch (true) {
     case result > 50:
         console.log("Your result is greater than: 50");
         break;
     case result > 40:
         console.log("Your result is greater than: 40");
         break;
     case result > 30:
         console.log("Your result is greater than: 30");
         break;
     case result > 20:
         console.log("Your result is greater than: 20");
         break;
     case result > 10:
         console.log("Your result is greater than: 10");
         break;
     default:
         console.log("Your result is greater than: 00");
         break;
 }

 var day = 'Sunday';
 switch(day) {
     case 'Monday':
         console.log('Read a book');
         break;
     case 'Tuesday':
         console.log('Watch a movie');
         break;
     case 'Wednesday':
         console.log('Read a book');
         break;
     case 'Thursday':
         console.log('Play basketball');
         break;
     case 'Friday':
         console.log('Socialize');
         break;
     case 'Saturday':
         console.log('Chill');
         break;
     case 'Sunday':
         console.log('Have barbecue');
         break;
     default:
         //this block will run if no condition matches
         console.log('There is no such day');
 }

 for (let i = 1; i <= 5; i++) {
     if (i === 3) {
         break;
     }

     console.log(i);
 }

 var counter = 3;
 while (counter < 6)
 {
     console.log(counter);
     counter++;
 }

 for (let i = 0; i < 3; i++)
 {
     for (let j = 0; j < 3; j++)
     {
         console.log(i, j);
     }
 }

 var cubes = 'ABCDEFG';
 //styling console output using CSS with a %c format specifier
 for (var i = 0; i < 7; i++) {
     var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
     console.log("%c" + cubes[i], styles)
 }

 console.log(!false);