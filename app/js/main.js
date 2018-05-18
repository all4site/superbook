  // Or with jQuery

  $(document).ready(function () {
  	$('.collapsible').collapsible();
});


// var a = 0;
// $(window).scroll(function () {
// 	var oTop = $('.progres').offset().top - window.innerHeight;
// 	var test = scrollTop;
// 	console.log(oTop);
// 	console.log(a);
// 	console.log(test);

// 	if (a == 0 && $(window).scrollTop > oTop) {
// 	var options = {
// 		useEasing: true,
// 		useGrouping: true,
// 		separator: ',',
// 		decimal: '.',
// 	};
// 	var demo = new CountUp('test', 0, 4546, 0, 2.5, options);
// 	var demo1 = new CountUp('test1', 0, 4546, 0, 2.5, options);

// 		demo.start();
// 		demo1.start();
// 		a = 1;
// 	}

// });

var a = 0;
$(window).scroll(function () {

	var oTop = $('.progres').offset().top - window.innerHeight;
	if (a == 0 && $(window).scrollTop() > oTop) {
		$('.counter-value').each(function () {
			var $this = $(this),
				countTo = $this.attr('data-count');
			$({
				countNum: $this.text()
			}).animate({
				countNum: countTo
			},

				{

					duration: 3000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
						//alert('finished');
					}

				});
		});
		a = 1;
	}

});

