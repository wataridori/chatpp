var preload_hook_code = `
console.log("Preload Hook STARTED !!!");
console.log("Create proxy to expose all esmodules");
window.esmodules = [];
apply_handler = {
    apply: function(target, thisArg, args) {
        r = target.apply(thisArg, args);
        if (args[1] == 'a') {
            window.esmodules.push(r);
        };
        return r;
    }
}
Object.defineProperty = new Proxy(Object.defineProperty, apply_handler);
`;

var script = document.createElement('script');
script.textContent = preload_hook_code;
(document.head || document.documentElement).appendChild(script);
script.remove();
