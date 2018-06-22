$(function(){
	/*获取屏幕宽高*/
	var width=window.innerWidth;
	var height=window.innerHeight;
	/*当前页数*/
	var nowpage=0;
	
	$(".content").width(width);
	$(".content").height(4*height);
	
	$(".page").width(width);
	$(".page").height(height);
	
	/*不是jquery自带的，是引入的插件，手指触屏滑动的事件*/
	$(".content").swipe({
		swipe:function(event,direction,distance,duration,fingerCount){
			/*console.log(direction);//打印*/
			if(direction=="up"){
				nowpage++;
			}
			if(direction=="down"){
				nowpage--;
			}
			if(nowpage<0){
				nowpage=0;
			}else if(nowpage>3){
				nowpage=3;
			}
			
			$(".content").animate({top:-nowpage*100+"%"},{duration:400,complete:function(){
				if(nowpage==1){
					$(".page2-Farm").fadeIn(2000,function(){
						$(".page2-IT").fadeIn(2000)
					})
				}
				if(nowpage==2){
					$(".page3-earlyTitle").fadeIn(2000);
					$(".page3-lastBusTitle").fadeIn(3000);
					$(".page3-Building-bus").animate({left:"-100%"},{duration:2000})
					$(".page3-lastBusAvatar").animate({right:"50%"},{duration:3000,complete:function(){
						$(".page3-lastBusStation").fadeOut("slow");
						$(".page3-earlyTitle").fadeOut("slow");
						$(".page3-lastBusTitle").fadeOut("slow");
						$(".page3-lastBusAvatar").fadeOut("slow");
					/*	$(".page3-Building-bus").fadeOut("slow",function(){
							$(".page3-myTeamSpace").animate({width:30%},{duration:400,complete:function(){
								$(".page3-myteamWhereTxt").animate({width:55%},{duration:400})
							}})
						})*/
					}})
				}
				
			}})
		}
      
	});
	$(".page1-Building").fadeIn(400,function(){
		$(".page1-Flight").animate({width:"70%"},{duration:2000})
	});
	

	
	/*animate({要做的动画效果},{duration动画时间}*/

})



/*d等文档完成之后再执行JS代码*/