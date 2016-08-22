function doSomething() {
   this.style.color = '#cc0000';
}

var h1 = document.getElementById('h1');
/*
h1.onclick = function() {
    this.style.color = '#cc0000';
}*/

h1.onclick = doSomething;
// h1.addEventListener('click',doSomething,false)
