---
title: "MLBB: Bang Bang REDEEM CODE"
date: 2019-05-09T22:30:24+07:00
draft: false
type: page
slug: mlbb-redeem-code
layout: "setup"
---

  <script type="text/javascript">
    $(function(){
      $.ajax({
        "url": "https://mobagenie-eb6a.restdb.io/rest/mlbbredeemcode",
  "async": true,
  "crossDomain": true,
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "60d21140e2c96c46a2463829",
    "cache-control": "no-cache"
  },
        success: function(data){
		//alert(data);
         for(i=0; i<data.length; i++){
            $('tbody').append('<tr><td>'+data[i].no+'</td><td>'+data[i].date+'</td><td>'+data[i].code+'</td><td>'+data[i].status+'</td><td>'+data[i].reward+'</td></tr>');
         }
       },
       error: function(data){
       alert("tidak dapat memproses");
     }
    });
  });
  
     /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */

    var disqus_config = function () {
    <!-- this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable -->
	var PAGE_IDENTIFIER  = 'mlbb-redeem-code';
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://mobagenie.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
	
</script>
</head>
<body>

 
<form id="myform">
  <table border="1" cellspacing="0" width="100%">
    <thead>
     <tr>
	 <th>NO</th>
        <th>DATE</th>
        <th>CODE</th>
        <th>STATUS</th>
        <th>REWARD</th>		
     </tr>
    </thead>
    <tbody></tbody>
  </table>
</form>

<!-- <div id="time-based-content"> -->
<div id="disqus_thread"></div>
<!-- </div> -->


<script>

</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

<br>

<script id="dsq-count-scr" src="//mobagenie.disqus.com/count.js" async></script>