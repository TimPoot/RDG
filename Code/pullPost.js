var url = "https://re.reddit.com/r/recipes/.json?jsonp=?";
var json;
var posts = [];
var post1, post2, post3;



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
  do{
    postnr1 = Math.floor((Math.random() * posts.length) + 1);
    postnr2 = Math.floor((Math.random() * posts.length) + 1);
    postnr3 = Math.floor((Math.random() * posts.length) + 1);
    break;
  }while(postnr1 === postnr2 || postnr2 === postnr3 || postnr1 === postnr3);
  
  post1 = posts[postnr1];
  post2 = posts[postnr2];
  post3 = posts[postnr3];
}

function buttonPress(){
  getPost();
  setPosts();
  
  $("#test1").text(post1); 
  $("#test2").text(post2);
  $("#test3").text(post3);	
}

$(document).ready(function(){
  $("#RDG").click(function(){
    $.getJSON(url, function(data, status){
      json = data;
      buttonPress();  
    });
  });
});

