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
				var feeds = data.querySelectorAll('item');
				var numFeeds;
				if (feeds <= 15) {
					numFeeds = feeds;
				} else {
					numFeeds = 15;
				}
				//console.log('feeds: ' + feeds);
				var feedsAr = [];
				var prefix = 'bbc';

				for (var i = 0; i < numFeeds; i++) {
					var feedObj = {};
					// console.log('feeds[i]: ' + feeds[i]);
					// console.log('feeds length: ' + feeds.length);
					//console.log('feeds[i].link: ' + feeds[i].link.innerHTML);
					feedObj.id = prefix + feeds[i].getElementsByTagName('link')[0].innerHTML;
					feedObj.title = feeds[i].getElementsByTagName('title')[0].innerHTML;
					feedObj.description = feeds[i].getElementsByTagName('description')[0].innerHTML;
					feedObj.pubDate = feeds[i].getElementsByTagName('pubDate')[0].innerHTML;
					feedObj.link = feeds[i].getElementsByTagName('link')[0].innerHTML;
					//console.log('title: ' + feedObj.title);
					//console.log('desc: ' + feedObj.description);
					feedsAr.push(feedObj);
				}
				if (this.isMounted()) {
					this.setState({data: feedsAr});
				}

				//console.log('feedsAr: ' + feedsAr);
			}.bind(this),
			error: function(xhr, status, err) {
				//console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	render: function() {
		return (<div className="bbc-feed container">
					<div className="row">
						<h3 className='h3-bbc'>BBC News (US Edition)</h3>
					</div>
					<FeedList data={this.state.data} />
				</div>
		);
	}
})

var Feed = React.createClass({
	render: function() {
		return (
			<div className="col-xs-12 col-sm-6 col-md-4 feed feed-bbc">
				<h3><a href={this.props.link} target="_blank">{this.props.title}</a></h3>
				<p>{this.props.description}</p>
				{/*<p>{this.props.pubDate}</p>*/}
			</div>
			);
	}
});

var FeedList = React.createClass({
	render: function() {
		//console.log('props.data: ' + this.props.data);
		var feedNodes = this.props.data.map(function(feed) {
			return (
				<Feed key={feed.id} title={feed.title} description={feed.description} pubDate={feed.pubDate} link={feed.link} >
				</Feed>
			);
		});

		return (
			<div className="row feedList">
				{feedNodes}
			</div>
		);
	}
});

ReactDOM.render(
	<BbcFeed url='https://carol5-test.apigee.net/v1/bbc-news' />,
	document.getElementById('bbc')
);