$(document).ready(function() {
	window.addEventListener('scroll', function(){ 
		var showNavBG = false;
		
		var scroll = $(".mdl-layout").scrollTop();
		if (scroll == 0) {
			scroll = $(".mdl-layout__content").scrollTop()
		}
		
		if (scroll >= 380) {
			showNavBG = true;
		}
		
		if (showNavBG) {
			$("#header-bg,#small-header-title").removeClass("hidden");
			if ($("#features").offset().top <= 100 && $("#pricing").offset().top > 100) {
				$("#main-header .is_active").removeClass("is_active");
				$("#link-features").addClass("is_active");
			} else if ($("#pricing").offset().top <= 100 && $("#sign-up").offset().top > 100){
				$("#main-header .is_active").removeClass("is_active");
				$("#link-pricing").addClass("is_active");
			} else if ($("#sign-up").offset().top <= 100 && $("footer").offset().top > 100){
				$("#main-header .is_active").removeClass("is_active");
				$("#link-sign-up").addClass("is_active");
			}
		} else {
			$("#header-bg,#small-header-title").addClass("hidden");
			$("#main-header .is_active").removeClass("is_active");
		}
		
		
		
	}, true);
	
	var dialog = document.querySelector('#dialog');
	if (!dialog.showModal) {
		dialogPolyfill.registerDialog(dialog);
	}
	
	$("form").submit(function() {
		dialog.showModal();
		return false;
	});
	
	$("#modal-close").click(function() {
		dialog.close();
	})
});