
(function(c) {

	var lpad = function(n) {
		return 10 > n ? '0'+n : ''+n
	}

	var formats = {
		Y: function(d) {
			return ''+d.getFullYear()
		},
		m: function(d) {
			var m = d.getMonth()+1
			return lpad(m)
		},
		d: function(d) {
			var d = d.getDate()
			return lpad(d)
		},
		y: function(d) {
			return (''+d.getFullYear()).substr(2)
		},
		D: function(d) {
			return d.strftime('%m/%d/%y')
		},
		F: function(d) {
			return d.strftime('%Y-%m-%d')
		},
		s: function(d) {
			return ''+parseInt(d.getTime()/1000)
		},
		H: function(d) {
			var h = d.getHours()
			return lpad(h)
		},
		M: function(d) {
			var m = d.getMinutes()
			return lpad(m)
		},
		S: function(d) {
			var s = d.getSeconds()
			return lpad(s)
		},
		T: function(d) {
			return d.strftime('%H:%M:%S')
		},
		w: function(d) {
			return ''+d.getDay()
		}
	}

	// publish
	c.prototype.strftime = function(f) {
		var d = this
		return f.replace(/%([a-zA-Z%])/g, function(t, m) {
			return formats[m] ? formats[m](d) : ( m == '%' ? '' : '%' ) + m
		})
	}

	c.formats = formats

})(Date);
