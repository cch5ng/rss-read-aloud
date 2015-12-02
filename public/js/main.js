document.addEventListener('DOMContentLoaded', function() {
    var element = document.querySelector('voice-player');
//TODO how to handle this for multiple feeds
    var counter = 0;
    var feed;
	var feedNodes;
    var feedNodesLength;
    var audioStates = ['playing', 'stopped', 'paused'];
    //audioState can be 
    var audioState = audioStates[1];

    function playNextFeed() {
		feed = feedNodes[counter].querySelector('h3').innerText;
		console.log('text: ' + feed);
		//text += feedNodes[i].querySelector('p').innerHTML;
		//console.log('text: ' + text);
		element.setAttribute('text', feed);
		element.speak();
    }

//TODO add handling for the audio resume function
//if condition for if state is 'stopped' (then play from beginning) vs 'paused' (then resume)
    $('.fa-play').click( function() {
        //if audio stopped
        if (audioState === audioStates[1]) {
            feedNodes = document.getElementsByClassName('feed');
            feedNodesLength = feedNodes.length;
            console.log('feedNodes length: ' + feedNodes.length);
            playNextFeed();
        } else if (audioState === audioStates[2]) {
        //if audio paused
            element.resume();
        }
        audioState = audioStates[0];
    });

//TODO click listener for audio Pause button
    $('.fa-pause').click( function() {
        element.pause();
        audioState = audioStates[2];
    });

//TODO click listener for audio Stop button (audio cancel)
    $('.fa-stop').click( function() {
        element.cancel();
        element.setAttribute('text', '');
        audioState = audioStates[1];
    });

//TODO abstract this to play appropriate feeds per button
//TODO figure out if there is some way to create one global button that would play all feeds?
    // $('.btnNpr').click( function() {
    // 	feedNodes = document.getElementsByClassName('feed');
    // 	feedNodesLength = feedNodes.length;
	   //  console.log('feedNodes length: ' + feedNodes.length);
	   //  playNextFeed();
    // });

    // $('.btnYahoo').click( function() {
    // 	feedNodes = document.getElementsByClassName('yahoo-feed');
    // 	feedNodesLength = feedNodes.length;
	   //  console.log('feedNodes length: ' + feedNodes.length);
	   //  playNextFeed();
    // });

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

