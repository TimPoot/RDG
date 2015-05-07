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
var post1, post2, post3;
var likes = "";
var dislikes = "";

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
  
  page = Math.floor((Math.random() * 4));
  
  i = 0;
  j = 1;
  while(i < 10 && j < 25){
    console.log(page + " " + j);
    if(redditjson[page].data.children[j].data.link_flair_text != undefined){
      if(redditjson[page].data.children[j].data.link_flair_text.toUpperCase() === "recipe".toUpperCase()){
        recipes[i] = redditjson[page].data.children[j].data.selftext_html;
        i++;
      }
	}

    j++;
  }
  
  postnr = Math.floor(Math.random() * recipes.length);
  posts[n] = recipes[postnr];
}

function addTumblrPost(n){
  var page;
  var postnr;
  
  page = Math.floor(Math.random() * 5);
  postnr = Math.floor(Math.random() * 15);
  
  if(tumblrjson[page].response.blog.posts[postnr].type === "photo"){
    posts[n] = tumblrjson[page].response.blog.posts[postnr].caption;
  }else if(tumblrjson[page].response.blog.posts[postnr].type === "link"){
    posts[n] = tumblrjson[page].response.blog.posts[postnr].description;
  }else if(tumblrjson[page].response.blog.posts[postnr].type === "text"){
    posts[n] = tumblrjson[page].response.blog.posts[postnr].body;
  } 
}

function setPosts(){
  var rand;
  var i;

  for(i = 0; i < 10; i){
    rand = Math.floor(Math.rand * 10);
	
	if(rand <= 5){
	  addTumblrPost(i);
	}else{
	  addRedditPost(i);
	}
  }  
}

function pickPosts(){
  var postnr1, postnr2, postnr3;
  console.log(posts.length);
  do{
    postnr1 = Math.floor((Math.random() * posts.length));
    postnr2 = Math.floor((Math.random() * posts.length));
    postnr3 = Math.floor((Math.random() * posts.length));
  }while(postnr1 === postnr2 || postnr2 === postnr3 || postnr1 === postnr3);

  console.log(postnr1);
  console.log(postnr2);
  console.log(postnr3);
  
  post1 = posts[postnr1];
  post2 = posts[postnr2];
  post3 = posts[postnr3];
}

function getValues(){
	likes = $("#likes").val();
	dislikes = $("#dislikes").val();
}

function buttonPress(){
  setPosts();
  pickPosts();
  getValues();
  $("#test1").html(post1); 
  $("#test2").html(post2);
  $("#test3").html(post3);	
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

$(document).ready(function(){
  loadJson();
  $("#RDG").click(function(){
    buttonPress();  
  });
});

