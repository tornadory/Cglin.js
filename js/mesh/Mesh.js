(function(Dc) {
	var Mesh = function() {
		Dc.Object3D.call(this);

		this.geometry = null
		this.material = null
	};

	Dc.Mesh = Mesh;
})(Dc)