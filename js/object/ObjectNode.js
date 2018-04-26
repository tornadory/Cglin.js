(function(Dc) {
	//节点管理
	var ObjectNode = function() {
		var self = this;
		this.uuid = 0;
		this.type = "ObjectNode";
		this.name = "ObjectNode";
		this.parent = null;
		this.children = [];
	};

	ObjectNode.prototype = {
		add: function(object) {
			if(arguments.length > 1) {
				for(var i = 0; i < arguments.length; i++) {
					this.add(arguments[i]);
				}
				return this;
			}

			if(object === this) {
				console.error("THREE.Object3D.add: object can't be added as a child of itself.", object);
				return this;
			}

			if((object && object.isObject3D)) {
				if(object.parent !== null) {
					object.parent.remove(object);
				}

				object.parent = this;
				object.dispatchEvent({
					type: 'added'
				});

				this.children.push(object);

			} else {
				console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", object);
			}

			return this;

		},

		remove: function(object) {

			if(arguments.length > 1) {

				for(var i = 0; i < arguments.length; i++) {

					this.remove(arguments[i]);

				}

				return this;

			}

			var index = this.children.indexOf(object);

			if(index !== -1) {

				object.parent = null;

				object.dispatchEvent({
					type: 'removed'
				});

				this.children.splice(index, 1);

			}

			return this;

		},

		getObjectById: function(id) {
			return this.getObjectByProperty('id', id);

		},

		getObjectByName: function(name) {

			return this.getObjectByProperty('name', name);

		},

		getObjectByProperty: function(name, value) {

			if(this[name] === value) return this;

			for(var i = 0, l = this.children.length; i < l; i++) {

				var child = this.children[i];
				var object = child.getObjectByProperty(name, value);

				if(object !== undefined) {

					return object;

				}

			}

			return undefined;

		},
	};

	Dc.ObjectNode = ObjectNode;
})(Dc)