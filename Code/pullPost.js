var tumblrkey = "UcnXRtSmcjk9zACE4eCnANMuOL0oCnK6dYOYumdwYeO96GINFZ&jsonp=?";
var tumblrurls = [ "http://api.tumblr.com/v2/blog/peegaw.tumblr.com/posts?api_key=" + tumblrkey, 
                   "http://api.tumblr.com/v2/blog/talkinsnack.tumblr.com/posts?api_key=" + tumblrkey,
			       "http://api.tumblr.com/v2/blog/godofscrumprecipes.tumblr.com/posts?api_key=" + tumblrkey,
			       "http://api.tumblr.com/v2/blog/animerecipes.tumblr.com/posts?api_key=" + tumblrkey,
			       "http://api.tumblr.com/v2/blog/mysecretrecipebook.tumblr.com/posts?api_key=" + tumblrkey,
			       "http://api.tumblr.com/v2/blog/no-more-ramen.tumblr.com/posts?api_key=" + tumblrkey,
			     ];
var redditurls = [ "https://re.reddit.com/r/recipes/.json?jsonp=?",
                   "https://re.reddit.com/r/recipes/top/.json?jsonp=?",
                   "http://www.reddit.com/r/eatcheapandhealthy/.json?jsonp=?",
                   "https://re.reddit.com/r/recipes/top/.json?jsonp=?",			   
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

function amountRecipes(page){
  var i = 0;
  var j;
  
  for(j = 0; j < 25; j++){
    if(redditjson[page].data.children[j].data.link_flair_text === "Recipe"){
	  i++;
	}
  }
  
  return i;
}

function addRedditPost(n){
  var page;
  var postnr;
  var i, j;
  var recipes = [];	
  
  page = Math.floor((Math.random() * 4);
  
  i = 0;
  j = 1;
  while(i < 10 && j < 25){
    if(redditjson[page].data.children[j].data.link_flair_text.toUpperCase() === "recipe".toUpperCase()){
      recipes[i] = redditjson[page].data.children[j].data.selftext;
      i++;
    }

    j++;
  }
  
  postnr = Math.floor((Math.random() * recipes.length);
  posts[n] = recipes[postnr];
}

function getPost(){
  var i, j;
  
  i = 0;
  j = 1;
  while(i < 10 && j < 25){
    if(json.data.children[j].data.link_flair_text === "Recipe"){
      posts[i] = json.data.children[j].data.selftext;
      i++;
    }

    j++;
  }		
}

function setPosts(){
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
  getPost();
  setPosts();
  getValues();
  $("#test1").text(post1); 
  $("#test2").text(post2);
  $("#test3").text(post3);	
}

function loadJson(){
  $.getJSON(redditurls[0], function(data, status){
      redditjson[0] = data;
	  console.log(redditjson[0].data.modhash);
  });
  
  $.getJSON(redditurls[1], function(data, status){
      redditjson[1] = data;
	  console.log(redditjson[1].data.modhash);
  });
  
  $.getJSON(redditurls[2], function(data, status){
      redditjson[2] = data;
	  console.log(redditjson[2].data.modhash);
  });
  
  $.getJSON(redditurls[3], function(data, status){
      redditjson[3] = data;
	  console.log(redditjson[3].data.modhash);
  });
  
  $.getJSON(tumblrurls[0], function(data, status){
      tumblrjson[0] = data;
	  console.log(tumblrjson[0].response.blog.title);
  });
  
  $.getJSON(tumblrurls[1], function(data, status){
      tumblrjson[1] = data;
	  console.log(tumblrjson[1].response.blog.title);
  });
  
  $.getJSON(tumblrurls[2], function(data, status){
      tumblrjson[2] = data;
	  console.log(tumblrjson[2].response.blog.title);
  });
  
  $.getJSON(tumblrurls[3], function(data, status){
      tumblrjson[3] = data;
	  console.log(tumblrjson[3].response.blog.title);
  });
  
  $.getJSON(tumblrurls[4], function(data, status){
      tumblrjson[4] = data;
	  console.log(tumblrjson[4].response.blog.title);
  });
  
  $.getJSON(tumblrurls[5], function(data, status){
      tumblrjson[5] = data;
	  console.log(tumblrjson[5].response.blog.title);
  });
}
$(document).ready(function(){
  loadJson();
  $("#RDG").click(function(){
    buttonPress();  
  });
});

