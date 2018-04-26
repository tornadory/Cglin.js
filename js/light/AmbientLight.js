function AmbientLight() {
  Light.call(this);

  this.type = "AmbientLight";
}
AmbientLight.prototype = Object.assign(Object.create(Light.prototype), {
	constructor: AmbientLight,
	isAmbientLight: true
  });
  