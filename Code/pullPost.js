var url = "https://re.reddit.com/r/recipes/.json?jsonp=?"
var post1, post2, post3;

$(document).ready(function(){
  $("#RDG").click(function(){
    do{//niet meer dubbele posts
      post1 = Math.floor((Math.random() * 10) + 1);
      post2 = Math.floor((Math.random() * 10) + 1);
      post3 = Math.floor((Math.random() * 10) + 1);
    }while(post1 === post2 || post2 === post3 || post1 === post3)
		  
    $.getJSON(url, function(data, status){
      $("#test1").text(data.data.children[post1].data.selftext); 
      $("#test2").text(data.data.children[post2].data.selftext);
      $("#test3").text(data.data.children[post3].data.selftext);				
    });
  });
});
