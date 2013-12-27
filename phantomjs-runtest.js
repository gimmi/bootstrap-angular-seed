var args = require('system').args,
	page = require('webpage').create(),
	checkLoop = function () {
		var jasmineStatus = page.evaluate(function () { return jsApiReporter.status(); });
		if (jasmineStatus == 'done') {
			var jasmineSpecs = page.evaluate(function () { return jsApiReporter.specs(); });
			var jasmineFailedSpecs = jasmineSpecs.filter(function (spec) { return spec.status == 'failed'; });
			console.log(jasmineSpecs.length, ' specs executed, ', jasmineFailedSpecs.length, ' failed.');
			phantom.exit(jasmineFailedSpecs.length);
		} else {
			setInterval(checkLoop, 100);
		}
	};

if (args.length < 2) {
	console.log('Should provide jasmine HTML test page in the commandline');
	phantom.exit(1);
}

page.open(args[1], function (status) {
	if (status !== "success") {
		console.log("Unable to access network");
		phantom.exit(1);
	}
	checkLoop();
});
