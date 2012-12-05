
var puffImages = ['/static/images/vanquish-logo.png'];
var current = 0;

var SmokeEffect = {
	
	smokeWidth: 80, //standard width
	smokeHeight: 45, //standard height
	
    multiplyIntroRatio: true, //true to multiply, false to divide
    introRatio: 1.5, //animation startout height
    introDuration: 100, //grow duration
	introOpacity: 0.4, //the opacity of fully grown puffs
	outroRatio: 2.5, //animation ending height
	outroDuration: 2500, //fade duration
	outroOpacity: 0.0, //the opacity of dying puffs

	paused: false, //pause puff creation?

	randomizeImage: false, //whether to loop through images at random or to run them sequentially

	//don't touch this:
	smokePos: new Array(),
		
    // @id The element where puffs should originate from
    // @posX The 'x' position, of the origin element, where puffs should originate from
    // @posY The 'y' position, of the origin element, where puffs should originate from
	// @puffPics An array of images that will displayed as smoke puffs.
	makeEffect: function (id, posX, posY, puffPics) {

	    puffImages = puffPics;

		//set position from the "parent"
		SmokeEffect.smokePos[id] = new Array();
		SmokeEffect.smokePos[id]['x'] = posX;
		SmokeEffect.smokePos[id]['y'] = posY;
		
		//set a random time to start puffing
		var time = (Math.floor(Math.random()*3001));
	    setTimeout("SmokeEffect.animate('" + id + "')", time);
	},
	
    togglePause: function () { //toggles the run state of the animation
        SmokeEffect.paused = !SmokeEffect.paused;
    },
	
    toggleRandomize: function () { //toggles whether to randomize images or run them sequentially
        SmokeEffect.randomizeImage = !SmokeEffect.randomizeImage;
    },
	
    animate: function (id) {
        if (SmokeEffect.paused) return;

        var imgSrc = '';
        if (SmokeEffect.randomizeImage) {
            var x = Math.random() * (puffImages.length - 1);
            x = Math.round(x * Math.pow(10, 0)) / Math.pow(10, 0);

            imgSrc = puffImages[x];
        } else {
            imgSrc = puffImages[current];
            if (current == puffImages.length - 1)
                current = 0;
            else
                current += 1;  
        }
        
        //create the smoke cloud
		var puff = document.createElement("IMG");
		$(puff).attr("src", imgSrc);
		$(puff).attr("alt", "puff");
		$(puff).attr("class", "puff");
		
		//create a temp id for the cloud so we can delete it later on
		var tempId = "puff" + Math.floor(Math.random()*1001);
		$(puff).attr("id", tempId);
		
		//append the cloud to the body
		$(document.body).append($(puff));
		
		var objPos = $('#' + id).offset();
		
		//do smoke animation
		$(puff).css({
			top: (objPos['top'] + SmokeEffect.smokePos[id]['y']) + "px",
			left: (objPos['left'] + SmokeEffect.smokePos[id]['x']) + "px",
			zIndex: 1,
			opacity: 0.8
		});
		$(puff).animate({
			width: SmokeEffect.smokeWidth + "px",
			height: SmokeEffect.smokeHeight + "px",
			marginLeft: "-" + (SmokeEffect.smokeWidth / 2) + "px",
			marginTop: "-" + (SmokeEffect.multiplyIntroRatio ? (SmokeEffect.smokeHeight * SmokeEffect.introRatio) : (SmokeEffect.smokeHeight / SmokeEffect.introRatio)) + "px",
			opacity: SmokeEffect.introOpacity
		},{
			duration: SmokeEffect.introDuration
		}).animate({
			marginTop: "-" + (SmokeEffect.smokeHeight * SmokeEffect.outroRatio) + "px",
			opacity: SmokeEffect.outroOpacity
		},{
			duration: SmokeEffect.outroDuration
		});
		
		//create timeout and run the animation again
		var time = 5500 + (Math.floor(Math.random()*4501));
		
		setTimeout("SmokeEffect.animate('" + id + "')", time);

        //remove the old one
		setTimeout("$('#" + tempId + "').remove()", SmokeEffect.outroDuration);
    }
}