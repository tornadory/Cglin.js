function WebGLRenderer(args) {
  args = args || {};
  var self = this;

  this.domElement = args.domElement || document.createElement("canvas");
  var attributes = {
    //			alpha: false,
    //			depth: true,
    //			stencil: _stencil,
    antialias: true
    //			premultipliedAlpha: _premultipliedAlpha,
    //			preserveDrawingBuffer: _preserveDrawingBuffer,
    //			powerPreference: _powerPreference
  };

  var gl = (this.gl =
    this.domElement.getContext("webgl2", attributes) ||
    this.domElement.getContext("webgl", attributes));

  this.version = gl.toString()[13] === "R" ? "1" : gl.toString()[13];
  //Data Space Start-----------------------------------------
  this.sort = true;
  var lightsArray = [];
  var currentRenderList = [];
  var _depthVector3 = Vec3.create();
  var _projScreenMat = Mat4.create();
  var opaqueObjects = [],
    transparentObjects = [];
  var bufRenderer = new BufRenderer();
  var indexedBufferRenderer = new indexedBufRenderer();
  //Data Space End-----------------------------------------

  function handeScene(object, camera, sort) {
    if (object.visible === false) return;

    if (object.isLight) {
      lightsArray.push(object);
    } else if (object.isMesh) {
      if (sort) {
        _depthVector3
          .setFromMatrixPosition(object.matrixWorld)
          .applyMatrix4(_projScreenMatrix);
      }

      currentRenderList.push(object, geometry, material, _vector3.z, null);
    }

    var children = object.children;
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      handeScene(object);
    }
  }

  this.onframe = function(scene, camera) {
    if (camera && camera.isCamera) {
      console.error("THREE.WebGLRenderer.onframe:这不是摄像机");
      return;
    }
    //更新场景
    if (scene.needUpdate) scene.updateMatrixWorld();
    //更新摄像机
    if (camera.parent === null) camera.updateMatrixWorld();

    handeScene(scene, camera, this.sort);

    //不透明物体从前到后
    if (opaqueObjects.length) renderObjects(opaqueObjects, scene, camera);
    //透明物体从后到前
    if (transparentObjects.length)
      renderObjects(transparentObjects, scene, camera);
  };

  function initMaterial(material, fog, object) {}

  function getProgram(camera, fog, material, object) {
    if (material.needsUpdate) {
      initMaterial(material, fog, object);
      material.needsUpdate = false;
    }
  }

  function setupAttributes(material, program, geometry, startIndex){
	var geometryAttributes = geometry.attributes;

	var programAttributes = program.getAttributes();

	var materialDefaultAttributeValues = material.defaultAttributeValues;
		for (const name in programAttributes) {
			if (programAttributes.hasOwnProperty(name)) {
				const element = programAttributes[name];
				 
				gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
				gl.vertexAttribPointer(programAttributes,size,type,normalized,stride,offset);
			}
		}
  }

  function renderObjects(objects, scene, camera) {
    for (let i = 0; i < objects.length; i++) {
      const element = objects[i];

      element.modelViewMat.mulMat(camera.matWorldInv, element.matWorld);
      element.normalMat.getNormalMat(element.modelViewMat);

      var program = getProgram(camera, fog, material, element);
      var index = geometry.index;

      var renderer = bufferRenderer;
      if (index !== null) {
        renderer = indexedBufRenderer;
      }

      //绑定属性值
      setupAttributes(material, program, geometry);

      if (object.isMesh) {
        renderer.setMode(renderer.drawMode);
      }

      renderer.draw();
    }
  }
}

WebGLRenderer.prototype = {};
