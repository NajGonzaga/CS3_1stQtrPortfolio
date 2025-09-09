//for loop
for (let i = 2; i <= 20; i=i+2) {
    console.log(i)
}

//do while loop
let i = 1;
do {
    console.log(i)
    i++
} while(i<=3)

//array
grades = [100, 99, 97, 96, 82];
for (let i = 0; i < grades.length; i++ ) {
        console.log(grades[i])
}

//what makes sense to sir roy apparently
grades.forEach(print_grade)

function print_grade(grade) {
    console.log(grade)
}

//pushing stuff (stuff === kas)

grades = [100, 99, 97, 96, 82];
grades.push("Tomioka")
grades.unshift ("Giyuu")

var popped = grades.pop()
var shifted = grades.shift()

console.log(grades)
console.log(popped, shifted)

//fcw
 
