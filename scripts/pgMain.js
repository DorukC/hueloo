(function () {
	Pages.pgMain = new SMF.UI.Page({
			name : "pgMain",
			onKeyPress : pgMain_onKeyPress,
			onShow : pgMain_onShow,
			backgroundImage : "background.png"
		});

	



	
	
	function pgMain_onKeyPress(e) {
		if (e.keyCode === 4) {
			Application.exit();
		}
	}

	/**
	 * Creates action(s) that are run when the page is appeared
	 * @param {EventArguments} e Returns some attributes about the specified functions
	 * @this Pages.Page1
	 */
	function pgMain_onShow() {
	userCode =	SMF.restoreVariable("userCode");
	ipEditBox.text = SMF.restoreVariable("ipEdit");
	nameEditBox.text = SMF.restoreVariable("nameEdit");
	userCode =	SMF.restoreVariable("userCode");
	connectionStatus =	SMF.restoreVariable("connectionStatus");
	if(connectionStatus){
		imgConnection.image = "connect.png";
		hueOpen1.run(true);
		hueOpen2.run(true);
		hueOpen3.run(true);
		lblConnection.text = "<<< Connected >>>"
        lblConnection.fontColor = "blue";
        imgDisco.visible = true;
        ipEditBox.touchEnabled = false;
        nameEditBox.touchEnabled = false;
	}
	cntButtons.add(hue1);
	cntButtons.add(hue2);
	cntButtons.add(hue3);
	this.add(cntButtons);
	cntConnectionInner.add(ipEditBox);
	cntConnectionInner.add(nameEditBox);
	cntConnection.add(lblConnection);
	cntConnectionOut.add(cntConnectionInner)
	cntConnectionOut.add(imgConnection);
	cntConnection.add(cntConnectionOut);
	this.add(cntConnection);
	this.add(imgDisco);
	}


})();
