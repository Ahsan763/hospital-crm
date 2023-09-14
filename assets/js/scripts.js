$(document).ready(function() {

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

	
	$(".filtrdrpBtn").click(function(){
		$(this).toggleClass("active")
		$(this).nextAll(".filtrdrpBtnMenu").eq(0).toggleClass("active")
	})
	$(".pcpBtn").click(function(){
		$(this).toggleClass("ative");
		$(this).nextAll(".pcpBtn-content").slideToggle(300);
	})
	// show list and grid view start
	$(".listbtn").click(function(){
		$(this).addClass("active");
		$(".list").addClass("active");
		$(".gridbtn").removeClass("active");
		$(".gridbox").removeClass("active");
		localStorage.removeItem("listview");
	})
	$(".gridbtn").click(function(){
		$(this).addClass("active");
		$(".gridbox").addClass("active");
		$(".listbtn").removeClass("active");
		$(".list").removeClass("active");
		localStorage.setItem("listview","true");
	})
	if(localStorage.listview == "true"){
		$(".gridbtn").addClass("active");
		$(".gridbox").addClass("active");
		$(".list").removeClass("active");
		$(".listbtn").removeClass("active");
	}
	// show list and grid view end
});
