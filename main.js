var calcButtons = document.getElementsByTagName("button")
var calcArray = []
for (var i = 0; i <= calcButtons.length; i += 1) {
  calcButtons[i].onclick = function() {
    if (this.id == "C") {
      calcArray = []
      document.getElementById("display").innerHTML = `&nbsp`
    } else if (this.id == "=") {
      document.getElementById("display").innerHTML = `${eval(calcArray.join(""))}`
      var history = eval(calcArray.join(""))
      console.log(history)
    } else {
      calcArray.push(this.id)
      document.getElementById("display").innerHTML = `${calcArray.join("")}`
    }
  }
}
