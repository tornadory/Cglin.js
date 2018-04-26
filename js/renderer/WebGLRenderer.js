(function(Dc) {
	var WebGLRenderer = function(args) {
		args = args || {};
		var self = this;

		this.domElement = args.domElement || document.createElement("canvas");
		var attributes = {
			//			alpha: false,
			//			depth: true,
			//			stencil: _stencil,
			antialias: true,
			//			premultipliedAlpha: _premultipliedAlpha,
			//			preserveDrawingBuffer: _preserveDrawingBuffer,
			//			powerPreference: _powerPreference
		};

		var gl = this.gl = this.domElement.getContext("webgl2", attributes) || this.domElement.getContext("webgl", attributes)

		this.version = gl.toString()[13] === 'R' ? '1' : gl.toString()[13];

		this.renderBufferDirect = function(camera, fog, geometry, material, objct, group) {
			if(object.isMesh) {

				if(material.wireframe === true) {
					state.setLineWidth(material.wireframeLinewidth * getTargetPixelRatio());
					renderer.setMode(_gl.LINES);

				} else {

					switch(object.drawMode) {

						case TrianglesDrawMode:
							renderer.setMode(_gl.TRIANGLES);
							break;

						case TriangleStripDrawMode:
							renderer.setMode(_gl.TRIANGLE_STRIP);
							break;

						case TriangleFanDrawMode:
							renderer.setMode(_gl.TRIANGLE_FAN);
							break;

					}

				}

			} else if(object.isLine) {

				var lineWidth = material.linewidth;

				if(lineWidth === undefined) lineWidth = 1; // Not using Line*Material

				state.setLineWidth(lineWidth * getTargetPixelRatio());

				if(object.isLineSegments) {

					renderer.setMode(_gl.LINES);

				} else if(object.isLineLoop) {

					renderer.setMode(_gl.LINE_LOOP);

				} else {

					renderer.setMode(_gl.LINE_STRIP);

				}

			} else if(object.isPoints) {

				renderer.setMode(_gl.POINTS);

			}
		}

		this.onframe = function(scene, camera) {

		}
	}

	WebGLRenderer.prototype = {

	}

	Dc.WebGLRenderer = WebGLRenderer;
})(Dc)