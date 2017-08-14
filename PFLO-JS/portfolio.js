$(function(){
	$("#enter").mouseenter(function(){
		$("#enter").addClass("animated tada");
	});

	$("#enter").mouseleave(function(){
		$("#enter").removeClass("animated tada");
	});

	$("#leave").mouseenter(function(){
		$("#leave").addClass("animated shake");
	});

	$("#leave").mouseleave(function(){
		$("#leave").removeClass("animated shake");
	});

	$("#enter").on("click", function(){
		$(".modal-Enter").addClass("animated bounceOutRight");
		setTimeout(function(){
			$("#modal-Container").css("visibility", "hidden");
			$(".modal-Enter").css("display", "none");
			$("#main-Container").css("display", "block");
		}, 600);
	})

	$("#leave").on("click", function(){
		window.location = "https://www.google.com";
	})
})