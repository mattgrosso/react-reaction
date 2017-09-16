import React from 'react';

function FacebookScript() {
  return (
    <div>
      <div id="fb-root"></div>
      {/* We know that we can add a script like this but I kind of hate it.
        It seems like we should be importing the javascript, not just including it
        as an HTML element. */}
      <script>{(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=1804533342920640";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'))}</script>
    </div>
  )
}

export default FacebookScript;
