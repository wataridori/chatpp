var preload_hook_code = `
window.CHATPP_defineProperty = Object.defineProperty;
window.esmodules = [];
defineProperty_handler = {
  apply: function (target, thisArg, args) {
    r = target.apply(thisArg, args);
    if (args[1] == 'a') {
        window.esmodules.push(r);
    };
    if (args[1] == 'searchUrlTokens') {
      console.log('Found Notation Module, restore Object.defineProperty!');
      window.notation_module = r;
      Object.defineProperty = window.CHATPP_defineProperty;
    }
    return r;
  },
}
Object.defineProperty = new Proxy(Object.defineProperty, defineProperty_handler)

// backup Object.defineProperties
window.CHATPP_defineProperties = Object.defineProperties;
defineProperties_handler = {
  apply: function (target, thisArg, args) {
    r = target.apply(thisArg, args);
    if (r.EC14) {
      console.log('Final tagHash after last emo inserted, restore Object.defineProperties!');
      window.emoticon_tag_hash_list = r;
      Object.defineProperties = window.CHATPP_defineProperties;
    }
    return r;
  },
}

Object.defineProperties = new Proxy(Object.defineProperties, defineProperties_handler);
`;

var script = document.createElement('script');
script.textContent = preload_hook_code;
(document.head || document.documentElement).appendChild(script);
script.remove();
