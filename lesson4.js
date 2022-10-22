function show(arr) {
    console.log(arr);
}

var numbers = [-1, 9, 0, 3, -4, 23, 56, 2, 6, -19, 14, 11, 10, 7, -8, 5, 55, 45, -28, 17];

function compareAsc(num1, num2) {
    if (num1 > num2) {
        return 1;
    }
    if (num1 < num2) {
        return -1;
    }
}

show(numbers.sort(compareAsc));

function devide() {
    console.log('---------------------');
}

devide();

function compareDesc(num1, num2) {
    if (num1 > num2) {
        return -1;
    }
    if (num1 < num2) {
        return 1;
    }
}

show(numbers.sort(compareDesc));

devide();

var arrayPositive = numbers.filter(function(num){
    return num >= 0;
});
var arrayNegative = numbers.filter(function(num){
    return num < 0;
});

show(arrayPositive);
show(arrayNegative);

