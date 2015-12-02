//src/js/HackerNewsFeed.jsx

var React = require('react');
var ReactDOM = require('react-dom');

//initial array of feed id's returned by hacker news api
var initFeedsAr;
//final array of feed objects that will be used in state var
var hnFeedsAr = [];

var HackerNewsFeed = React.createClass({
	getFeedIds: function() {
		$.ajax({
			method: 'GET',
			url: this.props.url,
			//https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
			//https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty
			contentType: 'text/plain',
			success: function(data) {
				var numFeeds = 15;
				//initial array of feed id's returned by hacker news api
				initFeedsAr = data;
				for (var i = 0; i < numFeeds; i++) {
					this.loadFeedsFromServer(initFeedsAr[i]);
				}

			}.bind(this),
			error: function(xhr, status, err) {
				//console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	loadFeedsFromServer: function(feedIdx) {
					//hnFeedsAr = [];
					$.ajax({
						method: 'GET',
						url: 'https://hacker-news.firebaseio.com/v0/item/' + initFeedsAr[feedIdx] + '.json?print=pretty',
						//https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
						//https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty
						contentType: 'text/plain',
						success: function(data) {
							var feedObj = {};
							feedObj.id = data.id;
							feedObj.title = data.title;
							console.log('hacker title: ' + feedObj.title);
							feedObj.description = data.type;
							feedObj.link = data.url;
//TODO convert time to a meaningful date string
							feedObj.pubDate = data.time;

							hnFeedsAr.push(feedObj);
//TODO try fix none of the HN news feeds would get populated in html
							if (hnFeedsAr.length === 15) {
								//this.feedsLoaded = true;
								this.setState({data: hnFeedsAr});
								console.log('got here');
							}
//TODO not sure if this nested ajax call will break the bind(this) function
						},//.bind(this),
						error: function(xhr, status, err) {
							console.error(this.props.url, status, err.toString());
						}//.bind(this)
					});
		//});
	},
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		this.getFeedIds();
		//setInterval(this.loadFeedsFromServer, 20000);
		//window.setTimeout(function() {
		//	this.loadFeedsFromServer();
		//}, 60000);
		//setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	render: function() {
		//console.log({this.state.data});
//TODO think timing issue where either HNFeedList or HNFeed is getting rendered before all the 
//api requests have returned

		return (<div className="hn-feeds">
//TODO abstract the button event click listener to handle audio play for multiple feed sources
					<button className="btnHackerNews">Play</button>
//TODO think issue with passing in state
					<HNFeedList data={this.state.data} />
				</div>
		);

	}
})

//TODO think this should be abstracted across different feed sources
//none of these objects are getting populated
var HNFeed = React.createClass({
	render: function() {
		console.log('link: ' + this.props.link);
		return (
			<div className="hn-feed">
				<h3><a href={this.props.link} target="_blank">{this.props.title}</a></h3>
				<p>{this.props.description}</p>
				<p>{this.props.pubDate}</p>
			</div>
			);
	}
});

//TODO think this should be abstracted across different feed sources
//timing issue, the render gets called even before the ajax has loaded the stories
//each HNFeed will be empty as a result
var HNFeedList = React.createClass({
	render: function() {
		console.log('props.data: ' + this.props.data);
		console.log('props.data length: ' + this.props.data.length);
		console.log('type props.data: ' + typeof this.props.data);
		var hnFeedNodes = this.props.data.map(function(feed) {
			//var title = feed.title;
			//console.log('title: ' + title);
			return (
				<HNFeed key={feed.id} title={feed.title} description={feed.description} pubDate={feed.pubDate} link={feed.link} >
				</HNFeed>
			);
		});

		return (
			<div className="hn-feed-list">
				{hnFeedNodes}
			</div>
		);
	}
});

ReactDOM.render(
	<HackerNewsFeed url='https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty' />,
	document.getElementById('hacker-news')
);