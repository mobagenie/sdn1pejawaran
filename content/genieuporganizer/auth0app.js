$(document).ready(function() {
  
  var lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, {
    auth: {
      params: { scope: 'openid email profile' } //Details: https://auth0.com/docs/scopes
    },
    rememberLastLogin: true,
    allowedConnections: ['google-oauth2','facebook']
  });

  $('.btn-login').click(function(e) {
    e.preventDefault();
    lock.show();
  });

  lock.on("authenticated", function(authResult) {
    lock.getProfile(authResult.idToken, function(error, profile) {
        if (error) {
            console.log(error);
            alert("Unable to authenticate!");
            return;
        }
        localStorage.setItem('id_token', authResult.idToken);
        // Display user information
        show_profile_info(profile);
        // enable api button
        $('.btn-api').removeAttr("disabled").text("Press me, I'm authenticated!");
    });
  });


  $('.btn-logout').click(function(e) {
    e.preventDefault();
    logout();
  });

//We use the token from Auth0 to authenticate API calls against restdb.io databases by setting the Authorization header using the Bearer token scheme.
  $('.btn-api').click(function(e) {
    
    fetch("https://websitedemo-4db9.restdb.io/rest/items?max=4",{headers:{
        'Authorization':'Bearer ' + localStorage.getItem("id_token")
    }}).then(response=>{
        return response.json();
    }).then(body=>{
         $('#apidata').text(JSON.stringify(body, null, '  '));
    });
    e.preventDefault();
  });


  //retrieve the profile:
  var retrieve_profile = function() {
    var id_token = localStorage.getItem('id_token');
    if (id_token) {
      lock.getProfile(id_token, function (err, profile) {
        if (err) {
          return console.log('There was an error getting the profile: ' + err.message);
        }
        // Display user information
        show_profile_info(profile);
        // enable api button
        $('.btn-api').removeAttr("disabled");
      });
    }
  };

  var show_profile_info = function(profile) {
     $('.nickname').text(profile.nickname);
     $('.btn-login').hide();
     $('.avatar').attr('src', profile.picture).show();
     $('.btn-logout').show();
  };

  var logout = function() {
    localStorage.removeItem('id_token');
    $('.btn-api').attr("disabled", "true");
    window.location.href = "/auth0-demo";
  };

  retrieve_profile();
});