var tumblrkey = "UcnXRtSmcjk9zACE4eCnANMuOL0oCnK6dYOYumdwYeO96GINFZ&jsonp=?";
var tumblrurls = [ "http://api.tumblr.com/v2/blog/talkinsnack.tumblr.com/posts?api_key=" + tumblrkey,
			       "http://api.tumblr.com/v2/blog/godofscrumprecipes.tumblr.com/posts?api_key=" + tumblrkey,
			       "http://api.tumblr.com/v2/blog/animerecipes.tumblr.com/posts?api_key=" + tumblrkey + "&tag=recipe",
			       "http://api.tumblr.com/v2/blog/mysecretrecipebook.tumblr.com/posts?api_key=" + tumblrkey,
			       "http://api.tumblr.com/v2/blog/no-more-ramen.tumblr.com/posts?api_key=" + tumblrkey + "&tag=recipe"
			     ];
var redditurls = [ "https://re.reddit.com/r/recipes/.json?jsonp=?",
                   "https://re.reddit.com/r/recipes/top/.json?jsonp=?",
                   "http://www.reddit.com/r/eatcheapandhealthy/.json?jsonp=?",
                   "https://re.reddit.com/r/recipes/top/.json?jsonp=?"			   
			     ];
var tumblrjson = [];
var redditjson = [];
var posts = [];
var urls = [];
var postnr1, postnr2, postnr3;
var likes = "";
var dislikes = "";
var tswitch = 1;
var rswitch = 1;

function SearchPost(post, keyword){

  if (post.toLowerCase().indexOf(keyword) > -1)
	  return true;
  else
	  return false;
}

function addRedditPost(n){
  var page;
  var postnr;
  var i, j;
  var recipes = [];
  var redditurls = [];
  
  page = Math.floor(Math.random() * 4);

  i = 0;
  j = 1;
  while(i < 10 && j < redditjson[page].data.children.length){
    if(redditjson[page].data.children[j].data.link_flair_text !== null){
      if(redditjson[page].data.children[j].data.link_flair_text.toUpperCase() === "recipe".toUpperCase()){
        recipes[i] = redditjson[page].data.children[j].data.selftext;
        redditurls[i] = redditjson[page].data.children[j].data.url;
        i++;
      }
    }

    j++;
  }
  
  postnr = Math.floor(Math.random() * recipes.length);
  posts[n] = recipes[postnr];
  urls[n] = redditurls[postnr];
  console.log(urls[n]);
}

function addTumblrPost(n){
  var page;
  var postnr;
  
  page = Math.floor(Math.random() * 5);
  postnr = Math.floor(Math.random() * (tumblrjson[page].response.posts.length - 1));
  
  if(tumblrjson[page].response.posts[postnr].type === "photo"){
    posts[n] = tumblrjson[page].response.posts[postnr].caption;
  }else if(tumblrjson[page].response.posts[postnr].type === "link"){
    posts[n] = tumblrjson[page].response.posts[postnr].description;
  }else if(tumblrjson[page].response.posts[postnr].type === "text"){
    posts[n] = tumblrjson[page].response.posts[postnr].body;
  } 
 
  urls[n] = tumblrjson[page].response.posts[postnr].post_url;
  console.log(urls[n]);
}

function setPosts(){
  var rand;
  var i;

  for(i = 0; i < 10; i++){
    //addTumblrPost(i);
    rand = Math.floor(Math.random() * 10);
	
    if(rand <= 5){
      addTumblrPost(i);
    }else{
      addRedditPost(i);
    }
  }  
}

function pickPosts(){
  do{
    postnr1 = Math.floor((Math.random() * posts.length));
    postnr2 = Math.floor((Math.random() * posts.length));
    postnr3 = Math.floor((Math.random() * posts.length));
  }while(postnr1 === postnr2 || postnr2 === postnr3 || postnr1 === postnr3);
  
  $("#recipe1").html(posts[postnr1]); 
  $("#recipe2").html(posts[postnr2]);
  $("#recipe3").html(posts[postnr3]);
}

function getValues(){
	likes = $("#likes").val();
	dislikes = $("#dislikes").val();
}

function buttonPress(){
  setPosts();
  pickPosts();
  getValues();	
}

function loadJson(){
  $.getJSON(redditurls[0], function(data, status){
      redditjson[0] = data;
  });
  
  $.getJSON(redditurls[1], function(data, status){
      redditjson[1] = data;
  });
  
  $.getJSON(redditurls[2], function(data, status){
      redditjson[2] = data;
  });
  
  $.getJSON(redditurls[3], function(data, status){
      redditjson[3] = data;
  });
  
  $.getJSON(tumblrurls[0], function(data, status){
      tumblrjson[0] = data;
  });
  
  $.getJSON(tumblrurls[1], function(data, status){
      tumblrjson[1] = data;
  });
  
  $.getJSON(tumblrurls[2], function(data, status){
      tumblrjson[2] = data;
  });
  
  $.getJSON(tumblrurls[3], function(data, status){
      tumblrjson[3] = data;
  });
  
  $.getJSON(tumblrurls[4], function(data, status){
      tumblrjson[4] = data;
  });
}



function tumblrvink(){
	if (tswitch == 0){
		tswitch = 1;
		$(".vink1").show();
	}else{
		tswitch = 0;
		$(".vink1").hide();
	}
}
	
function redditvink(){
	if (rswitch == 0){
		rswitch = 1;
		$(".vink2").show();
	}else{
		rswitch = 0;
		$(".vink2").hide();
	}
}



$(document).ready(function(){
  $(".group").hide();
  $("#advmenu").hide();
  $(".advbtn").click(function(){
	   $("#advmenu").toggle(); 
  });
  $('.tumblrbtn').click(function(){
	  tumblrvink();
  });
  $('.redditbtn').click(function(){
	  redditvink();
  });
  loadJson();
  $("#RDG").click(function(){
    $(".group").fadeIn(2500);
    buttonPress();  
  });

  $("#exURL1").click(function(){
    window.location.href = urls[postnr1];
  });

  $("#exURL2").click(function(){
    window.location.href = urls[postnr2];
  });

  $("#exURL3").click(function(){
    window.location.href = urls[postnr3];
  });
});

