# Date.strftime

A very tiny JS lib that adds the well famous `.strftime` to the JS `Date` object.

## Example

    var d = new Date
	// datetime style: 2011-11-10 17:02:19
	d.strftime('%F %T')
	// weekday: 4 (Thursday)
	d.strftime('%w')
	// etc

## Todo

* Add helper functions to `Date`:
* * `void .add( Number amount, String unit )`
* * `void .add( String duration )` (like `1w 2d 4h 45m 19s`)
* * `String .diff( Date date )`
* * `Boolean .equals( Date date, String format )`
