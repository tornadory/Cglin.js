(function(Dc) {
	var Matrix4 = function() {
		this.m = [
			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1
		]
	};

	Matrix4.create = function() {
		return new Matrix4()
	}

	Dc.Matrix4 = Matrix4;
})(Dc)