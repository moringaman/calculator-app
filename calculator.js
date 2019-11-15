
export default class Calculator {
  constructor(input) {
    // initialize default variable values
    this.rightArray = [] // right side of equation
    this.leftArray = [] // lift side of equation
    this.operator = '' 
    this.input = input
    this.equation = ''
    this.previousResult = 0
    this.memoryPosition = 0
    this.result = 0
  }

  newInput(input) {
    // Check for an operator
    let operatorCheck= new RegExp('[^.0-9]')  // TODO: Fix
    let isOperator = operatorCheck.test(input)
    if (isOperator) {
      return this.operator = input
    }
    // If no operator set add value passed by btn to leftArray
    if (this.operator === '') {
      if (this.leftArray.length < 12) {
          if ((this.leftArray.length == 9) && (input !== '.')) {
            return this.leftArray.join('')
          }
      this.leftArray.push(input)
      return this.equation = this.leftArray.join('')
      }
    } else {
      // If an operator has already been passed pupulate rightArray
      this.rightArray.push(input)
      return this.equation = this.rightArray.join('')
    }
  }

  square(val) {
    return Math.sqrt(parseInt(val)).toFixed(11)
  }
  
  pi() {
    return 3.14159
  }

  evaluate() {
    // send all parts of equation for validation and formatting
   let answer = this.validateResult(this.leftArray.join(''), this.operator, this.rightArray.join(''))
    return answer
  }
  // function to format results - can be called from anywhere for testing
  validateResult(left, operator='', right='' ) {
    this.result = eval(left + " " + operator + " " + right)
    if (this.result > 999999999) return 'Err'
    if (this.result % 1 != 0) return this.result.toFixed(2)
    this.previousResult = this.result
    return this.result
  }

  memory() {
    return this.previousResult
  }

  clear() {
    // reset all calulator variables back to the default
    this.leftArray = []
    this.rightArray = []
    this.result = 0
    this.operator = ''
    return this.equation = ""
  }

}
