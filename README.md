# Effects of optimisation techniques of HTTP 1.1 over HTTP/2

### Proposal

<p>The aim of this research is to ascertain whether HTTP/2 yields significant performance gains over HTTP 1.1 with and without well established performance optimisation techniques. HTTP/2 is the solution to well known issues of HTTP 1.1 by addressing real time responsiveness and protocol performance.</p>
<p>It achieves this by using a single multiplexed TCP connection, converting text files into binary files and header compression along with other new features. However, in doing so HTTP/2 does away with many well established performance optimisation techniques used with HTTP 1.1 like minification, concatenation, resource sharding, gzipping as well as inlining resources.</p>
<p>This paper will attempt to test the performance of HTTP/2 and HTTP 1.1 over networks with varied bandwidths and web applications that handle large amounts of content on the client side. We will port over, where applicable, performance optimisation techniques from HTTP 1.1 to HTTP/2. The  purpose of this is to verify that there are significant performance gains to be made with HTTP/2 over HTTP 1.1, and if so, what are the variations in performance. </p>
<p>While HTTP/2 has been widely implemented internally by major companies like Google and Akamai, it is still relatively unknown how it will integrate with the larger world wide web. This stems from the fact that such large companies operate and manage large internal networks where they can exercise complete control over the content being transmitted. This paper will focus to highlight how HTTP/2 will handle resources stored via CDN. Since HTTP/2 uses a single multiplexed TCP connection to transfer content, it would be interesting to see its adaptation to requests that span across distributed resources using CDN like Akamai. </p>

## Run Experiments

`cd` into http-2 and run node `server.js`
