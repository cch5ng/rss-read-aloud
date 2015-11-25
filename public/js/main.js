document.addEventListener('DOMContentLoaded', function() {
    var element = document.querySelector('voice-player');

    $('.btnNpr').click( function() {
	    var feedNodes = document.getElementsByClassName('feed');
	    var feedNodesLength = feedNodes.length;
	    console.log('feedNodes length: ' + feedNodes.length);
	    //console.log('text: ' + element.innerText);
		for (var i = 0; i < feedNodesLength; i++) {
			//window.setTimeout(function() {
				var toRead = feedNodes[i].querySelector('h3').innerText;
				console.log('text: ' + toRead);
				//text += feedNodes[i].querySelector('p').innerHTML;
				//console.log('text: ' + text);
				element.setAttribute('text', toRead);
				element.speak();
			//}, 3000);
		}
    });
})

