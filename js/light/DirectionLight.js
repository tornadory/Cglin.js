var DirectionLight = function() {
  Light.call(this);

  this.type = "DirectionLight";
};

DirectionLight.prototype = Object.assign(Object.create(Light.prototype), {
  constructor: DirectionLight,
  isDirectionLight: true
});
