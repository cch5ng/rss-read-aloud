#audio-reader

## running the feed request (dev)
  * from project root, run
    * `node test_request.js`
  * in browser, open
    * http://localhost:8080
  * see console for request results

### status

* 11.20.15
  * TODO: figure how to parse the xml doc
    * http://www.w3schools.com/xml/dom_intro.asp
    * https://api.jquery.com/category/traversing/
    * https://api.jquery.com/jQuery.parseXML/

    * http://www.dummies.com/how-to/content/how-to-load-xml-with-javascript-on-an-html5-page.html
    * http://stackoverflow.com/questions/3200329/view-ajax-response-content-in-chrome-developer-tools
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