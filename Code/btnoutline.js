var tswitch = 1;
var rswitch = 1;



$("#tumblrbtn").click(function(){
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
	if (rswitch = 0){
		rwsitch = 1;
		$(this).addClass('btnoutline');
	}
	else{
		rswitch = 0;
		$(this).removeClass('btnoutline');
	}
});
