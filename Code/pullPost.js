var url = "https://re.reddit.com/r/recipes/.json?jsonp=?";
var json;
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
	likes = document.getElementById("likes");
	dislikes = document.getElementById("dislikes");
	alert(likes);
}



function buttonPress(){
  getPost();
  setPosts();
  getValues();
  $("#test1").text(post1); 
  $("#test2").text(post2);
  $("#test3").text(post3);	
  
  if (SearchPost(post1, GlobalKeyword))
	  alert('1');
  if (SearchPost(post2, GlobalKeyword))
	  alert('2');
  if (SearchPost(post3, GlobalKeyword))	 
	  alert('3');
}

$(document).ready(function(){
  $("#RDG").click(function(){
    $.getJSON(url, function(data, status){
      json = data;
      buttonPress();  
    });
  });
});

