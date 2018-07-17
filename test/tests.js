var geoip = require('../lib/geoip');

module.exports = {
	testLookup: function(test) {
		test.expect(2);

		var ip = '79.180.67.129';
		var ipv6 = '2001:4860:b002::68';

		var actual = geoip.lookup(ip);

		console.log(actual);

		test.ok(actual, 'should return data about IPv4.');

		actual = geoip.lookup(ipv6);

		console.log(actual);

		test.ok(actual, 'should return data about IPv6.');

		test.done();
	}, 

	testUTF8: function(test) {
		test.expect(1);

		var ip = "87.122.67.235";
		var expected = "Neumünster";
		var actual = geoip.lookup(ip);

		test.ok(actual, "Should return a non-null value for " + ip);
//		test.equal(actual.city, expected, "UTF8 city name does not match");
		
		test.done();
	},

	testMetro: function(test) {
		test.expect(0);

		var actual = geoip.lookup("23.240.63.68");

//		test.equal(actual.city, "Van Nuys");
//		test.equal(actual.metro, 803);

		test.done();
	}
};
