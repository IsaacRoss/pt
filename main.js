// Generated by psc-bundle 0.8.2.0
var PS = { };
(function(exports) {
  /* global exports */
  "use strict";

  exports.unsafeQuerySelector = function (selector) {
    return function (src) {
      return function () {
        return src.querySelector(selector);
      };
    };
  };

  exports.unsafeSetTextContent = function (value) {
    return function (src) {
      return function () {
        src.textContent = value;
        return {};
      };
    };
  };

  exports.unsafeValue = function (src) {
    return function () {
      return src.value;
    };
  };
 
})(PS["Data.DOM.Simple.Unsafe.Element"] = PS["Data.DOM.Simple.Unsafe.Element"] || {});
(function(exports) {
  // Generated by psc version 0.8.2.0
  "use strict";
  var $foreign = PS["Data.DOM.Simple.Unsafe.Element"];
  var Prelude = PS["Prelude"];
  var DOM = PS["DOM"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Data_DOM_Simple_Types = PS["Data.DOM.Simple.Types"];
  var Data_DOM_Simple_Unsafe_Utils = PS["Data.DOM.Simple.Unsafe.Utils"];
  exports["unsafeValue"] = $foreign.unsafeValue;
  exports["unsafeSetTextContent"] = $foreign.unsafeSetTextContent;
  exports["unsafeQuerySelector"] = $foreign.unsafeQuerySelector;;
 
})(PS["Data.DOM.Simple.Unsafe.Element"] = PS["Data.DOM.Simple.Unsafe.Element"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module Data.DOM.Simple.Unsafe.Events

  exports.unsafeAddEventListener = function (targ) {
    return function (cb) {
      return function (src) {
        return function () {
          src.addEventListener(targ, function (evt) {
            cb(evt)();
          });
        };
      };
    };
  };

  exports.unsafeEventTarget = function (event) {
    return function () {
      return event.target;
    };
  };
 
})(PS["Data.DOM.Simple.Unsafe.Events"] = PS["Data.DOM.Simple.Unsafe.Events"] || {});
(function(exports) {
  // Generated by psc version 0.8.2.0
  "use strict";
  var $foreign = PS["Data.DOM.Simple.Unsafe.Events"];
  var Prelude = PS["Prelude"];
  var DOM = PS["DOM"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Data_DOM_Simple_Types = PS["Data.DOM.Simple.Types"];
  exports["unsafeEventTarget"] = $foreign.unsafeEventTarget;
  exports["unsafeAddEventListener"] = $foreign.unsafeAddEventListener;;
 
})(PS["Data.DOM.Simple.Unsafe.Events"] = PS["Data.DOM.Simple.Unsafe.Events"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module Data.DOM.Simple.Unsafe.Window

  exports.unsafeDocument = function (win) {
    return function () {
      return win.document;
    };
  };
 
})(PS["Data.DOM.Simple.Unsafe.Window"] = PS["Data.DOM.Simple.Unsafe.Window"] || {});
(function(exports) {
  // Generated by psc version 0.8.2.0
  "use strict";
  var $foreign = PS["Data.DOM.Simple.Unsafe.Window"];
  var Prelude = PS["Prelude"];
  var DOM = PS["DOM"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Data_DOM_Simple_Types = PS["Data.DOM.Simple.Types"];
  var Data_DOM_Simple_Document = PS["Data.DOM.Simple.Document"];
  exports["unsafeDocument"] = $foreign.unsafeDocument;;
 
})(PS["Data.DOM.Simple.Unsafe.Window"] = PS["Data.DOM.Simple.Unsafe.Window"] || {});
(function(exports) {
  /* global exports, window */
  "use strict";

  // module Data.DOM.Simple.Window

  exports.globalWindow = window;
 
})(PS["Data.DOM.Simple.Window"] = PS["Data.DOM.Simple.Window"] || {});
(function(exports) {
  // Generated by psc version 0.8.2.0
  "use strict";
  var $foreign = PS["Data.DOM.Simple.Window"];
  var Prelude = PS["Prelude"];
  var DOM = PS["DOM"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Data_DOM_Simple_Types = PS["Data.DOM.Simple.Types"];
  var Data_DOM_Simple_Unsafe_Window = PS["Data.DOM.Simple.Unsafe.Window"];
  var Data_DOM_Simple_Document = PS["Data.DOM.Simple.Document"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Array = PS["Data.Array"];
  var Data_String = PS["Data.String"];
  exports["globalWindow"] = $foreign.globalWindow;;
 
})(PS["Data.DOM.Simple.Window"] = PS["Data.DOM.Simple.Window"] || {});
(function(exports) {
  // Generated by psc version 0.8.2.0
  "use strict";
  var Data_DOM_Simple_Unsafe_Element = PS["Data.DOM.Simple.Unsafe.Element"];
  var Data_DOM_Simple_Unsafe_Events = PS["Data.DOM.Simple.Unsafe.Events"];
  var Data_DOM_Simple_Unsafe_Window = PS["Data.DOM.Simple.Unsafe.Window"];
  var Data_DOM_Simple_Window = PS["Data.DOM.Simple.Window"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];     
  var updateBadge = function (event) {
      return function __do() {
          var v = Data_DOM_Simple_Unsafe_Window.unsafeDocument(Data_DOM_Simple_Window.globalWindow)();
          var v1 = Data_DOM_Simple_Unsafe_Element.unsafeQuerySelector("#badgeName")(v)();
          var v2 = Data_DOM_Simple_Unsafe_Events.unsafeEventTarget(event)();
          var v3 = Data_DOM_Simple_Unsafe_Element.unsafeValue(v2)();
          return Data_DOM_Simple_Unsafe_Element.unsafeSetTextContent(v3)(v1)();
      };
  };
  var main = function __do() {
      var v = Data_DOM_Simple_Unsafe_Window.unsafeDocument(Data_DOM_Simple_Window.globalWindow)();
      var v1 = Data_DOM_Simple_Unsafe_Element.unsafeQuerySelector("#inputName")(v)();
      return Data_DOM_Simple_Unsafe_Events.unsafeAddEventListener("input")(updateBadge)(v1)();
  };
  exports["updateBadge"] = updateBadge;
  exports["main"] = main;;
 
})(PS["Main"] = PS["Main"] || {});

PS["Main"].main();
