
const Contrusctores = new Object({
    Contrusctores_obj : function(){
        this.nombre;
        this.edad;
        return this;
    }
});
const settters = new Object({
    settter_obj : function(){
        this.nombre;
        this.edad;
        return this;
    }
});

const Contrusctores_obj = Contrusctores.Contrusctores_obj.bind({nombre:'Adrian', edad: 50});
const obj = new Object();
obj.__proto__.construnctor = Contrusctores_obj();
obj.__defineSetter__('setNombre', function(val) { obj.__proto__.construnctor.nombre = val; });
obj.__defineGetter__('getNombre', function() { return obj.__proto__.construnctor.nombre; });
Object.seal(obj);

obj.setNombre = "Adrian";
console.log(obj.getNombre);
console.log(obj);
