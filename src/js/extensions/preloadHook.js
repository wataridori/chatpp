console.log("Preload Hook STARTED !!!");
console.log("Create proxy to expose all esmodules");
window.esmodules = [];
apply_handler = {
    apply: function(target, thisArg, args) {
        r = target.apply(thisArg, args);
        if (args[1] == '__esModule') {
            window.esmodules.push(r);
        };
        return r;
    }
}
Object.defineProperty = new Proxy(Object.defineProperty, apply_handler);
