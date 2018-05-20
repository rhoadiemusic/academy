$(document).ready(function(){
    
    $("html").easeScroll({
  frameRate: 60,
  animationTime: 1000,
  stepSize: 120,
  pulseAlgorithm: 1,
  pulseScale: 8,
  pulseNormalize: 1,
  accelerationDelta: 20,
  accelerationMax: 1,
  keyboardSupport: true,
  arrowScroll: 50,
  touchpadSupport: true,
  fixedBackground: true
});

    // swiper cursos
    var swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 6500,
        disableOnInteraction: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        fadeEffect: {
    		crossFade: true
		}
      },
    });
    
  
// drawline 

	function pathPrepare (el) {
		var lineLength = el[0].getTotalLength();
		el.css("stroke-dasharray", lineLength);
		el.css("stroke-dashoffset", lineLength);
	}

	var line = $("path#line");
	var potenciar = $("path#potenciar");
	var habilidades = $("#habilidades path");

	// prepare SVG
	pathPrepare(line);
	pathPrepare(potenciar);
	pathPrepare(habilidades)


	// init controller
	var controller = new ScrollMagic.Controller();
	
	
	// generic animations
	
	
	// slideins
	  jQuery('.animated-slide').each(function(){
                new ScrollMagic.Scene({
                    
                    triggerElement: this,
                   offset:-280
                })
                .setClassToggle(this, 'slideIn')
                .addTo(controller)
                
    })  
            
    // fadeins
    
             jQuery('.animated').each(function(){
                new ScrollMagic.Scene({
                    
                    triggerElement: this,
                   offset:-280
                })
                .setClassToggle(this, 'appear')
                .addTo(controller)
                
    })  
   
   
   
	
	
	
	

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to(line, 0.9, {
		  strokeDashoffset: 0, 
		  ease:Linear.easeNone
		  
		})) 
		.add(TweenMax.to("path#line", 1, {stroke: "#00DE7E", ease:Linear.easeNone}), 0);			
		
	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#about", duration: 300, tweenChanges: true})
					.setTween(tween)
					.addTo(controller);
	
	// draw potenciar 
	
	var tween3 = new TimelineMax()
		.add(TweenMax.to(potenciar, 0.9, {
		  strokeDashoffset: 0, 
		  ease:Linear.easeNone
		  
		})) 
		.add(TweenMax.to("path#potenciar", 1, {stroke: "#003399", ease:Linear.easeNone}), 0);			
		
	// build scene
	var scene3 = new ScrollMagic.Scene({triggerElement: "#about", duration: 50, tweenChanges: true})
					.setTween(tween3)
					.addTo(controller);
	
	// draw habilidades 
	
	var tween4 = new TimelineMax()
		.add(TweenMax.to(habilidades, 0.9, {
		  strokeDashoffset: 0, 
		  ease:Linear.easeNone
		  
		})) 
		.add(TweenMax.to("#habilidades path", 2, {stroke: "#003399", ease:Linear.easeNone}), 0);			
		
	// build scene
	var scene4 = new ScrollMagic.Scene({triggerElement: "#about", duration: 100, tweenChanges: true})
					.setTween(tween4)
					.addTo(controller);
	
	

					
	// staggered blocks 				
		// build tween
			var tween2 = TweenMax.staggerFromTo(".course-col", 2, {bottom: -100}, {bottom: 0, ease: Back.easeOut}, 0.1);

			// build scene
			var scene2 = new ScrollMagic.Scene({triggerElement: "#other-courses", duration: 1000})
							.setTween(tween2)
							.addTo(controller);
							
							

    
})