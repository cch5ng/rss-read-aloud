document.addEventListener('DOMContentLoaded', function() {
    var element = document.querySelector('voice-player');

    element.setAttribute('text', element.innerText);
    $('.btnNpr').click( function() {
	    console.log('text: ' + element.innerText);
      element.setAttribute('text', element.innerText);
      element.speak();
    });
})

