var userCode = null;
var hueResponse = null;
var hue1URL = null;
var hue2URL = null;
var hue3URL = null;
var hueConnect = new SMF.Net.WebClient({
		URL : "http://192.168.2.135/api",
		httpMethod : "POST",
		requestBody :"{\"devicetype\":\"hueloo#doruk\"}",
		onSyndicationSuccess : function (e) {
			//alert(hueConnect.responseText);
		hueResponse = JSON.parse(hueConnect.responseText);	
		try{
		userCode = hueResponse[0].success.username;
		hue1URL = "http://192.168.2.135/api/"+userCode+"/lights/1/state";
		hue2URL = "http://192.168.2.135/api/"+userCode+"/lights/2/state";
		hue3URL = "http://192.168.2.135/api/"+userCode+"/lights/3/state";
	//	alert(userCode);
		SMF.storeVariable("userCode",userCode, true, false);
		SMF.storeVariable("ipEdit",ipEditBox.text, true, false);
		SMF.storeVariable("nameEdit",nameEditBox.text, true, false);
		SMF.storeVariable("connectionStatus",connectionStatus, true, false);
        imgConnection.image = "connect.png";
        connectionStatus =true;
        lblConnection.text = "<<< Connected >>>"
        lblConnection.fontColor = "blue";
        imgDisco.visible = true;
        ipEditBox.touchEnabled = false;
        nameEditBox.touchEnabled = false;
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
      //  alert(hueOpen1.requestString);
      hueOpen1.URL = hue1URL;
      hueOpen2.URL = hue2URL;
      hueOpen3.URL = hue3URL;
        hueOpen1.run(true);
        hueOpen2.run(true);
        hueOpen3.run(true);
		}
		catch(err){
		alert(hueResponse[0].error.description);
		}
		},
		onServerError : function (e) {
		alert(e.message);
	    imgConnection.image = "notconnect.png";
        connectionStatus =false;
			//Get some task if the server returns error
		},
		responseHandling : SMF.Net.ResponseHandling.forceText,
		timeoutInterval : 10
	});
	
var hueOpen1 = new SMF.Net.WebClient({
		URL : "http://192.168.2.135/api/151d38621018ecd720ccdb7ed03a2e3/lights/1/state",
		httpMethod : "PUT",
		requestBody :"{\"on\":true,\"sat\":0, \"bri\":254,\"hue\":10000}",
		onSyndicationSuccess : function (e) {
			hue1.image = "buttonon.png";
			hue1Status = true;
		//	alert(hueOpen1.requestString);
		//	alert("userCode" + userCode);
	//		alert(hueOpen1.responseText);
		},
		onServerError : function (e) {
	//	alert(e.message);
	    imgConnection.image = "notconnect.png";
        connectionStatus =false;
			//Get some task if the server returns error
		},
		responseHandling : SMF.Net.ResponseHandling.forceText,
		timeoutInterval : 10
	});

var hueOpen2 = new SMF.Net.WebClient({
		URL : "http://192.168.2.135/api/151d38621018ecd720ccdb7ed03a2e3/lights/2/state",
		httpMethod : "PUT",
		requestBody :"{\"on\":true,\"sat\":0, \"bri\":254,\"hue\":10000}",
		onSyndicationSuccess : function (e) {
			hue2.image = "buttonon.png";
			hue2Status = true;
		//	alert(hueOpen2.responseText);
		},
		onServerError : function (e) {
	//	alert(e.message);
	    imgConnection.image = "notconnect.png";
        connectionStatus =false;
			//Get some task if the server returns error
		},
		responseHandling : SMF.Net.ResponseHandling.forceText,
		timeoutInterval : 10
	});
	
var hueOpen3 = new SMF.Net.WebClient({
		URL : "http://192.168.2.135/api/151d38621018ecd720ccdb7ed03a2e3/lights/3/state",
		httpMethod : "PUT",
		requestBody :"{\"on\":true,\"sat\":0, \"bri\":254,\"hue\":10000}",
		onSyndicationSuccess : function (e) {
			hue3.image = "buttonon.png";
			hue3Status = true;
	//		alert(hueOpen3.responseText);
		},
		onServerError : function (e) {
	//	alert(e.message);
	    imgConnection.image = "notconnect.png";
        connectionStatus =false;
			//Get some task if the server returns error
		},
		responseHandling : SMF.Net.ResponseHandling.forceText,
		timeoutInterval : 10
	});




var hueClose1 = new SMF.Net.WebClient({
		URL : "http://192.168.2.135/api/151d38621018ecd720ccdb7ed03a2e3/lights/1/state",
		httpMethod : "PUT",
		requestBody :"{\"on\":false}",
		onSyndicationSuccess : function (e) {
			hue1.image = "buttonoff.png";
			hue1Status = false;
	//		alert(hueClose1.responseText);
		},
		onServerError : function (e) {
	//	alert(e.message);
	    imgConnection.image = "notconnect.png";
        connectionStatus =false;
			//Get some task if the server returns error
		},
		responseHandling : SMF.Net.ResponseHandling.forceText,
		timeoutInterval : 10
	});

var hueClose2 = new SMF.Net.WebClient({
		URL : "http://192.168.2.135/api/151d38621018ecd720ccdb7ed03a2e3/lights/2/state",
		httpMethod : "PUT",
		requestBody :"{\"on\":false}",
		onSyndicationSuccess : function (e) {
				hue2.image = "buttonoff.png";
				hue2Status = false;
	//		alert(hueClose2.responseText);
		},
		onServerError : function (e) {
	//	alert(e.message);
	    imgConnection.image = "notconnect.png";
        connectionStatus =false;
			//Get some task if the server returns error
		},
		responseHandling : SMF.Net.ResponseHandling.forceText,
		timeoutInterval : 10
	});
	
var hueClose3 = new SMF.Net.WebClient({
		URL : "http://192.168.2.135/api/151d38621018ecd720ccdb7ed03a2e3/lights/3/state",
		httpMethod : "PUT",
		requestBody :"{\"on\":false}",
		onSyndicationSuccess : function (e) {
				hue3.image = "buttonoff.png";
				hue3Status = false;
	//			alert(hueClose3.responseText);
		},
		onServerError : function (e) {
	//	alert(e.message);
	    imgConnection.image = "notconnect.png";
        connectionStatus =false;
			//Get some task if the server returns error
		},
		responseHandling : SMF.Net.ResponseHandling.forceText,
		timeoutInterval : 10
	});
	
	
var hueDisco = new SMF.Net.WebClient({
		URL : "http://192.168.2.135/api/151d38621018ecd720ccdb7ed03a2e3/lights/3/state",
		httpMethod : "PUT",
		requestBody :"{\"on\":true}",
		onSyndicationSuccess : function (e) {

		},
		onServerError : function (e) {
	//	alert(e.message);
	    imgConnection.image = "notconnect.png";
        connectionStatus =false;
			//Get some task if the server returns error
		},
		responseHandling : SMF.Net.ResponseHandling.forceText,
		timeoutInterval : 10
	});
	
	
function hueDiscoRun(url,lightStatus,sat,bri,hue){
hueDisco.URL = url;
hueDisco.requestBody = "{\"on\":"+lightStatus+",\"sat\":"+sat+", \"bri\":"+bri+",\"hue\":"+hue+"}";
hueDisco.run(true);
};