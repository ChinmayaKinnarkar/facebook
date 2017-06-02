$( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBAH0K7vjhcszIaZAgIqD9bDDJTHrVn5SjwaCjNHl3uHdDJvfFjnTzE9vClMxXQfhI1xlFk1hDais164fIuVDbZBZCFf2x26ZAzZC5pcGOnxBMpk93xUziKCit5ZCpqPfYFegSAMOs4F7uYlWlFwa2F3QoyoZBzgjgOOzBQ4IwhW7b6JB3gTz1TsZD';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                      $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                      $("#myName").text(response.name);
                      $("#myEmail").text(response.email);
                      $("#myHometown").text(response.hometown.name);
                      $("#myLocation").text(response.location.name);
                      for(i in response.education)
                    {
                         console.log(response.education[i].school.name);
                          $("#mySchool").append(response.education[i].school.name);


                    }  
                  }
                                   
            } 

        ); 

   }
    $("#facebookBtn").on('click',getFacebookInfo)

  });

(function(){
    $.getJSON("https://graph.facebook.com/237173582992285/feed?access_token=EAACEdEose0cBAH0K7vjhcszIaZAgIqD9bDDJTHrVn5SjwaCjNHl3uHdDJvfFjnTzE9vClMxXQfhI1xlFk1hDais164fIuVDbZBZCFf2x26ZAzZC5pcGOnxBMpk93xUziKCit5ZCpqPfYFegSAMOs4F7uYlWlFwa2F3QoyoZBzgjgOOzBQ4IwhW7b6JB3gTz1TsZD", function(results){
        console.log(results);
    });
})();

