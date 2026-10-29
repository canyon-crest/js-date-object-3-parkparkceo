// ============================================
//  Unit 8.8 – The Date Object
// ============================================
//  Complete each section below by following
//  the STEP comments.
//
//  IMPORTANT: Use addEventListener() for the button.
//  Do NOT add onclick in the HTML.
// ============================================


// ============================================
//  WARM-UP: Day Name
// ============================================
// Display today's day name (e.g., "Monday") in the
// element with ID "warmUpDate".

// STEP 1: Create a new Date object using: let now = new Date();
let now = new Date();
// STEP 2: Use .getDay() to get the day of the week as a number.
//         Sunday = 0, Monday = 1, Tuesday = 2, ... Saturday = 6
let dayNum = now.getDay();
// STEP 3: Create an array of day names:
//         let days = ["Sunday", "Monday", "Tuesday", "Wednesday",
//                     "Thursday", "Friday", "Saturday"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// STEP 4: Use the day number as an index to get the day name
//         from the array.
 let dayName = days[dayNum];
// STEP 5: Display the day name in the element with ID "warmUpDate"
//         using document.getElementById("warmUpDate").innerHTML
document.getElementById("warmUpDate").innerHTML = dayName;

// ============================================
//  PART 1: Current Date Display
// ============================================
// Display the current date in the format: M/D/YYYY
// in the element with ID "myDate".
// Example: "4/2/2025" (no leading zeros)

// STEP 6: Create a new Date object (or reuse the one from above).

// STEP 7: Get the month using .getMonth()
//         IMPORTANT: .getMonth() returns 0–11 (January = 0)
//         so you must add 1 to get the correct month number.
let month = now.getMonth() + 1;
// STEP 8: Get the day of the month using .getDate()
let day = now.getDate();
// STEP 9: Get the year using .getFullYear()
let year = now.getFullYear();
// STEP 10: Build the date string: month + "/" + day + "/" + year
//          Display it in the element with ID "myDate"
document.getElementById("myDate").innerHTML  = month + '/' + day + '/' + year;

// ============================================
//  PART 2: Elapsed Timer
// ============================================
// Build a timer that counts up from 0, updating every ~10ms.
// Display the elapsed time in seconds (e.g., "1.230") in
// the element with ID "myTimer".

// STEP 11: Record the start time using new Date().getTime()
//          This gives you the current time in milliseconds.
let start = now.getTime()
// STEP 12: Create a variable to hold the timer ID (for stopping later).
//          Use setInterval() with a delay of 10 milliseconds.
//          Inside the interval function:
//          a) Get the current time: new Date().getTime()
//          b) Calculate elapsed seconds: (currentTime - startTime) / 1000
//          c) Display the elapsed time using .toFixed(3)
//             in the element with ID "myTimer"
let timer = setInterval(function(){
    let current = new Date().getTime();
    let elapsed = (current - start)/1000;
    document.getElementById("myTimer").innerHTML = elapsed.toFixed(3);
}, 10);

// ============================================
//  PART 3: Start/Stop Toggle Button
// ============================================
// The button starts as "Stop" (timer is running).
// Clicking it should:
//   - If timer is running: stop it (clearInterval) and
//     change button text to "Start"
//   - If timer is stopped: restart it from 0 and change
//     button text to "Stop"

// STEP 13: Create a variable to track whether the timer is
//          currently running (let running = true;)
let running = true;
document.getElementById("myBtn").addEventListener("click", function() {
    if (running) {
        clearInterval(timer);
        document.getElementById("myBtn").innerHTML = "Start";
        running = false;
    } else {
        start = now.getTime(); 
        timer = setInterval(function() {
            let currentTime = new Date().getTime();
            let elapsedSeconds = (currentTime - start) / 1000;
            document.getElementById("myTimer").innerHTML = elapsedSeconds.toFixed(3);
        }, 10);
        document.getElementById("myBtn").innerHTML = "Stop";
        running = true;
    }
});