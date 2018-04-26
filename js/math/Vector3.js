(function(Dc) {
	var Vector3 = function(x, y, z) {
		this.x = x || 0;
		this.y = y || 0;
		this.z = z || 0;
	};

	Vector3.prototype = {

	}

	Dc.Vector3 = Vector3;

	Vector3.create = function(x, y, z) {
		return new Vector3(x, y, z)
	}

	Vector3.zero = function() {
		return new Vector3(0, 0, 0)
	}
	Vector3.one = function() {
		return new Vector3(1, 1, 1)
	}
	Vector3.unitX = function() {
		return new Vector3(1, 0, 0)
	}
	Vector3.unitY = function() {
		return new Vector3(0, 1, 0)
	}

	Vector3.unitZ = function() {
		return new Vector3(0, 0, 1)
	}

})(Dc)