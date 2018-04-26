//Camera 摄像机
function Cam() {
  Object3D.call(this);
  this.type = "Cam";
  this.matrixWorldInv = new Mat4();
  this.projectionMat = new Mat4();
}

Cam.prototype = Object.assign(Object.create(Object3D.prototype), {
  constructor: Cam,
  isCam: true,

  updateMatWorld: function(force) {
    Object3D.prototype.updateMatrixWorld.call(this, force);
    this.matrixWorldInv.getInv(this.matWorld);
  }
});
