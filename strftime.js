
(function(C) {

	var lpad = function(n) {
		return 10 > n ? '0'+n : ''+n;
	};

	var weekdays = {
		en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		nl: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']
	};

	var months = {
		en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		nl: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december']
	};

	var formats = {
		a: function(d, l) {
			Date.weekdays[l] || (l = 'en');
			return Date.weekdays[l][d.getDay()].substr(0, 3);
		},
		A: function(d, l) {
			Date.weekdays[l] || (l = 'en');
			return Date.weekdays[l][d.getDay()];
		},
		b: function(d, l) {
			Date.months[l] || (l = 'en');
			return Date.months[l][d.getMonth()].substr(0, 3);
		},
		B: function(d, l) {
			Date.months[l] || (l = 'en');
			return Date.months[l][d.getMonth()];
		},
		Y: function(d) {
			return d.getFullYear();
		},
		m: function(d) {
			return lpad(d.getMonth()+1);
		},
		d: function(d) {
			return lpad(d.getDate());
		},
		y: function(d) {
			return String(d.getFullYear()).substr(2);
		},
		D: function(d) {
			return d.strftime('%m/%d/%y');
		},
		F: function(d) {
			return d.strftime('%Y-%m-%d');
		},
		s: function(d) {
			return parseInt(d.getTime()/1000);
		},
		H: function(d) {
			return lpad(d.getHours());
		},
		M: function(d) {
			return lpad(d.getMinutes());
		},
		S: function(d) {
			return lpad(d.getSeconds());
		},
		T: function(d) {
			return d.strftime('%H:%M:%S');
		},
		w: function(d) {
			return d.getDay();
		}
	};

	// publish
	C.prototype.strftime = function(f, l) {
		var d = this;
		return f.replace(/%([a-zA-Z%])/g, function(t, m) {
			return formats[m] ? formats[m](d, l) : ( m == '%' ? '' : '%' ) + m;
		});
	};

	C.formats = formats;
	C.weekdays = weekdays;
	C.months = months;

})(Date);
