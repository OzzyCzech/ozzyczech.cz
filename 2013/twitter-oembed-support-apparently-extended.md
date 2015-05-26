<!--
title : Twitter oEmbed support apparently extended
author : Roman Ožana <ozana@omdesign.cz>
date : 26.2.2013 19:41:15
tags : API, twitter, wordpress
-->

# Twitter oEmbed support apparently extended

The new version of **Twitter API 1.1** wrongly requires OAuth for [oEmbed part of API][1]. I found the discussion of this problem in trac and one very [encouraging response][2] from Andrew Nacin:

> [Andrew Nacin][3]: Initial response from Twitter is that &#8220;the endpoint will continue to operate unauthenticated, as-is the spirit of oEmbed.&#8221; Still trying to confirm whether that means 1.0&#8217;s oEmbed endpoint will remain in operation past the 1.0 shutdown, if 1.1&#8217;s oEmbed endpoint will be changed to be entirely unauthenticated, or both. Either way, we&#8217;re in the clear in terms of not needing to implement something new. <p </p>

 [1]: https://dev.twitter.com/docs/api/1.1/get/statuses/oembed
 [2]: http://core.trac.wordpress.org/ticket/23419#comment:9
 [3]: http://profiles.wordpress.org/nacin