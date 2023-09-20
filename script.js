document.addEventListener('DOMContentLoaded', function() {
  const counters = [
      { id: 1, count: 0 },
      { id: 2, count: 0 }
  ];

  counters.forEach(counter => {
      const incrementButton = document.getElementById(`increment${counter.id}`);
      const decrementButton = document.getElementById(`decrement${counter.id}`);
      const countElement = document.getElementById(`count${counter.id}`);

      incrementButton.addEventListener('click', function() {
          counter.count++;
          countElement.innerText = counter.count;
      });

      decrementButton.addEventListener('click', function() {
          counter.count--;
          countElement.innerText = counter.count;
      });
  });
});




let myDocument = document.documentElement;
  let fullscreen = document.getElementById("btnFull");

  fullscreen.addEventListener("click", ()=> {
    if(fullscreen.textContent == "Fullskjerm") {
      if(myDocument.requestFullscreen){
        myDocument.requestFullscreen();
      }
      else if(myDocument.msRequestFullscreen) {
        myDocument.msRequestFullscreen();
      }
      else if(myDocument.mozRequestFullscreen){
        myDocument.mozRequestFullscreen();
      }
      else if(myDocument.webkitRequestFullscreen){
        myDocument.webkitRequestFullscreen();
      }
      fullscreen.textContent = "Lukk"
    }
    else {

      if(document.exitFullscreen){
        document.exitFullscreen();
      }
      else if(msexitFullscreen) {
        document.msexitFullscreen();
      }
      else if(mozexitFullscreen) {
        document.mozexitFullscreen();
      }
      else if(webkitexitFullscreen) {
        document.webkitexitFullscreen();
      }
      fullscreen.textContent = "Fullskjerm";
    }

  });