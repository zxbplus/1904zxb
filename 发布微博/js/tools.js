var tools = {
	setStyle : function (obj, attrObj) {
		for(var key in attrObj) {
			obj.style[key] = attrObj[key];
		}
	},
	getBody : function () {
		return {
			width : document.documentElement.clientWidth || document.body.clientWidth,
			height : document.documentElement.clientHeight || document.body.clientHeight
		}
	},
	showCenter : function (obj) {
		obj.style.display = "block";
		let _this = this;
		function center () {
			var _top = (_this.getBody().height - obj.offsetHeight) / 2;
			var _left = (_this.getBody().width - obj.offsetWidth) / 2;
			_this.setStyle(obj, {
				position :"absolute",
				left : _left + "px",
				top : _top + "px"
			});
		};
		center();
		window.onresize = center;
	}
}