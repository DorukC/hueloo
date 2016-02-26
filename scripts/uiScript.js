var cntConnectionFlag = false;
var connectionStatus = false;
var hue1Status = false;
var hue2Status = false;
var hue3Status = false;
var discoMode = false;
var hueInterval = null;

var 	cntButtons = new SMF.UI.Container({
        name : "cntButtons",
		layoutType : "linear",
		orientation : "horizontal",
		width : "100%",
		height : "20%",
		borderWidth :"0",
		left :"0%",
		top : "50%"
	});
	
	
var 	hue1 = new SMF.UI.Image({
        name : "hue1",
		image :"buttonoff.png",
		width : "31%",
		height : "95%",
		onTouchEnded : hue1_onTouchEnded
	});
	
	hue1.imageFillType = "stretch";
	
	function hue1_onTouchEnded(){
		if(connectionStatus){
	    if(!hue1Status){
	        hueOpen1.run(true);
	    }
	    else{
	        hueClose1.run(true);
	    }}
	}

var 	hue2 = new SMF.UI.Image({
        name :"hue2",
		image :"buttonoff.png",
		width : "31%",
		height : "95%",
		onTouchEnded : hue2_onTouchEnded
	});
	
	hue2.imageFillType = "stretch";
	
		function hue2_onTouchEnded(){
			if(connectionStatus){
	    if(!hue2Status){
	        hueOpen2.run(true);
	    }
	    else{
	        hueClose2.run(true);
	    }}
	}
	
var 	hue3 = new SMF.UI.Image({
        name :"hue3",
		image :"buttonoff.png",
		width : "31%",
		height : "95%",
		onTouchEnded : hue3_onTouchEnded
	});
	
	hue3.imageFillType = "stretch";
		function hue3_onTouchEnded(){
			if(connectionStatus){
	    if(!hue3Status){
	        hueOpen3.run(true);
	    }
	    else{
	        hueClose3.run(true);
	    }}
	}
	

var 	cntConnection = new SMF.UI.Container({
        name : "cntConnection",
		layoutType : "linear",
		orientation : "vertical",
		width : "100%",
		height : "40%",
		borderWidth :"0",
		left :"0%",
		top : "92%",
		backgroundTransparent : true
	});
	
var lblConnection = new SMF.UI.Label({
    name : "lblConnection",
    fontColor :"white",
    width :"100%",
    text : "<<< Not Connected >>>",
    height :"20%",
    textAlignment : "center",
    onTouchEnded : lblConnection__onTouchEnded
});



function lblConnection__onTouchEnded() {
    if(!cntConnectionFlag)
    {
cntConnection.animate({
        property: 'top',
        endValue: "70%",
        motionEase: SMF.UI.MotionEase.plain,
        duration: 300,
        onFinish: function() {
        cntConnectionFlag = true;
            //do your action after finishing the animation
        }
    });
	}

else{
   cntConnection.animate({
        property: 'top',
        endValue: "92%",
        motionEase: SMF.UI.MotionEase.plain,
        duration: 300,
        onFinish: function() {
        cntConnectionFlag = false;
            //do your action after finishing the animation
        }
    });
}
}

var 	cntConnectionOut = new SMF.UI.Container({
        name : "cntConnectionInner",
		layoutType : "linear",
		orientation : "horizontal",
		width : "100%",
		height : "48%",
		borderWidth :"0",
		left :"0%",
		top : "92%",
		backgroundTransparent : true
	});
	
var imgConnection = new SMF.UI.Image({
        name :"imgConnection",
		image :"notconnect.png",
		width : "25%",
		height : "100%",
		onTouchEnded : imgConnection__onTouchEnded
});
imgConnection.imageFillType = "stretch";

function imgConnection__onTouchEnded() {
    if(!connectionStatus){
    	if(ipEditBox.text !="" &&  nameEditBox.text!=""){
    	
        hueConnect.URL  ="http://"+ ipEditBox.text +"/api";
        hueConnect.requestBody = "{\"devicetype\":\"hueloo#"+ nameEditBox.text +"\"}";
        hueConnect.run(true);
    	}
    	else{
    		alert("IP Address and Your Name fields can not be empty...");
    	}
}
    else{
       imgConnection.image = "notconnect.png";
        connectionStatus =false;  
        hueOpen1.URL = hue1URL;
        hueOpen2.URL = hue2URL;
        hueOpen3.URL = hue3URL;
        hueClose1.run(true);
        hueClose2.run(true);
        hueClose3.run(true);
        clearInterval(hueInterval)
         lblConnection.text = "<<< Not Connected >>>"
        lblConnection.fontColor = "white";
        imgDisco.visible = false;
        ipEditBox.touchEnabled = true;
        nameEditBox.touchEnabled = true;
    }
}

var 	cntConnectionInner = new SMF.UI.Container({
        name : "cntConnectionInner",
		layoutType : "linear",
		orientation : "vertical",
		width : "70%",
		height : "98%",
		borderWidth :"0",
		left :"0%",
		top : "92%",
		backgroundTransparent : true
	});



var ipEditBox = new SMF.UI.EditBox({
    name : "ipEditBox",
    horizontalGap :"10",
    text :"192.168.2.135",
    placeHolder :"Enter IP Address of Philips Hue",
    width : "98%",
    height :"45%",
    onReturnKey : ipEditBox_onReturnKey
});

var nameEditBox = new SMF.UI.EditBox({
    name : "nameEditBox",
    horizontalGap :"10",
    text :"Doruk HueLoo",
    placeHolder :"Enter your name",
    width : "98%",
    height :"45%",
     onReturnKey : nameEditBox_onReturnKey
});

var imgDisco = new SMF.UI.Image({
        name :"imgDisco",
		image :"discooff.png",
		width : "100%",
		height : "30%",
		top : "0%",
		left : "0%",
		visible : false,
		alpha : 1,
		onTouchEnded : imgDisco__onTouchEnded
});
imgDisco.imageFillType = "stretch"; 

function  ipEditBox_onReturnKey() {
	nameEditBox.focus();
}

function  nameEditBox_onReturnKey() {
imgConnection__onTouchEnded();
}


function imgDisco__onTouchEnded(){

	
	if(!discoMode){
		discoMode = true;
			imgDisco.image = "disco.png";
		hueOpen1.run(true);
		hueOpen2.run(true);
		hueOpen3.run(true);
		hueInterval = setInterval(function() {
		
		
		url = Math.floor((Math.random() * 3));
		
		switch(url) {
    case 0:
        url = hueOpen1.URL;
        break;
    case 1:
        url = hueOpen2.URL;
        break;
	case 2:
        url = hueOpen3.URL;
        break;
    default:
        alert("something goes wrong");
}

		lightStatus = sat = x = Math.floor((Math.random() * 2));
		if(lightStatus==0){
			lightStatus = false;
		}
		else{
			lightStatus = true;
		}
		sat = x = Math.floor((Math.random() * 255));
		bri = x = Math.floor((Math.random() * 255));
		hue = x = Math.floor((Math.random() * 10001));
	
		
		
		
    hueDiscoRun(url,lightStatus,sat,bri,hue);
}, 100);	}
	else{
		discoMode = false;
		imgDisco.image = "discooff.png";
		clearInterval(hueInterval);
		hueClose1.run(true);
		hueClose2.run(true);
		hueClose3.run(true);
	}

}


