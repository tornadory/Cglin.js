(function(Dc) {
	var Material = function() {
		this.type = 'Material';

		this.fog = true;
		this.lights = true;

		this.side = null;
		this.flatShading = false;
		this.vertexColors = null; // THREE.NoColors, THREE.VertexColors, THREE.FaceColors

		this.opacity = 1;
		this.transparent = false;

		this.blendSrc = null;
		this.blendDst = null;
		this.blendEquation = null;
		this.blendSrcAlpha = null;
		this.blendDstAlpha = null;
		this.blendEquationAlpha = null;

		this.depthFunc = null;
		this.depthTest = true;
		this.depthWrite = true;

		this.map = null;

		this.visible = true;
		this.needsUpdate = true;
	};

	Dc.Material = Material;
})(Dc)