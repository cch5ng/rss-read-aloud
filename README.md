#audio-reader

## running the feed request (dev)
  * from project root, run
    * `node test_request.js`
  * from project root, run
    * `node proxy.js`
  * in browser, open
    * http://localhost:8080
  * see console for request results

### status

* 11.30.15
  * TODO
    * http://feeds.bbci.co.uk/news/rss.xml?edition=us
      * issue with xsl; try http://apigee.com/docs/api-services/reference/xsl-transform-policy
      * http://feeds.bbci.co.uk/shared/bsp/xsl/rss/nolsol.xsl
      * CORS, need to resolve as for yahoo (apigee api proxy)
    * add one feed from mediafeed
      * http://rss.nytimes.com/services/xml/rss/nyt/InternationalHome.xml
  * Done: One play button with controls (sticky controls at the top; nav bar; and bottom?)
  * Note: yesterday yahoo would not load even though the xhr seemed to return data; it was slow; perhaps due to issues with isp and dns lookups
  * today yahoo loads without any issues
  * can change the voice using the system settings
    * for mac: change system voice from Dictation & Speech

* 11.29.15
  * yahoo doesn't load b/c xhr returns after initial page load

* 11.28.15
  * maybe change so that there is one button that plays audio for all feeds
    * then need to update the class set for the feed component for yahoo

  * yahoo rss
    * CORS issue
    * created apigee api proxy

* 11.27.15
  * hacker news: tried to separate the ajax nesting into two separate functions: getFeedIds() and loadFeedsFromServer() but not sure this helps
    * temp comment out
    * broke the logic

  * issue hnews doesn't render. think issue with nested ajax and setting state
    * remove hacker news for time being; focus on regular rss feeds
      * timing issue with the nested ajax calls; not sure how to resolve this
      * maybe add polling to update the page? this will be too complex with the audio feature
    * nytimes
    * look at list of top 10 news sites
    * also wordpress rss
    * issue probably with state (see line 9, 75 as workaround??)
      * this did not work, gives an error, see screenshot
    * tried this.state.data => this.state.hnData
  * why webpack so slow

* 11.24.15
  * TO FIX: copied bower components to /public folder so it would get served, need to fix this later

  * added workaround for the voice elements not handling long text; it may get messy with pause and resume type controls

  *typo in rocha's docs; event listeners should be like 'end', 'start', 'error'
    * currently documented as 'onend', 'onstart', 'onerror'

  * issue: for loop iteration too fast and so not all headlines are getting read, only first and last (4 times)
  * added voice-elements polymer component as proof of concept; would like to later try this as web api (IBM)
    * https://github.com/zenorocha/voice-elements

  * issue rendering ajax results when try to use separate component, FeedList.jsx ... but when I move all components into NprFeed.jsx, the content renders as expected

  * stuck, FeedList.jsx, line 30 => nothing renders
  * perhaps syntax running array.map does not work for nodeList

* 11.20.15
  * TODO: figure out what are the business requirements
    * what would it cost to pay for a server with 24/7 uptime; what is the average amount of time/requests that would be made
    * if it is using websockets, isn't that a really high volume traffic and would people really want to pay for a constant service just for news content??
    * what is the min. it would cost
    * what is the max. that people would be willing to pay for such a service
    * what is the potential profit margin
    * competition
      * http://lifehacker.com/5856652/five-best-rss-newsreaders
      * look at reeder (ios) pricing model and features

  * TODO: figure how to parse the xml doc
    * http://www.dummies.com/how-to/content/how-to-load-xml-with-javascript-on-an-html5-page.html
    * http://stackoverflow.com/questions/3200329/view-ajax-response-content-in-chrome-developer-tools

    * http://www.w3schools.com/xml/dom_intro.asp
    * https://api.jquery.com/category/traversing/
    * https://api.jquery.com/jQuery.parseXML/
    * https://developer.mozilla.org/en-US/docs/Introduction_to_using_XPath_in_JavaScript

  * currently have a crude proxy server, it is running separately from the intended node app
  * https://advancedweb.hu/2015/07/28/a_simple_proxy_to_circumvent_the_sop/

  * reference
    * https://github.com/request/request
    * https://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/text-to-speech/index.shtml


* 11.13.15
  * have a basic node web server (running on :8124)
  * have an express middleware app (running on :3000)
  * ?not sure how to better integrate express with node? 

  * todo
    * deploy a proxy server

  * issues
    * figure out how to handle each source's unique xsl (rss stylesheet)
      * some are referenced with relative links (bbc), others are referenced with absolute urls (nytimes), which are then blocked from dload
      * http://stackoverflow.com/questions/5167633/problem-how-to-display-a-wordpress-rss-feed-in-a-browser-that-doesnt-have-a-bu