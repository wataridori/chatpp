let Const = require("../helpers/Const.js");

class NotifyAll {
    setUp() {
        this.registerRegex();
    }

    registerRegex() {
        CW.reg_cmp.push({
            key: /TO ALL &gt;&gt;&gt;/g,
            rep: "<span class=\"chatTimeLineTo\">TO ALL</span>",
            reptxt: "TO ALL",
            special: true
        });

        window.FindReact = (dom) => {
            let key = Object.keys(dom).find((key) => key.startsWith("__reactInternalInstance$"));
            let internalInstance = dom[key];
            if (internalInstance == null) return null;

            if (internalInstance.return) { // react 16+
                return internalInstance.return.child.memoizedProps.children.find((child) => child._owner)._owner.stateNode;
            } else { // react <16
                return internalInstance._currentElement._owner._instance;
            }
        }

        let dom = document.getElementsByClassName("_message");
        if (!dom.length) {
            return;
        }
        let node = window.FindReact(dom[dom.length-1]);
        if (!node) {
            return;
        }
        node.__proto__.renderOld = node.__proto__.render;
        node.__proto__.render = function() {
            if (this.props.message.body.indexOf(Const.TO_ALL_MARK) === 0) {
                this.props.message.mentioned = true;
            }

            return this.renderOld();
        };
    }
}

let notify_all = new NotifyAll();
module.exports = notify_all;
