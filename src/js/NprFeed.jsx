//src/js/npr-feed.jsx

var React = require('react');
var ReactDOM = require('react-dom');
var FeedList = require('FeedList.jsx');

var NprFeed = React.createClass({
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
        		var feeds = xmlDoc.querySelectorAll('item');
        		this.setState({data: feeds});

		//         console.log('data: ' + data);

		//         var xmlDoc = data;
		//         console.table(xmlDoc);
		//         var items = xmlDoc.querySelectorAll('item');
		//         console.log('items length: ' + items.length);
		//         var itemsLength = items.length;

		// //TODO: this works
		//         console.log('1st item: ' + items[0].getElementsByTagName('title')[0].innerHTML);
		//         console.log('1st item: ' + items[1].getElementsByTagName('title')[0].innerHTML);
		//         console.log('1st item: ' + items[2].getElementsByTagName('title')[0].innerHTML);

		//         for (var i = 0; i < itemsLength; i++) {
		//             var titles,
		//                 description,
		//                 pubdate,
		//                 link;
		//             titles = items[i].getElementsByTagName('title')[0].innerHTML;
		//             description = items[i].getElementsByTagName('description')[0].innerHTML;
		//             pubDate = items[i].getElementsByTagName('pubDate')[0].innerHTML;;
		//             link = items[i].getElementsByTagName('link')[0].innerHTML;
		//             console.log('titles: ' + titles);
		//             console.log('description: ' + description);
		//             console.log('pubDate: ' + pubDate);
		//             console.log('link: ' + link);
		//         }

      		}.bind(this),
      		error: function(xhr, status, err) {
        		//console.error(this.props.url, status, err.toString());
      		}.bind(this)
        });
	},
	render: function() {
		return (<div class="nprFeed">
					<FeedList />
				</div>
		);
	}
})

ReactDOM.render(
	<NprFeed url='http://www.npr.org/rss/rss.php?id=1001' />,
	document.getElementById('npr')
);