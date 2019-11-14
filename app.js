
import Calculator from './calculator.js';

($(document).ready(function() {


const calc = new Calculator
// initialize application modules
let app = {
  init: function() {
  this.cacheDom()
  this.result = '0'
  // document.getElementById('screen').innerHTML = '0'
  this.$screen.innerHTML = this.result 
   console.log(this.$screen)
  this.bindEvents()
  },

  cacheDom: function() {
    this.$window = $(window)
    this.$calculator= $('#calculator')
    this.$main = this.$calculator.find('#main')
    this.$header = this.$calculator.find('#header')
    this.$screen = document.getElementById('screen') 
    this.$numbers = this.$main.find('#numbers')
    this.$operators = this.$main.find('#operators')
    this.$btnAc = this.$operators.find('#btn-ac')
    this.$btnPlus = this.$operators.find('#btn-plus')
    this.$btnMinus = this.$operators.find('#btn-minus')
    this.$btnMultiply = this.$operators.find('#btn-multiply')
    this.$btnDivide = this.$operators.find('#btn-divide')
    this.$btnEquals = this.$operators.find('#btn-equals')
    this.$btnMem = this.$operators.find('#btn-mem')
    this.$btnPi= this.$operators.find('#btn-pi')
    this.$btnPoint= this.$numbers.find('#btn-point')
    this.$btnRoot = this.$numbers.find('#btn-root')
    // this.$btnroot = document.getElementById('btn-root')
    // for (let i = 0; i< 10; i++) {
    //   let str = "this.$btn" + i + "= this.$numbers.find('#btn'" + i + ")"
    //   eval(str)
    // }
    this.$btn0 = this.$numbers.find('#btn0')
    this.$btn1 = this.$numbers.find('#btn1')
    this.$btn2 = this.$numbers.find('#btn2')
    this.$btn3 = this.$numbers.find('#btn3')
    this.$btn4 = this.$numbers.find('#btn4')
    this.$btn5 = this.$numbers.find('#btn5')
    this.$btn6 = this.$numbers.find('#btn6')
    this.$btn7 = this.$numbers.find('#btn7')
    this.$btn8 = this.$numbers.find('#btn8')
    this.$btn9 = this.$numbers.find('#btn9')
  },

  // Bind all dom element click events to app object

  bindEvents: function() {
    this.$btn0.on('click', this.pressKey.bind(this)) 
    this.$btn1.on('click', this.pressKey.bind(this)) 
    this.$btn2.on('click', this.pressKey.bind(this)) 
    this.$btn3.on('click', this.pressKey.bind(this)) 
    this.$btn4.on('click', this.pressKey.bind(this)) 
    this.$btn5.on('click', this.pressKey.bind(this)) 
    this.$btn6.on('click', this.pressKey.bind(this)) 
    this.$btn7.on('click', this.pressKey.bind(this)) 
    this.$btn8.on('click', this.pressKey.bind(this)) 
    this.$btn9.on('click', this.pressKey.bind(this)) 
    this.$btnAc.on('click', this.clear.bind(this)) 
    this.$btnPlus.on('click', this.pressKey.bind(this)) 
    this.$btnMinus.on('click', this.pressKey.bind(this)) 
    this.$btnMem.on('click', this.lastResult.bind(this))
    this.$btnMultiply.on('click', this.pressKey.bind(this)) 
    this.$btnDivide.on('click', this.pressKey.bind(this)) 
    this.$btnPoint.on('click', this.pressKey.bind(this)) 
    this.$btnEquals.on('click', this.evaluate.bind(this)) 
    this.$btnRoot.on('click', this.square.bind(this)) 
    this.$btnPi.on('click', this.pi.bind(this)) 
  },

  pressKey: function(x){
    let data = x.target.value
    console.log('input', data)
    // Call newInput method of calculator class instance
    calc.newInput(data)
    this.result = calc.equation
    // Display the result on screen
    // document.getElementById("screen").innerHTML = this.result
    this.$screen.innerHTML = this.result
    console.log('Result', this.result)
  },

   evaluate: function() {
    // let data = x.target.value
    // document.getElementById("screen").innerHTML = calc.evaluate()
    this.$screen.innerHTML = calc.evaluate()
   },
  
  clear: function() {
      calc.clear()
    // document.getElementById("screen").innerHTML = '0' 
    this.$screen.innerHTML = '0' 
  },
  
  lastResult: function() {
  //  document.getElementById('screen').innerHTML = calc.memory()
  this.$screen.innerHTML = calc.memory()
  },

  square: function() {
    console.log("squareroot")
    // document.getElementById('screen').innerHTML = calc.squareRoot()
    this.$screen.innerHTML = calc.square(this.result)
  },

  pi: function() {
    this.$screen.innerHTML = calc.pi()
  }

}

app.init()

// calc.newInput(8)
// calc.newInput("*")
// calc.newInput(3)
// console.log(calc.evaluate())

}))



// calc.newInput(2) //?
// calc.newInput(5)//?
// calc.newInput('*')//?
// calc.newInput(25)
// // eval(calc.newInput(30))//?

// calc.evaluate()//?
