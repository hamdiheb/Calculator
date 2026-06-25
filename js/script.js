function apply(formula) {
  const formula_sp = formula.split(/([+\-*/])/)
  let sum = 0
  formula_sp.forEach((Element) => {
    if (typeof parseInt(Element) == 'number') {
      sum += parseInt(Element)
    }
  })
  console.log(sum)
}

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
  const divide_sy = document.getElementById('divide')
  const multiply_sy = document.getElementById('multiply')
  const equal_sy = document.getElementById('equal')

  const buttons = [
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
    minus_sy,
    divide_sy,
    multiply_sy,
    equal_sy,
  ]

  let formula = ''
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.textContent == '=') {
        apply(formula)
      } else {
        formula += button.textContent
        console.log(formula)
      }
    })
  })
}

main()
