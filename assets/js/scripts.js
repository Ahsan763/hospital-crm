$(document).ready(function() {
	// 
	$(".inputF").focus(function(){
		$(this).nextAll('.form-input-sm-name').eq(0).show()
	})
	$(".inputF").focusout(function(){
		$(this).nextAll('.form-input-sm-name').eq(0).hide()
	})
	// 
	$(".horderaccordianbox").click(function(){
		$(this).toggleClass("active");
		$(this).nextAll(".horderaccordian__box").slideToggle(300)
	})
	// dropdown
    $('.drp_btn').click(function () {
        $('.drp_box').removeClass('active');
        $(this).children('.drp_box').slideToggle(0);
        $(this).children('.drp_box').addClass('active');
        $('.drp_box:not(.active)').slideUp(0);
	});
	$('body').click(function() {
		$('.drp_box').slideUp(0);
	});
	$('.drp_btn').click(function(event) {
		event.stopPropagation(); // prevents executing the above event
	});
    // end drop down
    // aside bar dropdown start
    $(".asidbox_Link-wrapper,.asidbox_icons").click(function(){
        $(this).parent().prevAll(".asidbox").removeClass("active")
        $(this).parent().toggleClass("active")
        $(this).parent().nextAll(".asidbox").removeClass("active")
		$(".aside").toggleClass("pos");
    })
    // aside bar dropdown end
    // search bar toggle belw 767px devices
    $('.navbar_search_box_btn').click(function(e) {
        e.preventDefault();
        if ($(window).width() < 767)
        {
            $('.navbar_search_box_mobile').toggleClass('active');
            return;
        }
    })
    // search bar toggle belw 767px devices end

    $('.sidebar_btn').click(function () {
		$('.aside').toggleClass("active");
		$('.main').toggleClass("active");
		$('.dashboard_header').toggleClass("active");
	});
    $('.asideClose').click(function(){
        $('.aside').toggleClass("active");
		$('.main').toggleClass("active");
		$('.dashboard_header').toggleClass("active");
    })
    // navbar sticky end
	$('.nav__toggler').click(function () {
		$(this).toggleClass('active');
		$('.nav-list').slideToggle();
	});
    // dark and light theme start
    $('.light-btn').click(function() {
		$('body').addClass('dark');
		localStorage.setItem('darkClass', 'true');
		
	});

	$('.dark-btn').click(function() {
		$('body').removeClass('dark');
		localStorage.removeItem('darkClass');
	});
	if (localStorage.getItem('darkClass') === 'true'){
		$('body').addClass('dark');
	}
	// dark and light theme end

	// language toggle start
	if(document.dir == "ltr"){
		$('.language_toggle_en').addClass("d-none");
		$('.language_toggle_ar').addClass("d-flex");
	}
	if(document.dir == "rtl"){
		$('.language_toggle_ar').addClass("d-none");
		$('.language_toggle_en').addClass("d-flex");
	}
	$('.language_toggle_en').click(function () {
		$('html').attr('dir', 'ltr');
		$('body').addClass('ltr');
		$('body').removeClass('rtl');
		$('.language_toggle_ar').removeClass("d-none");
		$('.language_toggle_en').addClass("d-none");
		localStorage.removeItem('rtl');
	})
	$('.language_toggle_ar').click(function () {
		$('html').attr('dir', 'rtl');
		$('body').addClass('rtl');
		$('body').removeClass('ltr');
		$('.language_toggle_en').removeClass("d-none");
		$('.language_toggle_ar').addClass("d-none");
		localStorage.setItem('rtl', 'true');
	})
	if (localStorage.getItem('rtl') === 'true') {
		$('.language_toggle_ar').addClass("d-none");
		$('.language_toggle_en').removeClass("d-none");
		$('body').addClass('rtl');
		$('body').removeClass('ltr');
		$('html').attr('dir', 'rtl');
	}

	var count = 0;
	$('.select-all').click(function() {
		$('.checkbox').prop('checked', this.checked);
		updateCount();
	});
	$('.checkbox').click(function() {
		updateCount();
	});
	function updateCount() {
		var count = $('input.checkbox:checked').length;
		$('#count').text(count);
		if (count > 0) {
			$(".notiftr__btn").addClass("d-block");
		} else {
			$(".notiftr__btn").removeClass("d-block");
		}
	}
	// var colorPicker = document.getElementById('colorPicker');

	// 	colorPicker.addEventListener('change', function(event) {
	// 	var selectedColor = event.target.value;
	// 	document.documentElement.style.setProperty('--text', selectedColor);
	// });
	
	// var colorPicker2 = document.getElementById('colorPicker2');
	// 	colorPicker2.addEventListener('change', function(event) {
	// 	var selectedColor2 = event.target.value;
	// 	document.documentElement.style.setProperty('--background-color1', selectedColor2);
	// });
	// var colorPicker3 = document.getElementById('colorPicker3');
	// 	colorPicker3.addEventListener('change', function(event) {
	// 	var selectedColor3 = event.target.value;
	// 	document.documentElement.style.setProperty('--background-color2', selectedColor3);
	// });
	$(".ordrBox1Togglebtn").click(function(){
		$(this).toggleClass("active")
		$(".ordrBox1").toggleClass("active")
	})
	$(".filtrdrpBtn").click(function(){
		$(this).toggleClass("active")
		$(this).nextAll(".filtrdrpBtnMenu").eq(0).toggleClass("active")
	})
	$(".pcpBtn").click(function(){
		$(this).toggleClass("ative");
		$(this).nextAll(".pcpBtn-content").slideToggle(300);
	})
});
