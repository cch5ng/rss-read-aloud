//src/js/BbcFeed.jsx

var React = require('react');
var ReactDOM = require('react-dom');
//var FeedList = require('FeedList');
//import FeedList from './FeedList.jsx';

var BbcFeed = React.createClass({
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		$.ajax({
        	method: 'GET',
        	url: this.props.url,
        	contentType: 'text/plain',
        	dataType: 'xml',
        	success: function(data) {
        		var numFeeds = 15;
        		var feeds = data.querySelectorAll('item');
        		console.log('feeds: ' + feeds);
        		var feedsAr = [];
        		var prefix = 'npr';

        		for (var i = 0; i < numFeeds; i++) {
        			var feedObj = {};
//TODO the npr id value is not good because if websockets is used, the array idx is not going to be consistent
//across requests for the same story
//the link is going to be consistent so maybe just prepend it with 'npr'
        			feedObj.id = prefix + feeds[i].getElementsByTagName('link')[0].innerHTML;
        			feedObj.title = feeds[i].getElementsByTagName('title')[0].innerHTML;
        			feedObj.description = feeds[i].getElementsByTagName('description')[0].innerHTML;
        			feedObj.pubDate = feeds[i].getElementsByTagName('pubDate')[0].innerHTML;
        			feedObj.link = feeds[i].getElementsByTagName('link')[0].innerHTML;
        			//console.log('title: ' + feedObj.title);
        			//console.log('desc: ' + feedObj.description);
        			feedsAr.push(feedObj);
        		}
        		this.setState({data: feedsAr});

        		//console.log('feedsAr: ' + feedsAr);
      		}.bind(this),
      		error: function(xhr, status, err) {
        		//console.error(this.props.url, status, err.toString());
      		}.bind(this)
        });
	},
	// componentDidMount: function() {
	// 	this.loadFeedsFromServer();
	// 	//setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	// },
	render: function() {
		return (<div className="bbc-feed">
					<h3>BBC News (US Edition)</h3>
					<FeedList data={this.state.data} />
				</div>
		);
	}
})

var Feed = React.createClass({
	render: function() {
		return (
			<div className="feed">
				<h3><a href={this.props.link} target="_blank">{this.props.title}</a></h3>
				<p>{this.props.description}</p>
				<p>{this.props.pubDate}</p>
			</div>
			);
	}
});

var FeedList = React.createClass({
	render: function() {
		console.log('props.data: ' + this.props.data);
		var feedNodes = this.props.data.map(function(feed) {
			//var title = feed.title;
			//console.log('title: ' + title);
			return (
				<Feed key={feed.id} title={feed.title} description={feed.description} pubDate={feed.pubDate} link={feed.link} >
				</Feed>
			);
		});

		return (
			<div className="feedList">
				{feedNodes}
			</div>
		);
	}
});

ReactDOM.render(
	<BbcFeed url='http://feeds.bbci.co.uk/news/rss.xml?edition=us' />,
	document.getElementById('bbc')
);