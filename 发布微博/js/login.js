class Login {
	constructor(btn) {
	    this.btn = document.querySelector("#login");
		this.container = document.querySelector("#container");
		this.delete = document.querySelector("#submit-content");
		this.optionButton = document.querySelector(".option-button");
		this.deleteButton = document.querySelector("#delete-button");
		this.bindEvents();
	}
	bindEvents () {
		document.oncontextmenu = function(){
			　　return false;
		}
		this.btn.onclick = () => {
			this.container.innerHTML = '<h4>发布内容</h4>'+
			'<a id="closeBtn" class="close_btn" href="javascript:;">×</a>'+
            '<p><label>用户名：<input id="username" type="text"></label></p>'+
			'<p>内容：<textarea row="50" cols="50" id = "text"></textarea></p>'+
			'<p><button id="loginBtn" class="logonBtn" type="button">发布</button></p>';
			tools.showCenter(this.container);
			// 遮罩
			this.modal = document.createElement("div");
			this.modal.className = "modal";
			document.body.appendChild(this.modal);
		 }
		// 给删除按钮绑事件
		this.container.onclick =  e => {
			e = e || window.event;
			var target = e.target || e.srcElement;
			switch(target.id) {
				case "loginBtn":
					let username = document.querySelector("#username").value;
					let text = document.querySelector("#text").value;
                    let NowTime = this.getTime(new Date());
                    let sub = document.querySelector("#submit-content");
                    let html = '用户名：'+username+'<br>内容：'+text+'<br>'+NowTime;
                    sub.innerHTML += html;
				case "closeBtn" :
					this.container.style.display = "none";
					document.body.removeChild(this.modal);
                break;
			}	  
		} 
		//删除弹窗
		this.delete.onmouseup =  e => {
			e = e || window.event;
			var target = e.target || e.srcElement;
			if(e.button == 2){
				this.optionButton.style.display = "block";
			}  
		}
		//删除信息   
		this.deleteButton.onclick =  e => {
			e = e || window.event;
			this.delete.innerHTML = '';
			this.optionButton.style.display = "none";
		}  
	}
    getTime (date){
        let year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hours = date.getHours(),
            min = date.getMinutes();
            return year + "年" + month + "月" + day + "日" + hours + "时"+ min + "分"; 
    }
}
