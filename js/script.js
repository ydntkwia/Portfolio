	$(document).mousemove(function(e){
		$(".z-pointer").css({
			left:e.pageX,
			top:e.pageY
		});
	});

	$(document).ready(function() {
		// debug
		function onViewport(el, elClass, offset, callback) {
			var didScroll = false;
			var this_top;
			var height;
			var top;

			if(!offset) { var offset = 0; }

			$(window).scroll(function() {
				didScroll = true;
			});

			setInterval(function() {
				if (didScroll) {
					didScroll = false;
					top = $(this).scrollTop();

					$(el).each(function(i){
						this_top = $(this).offset().top - offset;
						height   = $(this).height();

						if (top >= this_top && !$(this).hasClass(elClass)) {
							$(this).addClass(elClass);

							if (typeof callback == "function") callback(el);
						}
					});
				}
			}, 100);
		}
		// variables
		const elems = document.querySelectorAll(".z-scrollable.z-load");
		const classes1 = $(".z-button>span");
		const classes2 = $(".z-pointer, .z-blued, .z-button>span");
		const classes3 = $(".z-pointer-action");
		const elems3 = document.querySelector(".z-button>.z-pointer-action");
		const elems4 = document.querySelectorAll(".z-a , .z-div");
		const m_vw = $(window).width();
		var pp = document.querySelectorAll(".z-p");
		var this2 = document.querySelector(".z-pointer");




		if (elems) {
			elems.forEach(a =>
				setTimeout(function (){
					a.classList.add("z-active")
				}, 1000));

			elems.forEach(b =>
				setTimeout(function (){
					b.classList.remove("z-load","z-active")
				}, 3100));
		}

		$.fn.toggle2classes = function(class1, class2){
			if( !class1 || !class2 )
				return this;

			return this.each(function(){
				var $elm = $(this);

				if( $elm.hasClass(class1) || $elm.hasClass(class2) )
					$elm.toggleClass(class1 +' '+ class2);

				else
					$elm.addClass(class1);
			});
		};


		classes1.hover(function(){
			classes2.toggleClass("z-hover");
		});

		classes3.hover(function(){
			$(".z-pointer").toggleClass("z-hover");
		});

		elems3.onclick = function (){
			var body = document.body; 
			var html = document.documentElement; 
			body.scrollTop = 0; 
			html.scrollTop = 0;
		};

		$(".z-a").mouseover(function(){
			document.querySelector(".z-div").classList.add("z-active");
			$(".z-a>span").addClass("z-active");
		}).mouseleave(function(){
			document.querySelector(".z-div").classList.remove("z-active");
			$(".z-a>span").removeClass("z-active");
		});

		$("ol>li").mouseover(function(){
			this.classList.add("z-active");
		}).mouseleave(function(){
			this.classList.remove("z-active");
		});

		document.getElementById('z-top').addEventListener('click', function() {
			elems4.forEach(a =>a.classList.add("z-delay"));
			setTimeout(function (){
				elems4.forEach(b =>b.classList.remove("z-delay"));
			}, 300)
		}, false);


		document.querySelector("ol>li:nth-child(1)").addEventListener("click", function(){			changeDirectory("https://www.shutterstock.com/g/zethello")});
		document.querySelector("ol>li:nth-child(2)").addEventListener("click", function(){			changeDirectory("https://stock.adobe.com/contributor/209523513/Zethello")});
		document.querySelector("ol>li:nth-child(3)").addEventListener("click", function(){			changeDirectory("https://displate.com/zethello/displates")});
		document.querySelector("ol>li:nth-child(4)").addEventListener("click", function(){			changeDirectory("https://www.fiverr.com/achmadzahra?up_rollout=true")});
		document.querySelector("ol>li:nth-child(5)").addEventListener("click", function(){			changeDirectory("https://www.instagram.com/_zethello/")});
		document.querySelector(".z-featured").addEventListener("click", function(){			changeDirectory("https://community.coreldraw.com/contest/2019-international-design-contest/m/2019_contest_student_winners/231090")});

		if (pp) {
			pp.forEach(a => a.addEventListener("click", function(){
				var x = this.className, y = x.substr(x.length-1);
				if (y == "1") {
					var yy = "links";
				}else if(y == "2"){
					var yy = "Lego-Thunder";
				}
				var z = "https://www.zethello.com/work/"+yy;
				changeDirectory(""+z+"");
			}))
		}

		$(".z-work").hover(function(){
			var x = this.className, y = x.substr(x.length-1);
			this2.classList.add("z-projects");
			if (y == "0") {
				this2.classList.add("z-p-1");
			}else if(y == "1"){
				this2.classList.add("z-p-2");
			}else if(y == "2"){
				this2.classList.add("z-p-3");
			}else if(y == "3"){
				this2.classList.add("z-p-4");
			}else if(y == "4"){
				this2.classList.add("z-p-5");
			}else if(y == "5"){
				this2.classList.add("z-p-6");
			}else if(y == "6"){
				this2.classList.add("z-p-7");
			}else if(y == "7"){
				this2.classList.add("z-p-8");
			}else if(y == "8"){
				this2.classList.add("z-p-9");
			}else if(y == "9"){
				this2.classList.add("z-p-10");
			}
		}, function(){
			this2.classList.remove("z-projects","z-p-1","z-p-2","z-p-3","z-p-4","z-p-5","z-p-6","z-p-7","z-p-8","z-p-9","z-p-10");
		});

		
		function changeDirectory(param1){
			var abc = param1;
			const acd = document.querySelectorAll(".z-Dir");
			acd.forEach(a => a.classList.add("z-active"));
			setTimeout(function (){
				window.location = abc;
			}, 1000);
		}

		onViewport(".z-animation", "active", 700, function() {

		});
		onViewport(".z-animation2", "active", 800, function() {

		});

		if (m_vw <= 980) {
			document.querySelector(".z-name").textContent = "Zethello";
			document.querySelector(".z-years").textContent = "2020";
			document.querySelector(".z-two").textContent = "GRA";
			document.querySelector(".z-three").innerHTML = "PHIC<br>";
			document.querySelector(".z-a").innerHTML = "hello<span>@</span>zethello<span><br>.</span>com";
			document.querySelector(".copyright .z-1 span.copy:nth-child(2)").textContent = "ZETHELLO";
		}else if(m_vw <= 540){
			document.querySelector(".z-a").innerHTML = "Say<br>hello<span>!</span>";
		}else{

		}
	});
	$(window).on('resize', function(){
		const m_vw = $(window).width();
		if (m_vw <= 980) {
			document.querySelector(".z-name").textContent = "Zethello";
			document.querySelector(".z-years").textContent = "2020";
			document.querySelector(".z-two").textContent = "GRA";
			document.querySelector(".z-three").innerHTML = "PHIC<br>";
			document.querySelector(".z-a").innerHTML = "hello<span>@</span>zethello<span><br>.</span>com";
			document.querySelector(".copyright .z-1 span.copy:nth-child(2)").textContent = "ZETHELLO";
		}else if(m_vw <= 540){
			document.querySelector(".z-a").innerHTML = "Say<br>hello<span>!</span>";
		}else{
			document.querySelector(".copyright .z-1 span.copy:nth-child(2)").textContent = "Developed by ZETHELLO";
			document.querySelector(".z-two").textContent = "GRAPHIC";
			document.querySelector(".z-three").innerHTML = "DESIGNER<span class='red'>.</span>";
			document.querySelector(".z-a").innerHTML = "hello<span>@</span>zethello<span>.</span>com";
		}
	});

	$(window).on('scroll', function () {

		// variables
		var scrollPos = $(window).scrollTop()
		var winHeight = $(window).height()
		var winWidth = $(window).width()
		var docHeight = $(document).height()
		var countem = docHeight - winHeight - 150;
		var perc = 100 * scrollPos / (docHeight - winHeight);
		var perc2 = 2200 * scrollPos / (docHeight - winHeight);
		var perc3 = 1200 * scrollPos / (docHeight - winHeight);
		var perc4 = 200 * scrollPos / (docHeight - winHeight);
		var winper = 0.9 * winHeight;

		$('.z-scroll').height(perc + '%');

		if (winWidth > 980) {
			if (scrollPos > winHeight) {
			} else{
				$('.z-one').css('transform','translateX('+perc2+'px)');
				$('.z-two').css('transform','translateX('+perc3+'px)');
				$('.z-three').css('transform','translateX('+perc4+'px)');	
			}
		}

		if (scrollPos > winper) {
			document.querySelector(".z-image").classList.add("long");
			setTimeout(function (){
				document.querySelector(".z-image").classList.add("active");
			}, 600);
			setTimeout(function (){
				document.querySelector(".z-image").classList.add("actived");
			}, 800);
				// document.querySelector(".z-lined").classList.add("active");
			}else{
				// document.querySelector(".z-lined").classList.remove("active");
			}

			var scrollTop = $(window).scrollTop(),
			elementOffset = $('#awards').offset().top,
			elementOffset2 = $('#footer').offset().top,
			elementOffset3 = $('#gutter-x').offset().top,
			distance = (elementOffset - scrollTop),
			distance2 = (elementOffset2 - scrollTop)
			distance3 = (elementOffset3 - scrollTop)
			;

			const elems2 = document.querySelectorAll("body, .third, .table");
			const elems4 = document.querySelectorAll(".z-blued, .z-button>span");
			const elems5 = document.querySelector(".z-button");
			const elems6 = document.querySelector(".z-blued");
			const elems7 = document.querySelector(".z-featured");

			if (distance < 200) {
				if (elems2) {
					elems2.forEach(a =>	a.classList.add("z-black"));
				}
			} else{
				if (elems2) {
					elems2.forEach(a =>	a.classList.remove("z-black"));
				}
			}

			if (scrollPos > countem) {
				if (elems4) {
					elems4.forEach(a =>	a.classList.add("z-active"));
				}
				setTimeout(function (){
					elems6.classList.add("z-actived")
				}, 1000);
				setTimeout(function (){
					elems5.classList.add("z-active")
				}, 1000);
			} else{
			}

			if (distance3 < 1000) {
				elems7.classList.add("z-actived");
			}else{
				elems7.classList.remove("z-actived");
			}
		})
