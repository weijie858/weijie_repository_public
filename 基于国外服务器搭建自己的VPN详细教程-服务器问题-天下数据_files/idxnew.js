
//头部悬浮js样式
$(window).scroll( function() { 
	var scrollTop = $(document).scrollTop(); 
	var top = $('.wx_box').height();
	if(scrollTop >= top){
		$('.wx_box').css('display','none');
		$('.meu_zcbox').css('display','none');
		$('.meu_zc400').css('display','block');
		$('.menu_box').css('background-color','#191919');
		$('.menu_top').css('height','60px');
		
	}else{
		$('.wx_box').css('display','block');
		$('.meu_zcbox').css('display','block');
		$('.meu_zc400').css('display','none');
		$('.menu_box').css('background-color','');
		$('.menu_top').css('height','102px');
	}
} );

<!--导航下拉JS-->
$(document).ready(function(){

$(".newhd_list").mouseleave(function(){
    $(".newhd_list").hide();
  });

$(".cp_list").mouseleave(function(){
    $(".cp_list").hide();
  });

$(".jj_list").mouseleave(function(){
    $(".jj_list").hide();
  });

$(".fw_list").mouseleave(function(){
    $(".fw_list").hide();
  });
  
$(".js_list").mouseleave(function(){
    $(".js_list").hide();
  });

$(".me_list").mouseleave(function(){
    $(".me_list").hide();
  });      
   
});

$("#hd_xl").hover(function(){  
	$(".newhd_list").show();  
},function(){  
	$(".newhd_list").hide();  
})  

$("#cp_xl").hover(function(){  
	$(".cp_list").show();  
},function(){  
	$(".cp_list").hide();  
})  

$("#jj_xl").hover(function(){  
	$(".jj_list").show();  
},function(){  
	$(".jj_list").hide();  
})  
$("#fw_xl").hover(function(){  
	$(".fw_list").show();  
},function(){  
	$(".fw_list").hide();  
})
$("#js_xl").hover(function(){  
	$(".js_list").show();  
},function(){  
	$(".js_list").hide();  
})
$("#me_xl").hover(function(){  
	$(".me_list").show();  
},function(){  
	$(".me_list").hide();  
})




<!--导航下拉内容上下滑动切换JS
<!--
//切换到相关页
function indxla(n) 
{
  var ind = document.getElementById("xl_meu").getElementsByTagName("li");
  var xla = ind.length;

  for (i=1;i<=xla;i++)
  {
    document.getElementById("xl"+i).className="";
    document.getElementById("la"+i).style.display='none';
  }
    document.getElementById("xl"+n).className="activ2";
    document.getElementById("la"+n).style.display='';
}
//-->







