//src/js/npr-feed.js

var React = require('react');
var ReactDOM = require('react-dom');

var NprFeed = React.createClass(function() {
	render: function() {
		return (
			<div class="npr-feed">
				<FeedList />
			</div>
			);
	}
})

ReactDOM.render(
	<NprFeed />,
	document.getElementById('npr')
);