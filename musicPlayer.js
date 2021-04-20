let songs = document.querySelectorAll(li);



function visualiseRock() {
   var allClassics = document.getElementsByClassName('classical');
        allClassics.forEach.call(document.querySelectorAll('.classical'), function(el) {
            el.style.visibility = 'hidden';})
   var allNewWave = document.getElementsByClassName("newWave");
       allNewWave.forEach.call(document.querySelectorAll('.newWave'), function(el) {
            el.style.visibility = 'hidden';})
   
};
