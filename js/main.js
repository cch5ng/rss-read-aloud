document.addEventListener('DOMContentLoaded', function() {
    var element = document.querySelector('voice-player');
    var counter = 0;
    var feed;
	var feedNodes;
    var feedNodesLength;

    function playNextFeed() {
		feed = feedNodes[counter].querySelector('h3').innerText;
		console.log('text: ' + feed);
		//text += feedNodes[i].querySelector('p').innerHTML;
		//console.log('text: ' + text);
		element.setAttribute('text', feed);
		element.speak();
    }

    $('.btnNpr').click( function() {
    	feedNodes = document.getElementsByClassName('feed');
    	feedNodesLength = feedNodes.length;
	    console.log('feedNodes length: ' + feedNodes.length);
	    playNextFeed();
    });

    element.addEventListener('end', function() {
    	console.log('gets here');
    	if (counter < feedNodesLength - 1) {
    		counter++; 
    		console.log('counter: ' + counter);
    		playNextFeed();
    	} else {
    		counter = 0;
    		console.log('counter: ' + counter);
    	}
    });
})

