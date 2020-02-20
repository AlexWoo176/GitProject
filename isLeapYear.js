let year = parseInt(prompt("Nhập số năm"))
let isLeapYear = false;
let isDivisibleBy4 = year % 4 == 0;
if (isDivisibleBy4) {
    let isDivisibleBy100 = year % 100 == 0;
    if (isDivisibleBy100) {
        let isdivisibleBy400 = year % 100 == 0;
        if (isdivisibleBy400) {
            isLeapYear = true;
        }
    } else {
        isLeapYear = true
    }
}
if (isLeapYear) {
    alert(year + "Is Leap Year");
} else {
    alert(year + "Is Not Leap Year");
}