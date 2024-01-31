// If else
// var age = 30;

// 18 >= "Adult"
// 17 - 12 = "Ultra Kid"
// 12 < "Kid"

// if (age >= 18) console.log("Adult");
// else if (age <= 17 && age >= 12) console.log("Ultra Kid");
// else console.log("Kid");

// var orderStatus = "Error";

// switch (orderStatus) {
//   case "Ready":
//     console.log("Your order is ready!");
//     break;
//   case "Waiting":
//     console.log("Your order is waiting!");
//     break;
//   case "Delivered":
//     console.log("Your order has been delivered!");
//     break;
//   default:
//     console.log("Oops something has happened with your order!");
//     break;
// }

// Ternary
// var subscribe = false;

// console.log(subscribe ? "Active" : "Not subcribed yet");

// Loop

// For with StartPoint, EndPoint, Step
// for (let i = 1; i <= 10; i += 2) console.log(i);

// While without start/endPoints
// var i = 10;

// while (i <= 15) {
//   console.log(i);
//   i++;
// }

// Do While
// var i = 16;

// do {
//   console.log(i);
//   i++;
// } while (i <= 15);

// exercise

// 100 -> 2, 4, 6, 8, .....
// 100 -> 1, 3, 5, 7, .....

// for (let i = 2; i <= 20; i += 2) console.log(i);
// for (let i = 1; i <= 20; i += 2) console.log(i);

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}
