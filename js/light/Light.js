(function(Dc) {
	var Light = function(color, intensity) {
		Dc.Object3D.call(this);
		this.type = 'Light';

		this.color = new Dc.Color(color);
		this.intensity = intensity !== undefined ? intensity : 1;
	};
})(Dc)