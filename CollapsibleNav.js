				if (window.innerWidth < 630 ) {
					if (navigator.userAgent.indexOf("Chrome") != -1) {
					document.getElementById("buttonBox").style.justifyContent = "center";
					document.getElementsByClassName("navbar-toggle")[0].style.marginTop = "-20px";
					} else {
					document.getElementById("buttonBox").style.justifyContent = "center";
					document.getElementsByClassName("navbar-toggle")[0].style.marginTop = "-35px";
					}
				}

		window.onscroll = function () { scrollFunction() };

		function scrollFunction() {
			console.log(window.innerWidth);
			if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 65.5) {

				document.getElementById("logo").style.height = "60px";
				document.getElementById("logo").style.bottom = "30px";
				document.getElementById("ContactUsBox").style.lineHeight = "3px";
				document.getElementById("ContactUsBox").style.fontSize = ".9em";
				document.getElementById("ContactUsBox").style.bottom = "0px";
				document.getElementById("ContactUsBox").style.marginTop = "-15px";
				document.getElementById("ContactUsBox").style.height = "50px";
				document.getElementById("BookAppointment").style.padding = "7px";
				document.getElementById("navbar").style.height = "80px";
				document.getElementById("buttonBox").style.height = "50px"
				document.getElementById("buttonBox").style.marginTop = "-15px";
				document.getElementsByClassName("navbar-collapse")[0].style.marginTop = "-82px";
				document.getElementsByTagName("NAV")[0].style.marginTop = "-20px";
				var x = document.getElementsByClassName("navBox");
				var i;
				for (i = 0; i < x.length; i++) {
					x[i].style.height = "50px";
				}

				if (window.innerWidth < 630) {
					if (navigator.userAgent.indexOf("Chrome") != -1) {
						document.getElementById("buttonBox").style.justifyContent = "flex-end";
						document.getElementsByClassName("navbar-toggle")[0].style.marginTop = "-80px";
					} else {
						document.getElementById("buttonBox").style.justifyContent = "flex-end";
						document.getElementsByClassName("navbar-toggle")[0].style.marginTop = "-165px";
					}
				}

			} else {
				document.getElementById("navbar").style.padding = "30px 10px 30px 10px";
				document.getElementById("logo").style.height = "90px"
				document.getElementById("logo").style.bottom = "0px";
				document.getElementById("ContactUsBox").style.lineHeight = "20px";
				document.getElementById("ContactUsBox").style.fontSize = "1.1em";
				document.getElementById("ContactUsBox").style.bottom = "-0.3px";
				document.getElementById("ContactUsBox").style.marginTop = "0px";
				document.getElementById("ContactUsBox").style.height = "100px";
				document.getElementById("BookAppointment").style.padding = "7px";
				document.getElementById("navbar").style.height = "160px";
				document.getElementsByTagName("NAV")[0].style.marginTop = "0px";
				document.getElementById("buttonBox").style.height = "100px"
				document.getElementById("buttonBox").style.marginTop = "0px";
				document.getElementsByClassName("navbar-collapse")[0].style.marginTop = "0px";
				var x = document.getElementsByClassName("navBox");
				var i;
				for (i = 0; i < x.length; i++) {
					x[i].style.height = "100px";
				}

				if (window.innerWidth < 630 ) {
					if (navigator.userAgent.indexOf("Chrome") != -1) {
					document.getElementById("buttonBox").style.justifyContent = "center";
					document.getElementsByClassName("navbar-toggle")[0].style.marginTop = "-30px";
					} else {
					document.getElementById("buttonBox").style.justifyContent = "center";
					document.getElementsByClassName("navbar-toggle")[0].style.marginTop = "-55px";
					}
				}
			}
		}


		
		$(window).scroll(function () {
			if ($(window).scrollTop() >= -1000) {
				$("#navbar").fadeIn("fast");
			}
			else {
				$("#navbar").fadeOut("fast");
			}
		});