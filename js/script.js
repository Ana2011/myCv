$(document).ready(function(){

    $('#slides').superslides({
        animation: 'fade',
        play: 6000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["SOFTWARE QA ENGINEER.", "MANUAL QA TESTER."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    // $(document).ready(function () {
    //     $('.dropdown-toggle').dropdown();
    // });

    $("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});


    const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}

	}

});

