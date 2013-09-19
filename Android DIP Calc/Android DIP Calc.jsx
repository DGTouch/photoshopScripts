var wn = createDialog();
wn.input.active = true;
wn.input.addEventListener ("change", function (e) {update();});
wn.closeBtn.addEventListener("click", function(e) {wn.close();});
update();
wn.show();

	
	
	dlg.xx_px = dlg.add("statictext",{x:10, y:60, width:180, height:20}, "XXHDPI");
	
	dlg.xx_px = dlg.add("statictext",{x:90, y:60, width:120, height:20});
	
	
	

function update() {
	var v = parseFloat(wn.input.text);
	wn.xx_px.text = v + "dip = " + v * 3 + "px";
	wn.x_px.text = v + "dip = " + v * 2 + "px";
	wn.h_px.text = v + "dip = " + v * 1.5 + "px";
	wn.m_px.text = v + "dip = " + v * 1 + "px";
	
	wn.px_xx.text = v + "px = " + round(v / 3) + "dip";
	wn.px_x.text = v + "px = " + round(v / 2) + "dip";
	wn.px_h.text = v + "px = " + round(v / 1.5) + "dip";
	wn.px_m.text = v + "px = " + round(v / 1) + "dip";
}

function round(n) {
	return Math.round(n * 100) / 100;
}