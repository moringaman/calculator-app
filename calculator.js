
export default class Calculator {
  constructor(input) {
    this.rightArray = []
    this.leftArray = []
    this.operator = '' 
    this.input = input
    this.equation = ''
    this.previousResults = []
    this.memoryPosition = 0
    this.result = 0
  }

  newInput(input) {
    let operatorCheck= new RegExp('[^.0-9]')  // TODO: Fix
    let isOperator = operatorCheck.test(input)
    if (isOperator) {
      return this.operator = input
    }
    if (this.operator === '') {
      if (this.leftArray.length < 12) {
          if ((this.leftArray.length == 9) && (input !== '.')) {
            return this.leftArray.join('')
          }
      this.leftArray.push(input)
      return this.equation = this.leftArray.join('')
      }
    } else {
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
   let answer = this.validateResult(this.leftArray.join(''), this.operator, this.rightArray.join(''))
    return answer
  }

  validateResult(left, operator='', right='' ) {
    this.result = eval(left + " " + operator + " " + right)
    if (this.result > 999999999) return 'Err'
    if (this.result % 1 != 0) return this.result.toFixed(2)
    this.previousResults.push(this.result)
    return this.result
  }

  memory() {
    if (this.memoryPosition <= this.previousResults.length) {
      let result = this.previousResults[this.memoryPosition]
      this.memoryPosition++
      return result
    }
  }

  clear() {
    this.leftArray = []
    this.rightArray = []
    this.result = 0
    this.operator = ''
    return this.equation = ""
  }

}
