$(function(){
   $(document).on('click', '.imgzoom', function(e){
       e.preventDefault();   
       const imgPath =$(this).attr("href");
       $('.zoombody').empty();

       //1.먼저객체 만들고
       var imgHeight="";
       var imgWidth="";
       $("<img>") // 새 이미지 객체 생성
       .attr("src", imgPath) // 이미지 경로 설정
       .on('load', function() { // 이미지 로드 완료시
           imgWidth = this.width;
           imgHeight = this.height; // 너비와 높이 출력
           let iWidth, iHeight, sWidth, sHeight, top, left;
           if(imgHeight > imgWidth){
              const ratio = 800 / imgHeight;
              imgHeight = 800;
              imgWidth = this.width * ratio;
              iWidth = imgWidth+"px";
              iHeight = "800px";
              sWidth = imgWidth+22+"px";
              sHeight = "822px";     
              top = "50px";
           }else{
              const ratio = 800 / imgWidth;
              iWidth = 800+"px";
              iHeight = (imgHeight*ratio)+"px";
              sWidth = "822px";
              sHeight =  (imgHeight*ratio)+22+"px";
              top = "150px"; 
           }
              left = "calc( 50% - "+sWidth/2+"px)";
           

              $('.zoombody').html("<img src='"+imgPath+"' alt='"+imgPath+"' style='width:"+iWidth+"; height:"+iHeight+";'/>");
              $('.zoombox').css({
                height: sHeight,  
                width: sWidth,
                left: left,
                top: top
               }).fadeIn();
           
        });
   });
   
    $('.close').click(function(){
       $('.youtube-body, .zoombody').empty();
       $('.zoombox, .youtube-popup').fadeOut();
    });

    $('.card-youtube').click(function(e){
       e.preventDefault;
       const id = $(this).data("id");
 
       const iframe = '<iframe width="900" height="507" id="youtube" ' +
                       'src="https://www.youtube.com/embed/'+id+'"'+
                       ' title="YouTube video player" frameborder="0" ' +
                       ' allow="accelerometer; autoplay; clipboard-write; ' +
                       ' encrypted-media; gyroscope; picture-in-picture; ' +
                       ' web-share" referrerpolicy="strict-origin-when-cross-origin" '+ 
                       'allowfullscreen></iframe>';
       $('.youtube-body').html(iframe);
       $('.youtube-popup').fadeIn();
    });
    //유튜브 경로에서 비디오 아이디 추출하는 정규식
    
   //회원가입팝업
    $('.signup').click(function(e){
        e.preventDefault;
       $('.signuppopup').fadeIn();
    });

    $('.reset').click(function(e){
        e.preventDefault;
        $('form').each(function(){
            this.reset();
        });
        $('.signuppopup').fadeOut();
     });
});
