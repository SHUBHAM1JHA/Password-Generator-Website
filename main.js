function generatePassword(l) {
  var length = l,
    charset =
      "1Az2ByC3xDw4Ev5FuG6tH7sIr8JqK9pLo0Mn!Nm@OlP#kQj*RiS$hTg(UfV)e/Wd?XcY.bZa,",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function gen() {
  var x = generatePassword(8);
  document.getElementById("op").innerHTML = x;
}

function copySave() {
  navigator.clipboard.writeText(document.getElementById("op").innerHTML);
  var myKey = document.getElementById("name").value;
  var myValue = document.getElementById("op").innerHTML;
  console.log(myKey);
  console.log(myValue);
  window.localStorage.setItem(myKey.toUpperCase(), myValue);
  alert("Copied & Saved password: " + myValue + " for " + myKey);
}

function search() {
  var x = document.getElementById("sTextbox").value;
  var p = window.localStorage.getItem(x.toUpperCase());
  document.getElementById("savedPwdOp").innerHTML = p;
}

function copier() {
  var x = document.getElementById("sTextbox").value;
  var p = window.localStorage.getItem(x.toUpperCase());
  console.log(x + " : " + p);
  navigator.clipboard.writeText(p);
  alert("Copied password: " + p);
}
