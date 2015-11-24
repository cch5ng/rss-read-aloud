//src/js/FeedList.jsx
//used by NprFeed
var React = require('react');

var FeedList = React.createClass({
	getTitle: function(feed) {
		return feed.getElementsByTagName('title')[0].innerHTML;
	},
	getDescription: function(feed) {
		return feed.getElementsByTagName('description')[0].innerHTML;
	},
	getPubDate: function(feed) {
		return feed.getElementsByTagName('pubDate')[0].innerHTML;
	},
	getLink: function(feed) {
		return feed.getElementsByTagName('link')[0].innerHTML;
	},
	render: function() {
		var feedNodes = this.props.data.map(function(feed, idx) {
			return (
				<Feed key={idx} title={this.getTitle(feed)} description={this.getDescription(feed)} pubDate={this.getPubDate(feed)} link={this.getLink(feed)} > // 
				</Feed>
			);
		})

		return (
			<div class="feed-list">
				{feedNodes}
			</div>
		);
	}
});

var Feed = React.createClass({
	render: function() {
		return (
			<div class="feed">
				<h1><a href="{this.props.getLink}" target="_blank">{this.props.title}</a></h1>
				<p>{this.props.getDescription}</p>
				<p>{this.props.getPubDate}</p>
			</div>
			);
	}
});