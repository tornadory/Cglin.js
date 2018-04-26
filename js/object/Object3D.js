(function(Dc) {
	var Object3D = function() {
		var self = this;

		this.position = Dc.Vector3.zero()
		this.scale = Dc.Vector3.one()
		this.rotation = Dc.Vector3.zero()

	};

	Dc.Object3D = Object3D;
})(Dc)