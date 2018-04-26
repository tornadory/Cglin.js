function Light(color, intensity) {
  Object3D.call(this);
  this.type = "Light";

  this.color = new Dc.Color(color);
  this.intensity = intensity !== undefined ? intensity : 1;
}


Light.prototype = Object.assign( Object.create( Object3D.prototype ), {
	constructor:Light,
	isLight:true
});