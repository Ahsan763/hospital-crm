$(document).ready(function() {
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
	$(".inputF").focus(function(){
        $(this).nextAll('.form-input-sm-name').eq(0).show()
    })
    $(".inputF").focusout(function(){
        $(this).nextAll('.form-input-sm-name').eq(0).hide()
    })
});
