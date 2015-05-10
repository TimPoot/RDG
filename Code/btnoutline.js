var tswitch = 1;
var rswitch = 1;



$("#tumblrbtn").click(function(){
	alert("exists");
	if (tswitch = 0){
		twsitch = 1;
		$(this).addClass('btnoutline');
	}
	else{
		tswitch = 0;
		$(this).removeClass('btnoutline');
	}
});

$("#redditbtn").click(function(){
	alert("exists");
	if (rswitch = 0){
		rwsitch = 1;
		$(this).addClass('btnoutline');
	}
	else{
		rswitch = 0;
		$(this).removeClass('btnoutline');
	}
});
