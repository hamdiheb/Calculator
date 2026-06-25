// function addition() {}

// function multiply(array) {
//   let sum = 0
//   array.forEach((element) => {
//     sum += parseInt(element)
//   })
//   return sum
// }

// function minus() {}

// function divide() {}

function main() {
  const one = document.getElementById('one')
  const two = document.getElementById('two')
  const three = document.getElementById('three')
  const four = document.getElementById('four')
  const five = document.getElementById('five')
  const six = document.getElementById('six')
  const seven = document.getElementById('seven')
  const eight = document.getElementById('eight')
  const nine = document.getElementById('nine')

  const addition_sy = document.getElementById('addition')
  const minus_sy = document.getElementById('minus')
  const equal_sy = document.getElementById('equal')

  const output = document.getElementById('output')

  const array = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    addition_sy,
    equal_sy,
    minus_sy,
  ]
  let equation = ''
  array.forEach((element) => {
    element.addEventListener('click', (event) => {
      if (element.textContent != '=') {
        equation += element.textContent
        console.log(equation)
      } else {
        const array = equation.split('+')
        console.log(multiply(array))
      }
    })
  })
}

main()
