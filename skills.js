document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.body.classList.add("loaded");
    }, 700); // Imposta il ritardo in millisecondi (in questo caso, 2000 millisecondi = 2 secondi)
  });

  var progressBars = document.querySelectorAll('.progress-bar');

  // Itera su ogni barra di progressione
  progressBars.forEach(function (bar) {
    // Ottieni il valore percentuale dalla span
    var percentage = parseInt(bar.previousElementSibling.innerText, 10);

    // Imposta la larghezza della barra di progressione
    bar.style.width = percentage + '%';
  });