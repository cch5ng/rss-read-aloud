document.addEventListener('DOMContentLoaded', function() {
    var element = document.querySelector('voice-player');
//TODO how to handle this for multiple feeds
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

//TODO abstract this to play appropriate feeds per button
//TODO figure out if there is some way to create one global button that would play all feeds?
    $('.btnNpr').click( function() {
    	feedNodes = document.getElementsByClassName('feed');
    	feedNodesLength = feedNodes.length;
	    console.log('feedNodes length: ' + feedNodes.length);
	    playNextFeed();
    });

    $('.btnYahoo').click( function() {
    	feedNodes = document.getElementsByClassName('yahoo-feed');
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

