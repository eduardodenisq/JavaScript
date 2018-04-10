(function calculator() {

  var el = function(element) {
    if (element.charAt(0) === "#") {
      return document.querySelector(element);
    }
    return document.querySelectorAll(element);
  };

  // Variables
  var display = el("#display"),
    equals = el(".igual"),
    nums = el(".tecla"),
    ops = el(".ops"),
    theNum = "",
    oldNum = "",
    resultNum,
    operator;

  var setNum = function() {
    console.log(this);
    if (resultNum) {
      theNum = this.alt;
      resultNum = "";
    } else {
      theNum += this.alt;
    }
    display.innerHTML = theNum.substring(0, 8);
  };

  var moveNum = function() {
    oldNum = theNum;
    theNum = "";
    operator = this.id;
    console.log(this);
    equals.alt = "";
  };

  var displayNum = function() {
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);

    console.log(operator);

//Operadores
    switch (operator) {
      case "mas":
        resultNum = oldNum + theNum;
        break;

      case "menos":
        resultNum = oldNum - theNum;
        break;

      case "por":
        resultNum = oldNum * theNum;
        break;

      case "dividido":
        resultNum = oldNum / theNum;
        break;

      case "signo":
        resultNum = oldNum * (-1);
        break;

      case "raiz":
        resultNum = Math.sqrt(oldNum);
        break;

      default:
        resultNum = theNum;
    }

    if (!isFinite(resultNum)) {
      if (isNaN(resultNum)) {
        resultNum = "Error";
      } else {
        resultNum = "Error";
        el('#calculator').classList.add("broken");
        el('#reset').classList.add("show");
      }
    }


    console.log(resultNum);
    resultNum = resultNum.toString();
    display.innerHTML = resultNum.substring(0,8);
    equals[0].alt = resultNum;
    oldNum = 0;
    theNum = resultNum.substring(0,8);
  };

  var clearAll = function() {
    oldNum = "";
    theNum = "";
    display.innerHTML = "0";
    equals[0].alt =  resultNum;
  };

// Evento para saber que número fue presionado
  for (var i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = setNum;
  }

// Evento para saber que operador fue presionado
  for (var i = 0, l = ops.length; i < l; i++) {
    console.log(ops);
    ops[i].onclick = moveNum;
  }

  equals[0].onclick = displayNum;

  el("#on").onclick = clearAll;

}());
