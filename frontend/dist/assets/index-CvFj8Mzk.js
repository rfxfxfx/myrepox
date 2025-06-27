function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    } }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }));
}

true              &&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;
	{
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

var react = {exports: {}};

var react_production = {};

/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production;

function requireReact_production () {
	if (hasRequiredReact_production) return react_production;
	hasRequiredReact_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
	  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	  REACT_MEMO_TYPE = Symbol.for("react.memo"),
	  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	  MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
	  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
	  maybeIterable =
	    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
	    maybeIterable["@@iterator"];
	  return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ReactNoopUpdateQueue = {
	    isMounted: function () {
	      return false;
	    },
	    enqueueForceUpdate: function () {},
	    enqueueReplaceState: function () {},
	    enqueueSetState: function () {}
	  },
	  assign = Object.assign,
	  emptyObject = {};
	function Component(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	Component.prototype.isReactComponent = {};
	Component.prototype.setState = function (partialState, callback) {
	  if (
	    "object" !== typeof partialState &&
	    "function" !== typeof partialState &&
	    null != partialState
	  )
	    throw Error(
	      "takes an object of state variables to update or a function which returns an object of state variables."
	    );
	  this.updater.enqueueSetState(this, partialState, callback, "setState");
	};
	Component.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
	};
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	function PureComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	var pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
	pureComponentPrototype.constructor = PureComponent;
	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = true;
	var isArrayImpl = Array.isArray,
	  ReactSharedInternals = { H: null, A: null, T: null, S: null, V: null },
	  hasOwnProperty = Object.prototype.hasOwnProperty;
	function ReactElement(type, key, self, source, owner, props) {
	  self = props.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== self ? self : null,
	    props: props
	  };
	}
	function cloneAndReplaceKey(oldElement, newKey) {
	  return ReactElement(
	    oldElement.type,
	    newKey,
	    void 0,
	    void 0,
	    void 0,
	    oldElement.props
	  );
	}
	function isValidElement(object) {
	  return (
	    "object" === typeof object &&
	    null !== object &&
	    object.$$typeof === REACT_ELEMENT_TYPE
	  );
	}
	function escape(key) {
	  var escaperLookup = { "=": "=0", ":": "=2" };
	  return (
	    "$" +
	    key.replace(/[=:]/g, function (match) {
	      return escaperLookup[match];
	    })
	  );
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
	  return "object" === typeof element && null !== element && null != element.key
	    ? escape("" + element.key)
	    : index.toString(36);
	}
	function noop$1() {}
	function resolveThenable(thenable) {
	  switch (thenable.status) {
	    case "fulfilled":
	      return thenable.value;
	    case "rejected":
	      throw thenable.reason;
	    default:
	      switch (
	        ("string" === typeof thenable.status
	          ? thenable.then(noop$1, noop$1)
	          : ((thenable.status = "pending"),
	            thenable.then(
	              function (fulfilledValue) {
	                "pending" === thenable.status &&
	                  ((thenable.status = "fulfilled"),
	                  (thenable.value = fulfilledValue));
	              },
	              function (error) {
	                "pending" === thenable.status &&
	                  ((thenable.status = "rejected"), (thenable.reason = error));
	              }
	            )),
	        thenable.status)
	      ) {
	        case "fulfilled":
	          return thenable.value;
	        case "rejected":
	          throw thenable.reason;
	      }
	  }
	  throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
	  var type = typeof children;
	  if ("undefined" === type || "boolean" === type) children = null;
	  var invokeCallback = false;
	  if (null === children) invokeCallback = true;
	  else
	    switch (type) {
	      case "bigint":
	      case "string":
	      case "number":
	        invokeCallback = true;
	        break;
	      case "object":
	        switch (children.$$typeof) {
	          case REACT_ELEMENT_TYPE:
	          case REACT_PORTAL_TYPE:
	            invokeCallback = true;
	            break;
	          case REACT_LAZY_TYPE:
	            return (
	              (invokeCallback = children._init),
	              mapIntoArray(
	                invokeCallback(children._payload),
	                array,
	                escapedPrefix,
	                nameSoFar,
	                callback
	              )
	            );
	        }
	    }
	  if (invokeCallback)
	    return (
	      (callback = callback(children)),
	      (invokeCallback =
	        "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar),
	      isArrayImpl(callback)
	        ? ((escapedPrefix = ""),
	          null != invokeCallback &&
	            (escapedPrefix =
	              invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
	          mapIntoArray(callback, array, escapedPrefix, "", function (c) {
	            return c;
	          }))
	        : null != callback &&
	          (isValidElement(callback) &&
	            (callback = cloneAndReplaceKey(
	              callback,
	              escapedPrefix +
	                (null == callback.key ||
	                (children && children.key === callback.key)
	                  ? ""
	                  : ("" + callback.key).replace(
	                      userProvidedKeyEscapeRegex,
	                      "$&/"
	                    ) + "/") +
	                invokeCallback
	            )),
	          array.push(callback)),
	      1
	    );
	  invokeCallback = 0;
	  var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
	  if (isArrayImpl(children))
	    for (var i = 0; i < children.length; i++)
	      (nameSoFar = children[i]),
	        (type = nextNamePrefix + getElementKey(nameSoFar, i)),
	        (invokeCallback += mapIntoArray(
	          nameSoFar,
	          array,
	          escapedPrefix,
	          type,
	          callback
	        ));
	  else if (((i = getIteratorFn(children)), "function" === typeof i))
	    for (
	      children = i.call(children), i = 0;
	      !(nameSoFar = children.next()).done;

	    )
	      (nameSoFar = nameSoFar.value),
	        (type = nextNamePrefix + getElementKey(nameSoFar, i++)),
	        (invokeCallback += mapIntoArray(
	          nameSoFar,
	          array,
	          escapedPrefix,
	          type,
	          callback
	        ));
	  else if ("object" === type) {
	    if ("function" === typeof children.then)
	      return mapIntoArray(
	        resolveThenable(children),
	        array,
	        escapedPrefix,
	        nameSoFar,
	        callback
	      );
	    array = String(children);
	    throw Error(
	      "Objects are not valid as a React child (found: " +
	        ("[object Object]" === array
	          ? "object with keys {" + Object.keys(children).join(", ") + "}"
	          : array) +
	        "). If you meant to render a collection of children, use an array instead."
	    );
	  }
	  return invokeCallback;
	}
	function mapChildren(children, func, context) {
	  if (null == children) return children;
	  var result = [],
	    count = 0;
	  mapIntoArray(children, result, "", "", function (child) {
	    return func.call(context, child, count++);
	  });
	  return result;
	}
	function lazyInitializer(payload) {
	  if (-1 === payload._status) {
	    var ctor = payload._result;
	    ctor = ctor();
	    ctor.then(
	      function (moduleObject) {
	        if (0 === payload._status || -1 === payload._status)
	          (payload._status = 1), (payload._result = moduleObject);
	      },
	      function (error) {
	        if (0 === payload._status || -1 === payload._status)
	          (payload._status = 2), (payload._result = error);
	      }
	    );
	    -1 === payload._status && ((payload._status = 0), (payload._result = ctor));
	  }
	  if (1 === payload._status) return payload._result.default;
	  throw payload._result;
	}
	var reportGlobalError =
	  "function" === typeof reportError
	    ? reportError
	    : function (error) {
	        if (
	          "object" === typeof window &&
	          "function" === typeof window.ErrorEvent
	        ) {
	          var event = new window.ErrorEvent("error", {
	            bubbles: true,
	            cancelable: true,
	            message:
	              "object" === typeof error &&
	              null !== error &&
	              "string" === typeof error.message
	                ? String(error.message)
	                : String(error),
	            error: error
	          });
	          if (!window.dispatchEvent(event)) return;
	        } else if (
	          "object" === typeof process &&
	          "function" === typeof process.emit
	        ) {
	          process.emit("uncaughtException", error);
	          return;
	        }
	        console.error(error);
	      };
	function noop() {}
	react_production.Children = {
	  map: mapChildren,
	  forEach: function (children, forEachFunc, forEachContext) {
	    mapChildren(
	      children,
	      function () {
	        forEachFunc.apply(this, arguments);
	      },
	      forEachContext
	    );
	  },
	  count: function (children) {
	    var n = 0;
	    mapChildren(children, function () {
	      n++;
	    });
	    return n;
	  },
	  toArray: function (children) {
	    return (
	      mapChildren(children, function (child) {
	        return child;
	      }) || []
	    );
	  },
	  only: function (children) {
	    if (!isValidElement(children))
	      throw Error(
	        "React.Children.only expected to receive a single React element child."
	      );
	    return children;
	  }
	};
	react_production.Component = Component;
	react_production.Fragment = REACT_FRAGMENT_TYPE;
	react_production.Profiler = REACT_PROFILER_TYPE;
	react_production.PureComponent = PureComponent;
	react_production.StrictMode = REACT_STRICT_MODE_TYPE;
	react_production.Suspense = REACT_SUSPENSE_TYPE;
	react_production.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
	  ReactSharedInternals;
	react_production.__COMPILER_RUNTIME = {
	  __proto__: null,
	  c: function (size) {
	    return ReactSharedInternals.H.useMemoCache(size);
	  }
	};
	react_production.cache = function (fn) {
	  return function () {
	    return fn.apply(null, arguments);
	  };
	};
	react_production.cloneElement = function (element, config, children) {
	  if (null === element || void 0 === element)
	    throw Error(
	      "The argument must be a React element, but you passed " + element + "."
	    );
	  var props = assign({}, element.props),
	    key = element.key,
	    owner = void 0;
	  if (null != config)
	    for (propName in (void 0 !== config.ref && (owner = void 0),
	    void 0 !== config.key && (key = "" + config.key),
	    config))
	      !hasOwnProperty.call(config, propName) ||
	        "key" === propName ||
	        "__self" === propName ||
	        "__source" === propName ||
	        ("ref" === propName && void 0 === config.ref) ||
	        (props[propName] = config[propName]);
	  var propName = arguments.length - 2;
	  if (1 === propName) props.children = children;
	  else if (1 < propName) {
	    for (var childArray = Array(propName), i = 0; i < propName; i++)
	      childArray[i] = arguments[i + 2];
	    props.children = childArray;
	  }
	  return ReactElement(element.type, key, void 0, void 0, owner, props);
	};
	react_production.createContext = function (defaultValue) {
	  defaultValue = {
	    $$typeof: REACT_CONTEXT_TYPE,
	    _currentValue: defaultValue,
	    _currentValue2: defaultValue,
	    _threadCount: 0,
	    Provider: null,
	    Consumer: null
	  };
	  defaultValue.Provider = defaultValue;
	  defaultValue.Consumer = {
	    $$typeof: REACT_CONSUMER_TYPE,
	    _context: defaultValue
	  };
	  return defaultValue;
	};
	react_production.createElement = function (type, config, children) {
	  var propName,
	    props = {},
	    key = null;
	  if (null != config)
	    for (propName in (void 0 !== config.key && (key = "" + config.key), config))
	      hasOwnProperty.call(config, propName) &&
	        "key" !== propName &&
	        "__self" !== propName &&
	        "__source" !== propName &&
	        (props[propName] = config[propName]);
	  var childrenLength = arguments.length - 2;
	  if (1 === childrenLength) props.children = children;
	  else if (1 < childrenLength) {
	    for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
	      childArray[i] = arguments[i + 2];
	    props.children = childArray;
	  }
	  if (type && type.defaultProps)
	    for (propName in ((childrenLength = type.defaultProps), childrenLength))
	      void 0 === props[propName] &&
	        (props[propName] = childrenLength[propName]);
	  return ReactElement(type, key, void 0, void 0, null, props);
	};
	react_production.createRef = function () {
	  return { current: null };
	};
	react_production.forwardRef = function (render) {
	  return { $$typeof: REACT_FORWARD_REF_TYPE, render: render };
	};
	react_production.isValidElement = isValidElement;
	react_production.lazy = function (ctor) {
	  return {
	    $$typeof: REACT_LAZY_TYPE,
	    _payload: { _status: -1, _result: ctor },
	    _init: lazyInitializer
	  };
	};
	react_production.memo = function (type, compare) {
	  return {
	    $$typeof: REACT_MEMO_TYPE,
	    type: type,
	    compare: void 0 === compare ? null : compare
	  };
	};
	react_production.startTransition = function (scope) {
	  var prevTransition = ReactSharedInternals.T,
	    currentTransition = {};
	  ReactSharedInternals.T = currentTransition;
	  try {
	    var returnValue = scope(),
	      onStartTransitionFinish = ReactSharedInternals.S;
	    null !== onStartTransitionFinish &&
	      onStartTransitionFinish(currentTransition, returnValue);
	    "object" === typeof returnValue &&
	      null !== returnValue &&
	      "function" === typeof returnValue.then &&
	      returnValue.then(noop, reportGlobalError);
	  } catch (error) {
	    reportGlobalError(error);
	  } finally {
	    ReactSharedInternals.T = prevTransition;
	  }
	};
	react_production.unstable_useCacheRefresh = function () {
	  return ReactSharedInternals.H.useCacheRefresh();
	};
	react_production.use = function (usable) {
	  return ReactSharedInternals.H.use(usable);
	};
	react_production.useActionState = function (action, initialState, permalink) {
	  return ReactSharedInternals.H.useActionState(action, initialState, permalink);
	};
	react_production.useCallback = function (callback, deps) {
	  return ReactSharedInternals.H.useCallback(callback, deps);
	};
	react_production.useContext = function (Context) {
	  return ReactSharedInternals.H.useContext(Context);
	};
	react_production.useDebugValue = function () {};
	react_production.useDeferredValue = function (value, initialValue) {
	  return ReactSharedInternals.H.useDeferredValue(value, initialValue);
	};
	react_production.useEffect = function (create, createDeps, update) {
	  var dispatcher = ReactSharedInternals.H;
	  if ("function" === typeof update)
	    throw Error(
	      "useEffect CRUD overload is not enabled in this build of React."
	    );
	  return dispatcher.useEffect(create, createDeps);
	};
	react_production.useId = function () {
	  return ReactSharedInternals.H.useId();
	};
	react_production.useImperativeHandle = function (ref, create, deps) {
	  return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
	};
	react_production.useInsertionEffect = function (create, deps) {
	  return ReactSharedInternals.H.useInsertionEffect(create, deps);
	};
	react_production.useLayoutEffect = function (create, deps) {
	  return ReactSharedInternals.H.useLayoutEffect(create, deps);
	};
	react_production.useMemo = function (create, deps) {
	  return ReactSharedInternals.H.useMemo(create, deps);
	};
	react_production.useOptimistic = function (passthrough, reducer) {
	  return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
	};
	react_production.useReducer = function (reducer, initialArg, init) {
	  return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
	};
	react_production.useRef = function (initialValue) {
	  return ReactSharedInternals.H.useRef(initialValue);
	};
	react_production.useState = function (initialState) {
	  return ReactSharedInternals.H.useState(initialState);
	};
	react_production.useSyncExternalStore = function (
	  subscribe,
	  getSnapshot,
	  getServerSnapshot
	) {
	  return ReactSharedInternals.H.useSyncExternalStore(
	    subscribe,
	    getSnapshot,
	    getServerSnapshot
	  );
	};
	react_production.useTransition = function () {
	  return ReactSharedInternals.H.useTransition();
	};
	react_production.version = "19.1.0";
	return react_production;
}

var hasRequiredReact;

function requireReact () {
	if (hasRequiredReact) return react.exports;
	hasRequiredReact = 1;
	{
	  react.exports = requireReact_production();
	}
	return react.exports;
}

var reactExports = requireReact();
const React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

const React$1 = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: React
}, [reactExports]);

var client = {exports: {}};

var reactDomClient_production = {};

var scheduler = {exports: {}};

var scheduler_production = {};

/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredScheduler_production;

function requireScheduler_production () {
	if (hasRequiredScheduler_production) return scheduler_production;
	hasRequiredScheduler_production = 1;
	(function (exports) {
		function push(heap, node) {
		  var index = heap.length;
		  heap.push(node);
		  a: for (; 0 < index; ) {
		    var parentIndex = (index - 1) >>> 1,
		      parent = heap[parentIndex];
		    if (0 < compare(parent, node))
		      (heap[parentIndex] = node), (heap[index] = parent), (index = parentIndex);
		    else break a;
		  }
		}
		function peek(heap) {
		  return 0 === heap.length ? null : heap[0];
		}
		function pop(heap) {
		  if (0 === heap.length) return null;
		  var first = heap[0],
		    last = heap.pop();
		  if (last !== first) {
		    heap[0] = last;
		    a: for (
		      var index = 0, length = heap.length, halfLength = length >>> 1;
		      index < halfLength;

		    ) {
		      var leftIndex = 2 * (index + 1) - 1,
		        left = heap[leftIndex],
		        rightIndex = leftIndex + 1,
		        right = heap[rightIndex];
		      if (0 > compare(left, last))
		        rightIndex < length && 0 > compare(right, left)
		          ? ((heap[index] = right),
		            (heap[rightIndex] = last),
		            (index = rightIndex))
		          : ((heap[index] = left),
		            (heap[leftIndex] = last),
		            (index = leftIndex));
		      else if (rightIndex < length && 0 > compare(right, last))
		        (heap[index] = right), (heap[rightIndex] = last), (index = rightIndex);
		      else break a;
		    }
		  }
		  return first;
		}
		function compare(a, b) {
		  var diff = a.sortIndex - b.sortIndex;
		  return 0 !== diff ? diff : a.id - b.id;
		}
		exports.unstable_now = void 0;
		if ("object" === typeof performance && "function" === typeof performance.now) {
		  var localPerformance = performance;
		  exports.unstable_now = function () {
		    return localPerformance.now();
		  };
		} else {
		  var localDate = Date,
		    initialTime = localDate.now();
		  exports.unstable_now = function () {
		    return localDate.now() - initialTime;
		  };
		}
		var taskQueue = [],
		  timerQueue = [],
		  taskIdCounter = 1,
		  currentTask = null,
		  currentPriorityLevel = 3,
		  isPerformingWork = false,
		  isHostCallbackScheduled = false,
		  isHostTimeoutScheduled = false,
		  needsPaint = false,
		  localSetTimeout = "function" === typeof setTimeout ? setTimeout : null,
		  localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null,
		  localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null;
		function advanceTimers(currentTime) {
		  for (var timer = peek(timerQueue); null !== timer; ) {
		    if (null === timer.callback) pop(timerQueue);
		    else if (timer.startTime <= currentTime)
		      pop(timerQueue),
		        (timer.sortIndex = timer.expirationTime),
		        push(taskQueue, timer);
		    else break;
		    timer = peek(timerQueue);
		  }
		}
		function handleTimeout(currentTime) {
		  isHostTimeoutScheduled = false;
		  advanceTimers(currentTime);
		  if (!isHostCallbackScheduled)
		    if (null !== peek(taskQueue))
		      (isHostCallbackScheduled = true),
		        isMessageLoopRunning ||
		          ((isMessageLoopRunning = true), schedulePerformWorkUntilDeadline());
		    else {
		      var firstTimer = peek(timerQueue);
		      null !== firstTimer &&
		        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
		    }
		}
		var isMessageLoopRunning = false,
		  taskTimeoutID = -1,
		  frameInterval = 5,
		  startTime = -1;
		function shouldYieldToHost() {
		  return needsPaint
		    ? true
		    : exports.unstable_now() - startTime < frameInterval
		      ? false
		      : true;
		}
		function performWorkUntilDeadline() {
		  needsPaint = false;
		  if (isMessageLoopRunning) {
		    var currentTime = exports.unstable_now();
		    startTime = currentTime;
		    var hasMoreWork = true;
		    try {
		      a: {
		        isHostCallbackScheduled = !1;
		        isHostTimeoutScheduled &&
		          ((isHostTimeoutScheduled = !1),
		          localClearTimeout(taskTimeoutID),
		          (taskTimeoutID = -1));
		        isPerformingWork = !0;
		        var previousPriorityLevel = currentPriorityLevel;
		        try {
		          b: {
		            advanceTimers(currentTime);
		            for (
		              currentTask = peek(taskQueue);
		              null !== currentTask &&
		              !(
		                currentTask.expirationTime > currentTime && shouldYieldToHost()
		              );

		            ) {
		              var callback = currentTask.callback;
		              if ("function" === typeof callback) {
		                currentTask.callback = null;
		                currentPriorityLevel = currentTask.priorityLevel;
		                var continuationCallback = callback(
		                  currentTask.expirationTime <= currentTime
		                );
		                currentTime = exports.unstable_now();
		                if ("function" === typeof continuationCallback) {
		                  currentTask.callback = continuationCallback;
		                  advanceTimers(currentTime);
		                  hasMoreWork = !0;
		                  break b;
		                }
		                currentTask === peek(taskQueue) && pop(taskQueue);
		                advanceTimers(currentTime);
		              } else pop(taskQueue);
		              currentTask = peek(taskQueue);
		            }
		            if (null !== currentTask) hasMoreWork = !0;
		            else {
		              var firstTimer = peek(timerQueue);
		              null !== firstTimer &&
		                requestHostTimeout(
		                  handleTimeout,
		                  firstTimer.startTime - currentTime
		                );
		              hasMoreWork = !1;
		            }
		          }
		          break a;
		        } finally {
		          (currentTask = null),
		            (currentPriorityLevel = previousPriorityLevel),
		            (isPerformingWork = !1);
		        }
		        hasMoreWork = void 0;
		      }
		    } finally {
		      hasMoreWork
		        ? schedulePerformWorkUntilDeadline()
		        : (isMessageLoopRunning = false);
		    }
		  }
		}
		var schedulePerformWorkUntilDeadline;
		if ("function" === typeof localSetImmediate)
		  schedulePerformWorkUntilDeadline = function () {
		    localSetImmediate(performWorkUntilDeadline);
		  };
		else if ("undefined" !== typeof MessageChannel) {
		  var channel = new MessageChannel(),
		    port = channel.port2;
		  channel.port1.onmessage = performWorkUntilDeadline;
		  schedulePerformWorkUntilDeadline = function () {
		    port.postMessage(null);
		  };
		} else
		  schedulePerformWorkUntilDeadline = function () {
		    localSetTimeout(performWorkUntilDeadline, 0);
		  };
		function requestHostTimeout(callback, ms) {
		  taskTimeoutID = localSetTimeout(function () {
		    callback(exports.unstable_now());
		  }, ms);
		}
		exports.unstable_IdlePriority = 5;
		exports.unstable_ImmediatePriority = 1;
		exports.unstable_LowPriority = 4;
		exports.unstable_NormalPriority = 3;
		exports.unstable_Profiling = null;
		exports.unstable_UserBlockingPriority = 2;
		exports.unstable_cancelCallback = function (task) {
		  task.callback = null;
		};
		exports.unstable_forceFrameRate = function (fps) {
		  0 > fps || 125 < fps
		    ? console.error(
		        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
		      )
		    : (frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5);
		};
		exports.unstable_getCurrentPriorityLevel = function () {
		  return currentPriorityLevel;
		};
		exports.unstable_next = function (eventHandler) {
		  switch (currentPriorityLevel) {
		    case 1:
		    case 2:
		    case 3:
		      var priorityLevel = 3;
		      break;
		    default:
		      priorityLevel = currentPriorityLevel;
		  }
		  var previousPriorityLevel = currentPriorityLevel;
		  currentPriorityLevel = priorityLevel;
		  try {
		    return eventHandler();
		  } finally {
		    currentPriorityLevel = previousPriorityLevel;
		  }
		};
		exports.unstable_requestPaint = function () {
		  needsPaint = true;
		};
		exports.unstable_runWithPriority = function (priorityLevel, eventHandler) {
		  switch (priorityLevel) {
		    case 1:
		    case 2:
		    case 3:
		    case 4:
		    case 5:
		      break;
		    default:
		      priorityLevel = 3;
		  }
		  var previousPriorityLevel = currentPriorityLevel;
		  currentPriorityLevel = priorityLevel;
		  try {
		    return eventHandler();
		  } finally {
		    currentPriorityLevel = previousPriorityLevel;
		  }
		};
		exports.unstable_scheduleCallback = function (
		  priorityLevel,
		  callback,
		  options
		) {
		  var currentTime = exports.unstable_now();
		  "object" === typeof options && null !== options
		    ? ((options = options.delay),
		      (options =
		        "number" === typeof options && 0 < options
		          ? currentTime + options
		          : currentTime))
		    : (options = currentTime);
		  switch (priorityLevel) {
		    case 1:
		      var timeout = -1;
		      break;
		    case 2:
		      timeout = 250;
		      break;
		    case 5:
		      timeout = 1073741823;
		      break;
		    case 4:
		      timeout = 1e4;
		      break;
		    default:
		      timeout = 5e3;
		  }
		  timeout = options + timeout;
		  priorityLevel = {
		    id: taskIdCounter++,
		    callback: callback,
		    priorityLevel: priorityLevel,
		    startTime: options,
		    expirationTime: timeout,
		    sortIndex: -1
		  };
		  options > currentTime
		    ? ((priorityLevel.sortIndex = options),
		      push(timerQueue, priorityLevel),
		      null === peek(taskQueue) &&
		        priorityLevel === peek(timerQueue) &&
		        (isHostTimeoutScheduled
		          ? (localClearTimeout(taskTimeoutID), (taskTimeoutID = -1))
		          : (isHostTimeoutScheduled = true),
		        requestHostTimeout(handleTimeout, options - currentTime)))
		    : ((priorityLevel.sortIndex = timeout),
		      push(taskQueue, priorityLevel),
		      isHostCallbackScheduled ||
		        isPerformingWork ||
		        ((isHostCallbackScheduled = true),
		        isMessageLoopRunning ||
		          ((isMessageLoopRunning = true), schedulePerformWorkUntilDeadline())));
		  return priorityLevel;
		};
		exports.unstable_shouldYield = shouldYieldToHost;
		exports.unstable_wrapCallback = function (callback) {
		  var parentPriorityLevel = currentPriorityLevel;
		  return function () {
		    var previousPriorityLevel = currentPriorityLevel;
		    currentPriorityLevel = parentPriorityLevel;
		    try {
		      return callback.apply(this, arguments);
		    } finally {
		      currentPriorityLevel = previousPriorityLevel;
		    }
		  };
		}; 
	} (scheduler_production));
	return scheduler_production;
}

var hasRequiredScheduler;

function requireScheduler () {
	if (hasRequiredScheduler) return scheduler.exports;
	hasRequiredScheduler = 1;
	{
	  scheduler.exports = requireScheduler_production();
	}
	return scheduler.exports;
}

var reactDom = {exports: {}};

var reactDom_production = {};

/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactDom_production;

function requireReactDom_production () {
	if (hasRequiredReactDom_production) return reactDom_production;
	hasRequiredReactDom_production = 1;
	var React = requireReact();
	function formatProdErrorMessage(code) {
	  var url = "https://react.dev/errors/" + code;
	  if (1 < arguments.length) {
	    url += "?args[]=" + encodeURIComponent(arguments[1]);
	    for (var i = 2; i < arguments.length; i++)
	      url += "&args[]=" + encodeURIComponent(arguments[i]);
	  }
	  return (
	    "Minified React error #" +
	    code +
	    "; visit " +
	    url +
	    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	  );
	}
	function noop() {}
	var Internals = {
	    d: {
	      f: noop,
	      r: function () {
	        throw Error(formatProdErrorMessage(522));
	      },
	      D: noop,
	      C: noop,
	      L: noop,
	      m: noop,
	      X: noop,
	      S: noop,
	      M: noop
	    },
	    p: 0,
	    findDOMNode: null
	  },
	  REACT_PORTAL_TYPE = Symbol.for("react.portal");
	function createPortal$1(children, containerInfo, implementation) {
	  var key =
	    3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
	  return {
	    $$typeof: REACT_PORTAL_TYPE,
	    key: null == key ? null : "" + key,
	    children: children,
	    containerInfo: containerInfo,
	    implementation: implementation
	  };
	}
	var ReactSharedInternals =
	  React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function getCrossOriginStringAs(as, input) {
	  if ("font" === as) return "";
	  if ("string" === typeof input)
	    return "use-credentials" === input ? input : "";
	}
	reactDom_production.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
	  Internals;
	reactDom_production.createPortal = function (children, container) {
	  var key =
	    2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
	  if (
	    !container ||
	    (1 !== container.nodeType &&
	      9 !== container.nodeType &&
	      11 !== container.nodeType)
	  )
	    throw Error(formatProdErrorMessage(299));
	  return createPortal$1(children, container, null, key);
	};
	reactDom_production.flushSync = function (fn) {
	  var previousTransition = ReactSharedInternals.T,
	    previousUpdatePriority = Internals.p;
	  try {
	    if (((ReactSharedInternals.T = null), (Internals.p = 2), fn)) return fn();
	  } finally {
	    (ReactSharedInternals.T = previousTransition),
	      (Internals.p = previousUpdatePriority),
	      Internals.d.f();
	  }
	};
	reactDom_production.preconnect = function (href, options) {
	  "string" === typeof href &&
	    (options
	      ? ((options = options.crossOrigin),
	        (options =
	          "string" === typeof options
	            ? "use-credentials" === options
	              ? options
	              : ""
	            : void 0))
	      : (options = null),
	    Internals.d.C(href, options));
	};
	reactDom_production.prefetchDNS = function (href) {
	  "string" === typeof href && Internals.d.D(href);
	};
	reactDom_production.preinit = function (href, options) {
	  if ("string" === typeof href && options && "string" === typeof options.as) {
	    var as = options.as,
	      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin),
	      integrity =
	        "string" === typeof options.integrity ? options.integrity : void 0,
	      fetchPriority =
	        "string" === typeof options.fetchPriority
	          ? options.fetchPriority
	          : void 0;
	    "style" === as
	      ? Internals.d.S(
	          href,
	          "string" === typeof options.precedence ? options.precedence : void 0,
	          {
	            crossOrigin: crossOrigin,
	            integrity: integrity,
	            fetchPriority: fetchPriority
	          }
	        )
	      : "script" === as &&
	        Internals.d.X(href, {
	          crossOrigin: crossOrigin,
	          integrity: integrity,
	          fetchPriority: fetchPriority,
	          nonce: "string" === typeof options.nonce ? options.nonce : void 0
	        });
	  }
	};
	reactDom_production.preinitModule = function (href, options) {
	  if ("string" === typeof href)
	    if ("object" === typeof options && null !== options) {
	      if (null == options.as || "script" === options.as) {
	        var crossOrigin = getCrossOriginStringAs(
	          options.as,
	          options.crossOrigin
	        );
	        Internals.d.M(href, {
	          crossOrigin: crossOrigin,
	          integrity:
	            "string" === typeof options.integrity ? options.integrity : void 0,
	          nonce: "string" === typeof options.nonce ? options.nonce : void 0
	        });
	      }
	    } else null == options && Internals.d.M(href);
	};
	reactDom_production.preload = function (href, options) {
	  if (
	    "string" === typeof href &&
	    "object" === typeof options &&
	    null !== options &&
	    "string" === typeof options.as
	  ) {
	    var as = options.as,
	      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
	    Internals.d.L(href, as, {
	      crossOrigin: crossOrigin,
	      integrity:
	        "string" === typeof options.integrity ? options.integrity : void 0,
	      nonce: "string" === typeof options.nonce ? options.nonce : void 0,
	      type: "string" === typeof options.type ? options.type : void 0,
	      fetchPriority:
	        "string" === typeof options.fetchPriority
	          ? options.fetchPriority
	          : void 0,
	      referrerPolicy:
	        "string" === typeof options.referrerPolicy
	          ? options.referrerPolicy
	          : void 0,
	      imageSrcSet:
	        "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
	      imageSizes:
	        "string" === typeof options.imageSizes ? options.imageSizes : void 0,
	      media: "string" === typeof options.media ? options.media : void 0
	    });
	  }
	};
	reactDom_production.preloadModule = function (href, options) {
	  if ("string" === typeof href)
	    if (options) {
	      var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
	      Internals.d.m(href, {
	        as:
	          "string" === typeof options.as && "script" !== options.as
	            ? options.as
	            : void 0,
	        crossOrigin: crossOrigin,
	        integrity:
	          "string" === typeof options.integrity ? options.integrity : void 0
	      });
	    } else Internals.d.m(href);
	};
	reactDom_production.requestFormReset = function (form) {
	  Internals.d.r(form);
	};
	reactDom_production.unstable_batchedUpdates = function (fn, a) {
	  return fn(a);
	};
	reactDom_production.useFormState = function (action, initialState, permalink) {
	  return ReactSharedInternals.H.useFormState(action, initialState, permalink);
	};
	reactDom_production.useFormStatus = function () {
	  return ReactSharedInternals.H.useHostTransitionStatus();
	};
	reactDom_production.version = "19.1.0";
	return reactDom_production;
}

var hasRequiredReactDom;

function requireReactDom () {
	if (hasRequiredReactDom) return reactDom.exports;
	hasRequiredReactDom = 1;
	function checkDCE() {
	  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
	    return;
	  }
	  try {
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    console.error(err);
	  }
	}
	{
	  checkDCE();
	  reactDom.exports = requireReactDom_production();
	}
	return reactDom.exports;
}

/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactDomClient_production;

function requireReactDomClient_production () {
	if (hasRequiredReactDomClient_production) return reactDomClient_production;
	hasRequiredReactDomClient_production = 1;
	var Scheduler = requireScheduler(),
	  React = requireReact(),
	  ReactDOM = requireReactDom();
	function formatProdErrorMessage(code) {
	  var url = "https://react.dev/errors/" + code;
	  if (1 < arguments.length) {
	    url += "?args[]=" + encodeURIComponent(arguments[1]);
	    for (var i = 2; i < arguments.length; i++)
	      url += "&args[]=" + encodeURIComponent(arguments[i]);
	  }
	  return (
	    "Minified React error #" +
	    code +
	    "; visit " +
	    url +
	    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	  );
	}
	function isValidContainer(node) {
	  return !(
	    !node ||
	    (1 !== node.nodeType && 9 !== node.nodeType && 11 !== node.nodeType)
	  );
	}
	function getNearestMountedFiber(fiber) {
	  var node = fiber,
	    nearestMounted = fiber;
	  if (fiber.alternate) for (; node.return; ) node = node.return;
	  else {
	    fiber = node;
	    do
	      (node = fiber),
	        0 !== (node.flags & 4098) && (nearestMounted = node.return),
	        (fiber = node.return);
	    while (fiber);
	  }
	  return 3 === node.tag ? nearestMounted : null;
	}
	function getSuspenseInstanceFromFiber(fiber) {
	  if (13 === fiber.tag) {
	    var suspenseState = fiber.memoizedState;
	    null === suspenseState &&
	      ((fiber = fiber.alternate),
	      null !== fiber && (suspenseState = fiber.memoizedState));
	    if (null !== suspenseState) return suspenseState.dehydrated;
	  }
	  return null;
	}
	function assertIsMounted(fiber) {
	  if (getNearestMountedFiber(fiber) !== fiber)
	    throw Error(formatProdErrorMessage(188));
	}
	function findCurrentFiberUsingSlowPath(fiber) {
	  var alternate = fiber.alternate;
	  if (!alternate) {
	    alternate = getNearestMountedFiber(fiber);
	    if (null === alternate) throw Error(formatProdErrorMessage(188));
	    return alternate !== fiber ? null : fiber;
	  }
	  for (var a = fiber, b = alternate; ; ) {
	    var parentA = a.return;
	    if (null === parentA) break;
	    var parentB = parentA.alternate;
	    if (null === parentB) {
	      b = parentA.return;
	      if (null !== b) {
	        a = b;
	        continue;
	      }
	      break;
	    }
	    if (parentA.child === parentB.child) {
	      for (parentB = parentA.child; parentB; ) {
	        if (parentB === a) return assertIsMounted(parentA), fiber;
	        if (parentB === b) return assertIsMounted(parentA), alternate;
	        parentB = parentB.sibling;
	      }
	      throw Error(formatProdErrorMessage(188));
	    }
	    if (a.return !== b.return) (a = parentA), (b = parentB);
	    else {
	      for (var didFindChild = false, child$0 = parentA.child; child$0; ) {
	        if (child$0 === a) {
	          didFindChild = true;
	          a = parentA;
	          b = parentB;
	          break;
	        }
	        if (child$0 === b) {
	          didFindChild = true;
	          b = parentA;
	          a = parentB;
	          break;
	        }
	        child$0 = child$0.sibling;
	      }
	      if (!didFindChild) {
	        for (child$0 = parentB.child; child$0; ) {
	          if (child$0 === a) {
	            didFindChild = true;
	            a = parentB;
	            b = parentA;
	            break;
	          }
	          if (child$0 === b) {
	            didFindChild = true;
	            b = parentB;
	            a = parentA;
	            break;
	          }
	          child$0 = child$0.sibling;
	        }
	        if (!didFindChild) throw Error(formatProdErrorMessage(189));
	      }
	    }
	    if (a.alternate !== b) throw Error(formatProdErrorMessage(190));
	  }
	  if (3 !== a.tag) throw Error(formatProdErrorMessage(188));
	  return a.stateNode.current === a ? fiber : alternate;
	}
	function findCurrentHostFiberImpl(node) {
	  var tag = node.tag;
	  if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node;
	  for (node = node.child; null !== node; ) {
	    tag = findCurrentHostFiberImpl(node);
	    if (null !== tag) return tag;
	    node = node.sibling;
	  }
	  return null;
	}
	var assign = Object.assign,
	  REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element"),
	  REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
	  REACT_PROVIDER_TYPE = Symbol.for("react.provider"),
	  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	  REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	  REACT_MEMO_TYPE = Symbol.for("react.memo"),
	  REACT_LAZY_TYPE = Symbol.for("react.lazy");
	var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
	var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
	  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
	  maybeIterable =
	    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
	    maybeIterable["@@iterator"];
	  return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	function getComponentNameFromType(type) {
	  if (null == type) return null;
	  if ("function" === typeof type)
	    return type.$$typeof === REACT_CLIENT_REFERENCE
	      ? null
	      : type.displayName || type.name || null;
	  if ("string" === typeof type) return type;
	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return "Fragment";
	    case REACT_PROFILER_TYPE:
	      return "Profiler";
	    case REACT_STRICT_MODE_TYPE:
	      return "StrictMode";
	    case REACT_SUSPENSE_TYPE:
	      return "Suspense";
	    case REACT_SUSPENSE_LIST_TYPE:
	      return "SuspenseList";
	    case REACT_ACTIVITY_TYPE:
	      return "Activity";
	  }
	  if ("object" === typeof type)
	    switch (type.$$typeof) {
	      case REACT_PORTAL_TYPE:
	        return "Portal";
	      case REACT_CONTEXT_TYPE:
	        return (type.displayName || "Context") + ".Provider";
	      case REACT_CONSUMER_TYPE:
	        return (type._context.displayName || "Context") + ".Consumer";
	      case REACT_FORWARD_REF_TYPE:
	        var innerType = type.render;
	        type = type.displayName;
	        type ||
	          ((type = innerType.displayName || innerType.name || ""),
	          (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
	        return type;
	      case REACT_MEMO_TYPE:
	        return (
	          (innerType = type.displayName || null),
	          null !== innerType
	            ? innerType
	            : getComponentNameFromType(type.type) || "Memo"
	        );
	      case REACT_LAZY_TYPE:
	        innerType = type._payload;
	        type = type._init;
	        try {
	          return getComponentNameFromType(type(innerType));
	        } catch (x) {}
	    }
	  return null;
	}
	var isArrayImpl = Array.isArray,
	  ReactSharedInternals =
	    React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	  ReactDOMSharedInternals =
	    ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	  sharedNotPendingObject = {
	    pending: false,
	    data: null,
	    method: null,
	    action: null
	  },
	  valueStack = [],
	  index = -1;
	function createCursor(defaultValue) {
	  return { current: defaultValue };
	}
	function pop(cursor) {
	  0 > index ||
	    ((cursor.current = valueStack[index]), (valueStack[index] = null), index--);
	}
	function push(cursor, value) {
	  index++;
	  valueStack[index] = cursor.current;
	  cursor.current = value;
	}
	var contextStackCursor = createCursor(null),
	  contextFiberStackCursor = createCursor(null),
	  rootInstanceStackCursor = createCursor(null),
	  hostTransitionProviderCursor = createCursor(null);
	function pushHostContainer(fiber, nextRootInstance) {
	  push(rootInstanceStackCursor, nextRootInstance);
	  push(contextFiberStackCursor, fiber);
	  push(contextStackCursor, null);
	  switch (nextRootInstance.nodeType) {
	    case 9:
	    case 11:
	      fiber = (fiber = nextRootInstance.documentElement)
	        ? (fiber = fiber.namespaceURI)
	          ? getOwnHostContext(fiber)
	          : 0
	        : 0;
	      break;
	    default:
	      if (
	        ((fiber = nextRootInstance.tagName),
	        (nextRootInstance = nextRootInstance.namespaceURI))
	      )
	        (nextRootInstance = getOwnHostContext(nextRootInstance)),
	          (fiber = getChildHostContextProd(nextRootInstance, fiber));
	      else
	        switch (fiber) {
	          case "svg":
	            fiber = 1;
	            break;
	          case "math":
	            fiber = 2;
	            break;
	          default:
	            fiber = 0;
	        }
	  }
	  pop(contextStackCursor);
	  push(contextStackCursor, fiber);
	}
	function popHostContainer() {
	  pop(contextStackCursor);
	  pop(contextFiberStackCursor);
	  pop(rootInstanceStackCursor);
	}
	function pushHostContext(fiber) {
	  null !== fiber.memoizedState && push(hostTransitionProviderCursor, fiber);
	  var context = contextStackCursor.current;
	  var JSCompiler_inline_result = getChildHostContextProd(context, fiber.type);
	  context !== JSCompiler_inline_result &&
	    (push(contextFiberStackCursor, fiber),
	    push(contextStackCursor, JSCompiler_inline_result));
	}
	function popHostContext(fiber) {
	  contextFiberStackCursor.current === fiber &&
	    (pop(contextStackCursor), pop(contextFiberStackCursor));
	  hostTransitionProviderCursor.current === fiber &&
	    (pop(hostTransitionProviderCursor),
	    (HostTransitionContext._currentValue = sharedNotPendingObject));
	}
	var hasOwnProperty = Object.prototype.hasOwnProperty,
	  scheduleCallback$3 = Scheduler.unstable_scheduleCallback,
	  cancelCallback$1 = Scheduler.unstable_cancelCallback,
	  shouldYield = Scheduler.unstable_shouldYield,
	  requestPaint = Scheduler.unstable_requestPaint,
	  now = Scheduler.unstable_now,
	  getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel,
	  ImmediatePriority = Scheduler.unstable_ImmediatePriority,
	  UserBlockingPriority = Scheduler.unstable_UserBlockingPriority,
	  NormalPriority$1 = Scheduler.unstable_NormalPriority,
	  LowPriority = Scheduler.unstable_LowPriority,
	  IdlePriority = Scheduler.unstable_IdlePriority,
	  log$1 = Scheduler.log,
	  unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue,
	  rendererID = null,
	  injectedHook = null;
	function setIsStrictModeForDevtools(newIsStrictMode) {
	  "function" === typeof log$1 && unstable_setDisableYieldValue(newIsStrictMode);
	  if (injectedHook && "function" === typeof injectedHook.setStrictMode)
	    try {
	      injectedHook.setStrictMode(rendererID, newIsStrictMode);
	    } catch (err) {}
	}
	var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback,
	  log = Math.log,
	  LN2 = Math.LN2;
	function clz32Fallback(x) {
	  x >>>= 0;
	  return 0 === x ? 32 : (31 - ((log(x) / LN2) | 0)) | 0;
	}
	var nextTransitionLane = 256,
	  nextRetryLane = 4194304;
	function getHighestPriorityLanes(lanes) {
	  var pendingSyncLanes = lanes & 42;
	  if (0 !== pendingSyncLanes) return pendingSyncLanes;
	  switch (lanes & -lanes) {
	    case 1:
	      return 1;
	    case 2:
	      return 2;
	    case 4:
	      return 4;
	    case 8:
	      return 8;
	    case 16:
	      return 16;
	    case 32:
	      return 32;
	    case 64:
	      return 64;
	    case 128:
	      return 128;
	    case 256:
	    case 512:
	    case 1024:
	    case 2048:
	    case 4096:
	    case 8192:
	    case 16384:
	    case 32768:
	    case 65536:
	    case 131072:
	    case 262144:
	    case 524288:
	    case 1048576:
	    case 2097152:
	      return lanes & 4194048;
	    case 4194304:
	    case 8388608:
	    case 16777216:
	    case 33554432:
	      return lanes & 62914560;
	    case 67108864:
	      return 67108864;
	    case 134217728:
	      return 134217728;
	    case 268435456:
	      return 268435456;
	    case 536870912:
	      return 536870912;
	    case 1073741824:
	      return 0;
	    default:
	      return lanes;
	  }
	}
	function getNextLanes(root, wipLanes, rootHasPendingCommit) {
	  var pendingLanes = root.pendingLanes;
	  if (0 === pendingLanes) return 0;
	  var nextLanes = 0,
	    suspendedLanes = root.suspendedLanes,
	    pingedLanes = root.pingedLanes;
	  root = root.warmLanes;
	  var nonIdlePendingLanes = pendingLanes & 134217727;
	  0 !== nonIdlePendingLanes
	    ? ((pendingLanes = nonIdlePendingLanes & ~suspendedLanes),
	      0 !== pendingLanes
	        ? (nextLanes = getHighestPriorityLanes(pendingLanes))
	        : ((pingedLanes &= nonIdlePendingLanes),
	          0 !== pingedLanes
	            ? (nextLanes = getHighestPriorityLanes(pingedLanes))
	            : rootHasPendingCommit ||
	              ((rootHasPendingCommit = nonIdlePendingLanes & ~root),
	              0 !== rootHasPendingCommit &&
	                (nextLanes = getHighestPriorityLanes(rootHasPendingCommit)))))
	    : ((nonIdlePendingLanes = pendingLanes & ~suspendedLanes),
	      0 !== nonIdlePendingLanes
	        ? (nextLanes = getHighestPriorityLanes(nonIdlePendingLanes))
	        : 0 !== pingedLanes
	          ? (nextLanes = getHighestPriorityLanes(pingedLanes))
	          : rootHasPendingCommit ||
	            ((rootHasPendingCommit = pendingLanes & ~root),
	            0 !== rootHasPendingCommit &&
	              (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))));
	  return 0 === nextLanes
	    ? 0
	    : 0 !== wipLanes &&
	        wipLanes !== nextLanes &&
	        0 === (wipLanes & suspendedLanes) &&
	        ((suspendedLanes = nextLanes & -nextLanes),
	        (rootHasPendingCommit = wipLanes & -wipLanes),
	        suspendedLanes >= rootHasPendingCommit ||
	          (32 === suspendedLanes && 0 !== (rootHasPendingCommit & 4194048)))
	      ? wipLanes
	      : nextLanes;
	}
	function checkIfRootIsPrerendering(root, renderLanes) {
	  return (
	    0 ===
	    (root.pendingLanes &
	      ~(root.suspendedLanes & ~root.pingedLanes) &
	      renderLanes)
	  );
	}
	function computeExpirationTime(lane, currentTime) {
	  switch (lane) {
	    case 1:
	    case 2:
	    case 4:
	    case 8:
	    case 64:
	      return currentTime + 250;
	    case 16:
	    case 32:
	    case 128:
	    case 256:
	    case 512:
	    case 1024:
	    case 2048:
	    case 4096:
	    case 8192:
	    case 16384:
	    case 32768:
	    case 65536:
	    case 131072:
	    case 262144:
	    case 524288:
	    case 1048576:
	    case 2097152:
	      return currentTime + 5e3;
	    case 4194304:
	    case 8388608:
	    case 16777216:
	    case 33554432:
	      return -1;
	    case 67108864:
	    case 134217728:
	    case 268435456:
	    case 536870912:
	    case 1073741824:
	      return -1;
	    default:
	      return -1;
	  }
	}
	function claimNextTransitionLane() {
	  var lane = nextTransitionLane;
	  nextTransitionLane <<= 1;
	  0 === (nextTransitionLane & 4194048) && (nextTransitionLane = 256);
	  return lane;
	}
	function claimNextRetryLane() {
	  var lane = nextRetryLane;
	  nextRetryLane <<= 1;
	  0 === (nextRetryLane & 62914560) && (nextRetryLane = 4194304);
	  return lane;
	}
	function createLaneMap(initial) {
	  for (var laneMap = [], i = 0; 31 > i; i++) laneMap.push(initial);
	  return laneMap;
	}
	function markRootUpdated$1(root, updateLane) {
	  root.pendingLanes |= updateLane;
	  268435456 !== updateLane &&
	    ((root.suspendedLanes = 0), (root.pingedLanes = 0), (root.warmLanes = 0));
	}
	function markRootFinished(
	  root,
	  finishedLanes,
	  remainingLanes,
	  spawnedLane,
	  updatedLanes,
	  suspendedRetryLanes
	) {
	  var previouslyPendingLanes = root.pendingLanes;
	  root.pendingLanes = remainingLanes;
	  root.suspendedLanes = 0;
	  root.pingedLanes = 0;
	  root.warmLanes = 0;
	  root.expiredLanes &= remainingLanes;
	  root.entangledLanes &= remainingLanes;
	  root.errorRecoveryDisabledLanes &= remainingLanes;
	  root.shellSuspendCounter = 0;
	  var entanglements = root.entanglements,
	    expirationTimes = root.expirationTimes,
	    hiddenUpdates = root.hiddenUpdates;
	  for (
	    remainingLanes = previouslyPendingLanes & ~remainingLanes;
	    0 < remainingLanes;

	  ) {
	    var index$5 = 31 - clz32(remainingLanes),
	      lane = 1 << index$5;
	    entanglements[index$5] = 0;
	    expirationTimes[index$5] = -1;
	    var hiddenUpdatesForLane = hiddenUpdates[index$5];
	    if (null !== hiddenUpdatesForLane)
	      for (
	        hiddenUpdates[index$5] = null, index$5 = 0;
	        index$5 < hiddenUpdatesForLane.length;
	        index$5++
	      ) {
	        var update = hiddenUpdatesForLane[index$5];
	        null !== update && (update.lane &= -536870913);
	      }
	    remainingLanes &= ~lane;
	  }
	  0 !== spawnedLane && markSpawnedDeferredLane(root, spawnedLane, 0);
	  0 !== suspendedRetryLanes &&
	    0 === updatedLanes &&
	    0 !== root.tag &&
	    (root.suspendedLanes |=
	      suspendedRetryLanes & ~(previouslyPendingLanes & ~finishedLanes));
	}
	function markSpawnedDeferredLane(root, spawnedLane, entangledLanes) {
	  root.pendingLanes |= spawnedLane;
	  root.suspendedLanes &= ~spawnedLane;
	  var spawnedLaneIndex = 31 - clz32(spawnedLane);
	  root.entangledLanes |= spawnedLane;
	  root.entanglements[spawnedLaneIndex] =
	    root.entanglements[spawnedLaneIndex] |
	    1073741824 |
	    (entangledLanes & 4194090);
	}
	function markRootEntangled(root, entangledLanes) {
	  var rootEntangledLanes = (root.entangledLanes |= entangledLanes);
	  for (root = root.entanglements; rootEntangledLanes; ) {
	    var index$6 = 31 - clz32(rootEntangledLanes),
	      lane = 1 << index$6;
	    (lane & entangledLanes) | (root[index$6] & entangledLanes) &&
	      (root[index$6] |= entangledLanes);
	    rootEntangledLanes &= ~lane;
	  }
	}
	function getBumpedLaneForHydrationByLane(lane) {
	  switch (lane) {
	    case 2:
	      lane = 1;
	      break;
	    case 8:
	      lane = 4;
	      break;
	    case 32:
	      lane = 16;
	      break;
	    case 256:
	    case 512:
	    case 1024:
	    case 2048:
	    case 4096:
	    case 8192:
	    case 16384:
	    case 32768:
	    case 65536:
	    case 131072:
	    case 262144:
	    case 524288:
	    case 1048576:
	    case 2097152:
	    case 4194304:
	    case 8388608:
	    case 16777216:
	    case 33554432:
	      lane = 128;
	      break;
	    case 268435456:
	      lane = 134217728;
	      break;
	    default:
	      lane = 0;
	  }
	  return lane;
	}
	function lanesToEventPriority(lanes) {
	  lanes &= -lanes;
	  return 2 < lanes
	    ? 8 < lanes
	      ? 0 !== (lanes & 134217727)
	        ? 32
	        : 268435456
	      : 8
	    : 2;
	}
	function resolveUpdatePriority() {
	  var updatePriority = ReactDOMSharedInternals.p;
	  if (0 !== updatePriority) return updatePriority;
	  updatePriority = window.event;
	  return void 0 === updatePriority ? 32 : getEventPriority(updatePriority.type);
	}
	function runWithPriority(priority, fn) {
	  var previousPriority = ReactDOMSharedInternals.p;
	  try {
	    return (ReactDOMSharedInternals.p = priority), fn();
	  } finally {
	    ReactDOMSharedInternals.p = previousPriority;
	  }
	}
	var randomKey = Math.random().toString(36).slice(2),
	  internalInstanceKey = "__reactFiber$" + randomKey,
	  internalPropsKey = "__reactProps$" + randomKey,
	  internalContainerInstanceKey = "__reactContainer$" + randomKey,
	  internalEventHandlersKey = "__reactEvents$" + randomKey,
	  internalEventHandlerListenersKey = "__reactListeners$" + randomKey,
	  internalEventHandlesSetKey = "__reactHandles$" + randomKey,
	  internalRootNodeResourcesKey = "__reactResources$" + randomKey,
	  internalHoistableMarker = "__reactMarker$" + randomKey;
	function detachDeletedInstance(node) {
	  delete node[internalInstanceKey];
	  delete node[internalPropsKey];
	  delete node[internalEventHandlersKey];
	  delete node[internalEventHandlerListenersKey];
	  delete node[internalEventHandlesSetKey];
	}
	function getClosestInstanceFromNode(targetNode) {
	  var targetInst = targetNode[internalInstanceKey];
	  if (targetInst) return targetInst;
	  for (var parentNode = targetNode.parentNode; parentNode; ) {
	    if (
	      (targetInst =
	        parentNode[internalContainerInstanceKey] ||
	        parentNode[internalInstanceKey])
	    ) {
	      parentNode = targetInst.alternate;
	      if (
	        null !== targetInst.child ||
	        (null !== parentNode && null !== parentNode.child)
	      )
	        for (
	          targetNode = getParentSuspenseInstance(targetNode);
	          null !== targetNode;

	        ) {
	          if ((parentNode = targetNode[internalInstanceKey])) return parentNode;
	          targetNode = getParentSuspenseInstance(targetNode);
	        }
	      return targetInst;
	    }
	    targetNode = parentNode;
	    parentNode = targetNode.parentNode;
	  }
	  return null;
	}
	function getInstanceFromNode(node) {
	  if (
	    (node = node[internalInstanceKey] || node[internalContainerInstanceKey])
	  ) {
	    var tag = node.tag;
	    if (
	      5 === tag ||
	      6 === tag ||
	      13 === tag ||
	      26 === tag ||
	      27 === tag ||
	      3 === tag
	    )
	      return node;
	  }
	  return null;
	}
	function getNodeFromInstance(inst) {
	  var tag = inst.tag;
	  if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return inst.stateNode;
	  throw Error(formatProdErrorMessage(33));
	}
	function getResourcesFromRoot(root) {
	  var resources = root[internalRootNodeResourcesKey];
	  resources ||
	    (resources = root[internalRootNodeResourcesKey] =
	      { hoistableStyles: new Map(), hoistableScripts: new Map() });
	  return resources;
	}
	function markNodeAsHoistable(node) {
	  node[internalHoistableMarker] = true;
	}
	var allNativeEvents = new Set(),
	  registrationNameDependencies = {};
	function registerTwoPhaseEvent(registrationName, dependencies) {
	  registerDirectEvent(registrationName, dependencies);
	  registerDirectEvent(registrationName + "Capture", dependencies);
	}
	function registerDirectEvent(registrationName, dependencies) {
	  registrationNameDependencies[registrationName] = dependencies;
	  for (
	    registrationName = 0;
	    registrationName < dependencies.length;
	    registrationName++
	  )
	    allNativeEvents.add(dependencies[registrationName]);
	}
	var VALID_ATTRIBUTE_NAME_REGEX = RegExp(
	    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
	  ),
	  illegalAttributeNameCache = {},
	  validatedAttributeNameCache = {};
	function isAttributeNameSafe(attributeName) {
	  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName))
	    return true;
	  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return false;
	  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName))
	    return (validatedAttributeNameCache[attributeName] = true);
	  illegalAttributeNameCache[attributeName] = true;
	  return false;
	}
	function setValueForAttribute(node, name, value) {
	  if (isAttributeNameSafe(name))
	    if (null === value) node.removeAttribute(name);
	    else {
	      switch (typeof value) {
	        case "undefined":
	        case "function":
	        case "symbol":
	          node.removeAttribute(name);
	          return;
	        case "boolean":
	          var prefix$8 = name.toLowerCase().slice(0, 5);
	          if ("data-" !== prefix$8 && "aria-" !== prefix$8) {
	            node.removeAttribute(name);
	            return;
	          }
	      }
	      node.setAttribute(name, "" + value);
	    }
	}
	function setValueForKnownAttribute(node, name, value) {
	  if (null === value) node.removeAttribute(name);
	  else {
	    switch (typeof value) {
	      case "undefined":
	      case "function":
	      case "symbol":
	      case "boolean":
	        node.removeAttribute(name);
	        return;
	    }
	    node.setAttribute(name, "" + value);
	  }
	}
	function setValueForNamespacedAttribute(node, namespace, name, value) {
	  if (null === value) node.removeAttribute(name);
	  else {
	    switch (typeof value) {
	      case "undefined":
	      case "function":
	      case "symbol":
	      case "boolean":
	        node.removeAttribute(name);
	        return;
	    }
	    node.setAttributeNS(namespace, name, "" + value);
	  }
	}
	var prefix, suffix;
	function describeBuiltInComponentFrame(name) {
	  if (void 0 === prefix)
	    try {
	      throw Error();
	    } catch (x) {
	      var match = x.stack.trim().match(/\n( *(at )?)/);
	      prefix = (match && match[1]) || "";
	      suffix =
	        -1 < x.stack.indexOf("\n    at")
	          ? " (<anonymous>)"
	          : -1 < x.stack.indexOf("@")
	            ? "@unknown:0:0"
	            : "";
	    }
	  return "\n" + prefix + name + suffix;
	}
	var reentry = false;
	function describeNativeComponentFrame(fn, construct) {
	  if (!fn || reentry) return "";
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace;
	  Error.prepareStackTrace = void 0;
	  try {
	    var RunInRootFrame = {
	      DetermineComponentFrameRoot: function () {
	        try {
	          if (construct) {
	            var Fake = function () {
	              throw Error();
	            };
	            Object.defineProperty(Fake.prototype, "props", {
	              set: function () {
	                throw Error();
	              }
	            });
	            if ("object" === typeof Reflect && Reflect.construct) {
	              try {
	                Reflect.construct(Fake, []);
	              } catch (x) {
	                var control = x;
	              }
	              Reflect.construct(fn, [], Fake);
	            } else {
	              try {
	                Fake.call();
	              } catch (x$9) {
	                control = x$9;
	              }
	              fn.call(Fake.prototype);
	            }
	          } else {
	            try {
	              throw Error();
	            } catch (x$10) {
	              control = x$10;
	            }
	            (Fake = fn()) &&
	              "function" === typeof Fake.catch &&
	              Fake.catch(function () {});
	          }
	        } catch (sample) {
	          if (sample && control && "string" === typeof sample.stack)
	            return [sample.stack, control.stack];
	        }
	        return [null, null];
	      }
	    };
	    RunInRootFrame.DetermineComponentFrameRoot.displayName =
	      "DetermineComponentFrameRoot";
	    var namePropDescriptor = Object.getOwnPropertyDescriptor(
	      RunInRootFrame.DetermineComponentFrameRoot,
	      "name"
	    );
	    namePropDescriptor &&
	      namePropDescriptor.configurable &&
	      Object.defineProperty(
	        RunInRootFrame.DetermineComponentFrameRoot,
	        "name",
	        { value: "DetermineComponentFrameRoot" }
	      );
	    var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(),
	      sampleStack = _RunInRootFrame$Deter[0],
	      controlStack = _RunInRootFrame$Deter[1];
	    if (sampleStack && controlStack) {
	      var sampleLines = sampleStack.split("\n"),
	        controlLines = controlStack.split("\n");
	      for (
	        namePropDescriptor = RunInRootFrame = 0;
	        RunInRootFrame < sampleLines.length &&
	        !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot");

	      )
	        RunInRootFrame++;
	      for (
	        ;
	        namePropDescriptor < controlLines.length &&
	        !controlLines[namePropDescriptor].includes(
	          "DetermineComponentFrameRoot"
	        );

	      )
	        namePropDescriptor++;
	      if (
	        RunInRootFrame === sampleLines.length ||
	        namePropDescriptor === controlLines.length
	      )
	        for (
	          RunInRootFrame = sampleLines.length - 1,
	            namePropDescriptor = controlLines.length - 1;
	          1 <= RunInRootFrame &&
	          0 <= namePropDescriptor &&
	          sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor];

	        )
	          namePropDescriptor--;
	      for (
	        ;
	        1 <= RunInRootFrame && 0 <= namePropDescriptor;
	        RunInRootFrame--, namePropDescriptor--
	      )
	        if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
	          if (1 !== RunInRootFrame || 1 !== namePropDescriptor) {
	            do
	              if (
	                (RunInRootFrame--,
	                namePropDescriptor--,
	                0 > namePropDescriptor ||
	                  sampleLines[RunInRootFrame] !==
	                    controlLines[namePropDescriptor])
	              ) {
	                var frame =
	                  "\n" +
	                  sampleLines[RunInRootFrame].replace(" at new ", " at ");
	                fn.displayName &&
	                  frame.includes("<anonymous>") &&
	                  (frame = frame.replace("<anonymous>", fn.displayName));
	                return frame;
	              }
	            while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
	          }
	          break;
	        }
	    }
	  } finally {
	    (reentry = false), (Error.prepareStackTrace = previousPrepareStackTrace);
	  }
	  return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "")
	    ? describeBuiltInComponentFrame(previousPrepareStackTrace)
	    : "";
	}
	function describeFiber(fiber) {
	  switch (fiber.tag) {
	    case 26:
	    case 27:
	    case 5:
	      return describeBuiltInComponentFrame(fiber.type);
	    case 16:
	      return describeBuiltInComponentFrame("Lazy");
	    case 13:
	      return describeBuiltInComponentFrame("Suspense");
	    case 19:
	      return describeBuiltInComponentFrame("SuspenseList");
	    case 0:
	    case 15:
	      return describeNativeComponentFrame(fiber.type, false);
	    case 11:
	      return describeNativeComponentFrame(fiber.type.render, false);
	    case 1:
	      return describeNativeComponentFrame(fiber.type, true);
	    case 31:
	      return describeBuiltInComponentFrame("Activity");
	    default:
	      return "";
	  }
	}
	function getStackByFiberInDevAndProd(workInProgress) {
	  try {
	    var info = "";
	    do
	      (info += describeFiber(workInProgress)),
	        (workInProgress = workInProgress.return);
	    while (workInProgress);
	    return info;
	  } catch (x) {
	    return "\nError generating stack: " + x.message + "\n" + x.stack;
	  }
	}
	function getToStringValue(value) {
	  switch (typeof value) {
	    case "bigint":
	    case "boolean":
	    case "number":
	    case "string":
	    case "undefined":
	      return value;
	    case "object":
	      return value;
	    default:
	      return "";
	  }
	}
	function isCheckable(elem) {
	  var type = elem.type;
	  return (
	    (elem = elem.nodeName) &&
	    "input" === elem.toLowerCase() &&
	    ("checkbox" === type || "radio" === type)
	  );
	}
	function trackValueOnNode(node) {
	  var valueField = isCheckable(node) ? "checked" : "value",
	    descriptor = Object.getOwnPropertyDescriptor(
	      node.constructor.prototype,
	      valueField
	    ),
	    currentValue = "" + node[valueField];
	  if (
	    !node.hasOwnProperty(valueField) &&
	    "undefined" !== typeof descriptor &&
	    "function" === typeof descriptor.get &&
	    "function" === typeof descriptor.set
	  ) {
	    var get = descriptor.get,
	      set = descriptor.set;
	    Object.defineProperty(node, valueField, {
	      configurable: true,
	      get: function () {
	        return get.call(this);
	      },
	      set: function (value) {
	        currentValue = "" + value;
	        set.call(this, value);
	      }
	    });
	    Object.defineProperty(node, valueField, {
	      enumerable: descriptor.enumerable
	    });
	    return {
	      getValue: function () {
	        return currentValue;
	      },
	      setValue: function (value) {
	        currentValue = "" + value;
	      },
	      stopTracking: function () {
	        node._valueTracker = null;
	        delete node[valueField];
	      }
	    };
	  }
	}
	function track(node) {
	  node._valueTracker || (node._valueTracker = trackValueOnNode(node));
	}
	function updateValueIfChanged(node) {
	  if (!node) return false;
	  var tracker = node._valueTracker;
	  if (!tracker) return true;
	  var lastValue = tracker.getValue();
	  var value = "";
	  node &&
	    (value = isCheckable(node)
	      ? node.checked
	        ? "true"
	        : "false"
	      : node.value);
	  node = value;
	  return node !== lastValue ? (tracker.setValue(node), true) : false;
	}
	function getActiveElement(doc) {
	  doc = doc || ("undefined" !== typeof document ? document : void 0);
	  if ("undefined" === typeof doc) return null;
	  try {
	    return doc.activeElement || doc.body;
	  } catch (e) {
	    return doc.body;
	  }
	}
	var escapeSelectorAttributeValueInsideDoubleQuotesRegex = /[\n"\\]/g;
	function escapeSelectorAttributeValueInsideDoubleQuotes(value) {
	  return value.replace(
	    escapeSelectorAttributeValueInsideDoubleQuotesRegex,
	    function (ch) {
	      return "\\" + ch.charCodeAt(0).toString(16) + " ";
	    }
	  );
	}
	function updateInput(
	  element,
	  value,
	  defaultValue,
	  lastDefaultValue,
	  checked,
	  defaultChecked,
	  type,
	  name
	) {
	  element.name = "";
	  null != type &&
	  "function" !== typeof type &&
	  "symbol" !== typeof type &&
	  "boolean" !== typeof type
	    ? (element.type = type)
	    : element.removeAttribute("type");
	  if (null != value)
	    if ("number" === type) {
	      if ((0 === value && "" === element.value) || element.value != value)
	        element.value = "" + getToStringValue(value);
	    } else
	      element.value !== "" + getToStringValue(value) &&
	        (element.value = "" + getToStringValue(value));
	  else
	    ("submit" !== type && "reset" !== type) || element.removeAttribute("value");
	  null != value
	    ? setDefaultValue(element, type, getToStringValue(value))
	    : null != defaultValue
	      ? setDefaultValue(element, type, getToStringValue(defaultValue))
	      : null != lastDefaultValue && element.removeAttribute("value");
	  null == checked &&
	    null != defaultChecked &&
	    (element.defaultChecked = !!defaultChecked);
	  null != checked &&
	    (element.checked =
	      checked && "function" !== typeof checked && "symbol" !== typeof checked);
	  null != name &&
	  "function" !== typeof name &&
	  "symbol" !== typeof name &&
	  "boolean" !== typeof name
	    ? (element.name = "" + getToStringValue(name))
	    : element.removeAttribute("name");
	}
	function initInput(
	  element,
	  value,
	  defaultValue,
	  checked,
	  defaultChecked,
	  type,
	  name,
	  isHydrating
	) {
	  null != type &&
	    "function" !== typeof type &&
	    "symbol" !== typeof type &&
	    "boolean" !== typeof type &&
	    (element.type = type);
	  if (null != value || null != defaultValue) {
	    if (
	      !(
	        ("submit" !== type && "reset" !== type) ||
	        (void 0 !== value && null !== value)
	      )
	    )
	      return;
	    defaultValue =
	      null != defaultValue ? "" + getToStringValue(defaultValue) : "";
	    value = null != value ? "" + getToStringValue(value) : defaultValue;
	    isHydrating || value === element.value || (element.value = value);
	    element.defaultValue = value;
	  }
	  checked = null != checked ? checked : defaultChecked;
	  checked =
	    "function" !== typeof checked && "symbol" !== typeof checked && !!checked;
	  element.checked = isHydrating ? element.checked : !!checked;
	  element.defaultChecked = !!checked;
	  null != name &&
	    "function" !== typeof name &&
	    "symbol" !== typeof name &&
	    "boolean" !== typeof name &&
	    (element.name = name);
	}
	function setDefaultValue(node, type, value) {
	  ("number" === type && getActiveElement(node.ownerDocument) === node) ||
	    node.defaultValue === "" + value ||
	    (node.defaultValue = "" + value);
	}
	function updateOptions(node, multiple, propValue, setDefaultSelected) {
	  node = node.options;
	  if (multiple) {
	    multiple = {};
	    for (var i = 0; i < propValue.length; i++)
	      multiple["$" + propValue[i]] = true;
	    for (propValue = 0; propValue < node.length; propValue++)
	      (i = multiple.hasOwnProperty("$" + node[propValue].value)),
	        node[propValue].selected !== i && (node[propValue].selected = i),
	        i && setDefaultSelected && (node[propValue].defaultSelected = true);
	  } else {
	    propValue = "" + getToStringValue(propValue);
	    multiple = null;
	    for (i = 0; i < node.length; i++) {
	      if (node[i].value === propValue) {
	        node[i].selected = true;
	        setDefaultSelected && (node[i].defaultSelected = true);
	        return;
	      }
	      null !== multiple || node[i].disabled || (multiple = node[i]);
	    }
	    null !== multiple && (multiple.selected = true);
	  }
	}
	function updateTextarea(element, value, defaultValue) {
	  if (
	    null != value &&
	    ((value = "" + getToStringValue(value)),
	    value !== element.value && (element.value = value),
	    null == defaultValue)
	  ) {
	    element.defaultValue !== value && (element.defaultValue = value);
	    return;
	  }
	  element.defaultValue =
	    null != defaultValue ? "" + getToStringValue(defaultValue) : "";
	}
	function initTextarea(element, value, defaultValue, children) {
	  if (null == value) {
	    if (null != children) {
	      if (null != defaultValue) throw Error(formatProdErrorMessage(92));
	      if (isArrayImpl(children)) {
	        if (1 < children.length) throw Error(formatProdErrorMessage(93));
	        children = children[0];
	      }
	      defaultValue = children;
	    }
	    null == defaultValue && (defaultValue = "");
	    value = defaultValue;
	  }
	  defaultValue = getToStringValue(value);
	  element.defaultValue = defaultValue;
	  children = element.textContent;
	  children === defaultValue &&
	    "" !== children &&
	    null !== children &&
	    (element.value = children);
	}
	function setTextContent(node, text) {
	  if (text) {
	    var firstChild = node.firstChild;
	    if (
	      firstChild &&
	      firstChild === node.lastChild &&
	      3 === firstChild.nodeType
	    ) {
	      firstChild.nodeValue = text;
	      return;
	    }
	  }
	  node.textContent = text;
	}
	var unitlessNumbers = new Set(
	  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
	    " "
	  )
	);
	function setValueForStyle(style, styleName, value) {
	  var isCustomProperty = 0 === styleName.indexOf("--");
	  null == value || "boolean" === typeof value || "" === value
	    ? isCustomProperty
	      ? style.setProperty(styleName, "")
	      : "float" === styleName
	        ? (style.cssFloat = "")
	        : (style[styleName] = "")
	    : isCustomProperty
	      ? style.setProperty(styleName, value)
	      : "number" !== typeof value ||
	          0 === value ||
	          unitlessNumbers.has(styleName)
	        ? "float" === styleName
	          ? (style.cssFloat = value)
	          : (style[styleName] = ("" + value).trim())
	        : (style[styleName] = value + "px");
	}
	function setValueForStyles(node, styles, prevStyles) {
	  if (null != styles && "object" !== typeof styles)
	    throw Error(formatProdErrorMessage(62));
	  node = node.style;
	  if (null != prevStyles) {
	    for (var styleName in prevStyles)
	      !prevStyles.hasOwnProperty(styleName) ||
	        (null != styles && styles.hasOwnProperty(styleName)) ||
	        (0 === styleName.indexOf("--")
	          ? node.setProperty(styleName, "")
	          : "float" === styleName
	            ? (node.cssFloat = "")
	            : (node[styleName] = ""));
	    for (var styleName$16 in styles)
	      (styleName = styles[styleName$16]),
	        styles.hasOwnProperty(styleName$16) &&
	          prevStyles[styleName$16] !== styleName &&
	          setValueForStyle(node, styleName$16, styleName);
	  } else
	    for (var styleName$17 in styles)
	      styles.hasOwnProperty(styleName$17) &&
	        setValueForStyle(node, styleName$17, styles[styleName$17]);
	}
	function isCustomElement(tagName) {
	  if (-1 === tagName.indexOf("-")) return false;
	  switch (tagName) {
	    case "annotation-xml":
	    case "color-profile":
	    case "font-face":
	    case "font-face-src":
	    case "font-face-uri":
	    case "font-face-format":
	    case "font-face-name":
	    case "missing-glyph":
	      return false;
	    default:
	      return true;
	  }
	}
	var aliases = new Map([
	    ["acceptCharset", "accept-charset"],
	    ["htmlFor", "for"],
	    ["httpEquiv", "http-equiv"],
	    ["crossOrigin", "crossorigin"],
	    ["accentHeight", "accent-height"],
	    ["alignmentBaseline", "alignment-baseline"],
	    ["arabicForm", "arabic-form"],
	    ["baselineShift", "baseline-shift"],
	    ["capHeight", "cap-height"],
	    ["clipPath", "clip-path"],
	    ["clipRule", "clip-rule"],
	    ["colorInterpolation", "color-interpolation"],
	    ["colorInterpolationFilters", "color-interpolation-filters"],
	    ["colorProfile", "color-profile"],
	    ["colorRendering", "color-rendering"],
	    ["dominantBaseline", "dominant-baseline"],
	    ["enableBackground", "enable-background"],
	    ["fillOpacity", "fill-opacity"],
	    ["fillRule", "fill-rule"],
	    ["floodColor", "flood-color"],
	    ["floodOpacity", "flood-opacity"],
	    ["fontFamily", "font-family"],
	    ["fontSize", "font-size"],
	    ["fontSizeAdjust", "font-size-adjust"],
	    ["fontStretch", "font-stretch"],
	    ["fontStyle", "font-style"],
	    ["fontVariant", "font-variant"],
	    ["fontWeight", "font-weight"],
	    ["glyphName", "glyph-name"],
	    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
	    ["glyphOrientationVertical", "glyph-orientation-vertical"],
	    ["horizAdvX", "horiz-adv-x"],
	    ["horizOriginX", "horiz-origin-x"],
	    ["imageRendering", "image-rendering"],
	    ["letterSpacing", "letter-spacing"],
	    ["lightingColor", "lighting-color"],
	    ["markerEnd", "marker-end"],
	    ["markerMid", "marker-mid"],
	    ["markerStart", "marker-start"],
	    ["overlinePosition", "overline-position"],
	    ["overlineThickness", "overline-thickness"],
	    ["paintOrder", "paint-order"],
	    ["panose-1", "panose-1"],
	    ["pointerEvents", "pointer-events"],
	    ["renderingIntent", "rendering-intent"],
	    ["shapeRendering", "shape-rendering"],
	    ["stopColor", "stop-color"],
	    ["stopOpacity", "stop-opacity"],
	    ["strikethroughPosition", "strikethrough-position"],
	    ["strikethroughThickness", "strikethrough-thickness"],
	    ["strokeDasharray", "stroke-dasharray"],
	    ["strokeDashoffset", "stroke-dashoffset"],
	    ["strokeLinecap", "stroke-linecap"],
	    ["strokeLinejoin", "stroke-linejoin"],
	    ["strokeMiterlimit", "stroke-miterlimit"],
	    ["strokeOpacity", "stroke-opacity"],
	    ["strokeWidth", "stroke-width"],
	    ["textAnchor", "text-anchor"],
	    ["textDecoration", "text-decoration"],
	    ["textRendering", "text-rendering"],
	    ["transformOrigin", "transform-origin"],
	    ["underlinePosition", "underline-position"],
	    ["underlineThickness", "underline-thickness"],
	    ["unicodeBidi", "unicode-bidi"],
	    ["unicodeRange", "unicode-range"],
	    ["unitsPerEm", "units-per-em"],
	    ["vAlphabetic", "v-alphabetic"],
	    ["vHanging", "v-hanging"],
	    ["vIdeographic", "v-ideographic"],
	    ["vMathematical", "v-mathematical"],
	    ["vectorEffect", "vector-effect"],
	    ["vertAdvY", "vert-adv-y"],
	    ["vertOriginX", "vert-origin-x"],
	    ["vertOriginY", "vert-origin-y"],
	    ["wordSpacing", "word-spacing"],
	    ["writingMode", "writing-mode"],
	    ["xmlnsXlink", "xmlns:xlink"],
	    ["xHeight", "x-height"]
	  ]),
	  isJavaScriptProtocol =
	    /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function sanitizeURL(url) {
	  return isJavaScriptProtocol.test("" + url)
	    ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
	    : url;
	}
	var currentReplayingEvent = null;
	function getEventTarget(nativeEvent) {
	  nativeEvent = nativeEvent.target || nativeEvent.srcElement || window;
	  nativeEvent.correspondingUseElement &&
	    (nativeEvent = nativeEvent.correspondingUseElement);
	  return 3 === nativeEvent.nodeType ? nativeEvent.parentNode : nativeEvent;
	}
	var restoreTarget = null,
	  restoreQueue = null;
	function restoreStateOfTarget(target) {
	  var internalInstance = getInstanceFromNode(target);
	  if (internalInstance && (target = internalInstance.stateNode)) {
	    var props = target[internalPropsKey] || null;
	    a: switch (((target = internalInstance.stateNode), internalInstance.type)) {
	      case "input":
	        updateInput(
	          target,
	          props.value,
	          props.defaultValue,
	          props.defaultValue,
	          props.checked,
	          props.defaultChecked,
	          props.type,
	          props.name
	        );
	        internalInstance = props.name;
	        if ("radio" === props.type && null != internalInstance) {
	          for (props = target; props.parentNode; ) props = props.parentNode;
	          props = props.querySelectorAll(
	            'input[name="' +
	              escapeSelectorAttributeValueInsideDoubleQuotes(
	                "" + internalInstance
	              ) +
	              '"][type="radio"]'
	          );
	          for (
	            internalInstance = 0;
	            internalInstance < props.length;
	            internalInstance++
	          ) {
	            var otherNode = props[internalInstance];
	            if (otherNode !== target && otherNode.form === target.form) {
	              var otherProps = otherNode[internalPropsKey] || null;
	              if (!otherProps) throw Error(formatProdErrorMessage(90));
	              updateInput(
	                otherNode,
	                otherProps.value,
	                otherProps.defaultValue,
	                otherProps.defaultValue,
	                otherProps.checked,
	                otherProps.defaultChecked,
	                otherProps.type,
	                otherProps.name
	              );
	            }
	          }
	          for (
	            internalInstance = 0;
	            internalInstance < props.length;
	            internalInstance++
	          )
	            (otherNode = props[internalInstance]),
	              otherNode.form === target.form && updateValueIfChanged(otherNode);
	        }
	        break a;
	      case "textarea":
	        updateTextarea(target, props.value, props.defaultValue);
	        break a;
	      case "select":
	        (internalInstance = props.value),
	          null != internalInstance &&
	            updateOptions(target, !!props.multiple, internalInstance, false);
	    }
	  }
	}
	var isInsideEventHandler = false;
	function batchedUpdates$1(fn, a, b) {
	  if (isInsideEventHandler) return fn(a, b);
	  isInsideEventHandler = true;
	  try {
	    var JSCompiler_inline_result = fn(a);
	    return JSCompiler_inline_result;
	  } finally {
	    if (
	      ((isInsideEventHandler = false),
	      null !== restoreTarget || null !== restoreQueue)
	    )
	      if (
	        (flushSyncWork$1(),
	        restoreTarget &&
	          ((a = restoreTarget),
	          (fn = restoreQueue),
	          (restoreQueue = restoreTarget = null),
	          restoreStateOfTarget(a),
	          fn))
	      )
	        for (a = 0; a < fn.length; a++) restoreStateOfTarget(fn[a]);
	  }
	}
	function getListener(inst, registrationName) {
	  var stateNode = inst.stateNode;
	  if (null === stateNode) return null;
	  var props = stateNode[internalPropsKey] || null;
	  if (null === props) return null;
	  stateNode = props[registrationName];
	  a: switch (registrationName) {
	    case "onClick":
	    case "onClickCapture":
	    case "onDoubleClick":
	    case "onDoubleClickCapture":
	    case "onMouseDown":
	    case "onMouseDownCapture":
	    case "onMouseMove":
	    case "onMouseMoveCapture":
	    case "onMouseUp":
	    case "onMouseUpCapture":
	    case "onMouseEnter":
	      (props = !props.disabled) ||
	        ((inst = inst.type),
	        (props = !(
	          "button" === inst ||
	          "input" === inst ||
	          "select" === inst ||
	          "textarea" === inst
	        )));
	      inst = !props;
	      break a;
	    default:
	      inst = false;
	  }
	  if (inst) return null;
	  if (stateNode && "function" !== typeof stateNode)
	    throw Error(
	      formatProdErrorMessage(231, registrationName, typeof stateNode)
	    );
	  return stateNode;
	}
	var canUseDOM = !(
	    "undefined" === typeof window ||
	    "undefined" === typeof window.document ||
	    "undefined" === typeof window.document.createElement
	  ),
	  passiveBrowserEventsSupported = false;
	if (canUseDOM)
	  try {
	    var options = {};
	    Object.defineProperty(options, "passive", {
	      get: function () {
	        passiveBrowserEventsSupported = !0;
	      }
	    });
	    window.addEventListener("test", options, options);
	    window.removeEventListener("test", options, options);
	  } catch (e) {
	    passiveBrowserEventsSupported = false;
	  }
	var root = null,
	  startText = null,
	  fallbackText = null;
	function getData() {
	  if (fallbackText) return fallbackText;
	  var start,
	    startValue = startText,
	    startLength = startValue.length,
	    end,
	    endValue = "value" in root ? root.value : root.textContent,
	    endLength = endValue.length;
	  for (
	    start = 0;
	    start < startLength && startValue[start] === endValue[start];
	    start++
	  );
	  var minEnd = startLength - start;
	  for (
	    end = 1;
	    end <= minEnd &&
	    startValue[startLength - end] === endValue[endLength - end];
	    end++
	  );
	  return (fallbackText = endValue.slice(start, 1 < end ? 1 - end : void 0));
	}
	function getEventCharCode(nativeEvent) {
	  var keyCode = nativeEvent.keyCode;
	  "charCode" in nativeEvent
	    ? ((nativeEvent = nativeEvent.charCode),
	      0 === nativeEvent && 13 === keyCode && (nativeEvent = 13))
	    : (nativeEvent = keyCode);
	  10 === nativeEvent && (nativeEvent = 13);
	  return 32 <= nativeEvent || 13 === nativeEvent ? nativeEvent : 0;
	}
	function functionThatReturnsTrue() {
	  return true;
	}
	function functionThatReturnsFalse() {
	  return false;
	}
	function createSyntheticEvent(Interface) {
	  function SyntheticBaseEvent(
	    reactName,
	    reactEventType,
	    targetInst,
	    nativeEvent,
	    nativeEventTarget
	  ) {
	    this._reactName = reactName;
	    this._targetInst = targetInst;
	    this.type = reactEventType;
	    this.nativeEvent = nativeEvent;
	    this.target = nativeEventTarget;
	    this.currentTarget = null;
	    for (var propName in Interface)
	      Interface.hasOwnProperty(propName) &&
	        ((reactName = Interface[propName]),
	        (this[propName] = reactName
	          ? reactName(nativeEvent)
	          : nativeEvent[propName]));
	    this.isDefaultPrevented = (
	      null != nativeEvent.defaultPrevented
	        ? nativeEvent.defaultPrevented
	        : false === nativeEvent.returnValue
	    )
	      ? functionThatReturnsTrue
	      : functionThatReturnsFalse;
	    this.isPropagationStopped = functionThatReturnsFalse;
	    return this;
	  }
	  assign(SyntheticBaseEvent.prototype, {
	    preventDefault: function () {
	      this.defaultPrevented = true;
	      var event = this.nativeEvent;
	      event &&
	        (event.preventDefault
	          ? event.preventDefault()
	          : "unknown" !== typeof event.returnValue && (event.returnValue = false),
	        (this.isDefaultPrevented = functionThatReturnsTrue));
	    },
	    stopPropagation: function () {
	      var event = this.nativeEvent;
	      event &&
	        (event.stopPropagation
	          ? event.stopPropagation()
	          : "unknown" !== typeof event.cancelBubble &&
	            (event.cancelBubble = true),
	        (this.isPropagationStopped = functionThatReturnsTrue));
	    },
	    persist: function () {},
	    isPersistent: functionThatReturnsTrue
	  });
	  return SyntheticBaseEvent;
	}
	var EventInterface = {
	    eventPhase: 0,
	    bubbles: 0,
	    cancelable: 0,
	    timeStamp: function (event) {
	      return event.timeStamp || Date.now();
	    },
	    defaultPrevented: 0,
	    isTrusted: 0
	  },
	  SyntheticEvent = createSyntheticEvent(EventInterface),
	  UIEventInterface = assign({}, EventInterface, { view: 0, detail: 0 }),
	  SyntheticUIEvent = createSyntheticEvent(UIEventInterface),
	  lastMovementX,
	  lastMovementY,
	  lastMouseEvent,
	  MouseEventInterface = assign({}, UIEventInterface, {
	    screenX: 0,
	    screenY: 0,
	    clientX: 0,
	    clientY: 0,
	    pageX: 0,
	    pageY: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    altKey: 0,
	    metaKey: 0,
	    getModifierState: getEventModifierState,
	    button: 0,
	    buttons: 0,
	    relatedTarget: function (event) {
	      return void 0 === event.relatedTarget
	        ? event.fromElement === event.srcElement
	          ? event.toElement
	          : event.fromElement
	        : event.relatedTarget;
	    },
	    movementX: function (event) {
	      if ("movementX" in event) return event.movementX;
	      event !== lastMouseEvent &&
	        (lastMouseEvent && "mousemove" === event.type
	          ? ((lastMovementX = event.screenX - lastMouseEvent.screenX),
	            (lastMovementY = event.screenY - lastMouseEvent.screenY))
	          : (lastMovementY = lastMovementX = 0),
	        (lastMouseEvent = event));
	      return lastMovementX;
	    },
	    movementY: function (event) {
	      return "movementY" in event ? event.movementY : lastMovementY;
	    }
	  }),
	  SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface),
	  DragEventInterface = assign({}, MouseEventInterface, { dataTransfer: 0 }),
	  SyntheticDragEvent = createSyntheticEvent(DragEventInterface),
	  FocusEventInterface = assign({}, UIEventInterface, { relatedTarget: 0 }),
	  SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface),
	  AnimationEventInterface = assign({}, EventInterface, {
	    animationName: 0,
	    elapsedTime: 0,
	    pseudoElement: 0
	  }),
	  SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface),
	  ClipboardEventInterface = assign({}, EventInterface, {
	    clipboardData: function (event) {
	      return "clipboardData" in event
	        ? event.clipboardData
	        : window.clipboardData;
	    }
	  }),
	  SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface),
	  CompositionEventInterface = assign({}, EventInterface, { data: 0 }),
	  SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface),
	  normalizeKey = {
	    Esc: "Escape",
	    Spacebar: " ",
	    Left: "ArrowLeft",
	    Up: "ArrowUp",
	    Right: "ArrowRight",
	    Down: "ArrowDown",
	    Del: "Delete",
	    Win: "OS",
	    Menu: "ContextMenu",
	    Apps: "ContextMenu",
	    Scroll: "ScrollLock",
	    MozPrintableKey: "Unidentified"
	  },
	  translateToKey = {
	    8: "Backspace",
	    9: "Tab",
	    12: "Clear",
	    13: "Enter",
	    16: "Shift",
	    17: "Control",
	    18: "Alt",
	    19: "Pause",
	    20: "CapsLock",
	    27: "Escape",
	    32: " ",
	    33: "PageUp",
	    34: "PageDown",
	    35: "End",
	    36: "Home",
	    37: "ArrowLeft",
	    38: "ArrowUp",
	    39: "ArrowRight",
	    40: "ArrowDown",
	    45: "Insert",
	    46: "Delete",
	    112: "F1",
	    113: "F2",
	    114: "F3",
	    115: "F4",
	    116: "F5",
	    117: "F6",
	    118: "F7",
	    119: "F8",
	    120: "F9",
	    121: "F10",
	    122: "F11",
	    123: "F12",
	    144: "NumLock",
	    145: "ScrollLock",
	    224: "Meta"
	  },
	  modifierKeyToProp = {
	    Alt: "altKey",
	    Control: "ctrlKey",
	    Meta: "metaKey",
	    Shift: "shiftKey"
	  };
	function modifierStateGetter(keyArg) {
	  var nativeEvent = this.nativeEvent;
	  return nativeEvent.getModifierState
	    ? nativeEvent.getModifierState(keyArg)
	    : (keyArg = modifierKeyToProp[keyArg])
	      ? !!nativeEvent[keyArg]
	      : false;
	}
	function getEventModifierState() {
	  return modifierStateGetter;
	}
	var KeyboardEventInterface = assign({}, UIEventInterface, {
	    key: function (nativeEvent) {
	      if (nativeEvent.key) {
	        var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
	        if ("Unidentified" !== key) return key;
	      }
	      return "keypress" === nativeEvent.type
	        ? ((nativeEvent = getEventCharCode(nativeEvent)),
	          13 === nativeEvent ? "Enter" : String.fromCharCode(nativeEvent))
	        : "keydown" === nativeEvent.type || "keyup" === nativeEvent.type
	          ? translateToKey[nativeEvent.keyCode] || "Unidentified"
	          : "";
	    },
	    code: 0,
	    location: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    altKey: 0,
	    metaKey: 0,
	    repeat: 0,
	    locale: 0,
	    getModifierState: getEventModifierState,
	    charCode: function (event) {
	      return "keypress" === event.type ? getEventCharCode(event) : 0;
	    },
	    keyCode: function (event) {
	      return "keydown" === event.type || "keyup" === event.type
	        ? event.keyCode
	        : 0;
	    },
	    which: function (event) {
	      return "keypress" === event.type
	        ? getEventCharCode(event)
	        : "keydown" === event.type || "keyup" === event.type
	          ? event.keyCode
	          : 0;
	    }
	  }),
	  SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface),
	  PointerEventInterface = assign({}, MouseEventInterface, {
	    pointerId: 0,
	    width: 0,
	    height: 0,
	    pressure: 0,
	    tangentialPressure: 0,
	    tiltX: 0,
	    tiltY: 0,
	    twist: 0,
	    pointerType: 0,
	    isPrimary: 0
	  }),
	  SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface),
	  TouchEventInterface = assign({}, UIEventInterface, {
	    touches: 0,
	    targetTouches: 0,
	    changedTouches: 0,
	    altKey: 0,
	    metaKey: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    getModifierState: getEventModifierState
	  }),
	  SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface),
	  TransitionEventInterface = assign({}, EventInterface, {
	    propertyName: 0,
	    elapsedTime: 0,
	    pseudoElement: 0
	  }),
	  SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface),
	  WheelEventInterface = assign({}, MouseEventInterface, {
	    deltaX: function (event) {
	      return "deltaX" in event
	        ? event.deltaX
	        : "wheelDeltaX" in event
	          ? -event.wheelDeltaX
	          : 0;
	    },
	    deltaY: function (event) {
	      return "deltaY" in event
	        ? event.deltaY
	        : "wheelDeltaY" in event
	          ? -event.wheelDeltaY
	          : "wheelDelta" in event
	            ? -event.wheelDelta
	            : 0;
	    },
	    deltaZ: 0,
	    deltaMode: 0
	  }),
	  SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface),
	  ToggleEventInterface = assign({}, EventInterface, {
	    newState: 0,
	    oldState: 0
	  }),
	  SyntheticToggleEvent = createSyntheticEvent(ToggleEventInterface),
	  END_KEYCODES = [9, 13, 27, 32],
	  canUseCompositionEvent = canUseDOM && "CompositionEvent" in window,
	  documentMode = null;
	canUseDOM &&
	  "documentMode" in document &&
	  (documentMode = document.documentMode);
	var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode,
	  useFallbackCompositionData =
	    canUseDOM &&
	    (!canUseCompositionEvent ||
	      (documentMode && 8 < documentMode && 11 >= documentMode)),
	  SPACEBAR_CHAR = String.fromCharCode(32),
	  hasSpaceKeypress = false;
	function isFallbackCompositionEnd(domEventName, nativeEvent) {
	  switch (domEventName) {
	    case "keyup":
	      return -1 !== END_KEYCODES.indexOf(nativeEvent.keyCode);
	    case "keydown":
	      return 229 !== nativeEvent.keyCode;
	    case "keypress":
	    case "mousedown":
	    case "focusout":
	      return true;
	    default:
	      return false;
	  }
	}
	function getDataFromCustomEvent(nativeEvent) {
	  nativeEvent = nativeEvent.detail;
	  return "object" === typeof nativeEvent && "data" in nativeEvent
	    ? nativeEvent.data
	    : null;
	}
	var isComposing = false;
	function getNativeBeforeInputChars(domEventName, nativeEvent) {
	  switch (domEventName) {
	    case "compositionend":
	      return getDataFromCustomEvent(nativeEvent);
	    case "keypress":
	      if (32 !== nativeEvent.which) return null;
	      hasSpaceKeypress = true;
	      return SPACEBAR_CHAR;
	    case "textInput":
	      return (
	        (domEventName = nativeEvent.data),
	        domEventName === SPACEBAR_CHAR && hasSpaceKeypress ? null : domEventName
	      );
	    default:
	      return null;
	  }
	}
	function getFallbackBeforeInputChars(domEventName, nativeEvent) {
	  if (isComposing)
	    return "compositionend" === domEventName ||
	      (!canUseCompositionEvent &&
	        isFallbackCompositionEnd(domEventName, nativeEvent))
	      ? ((domEventName = getData()),
	        (fallbackText = startText = root = null),
	        (isComposing = false),
	        domEventName)
	      : null;
	  switch (domEventName) {
	    case "paste":
	      return null;
	    case "keypress":
	      if (
	        !(nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) ||
	        (nativeEvent.ctrlKey && nativeEvent.altKey)
	      ) {
	        if (nativeEvent.char && 1 < nativeEvent.char.length)
	          return nativeEvent.char;
	        if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
	      }
	      return null;
	    case "compositionend":
	      return useFallbackCompositionData && "ko" !== nativeEvent.locale
	        ? null
	        : nativeEvent.data;
	    default:
	      return null;
	  }
	}
	var supportedInputTypes = {
	  color: true,
	  date: true,
	  datetime: true,
	  "datetime-local": true,
	  email: true,
	  month: true,
	  number: true,
	  password: true,
	  range: true,
	  search: true,
	  tel: true,
	  text: true,
	  time: true,
	  url: true,
	  week: true
	};
	function isTextInputElement(elem) {
	  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	  return "input" === nodeName
	    ? !!supportedInputTypes[elem.type]
	    : "textarea" === nodeName
	      ? true
	      : false;
	}
	function createAndAccumulateChangeEvent(
	  dispatchQueue,
	  inst,
	  nativeEvent,
	  target
	) {
	  restoreTarget
	    ? restoreQueue
	      ? restoreQueue.push(target)
	      : (restoreQueue = [target])
	    : (restoreTarget = target);
	  inst = accumulateTwoPhaseListeners(inst, "onChange");
	  0 < inst.length &&
	    ((nativeEvent = new SyntheticEvent(
	      "onChange",
	      "change",
	      null,
	      nativeEvent,
	      target
	    )),
	    dispatchQueue.push({ event: nativeEvent, listeners: inst }));
	}
	var activeElement$1 = null,
	  activeElementInst$1 = null;
	function runEventInBatch(dispatchQueue) {
	  processDispatchQueue(dispatchQueue, 0);
	}
	function getInstIfValueChanged(targetInst) {
	  var targetNode = getNodeFromInstance(targetInst);
	  if (updateValueIfChanged(targetNode)) return targetInst;
	}
	function getTargetInstForChangeEvent(domEventName, targetInst) {
	  if ("change" === domEventName) return targetInst;
	}
	var isInputEventSupported = false;
	if (canUseDOM) {
	  var JSCompiler_inline_result$jscomp$282;
	  if (canUseDOM) {
	    var isSupported$jscomp$inline_417 = "oninput" in document;
	    if (!isSupported$jscomp$inline_417) {
	      var element$jscomp$inline_418 = document.createElement("div");
	      element$jscomp$inline_418.setAttribute("oninput", "return;");
	      isSupported$jscomp$inline_417 =
	        "function" === typeof element$jscomp$inline_418.oninput;
	    }
	    JSCompiler_inline_result$jscomp$282 = isSupported$jscomp$inline_417;
	  } else JSCompiler_inline_result$jscomp$282 = false;
	  isInputEventSupported =
	    JSCompiler_inline_result$jscomp$282 &&
	    (!document.documentMode || 9 < document.documentMode);
	}
	function stopWatchingForValueChange() {
	  activeElement$1 &&
	    (activeElement$1.detachEvent("onpropertychange", handlePropertyChange),
	    (activeElementInst$1 = activeElement$1 = null));
	}
	function handlePropertyChange(nativeEvent) {
	  if (
	    "value" === nativeEvent.propertyName &&
	    getInstIfValueChanged(activeElementInst$1)
	  ) {
	    var dispatchQueue = [];
	    createAndAccumulateChangeEvent(
	      dispatchQueue,
	      activeElementInst$1,
	      nativeEvent,
	      getEventTarget(nativeEvent)
	    );
	    batchedUpdates$1(runEventInBatch, dispatchQueue);
	  }
	}
	function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
	  "focusin" === domEventName
	    ? (stopWatchingForValueChange(),
	      (activeElement$1 = target),
	      (activeElementInst$1 = targetInst),
	      activeElement$1.attachEvent("onpropertychange", handlePropertyChange))
	    : "focusout" === domEventName && stopWatchingForValueChange();
	}
	function getTargetInstForInputEventPolyfill(domEventName) {
	  if (
	    "selectionchange" === domEventName ||
	    "keyup" === domEventName ||
	    "keydown" === domEventName
	  )
	    return getInstIfValueChanged(activeElementInst$1);
	}
	function getTargetInstForClickEvent(domEventName, targetInst) {
	  if ("click" === domEventName) return getInstIfValueChanged(targetInst);
	}
	function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
	  if ("input" === domEventName || "change" === domEventName)
	    return getInstIfValueChanged(targetInst);
	}
	function is(x, y) {
	  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is;
	function shallowEqual(objA, objB) {
	  if (objectIs(objA, objB)) return true;
	  if (
	    "object" !== typeof objA ||
	    null === objA ||
	    "object" !== typeof objB ||
	    null === objB
	  )
	    return false;
	  var keysA = Object.keys(objA),
	    keysB = Object.keys(objB);
	  if (keysA.length !== keysB.length) return false;
	  for (keysB = 0; keysB < keysA.length; keysB++) {
	    var currentKey = keysA[keysB];
	    if (
	      !hasOwnProperty.call(objB, currentKey) ||
	      !objectIs(objA[currentKey], objB[currentKey])
	    )
	      return false;
	  }
	  return true;
	}
	function getLeafNode(node) {
	  for (; node && node.firstChild; ) node = node.firstChild;
	  return node;
	}
	function getNodeForCharacterOffset(root, offset) {
	  var node = getLeafNode(root);
	  root = 0;
	  for (var nodeEnd; node; ) {
	    if (3 === node.nodeType) {
	      nodeEnd = root + node.textContent.length;
	      if (root <= offset && nodeEnd >= offset)
	        return { node: node, offset: offset - root };
	      root = nodeEnd;
	    }
	    a: {
	      for (; node; ) {
	        if (node.nextSibling) {
	          node = node.nextSibling;
	          break a;
	        }
	        node = node.parentNode;
	      }
	      node = void 0;
	    }
	    node = getLeafNode(node);
	  }
	}
	function containsNode(outerNode, innerNode) {
	  return outerNode && innerNode
	    ? outerNode === innerNode
	      ? true
	      : outerNode && 3 === outerNode.nodeType
	        ? false
	        : innerNode && 3 === innerNode.nodeType
	          ? containsNode(outerNode, innerNode.parentNode)
	          : "contains" in outerNode
	            ? outerNode.contains(innerNode)
	            : outerNode.compareDocumentPosition
	              ? !!(outerNode.compareDocumentPosition(innerNode) & 16)
	              : false
	    : false;
	}
	function getActiveElementDeep(containerInfo) {
	  containerInfo =
	    null != containerInfo &&
	    null != containerInfo.ownerDocument &&
	    null != containerInfo.ownerDocument.defaultView
	      ? containerInfo.ownerDocument.defaultView
	      : window;
	  for (
	    var element = getActiveElement(containerInfo.document);
	    element instanceof containerInfo.HTMLIFrameElement;

	  ) {
	    try {
	      var JSCompiler_inline_result =
	        "string" === typeof element.contentWindow.location.href;
	    } catch (err) {
	      JSCompiler_inline_result = false;
	    }
	    if (JSCompiler_inline_result) containerInfo = element.contentWindow;
	    else break;
	    element = getActiveElement(containerInfo.document);
	  }
	  return element;
	}
	function hasSelectionCapabilities(elem) {
	  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	  return (
	    nodeName &&
	    (("input" === nodeName &&
	      ("text" === elem.type ||
	        "search" === elem.type ||
	        "tel" === elem.type ||
	        "url" === elem.type ||
	        "password" === elem.type)) ||
	      "textarea" === nodeName ||
	      "true" === elem.contentEditable)
	  );
	}
	var skipSelectionChangeEvent =
	    canUseDOM && "documentMode" in document && 11 >= document.documentMode,
	  activeElement = null,
	  activeElementInst = null,
	  lastSelection = null,
	  mouseDown = false;
	function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
	  var doc =
	    nativeEventTarget.window === nativeEventTarget
	      ? nativeEventTarget.document
	      : 9 === nativeEventTarget.nodeType
	        ? nativeEventTarget
	        : nativeEventTarget.ownerDocument;
	  mouseDown ||
	    null == activeElement ||
	    activeElement !== getActiveElement(doc) ||
	    ((doc = activeElement),
	    "selectionStart" in doc && hasSelectionCapabilities(doc)
	      ? (doc = { start: doc.selectionStart, end: doc.selectionEnd })
	      : ((doc = (
	          (doc.ownerDocument && doc.ownerDocument.defaultView) ||
	          window
	        ).getSelection()),
	        (doc = {
	          anchorNode: doc.anchorNode,
	          anchorOffset: doc.anchorOffset,
	          focusNode: doc.focusNode,
	          focusOffset: doc.focusOffset
	        })),
	    (lastSelection && shallowEqual(lastSelection, doc)) ||
	      ((lastSelection = doc),
	      (doc = accumulateTwoPhaseListeners(activeElementInst, "onSelect")),
	      0 < doc.length &&
	        ((nativeEvent = new SyntheticEvent(
	          "onSelect",
	          "select",
	          null,
	          nativeEvent,
	          nativeEventTarget
	        )),
	        dispatchQueue.push({ event: nativeEvent, listeners: doc }),
	        (nativeEvent.target = activeElement))));
	}
	function makePrefixMap(styleProp, eventName) {
	  var prefixes = {};
	  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
	  prefixes["Webkit" + styleProp] = "webkit" + eventName;
	  prefixes["Moz" + styleProp] = "moz" + eventName;
	  return prefixes;
	}
	var vendorPrefixes = {
	    animationend: makePrefixMap("Animation", "AnimationEnd"),
	    animationiteration: makePrefixMap("Animation", "AnimationIteration"),
	    animationstart: makePrefixMap("Animation", "AnimationStart"),
	    transitionrun: makePrefixMap("Transition", "TransitionRun"),
	    transitionstart: makePrefixMap("Transition", "TransitionStart"),
	    transitioncancel: makePrefixMap("Transition", "TransitionCancel"),
	    transitionend: makePrefixMap("Transition", "TransitionEnd")
	  },
	  prefixedEventNames = {},
	  style = {};
	canUseDOM &&
	  ((style = document.createElement("div").style),
	  "AnimationEvent" in window ||
	    (delete vendorPrefixes.animationend.animation,
	    delete vendorPrefixes.animationiteration.animation,
	    delete vendorPrefixes.animationstart.animation),
	  "TransitionEvent" in window ||
	    delete vendorPrefixes.transitionend.transition);
	function getVendorPrefixedEventName(eventName) {
	  if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
	  if (!vendorPrefixes[eventName]) return eventName;
	  var prefixMap = vendorPrefixes[eventName],
	    styleProp;
	  for (styleProp in prefixMap)
	    if (prefixMap.hasOwnProperty(styleProp) && styleProp in style)
	      return (prefixedEventNames[eventName] = prefixMap[styleProp]);
	  return eventName;
	}
	var ANIMATION_END = getVendorPrefixedEventName("animationend"),
	  ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration"),
	  ANIMATION_START = getVendorPrefixedEventName("animationstart"),
	  TRANSITION_RUN = getVendorPrefixedEventName("transitionrun"),
	  TRANSITION_START = getVendorPrefixedEventName("transitionstart"),
	  TRANSITION_CANCEL = getVendorPrefixedEventName("transitioncancel"),
	  TRANSITION_END = getVendorPrefixedEventName("transitionend"),
	  topLevelEventsToReactNames = new Map(),
	  simpleEventPluginEvents =
	    "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
	      " "
	    );
	simpleEventPluginEvents.push("scrollEnd");
	function registerSimpleEvent(domEventName, reactName) {
	  topLevelEventsToReactNames.set(domEventName, reactName);
	  registerTwoPhaseEvent(reactName, [domEventName]);
	}
	var CapturedStacks = new WeakMap();
	function createCapturedValueAtFiber(value, source) {
	  if ("object" === typeof value && null !== value) {
	    var existing = CapturedStacks.get(value);
	    if (void 0 !== existing) return existing;
	    source = {
	      value: value,
	      source: source,
	      stack: getStackByFiberInDevAndProd(source)
	    };
	    CapturedStacks.set(value, source);
	    return source;
	  }
	  return {
	    value: value,
	    source: source,
	    stack: getStackByFiberInDevAndProd(source)
	  };
	}
	var concurrentQueues = [],
	  concurrentQueuesIndex = 0,
	  concurrentlyUpdatedLanes = 0;
	function finishQueueingConcurrentUpdates() {
	  for (
	    var endIndex = concurrentQueuesIndex,
	      i = (concurrentlyUpdatedLanes = concurrentQueuesIndex = 0);
	    i < endIndex;

	  ) {
	    var fiber = concurrentQueues[i];
	    concurrentQueues[i++] = null;
	    var queue = concurrentQueues[i];
	    concurrentQueues[i++] = null;
	    var update = concurrentQueues[i];
	    concurrentQueues[i++] = null;
	    var lane = concurrentQueues[i];
	    concurrentQueues[i++] = null;
	    if (null !== queue && null !== update) {
	      var pending = queue.pending;
	      null === pending
	        ? (update.next = update)
	        : ((update.next = pending.next), (pending.next = update));
	      queue.pending = update;
	    }
	    0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update, lane);
	  }
	}
	function enqueueUpdate$1(fiber, queue, update, lane) {
	  concurrentQueues[concurrentQueuesIndex++] = fiber;
	  concurrentQueues[concurrentQueuesIndex++] = queue;
	  concurrentQueues[concurrentQueuesIndex++] = update;
	  concurrentQueues[concurrentQueuesIndex++] = lane;
	  concurrentlyUpdatedLanes |= lane;
	  fiber.lanes |= lane;
	  fiber = fiber.alternate;
	  null !== fiber && (fiber.lanes |= lane);
	}
	function enqueueConcurrentHookUpdate(fiber, queue, update, lane) {
	  enqueueUpdate$1(fiber, queue, update, lane);
	  return getRootForUpdatedFiber(fiber);
	}
	function enqueueConcurrentRenderForLane(fiber, lane) {
	  enqueueUpdate$1(fiber, null, null, lane);
	  return getRootForUpdatedFiber(fiber);
	}
	function markUpdateLaneFromFiberToRoot(sourceFiber, update, lane) {
	  sourceFiber.lanes |= lane;
	  var alternate = sourceFiber.alternate;
	  null !== alternate && (alternate.lanes |= lane);
	  for (var isHidden = false, parent = sourceFiber.return; null !== parent; )
	    (parent.childLanes |= lane),
	      (alternate = parent.alternate),
	      null !== alternate && (alternate.childLanes |= lane),
	      22 === parent.tag &&
	        ((sourceFiber = parent.stateNode),
	        null === sourceFiber || sourceFiber._visibility & 1 || (isHidden = true)),
	      (sourceFiber = parent),
	      (parent = parent.return);
	  return 3 === sourceFiber.tag
	    ? ((parent = sourceFiber.stateNode),
	      isHidden &&
	        null !== update &&
	        ((isHidden = 31 - clz32(lane)),
	        (sourceFiber = parent.hiddenUpdates),
	        (alternate = sourceFiber[isHidden]),
	        null === alternate
	          ? (sourceFiber[isHidden] = [update])
	          : alternate.push(update),
	        (update.lane = lane | 536870912)),
	      parent)
	    : null;
	}
	function getRootForUpdatedFiber(sourceFiber) {
	  if (50 < nestedUpdateCount)
	    throw (
	      ((nestedUpdateCount = 0),
	      (rootWithNestedUpdates = null),
	      Error(formatProdErrorMessage(185)))
	    );
	  for (var parent = sourceFiber.return; null !== parent; )
	    (sourceFiber = parent), (parent = sourceFiber.return);
	  return 3 === sourceFiber.tag ? sourceFiber.stateNode : null;
	}
	var emptyContextObject = {};
	function FiberNode(tag, pendingProps, key, mode) {
	  this.tag = tag;
	  this.key = key;
	  this.sibling =
	    this.child =
	    this.return =
	    this.stateNode =
	    this.type =
	    this.elementType =
	      null;
	  this.index = 0;
	  this.refCleanup = this.ref = null;
	  this.pendingProps = pendingProps;
	  this.dependencies =
	    this.memoizedState =
	    this.updateQueue =
	    this.memoizedProps =
	      null;
	  this.mode = mode;
	  this.subtreeFlags = this.flags = 0;
	  this.deletions = null;
	  this.childLanes = this.lanes = 0;
	  this.alternate = null;
	}
	function createFiberImplClass(tag, pendingProps, key, mode) {
	  return new FiberNode(tag, pendingProps, key, mode);
	}
	function shouldConstruct(Component) {
	  Component = Component.prototype;
	  return !(!Component || !Component.isReactComponent);
	}
	function createWorkInProgress(current, pendingProps) {
	  var workInProgress = current.alternate;
	  null === workInProgress
	    ? ((workInProgress = createFiberImplClass(
	        current.tag,
	        pendingProps,
	        current.key,
	        current.mode
	      )),
	      (workInProgress.elementType = current.elementType),
	      (workInProgress.type = current.type),
	      (workInProgress.stateNode = current.stateNode),
	      (workInProgress.alternate = current),
	      (current.alternate = workInProgress))
	    : ((workInProgress.pendingProps = pendingProps),
	      (workInProgress.type = current.type),
	      (workInProgress.flags = 0),
	      (workInProgress.subtreeFlags = 0),
	      (workInProgress.deletions = null));
	  workInProgress.flags = current.flags & 65011712;
	  workInProgress.childLanes = current.childLanes;
	  workInProgress.lanes = current.lanes;
	  workInProgress.child = current.child;
	  workInProgress.memoizedProps = current.memoizedProps;
	  workInProgress.memoizedState = current.memoizedState;
	  workInProgress.updateQueue = current.updateQueue;
	  pendingProps = current.dependencies;
	  workInProgress.dependencies =
	    null === pendingProps
	      ? null
	      : { lanes: pendingProps.lanes, firstContext: pendingProps.firstContext };
	  workInProgress.sibling = current.sibling;
	  workInProgress.index = current.index;
	  workInProgress.ref = current.ref;
	  workInProgress.refCleanup = current.refCleanup;
	  return workInProgress;
	}
	function resetWorkInProgress(workInProgress, renderLanes) {
	  workInProgress.flags &= 65011714;
	  var current = workInProgress.alternate;
	  null === current
	    ? ((workInProgress.childLanes = 0),
	      (workInProgress.lanes = renderLanes),
	      (workInProgress.child = null),
	      (workInProgress.subtreeFlags = 0),
	      (workInProgress.memoizedProps = null),
	      (workInProgress.memoizedState = null),
	      (workInProgress.updateQueue = null),
	      (workInProgress.dependencies = null),
	      (workInProgress.stateNode = null))
	    : ((workInProgress.childLanes = current.childLanes),
	      (workInProgress.lanes = current.lanes),
	      (workInProgress.child = current.child),
	      (workInProgress.subtreeFlags = 0),
	      (workInProgress.deletions = null),
	      (workInProgress.memoizedProps = current.memoizedProps),
	      (workInProgress.memoizedState = current.memoizedState),
	      (workInProgress.updateQueue = current.updateQueue),
	      (workInProgress.type = current.type),
	      (renderLanes = current.dependencies),
	      (workInProgress.dependencies =
	        null === renderLanes
	          ? null
	          : {
	              lanes: renderLanes.lanes,
	              firstContext: renderLanes.firstContext
	            }));
	  return workInProgress;
	}
	function createFiberFromTypeAndProps(
	  type,
	  key,
	  pendingProps,
	  owner,
	  mode,
	  lanes
	) {
	  var fiberTag = 0;
	  owner = type;
	  if ("function" === typeof type) shouldConstruct(type) && (fiberTag = 1);
	  else if ("string" === typeof type)
	    fiberTag = isHostHoistableType(
	      type,
	      pendingProps,
	      contextStackCursor.current
	    )
	      ? 26
	      : "html" === type || "head" === type || "body" === type
	        ? 27
	        : 5;
	  else
	    a: switch (type) {
	      case REACT_ACTIVITY_TYPE:
	        return (
	          (type = createFiberImplClass(31, pendingProps, key, mode)),
	          (type.elementType = REACT_ACTIVITY_TYPE),
	          (type.lanes = lanes),
	          type
	        );
	      case REACT_FRAGMENT_TYPE:
	        return createFiberFromFragment(pendingProps.children, mode, lanes, key);
	      case REACT_STRICT_MODE_TYPE:
	        fiberTag = 8;
	        mode |= 24;
	        break;
	      case REACT_PROFILER_TYPE:
	        return (
	          (type = createFiberImplClass(12, pendingProps, key, mode | 2)),
	          (type.elementType = REACT_PROFILER_TYPE),
	          (type.lanes = lanes),
	          type
	        );
	      case REACT_SUSPENSE_TYPE:
	        return (
	          (type = createFiberImplClass(13, pendingProps, key, mode)),
	          (type.elementType = REACT_SUSPENSE_TYPE),
	          (type.lanes = lanes),
	          type
	        );
	      case REACT_SUSPENSE_LIST_TYPE:
	        return (
	          (type = createFiberImplClass(19, pendingProps, key, mode)),
	          (type.elementType = REACT_SUSPENSE_LIST_TYPE),
	          (type.lanes = lanes),
	          type
	        );
	      default:
	        if ("object" === typeof type && null !== type)
	          switch (type.$$typeof) {
	            case REACT_PROVIDER_TYPE:
	            case REACT_CONTEXT_TYPE:
	              fiberTag = 10;
	              break a;
	            case REACT_CONSUMER_TYPE:
	              fiberTag = 9;
	              break a;
	            case REACT_FORWARD_REF_TYPE:
	              fiberTag = 11;
	              break a;
	            case REACT_MEMO_TYPE:
	              fiberTag = 14;
	              break a;
	            case REACT_LAZY_TYPE:
	              fiberTag = 16;
	              owner = null;
	              break a;
	          }
	        fiberTag = 29;
	        pendingProps = Error(
	          formatProdErrorMessage(130, null === type ? "null" : typeof type, "")
	        );
	        owner = null;
	    }
	  key = createFiberImplClass(fiberTag, pendingProps, key, mode);
	  key.elementType = type;
	  key.type = owner;
	  key.lanes = lanes;
	  return key;
	}
	function createFiberFromFragment(elements, mode, lanes, key) {
	  elements = createFiberImplClass(7, elements, key, mode);
	  elements.lanes = lanes;
	  return elements;
	}
	function createFiberFromText(content, mode, lanes) {
	  content = createFiberImplClass(6, content, null, mode);
	  content.lanes = lanes;
	  return content;
	}
	function createFiberFromPortal(portal, mode, lanes) {
	  mode = createFiberImplClass(
	    4,
	    null !== portal.children ? portal.children : [],
	    portal.key,
	    mode
	  );
	  mode.lanes = lanes;
	  mode.stateNode = {
	    containerInfo: portal.containerInfo,
	    pendingChildren: null,
	    implementation: portal.implementation
	  };
	  return mode;
	}
	var forkStack = [],
	  forkStackIndex = 0,
	  treeForkProvider = null,
	  treeForkCount = 0,
	  idStack = [],
	  idStackIndex = 0,
	  treeContextProvider = null,
	  treeContextId = 1,
	  treeContextOverflow = "";
	function pushTreeFork(workInProgress, totalChildren) {
	  forkStack[forkStackIndex++] = treeForkCount;
	  forkStack[forkStackIndex++] = treeForkProvider;
	  treeForkProvider = workInProgress;
	  treeForkCount = totalChildren;
	}
	function pushTreeId(workInProgress, totalChildren, index) {
	  idStack[idStackIndex++] = treeContextId;
	  idStack[idStackIndex++] = treeContextOverflow;
	  idStack[idStackIndex++] = treeContextProvider;
	  treeContextProvider = workInProgress;
	  var baseIdWithLeadingBit = treeContextId;
	  workInProgress = treeContextOverflow;
	  var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
	  baseIdWithLeadingBit &= ~(1 << baseLength);
	  index += 1;
	  var length = 32 - clz32(totalChildren) + baseLength;
	  if (30 < length) {
	    var numberOfOverflowBits = baseLength - (baseLength % 5);
	    length = (
	      baseIdWithLeadingBit &
	      ((1 << numberOfOverflowBits) - 1)
	    ).toString(32);
	    baseIdWithLeadingBit >>= numberOfOverflowBits;
	    baseLength -= numberOfOverflowBits;
	    treeContextId =
	      (1 << (32 - clz32(totalChildren) + baseLength)) |
	      (index << baseLength) |
	      baseIdWithLeadingBit;
	    treeContextOverflow = length + workInProgress;
	  } else
	    (treeContextId =
	      (1 << length) | (index << baseLength) | baseIdWithLeadingBit),
	      (treeContextOverflow = workInProgress);
	}
	function pushMaterializedTreeId(workInProgress) {
	  null !== workInProgress.return &&
	    (pushTreeFork(workInProgress, 1), pushTreeId(workInProgress, 1, 0));
	}
	function popTreeContext(workInProgress) {
	  for (; workInProgress === treeForkProvider; )
	    (treeForkProvider = forkStack[--forkStackIndex]),
	      (forkStack[forkStackIndex] = null),
	      (treeForkCount = forkStack[--forkStackIndex]),
	      (forkStack[forkStackIndex] = null);
	  for (; workInProgress === treeContextProvider; )
	    (treeContextProvider = idStack[--idStackIndex]),
	      (idStack[idStackIndex] = null),
	      (treeContextOverflow = idStack[--idStackIndex]),
	      (idStack[idStackIndex] = null),
	      (treeContextId = idStack[--idStackIndex]),
	      (idStack[idStackIndex] = null);
	}
	var hydrationParentFiber = null,
	  nextHydratableInstance = null,
	  isHydrating = false,
	  hydrationErrors = null,
	  rootOrSingletonContext = false,
	  HydrationMismatchException = Error(formatProdErrorMessage(519));
	function throwOnHydrationMismatch(fiber) {
	  var error = Error(formatProdErrorMessage(418, ""));
	  queueHydrationError(createCapturedValueAtFiber(error, fiber));
	  throw HydrationMismatchException;
	}
	function prepareToHydrateHostInstance(fiber) {
	  var instance = fiber.stateNode,
	    type = fiber.type,
	    props = fiber.memoizedProps;
	  instance[internalInstanceKey] = fiber;
	  instance[internalPropsKey] = props;
	  switch (type) {
	    case "dialog":
	      listenToNonDelegatedEvent("cancel", instance);
	      listenToNonDelegatedEvent("close", instance);
	      break;
	    case "iframe":
	    case "object":
	    case "embed":
	      listenToNonDelegatedEvent("load", instance);
	      break;
	    case "video":
	    case "audio":
	      for (type = 0; type < mediaEventTypes.length; type++)
	        listenToNonDelegatedEvent(mediaEventTypes[type], instance);
	      break;
	    case "source":
	      listenToNonDelegatedEvent("error", instance);
	      break;
	    case "img":
	    case "image":
	    case "link":
	      listenToNonDelegatedEvent("error", instance);
	      listenToNonDelegatedEvent("load", instance);
	      break;
	    case "details":
	      listenToNonDelegatedEvent("toggle", instance);
	      break;
	    case "input":
	      listenToNonDelegatedEvent("invalid", instance);
	      initInput(
	        instance,
	        props.value,
	        props.defaultValue,
	        props.checked,
	        props.defaultChecked,
	        props.type,
	        props.name,
	        true
	      );
	      track(instance);
	      break;
	    case "select":
	      listenToNonDelegatedEvent("invalid", instance);
	      break;
	    case "textarea":
	      listenToNonDelegatedEvent("invalid", instance),
	        initTextarea(instance, props.value, props.defaultValue, props.children),
	        track(instance);
	  }
	  type = props.children;
	  ("string" !== typeof type &&
	    "number" !== typeof type &&
	    "bigint" !== typeof type) ||
	  instance.textContent === "" + type ||
	  true === props.suppressHydrationWarning ||
	  checkForUnmatchedText(instance.textContent, type)
	    ? (null != props.popover &&
	        (listenToNonDelegatedEvent("beforetoggle", instance),
	        listenToNonDelegatedEvent("toggle", instance)),
	      null != props.onScroll && listenToNonDelegatedEvent("scroll", instance),
	      null != props.onScrollEnd &&
	        listenToNonDelegatedEvent("scrollend", instance),
	      null != props.onClick && (instance.onclick = noop$1),
	      (instance = true))
	    : (instance = false);
	  instance || throwOnHydrationMismatch(fiber);
	}
	function popToNextHostParent(fiber) {
	  for (hydrationParentFiber = fiber.return; hydrationParentFiber; )
	    switch (hydrationParentFiber.tag) {
	      case 5:
	      case 13:
	        rootOrSingletonContext = false;
	        return;
	      case 27:
	      case 3:
	        rootOrSingletonContext = true;
	        return;
	      default:
	        hydrationParentFiber = hydrationParentFiber.return;
	    }
	}
	function popHydrationState(fiber) {
	  if (fiber !== hydrationParentFiber) return false;
	  if (!isHydrating) return popToNextHostParent(fiber), (isHydrating = true), false;
	  var tag = fiber.tag,
	    JSCompiler_temp;
	  if ((JSCompiler_temp = 3 !== tag && 27 !== tag)) {
	    if ((JSCompiler_temp = 5 === tag))
	      (JSCompiler_temp = fiber.type),
	        (JSCompiler_temp =
	          !("form" !== JSCompiler_temp && "button" !== JSCompiler_temp) ||
	          shouldSetTextContent(fiber.type, fiber.memoizedProps));
	    JSCompiler_temp = !JSCompiler_temp;
	  }
	  JSCompiler_temp && nextHydratableInstance && throwOnHydrationMismatch(fiber);
	  popToNextHostParent(fiber);
	  if (13 === tag) {
	    fiber = fiber.memoizedState;
	    fiber = null !== fiber ? fiber.dehydrated : null;
	    if (!fiber) throw Error(formatProdErrorMessage(317));
	    a: {
	      fiber = fiber.nextSibling;
	      for (tag = 0; fiber; ) {
	        if (8 === fiber.nodeType)
	          if (((JSCompiler_temp = fiber.data), "/$" === JSCompiler_temp)) {
	            if (0 === tag) {
	              nextHydratableInstance = getNextHydratable(fiber.nextSibling);
	              break a;
	            }
	            tag--;
	          } else
	            ("$" !== JSCompiler_temp &&
	              "$!" !== JSCompiler_temp &&
	              "$?" !== JSCompiler_temp) ||
	              tag++;
	        fiber = fiber.nextSibling;
	      }
	      nextHydratableInstance = null;
	    }
	  } else
	    27 === tag
	      ? ((tag = nextHydratableInstance),
	        isSingletonScope(fiber.type)
	          ? ((fiber = previousHydratableOnEnteringScopedSingleton),
	            (previousHydratableOnEnteringScopedSingleton = null),
	            (nextHydratableInstance = fiber))
	          : (nextHydratableInstance = tag))
	      : (nextHydratableInstance = hydrationParentFiber
	          ? getNextHydratable(fiber.stateNode.nextSibling)
	          : null);
	  return true;
	}
	function resetHydrationState() {
	  nextHydratableInstance = hydrationParentFiber = null;
	  isHydrating = false;
	}
	function upgradeHydrationErrorsToRecoverable() {
	  var queuedErrors = hydrationErrors;
	  null !== queuedErrors &&
	    (null === workInProgressRootRecoverableErrors
	      ? (workInProgressRootRecoverableErrors = queuedErrors)
	      : workInProgressRootRecoverableErrors.push.apply(
	          workInProgressRootRecoverableErrors,
	          queuedErrors
	        ),
	    (hydrationErrors = null));
	  return queuedErrors;
	}
	function queueHydrationError(error) {
	  null === hydrationErrors
	    ? (hydrationErrors = [error])
	    : hydrationErrors.push(error);
	}
	var valueCursor = createCursor(null),
	  currentlyRenderingFiber$1 = null,
	  lastContextDependency = null;
	function pushProvider(providerFiber, context, nextValue) {
	  push(valueCursor, context._currentValue);
	  context._currentValue = nextValue;
	}
	function popProvider(context) {
	  context._currentValue = valueCursor.current;
	  pop(valueCursor);
	}
	function scheduleContextWorkOnParentPath(parent, renderLanes, propagationRoot) {
	  for (; null !== parent; ) {
	    var alternate = parent.alternate;
	    (parent.childLanes & renderLanes) !== renderLanes
	      ? ((parent.childLanes |= renderLanes),
	        null !== alternate && (alternate.childLanes |= renderLanes))
	      : null !== alternate &&
	        (alternate.childLanes & renderLanes) !== renderLanes &&
	        (alternate.childLanes |= renderLanes);
	    if (parent === propagationRoot) break;
	    parent = parent.return;
	  }
	}
	function propagateContextChanges(
	  workInProgress,
	  contexts,
	  renderLanes,
	  forcePropagateEntireTree
	) {
	  var fiber = workInProgress.child;
	  null !== fiber && (fiber.return = workInProgress);
	  for (; null !== fiber; ) {
	    var list = fiber.dependencies;
	    if (null !== list) {
	      var nextFiber = fiber.child;
	      list = list.firstContext;
	      a: for (; null !== list; ) {
	        var dependency = list;
	        list = fiber;
	        for (var i = 0; i < contexts.length; i++)
	          if (dependency.context === contexts[i]) {
	            list.lanes |= renderLanes;
	            dependency = list.alternate;
	            null !== dependency && (dependency.lanes |= renderLanes);
	            scheduleContextWorkOnParentPath(
	              list.return,
	              renderLanes,
	              workInProgress
	            );
	            forcePropagateEntireTree || (nextFiber = null);
	            break a;
	          }
	        list = dependency.next;
	      }
	    } else if (18 === fiber.tag) {
	      nextFiber = fiber.return;
	      if (null === nextFiber) throw Error(formatProdErrorMessage(341));
	      nextFiber.lanes |= renderLanes;
	      list = nextFiber.alternate;
	      null !== list && (list.lanes |= renderLanes);
	      scheduleContextWorkOnParentPath(nextFiber, renderLanes, workInProgress);
	      nextFiber = null;
	    } else nextFiber = fiber.child;
	    if (null !== nextFiber) nextFiber.return = fiber;
	    else
	      for (nextFiber = fiber; null !== nextFiber; ) {
	        if (nextFiber === workInProgress) {
	          nextFiber = null;
	          break;
	        }
	        fiber = nextFiber.sibling;
	        if (null !== fiber) {
	          fiber.return = nextFiber.return;
	          nextFiber = fiber;
	          break;
	        }
	        nextFiber = nextFiber.return;
	      }
	    fiber = nextFiber;
	  }
	}
	function propagateParentContextChanges(
	  current,
	  workInProgress,
	  renderLanes,
	  forcePropagateEntireTree
	) {
	  current = null;
	  for (
	    var parent = workInProgress, isInsidePropagationBailout = false;
	    null !== parent;

	  ) {
	    if (!isInsidePropagationBailout)
	      if (0 !== (parent.flags & 524288)) isInsidePropagationBailout = true;
	      else if (0 !== (parent.flags & 262144)) break;
	    if (10 === parent.tag) {
	      var currentParent = parent.alternate;
	      if (null === currentParent) throw Error(formatProdErrorMessage(387));
	      currentParent = currentParent.memoizedProps;
	      if (null !== currentParent) {
	        var context = parent.type;
	        objectIs(parent.pendingProps.value, currentParent.value) ||
	          (null !== current ? current.push(context) : (current = [context]));
	      }
	    } else if (parent === hostTransitionProviderCursor.current) {
	      currentParent = parent.alternate;
	      if (null === currentParent) throw Error(formatProdErrorMessage(387));
	      currentParent.memoizedState.memoizedState !==
	        parent.memoizedState.memoizedState &&
	        (null !== current
	          ? current.push(HostTransitionContext)
	          : (current = [HostTransitionContext]));
	    }
	    parent = parent.return;
	  }
	  null !== current &&
	    propagateContextChanges(
	      workInProgress,
	      current,
	      renderLanes,
	      forcePropagateEntireTree
	    );
	  workInProgress.flags |= 262144;
	}
	function checkIfContextChanged(currentDependencies) {
	  for (
	    currentDependencies = currentDependencies.firstContext;
	    null !== currentDependencies;

	  ) {
	    if (
	      !objectIs(
	        currentDependencies.context._currentValue,
	        currentDependencies.memoizedValue
	      )
	    )
	      return true;
	    currentDependencies = currentDependencies.next;
	  }
	  return false;
	}
	function prepareToReadContext(workInProgress) {
	  currentlyRenderingFiber$1 = workInProgress;
	  lastContextDependency = null;
	  workInProgress = workInProgress.dependencies;
	  null !== workInProgress && (workInProgress.firstContext = null);
	}
	function readContext(context) {
	  return readContextForConsumer(currentlyRenderingFiber$1, context);
	}
	function readContextDuringReconciliation(consumer, context) {
	  null === currentlyRenderingFiber$1 && prepareToReadContext(consumer);
	  return readContextForConsumer(consumer, context);
	}
	function readContextForConsumer(consumer, context) {
	  var value = context._currentValue;
	  context = { context: context, memoizedValue: value, next: null };
	  if (null === lastContextDependency) {
	    if (null === consumer) throw Error(formatProdErrorMessage(308));
	    lastContextDependency = context;
	    consumer.dependencies = { lanes: 0, firstContext: context };
	    consumer.flags |= 524288;
	  } else lastContextDependency = lastContextDependency.next = context;
	  return value;
	}
	var AbortControllerLocal =
	    "undefined" !== typeof AbortController
	      ? AbortController
	      : function () {
	          var listeners = [],
	            signal = (this.signal = {
	              aborted: false,
	              addEventListener: function (type, listener) {
	                listeners.push(listener);
	              }
	            });
	          this.abort = function () {
	            signal.aborted = true;
	            listeners.forEach(function (listener) {
	              return listener();
	            });
	          };
	        },
	  scheduleCallback$2 = Scheduler.unstable_scheduleCallback,
	  NormalPriority = Scheduler.unstable_NormalPriority,
	  CacheContext = {
	    $$typeof: REACT_CONTEXT_TYPE,
	    Consumer: null,
	    Provider: null,
	    _currentValue: null,
	    _currentValue2: null,
	    _threadCount: 0
	  };
	function createCache() {
	  return {
	    controller: new AbortControllerLocal(),
	    data: new Map(),
	    refCount: 0
	  };
	}
	function releaseCache(cache) {
	  cache.refCount--;
	  0 === cache.refCount &&
	    scheduleCallback$2(NormalPriority, function () {
	      cache.controller.abort();
	    });
	}
	var currentEntangledListeners = null,
	  currentEntangledPendingCount = 0,
	  currentEntangledLane = 0,
	  currentEntangledActionThenable = null;
	function entangleAsyncAction(transition, thenable) {
	  if (null === currentEntangledListeners) {
	    var entangledListeners = (currentEntangledListeners = []);
	    currentEntangledPendingCount = 0;
	    currentEntangledLane = requestTransitionLane();
	    currentEntangledActionThenable = {
	      status: "pending",
	      value: void 0,
	      then: function (resolve) {
	        entangledListeners.push(resolve);
	      }
	    };
	  }
	  currentEntangledPendingCount++;
	  thenable.then(pingEngtangledActionScope, pingEngtangledActionScope);
	  return thenable;
	}
	function pingEngtangledActionScope() {
	  if (
	    0 === --currentEntangledPendingCount &&
	    null !== currentEntangledListeners
	  ) {
	    null !== currentEntangledActionThenable &&
	      (currentEntangledActionThenable.status = "fulfilled");
	    var listeners = currentEntangledListeners;
	    currentEntangledListeners = null;
	    currentEntangledLane = 0;
	    currentEntangledActionThenable = null;
	    for (var i = 0; i < listeners.length; i++) (0, listeners[i])();
	  }
	}
	function chainThenableValue(thenable, result) {
	  var listeners = [],
	    thenableWithOverride = {
	      status: "pending",
	      value: null,
	      reason: null,
	      then: function (resolve) {
	        listeners.push(resolve);
	      }
	    };
	  thenable.then(
	    function () {
	      thenableWithOverride.status = "fulfilled";
	      thenableWithOverride.value = result;
	      for (var i = 0; i < listeners.length; i++) (0, listeners[i])(result);
	    },
	    function (error) {
	      thenableWithOverride.status = "rejected";
	      thenableWithOverride.reason = error;
	      for (error = 0; error < listeners.length; error++)
	        (0, listeners[error])(void 0);
	    }
	  );
	  return thenableWithOverride;
	}
	var prevOnStartTransitionFinish = ReactSharedInternals.S;
	ReactSharedInternals.S = function (transition, returnValue) {
	  "object" === typeof returnValue &&
	    null !== returnValue &&
	    "function" === typeof returnValue.then &&
	    entangleAsyncAction(transition, returnValue);
	  null !== prevOnStartTransitionFinish &&
	    prevOnStartTransitionFinish(transition, returnValue);
	};
	var resumedCache = createCursor(null);
	function peekCacheFromPool() {
	  var cacheResumedFromPreviousRender = resumedCache.current;
	  return null !== cacheResumedFromPreviousRender
	    ? cacheResumedFromPreviousRender
	    : workInProgressRoot.pooledCache;
	}
	function pushTransition(offscreenWorkInProgress, prevCachePool) {
	  null === prevCachePool
	    ? push(resumedCache, resumedCache.current)
	    : push(resumedCache, prevCachePool.pool);
	}
	function getSuspendedCache() {
	  var cacheFromPool = peekCacheFromPool();
	  return null === cacheFromPool
	    ? null
	    : { parent: CacheContext._currentValue, pool: cacheFromPool };
	}
	var SuspenseException = Error(formatProdErrorMessage(460)),
	  SuspenseyCommitException = Error(formatProdErrorMessage(474)),
	  SuspenseActionException = Error(formatProdErrorMessage(542)),
	  noopSuspenseyCommitThenable = { then: function () {} };
	function isThenableResolved(thenable) {
	  thenable = thenable.status;
	  return "fulfilled" === thenable || "rejected" === thenable;
	}
	function noop$3() {}
	function trackUsedThenable(thenableState, thenable, index) {
	  index = thenableState[index];
	  void 0 === index
	    ? thenableState.push(thenable)
	    : index !== thenable && (thenable.then(noop$3, noop$3), (thenable = index));
	  switch (thenable.status) {
	    case "fulfilled":
	      return thenable.value;
	    case "rejected":
	      throw (
	        ((thenableState = thenable.reason),
	        checkIfUseWrappedInAsyncCatch(thenableState),
	        thenableState)
	      );
	    default:
	      if ("string" === typeof thenable.status) thenable.then(noop$3, noop$3);
	      else {
	        thenableState = workInProgressRoot;
	        if (null !== thenableState && 100 < thenableState.shellSuspendCounter)
	          throw Error(formatProdErrorMessage(482));
	        thenableState = thenable;
	        thenableState.status = "pending";
	        thenableState.then(
	          function (fulfilledValue) {
	            if ("pending" === thenable.status) {
	              var fulfilledThenable = thenable;
	              fulfilledThenable.status = "fulfilled";
	              fulfilledThenable.value = fulfilledValue;
	            }
	          },
	          function (error) {
	            if ("pending" === thenable.status) {
	              var rejectedThenable = thenable;
	              rejectedThenable.status = "rejected";
	              rejectedThenable.reason = error;
	            }
	          }
	        );
	      }
	      switch (thenable.status) {
	        case "fulfilled":
	          return thenable.value;
	        case "rejected":
	          throw (
	            ((thenableState = thenable.reason),
	            checkIfUseWrappedInAsyncCatch(thenableState),
	            thenableState)
	          );
	      }
	      suspendedThenable = thenable;
	      throw SuspenseException;
	  }
	}
	var suspendedThenable = null;
	function getSuspendedThenable() {
	  if (null === suspendedThenable) throw Error(formatProdErrorMessage(459));
	  var thenable = suspendedThenable;
	  suspendedThenable = null;
	  return thenable;
	}
	function checkIfUseWrappedInAsyncCatch(rejectedReason) {
	  if (
	    rejectedReason === SuspenseException ||
	    rejectedReason === SuspenseActionException
	  )
	    throw Error(formatProdErrorMessage(483));
	}
	var hasForceUpdate = false;
	function initializeUpdateQueue(fiber) {
	  fiber.updateQueue = {
	    baseState: fiber.memoizedState,
	    firstBaseUpdate: null,
	    lastBaseUpdate: null,
	    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
	    callbacks: null
	  };
	}
	function cloneUpdateQueue(current, workInProgress) {
	  current = current.updateQueue;
	  workInProgress.updateQueue === current &&
	    (workInProgress.updateQueue = {
	      baseState: current.baseState,
	      firstBaseUpdate: current.firstBaseUpdate,
	      lastBaseUpdate: current.lastBaseUpdate,
	      shared: current.shared,
	      callbacks: null
	    });
	}
	function createUpdate(lane) {
	  return { lane: lane, tag: 0, payload: null, callback: null, next: null };
	}
	function enqueueUpdate(fiber, update, lane) {
	  var updateQueue = fiber.updateQueue;
	  if (null === updateQueue) return null;
	  updateQueue = updateQueue.shared;
	  if (0 !== (executionContext & 2)) {
	    var pending = updateQueue.pending;
	    null === pending
	      ? (update.next = update)
	      : ((update.next = pending.next), (pending.next = update));
	    updateQueue.pending = update;
	    update = getRootForUpdatedFiber(fiber);
	    markUpdateLaneFromFiberToRoot(fiber, null, lane);
	    return update;
	  }
	  enqueueUpdate$1(fiber, updateQueue, update, lane);
	  return getRootForUpdatedFiber(fiber);
	}
	function entangleTransitions(root, fiber, lane) {
	  fiber = fiber.updateQueue;
	  if (null !== fiber && ((fiber = fiber.shared), 0 !== (lane & 4194048))) {
	    var queueLanes = fiber.lanes;
	    queueLanes &= root.pendingLanes;
	    lane |= queueLanes;
	    fiber.lanes = lane;
	    markRootEntangled(root, lane);
	  }
	}
	function enqueueCapturedUpdate(workInProgress, capturedUpdate) {
	  var queue = workInProgress.updateQueue,
	    current = workInProgress.alternate;
	  if (
	    null !== current &&
	    ((current = current.updateQueue), queue === current)
	  ) {
	    var newFirst = null,
	      newLast = null;
	    queue = queue.firstBaseUpdate;
	    if (null !== queue) {
	      do {
	        var clone = {
	          lane: queue.lane,
	          tag: queue.tag,
	          payload: queue.payload,
	          callback: null,
	          next: null
	        };
	        null === newLast
	          ? (newFirst = newLast = clone)
	          : (newLast = newLast.next = clone);
	        queue = queue.next;
	      } while (null !== queue);
	      null === newLast
	        ? (newFirst = newLast = capturedUpdate)
	        : (newLast = newLast.next = capturedUpdate);
	    } else newFirst = newLast = capturedUpdate;
	    queue = {
	      baseState: current.baseState,
	      firstBaseUpdate: newFirst,
	      lastBaseUpdate: newLast,
	      shared: current.shared,
	      callbacks: current.callbacks
	    };
	    workInProgress.updateQueue = queue;
	    return;
	  }
	  workInProgress = queue.lastBaseUpdate;
	  null === workInProgress
	    ? (queue.firstBaseUpdate = capturedUpdate)
	    : (workInProgress.next = capturedUpdate);
	  queue.lastBaseUpdate = capturedUpdate;
	}
	var didReadFromEntangledAsyncAction = false;
	function suspendIfUpdateReadFromEntangledAsyncAction() {
	  if (didReadFromEntangledAsyncAction) {
	    var entangledActionThenable = currentEntangledActionThenable;
	    if (null !== entangledActionThenable) throw entangledActionThenable;
	  }
	}
	function processUpdateQueue(
	  workInProgress$jscomp$0,
	  props,
	  instance$jscomp$0,
	  renderLanes
	) {
	  didReadFromEntangledAsyncAction = false;
	  var queue = workInProgress$jscomp$0.updateQueue;
	  hasForceUpdate = false;
	  var firstBaseUpdate = queue.firstBaseUpdate,
	    lastBaseUpdate = queue.lastBaseUpdate,
	    pendingQueue = queue.shared.pending;
	  if (null !== pendingQueue) {
	    queue.shared.pending = null;
	    var lastPendingUpdate = pendingQueue,
	      firstPendingUpdate = lastPendingUpdate.next;
	    lastPendingUpdate.next = null;
	    null === lastBaseUpdate
	      ? (firstBaseUpdate = firstPendingUpdate)
	      : (lastBaseUpdate.next = firstPendingUpdate);
	    lastBaseUpdate = lastPendingUpdate;
	    var current = workInProgress$jscomp$0.alternate;
	    null !== current &&
	      ((current = current.updateQueue),
	      (pendingQueue = current.lastBaseUpdate),
	      pendingQueue !== lastBaseUpdate &&
	        (null === pendingQueue
	          ? (current.firstBaseUpdate = firstPendingUpdate)
	          : (pendingQueue.next = firstPendingUpdate),
	        (current.lastBaseUpdate = lastPendingUpdate)));
	  }
	  if (null !== firstBaseUpdate) {
	    var newState = queue.baseState;
	    lastBaseUpdate = 0;
	    current = firstPendingUpdate = lastPendingUpdate = null;
	    pendingQueue = firstBaseUpdate;
	    do {
	      var updateLane = pendingQueue.lane & -536870913,
	        isHiddenUpdate = updateLane !== pendingQueue.lane;
	      if (
	        isHiddenUpdate
	          ? (workInProgressRootRenderLanes & updateLane) === updateLane
	          : (renderLanes & updateLane) === updateLane
	      ) {
	        0 !== updateLane &&
	          updateLane === currentEntangledLane &&
	          (didReadFromEntangledAsyncAction = true);
	        null !== current &&
	          (current = current.next =
	            {
	              lane: 0,
	              tag: pendingQueue.tag,
	              payload: pendingQueue.payload,
	              callback: null,
	              next: null
	            });
	        a: {
	          var workInProgress = workInProgress$jscomp$0,
	            update = pendingQueue;
	          updateLane = props;
	          var instance = instance$jscomp$0;
	          switch (update.tag) {
	            case 1:
	              workInProgress = update.payload;
	              if ("function" === typeof workInProgress) {
	                newState = workInProgress.call(instance, newState, updateLane);
	                break a;
	              }
	              newState = workInProgress;
	              break a;
	            case 3:
	              workInProgress.flags = (workInProgress.flags & -65537) | 128;
	            case 0:
	              workInProgress = update.payload;
	              updateLane =
	                "function" === typeof workInProgress
	                  ? workInProgress.call(instance, newState, updateLane)
	                  : workInProgress;
	              if (null === updateLane || void 0 === updateLane) break a;
	              newState = assign({}, newState, updateLane);
	              break a;
	            case 2:
	              hasForceUpdate = true;
	          }
	        }
	        updateLane = pendingQueue.callback;
	        null !== updateLane &&
	          ((workInProgress$jscomp$0.flags |= 64),
	          isHiddenUpdate && (workInProgress$jscomp$0.flags |= 8192),
	          (isHiddenUpdate = queue.callbacks),
	          null === isHiddenUpdate
	            ? (queue.callbacks = [updateLane])
	            : isHiddenUpdate.push(updateLane));
	      } else
	        (isHiddenUpdate = {
	          lane: updateLane,
	          tag: pendingQueue.tag,
	          payload: pendingQueue.payload,
	          callback: pendingQueue.callback,
	          next: null
	        }),
	          null === current
	            ? ((firstPendingUpdate = current = isHiddenUpdate),
	              (lastPendingUpdate = newState))
	            : (current = current.next = isHiddenUpdate),
	          (lastBaseUpdate |= updateLane);
	      pendingQueue = pendingQueue.next;
	      if (null === pendingQueue)
	        if (((pendingQueue = queue.shared.pending), null === pendingQueue))
	          break;
	        else
	          (isHiddenUpdate = pendingQueue),
	            (pendingQueue = isHiddenUpdate.next),
	            (isHiddenUpdate.next = null),
	            (queue.lastBaseUpdate = isHiddenUpdate),
	            (queue.shared.pending = null);
	    } while (1);
	    null === current && (lastPendingUpdate = newState);
	    queue.baseState = lastPendingUpdate;
	    queue.firstBaseUpdate = firstPendingUpdate;
	    queue.lastBaseUpdate = current;
	    null === firstBaseUpdate && (queue.shared.lanes = 0);
	    workInProgressRootSkippedLanes |= lastBaseUpdate;
	    workInProgress$jscomp$0.lanes = lastBaseUpdate;
	    workInProgress$jscomp$0.memoizedState = newState;
	  }
	}
	function callCallback(callback, context) {
	  if ("function" !== typeof callback)
	    throw Error(formatProdErrorMessage(191, callback));
	  callback.call(context);
	}
	function commitCallbacks(updateQueue, context) {
	  var callbacks = updateQueue.callbacks;
	  if (null !== callbacks)
	    for (
	      updateQueue.callbacks = null, updateQueue = 0;
	      updateQueue < callbacks.length;
	      updateQueue++
	    )
	      callCallback(callbacks[updateQueue], context);
	}
	var currentTreeHiddenStackCursor = createCursor(null),
	  prevEntangledRenderLanesCursor = createCursor(0);
	function pushHiddenContext(fiber, context) {
	  fiber = entangledRenderLanes;
	  push(prevEntangledRenderLanesCursor, fiber);
	  push(currentTreeHiddenStackCursor, context);
	  entangledRenderLanes = fiber | context.baseLanes;
	}
	function reuseHiddenContextOnStack() {
	  push(prevEntangledRenderLanesCursor, entangledRenderLanes);
	  push(currentTreeHiddenStackCursor, currentTreeHiddenStackCursor.current);
	}
	function popHiddenContext() {
	  entangledRenderLanes = prevEntangledRenderLanesCursor.current;
	  pop(currentTreeHiddenStackCursor);
	  pop(prevEntangledRenderLanesCursor);
	}
	var renderLanes = 0,
	  currentlyRenderingFiber = null,
	  currentHook = null,
	  workInProgressHook = null,
	  didScheduleRenderPhaseUpdate = false,
	  didScheduleRenderPhaseUpdateDuringThisPass = false,
	  shouldDoubleInvokeUserFnsInHooksDEV = false,
	  localIdCounter = 0,
	  thenableIndexCounter$1 = 0,
	  thenableState$1 = null,
	  globalClientIdCounter = 0;
	function throwInvalidHookError() {
	  throw Error(formatProdErrorMessage(321));
	}
	function areHookInputsEqual(nextDeps, prevDeps) {
	  if (null === prevDeps) return false;
	  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++)
	    if (!objectIs(nextDeps[i], prevDeps[i])) return false;
	  return true;
	}
	function renderWithHooks(
	  current,
	  workInProgress,
	  Component,
	  props,
	  secondArg,
	  nextRenderLanes
	) {
	  renderLanes = nextRenderLanes;
	  currentlyRenderingFiber = workInProgress;
	  workInProgress.memoizedState = null;
	  workInProgress.updateQueue = null;
	  workInProgress.lanes = 0;
	  ReactSharedInternals.H =
	    null === current || null === current.memoizedState
	      ? HooksDispatcherOnMount
	      : HooksDispatcherOnUpdate;
	  shouldDoubleInvokeUserFnsInHooksDEV = false;
	  nextRenderLanes = Component(props, secondArg);
	  shouldDoubleInvokeUserFnsInHooksDEV = false;
	  didScheduleRenderPhaseUpdateDuringThisPass &&
	    (nextRenderLanes = renderWithHooksAgain(
	      workInProgress,
	      Component,
	      props,
	      secondArg
	    ));
	  finishRenderingHooks(current);
	  return nextRenderLanes;
	}
	function finishRenderingHooks(current) {
	  ReactSharedInternals.H = ContextOnlyDispatcher;
	  var didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
	  renderLanes = 0;
	  workInProgressHook = currentHook = currentlyRenderingFiber = null;
	  didScheduleRenderPhaseUpdate = false;
	  thenableIndexCounter$1 = 0;
	  thenableState$1 = null;
	  if (didRenderTooFewHooks) throw Error(formatProdErrorMessage(300));
	  null === current ||
	    didReceiveUpdate ||
	    ((current = current.dependencies),
	    null !== current &&
	      checkIfContextChanged(current) &&
	      (didReceiveUpdate = true));
	}
	function renderWithHooksAgain(workInProgress, Component, props, secondArg) {
	  currentlyRenderingFiber = workInProgress;
	  var numberOfReRenders = 0;
	  do {
	    didScheduleRenderPhaseUpdateDuringThisPass && (thenableState$1 = null);
	    thenableIndexCounter$1 = 0;
	    didScheduleRenderPhaseUpdateDuringThisPass = false;
	    if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
	    numberOfReRenders += 1;
	    workInProgressHook = currentHook = null;
	    if (null != workInProgress.updateQueue) {
	      var children = workInProgress.updateQueue;
	      children.lastEffect = null;
	      children.events = null;
	      children.stores = null;
	      null != children.memoCache && (children.memoCache.index = 0);
	    }
	    ReactSharedInternals.H = HooksDispatcherOnRerender;
	    children = Component(props, secondArg);
	  } while (didScheduleRenderPhaseUpdateDuringThisPass);
	  return children;
	}
	function TransitionAwareHostComponent() {
	  var dispatcher = ReactSharedInternals.H,
	    maybeThenable = dispatcher.useState()[0];
	  maybeThenable =
	    "function" === typeof maybeThenable.then
	      ? useThenable(maybeThenable)
	      : maybeThenable;
	  dispatcher = dispatcher.useState()[0];
	  (null !== currentHook ? currentHook.memoizedState : null) !== dispatcher &&
	    (currentlyRenderingFiber.flags |= 1024);
	  return maybeThenable;
	}
	function checkDidRenderIdHook() {
	  var didRenderIdHook = 0 !== localIdCounter;
	  localIdCounter = 0;
	  return didRenderIdHook;
	}
	function bailoutHooks(current, workInProgress, lanes) {
	  workInProgress.updateQueue = current.updateQueue;
	  workInProgress.flags &= -2053;
	  current.lanes &= ~lanes;
	}
	function resetHooksOnUnwind(workInProgress) {
	  if (didScheduleRenderPhaseUpdate) {
	    for (
	      workInProgress = workInProgress.memoizedState;
	      null !== workInProgress;

	    ) {
	      var queue = workInProgress.queue;
	      null !== queue && (queue.pending = null);
	      workInProgress = workInProgress.next;
	    }
	    didScheduleRenderPhaseUpdate = false;
	  }
	  renderLanes = 0;
	  workInProgressHook = currentHook = currentlyRenderingFiber = null;
	  didScheduleRenderPhaseUpdateDuringThisPass = false;
	  thenableIndexCounter$1 = localIdCounter = 0;
	  thenableState$1 = null;
	}
	function mountWorkInProgressHook() {
	  var hook = {
	    memoizedState: null,
	    baseState: null,
	    baseQueue: null,
	    queue: null,
	    next: null
	  };
	  null === workInProgressHook
	    ? (currentlyRenderingFiber.memoizedState = workInProgressHook = hook)
	    : (workInProgressHook = workInProgressHook.next = hook);
	  return workInProgressHook;
	}
	function updateWorkInProgressHook() {
	  if (null === currentHook) {
	    var nextCurrentHook = currentlyRenderingFiber.alternate;
	    nextCurrentHook =
	      null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
	  } else nextCurrentHook = currentHook.next;
	  var nextWorkInProgressHook =
	    null === workInProgressHook
	      ? currentlyRenderingFiber.memoizedState
	      : workInProgressHook.next;
	  if (null !== nextWorkInProgressHook)
	    (workInProgressHook = nextWorkInProgressHook),
	      (currentHook = nextCurrentHook);
	  else {
	    if (null === nextCurrentHook) {
	      if (null === currentlyRenderingFiber.alternate)
	        throw Error(formatProdErrorMessage(467));
	      throw Error(formatProdErrorMessage(310));
	    }
	    currentHook = nextCurrentHook;
	    nextCurrentHook = {
	      memoizedState: currentHook.memoizedState,
	      baseState: currentHook.baseState,
	      baseQueue: currentHook.baseQueue,
	      queue: currentHook.queue,
	      next: null
	    };
	    null === workInProgressHook
	      ? (currentlyRenderingFiber.memoizedState = workInProgressHook =
	          nextCurrentHook)
	      : (workInProgressHook = workInProgressHook.next = nextCurrentHook);
	  }
	  return workInProgressHook;
	}
	function createFunctionComponentUpdateQueue() {
	  return { lastEffect: null, events: null, stores: null, memoCache: null };
	}
	function useThenable(thenable) {
	  var index = thenableIndexCounter$1;
	  thenableIndexCounter$1 += 1;
	  null === thenableState$1 && (thenableState$1 = []);
	  thenable = trackUsedThenable(thenableState$1, thenable, index);
	  index = currentlyRenderingFiber;
	  null ===
	    (null === workInProgressHook
	      ? index.memoizedState
	      : workInProgressHook.next) &&
	    ((index = index.alternate),
	    (ReactSharedInternals.H =
	      null === index || null === index.memoizedState
	        ? HooksDispatcherOnMount
	        : HooksDispatcherOnUpdate));
	  return thenable;
	}
	function use(usable) {
	  if (null !== usable && "object" === typeof usable) {
	    if ("function" === typeof usable.then) return useThenable(usable);
	    if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
	  }
	  throw Error(formatProdErrorMessage(438, String(usable)));
	}
	function useMemoCache(size) {
	  var memoCache = null,
	    updateQueue = currentlyRenderingFiber.updateQueue;
	  null !== updateQueue && (memoCache = updateQueue.memoCache);
	  if (null == memoCache) {
	    var current = currentlyRenderingFiber.alternate;
	    null !== current &&
	      ((current = current.updateQueue),
	      null !== current &&
	        ((current = current.memoCache),
	        null != current &&
	          (memoCache = {
	            data: current.data.map(function (array) {
	              return array.slice();
	            }),
	            index: 0
	          })));
	  }
	  null == memoCache && (memoCache = { data: [], index: 0 });
	  null === updateQueue &&
	    ((updateQueue = createFunctionComponentUpdateQueue()),
	    (currentlyRenderingFiber.updateQueue = updateQueue));
	  updateQueue.memoCache = memoCache;
	  updateQueue = memoCache.data[memoCache.index];
	  if (void 0 === updateQueue)
	    for (
	      updateQueue = memoCache.data[memoCache.index] = Array(size), current = 0;
	      current < size;
	      current++
	    )
	      updateQueue[current] = REACT_MEMO_CACHE_SENTINEL;
	  memoCache.index++;
	  return updateQueue;
	}
	function basicStateReducer(state, action) {
	  return "function" === typeof action ? action(state) : action;
	}
	function updateReducer(reducer) {
	  var hook = updateWorkInProgressHook();
	  return updateReducerImpl(hook, currentHook, reducer);
	}
	function updateReducerImpl(hook, current, reducer) {
	  var queue = hook.queue;
	  if (null === queue) throw Error(formatProdErrorMessage(311));
	  queue.lastRenderedReducer = reducer;
	  var baseQueue = hook.baseQueue,
	    pendingQueue = queue.pending;
	  if (null !== pendingQueue) {
	    if (null !== baseQueue) {
	      var baseFirst = baseQueue.next;
	      baseQueue.next = pendingQueue.next;
	      pendingQueue.next = baseFirst;
	    }
	    current.baseQueue = baseQueue = pendingQueue;
	    queue.pending = null;
	  }
	  pendingQueue = hook.baseState;
	  if (null === baseQueue) hook.memoizedState = pendingQueue;
	  else {
	    current = baseQueue.next;
	    var newBaseQueueFirst = (baseFirst = null),
	      newBaseQueueLast = null,
	      update = current,
	      didReadFromEntangledAsyncAction$32 = false;
	    do {
	      var updateLane = update.lane & -536870913;
	      if (
	        updateLane !== update.lane
	          ? (workInProgressRootRenderLanes & updateLane) === updateLane
	          : (renderLanes & updateLane) === updateLane
	      ) {
	        var revertLane = update.revertLane;
	        if (0 === revertLane)
	          null !== newBaseQueueLast &&
	            (newBaseQueueLast = newBaseQueueLast.next =
	              {
	                lane: 0,
	                revertLane: 0,
	                action: update.action,
	                hasEagerState: update.hasEagerState,
	                eagerState: update.eagerState,
	                next: null
	              }),
	            updateLane === currentEntangledLane &&
	              (didReadFromEntangledAsyncAction$32 = true);
	        else if ((renderLanes & revertLane) === revertLane) {
	          update = update.next;
	          revertLane === currentEntangledLane &&
	            (didReadFromEntangledAsyncAction$32 = true);
	          continue;
	        } else
	          (updateLane = {
	            lane: 0,
	            revertLane: update.revertLane,
	            action: update.action,
	            hasEagerState: update.hasEagerState,
	            eagerState: update.eagerState,
	            next: null
	          }),
	            null === newBaseQueueLast
	              ? ((newBaseQueueFirst = newBaseQueueLast = updateLane),
	                (baseFirst = pendingQueue))
	              : (newBaseQueueLast = newBaseQueueLast.next = updateLane),
	            (currentlyRenderingFiber.lanes |= revertLane),
	            (workInProgressRootSkippedLanes |= revertLane);
	        updateLane = update.action;
	        shouldDoubleInvokeUserFnsInHooksDEV &&
	          reducer(pendingQueue, updateLane);
	        pendingQueue = update.hasEagerState
	          ? update.eagerState
	          : reducer(pendingQueue, updateLane);
	      } else
	        (revertLane = {
	          lane: updateLane,
	          revertLane: update.revertLane,
	          action: update.action,
	          hasEagerState: update.hasEagerState,
	          eagerState: update.eagerState,
	          next: null
	        }),
	          null === newBaseQueueLast
	            ? ((newBaseQueueFirst = newBaseQueueLast = revertLane),
	              (baseFirst = pendingQueue))
	            : (newBaseQueueLast = newBaseQueueLast.next = revertLane),
	          (currentlyRenderingFiber.lanes |= updateLane),
	          (workInProgressRootSkippedLanes |= updateLane);
	      update = update.next;
	    } while (null !== update && update !== current);
	    null === newBaseQueueLast
	      ? (baseFirst = pendingQueue)
	      : (newBaseQueueLast.next = newBaseQueueFirst);
	    if (
	      !objectIs(pendingQueue, hook.memoizedState) &&
	      ((didReceiveUpdate = true),
	      didReadFromEntangledAsyncAction$32 &&
	        ((reducer = currentEntangledActionThenable), null !== reducer))
	    )
	      throw reducer;
	    hook.memoizedState = pendingQueue;
	    hook.baseState = baseFirst;
	    hook.baseQueue = newBaseQueueLast;
	    queue.lastRenderedState = pendingQueue;
	  }
	  null === baseQueue && (queue.lanes = 0);
	  return [hook.memoizedState, queue.dispatch];
	}
	function rerenderReducer(reducer) {
	  var hook = updateWorkInProgressHook(),
	    queue = hook.queue;
	  if (null === queue) throw Error(formatProdErrorMessage(311));
	  queue.lastRenderedReducer = reducer;
	  var dispatch = queue.dispatch,
	    lastRenderPhaseUpdate = queue.pending,
	    newState = hook.memoizedState;
	  if (null !== lastRenderPhaseUpdate) {
	    queue.pending = null;
	    var update = (lastRenderPhaseUpdate = lastRenderPhaseUpdate.next);
	    do (newState = reducer(newState, update.action)), (update = update.next);
	    while (update !== lastRenderPhaseUpdate);
	    objectIs(newState, hook.memoizedState) || (didReceiveUpdate = true);
	    hook.memoizedState = newState;
	    null === hook.baseQueue && (hook.baseState = newState);
	    queue.lastRenderedState = newState;
	  }
	  return [newState, dispatch];
	}
	function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
	  var fiber = currentlyRenderingFiber,
	    hook = updateWorkInProgressHook(),
	    isHydrating$jscomp$0 = isHydrating;
	  if (isHydrating$jscomp$0) {
	    if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
	    getServerSnapshot = getServerSnapshot();
	  } else getServerSnapshot = getSnapshot();
	  var snapshotChanged = !objectIs(
	    (currentHook || hook).memoizedState,
	    getServerSnapshot
	  );
	  snapshotChanged &&
	    ((hook.memoizedState = getServerSnapshot), (didReceiveUpdate = true));
	  hook = hook.queue;
	  var create = subscribeToStore.bind(null, fiber, hook, subscribe);
	  updateEffectImpl(2048, 8, create, [subscribe]);
	  if (
	    hook.getSnapshot !== getSnapshot ||
	    snapshotChanged ||
	    (null !== workInProgressHook && workInProgressHook.memoizedState.tag & 1)
	  ) {
	    fiber.flags |= 2048;
	    pushSimpleEffect(
	      9,
	      createEffectInstance(),
	      updateStoreInstance.bind(
	        null,
	        fiber,
	        hook,
	        getServerSnapshot,
	        getSnapshot
	      ),
	      null
	    );
	    if (null === workInProgressRoot) throw Error(formatProdErrorMessage(349));
	    isHydrating$jscomp$0 ||
	      0 !== (renderLanes & 124) ||
	      pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
	  }
	  return getServerSnapshot;
	}
	function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
	  fiber.flags |= 16384;
	  fiber = { getSnapshot: getSnapshot, value: renderedSnapshot };
	  getSnapshot = currentlyRenderingFiber.updateQueue;
	  null === getSnapshot
	    ? ((getSnapshot = createFunctionComponentUpdateQueue()),
	      (currentlyRenderingFiber.updateQueue = getSnapshot),
	      (getSnapshot.stores = [fiber]))
	    : ((renderedSnapshot = getSnapshot.stores),
	      null === renderedSnapshot
	        ? (getSnapshot.stores = [fiber])
	        : renderedSnapshot.push(fiber));
	}
	function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
	  inst.value = nextSnapshot;
	  inst.getSnapshot = getSnapshot;
	  checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
	}
	function subscribeToStore(fiber, inst, subscribe) {
	  return subscribe(function () {
	    checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
	  });
	}
	function checkIfSnapshotChanged(inst) {
	  var latestGetSnapshot = inst.getSnapshot;
	  inst = inst.value;
	  try {
	    var nextValue = latestGetSnapshot();
	    return !objectIs(inst, nextValue);
	  } catch (error) {
	    return true;
	  }
	}
	function forceStoreRerender(fiber) {
	  var root = enqueueConcurrentRenderForLane(fiber, 2);
	  null !== root && scheduleUpdateOnFiber(root, fiber, 2);
	}
	function mountStateImpl(initialState) {
	  var hook = mountWorkInProgressHook();
	  if ("function" === typeof initialState) {
	    var initialStateInitializer = initialState;
	    initialState = initialStateInitializer();
	    if (shouldDoubleInvokeUserFnsInHooksDEV) {
	      setIsStrictModeForDevtools(true);
	      try {
	        initialStateInitializer();
	      } finally {
	        setIsStrictModeForDevtools(false);
	      }
	    }
	  }
	  hook.memoizedState = hook.baseState = initialState;
	  hook.queue = {
	    pending: null,
	    lanes: 0,
	    dispatch: null,
	    lastRenderedReducer: basicStateReducer,
	    lastRenderedState: initialState
	  };
	  return hook;
	}
	function updateOptimisticImpl(hook, current, passthrough, reducer) {
	  hook.baseState = passthrough;
	  return updateReducerImpl(
	    hook,
	    currentHook,
	    "function" === typeof reducer ? reducer : basicStateReducer
	  );
	}
	function dispatchActionState(
	  fiber,
	  actionQueue,
	  setPendingState,
	  setState,
	  payload
	) {
	  if (isRenderPhaseUpdate(fiber)) throw Error(formatProdErrorMessage(485));
	  fiber = actionQueue.action;
	  if (null !== fiber) {
	    var actionNode = {
	      payload: payload,
	      action: fiber,
	      next: null,
	      isTransition: true,
	      status: "pending",
	      value: null,
	      reason: null,
	      listeners: [],
	      then: function (listener) {
	        actionNode.listeners.push(listener);
	      }
	    };
	    null !== ReactSharedInternals.T
	      ? setPendingState(true)
	      : (actionNode.isTransition = false);
	    setState(actionNode);
	    setPendingState = actionQueue.pending;
	    null === setPendingState
	      ? ((actionNode.next = actionQueue.pending = actionNode),
	        runActionStateAction(actionQueue, actionNode))
	      : ((actionNode.next = setPendingState.next),
	        (actionQueue.pending = setPendingState.next = actionNode));
	  }
	}
	function runActionStateAction(actionQueue, node) {
	  var action = node.action,
	    payload = node.payload,
	    prevState = actionQueue.state;
	  if (node.isTransition) {
	    var prevTransition = ReactSharedInternals.T,
	      currentTransition = {};
	    ReactSharedInternals.T = currentTransition;
	    try {
	      var returnValue = action(prevState, payload),
	        onStartTransitionFinish = ReactSharedInternals.S;
	      null !== onStartTransitionFinish &&
	        onStartTransitionFinish(currentTransition, returnValue);
	      handleActionReturnValue(actionQueue, node, returnValue);
	    } catch (error) {
	      onActionError(actionQueue, node, error);
	    } finally {
	      ReactSharedInternals.T = prevTransition;
	    }
	  } else
	    try {
	      (prevTransition = action(prevState, payload)),
	        handleActionReturnValue(actionQueue, node, prevTransition);
	    } catch (error$38) {
	      onActionError(actionQueue, node, error$38);
	    }
	}
	function handleActionReturnValue(actionQueue, node, returnValue) {
	  null !== returnValue &&
	  "object" === typeof returnValue &&
	  "function" === typeof returnValue.then
	    ? returnValue.then(
	        function (nextState) {
	          onActionSuccess(actionQueue, node, nextState);
	        },
	        function (error) {
	          return onActionError(actionQueue, node, error);
	        }
	      )
	    : onActionSuccess(actionQueue, node, returnValue);
	}
	function onActionSuccess(actionQueue, actionNode, nextState) {
	  actionNode.status = "fulfilled";
	  actionNode.value = nextState;
	  notifyActionListeners(actionNode);
	  actionQueue.state = nextState;
	  actionNode = actionQueue.pending;
	  null !== actionNode &&
	    ((nextState = actionNode.next),
	    nextState === actionNode
	      ? (actionQueue.pending = null)
	      : ((nextState = nextState.next),
	        (actionNode.next = nextState),
	        runActionStateAction(actionQueue, nextState)));
	}
	function onActionError(actionQueue, actionNode, error) {
	  var last = actionQueue.pending;
	  actionQueue.pending = null;
	  if (null !== last) {
	    last = last.next;
	    do
	      (actionNode.status = "rejected"),
	        (actionNode.reason = error),
	        notifyActionListeners(actionNode),
	        (actionNode = actionNode.next);
	    while (actionNode !== last);
	  }
	  actionQueue.action = null;
	}
	function notifyActionListeners(actionNode) {
	  actionNode = actionNode.listeners;
	  for (var i = 0; i < actionNode.length; i++) (0, actionNode[i])();
	}
	function actionStateReducer(oldState, newState) {
	  return newState;
	}
	function mountActionState(action, initialStateProp) {
	  if (isHydrating) {
	    var ssrFormState = workInProgressRoot.formState;
	    if (null !== ssrFormState) {
	      a: {
	        var JSCompiler_inline_result = currentlyRenderingFiber;
	        if (isHydrating) {
	          if (nextHydratableInstance) {
	            b: {
	              var JSCompiler_inline_result$jscomp$0 = nextHydratableInstance;
	              for (
	                var inRootOrSingleton = rootOrSingletonContext;
	                8 !== JSCompiler_inline_result$jscomp$0.nodeType;

	              ) {
	                if (!inRootOrSingleton) {
	                  JSCompiler_inline_result$jscomp$0 = null;
	                  break b;
	                }
	                JSCompiler_inline_result$jscomp$0 = getNextHydratable(
	                  JSCompiler_inline_result$jscomp$0.nextSibling
	                );
	                if (null === JSCompiler_inline_result$jscomp$0) {
	                  JSCompiler_inline_result$jscomp$0 = null;
	                  break b;
	                }
	              }
	              inRootOrSingleton = JSCompiler_inline_result$jscomp$0.data;
	              JSCompiler_inline_result$jscomp$0 =
	                "F!" === inRootOrSingleton || "F" === inRootOrSingleton
	                  ? JSCompiler_inline_result$jscomp$0
	                  : null;
	            }
	            if (JSCompiler_inline_result$jscomp$0) {
	              nextHydratableInstance = getNextHydratable(
	                JSCompiler_inline_result$jscomp$0.nextSibling
	              );
	              JSCompiler_inline_result =
	                "F!" === JSCompiler_inline_result$jscomp$0.data;
	              break a;
	            }
	          }
	          throwOnHydrationMismatch(JSCompiler_inline_result);
	        }
	        JSCompiler_inline_result = false;
	      }
	      JSCompiler_inline_result && (initialStateProp = ssrFormState[0]);
	    }
	  }
	  ssrFormState = mountWorkInProgressHook();
	  ssrFormState.memoizedState = ssrFormState.baseState = initialStateProp;
	  JSCompiler_inline_result = {
	    pending: null,
	    lanes: 0,
	    dispatch: null,
	    lastRenderedReducer: actionStateReducer,
	    lastRenderedState: initialStateProp
	  };
	  ssrFormState.queue = JSCompiler_inline_result;
	  ssrFormState = dispatchSetState.bind(
	    null,
	    currentlyRenderingFiber,
	    JSCompiler_inline_result
	  );
	  JSCompiler_inline_result.dispatch = ssrFormState;
	  JSCompiler_inline_result = mountStateImpl(false);
	  inRootOrSingleton = dispatchOptimisticSetState.bind(
	    null,
	    currentlyRenderingFiber,
	    false,
	    JSCompiler_inline_result.queue
	  );
	  JSCompiler_inline_result = mountWorkInProgressHook();
	  JSCompiler_inline_result$jscomp$0 = {
	    state: initialStateProp,
	    dispatch: null,
	    action: action,
	    pending: null
	  };
	  JSCompiler_inline_result.queue = JSCompiler_inline_result$jscomp$0;
	  ssrFormState = dispatchActionState.bind(
	    null,
	    currentlyRenderingFiber,
	    JSCompiler_inline_result$jscomp$0,
	    inRootOrSingleton,
	    ssrFormState
	  );
	  JSCompiler_inline_result$jscomp$0.dispatch = ssrFormState;
	  JSCompiler_inline_result.memoizedState = action;
	  return [initialStateProp, ssrFormState, false];
	}
	function updateActionState(action) {
	  var stateHook = updateWorkInProgressHook();
	  return updateActionStateImpl(stateHook, currentHook, action);
	}
	function updateActionStateImpl(stateHook, currentStateHook, action) {
	  currentStateHook = updateReducerImpl(
	    stateHook,
	    currentStateHook,
	    actionStateReducer
	  )[0];
	  stateHook = updateReducer(basicStateReducer)[0];
	  if (
	    "object" === typeof currentStateHook &&
	    null !== currentStateHook &&
	    "function" === typeof currentStateHook.then
	  )
	    try {
	      var state = useThenable(currentStateHook);
	    } catch (x) {
	      if (x === SuspenseException) throw SuspenseActionException;
	      throw x;
	    }
	  else state = currentStateHook;
	  currentStateHook = updateWorkInProgressHook();
	  var actionQueue = currentStateHook.queue,
	    dispatch = actionQueue.dispatch;
	  action !== currentStateHook.memoizedState &&
	    ((currentlyRenderingFiber.flags |= 2048),
	    pushSimpleEffect(
	      9,
	      createEffectInstance(),
	      actionStateActionEffect.bind(null, actionQueue, action),
	      null
	    ));
	  return [state, dispatch, stateHook];
	}
	function actionStateActionEffect(actionQueue, action) {
	  actionQueue.action = action;
	}
	function rerenderActionState(action) {
	  var stateHook = updateWorkInProgressHook(),
	    currentStateHook = currentHook;
	  if (null !== currentStateHook)
	    return updateActionStateImpl(stateHook, currentStateHook, action);
	  updateWorkInProgressHook();
	  stateHook = stateHook.memoizedState;
	  currentStateHook = updateWorkInProgressHook();
	  var dispatch = currentStateHook.queue.dispatch;
	  currentStateHook.memoizedState = action;
	  return [stateHook, dispatch, false];
	}
	function pushSimpleEffect(tag, inst, create, createDeps) {
	  tag = { tag: tag, create: create, deps: createDeps, inst: inst, next: null };
	  inst = currentlyRenderingFiber.updateQueue;
	  null === inst &&
	    ((inst = createFunctionComponentUpdateQueue()),
	    (currentlyRenderingFiber.updateQueue = inst));
	  create = inst.lastEffect;
	  null === create
	    ? (inst.lastEffect = tag.next = tag)
	    : ((createDeps = create.next),
	      (create.next = tag),
	      (tag.next = createDeps),
	      (inst.lastEffect = tag));
	  return tag;
	}
	function createEffectInstance() {
	  return { destroy: void 0, resource: void 0 };
	}
	function updateRef() {
	  return updateWorkInProgressHook().memoizedState;
	}
	function mountEffectImpl(fiberFlags, hookFlags, create, createDeps) {
	  var hook = mountWorkInProgressHook();
	  createDeps = void 0 === createDeps ? null : createDeps;
	  currentlyRenderingFiber.flags |= fiberFlags;
	  hook.memoizedState = pushSimpleEffect(
	    1 | hookFlags,
	    createEffectInstance(),
	    create,
	    createDeps
	  );
	}
	function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
	  var hook = updateWorkInProgressHook();
	  deps = void 0 === deps ? null : deps;
	  var inst = hook.memoizedState.inst;
	  null !== currentHook &&
	  null !== deps &&
	  areHookInputsEqual(deps, currentHook.memoizedState.deps)
	    ? (hook.memoizedState = pushSimpleEffect(hookFlags, inst, create, deps))
	    : ((currentlyRenderingFiber.flags |= fiberFlags),
	      (hook.memoizedState = pushSimpleEffect(
	        1 | hookFlags,
	        inst,
	        create,
	        deps
	      )));
	}
	function mountEffect(create, createDeps) {
	  mountEffectImpl(8390656, 8, create, createDeps);
	}
	function updateEffect(create, createDeps) {
	  updateEffectImpl(2048, 8, create, createDeps);
	}
	function updateInsertionEffect(create, deps) {
	  return updateEffectImpl(4, 2, create, deps);
	}
	function updateLayoutEffect(create, deps) {
	  return updateEffectImpl(4, 4, create, deps);
	}
	function imperativeHandleEffect(create, ref) {
	  if ("function" === typeof ref) {
	    create = create();
	    var refCleanup = ref(create);
	    return function () {
	      "function" === typeof refCleanup ? refCleanup() : ref(null);
	    };
	  }
	  if (null !== ref && void 0 !== ref)
	    return (
	      (create = create()),
	      (ref.current = create),
	      function () {
	        ref.current = null;
	      }
	    );
	}
	function updateImperativeHandle(ref, create, deps) {
	  deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
	  updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, create, ref), deps);
	}
	function mountDebugValue() {}
	function updateCallback(callback, deps) {
	  var hook = updateWorkInProgressHook();
	  deps = void 0 === deps ? null : deps;
	  var prevState = hook.memoizedState;
	  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
	    return prevState[0];
	  hook.memoizedState = [callback, deps];
	  return callback;
	}
	function updateMemo(nextCreate, deps) {
	  var hook = updateWorkInProgressHook();
	  deps = void 0 === deps ? null : deps;
	  var prevState = hook.memoizedState;
	  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
	    return prevState[0];
	  prevState = nextCreate();
	  if (shouldDoubleInvokeUserFnsInHooksDEV) {
	    setIsStrictModeForDevtools(true);
	    try {
	      nextCreate();
	    } finally {
	      setIsStrictModeForDevtools(false);
	    }
	  }
	  hook.memoizedState = [prevState, deps];
	  return prevState;
	}
	function mountDeferredValueImpl(hook, value, initialValue) {
	  if (void 0 === initialValue || 0 !== (renderLanes & 1073741824))
	    return (hook.memoizedState = value);
	  hook.memoizedState = initialValue;
	  hook = requestDeferredLane();
	  currentlyRenderingFiber.lanes |= hook;
	  workInProgressRootSkippedLanes |= hook;
	  return initialValue;
	}
	function updateDeferredValueImpl(hook, prevValue, value, initialValue) {
	  if (objectIs(value, prevValue)) return value;
	  if (null !== currentTreeHiddenStackCursor.current)
	    return (
	      (hook = mountDeferredValueImpl(hook, value, initialValue)),
	      objectIs(hook, prevValue) || (didReceiveUpdate = true),
	      hook
	    );
	  if (0 === (renderLanes & 42))
	    return (didReceiveUpdate = true), (hook.memoizedState = value);
	  hook = requestDeferredLane();
	  currentlyRenderingFiber.lanes |= hook;
	  workInProgressRootSkippedLanes |= hook;
	  return prevValue;
	}
	function startTransition(fiber, queue, pendingState, finishedState, callback) {
	  var previousPriority = ReactDOMSharedInternals.p;
	  ReactDOMSharedInternals.p =
	    0 !== previousPriority && 8 > previousPriority ? previousPriority : 8;
	  var prevTransition = ReactSharedInternals.T,
	    currentTransition = {};
	  ReactSharedInternals.T = currentTransition;
	  dispatchOptimisticSetState(fiber, false, queue, pendingState);
	  try {
	    var returnValue = callback(),
	      onStartTransitionFinish = ReactSharedInternals.S;
	    null !== onStartTransitionFinish &&
	      onStartTransitionFinish(currentTransition, returnValue);
	    if (
	      null !== returnValue &&
	      "object" === typeof returnValue &&
	      "function" === typeof returnValue.then
	    ) {
	      var thenableForFinishedState = chainThenableValue(
	        returnValue,
	        finishedState
	      );
	      dispatchSetStateInternal(
	        fiber,
	        queue,
	        thenableForFinishedState,
	        requestUpdateLane(fiber)
	      );
	    } else
	      dispatchSetStateInternal(
	        fiber,
	        queue,
	        finishedState,
	        requestUpdateLane(fiber)
	      );
	  } catch (error) {
	    dispatchSetStateInternal(
	      fiber,
	      queue,
	      { then: function () {}, status: "rejected", reason: error },
	      requestUpdateLane()
	    );
	  } finally {
	    (ReactDOMSharedInternals.p = previousPriority),
	      (ReactSharedInternals.T = prevTransition);
	  }
	}
	function noop$2() {}
	function startHostTransition(formFiber, pendingState, action, formData) {
	  if (5 !== formFiber.tag) throw Error(formatProdErrorMessage(476));
	  var queue = ensureFormComponentIsStateful(formFiber).queue;
	  startTransition(
	    formFiber,
	    queue,
	    pendingState,
	    sharedNotPendingObject,
	    null === action
	      ? noop$2
	      : function () {
	          requestFormReset$1(formFiber);
	          return action(formData);
	        }
	  );
	}
	function ensureFormComponentIsStateful(formFiber) {
	  var existingStateHook = formFiber.memoizedState;
	  if (null !== existingStateHook) return existingStateHook;
	  existingStateHook = {
	    memoizedState: sharedNotPendingObject,
	    baseState: sharedNotPendingObject,
	    baseQueue: null,
	    queue: {
	      pending: null,
	      lanes: 0,
	      dispatch: null,
	      lastRenderedReducer: basicStateReducer,
	      lastRenderedState: sharedNotPendingObject
	    },
	    next: null
	  };
	  var initialResetState = {};
	  existingStateHook.next = {
	    memoizedState: initialResetState,
	    baseState: initialResetState,
	    baseQueue: null,
	    queue: {
	      pending: null,
	      lanes: 0,
	      dispatch: null,
	      lastRenderedReducer: basicStateReducer,
	      lastRenderedState: initialResetState
	    },
	    next: null
	  };
	  formFiber.memoizedState = existingStateHook;
	  formFiber = formFiber.alternate;
	  null !== formFiber && (formFiber.memoizedState = existingStateHook);
	  return existingStateHook;
	}
	function requestFormReset$1(formFiber) {
	  var resetStateQueue = ensureFormComponentIsStateful(formFiber).next.queue;
	  dispatchSetStateInternal(formFiber, resetStateQueue, {}, requestUpdateLane());
	}
	function useHostTransitionStatus() {
	  return readContext(HostTransitionContext);
	}
	function updateId() {
	  return updateWorkInProgressHook().memoizedState;
	}
	function updateRefresh() {
	  return updateWorkInProgressHook().memoizedState;
	}
	function refreshCache(fiber) {
	  for (var provider = fiber.return; null !== provider; ) {
	    switch (provider.tag) {
	      case 24:
	      case 3:
	        var lane = requestUpdateLane();
	        fiber = createUpdate(lane);
	        var root$41 = enqueueUpdate(provider, fiber, lane);
	        null !== root$41 &&
	          (scheduleUpdateOnFiber(root$41, provider, lane),
	          entangleTransitions(root$41, provider, lane));
	        provider = { cache: createCache() };
	        fiber.payload = provider;
	        return;
	    }
	    provider = provider.return;
	  }
	}
	function dispatchReducerAction(fiber, queue, action) {
	  var lane = requestUpdateLane();
	  action = {
	    lane: lane,
	    revertLane: 0,
	    action: action,
	    hasEagerState: false,
	    eagerState: null,
	    next: null
	  };
	  isRenderPhaseUpdate(fiber)
	    ? enqueueRenderPhaseUpdate(queue, action)
	    : ((action = enqueueConcurrentHookUpdate(fiber, queue, action, lane)),
	      null !== action &&
	        (scheduleUpdateOnFiber(action, fiber, lane),
	        entangleTransitionUpdate(action, queue, lane)));
	}
	function dispatchSetState(fiber, queue, action) {
	  var lane = requestUpdateLane();
	  dispatchSetStateInternal(fiber, queue, action, lane);
	}
	function dispatchSetStateInternal(fiber, queue, action, lane) {
	  var update = {
	    lane: lane,
	    revertLane: 0,
	    action: action,
	    hasEagerState: false,
	    eagerState: null,
	    next: null
	  };
	  if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
	  else {
	    var alternate = fiber.alternate;
	    if (
	      0 === fiber.lanes &&
	      (null === alternate || 0 === alternate.lanes) &&
	      ((alternate = queue.lastRenderedReducer), null !== alternate)
	    )
	      try {
	        var currentState = queue.lastRenderedState,
	          eagerState = alternate(currentState, action);
	        update.hasEagerState = !0;
	        update.eagerState = eagerState;
	        if (objectIs(eagerState, currentState))
	          return (
	            enqueueUpdate$1(fiber, queue, update, 0),
	            null === workInProgressRoot && finishQueueingConcurrentUpdates(),
	            !1
	          );
	      } catch (error) {
	      } finally {
	      }
	    action = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
	    if (null !== action)
	      return (
	        scheduleUpdateOnFiber(action, fiber, lane),
	        entangleTransitionUpdate(action, queue, lane),
	        true
	      );
	  }
	  return false;
	}
	function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
	  action = {
	    lane: 2,
	    revertLane: requestTransitionLane(),
	    action: action,
	    hasEagerState: false,
	    eagerState: null,
	    next: null
	  };
	  if (isRenderPhaseUpdate(fiber)) {
	    if (throwIfDuringRender) throw Error(formatProdErrorMessage(479));
	  } else
	    (throwIfDuringRender = enqueueConcurrentHookUpdate(
	      fiber,
	      queue,
	      action,
	      2
	    )),
	      null !== throwIfDuringRender &&
	        scheduleUpdateOnFiber(throwIfDuringRender, fiber, 2);
	}
	function isRenderPhaseUpdate(fiber) {
	  var alternate = fiber.alternate;
	  return (
	    fiber === currentlyRenderingFiber ||
	    (null !== alternate && alternate === currentlyRenderingFiber)
	  );
	}
	function enqueueRenderPhaseUpdate(queue, update) {
	  didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate =
	    true;
	  var pending = queue.pending;
	  null === pending
	    ? (update.next = update)
	    : ((update.next = pending.next), (pending.next = update));
	  queue.pending = update;
	}
	function entangleTransitionUpdate(root, queue, lane) {
	  if (0 !== (lane & 4194048)) {
	    var queueLanes = queue.lanes;
	    queueLanes &= root.pendingLanes;
	    lane |= queueLanes;
	    queue.lanes = lane;
	    markRootEntangled(root, lane);
	  }
	}
	var ContextOnlyDispatcher = {
	    readContext: readContext,
	    use: use,
	    useCallback: throwInvalidHookError,
	    useContext: throwInvalidHookError,
	    useEffect: throwInvalidHookError,
	    useImperativeHandle: throwInvalidHookError,
	    useLayoutEffect: throwInvalidHookError,
	    useInsertionEffect: throwInvalidHookError,
	    useMemo: throwInvalidHookError,
	    useReducer: throwInvalidHookError,
	    useRef: throwInvalidHookError,
	    useState: throwInvalidHookError,
	    useDebugValue: throwInvalidHookError,
	    useDeferredValue: throwInvalidHookError,
	    useTransition: throwInvalidHookError,
	    useSyncExternalStore: throwInvalidHookError,
	    useId: throwInvalidHookError,
	    useHostTransitionStatus: throwInvalidHookError,
	    useFormState: throwInvalidHookError,
	    useActionState: throwInvalidHookError,
	    useOptimistic: throwInvalidHookError,
	    useMemoCache: throwInvalidHookError,
	    useCacheRefresh: throwInvalidHookError
	  },
	  HooksDispatcherOnMount = {
	    readContext: readContext,
	    use: use,
	    useCallback: function (callback, deps) {
	      mountWorkInProgressHook().memoizedState = [
	        callback,
	        void 0 === deps ? null : deps
	      ];
	      return callback;
	    },
	    useContext: readContext,
	    useEffect: mountEffect,
	    useImperativeHandle: function (ref, create, deps) {
	      deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
	      mountEffectImpl(
	        4194308,
	        4,
	        imperativeHandleEffect.bind(null, create, ref),
	        deps
	      );
	    },
	    useLayoutEffect: function (create, deps) {
	      return mountEffectImpl(4194308, 4, create, deps);
	    },
	    useInsertionEffect: function (create, deps) {
	      mountEffectImpl(4, 2, create, deps);
	    },
	    useMemo: function (nextCreate, deps) {
	      var hook = mountWorkInProgressHook();
	      deps = void 0 === deps ? null : deps;
	      var nextValue = nextCreate();
	      if (shouldDoubleInvokeUserFnsInHooksDEV) {
	        setIsStrictModeForDevtools(true);
	        try {
	          nextCreate();
	        } finally {
	          setIsStrictModeForDevtools(false);
	        }
	      }
	      hook.memoizedState = [nextValue, deps];
	      return nextValue;
	    },
	    useReducer: function (reducer, initialArg, init) {
	      var hook = mountWorkInProgressHook();
	      if (void 0 !== init) {
	        var initialState = init(initialArg);
	        if (shouldDoubleInvokeUserFnsInHooksDEV) {
	          setIsStrictModeForDevtools(true);
	          try {
	            init(initialArg);
	          } finally {
	            setIsStrictModeForDevtools(false);
	          }
	        }
	      } else initialState = initialArg;
	      hook.memoizedState = hook.baseState = initialState;
	      reducer = {
	        pending: null,
	        lanes: 0,
	        dispatch: null,
	        lastRenderedReducer: reducer,
	        lastRenderedState: initialState
	      };
	      hook.queue = reducer;
	      reducer = reducer.dispatch = dispatchReducerAction.bind(
	        null,
	        currentlyRenderingFiber,
	        reducer
	      );
	      return [hook.memoizedState, reducer];
	    },
	    useRef: function (initialValue) {
	      var hook = mountWorkInProgressHook();
	      initialValue = { current: initialValue };
	      return (hook.memoizedState = initialValue);
	    },
	    useState: function (initialState) {
	      initialState = mountStateImpl(initialState);
	      var queue = initialState.queue,
	        dispatch = dispatchSetState.bind(null, currentlyRenderingFiber, queue);
	      queue.dispatch = dispatch;
	      return [initialState.memoizedState, dispatch];
	    },
	    useDebugValue: mountDebugValue,
	    useDeferredValue: function (value, initialValue) {
	      var hook = mountWorkInProgressHook();
	      return mountDeferredValueImpl(hook, value, initialValue);
	    },
	    useTransition: function () {
	      var stateHook = mountStateImpl(false);
	      stateHook = startTransition.bind(
	        null,
	        currentlyRenderingFiber,
	        stateHook.queue,
	        true,
	        false
	      );
	      mountWorkInProgressHook().memoizedState = stateHook;
	      return [false, stateHook];
	    },
	    useSyncExternalStore: function (subscribe, getSnapshot, getServerSnapshot) {
	      var fiber = currentlyRenderingFiber,
	        hook = mountWorkInProgressHook();
	      if (isHydrating) {
	        if (void 0 === getServerSnapshot)
	          throw Error(formatProdErrorMessage(407));
	        getServerSnapshot = getServerSnapshot();
	      } else {
	        getServerSnapshot = getSnapshot();
	        if (null === workInProgressRoot)
	          throw Error(formatProdErrorMessage(349));
	        0 !== (workInProgressRootRenderLanes & 124) ||
	          pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
	      }
	      hook.memoizedState = getServerSnapshot;
	      var inst = { value: getServerSnapshot, getSnapshot: getSnapshot };
	      hook.queue = inst;
	      mountEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [
	        subscribe
	      ]);
	      fiber.flags |= 2048;
	      pushSimpleEffect(
	        9,
	        createEffectInstance(),
	        updateStoreInstance.bind(
	          null,
	          fiber,
	          inst,
	          getServerSnapshot,
	          getSnapshot
	        ),
	        null
	      );
	      return getServerSnapshot;
	    },
	    useId: function () {
	      var hook = mountWorkInProgressHook(),
	        identifierPrefix = workInProgressRoot.identifierPrefix;
	      if (isHydrating) {
	        var JSCompiler_inline_result = treeContextOverflow;
	        var idWithLeadingBit = treeContextId;
	        JSCompiler_inline_result =
	          (
	            idWithLeadingBit & ~(1 << (32 - clz32(idWithLeadingBit) - 1))
	          ).toString(32) + JSCompiler_inline_result;
	        identifierPrefix =
	          "\u00ab" + identifierPrefix + "R" + JSCompiler_inline_result;
	        JSCompiler_inline_result = localIdCounter++;
	        0 < JSCompiler_inline_result &&
	          (identifierPrefix += "H" + JSCompiler_inline_result.toString(32));
	        identifierPrefix += "\u00bb";
	      } else
	        (JSCompiler_inline_result = globalClientIdCounter++),
	          (identifierPrefix =
	            "\u00ab" +
	            identifierPrefix +
	            "r" +
	            JSCompiler_inline_result.toString(32) +
	            "\u00bb");
	      return (hook.memoizedState = identifierPrefix);
	    },
	    useHostTransitionStatus: useHostTransitionStatus,
	    useFormState: mountActionState,
	    useActionState: mountActionState,
	    useOptimistic: function (passthrough) {
	      var hook = mountWorkInProgressHook();
	      hook.memoizedState = hook.baseState = passthrough;
	      var queue = {
	        pending: null,
	        lanes: 0,
	        dispatch: null,
	        lastRenderedReducer: null,
	        lastRenderedState: null
	      };
	      hook.queue = queue;
	      hook = dispatchOptimisticSetState.bind(
	        null,
	        currentlyRenderingFiber,
	        true,
	        queue
	      );
	      queue.dispatch = hook;
	      return [passthrough, hook];
	    },
	    useMemoCache: useMemoCache,
	    useCacheRefresh: function () {
	      return (mountWorkInProgressHook().memoizedState = refreshCache.bind(
	        null,
	        currentlyRenderingFiber
	      ));
	    }
	  },
	  HooksDispatcherOnUpdate = {
	    readContext: readContext,
	    use: use,
	    useCallback: updateCallback,
	    useContext: readContext,
	    useEffect: updateEffect,
	    useImperativeHandle: updateImperativeHandle,
	    useInsertionEffect: updateInsertionEffect,
	    useLayoutEffect: updateLayoutEffect,
	    useMemo: updateMemo,
	    useReducer: updateReducer,
	    useRef: updateRef,
	    useState: function () {
	      return updateReducer(basicStateReducer);
	    },
	    useDebugValue: mountDebugValue,
	    useDeferredValue: function (value, initialValue) {
	      var hook = updateWorkInProgressHook();
	      return updateDeferredValueImpl(
	        hook,
	        currentHook.memoizedState,
	        value,
	        initialValue
	      );
	    },
	    useTransition: function () {
	      var booleanOrThenable = updateReducer(basicStateReducer)[0],
	        start = updateWorkInProgressHook().memoizedState;
	      return [
	        "boolean" === typeof booleanOrThenable
	          ? booleanOrThenable
	          : useThenable(booleanOrThenable),
	        start
	      ];
	    },
	    useSyncExternalStore: updateSyncExternalStore,
	    useId: updateId,
	    useHostTransitionStatus: useHostTransitionStatus,
	    useFormState: updateActionState,
	    useActionState: updateActionState,
	    useOptimistic: function (passthrough, reducer) {
	      var hook = updateWorkInProgressHook();
	      return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
	    },
	    useMemoCache: useMemoCache,
	    useCacheRefresh: updateRefresh
	  },
	  HooksDispatcherOnRerender = {
	    readContext: readContext,
	    use: use,
	    useCallback: updateCallback,
	    useContext: readContext,
	    useEffect: updateEffect,
	    useImperativeHandle: updateImperativeHandle,
	    useInsertionEffect: updateInsertionEffect,
	    useLayoutEffect: updateLayoutEffect,
	    useMemo: updateMemo,
	    useReducer: rerenderReducer,
	    useRef: updateRef,
	    useState: function () {
	      return rerenderReducer(basicStateReducer);
	    },
	    useDebugValue: mountDebugValue,
	    useDeferredValue: function (value, initialValue) {
	      var hook = updateWorkInProgressHook();
	      return null === currentHook
	        ? mountDeferredValueImpl(hook, value, initialValue)
	        : updateDeferredValueImpl(
	            hook,
	            currentHook.memoizedState,
	            value,
	            initialValue
	          );
	    },
	    useTransition: function () {
	      var booleanOrThenable = rerenderReducer(basicStateReducer)[0],
	        start = updateWorkInProgressHook().memoizedState;
	      return [
	        "boolean" === typeof booleanOrThenable
	          ? booleanOrThenable
	          : useThenable(booleanOrThenable),
	        start
	      ];
	    },
	    useSyncExternalStore: updateSyncExternalStore,
	    useId: updateId,
	    useHostTransitionStatus: useHostTransitionStatus,
	    useFormState: rerenderActionState,
	    useActionState: rerenderActionState,
	    useOptimistic: function (passthrough, reducer) {
	      var hook = updateWorkInProgressHook();
	      if (null !== currentHook)
	        return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
	      hook.baseState = passthrough;
	      return [passthrough, hook.queue.dispatch];
	    },
	    useMemoCache: useMemoCache,
	    useCacheRefresh: updateRefresh
	  },
	  thenableState = null,
	  thenableIndexCounter = 0;
	function unwrapThenable(thenable) {
	  var index = thenableIndexCounter;
	  thenableIndexCounter += 1;
	  null === thenableState && (thenableState = []);
	  return trackUsedThenable(thenableState, thenable, index);
	}
	function coerceRef(workInProgress, element) {
	  element = element.props.ref;
	  workInProgress.ref = void 0 !== element ? element : null;
	}
	function throwOnInvalidObjectType(returnFiber, newChild) {
	  if (newChild.$$typeof === REACT_LEGACY_ELEMENT_TYPE)
	    throw Error(formatProdErrorMessage(525));
	  returnFiber = Object.prototype.toString.call(newChild);
	  throw Error(
	    formatProdErrorMessage(
	      31,
	      "[object Object]" === returnFiber
	        ? "object with keys {" + Object.keys(newChild).join(", ") + "}"
	        : returnFiber
	    )
	  );
	}
	function resolveLazy(lazyType) {
	  var init = lazyType._init;
	  return init(lazyType._payload);
	}
	function createChildReconciler(shouldTrackSideEffects) {
	  function deleteChild(returnFiber, childToDelete) {
	    if (shouldTrackSideEffects) {
	      var deletions = returnFiber.deletions;
	      null === deletions
	        ? ((returnFiber.deletions = [childToDelete]), (returnFiber.flags |= 16))
	        : deletions.push(childToDelete);
	    }
	  }
	  function deleteRemainingChildren(returnFiber, currentFirstChild) {
	    if (!shouldTrackSideEffects) return null;
	    for (; null !== currentFirstChild; )
	      deleteChild(returnFiber, currentFirstChild),
	        (currentFirstChild = currentFirstChild.sibling);
	    return null;
	  }
	  function mapRemainingChildren(currentFirstChild) {
	    for (var existingChildren = new Map(); null !== currentFirstChild; )
	      null !== currentFirstChild.key
	        ? existingChildren.set(currentFirstChild.key, currentFirstChild)
	        : existingChildren.set(currentFirstChild.index, currentFirstChild),
	        (currentFirstChild = currentFirstChild.sibling);
	    return existingChildren;
	  }
	  function useFiber(fiber, pendingProps) {
	    fiber = createWorkInProgress(fiber, pendingProps);
	    fiber.index = 0;
	    fiber.sibling = null;
	    return fiber;
	  }
	  function placeChild(newFiber, lastPlacedIndex, newIndex) {
	    newFiber.index = newIndex;
	    if (!shouldTrackSideEffects)
	      return (newFiber.flags |= 1048576), lastPlacedIndex;
	    newIndex = newFiber.alternate;
	    if (null !== newIndex)
	      return (
	        (newIndex = newIndex.index),
	        newIndex < lastPlacedIndex
	          ? ((newFiber.flags |= 67108866), lastPlacedIndex)
	          : newIndex
	      );
	    newFiber.flags |= 67108866;
	    return lastPlacedIndex;
	  }
	  function placeSingleChild(newFiber) {
	    shouldTrackSideEffects &&
	      null === newFiber.alternate &&
	      (newFiber.flags |= 67108866);
	    return newFiber;
	  }
	  function updateTextNode(returnFiber, current, textContent, lanes) {
	    if (null === current || 6 !== current.tag)
	      return (
	        (current = createFiberFromText(textContent, returnFiber.mode, lanes)),
	        (current.return = returnFiber),
	        current
	      );
	    current = useFiber(current, textContent);
	    current.return = returnFiber;
	    return current;
	  }
	  function updateElement(returnFiber, current, element, lanes) {
	    var elementType = element.type;
	    if (elementType === REACT_FRAGMENT_TYPE)
	      return updateFragment(
	        returnFiber,
	        current,
	        element.props.children,
	        lanes,
	        element.key
	      );
	    if (
	      null !== current &&
	      (current.elementType === elementType ||
	        ("object" === typeof elementType &&
	          null !== elementType &&
	          elementType.$$typeof === REACT_LAZY_TYPE &&
	          resolveLazy(elementType) === current.type))
	    )
	      return (
	        (current = useFiber(current, element.props)),
	        coerceRef(current, element),
	        (current.return = returnFiber),
	        current
	      );
	    current = createFiberFromTypeAndProps(
	      element.type,
	      element.key,
	      element.props,
	      null,
	      returnFiber.mode,
	      lanes
	    );
	    coerceRef(current, element);
	    current.return = returnFiber;
	    return current;
	  }
	  function updatePortal(returnFiber, current, portal, lanes) {
	    if (
	      null === current ||
	      4 !== current.tag ||
	      current.stateNode.containerInfo !== portal.containerInfo ||
	      current.stateNode.implementation !== portal.implementation
	    )
	      return (
	        (current = createFiberFromPortal(portal, returnFiber.mode, lanes)),
	        (current.return = returnFiber),
	        current
	      );
	    current = useFiber(current, portal.children || []);
	    current.return = returnFiber;
	    return current;
	  }
	  function updateFragment(returnFiber, current, fragment, lanes, key) {
	    if (null === current || 7 !== current.tag)
	      return (
	        (current = createFiberFromFragment(
	          fragment,
	          returnFiber.mode,
	          lanes,
	          key
	        )),
	        (current.return = returnFiber),
	        current
	      );
	    current = useFiber(current, fragment);
	    current.return = returnFiber;
	    return current;
	  }
	  function createChild(returnFiber, newChild, lanes) {
	    if (
	      ("string" === typeof newChild && "" !== newChild) ||
	      "number" === typeof newChild ||
	      "bigint" === typeof newChild
	    )
	      return (
	        (newChild = createFiberFromText(
	          "" + newChild,
	          returnFiber.mode,
	          lanes
	        )),
	        (newChild.return = returnFiber),
	        newChild
	      );
	    if ("object" === typeof newChild && null !== newChild) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          return (
	            (lanes = createFiberFromTypeAndProps(
	              newChild.type,
	              newChild.key,
	              newChild.props,
	              null,
	              returnFiber.mode,
	              lanes
	            )),
	            coerceRef(lanes, newChild),
	            (lanes.return = returnFiber),
	            lanes
	          );
	        case REACT_PORTAL_TYPE:
	          return (
	            (newChild = createFiberFromPortal(
	              newChild,
	              returnFiber.mode,
	              lanes
	            )),
	            (newChild.return = returnFiber),
	            newChild
	          );
	        case REACT_LAZY_TYPE:
	          var init = newChild._init;
	          newChild = init(newChild._payload);
	          return createChild(returnFiber, newChild, lanes);
	      }
	      if (isArrayImpl(newChild) || getIteratorFn(newChild))
	        return (
	          (newChild = createFiberFromFragment(
	            newChild,
	            returnFiber.mode,
	            lanes,
	            null
	          )),
	          (newChild.return = returnFiber),
	          newChild
	        );
	      if ("function" === typeof newChild.then)
	        return createChild(returnFiber, unwrapThenable(newChild), lanes);
	      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
	        return createChild(
	          returnFiber,
	          readContextDuringReconciliation(returnFiber, newChild),
	          lanes
	        );
	      throwOnInvalidObjectType(returnFiber, newChild);
	    }
	    return null;
	  }
	  function updateSlot(returnFiber, oldFiber, newChild, lanes) {
	    var key = null !== oldFiber ? oldFiber.key : null;
	    if (
	      ("string" === typeof newChild && "" !== newChild) ||
	      "number" === typeof newChild ||
	      "bigint" === typeof newChild
	    )
	      return null !== key
	        ? null
	        : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
	    if ("object" === typeof newChild && null !== newChild) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          return newChild.key === key
	            ? updateElement(returnFiber, oldFiber, newChild, lanes)
	            : null;
	        case REACT_PORTAL_TYPE:
	          return newChild.key === key
	            ? updatePortal(returnFiber, oldFiber, newChild, lanes)
	            : null;
	        case REACT_LAZY_TYPE:
	          return (
	            (key = newChild._init),
	            (newChild = key(newChild._payload)),
	            updateSlot(returnFiber, oldFiber, newChild, lanes)
	          );
	      }
	      if (isArrayImpl(newChild) || getIteratorFn(newChild))
	        return null !== key
	          ? null
	          : updateFragment(returnFiber, oldFiber, newChild, lanes, null);
	      if ("function" === typeof newChild.then)
	        return updateSlot(
	          returnFiber,
	          oldFiber,
	          unwrapThenable(newChild),
	          lanes
	        );
	      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
	        return updateSlot(
	          returnFiber,
	          oldFiber,
	          readContextDuringReconciliation(returnFiber, newChild),
	          lanes
	        );
	      throwOnInvalidObjectType(returnFiber, newChild);
	    }
	    return null;
	  }
	  function updateFromMap(
	    existingChildren,
	    returnFiber,
	    newIdx,
	    newChild,
	    lanes
	  ) {
	    if (
	      ("string" === typeof newChild && "" !== newChild) ||
	      "number" === typeof newChild ||
	      "bigint" === typeof newChild
	    )
	      return (
	        (existingChildren = existingChildren.get(newIdx) || null),
	        updateTextNode(returnFiber, existingChildren, "" + newChild, lanes)
	      );
	    if ("object" === typeof newChild && null !== newChild) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          return (
	            (existingChildren =
	              existingChildren.get(
	                null === newChild.key ? newIdx : newChild.key
	              ) || null),
	            updateElement(returnFiber, existingChildren, newChild, lanes)
	          );
	        case REACT_PORTAL_TYPE:
	          return (
	            (existingChildren =
	              existingChildren.get(
	                null === newChild.key ? newIdx : newChild.key
	              ) || null),
	            updatePortal(returnFiber, existingChildren, newChild, lanes)
	          );
	        case REACT_LAZY_TYPE:
	          var init = newChild._init;
	          newChild = init(newChild._payload);
	          return updateFromMap(
	            existingChildren,
	            returnFiber,
	            newIdx,
	            newChild,
	            lanes
	          );
	      }
	      if (isArrayImpl(newChild) || getIteratorFn(newChild))
	        return (
	          (existingChildren = existingChildren.get(newIdx) || null),
	          updateFragment(returnFiber, existingChildren, newChild, lanes, null)
	        );
	      if ("function" === typeof newChild.then)
	        return updateFromMap(
	          existingChildren,
	          returnFiber,
	          newIdx,
	          unwrapThenable(newChild),
	          lanes
	        );
	      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
	        return updateFromMap(
	          existingChildren,
	          returnFiber,
	          newIdx,
	          readContextDuringReconciliation(returnFiber, newChild),
	          lanes
	        );
	      throwOnInvalidObjectType(returnFiber, newChild);
	    }
	    return null;
	  }
	  function reconcileChildrenArray(
	    returnFiber,
	    currentFirstChild,
	    newChildren,
	    lanes
	  ) {
	    for (
	      var resultingFirstChild = null,
	        previousNewFiber = null,
	        oldFiber = currentFirstChild,
	        newIdx = (currentFirstChild = 0),
	        nextOldFiber = null;
	      null !== oldFiber && newIdx < newChildren.length;
	      newIdx++
	    ) {
	      oldFiber.index > newIdx
	        ? ((nextOldFiber = oldFiber), (oldFiber = null))
	        : (nextOldFiber = oldFiber.sibling);
	      var newFiber = updateSlot(
	        returnFiber,
	        oldFiber,
	        newChildren[newIdx],
	        lanes
	      );
	      if (null === newFiber) {
	        null === oldFiber && (oldFiber = nextOldFiber);
	        break;
	      }
	      shouldTrackSideEffects &&
	        oldFiber &&
	        null === newFiber.alternate &&
	        deleteChild(returnFiber, oldFiber);
	      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
	      null === previousNewFiber
	        ? (resultingFirstChild = newFiber)
	        : (previousNewFiber.sibling = newFiber);
	      previousNewFiber = newFiber;
	      oldFiber = nextOldFiber;
	    }
	    if (newIdx === newChildren.length)
	      return (
	        deleteRemainingChildren(returnFiber, oldFiber),
	        isHydrating && pushTreeFork(returnFiber, newIdx),
	        resultingFirstChild
	      );
	    if (null === oldFiber) {
	      for (; newIdx < newChildren.length; newIdx++)
	        (oldFiber = createChild(returnFiber, newChildren[newIdx], lanes)),
	          null !== oldFiber &&
	            ((currentFirstChild = placeChild(
	              oldFiber,
	              currentFirstChild,
	              newIdx
	            )),
	            null === previousNewFiber
	              ? (resultingFirstChild = oldFiber)
	              : (previousNewFiber.sibling = oldFiber),
	            (previousNewFiber = oldFiber));
	      isHydrating && pushTreeFork(returnFiber, newIdx);
	      return resultingFirstChild;
	    }
	    for (
	      oldFiber = mapRemainingChildren(oldFiber);
	      newIdx < newChildren.length;
	      newIdx++
	    )
	      (nextOldFiber = updateFromMap(
	        oldFiber,
	        returnFiber,
	        newIdx,
	        newChildren[newIdx],
	        lanes
	      )),
	        null !== nextOldFiber &&
	          (shouldTrackSideEffects &&
	            null !== nextOldFiber.alternate &&
	            oldFiber.delete(
	              null === nextOldFiber.key ? newIdx : nextOldFiber.key
	            ),
	          (currentFirstChild = placeChild(
	            nextOldFiber,
	            currentFirstChild,
	            newIdx
	          )),
	          null === previousNewFiber
	            ? (resultingFirstChild = nextOldFiber)
	            : (previousNewFiber.sibling = nextOldFiber),
	          (previousNewFiber = nextOldFiber));
	    shouldTrackSideEffects &&
	      oldFiber.forEach(function (child) {
	        return deleteChild(returnFiber, child);
	      });
	    isHydrating && pushTreeFork(returnFiber, newIdx);
	    return resultingFirstChild;
	  }
	  function reconcileChildrenIterator(
	    returnFiber,
	    currentFirstChild,
	    newChildren,
	    lanes
	  ) {
	    if (null == newChildren) throw Error(formatProdErrorMessage(151));
	    for (
	      var resultingFirstChild = null,
	        previousNewFiber = null,
	        oldFiber = currentFirstChild,
	        newIdx = (currentFirstChild = 0),
	        nextOldFiber = null,
	        step = newChildren.next();
	      null !== oldFiber && !step.done;
	      newIdx++, step = newChildren.next()
	    ) {
	      oldFiber.index > newIdx
	        ? ((nextOldFiber = oldFiber), (oldFiber = null))
	        : (nextOldFiber = oldFiber.sibling);
	      var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
	      if (null === newFiber) {
	        null === oldFiber && (oldFiber = nextOldFiber);
	        break;
	      }
	      shouldTrackSideEffects &&
	        oldFiber &&
	        null === newFiber.alternate &&
	        deleteChild(returnFiber, oldFiber);
	      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
	      null === previousNewFiber
	        ? (resultingFirstChild = newFiber)
	        : (previousNewFiber.sibling = newFiber);
	      previousNewFiber = newFiber;
	      oldFiber = nextOldFiber;
	    }
	    if (step.done)
	      return (
	        deleteRemainingChildren(returnFiber, oldFiber),
	        isHydrating && pushTreeFork(returnFiber, newIdx),
	        resultingFirstChild
	      );
	    if (null === oldFiber) {
	      for (; !step.done; newIdx++, step = newChildren.next())
	        (step = createChild(returnFiber, step.value, lanes)),
	          null !== step &&
	            ((currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
	            null === previousNewFiber
	              ? (resultingFirstChild = step)
	              : (previousNewFiber.sibling = step),
	            (previousNewFiber = step));
	      isHydrating && pushTreeFork(returnFiber, newIdx);
	      return resultingFirstChild;
	    }
	    for (
	      oldFiber = mapRemainingChildren(oldFiber);
	      !step.done;
	      newIdx++, step = newChildren.next()
	    )
	      (step = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes)),
	        null !== step &&
	          (shouldTrackSideEffects &&
	            null !== step.alternate &&
	            oldFiber.delete(null === step.key ? newIdx : step.key),
	          (currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
	          null === previousNewFiber
	            ? (resultingFirstChild = step)
	            : (previousNewFiber.sibling = step),
	          (previousNewFiber = step));
	    shouldTrackSideEffects &&
	      oldFiber.forEach(function (child) {
	        return deleteChild(returnFiber, child);
	      });
	    isHydrating && pushTreeFork(returnFiber, newIdx);
	    return resultingFirstChild;
	  }
	  function reconcileChildFibersImpl(
	    returnFiber,
	    currentFirstChild,
	    newChild,
	    lanes
	  ) {
	    "object" === typeof newChild &&
	      null !== newChild &&
	      newChild.type === REACT_FRAGMENT_TYPE &&
	      null === newChild.key &&
	      (newChild = newChild.props.children);
	    if ("object" === typeof newChild && null !== newChild) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          a: {
	            for (var key = newChild.key; null !== currentFirstChild; ) {
	              if (currentFirstChild.key === key) {
	                key = newChild.type;
	                if (key === REACT_FRAGMENT_TYPE) {
	                  if (7 === currentFirstChild.tag) {
	                    deleteRemainingChildren(
	                      returnFiber,
	                      currentFirstChild.sibling
	                    );
	                    lanes = useFiber(
	                      currentFirstChild,
	                      newChild.props.children
	                    );
	                    lanes.return = returnFiber;
	                    returnFiber = lanes;
	                    break a;
	                  }
	                } else if (
	                  currentFirstChild.elementType === key ||
	                  ("object" === typeof key &&
	                    null !== key &&
	                    key.$$typeof === REACT_LAZY_TYPE &&
	                    resolveLazy(key) === currentFirstChild.type)
	                ) {
	                  deleteRemainingChildren(
	                    returnFiber,
	                    currentFirstChild.sibling
	                  );
	                  lanes = useFiber(currentFirstChild, newChild.props);
	                  coerceRef(lanes, newChild);
	                  lanes.return = returnFiber;
	                  returnFiber = lanes;
	                  break a;
	                }
	                deleteRemainingChildren(returnFiber, currentFirstChild);
	                break;
	              } else deleteChild(returnFiber, currentFirstChild);
	              currentFirstChild = currentFirstChild.sibling;
	            }
	            newChild.type === REACT_FRAGMENT_TYPE
	              ? ((lanes = createFiberFromFragment(
	                  newChild.props.children,
	                  returnFiber.mode,
	                  lanes,
	                  newChild.key
	                )),
	                (lanes.return = returnFiber),
	                (returnFiber = lanes))
	              : ((lanes = createFiberFromTypeAndProps(
	                  newChild.type,
	                  newChild.key,
	                  newChild.props,
	                  null,
	                  returnFiber.mode,
	                  lanes
	                )),
	                coerceRef(lanes, newChild),
	                (lanes.return = returnFiber),
	                (returnFiber = lanes));
	          }
	          return placeSingleChild(returnFiber);
	        case REACT_PORTAL_TYPE:
	          a: {
	            for (key = newChild.key; null !== currentFirstChild; ) {
	              if (currentFirstChild.key === key)
	                if (
	                  4 === currentFirstChild.tag &&
	                  currentFirstChild.stateNode.containerInfo ===
	                    newChild.containerInfo &&
	                  currentFirstChild.stateNode.implementation ===
	                    newChild.implementation
	                ) {
	                  deleteRemainingChildren(
	                    returnFiber,
	                    currentFirstChild.sibling
	                  );
	                  lanes = useFiber(currentFirstChild, newChild.children || []);
	                  lanes.return = returnFiber;
	                  returnFiber = lanes;
	                  break a;
	                } else {
	                  deleteRemainingChildren(returnFiber, currentFirstChild);
	                  break;
	                }
	              else deleteChild(returnFiber, currentFirstChild);
	              currentFirstChild = currentFirstChild.sibling;
	            }
	            lanes = createFiberFromPortal(newChild, returnFiber.mode, lanes);
	            lanes.return = returnFiber;
	            returnFiber = lanes;
	          }
	          return placeSingleChild(returnFiber);
	        case REACT_LAZY_TYPE:
	          return (
	            (key = newChild._init),
	            (newChild = key(newChild._payload)),
	            reconcileChildFibersImpl(
	              returnFiber,
	              currentFirstChild,
	              newChild,
	              lanes
	            )
	          );
	      }
	      if (isArrayImpl(newChild))
	        return reconcileChildrenArray(
	          returnFiber,
	          currentFirstChild,
	          newChild,
	          lanes
	        );
	      if (getIteratorFn(newChild)) {
	        key = getIteratorFn(newChild);
	        if ("function" !== typeof key) throw Error(formatProdErrorMessage(150));
	        newChild = key.call(newChild);
	        return reconcileChildrenIterator(
	          returnFiber,
	          currentFirstChild,
	          newChild,
	          lanes
	        );
	      }
	      if ("function" === typeof newChild.then)
	        return reconcileChildFibersImpl(
	          returnFiber,
	          currentFirstChild,
	          unwrapThenable(newChild),
	          lanes
	        );
	      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
	        return reconcileChildFibersImpl(
	          returnFiber,
	          currentFirstChild,
	          readContextDuringReconciliation(returnFiber, newChild),
	          lanes
	        );
	      throwOnInvalidObjectType(returnFiber, newChild);
	    }
	    return ("string" === typeof newChild && "" !== newChild) ||
	      "number" === typeof newChild ||
	      "bigint" === typeof newChild
	      ? ((newChild = "" + newChild),
	        null !== currentFirstChild && 6 === currentFirstChild.tag
	          ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling),
	            (lanes = useFiber(currentFirstChild, newChild)),
	            (lanes.return = returnFiber),
	            (returnFiber = lanes))
	          : (deleteRemainingChildren(returnFiber, currentFirstChild),
	            (lanes = createFiberFromText(newChild, returnFiber.mode, lanes)),
	            (lanes.return = returnFiber),
	            (returnFiber = lanes)),
	        placeSingleChild(returnFiber))
	      : deleteRemainingChildren(returnFiber, currentFirstChild);
	  }
	  return function (returnFiber, currentFirstChild, newChild, lanes) {
	    try {
	      thenableIndexCounter = 0;
	      var firstChildFiber = reconcileChildFibersImpl(
	        returnFiber,
	        currentFirstChild,
	        newChild,
	        lanes
	      );
	      thenableState = null;
	      return firstChildFiber;
	    } catch (x) {
	      if (x === SuspenseException || x === SuspenseActionException) throw x;
	      var fiber = createFiberImplClass(29, x, null, returnFiber.mode);
	      fiber.lanes = lanes;
	      fiber.return = returnFiber;
	      return fiber;
	    } finally {
	    }
	  };
	}
	var reconcileChildFibers = createChildReconciler(true),
	  mountChildFibers = createChildReconciler(false),
	  suspenseHandlerStackCursor = createCursor(null),
	  shellBoundary = null;
	function pushPrimaryTreeSuspenseHandler(handler) {
	  var current = handler.alternate;
	  push(suspenseStackCursor, suspenseStackCursor.current & 1);
	  push(suspenseHandlerStackCursor, handler);
	  null === shellBoundary &&
	    (null === current || null !== currentTreeHiddenStackCursor.current
	      ? (shellBoundary = handler)
	      : null !== current.memoizedState && (shellBoundary = handler));
	}
	function pushOffscreenSuspenseHandler(fiber) {
	  if (22 === fiber.tag) {
	    if (
	      (push(suspenseStackCursor, suspenseStackCursor.current),
	      push(suspenseHandlerStackCursor, fiber),
	      null === shellBoundary)
	    ) {
	      var current = fiber.alternate;
	      null !== current &&
	        null !== current.memoizedState &&
	        (shellBoundary = fiber);
	    }
	  } else reuseSuspenseHandlerOnStack();
	}
	function reuseSuspenseHandlerOnStack() {
	  push(suspenseStackCursor, suspenseStackCursor.current);
	  push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
	}
	function popSuspenseHandler(fiber) {
	  pop(suspenseHandlerStackCursor);
	  shellBoundary === fiber && (shellBoundary = null);
	  pop(suspenseStackCursor);
	}
	var suspenseStackCursor = createCursor(0);
	function findFirstSuspended(row) {
	  for (var node = row; null !== node; ) {
	    if (13 === node.tag) {
	      var state = node.memoizedState;
	      if (
	        null !== state &&
	        ((state = state.dehydrated),
	        null === state ||
	          "$?" === state.data ||
	          isSuspenseInstanceFallback(state))
	      )
	        return node;
	    } else if (19 === node.tag && void 0 !== node.memoizedProps.revealOrder) {
	      if (0 !== (node.flags & 128)) return node;
	    } else if (null !== node.child) {
	      node.child.return = node;
	      node = node.child;
	      continue;
	    }
	    if (node === row) break;
	    for (; null === node.sibling; ) {
	      if (null === node.return || node.return === row) return null;
	      node = node.return;
	    }
	    node.sibling.return = node.return;
	    node = node.sibling;
	  }
	  return null;
	}
	function applyDerivedStateFromProps(
	  workInProgress,
	  ctor,
	  getDerivedStateFromProps,
	  nextProps
	) {
	  ctor = workInProgress.memoizedState;
	  getDerivedStateFromProps = getDerivedStateFromProps(nextProps, ctor);
	  getDerivedStateFromProps =
	    null === getDerivedStateFromProps || void 0 === getDerivedStateFromProps
	      ? ctor
	      : assign({}, ctor, getDerivedStateFromProps);
	  workInProgress.memoizedState = getDerivedStateFromProps;
	  0 === workInProgress.lanes &&
	    (workInProgress.updateQueue.baseState = getDerivedStateFromProps);
	}
	var classComponentUpdater = {
	  enqueueSetState: function (inst, payload, callback) {
	    inst = inst._reactInternals;
	    var lane = requestUpdateLane(),
	      update = createUpdate(lane);
	    update.payload = payload;
	    void 0 !== callback && null !== callback && (update.callback = callback);
	    payload = enqueueUpdate(inst, update, lane);
	    null !== payload &&
	      (scheduleUpdateOnFiber(payload, inst, lane),
	      entangleTransitions(payload, inst, lane));
	  },
	  enqueueReplaceState: function (inst, payload, callback) {
	    inst = inst._reactInternals;
	    var lane = requestUpdateLane(),
	      update = createUpdate(lane);
	    update.tag = 1;
	    update.payload = payload;
	    void 0 !== callback && null !== callback && (update.callback = callback);
	    payload = enqueueUpdate(inst, update, lane);
	    null !== payload &&
	      (scheduleUpdateOnFiber(payload, inst, lane),
	      entangleTransitions(payload, inst, lane));
	  },
	  enqueueForceUpdate: function (inst, callback) {
	    inst = inst._reactInternals;
	    var lane = requestUpdateLane(),
	      update = createUpdate(lane);
	    update.tag = 2;
	    void 0 !== callback && null !== callback && (update.callback = callback);
	    callback = enqueueUpdate(inst, update, lane);
	    null !== callback &&
	      (scheduleUpdateOnFiber(callback, inst, lane),
	      entangleTransitions(callback, inst, lane));
	  }
	};
	function checkShouldComponentUpdate(
	  workInProgress,
	  ctor,
	  oldProps,
	  newProps,
	  oldState,
	  newState,
	  nextContext
	) {
	  workInProgress = workInProgress.stateNode;
	  return "function" === typeof workInProgress.shouldComponentUpdate
	    ? workInProgress.shouldComponentUpdate(newProps, newState, nextContext)
	    : ctor.prototype && ctor.prototype.isPureReactComponent
	      ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)
	      : true;
	}
	function callComponentWillReceiveProps(
	  workInProgress,
	  instance,
	  newProps,
	  nextContext
	) {
	  workInProgress = instance.state;
	  "function" === typeof instance.componentWillReceiveProps &&
	    instance.componentWillReceiveProps(newProps, nextContext);
	  "function" === typeof instance.UNSAFE_componentWillReceiveProps &&
	    instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
	  instance.state !== workInProgress &&
	    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
	}
	function resolveClassComponentProps(Component, baseProps) {
	  var newProps = baseProps;
	  if ("ref" in baseProps) {
	    newProps = {};
	    for (var propName in baseProps)
	      "ref" !== propName && (newProps[propName] = baseProps[propName]);
	  }
	  if ((Component = Component.defaultProps)) {
	    newProps === baseProps && (newProps = assign({}, newProps));
	    for (var propName$73 in Component)
	      void 0 === newProps[propName$73] &&
	        (newProps[propName$73] = Component[propName$73]);
	  }
	  return newProps;
	}
	var reportGlobalError =
	  "function" === typeof reportError
	    ? reportError
	    : function (error) {
	        if (
	          "object" === typeof window &&
	          "function" === typeof window.ErrorEvent
	        ) {
	          var event = new window.ErrorEvent("error", {
	            bubbles: true,
	            cancelable: true,
	            message:
	              "object" === typeof error &&
	              null !== error &&
	              "string" === typeof error.message
	                ? String(error.message)
	                : String(error),
	            error: error
	          });
	          if (!window.dispatchEvent(event)) return;
	        } else if (
	          "object" === typeof process &&
	          "function" === typeof process.emit
	        ) {
	          process.emit("uncaughtException", error);
	          return;
	        }
	        console.error(error);
	      };
	function defaultOnUncaughtError(error) {
	  reportGlobalError(error);
	}
	function defaultOnCaughtError(error) {
	  console.error(error);
	}
	function defaultOnRecoverableError(error) {
	  reportGlobalError(error);
	}
	function logUncaughtError(root, errorInfo) {
	  try {
	    var onUncaughtError = root.onUncaughtError;
	    onUncaughtError(errorInfo.value, { componentStack: errorInfo.stack });
	  } catch (e$74) {
	    setTimeout(function () {
	      throw e$74;
	    });
	  }
	}
	function logCaughtError(root, boundary, errorInfo) {
	  try {
	    var onCaughtError = root.onCaughtError;
	    onCaughtError(errorInfo.value, {
	      componentStack: errorInfo.stack,
	      errorBoundary: 1 === boundary.tag ? boundary.stateNode : null
	    });
	  } catch (e$75) {
	    setTimeout(function () {
	      throw e$75;
	    });
	  }
	}
	function createRootErrorUpdate(root, errorInfo, lane) {
	  lane = createUpdate(lane);
	  lane.tag = 3;
	  lane.payload = { element: null };
	  lane.callback = function () {
	    logUncaughtError(root, errorInfo);
	  };
	  return lane;
	}
	function createClassErrorUpdate(lane) {
	  lane = createUpdate(lane);
	  lane.tag = 3;
	  return lane;
	}
	function initializeClassErrorUpdate(update, root, fiber, errorInfo) {
	  var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
	  if ("function" === typeof getDerivedStateFromError) {
	    var error = errorInfo.value;
	    update.payload = function () {
	      return getDerivedStateFromError(error);
	    };
	    update.callback = function () {
	      logCaughtError(root, fiber, errorInfo);
	    };
	  }
	  var inst = fiber.stateNode;
	  null !== inst &&
	    "function" === typeof inst.componentDidCatch &&
	    (update.callback = function () {
	      logCaughtError(root, fiber, errorInfo);
	      "function" !== typeof getDerivedStateFromError &&
	        (null === legacyErrorBoundariesThatAlreadyFailed
	          ? (legacyErrorBoundariesThatAlreadyFailed = new Set([this]))
	          : legacyErrorBoundariesThatAlreadyFailed.add(this));
	      var stack = errorInfo.stack;
	      this.componentDidCatch(errorInfo.value, {
	        componentStack: null !== stack ? stack : ""
	      });
	    });
	}
	function throwException(
	  root,
	  returnFiber,
	  sourceFiber,
	  value,
	  rootRenderLanes
	) {
	  sourceFiber.flags |= 32768;
	  if (
	    null !== value &&
	    "object" === typeof value &&
	    "function" === typeof value.then
	  ) {
	    returnFiber = sourceFiber.alternate;
	    null !== returnFiber &&
	      propagateParentContextChanges(
	        returnFiber,
	        sourceFiber,
	        rootRenderLanes,
	        true
	      );
	    sourceFiber = suspenseHandlerStackCursor.current;
	    if (null !== sourceFiber) {
	      switch (sourceFiber.tag) {
	        case 13:
	          return (
	            null === shellBoundary
	              ? renderDidSuspendDelayIfPossible()
	              : null === sourceFiber.alternate &&
	                0 === workInProgressRootExitStatus &&
	                (workInProgressRootExitStatus = 3),
	            (sourceFiber.flags &= -257),
	            (sourceFiber.flags |= 65536),
	            (sourceFiber.lanes = rootRenderLanes),
	            value === noopSuspenseyCommitThenable
	              ? (sourceFiber.flags |= 16384)
	              : ((returnFiber = sourceFiber.updateQueue),
	                null === returnFiber
	                  ? (sourceFiber.updateQueue = new Set([value]))
	                  : returnFiber.add(value),
	                attachPingListener(root, value, rootRenderLanes)),
	            false
	          );
	        case 22:
	          return (
	            (sourceFiber.flags |= 65536),
	            value === noopSuspenseyCommitThenable
	              ? (sourceFiber.flags |= 16384)
	              : ((returnFiber = sourceFiber.updateQueue),
	                null === returnFiber
	                  ? ((returnFiber = {
	                      transitions: null,
	                      markerInstances: null,
	                      retryQueue: new Set([value])
	                    }),
	                    (sourceFiber.updateQueue = returnFiber))
	                  : ((sourceFiber = returnFiber.retryQueue),
	                    null === sourceFiber
	                      ? (returnFiber.retryQueue = new Set([value]))
	                      : sourceFiber.add(value)),
	                attachPingListener(root, value, rootRenderLanes)),
	            false
	          );
	      }
	      throw Error(formatProdErrorMessage(435, sourceFiber.tag));
	    }
	    attachPingListener(root, value, rootRenderLanes);
	    renderDidSuspendDelayIfPossible();
	    return false;
	  }
	  if (isHydrating)
	    return (
	      (returnFiber = suspenseHandlerStackCursor.current),
	      null !== returnFiber
	        ? (0 === (returnFiber.flags & 65536) && (returnFiber.flags |= 256),
	          (returnFiber.flags |= 65536),
	          (returnFiber.lanes = rootRenderLanes),
	          value !== HydrationMismatchException &&
	            ((root = Error(formatProdErrorMessage(422), { cause: value })),
	            queueHydrationError(createCapturedValueAtFiber(root, sourceFiber))))
	        : (value !== HydrationMismatchException &&
	            ((returnFiber = Error(formatProdErrorMessage(423), {
	              cause: value
	            })),
	            queueHydrationError(
	              createCapturedValueAtFiber(returnFiber, sourceFiber)
	            )),
	          (root = root.current.alternate),
	          (root.flags |= 65536),
	          (rootRenderLanes &= -rootRenderLanes),
	          (root.lanes |= rootRenderLanes),
	          (value = createCapturedValueAtFiber(value, sourceFiber)),
	          (rootRenderLanes = createRootErrorUpdate(
	            root.stateNode,
	            value,
	            rootRenderLanes
	          )),
	          enqueueCapturedUpdate(root, rootRenderLanes),
	          4 !== workInProgressRootExitStatus &&
	            (workInProgressRootExitStatus = 2)),
	      false
	    );
	  var wrapperError = Error(formatProdErrorMessage(520), { cause: value });
	  wrapperError = createCapturedValueAtFiber(wrapperError, sourceFiber);
	  null === workInProgressRootConcurrentErrors
	    ? (workInProgressRootConcurrentErrors = [wrapperError])
	    : workInProgressRootConcurrentErrors.push(wrapperError);
	  4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2);
	  if (null === returnFiber) return true;
	  value = createCapturedValueAtFiber(value, sourceFiber);
	  sourceFiber = returnFiber;
	  do {
	    switch (sourceFiber.tag) {
	      case 3:
	        return (
	          (sourceFiber.flags |= 65536),
	          (root = rootRenderLanes & -rootRenderLanes),
	          (sourceFiber.lanes |= root),
	          (root = createRootErrorUpdate(sourceFiber.stateNode, value, root)),
	          enqueueCapturedUpdate(sourceFiber, root),
	          false
	        );
	      case 1:
	        if (
	          ((returnFiber = sourceFiber.type),
	          (wrapperError = sourceFiber.stateNode),
	          0 === (sourceFiber.flags & 128) &&
	            ("function" === typeof returnFiber.getDerivedStateFromError ||
	              (null !== wrapperError &&
	                "function" === typeof wrapperError.componentDidCatch &&
	                (null === legacyErrorBoundariesThatAlreadyFailed ||
	                  !legacyErrorBoundariesThatAlreadyFailed.has(wrapperError)))))
	        )
	          return (
	            (sourceFiber.flags |= 65536),
	            (rootRenderLanes &= -rootRenderLanes),
	            (sourceFiber.lanes |= rootRenderLanes),
	            (rootRenderLanes = createClassErrorUpdate(rootRenderLanes)),
	            initializeClassErrorUpdate(
	              rootRenderLanes,
	              root,
	              sourceFiber,
	              value
	            ),
	            enqueueCapturedUpdate(sourceFiber, rootRenderLanes),
	            false
	          );
	    }
	    sourceFiber = sourceFiber.return;
	  } while (null !== sourceFiber);
	  return false;
	}
	var SelectiveHydrationException = Error(formatProdErrorMessage(461)),
	  didReceiveUpdate = false;
	function reconcileChildren(current, workInProgress, nextChildren, renderLanes) {
	  workInProgress.child =
	    null === current
	      ? mountChildFibers(workInProgress, null, nextChildren, renderLanes)
	      : reconcileChildFibers(
	          workInProgress,
	          current.child,
	          nextChildren,
	          renderLanes
	        );
	}
	function updateForwardRef(
	  current,
	  workInProgress,
	  Component,
	  nextProps,
	  renderLanes
	) {
	  Component = Component.render;
	  var ref = workInProgress.ref;
	  if ("ref" in nextProps) {
	    var propsWithoutRef = {};
	    for (var key in nextProps)
	      "ref" !== key && (propsWithoutRef[key] = nextProps[key]);
	  } else propsWithoutRef = nextProps;
	  prepareToReadContext(workInProgress);
	  nextProps = renderWithHooks(
	    current,
	    workInProgress,
	    Component,
	    propsWithoutRef,
	    ref,
	    renderLanes
	  );
	  key = checkDidRenderIdHook();
	  if (null !== current && !didReceiveUpdate)
	    return (
	      bailoutHooks(current, workInProgress, renderLanes),
	      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
	    );
	  isHydrating && key && pushMaterializedTreeId(workInProgress);
	  workInProgress.flags |= 1;
	  reconcileChildren(current, workInProgress, nextProps, renderLanes);
	  return workInProgress.child;
	}
	function updateMemoComponent(
	  current,
	  workInProgress,
	  Component,
	  nextProps,
	  renderLanes
	) {
	  if (null === current) {
	    var type = Component.type;
	    if (
	      "function" === typeof type &&
	      !shouldConstruct(type) &&
	      void 0 === type.defaultProps &&
	      null === Component.compare
	    )
	      return (
	        (workInProgress.tag = 15),
	        (workInProgress.type = type),
	        updateSimpleMemoComponent(
	          current,
	          workInProgress,
	          type,
	          nextProps,
	          renderLanes
	        )
	      );
	    current = createFiberFromTypeAndProps(
	      Component.type,
	      null,
	      nextProps,
	      workInProgress,
	      workInProgress.mode,
	      renderLanes
	    );
	    current.ref = workInProgress.ref;
	    current.return = workInProgress;
	    return (workInProgress.child = current);
	  }
	  type = current.child;
	  if (!checkScheduledUpdateOrContext(current, renderLanes)) {
	    var prevProps = type.memoizedProps;
	    Component = Component.compare;
	    Component = null !== Component ? Component : shallowEqual;
	    if (Component(prevProps, nextProps) && current.ref === workInProgress.ref)
	      return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
	  }
	  workInProgress.flags |= 1;
	  current = createWorkInProgress(type, nextProps);
	  current.ref = workInProgress.ref;
	  current.return = workInProgress;
	  return (workInProgress.child = current);
	}
	function updateSimpleMemoComponent(
	  current,
	  workInProgress,
	  Component,
	  nextProps,
	  renderLanes
	) {
	  if (null !== current) {
	    var prevProps = current.memoizedProps;
	    if (
	      shallowEqual(prevProps, nextProps) &&
	      current.ref === workInProgress.ref
	    )
	      if (
	        ((didReceiveUpdate = false),
	        (workInProgress.pendingProps = nextProps = prevProps),
	        checkScheduledUpdateOrContext(current, renderLanes))
	      )
	        0 !== (current.flags & 131072) && (didReceiveUpdate = true);
	      else
	        return (
	          (workInProgress.lanes = current.lanes),
	          bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
	        );
	  }
	  return updateFunctionComponent(
	    current,
	    workInProgress,
	    Component,
	    nextProps,
	    renderLanes
	  );
	}
	function updateOffscreenComponent(current, workInProgress, renderLanes) {
	  var nextProps = workInProgress.pendingProps,
	    nextChildren = nextProps.children,
	    prevState = null !== current ? current.memoizedState : null;
	  if ("hidden" === nextProps.mode) {
	    if (0 !== (workInProgress.flags & 128)) {
	      nextProps =
	        null !== prevState ? prevState.baseLanes | renderLanes : renderLanes;
	      if (null !== current) {
	        nextChildren = workInProgress.child = current.child;
	        for (prevState = 0; null !== nextChildren; )
	          (prevState =
	            prevState | nextChildren.lanes | nextChildren.childLanes),
	            (nextChildren = nextChildren.sibling);
	        workInProgress.childLanes = prevState & ~nextProps;
	      } else (workInProgress.childLanes = 0), (workInProgress.child = null);
	      return deferHiddenOffscreenComponent(
	        current,
	        workInProgress,
	        nextProps,
	        renderLanes
	      );
	    }
	    if (0 !== (renderLanes & 536870912))
	      (workInProgress.memoizedState = { baseLanes: 0, cachePool: null }),
	        null !== current &&
	          pushTransition(
	            workInProgress,
	            null !== prevState ? prevState.cachePool : null
	          ),
	        null !== prevState
	          ? pushHiddenContext(workInProgress, prevState)
	          : reuseHiddenContextOnStack(),
	        pushOffscreenSuspenseHandler(workInProgress);
	    else
	      return (
	        (workInProgress.lanes = workInProgress.childLanes = 536870912),
	        deferHiddenOffscreenComponent(
	          current,
	          workInProgress,
	          null !== prevState ? prevState.baseLanes | renderLanes : renderLanes,
	          renderLanes
	        )
	      );
	  } else
	    null !== prevState
	      ? (pushTransition(workInProgress, prevState.cachePool),
	        pushHiddenContext(workInProgress, prevState),
	        reuseSuspenseHandlerOnStack(),
	        (workInProgress.memoizedState = null))
	      : (null !== current && pushTransition(workInProgress, null),
	        reuseHiddenContextOnStack(),
	        reuseSuspenseHandlerOnStack());
	  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
	  return workInProgress.child;
	}
	function deferHiddenOffscreenComponent(
	  current,
	  workInProgress,
	  nextBaseLanes,
	  renderLanes
	) {
	  var JSCompiler_inline_result = peekCacheFromPool();
	  JSCompiler_inline_result =
	    null === JSCompiler_inline_result
	      ? null
	      : { parent: CacheContext._currentValue, pool: JSCompiler_inline_result };
	  workInProgress.memoizedState = {
	    baseLanes: nextBaseLanes,
	    cachePool: JSCompiler_inline_result
	  };
	  null !== current && pushTransition(workInProgress, null);
	  reuseHiddenContextOnStack();
	  pushOffscreenSuspenseHandler(workInProgress);
	  null !== current &&
	    propagateParentContextChanges(current, workInProgress, renderLanes, true);
	  return null;
	}
	function markRef(current, workInProgress) {
	  var ref = workInProgress.ref;
	  if (null === ref)
	    null !== current &&
	      null !== current.ref &&
	      (workInProgress.flags |= 4194816);
	  else {
	    if ("function" !== typeof ref && "object" !== typeof ref)
	      throw Error(formatProdErrorMessage(284));
	    if (null === current || current.ref !== ref)
	      workInProgress.flags |= 4194816;
	  }
	}
	function updateFunctionComponent(
	  current,
	  workInProgress,
	  Component,
	  nextProps,
	  renderLanes
	) {
	  prepareToReadContext(workInProgress);
	  Component = renderWithHooks(
	    current,
	    workInProgress,
	    Component,
	    nextProps,
	    void 0,
	    renderLanes
	  );
	  nextProps = checkDidRenderIdHook();
	  if (null !== current && !didReceiveUpdate)
	    return (
	      bailoutHooks(current, workInProgress, renderLanes),
	      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
	    );
	  isHydrating && nextProps && pushMaterializedTreeId(workInProgress);
	  workInProgress.flags |= 1;
	  reconcileChildren(current, workInProgress, Component, renderLanes);
	  return workInProgress.child;
	}
	function replayFunctionComponent(
	  current,
	  workInProgress,
	  nextProps,
	  Component,
	  secondArg,
	  renderLanes
	) {
	  prepareToReadContext(workInProgress);
	  workInProgress.updateQueue = null;
	  nextProps = renderWithHooksAgain(
	    workInProgress,
	    Component,
	    nextProps,
	    secondArg
	  );
	  finishRenderingHooks(current);
	  Component = checkDidRenderIdHook();
	  if (null !== current && !didReceiveUpdate)
	    return (
	      bailoutHooks(current, workInProgress, renderLanes),
	      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
	    );
	  isHydrating && Component && pushMaterializedTreeId(workInProgress);
	  workInProgress.flags |= 1;
	  reconcileChildren(current, workInProgress, nextProps, renderLanes);
	  return workInProgress.child;
	}
	function updateClassComponent(
	  current,
	  workInProgress,
	  Component,
	  nextProps,
	  renderLanes
	) {
	  prepareToReadContext(workInProgress);
	  if (null === workInProgress.stateNode) {
	    var context = emptyContextObject,
	      contextType = Component.contextType;
	    "object" === typeof contextType &&
	      null !== contextType &&
	      (context = readContext(contextType));
	    context = new Component(nextProps, context);
	    workInProgress.memoizedState =
	      null !== context.state && void 0 !== context.state ? context.state : null;
	    context.updater = classComponentUpdater;
	    workInProgress.stateNode = context;
	    context._reactInternals = workInProgress;
	    context = workInProgress.stateNode;
	    context.props = nextProps;
	    context.state = workInProgress.memoizedState;
	    context.refs = {};
	    initializeUpdateQueue(workInProgress);
	    contextType = Component.contextType;
	    context.context =
	      "object" === typeof contextType && null !== contextType
	        ? readContext(contextType)
	        : emptyContextObject;
	    context.state = workInProgress.memoizedState;
	    contextType = Component.getDerivedStateFromProps;
	    "function" === typeof contextType &&
	      (applyDerivedStateFromProps(
	        workInProgress,
	        Component,
	        contextType,
	        nextProps
	      ),
	      (context.state = workInProgress.memoizedState));
	    "function" === typeof Component.getDerivedStateFromProps ||
	      "function" === typeof context.getSnapshotBeforeUpdate ||
	      ("function" !== typeof context.UNSAFE_componentWillMount &&
	        "function" !== typeof context.componentWillMount) ||
	      ((contextType = context.state),
	      "function" === typeof context.componentWillMount &&
	        context.componentWillMount(),
	      "function" === typeof context.UNSAFE_componentWillMount &&
	        context.UNSAFE_componentWillMount(),
	      contextType !== context.state &&
	        classComponentUpdater.enqueueReplaceState(context, context.state, null),
	      processUpdateQueue(workInProgress, nextProps, context, renderLanes),
	      suspendIfUpdateReadFromEntangledAsyncAction(),
	      (context.state = workInProgress.memoizedState));
	    "function" === typeof context.componentDidMount &&
	      (workInProgress.flags |= 4194308);
	    nextProps = true;
	  } else if (null === current) {
	    context = workInProgress.stateNode;
	    var unresolvedOldProps = workInProgress.memoizedProps,
	      oldProps = resolveClassComponentProps(Component, unresolvedOldProps);
	    context.props = oldProps;
	    var oldContext = context.context,
	      contextType$jscomp$0 = Component.contextType;
	    contextType = emptyContextObject;
	    "object" === typeof contextType$jscomp$0 &&
	      null !== contextType$jscomp$0 &&
	      (contextType = readContext(contextType$jscomp$0));
	    var getDerivedStateFromProps = Component.getDerivedStateFromProps;
	    contextType$jscomp$0 =
	      "function" === typeof getDerivedStateFromProps ||
	      "function" === typeof context.getSnapshotBeforeUpdate;
	    unresolvedOldProps = workInProgress.pendingProps !== unresolvedOldProps;
	    contextType$jscomp$0 ||
	      ("function" !== typeof context.UNSAFE_componentWillReceiveProps &&
	        "function" !== typeof context.componentWillReceiveProps) ||
	      ((unresolvedOldProps || oldContext !== contextType) &&
	        callComponentWillReceiveProps(
	          workInProgress,
	          context,
	          nextProps,
	          contextType
	        ));
	    hasForceUpdate = false;
	    var oldState = workInProgress.memoizedState;
	    context.state = oldState;
	    processUpdateQueue(workInProgress, nextProps, context, renderLanes);
	    suspendIfUpdateReadFromEntangledAsyncAction();
	    oldContext = workInProgress.memoizedState;
	    unresolvedOldProps || oldState !== oldContext || hasForceUpdate
	      ? ("function" === typeof getDerivedStateFromProps &&
	          (applyDerivedStateFromProps(
	            workInProgress,
	            Component,
	            getDerivedStateFromProps,
	            nextProps
	          ),
	          (oldContext = workInProgress.memoizedState)),
	        (oldProps =
	          hasForceUpdate ||
	          checkShouldComponentUpdate(
	            workInProgress,
	            Component,
	            oldProps,
	            nextProps,
	            oldState,
	            oldContext,
	            contextType
	          ))
	          ? (contextType$jscomp$0 ||
	              ("function" !== typeof context.UNSAFE_componentWillMount &&
	                "function" !== typeof context.componentWillMount) ||
	              ("function" === typeof context.componentWillMount &&
	                context.componentWillMount(),
	              "function" === typeof context.UNSAFE_componentWillMount &&
	                context.UNSAFE_componentWillMount()),
	            "function" === typeof context.componentDidMount &&
	              (workInProgress.flags |= 4194308))
	          : ("function" === typeof context.componentDidMount &&
	              (workInProgress.flags |= 4194308),
	            (workInProgress.memoizedProps = nextProps),
	            (workInProgress.memoizedState = oldContext)),
	        (context.props = nextProps),
	        (context.state = oldContext),
	        (context.context = contextType),
	        (nextProps = oldProps))
	      : ("function" === typeof context.componentDidMount &&
	          (workInProgress.flags |= 4194308),
	        (nextProps = false));
	  } else {
	    context = workInProgress.stateNode;
	    cloneUpdateQueue(current, workInProgress);
	    contextType = workInProgress.memoizedProps;
	    contextType$jscomp$0 = resolveClassComponentProps(Component, contextType);
	    context.props = contextType$jscomp$0;
	    getDerivedStateFromProps = workInProgress.pendingProps;
	    oldState = context.context;
	    oldContext = Component.contextType;
	    oldProps = emptyContextObject;
	    "object" === typeof oldContext &&
	      null !== oldContext &&
	      (oldProps = readContext(oldContext));
	    unresolvedOldProps = Component.getDerivedStateFromProps;
	    (oldContext =
	      "function" === typeof unresolvedOldProps ||
	      "function" === typeof context.getSnapshotBeforeUpdate) ||
	      ("function" !== typeof context.UNSAFE_componentWillReceiveProps &&
	        "function" !== typeof context.componentWillReceiveProps) ||
	      ((contextType !== getDerivedStateFromProps || oldState !== oldProps) &&
	        callComponentWillReceiveProps(
	          workInProgress,
	          context,
	          nextProps,
	          oldProps
	        ));
	    hasForceUpdate = false;
	    oldState = workInProgress.memoizedState;
	    context.state = oldState;
	    processUpdateQueue(workInProgress, nextProps, context, renderLanes);
	    suspendIfUpdateReadFromEntangledAsyncAction();
	    var newState = workInProgress.memoizedState;
	    contextType !== getDerivedStateFromProps ||
	    oldState !== newState ||
	    hasForceUpdate ||
	    (null !== current &&
	      null !== current.dependencies &&
	      checkIfContextChanged(current.dependencies))
	      ? ("function" === typeof unresolvedOldProps &&
	          (applyDerivedStateFromProps(
	            workInProgress,
	            Component,
	            unresolvedOldProps,
	            nextProps
	          ),
	          (newState = workInProgress.memoizedState)),
	        (contextType$jscomp$0 =
	          hasForceUpdate ||
	          checkShouldComponentUpdate(
	            workInProgress,
	            Component,
	            contextType$jscomp$0,
	            nextProps,
	            oldState,
	            newState,
	            oldProps
	          ) ||
	          (null !== current &&
	            null !== current.dependencies &&
	            checkIfContextChanged(current.dependencies)))
	          ? (oldContext ||
	              ("function" !== typeof context.UNSAFE_componentWillUpdate &&
	                "function" !== typeof context.componentWillUpdate) ||
	              ("function" === typeof context.componentWillUpdate &&
	                context.componentWillUpdate(nextProps, newState, oldProps),
	              "function" === typeof context.UNSAFE_componentWillUpdate &&
	                context.UNSAFE_componentWillUpdate(
	                  nextProps,
	                  newState,
	                  oldProps
	                )),
	            "function" === typeof context.componentDidUpdate &&
	              (workInProgress.flags |= 4),
	            "function" === typeof context.getSnapshotBeforeUpdate &&
	              (workInProgress.flags |= 1024))
	          : ("function" !== typeof context.componentDidUpdate ||
	              (contextType === current.memoizedProps &&
	                oldState === current.memoizedState) ||
	              (workInProgress.flags |= 4),
	            "function" !== typeof context.getSnapshotBeforeUpdate ||
	              (contextType === current.memoizedProps &&
	                oldState === current.memoizedState) ||
	              (workInProgress.flags |= 1024),
	            (workInProgress.memoizedProps = nextProps),
	            (workInProgress.memoizedState = newState)),
	        (context.props = nextProps),
	        (context.state = newState),
	        (context.context = oldProps),
	        (nextProps = contextType$jscomp$0))
	      : ("function" !== typeof context.componentDidUpdate ||
	          (contextType === current.memoizedProps &&
	            oldState === current.memoizedState) ||
	          (workInProgress.flags |= 4),
	        "function" !== typeof context.getSnapshotBeforeUpdate ||
	          (contextType === current.memoizedProps &&
	            oldState === current.memoizedState) ||
	          (workInProgress.flags |= 1024),
	        (nextProps = false));
	  }
	  context = nextProps;
	  markRef(current, workInProgress);
	  nextProps = 0 !== (workInProgress.flags & 128);
	  context || nextProps
	    ? ((context = workInProgress.stateNode),
	      (Component =
	        nextProps && "function" !== typeof Component.getDerivedStateFromError
	          ? null
	          : context.render()),
	      (workInProgress.flags |= 1),
	      null !== current && nextProps
	        ? ((workInProgress.child = reconcileChildFibers(
	            workInProgress,
	            current.child,
	            null,
	            renderLanes
	          )),
	          (workInProgress.child = reconcileChildFibers(
	            workInProgress,
	            null,
	            Component,
	            renderLanes
	          )))
	        : reconcileChildren(current, workInProgress, Component, renderLanes),
	      (workInProgress.memoizedState = context.state),
	      (current = workInProgress.child))
	    : (current = bailoutOnAlreadyFinishedWork(
	        current,
	        workInProgress,
	        renderLanes
	      ));
	  return current;
	}
	function mountHostRootWithoutHydrating(
	  current,
	  workInProgress,
	  nextChildren,
	  renderLanes
	) {
	  resetHydrationState();
	  workInProgress.flags |= 256;
	  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
	  return workInProgress.child;
	}
	var SUSPENDED_MARKER = {
	  dehydrated: null,
	  treeContext: null,
	  retryLane: 0,
	  hydrationErrors: null
	};
	function mountSuspenseOffscreenState(renderLanes) {
	  return { baseLanes: renderLanes, cachePool: getSuspendedCache() };
	}
	function getRemainingWorkInPrimaryTree(
	  current,
	  primaryTreeDidDefer,
	  renderLanes
	) {
	  current = null !== current ? current.childLanes & ~renderLanes : 0;
	  primaryTreeDidDefer && (current |= workInProgressDeferredLane);
	  return current;
	}
	function updateSuspenseComponent(current, workInProgress, renderLanes) {
	  var nextProps = workInProgress.pendingProps,
	    showFallback = false,
	    didSuspend = 0 !== (workInProgress.flags & 128),
	    JSCompiler_temp;
	  (JSCompiler_temp = didSuspend) ||
	    (JSCompiler_temp =
	      null !== current && null === current.memoizedState
	        ? false
	        : 0 !== (suspenseStackCursor.current & 2));
	  JSCompiler_temp && ((showFallback = true), (workInProgress.flags &= -129));
	  JSCompiler_temp = 0 !== (workInProgress.flags & 32);
	  workInProgress.flags &= -33;
	  if (null === current) {
	    if (isHydrating) {
	      showFallback
	        ? pushPrimaryTreeSuspenseHandler(workInProgress)
	        : reuseSuspenseHandlerOnStack();
	      if (isHydrating) {
	        var nextInstance = nextHydratableInstance,
	          JSCompiler_temp$jscomp$0;
	        if ((JSCompiler_temp$jscomp$0 = nextInstance)) {
	          c: {
	            JSCompiler_temp$jscomp$0 = nextInstance;
	            for (
	              nextInstance = rootOrSingletonContext;
	              8 !== JSCompiler_temp$jscomp$0.nodeType;

	            ) {
	              if (!nextInstance) {
	                nextInstance = null;
	                break c;
	              }
	              JSCompiler_temp$jscomp$0 = getNextHydratable(
	                JSCompiler_temp$jscomp$0.nextSibling
	              );
	              if (null === JSCompiler_temp$jscomp$0) {
	                nextInstance = null;
	                break c;
	              }
	            }
	            nextInstance = JSCompiler_temp$jscomp$0;
	          }
	          null !== nextInstance
	            ? ((workInProgress.memoizedState = {
	                dehydrated: nextInstance,
	                treeContext:
	                  null !== treeContextProvider
	                    ? { id: treeContextId, overflow: treeContextOverflow }
	                    : null,
	                retryLane: 536870912,
	                hydrationErrors: null
	              }),
	              (JSCompiler_temp$jscomp$0 = createFiberImplClass(
	                18,
	                null,
	                null,
	                0
	              )),
	              (JSCompiler_temp$jscomp$0.stateNode = nextInstance),
	              (JSCompiler_temp$jscomp$0.return = workInProgress),
	              (workInProgress.child = JSCompiler_temp$jscomp$0),
	              (hydrationParentFiber = workInProgress),
	              (nextHydratableInstance = null),
	              (JSCompiler_temp$jscomp$0 = true))
	            : (JSCompiler_temp$jscomp$0 = false);
	        }
	        JSCompiler_temp$jscomp$0 || throwOnHydrationMismatch(workInProgress);
	      }
	      nextInstance = workInProgress.memoizedState;
	      if (
	        null !== nextInstance &&
	        ((nextInstance = nextInstance.dehydrated), null !== nextInstance)
	      )
	        return (
	          isSuspenseInstanceFallback(nextInstance)
	            ? (workInProgress.lanes = 32)
	            : (workInProgress.lanes = 536870912),
	          null
	        );
	      popSuspenseHandler(workInProgress);
	    }
	    nextInstance = nextProps.children;
	    nextProps = nextProps.fallback;
	    if (showFallback)
	      return (
	        reuseSuspenseHandlerOnStack(),
	        (showFallback = workInProgress.mode),
	        (nextInstance = mountWorkInProgressOffscreenFiber(
	          { mode: "hidden", children: nextInstance },
	          showFallback
	        )),
	        (nextProps = createFiberFromFragment(
	          nextProps,
	          showFallback,
	          renderLanes,
	          null
	        )),
	        (nextInstance.return = workInProgress),
	        (nextProps.return = workInProgress),
	        (nextInstance.sibling = nextProps),
	        (workInProgress.child = nextInstance),
	        (showFallback = workInProgress.child),
	        (showFallback.memoizedState = mountSuspenseOffscreenState(renderLanes)),
	        (showFallback.childLanes = getRemainingWorkInPrimaryTree(
	          current,
	          JSCompiler_temp,
	          renderLanes
	        )),
	        (workInProgress.memoizedState = SUSPENDED_MARKER),
	        nextProps
	      );
	    pushPrimaryTreeSuspenseHandler(workInProgress);
	    return mountSuspensePrimaryChildren(workInProgress, nextInstance);
	  }
	  JSCompiler_temp$jscomp$0 = current.memoizedState;
	  if (
	    null !== JSCompiler_temp$jscomp$0 &&
	    ((nextInstance = JSCompiler_temp$jscomp$0.dehydrated),
	    null !== nextInstance)
	  ) {
	    if (didSuspend)
	      workInProgress.flags & 256
	        ? (pushPrimaryTreeSuspenseHandler(workInProgress),
	          (workInProgress.flags &= -257),
	          (workInProgress = retrySuspenseComponentWithoutHydrating(
	            current,
	            workInProgress,
	            renderLanes
	          )))
	        : null !== workInProgress.memoizedState
	          ? (reuseSuspenseHandlerOnStack(),
	            (workInProgress.child = current.child),
	            (workInProgress.flags |= 128),
	            (workInProgress = null))
	          : (reuseSuspenseHandlerOnStack(),
	            (showFallback = nextProps.fallback),
	            (nextInstance = workInProgress.mode),
	            (nextProps = mountWorkInProgressOffscreenFiber(
	              { mode: "visible", children: nextProps.children },
	              nextInstance
	            )),
	            (showFallback = createFiberFromFragment(
	              showFallback,
	              nextInstance,
	              renderLanes,
	              null
	            )),
	            (showFallback.flags |= 2),
	            (nextProps.return = workInProgress),
	            (showFallback.return = workInProgress),
	            (nextProps.sibling = showFallback),
	            (workInProgress.child = nextProps),
	            reconcileChildFibers(
	              workInProgress,
	              current.child,
	              null,
	              renderLanes
	            ),
	            (nextProps = workInProgress.child),
	            (nextProps.memoizedState =
	              mountSuspenseOffscreenState(renderLanes)),
	            (nextProps.childLanes = getRemainingWorkInPrimaryTree(
	              current,
	              JSCompiler_temp,
	              renderLanes
	            )),
	            (workInProgress.memoizedState = SUSPENDED_MARKER),
	            (workInProgress = showFallback));
	    else if (
	      (pushPrimaryTreeSuspenseHandler(workInProgress),
	      isSuspenseInstanceFallback(nextInstance))
	    ) {
	      JSCompiler_temp =
	        nextInstance.nextSibling && nextInstance.nextSibling.dataset;
	      if (JSCompiler_temp) var digest = JSCompiler_temp.dgst;
	      JSCompiler_temp = digest;
	      nextProps = Error(formatProdErrorMessage(419));
	      nextProps.stack = "";
	      nextProps.digest = JSCompiler_temp;
	      queueHydrationError({ value: nextProps, source: null, stack: null });
	      workInProgress = retrySuspenseComponentWithoutHydrating(
	        current,
	        workInProgress,
	        renderLanes
	      );
	    } else if (
	      (didReceiveUpdate ||
	        propagateParentContextChanges(current, workInProgress, renderLanes, false),
	      (JSCompiler_temp = 0 !== (renderLanes & current.childLanes)),
	      didReceiveUpdate || JSCompiler_temp)
	    ) {
	      JSCompiler_temp = workInProgressRoot;
	      if (
	        null !== JSCompiler_temp &&
	        ((nextProps = renderLanes & -renderLanes),
	        (nextProps =
	          0 !== (nextProps & 42)
	            ? 1
	            : getBumpedLaneForHydrationByLane(nextProps)),
	        (nextProps =
	          0 !== (nextProps & (JSCompiler_temp.suspendedLanes | renderLanes))
	            ? 0
	            : nextProps),
	        0 !== nextProps && nextProps !== JSCompiler_temp$jscomp$0.retryLane)
	      )
	        throw (
	          ((JSCompiler_temp$jscomp$0.retryLane = nextProps),
	          enqueueConcurrentRenderForLane(current, nextProps),
	          scheduleUpdateOnFiber(JSCompiler_temp, current, nextProps),
	          SelectiveHydrationException)
	        );
	      "$?" === nextInstance.data || renderDidSuspendDelayIfPossible();
	      workInProgress = retrySuspenseComponentWithoutHydrating(
	        current,
	        workInProgress,
	        renderLanes
	      );
	    } else
	      "$?" === nextInstance.data
	        ? ((workInProgress.flags |= 192),
	          (workInProgress.child = current.child),
	          (workInProgress = null))
	        : ((current = JSCompiler_temp$jscomp$0.treeContext),
	          (nextHydratableInstance = getNextHydratable(
	            nextInstance.nextSibling
	          )),
	          (hydrationParentFiber = workInProgress),
	          (isHydrating = true),
	          (hydrationErrors = null),
	          (rootOrSingletonContext = false),
	          null !== current &&
	            ((idStack[idStackIndex++] = treeContextId),
	            (idStack[idStackIndex++] = treeContextOverflow),
	            (idStack[idStackIndex++] = treeContextProvider),
	            (treeContextId = current.id),
	            (treeContextOverflow = current.overflow),
	            (treeContextProvider = workInProgress)),
	          (workInProgress = mountSuspensePrimaryChildren(
	            workInProgress,
	            nextProps.children
	          )),
	          (workInProgress.flags |= 4096));
	    return workInProgress;
	  }
	  if (showFallback)
	    return (
	      reuseSuspenseHandlerOnStack(),
	      (showFallback = nextProps.fallback),
	      (nextInstance = workInProgress.mode),
	      (JSCompiler_temp$jscomp$0 = current.child),
	      (digest = JSCompiler_temp$jscomp$0.sibling),
	      (nextProps = createWorkInProgress(JSCompiler_temp$jscomp$0, {
	        mode: "hidden",
	        children: nextProps.children
	      })),
	      (nextProps.subtreeFlags =
	        JSCompiler_temp$jscomp$0.subtreeFlags & 65011712),
	      null !== digest
	        ? (showFallback = createWorkInProgress(digest, showFallback))
	        : ((showFallback = createFiberFromFragment(
	            showFallback,
	            nextInstance,
	            renderLanes,
	            null
	          )),
	          (showFallback.flags |= 2)),
	      (showFallback.return = workInProgress),
	      (nextProps.return = workInProgress),
	      (nextProps.sibling = showFallback),
	      (workInProgress.child = nextProps),
	      (nextProps = showFallback),
	      (showFallback = workInProgress.child),
	      (nextInstance = current.child.memoizedState),
	      null === nextInstance
	        ? (nextInstance = mountSuspenseOffscreenState(renderLanes))
	        : ((JSCompiler_temp$jscomp$0 = nextInstance.cachePool),
	          null !== JSCompiler_temp$jscomp$0
	            ? ((digest = CacheContext._currentValue),
	              (JSCompiler_temp$jscomp$0 =
	                JSCompiler_temp$jscomp$0.parent !== digest
	                  ? { parent: digest, pool: digest }
	                  : JSCompiler_temp$jscomp$0))
	            : (JSCompiler_temp$jscomp$0 = getSuspendedCache()),
	          (nextInstance = {
	            baseLanes: nextInstance.baseLanes | renderLanes,
	            cachePool: JSCompiler_temp$jscomp$0
	          })),
	      (showFallback.memoizedState = nextInstance),
	      (showFallback.childLanes = getRemainingWorkInPrimaryTree(
	        current,
	        JSCompiler_temp,
	        renderLanes
	      )),
	      (workInProgress.memoizedState = SUSPENDED_MARKER),
	      nextProps
	    );
	  pushPrimaryTreeSuspenseHandler(workInProgress);
	  renderLanes = current.child;
	  current = renderLanes.sibling;
	  renderLanes = createWorkInProgress(renderLanes, {
	    mode: "visible",
	    children: nextProps.children
	  });
	  renderLanes.return = workInProgress;
	  renderLanes.sibling = null;
	  null !== current &&
	    ((JSCompiler_temp = workInProgress.deletions),
	    null === JSCompiler_temp
	      ? ((workInProgress.deletions = [current]), (workInProgress.flags |= 16))
	      : JSCompiler_temp.push(current));
	  workInProgress.child = renderLanes;
	  workInProgress.memoizedState = null;
	  return renderLanes;
	}
	function mountSuspensePrimaryChildren(workInProgress, primaryChildren) {
	  primaryChildren = mountWorkInProgressOffscreenFiber(
	    { mode: "visible", children: primaryChildren },
	    workInProgress.mode
	  );
	  primaryChildren.return = workInProgress;
	  return (workInProgress.child = primaryChildren);
	}
	function mountWorkInProgressOffscreenFiber(offscreenProps, mode) {
	  offscreenProps = createFiberImplClass(22, offscreenProps, null, mode);
	  offscreenProps.lanes = 0;
	  offscreenProps.stateNode = {
	    _visibility: 1,
	    _pendingMarkers: null,
	    _retryCache: null,
	    _transitions: null
	  };
	  return offscreenProps;
	}
	function retrySuspenseComponentWithoutHydrating(
	  current,
	  workInProgress,
	  renderLanes
	) {
	  reconcileChildFibers(workInProgress, current.child, null, renderLanes);
	  current = mountSuspensePrimaryChildren(
	    workInProgress,
	    workInProgress.pendingProps.children
	  );
	  current.flags |= 2;
	  workInProgress.memoizedState = null;
	  return current;
	}
	function scheduleSuspenseWorkOnFiber(fiber, renderLanes, propagationRoot) {
	  fiber.lanes |= renderLanes;
	  var alternate = fiber.alternate;
	  null !== alternate && (alternate.lanes |= renderLanes);
	  scheduleContextWorkOnParentPath(fiber.return, renderLanes, propagationRoot);
	}
	function initSuspenseListRenderState(
	  workInProgress,
	  isBackwards,
	  tail,
	  lastContentRow,
	  tailMode
	) {
	  var renderState = workInProgress.memoizedState;
	  null === renderState
	    ? (workInProgress.memoizedState = {
	        isBackwards: isBackwards,
	        rendering: null,
	        renderingStartTime: 0,
	        last: lastContentRow,
	        tail: tail,
	        tailMode: tailMode
	      })
	    : ((renderState.isBackwards = isBackwards),
	      (renderState.rendering = null),
	      (renderState.renderingStartTime = 0),
	      (renderState.last = lastContentRow),
	      (renderState.tail = tail),
	      (renderState.tailMode = tailMode));
	}
	function updateSuspenseListComponent(current, workInProgress, renderLanes) {
	  var nextProps = workInProgress.pendingProps,
	    revealOrder = nextProps.revealOrder,
	    tailMode = nextProps.tail;
	  reconcileChildren(current, workInProgress, nextProps.children, renderLanes);
	  nextProps = suspenseStackCursor.current;
	  if (0 !== (nextProps & 2))
	    (nextProps = (nextProps & 1) | 2), (workInProgress.flags |= 128);
	  else {
	    if (null !== current && 0 !== (current.flags & 128))
	      a: for (current = workInProgress.child; null !== current; ) {
	        if (13 === current.tag)
	          null !== current.memoizedState &&
	            scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
	        else if (19 === current.tag)
	          scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
	        else if (null !== current.child) {
	          current.child.return = current;
	          current = current.child;
	          continue;
	        }
	        if (current === workInProgress) break a;
	        for (; null === current.sibling; ) {
	          if (null === current.return || current.return === workInProgress)
	            break a;
	          current = current.return;
	        }
	        current.sibling.return = current.return;
	        current = current.sibling;
	      }
	    nextProps &= 1;
	  }
	  push(suspenseStackCursor, nextProps);
	  switch (revealOrder) {
	    case "forwards":
	      renderLanes = workInProgress.child;
	      for (revealOrder = null; null !== renderLanes; )
	        (current = renderLanes.alternate),
	          null !== current &&
	            null === findFirstSuspended(current) &&
	            (revealOrder = renderLanes),
	          (renderLanes = renderLanes.sibling);
	      renderLanes = revealOrder;
	      null === renderLanes
	        ? ((revealOrder = workInProgress.child), (workInProgress.child = null))
	        : ((revealOrder = renderLanes.sibling), (renderLanes.sibling = null));
	      initSuspenseListRenderState(
	        workInProgress,
	        false,
	        revealOrder,
	        renderLanes,
	        tailMode
	      );
	      break;
	    case "backwards":
	      renderLanes = null;
	      revealOrder = workInProgress.child;
	      for (workInProgress.child = null; null !== revealOrder; ) {
	        current = revealOrder.alternate;
	        if (null !== current && null === findFirstSuspended(current)) {
	          workInProgress.child = revealOrder;
	          break;
	        }
	        current = revealOrder.sibling;
	        revealOrder.sibling = renderLanes;
	        renderLanes = revealOrder;
	        revealOrder = current;
	      }
	      initSuspenseListRenderState(
	        workInProgress,
	        true,
	        renderLanes,
	        null,
	        tailMode
	      );
	      break;
	    case "together":
	      initSuspenseListRenderState(workInProgress, false, null, null, void 0);
	      break;
	    default:
	      workInProgress.memoizedState = null;
	  }
	  return workInProgress.child;
	}
	function bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes) {
	  null !== current && (workInProgress.dependencies = current.dependencies);
	  workInProgressRootSkippedLanes |= workInProgress.lanes;
	  if (0 === (renderLanes & workInProgress.childLanes))
	    if (null !== current) {
	      if (
	        (propagateParentContextChanges(
	          current,
	          workInProgress,
	          renderLanes,
	          false
	        ),
	        0 === (renderLanes & workInProgress.childLanes))
	      )
	        return null;
	    } else return null;
	  if (null !== current && workInProgress.child !== current.child)
	    throw Error(formatProdErrorMessage(153));
	  if (null !== workInProgress.child) {
	    current = workInProgress.child;
	    renderLanes = createWorkInProgress(current, current.pendingProps);
	    workInProgress.child = renderLanes;
	    for (renderLanes.return = workInProgress; null !== current.sibling; )
	      (current = current.sibling),
	        (renderLanes = renderLanes.sibling =
	          createWorkInProgress(current, current.pendingProps)),
	        (renderLanes.return = workInProgress);
	    renderLanes.sibling = null;
	  }
	  return workInProgress.child;
	}
	function checkScheduledUpdateOrContext(current, renderLanes) {
	  if (0 !== (current.lanes & renderLanes)) return true;
	  current = current.dependencies;
	  return null !== current && checkIfContextChanged(current) ? true : false;
	}
	function attemptEarlyBailoutIfNoScheduledUpdate(
	  current,
	  workInProgress,
	  renderLanes
	) {
	  switch (workInProgress.tag) {
	    case 3:
	      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
	      pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
	      resetHydrationState();
	      break;
	    case 27:
	    case 5:
	      pushHostContext(workInProgress);
	      break;
	    case 4:
	      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
	      break;
	    case 10:
	      pushProvider(
	        workInProgress,
	        workInProgress.type,
	        workInProgress.memoizedProps.value
	      );
	      break;
	    case 13:
	      var state = workInProgress.memoizedState;
	      if (null !== state) {
	        if (null !== state.dehydrated)
	          return (
	            pushPrimaryTreeSuspenseHandler(workInProgress),
	            (workInProgress.flags |= 128),
	            null
	          );
	        if (0 !== (renderLanes & workInProgress.child.childLanes))
	          return updateSuspenseComponent(current, workInProgress, renderLanes);
	        pushPrimaryTreeSuspenseHandler(workInProgress);
	        current = bailoutOnAlreadyFinishedWork(
	          current,
	          workInProgress,
	          renderLanes
	        );
	        return null !== current ? current.sibling : null;
	      }
	      pushPrimaryTreeSuspenseHandler(workInProgress);
	      break;
	    case 19:
	      var didSuspendBefore = 0 !== (current.flags & 128);
	      state = 0 !== (renderLanes & workInProgress.childLanes);
	      state ||
	        (propagateParentContextChanges(
	          current,
	          workInProgress,
	          renderLanes,
	          false
	        ),
	        (state = 0 !== (renderLanes & workInProgress.childLanes)));
	      if (didSuspendBefore) {
	        if (state)
	          return updateSuspenseListComponent(
	            current,
	            workInProgress,
	            renderLanes
	          );
	        workInProgress.flags |= 128;
	      }
	      didSuspendBefore = workInProgress.memoizedState;
	      null !== didSuspendBefore &&
	        ((didSuspendBefore.rendering = null),
	        (didSuspendBefore.tail = null),
	        (didSuspendBefore.lastEffect = null));
	      push(suspenseStackCursor, suspenseStackCursor.current);
	      if (state) break;
	      else return null;
	    case 22:
	    case 23:
	      return (
	        (workInProgress.lanes = 0),
	        updateOffscreenComponent(current, workInProgress, renderLanes)
	      );
	    case 24:
	      pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
	  }
	  return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
	}
	function beginWork(current, workInProgress, renderLanes) {
	  if (null !== current)
	    if (current.memoizedProps !== workInProgress.pendingProps)
	      didReceiveUpdate = true;
	    else {
	      if (
	        !checkScheduledUpdateOrContext(current, renderLanes) &&
	        0 === (workInProgress.flags & 128)
	      )
	        return (
	          (didReceiveUpdate = false),
	          attemptEarlyBailoutIfNoScheduledUpdate(
	            current,
	            workInProgress,
	            renderLanes
	          )
	        );
	      didReceiveUpdate = 0 !== (current.flags & 131072) ? true : false;
	    }
	  else
	    (didReceiveUpdate = false),
	      isHydrating &&
	        0 !== (workInProgress.flags & 1048576) &&
	        pushTreeId(workInProgress, treeForkCount, workInProgress.index);
	  workInProgress.lanes = 0;
	  switch (workInProgress.tag) {
	    case 16:
	      a: {
	        current = workInProgress.pendingProps;
	        var lazyComponent = workInProgress.elementType,
	          init = lazyComponent._init;
	        lazyComponent = init(lazyComponent._payload);
	        workInProgress.type = lazyComponent;
	        if ("function" === typeof lazyComponent)
	          shouldConstruct(lazyComponent)
	            ? ((current = resolveClassComponentProps(lazyComponent, current)),
	              (workInProgress.tag = 1),
	              (workInProgress = updateClassComponent(
	                null,
	                workInProgress,
	                lazyComponent,
	                current,
	                renderLanes
	              )))
	            : ((workInProgress.tag = 0),
	              (workInProgress = updateFunctionComponent(
	                null,
	                workInProgress,
	                lazyComponent,
	                current,
	                renderLanes
	              )));
	        else {
	          if (void 0 !== lazyComponent && null !== lazyComponent)
	            if (
	              ((init = lazyComponent.$$typeof), init === REACT_FORWARD_REF_TYPE)
	            ) {
	              workInProgress.tag = 11;
	              workInProgress = updateForwardRef(
	                null,
	                workInProgress,
	                lazyComponent,
	                current,
	                renderLanes
	              );
	              break a;
	            } else if (init === REACT_MEMO_TYPE) {
	              workInProgress.tag = 14;
	              workInProgress = updateMemoComponent(
	                null,
	                workInProgress,
	                lazyComponent,
	                current,
	                renderLanes
	              );
	              break a;
	            }
	          workInProgress =
	            getComponentNameFromType(lazyComponent) || lazyComponent;
	          throw Error(formatProdErrorMessage(306, workInProgress, ""));
	        }
	      }
	      return workInProgress;
	    case 0:
	      return updateFunctionComponent(
	        current,
	        workInProgress,
	        workInProgress.type,
	        workInProgress.pendingProps,
	        renderLanes
	      );
	    case 1:
	      return (
	        (lazyComponent = workInProgress.type),
	        (init = resolveClassComponentProps(
	          lazyComponent,
	          workInProgress.pendingProps
	        )),
	        updateClassComponent(
	          current,
	          workInProgress,
	          lazyComponent,
	          init,
	          renderLanes
	        )
	      );
	    case 3:
	      a: {
	        pushHostContainer(
	          workInProgress,
	          workInProgress.stateNode.containerInfo
	        );
	        if (null === current) throw Error(formatProdErrorMessage(387));
	        lazyComponent = workInProgress.pendingProps;
	        var prevState = workInProgress.memoizedState;
	        init = prevState.element;
	        cloneUpdateQueue(current, workInProgress);
	        processUpdateQueue(workInProgress, lazyComponent, null, renderLanes);
	        var nextState = workInProgress.memoizedState;
	        lazyComponent = nextState.cache;
	        pushProvider(workInProgress, CacheContext, lazyComponent);
	        lazyComponent !== prevState.cache &&
	          propagateContextChanges(
	            workInProgress,
	            [CacheContext],
	            renderLanes,
	            true
	          );
	        suspendIfUpdateReadFromEntangledAsyncAction();
	        lazyComponent = nextState.element;
	        if (prevState.isDehydrated)
	          if (
	            ((prevState = {
	              element: lazyComponent,
	              isDehydrated: false,
	              cache: nextState.cache
	            }),
	            (workInProgress.updateQueue.baseState = prevState),
	            (workInProgress.memoizedState = prevState),
	            workInProgress.flags & 256)
	          ) {
	            workInProgress = mountHostRootWithoutHydrating(
	              current,
	              workInProgress,
	              lazyComponent,
	              renderLanes
	            );
	            break a;
	          } else if (lazyComponent !== init) {
	            init = createCapturedValueAtFiber(
	              Error(formatProdErrorMessage(424)),
	              workInProgress
	            );
	            queueHydrationError(init);
	            workInProgress = mountHostRootWithoutHydrating(
	              current,
	              workInProgress,
	              lazyComponent,
	              renderLanes
	            );
	            break a;
	          } else {
	            current = workInProgress.stateNode.containerInfo;
	            switch (current.nodeType) {
	              case 9:
	                current = current.body;
	                break;
	              default:
	                current =
	                  "HTML" === current.nodeName
	                    ? current.ownerDocument.body
	                    : current;
	            }
	            nextHydratableInstance = getNextHydratable(current.firstChild);
	            hydrationParentFiber = workInProgress;
	            isHydrating = true;
	            hydrationErrors = null;
	            rootOrSingletonContext = true;
	            renderLanes = mountChildFibers(
	              workInProgress,
	              null,
	              lazyComponent,
	              renderLanes
	            );
	            for (workInProgress.child = renderLanes; renderLanes; )
	              (renderLanes.flags = (renderLanes.flags & -3) | 4096),
	                (renderLanes = renderLanes.sibling);
	          }
	        else {
	          resetHydrationState();
	          if (lazyComponent === init) {
	            workInProgress = bailoutOnAlreadyFinishedWork(
	              current,
	              workInProgress,
	              renderLanes
	            );
	            break a;
	          }
	          reconcileChildren(
	            current,
	            workInProgress,
	            lazyComponent,
	            renderLanes
	          );
	        }
	        workInProgress = workInProgress.child;
	      }
	      return workInProgress;
	    case 26:
	      return (
	        markRef(current, workInProgress),
	        null === current
	          ? (renderLanes = getResource(
	              workInProgress.type,
	              null,
	              workInProgress.pendingProps,
	              null
	            ))
	            ? (workInProgress.memoizedState = renderLanes)
	            : isHydrating ||
	              ((renderLanes = workInProgress.type),
	              (current = workInProgress.pendingProps),
	              (lazyComponent = getOwnerDocumentFromRootContainer(
	                rootInstanceStackCursor.current
	              ).createElement(renderLanes)),
	              (lazyComponent[internalInstanceKey] = workInProgress),
	              (lazyComponent[internalPropsKey] = current),
	              setInitialProperties(lazyComponent, renderLanes, current),
	              markNodeAsHoistable(lazyComponent),
	              (workInProgress.stateNode = lazyComponent))
	          : (workInProgress.memoizedState = getResource(
	              workInProgress.type,
	              current.memoizedProps,
	              workInProgress.pendingProps,
	              current.memoizedState
	            )),
	        null
	      );
	    case 27:
	      return (
	        pushHostContext(workInProgress),
	        null === current &&
	          isHydrating &&
	          ((lazyComponent = workInProgress.stateNode =
	            resolveSingletonInstance(
	              workInProgress.type,
	              workInProgress.pendingProps,
	              rootInstanceStackCursor.current
	            )),
	          (hydrationParentFiber = workInProgress),
	          (rootOrSingletonContext = true),
	          (init = nextHydratableInstance),
	          isSingletonScope(workInProgress.type)
	            ? ((previousHydratableOnEnteringScopedSingleton = init),
	              (nextHydratableInstance = getNextHydratable(
	                lazyComponent.firstChild
	              )))
	            : (nextHydratableInstance = init)),
	        reconcileChildren(
	          current,
	          workInProgress,
	          workInProgress.pendingProps.children,
	          renderLanes
	        ),
	        markRef(current, workInProgress),
	        null === current && (workInProgress.flags |= 4194304),
	        workInProgress.child
	      );
	    case 5:
	      if (null === current && isHydrating) {
	        if ((init = lazyComponent = nextHydratableInstance))
	          (lazyComponent = canHydrateInstance(
	            lazyComponent,
	            workInProgress.type,
	            workInProgress.pendingProps,
	            rootOrSingletonContext
	          )),
	            null !== lazyComponent
	              ? ((workInProgress.stateNode = lazyComponent),
	                (hydrationParentFiber = workInProgress),
	                (nextHydratableInstance = getNextHydratable(
	                  lazyComponent.firstChild
	                )),
	                (rootOrSingletonContext = false),
	                (init = true))
	              : (init = false);
	        init || throwOnHydrationMismatch(workInProgress);
	      }
	      pushHostContext(workInProgress);
	      init = workInProgress.type;
	      prevState = workInProgress.pendingProps;
	      nextState = null !== current ? current.memoizedProps : null;
	      lazyComponent = prevState.children;
	      shouldSetTextContent(init, prevState)
	        ? (lazyComponent = null)
	        : null !== nextState &&
	          shouldSetTextContent(init, nextState) &&
	          (workInProgress.flags |= 32);
	      null !== workInProgress.memoizedState &&
	        ((init = renderWithHooks(
	          current,
	          workInProgress,
	          TransitionAwareHostComponent,
	          null,
	          null,
	          renderLanes
	        )),
	        (HostTransitionContext._currentValue = init));
	      markRef(current, workInProgress);
	      reconcileChildren(current, workInProgress, lazyComponent, renderLanes);
	      return workInProgress.child;
	    case 6:
	      if (null === current && isHydrating) {
	        if ((current = renderLanes = nextHydratableInstance))
	          (renderLanes = canHydrateTextInstance(
	            renderLanes,
	            workInProgress.pendingProps,
	            rootOrSingletonContext
	          )),
	            null !== renderLanes
	              ? ((workInProgress.stateNode = renderLanes),
	                (hydrationParentFiber = workInProgress),
	                (nextHydratableInstance = null),
	                (current = true))
	              : (current = false);
	        current || throwOnHydrationMismatch(workInProgress);
	      }
	      return null;
	    case 13:
	      return updateSuspenseComponent(current, workInProgress, renderLanes);
	    case 4:
	      return (
	        pushHostContainer(
	          workInProgress,
	          workInProgress.stateNode.containerInfo
	        ),
	        (lazyComponent = workInProgress.pendingProps),
	        null === current
	          ? (workInProgress.child = reconcileChildFibers(
	              workInProgress,
	              null,
	              lazyComponent,
	              renderLanes
	            ))
	          : reconcileChildren(
	              current,
	              workInProgress,
	              lazyComponent,
	              renderLanes
	            ),
	        workInProgress.child
	      );
	    case 11:
	      return updateForwardRef(
	        current,
	        workInProgress,
	        workInProgress.type,
	        workInProgress.pendingProps,
	        renderLanes
	      );
	    case 7:
	      return (
	        reconcileChildren(
	          current,
	          workInProgress,
	          workInProgress.pendingProps,
	          renderLanes
	        ),
	        workInProgress.child
	      );
	    case 8:
	      return (
	        reconcileChildren(
	          current,
	          workInProgress,
	          workInProgress.pendingProps.children,
	          renderLanes
	        ),
	        workInProgress.child
	      );
	    case 12:
	      return (
	        reconcileChildren(
	          current,
	          workInProgress,
	          workInProgress.pendingProps.children,
	          renderLanes
	        ),
	        workInProgress.child
	      );
	    case 10:
	      return (
	        (lazyComponent = workInProgress.pendingProps),
	        pushProvider(workInProgress, workInProgress.type, lazyComponent.value),
	        reconcileChildren(
	          current,
	          workInProgress,
	          lazyComponent.children,
	          renderLanes
	        ),
	        workInProgress.child
	      );
	    case 9:
	      return (
	        (init = workInProgress.type._context),
	        (lazyComponent = workInProgress.pendingProps.children),
	        prepareToReadContext(workInProgress),
	        (init = readContext(init)),
	        (lazyComponent = lazyComponent(init)),
	        (workInProgress.flags |= 1),
	        reconcileChildren(current, workInProgress, lazyComponent, renderLanes),
	        workInProgress.child
	      );
	    case 14:
	      return updateMemoComponent(
	        current,
	        workInProgress,
	        workInProgress.type,
	        workInProgress.pendingProps,
	        renderLanes
	      );
	    case 15:
	      return updateSimpleMemoComponent(
	        current,
	        workInProgress,
	        workInProgress.type,
	        workInProgress.pendingProps,
	        renderLanes
	      );
	    case 19:
	      return updateSuspenseListComponent(current, workInProgress, renderLanes);
	    case 31:
	      return (
	        (lazyComponent = workInProgress.pendingProps),
	        (renderLanes = workInProgress.mode),
	        (lazyComponent = {
	          mode: lazyComponent.mode,
	          children: lazyComponent.children
	        }),
	        null === current
	          ? ((renderLanes = mountWorkInProgressOffscreenFiber(
	              lazyComponent,
	              renderLanes
	            )),
	            (renderLanes.ref = workInProgress.ref),
	            (workInProgress.child = renderLanes),
	            (renderLanes.return = workInProgress),
	            (workInProgress = renderLanes))
	          : ((renderLanes = createWorkInProgress(current.child, lazyComponent)),
	            (renderLanes.ref = workInProgress.ref),
	            (workInProgress.child = renderLanes),
	            (renderLanes.return = workInProgress),
	            (workInProgress = renderLanes)),
	        workInProgress
	      );
	    case 22:
	      return updateOffscreenComponent(current, workInProgress, renderLanes);
	    case 24:
	      return (
	        prepareToReadContext(workInProgress),
	        (lazyComponent = readContext(CacheContext)),
	        null === current
	          ? ((init = peekCacheFromPool()),
	            null === init &&
	              ((init = workInProgressRoot),
	              (prevState = createCache()),
	              (init.pooledCache = prevState),
	              prevState.refCount++,
	              null !== prevState && (init.pooledCacheLanes |= renderLanes),
	              (init = prevState)),
	            (workInProgress.memoizedState = {
	              parent: lazyComponent,
	              cache: init
	            }),
	            initializeUpdateQueue(workInProgress),
	            pushProvider(workInProgress, CacheContext, init))
	          : (0 !== (current.lanes & renderLanes) &&
	              (cloneUpdateQueue(current, workInProgress),
	              processUpdateQueue(workInProgress, null, null, renderLanes),
	              suspendIfUpdateReadFromEntangledAsyncAction()),
	            (init = current.memoizedState),
	            (prevState = workInProgress.memoizedState),
	            init.parent !== lazyComponent
	              ? ((init = { parent: lazyComponent, cache: lazyComponent }),
	                (workInProgress.memoizedState = init),
	                0 === workInProgress.lanes &&
	                  (workInProgress.memoizedState =
	                    workInProgress.updateQueue.baseState =
	                      init),
	                pushProvider(workInProgress, CacheContext, lazyComponent))
	              : ((lazyComponent = prevState.cache),
	                pushProvider(workInProgress, CacheContext, lazyComponent),
	                lazyComponent !== init.cache &&
	                  propagateContextChanges(
	                    workInProgress,
	                    [CacheContext],
	                    renderLanes,
	                    true
	                  ))),
	        reconcileChildren(
	          current,
	          workInProgress,
	          workInProgress.pendingProps.children,
	          renderLanes
	        ),
	        workInProgress.child
	      );
	    case 29:
	      throw workInProgress.pendingProps;
	  }
	  throw Error(formatProdErrorMessage(156, workInProgress.tag));
	}
	function markUpdate(workInProgress) {
	  workInProgress.flags |= 4;
	}
	function preloadResourceAndSuspendIfNeeded(workInProgress, resource) {
	  if ("stylesheet" !== resource.type || 0 !== (resource.state.loading & 4))
	    workInProgress.flags &= -16777217;
	  else if (((workInProgress.flags |= 16777216), !preloadResource(resource))) {
	    resource = suspenseHandlerStackCursor.current;
	    if (
	      null !== resource &&
	      ((workInProgressRootRenderLanes & 4194048) ===
	      workInProgressRootRenderLanes
	        ? null !== shellBoundary
	        : ((workInProgressRootRenderLanes & 62914560) !==
	            workInProgressRootRenderLanes &&
	            0 === (workInProgressRootRenderLanes & 536870912)) ||
	          resource !== shellBoundary)
	    )
	      throw (
	        ((suspendedThenable = noopSuspenseyCommitThenable),
	        SuspenseyCommitException)
	      );
	    workInProgress.flags |= 8192;
	  }
	}
	function scheduleRetryEffect(workInProgress, retryQueue) {
	  null !== retryQueue && (workInProgress.flags |= 4);
	  workInProgress.flags & 16384 &&
	    ((retryQueue =
	      22 !== workInProgress.tag ? claimNextRetryLane() : 536870912),
	    (workInProgress.lanes |= retryQueue),
	    (workInProgressSuspendedRetryLanes |= retryQueue));
	}
	function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
	  if (!isHydrating)
	    switch (renderState.tailMode) {
	      case "hidden":
	        hasRenderedATailFallback = renderState.tail;
	        for (var lastTailNode = null; null !== hasRenderedATailFallback; )
	          null !== hasRenderedATailFallback.alternate &&
	            (lastTailNode = hasRenderedATailFallback),
	            (hasRenderedATailFallback = hasRenderedATailFallback.sibling);
	        null === lastTailNode
	          ? (renderState.tail = null)
	          : (lastTailNode.sibling = null);
	        break;
	      case "collapsed":
	        lastTailNode = renderState.tail;
	        for (var lastTailNode$113 = null; null !== lastTailNode; )
	          null !== lastTailNode.alternate && (lastTailNode$113 = lastTailNode),
	            (lastTailNode = lastTailNode.sibling);
	        null === lastTailNode$113
	          ? hasRenderedATailFallback || null === renderState.tail
	            ? (renderState.tail = null)
	            : (renderState.tail.sibling = null)
	          : (lastTailNode$113.sibling = null);
	    }
	}
	function bubbleProperties(completedWork) {
	  var didBailout =
	      null !== completedWork.alternate &&
	      completedWork.alternate.child === completedWork.child,
	    newChildLanes = 0,
	    subtreeFlags = 0;
	  if (didBailout)
	    for (var child$114 = completedWork.child; null !== child$114; )
	      (newChildLanes |= child$114.lanes | child$114.childLanes),
	        (subtreeFlags |= child$114.subtreeFlags & 65011712),
	        (subtreeFlags |= child$114.flags & 65011712),
	        (child$114.return = completedWork),
	        (child$114 = child$114.sibling);
	  else
	    for (child$114 = completedWork.child; null !== child$114; )
	      (newChildLanes |= child$114.lanes | child$114.childLanes),
	        (subtreeFlags |= child$114.subtreeFlags),
	        (subtreeFlags |= child$114.flags),
	        (child$114.return = completedWork),
	        (child$114 = child$114.sibling);
	  completedWork.subtreeFlags |= subtreeFlags;
	  completedWork.childLanes = newChildLanes;
	  return didBailout;
	}
	function completeWork(current, workInProgress, renderLanes) {
	  var newProps = workInProgress.pendingProps;
	  popTreeContext(workInProgress);
	  switch (workInProgress.tag) {
	    case 31:
	    case 16:
	    case 15:
	    case 0:
	    case 11:
	    case 7:
	    case 8:
	    case 12:
	    case 9:
	    case 14:
	      return bubbleProperties(workInProgress), null;
	    case 1:
	      return bubbleProperties(workInProgress), null;
	    case 3:
	      renderLanes = workInProgress.stateNode;
	      newProps = null;
	      null !== current && (newProps = current.memoizedState.cache);
	      workInProgress.memoizedState.cache !== newProps &&
	        (workInProgress.flags |= 2048);
	      popProvider(CacheContext);
	      popHostContainer();
	      renderLanes.pendingContext &&
	        ((renderLanes.context = renderLanes.pendingContext),
	        (renderLanes.pendingContext = null));
	      if (null === current || null === current.child)
	        popHydrationState(workInProgress)
	          ? markUpdate(workInProgress)
	          : null === current ||
	            (current.memoizedState.isDehydrated &&
	              0 === (workInProgress.flags & 256)) ||
	            ((workInProgress.flags |= 1024),
	            upgradeHydrationErrorsToRecoverable());
	      bubbleProperties(workInProgress);
	      return null;
	    case 26:
	      return (
	        (renderLanes = workInProgress.memoizedState),
	        null === current
	          ? (markUpdate(workInProgress),
	            null !== renderLanes
	              ? (bubbleProperties(workInProgress),
	                preloadResourceAndSuspendIfNeeded(workInProgress, renderLanes))
	              : (bubbleProperties(workInProgress),
	                (workInProgress.flags &= -16777217)))
	          : renderLanes
	            ? renderLanes !== current.memoizedState
	              ? (markUpdate(workInProgress),
	                bubbleProperties(workInProgress),
	                preloadResourceAndSuspendIfNeeded(workInProgress, renderLanes))
	              : (bubbleProperties(workInProgress),
	                (workInProgress.flags &= -16777217))
	            : (current.memoizedProps !== newProps && markUpdate(workInProgress),
	              bubbleProperties(workInProgress),
	              (workInProgress.flags &= -16777217)),
	        null
	      );
	    case 27:
	      popHostContext(workInProgress);
	      renderLanes = rootInstanceStackCursor.current;
	      var type = workInProgress.type;
	      if (null !== current && null != workInProgress.stateNode)
	        current.memoizedProps !== newProps && markUpdate(workInProgress);
	      else {
	        if (!newProps) {
	          if (null === workInProgress.stateNode)
	            throw Error(formatProdErrorMessage(166));
	          bubbleProperties(workInProgress);
	          return null;
	        }
	        current = contextStackCursor.current;
	        popHydrationState(workInProgress)
	          ? prepareToHydrateHostInstance(workInProgress)
	          : ((current = resolveSingletonInstance(type, newProps, renderLanes)),
	            (workInProgress.stateNode = current),
	            markUpdate(workInProgress));
	      }
	      bubbleProperties(workInProgress);
	      return null;
	    case 5:
	      popHostContext(workInProgress);
	      renderLanes = workInProgress.type;
	      if (null !== current && null != workInProgress.stateNode)
	        current.memoizedProps !== newProps && markUpdate(workInProgress);
	      else {
	        if (!newProps) {
	          if (null === workInProgress.stateNode)
	            throw Error(formatProdErrorMessage(166));
	          bubbleProperties(workInProgress);
	          return null;
	        }
	        current = contextStackCursor.current;
	        if (popHydrationState(workInProgress))
	          prepareToHydrateHostInstance(workInProgress);
	        else {
	          type = getOwnerDocumentFromRootContainer(
	            rootInstanceStackCursor.current
	          );
	          switch (current) {
	            case 1:
	              current = type.createElementNS(
	                "http://www.w3.org/2000/svg",
	                renderLanes
	              );
	              break;
	            case 2:
	              current = type.createElementNS(
	                "http://www.w3.org/1998/Math/MathML",
	                renderLanes
	              );
	              break;
	            default:
	              switch (renderLanes) {
	                case "svg":
	                  current = type.createElementNS(
	                    "http://www.w3.org/2000/svg",
	                    renderLanes
	                  );
	                  break;
	                case "math":
	                  current = type.createElementNS(
	                    "http://www.w3.org/1998/Math/MathML",
	                    renderLanes
	                  );
	                  break;
	                case "script":
	                  current = type.createElement("div");
	                  current.innerHTML = "<script>\x3c/script>";
	                  current = current.removeChild(current.firstChild);
	                  break;
	                case "select":
	                  current =
	                    "string" === typeof newProps.is
	                      ? type.createElement("select", { is: newProps.is })
	                      : type.createElement("select");
	                  newProps.multiple
	                    ? (current.multiple = true)
	                    : newProps.size && (current.size = newProps.size);
	                  break;
	                default:
	                  current =
	                    "string" === typeof newProps.is
	                      ? type.createElement(renderLanes, { is: newProps.is })
	                      : type.createElement(renderLanes);
	              }
	          }
	          current[internalInstanceKey] = workInProgress;
	          current[internalPropsKey] = newProps;
	          a: for (type = workInProgress.child; null !== type; ) {
	            if (5 === type.tag || 6 === type.tag)
	              current.appendChild(type.stateNode);
	            else if (4 !== type.tag && 27 !== type.tag && null !== type.child) {
	              type.child.return = type;
	              type = type.child;
	              continue;
	            }
	            if (type === workInProgress) break a;
	            for (; null === type.sibling; ) {
	              if (null === type.return || type.return === workInProgress)
	                break a;
	              type = type.return;
	            }
	            type.sibling.return = type.return;
	            type = type.sibling;
	          }
	          workInProgress.stateNode = current;
	          a: switch (
	            (setInitialProperties(current, renderLanes, newProps), renderLanes)
	          ) {
	            case "button":
	            case "input":
	            case "select":
	            case "textarea":
	              current = !!newProps.autoFocus;
	              break a;
	            case "img":
	              current = true;
	              break a;
	            default:
	              current = false;
	          }
	          current && markUpdate(workInProgress);
	        }
	      }
	      bubbleProperties(workInProgress);
	      workInProgress.flags &= -16777217;
	      return null;
	    case 6:
	      if (current && null != workInProgress.stateNode)
	        current.memoizedProps !== newProps && markUpdate(workInProgress);
	      else {
	        if ("string" !== typeof newProps && null === workInProgress.stateNode)
	          throw Error(formatProdErrorMessage(166));
	        current = rootInstanceStackCursor.current;
	        if (popHydrationState(workInProgress)) {
	          current = workInProgress.stateNode;
	          renderLanes = workInProgress.memoizedProps;
	          newProps = null;
	          type = hydrationParentFiber;
	          if (null !== type)
	            switch (type.tag) {
	              case 27:
	              case 5:
	                newProps = type.memoizedProps;
	            }
	          current[internalInstanceKey] = workInProgress;
	          current =
	            current.nodeValue === renderLanes ||
	            (null !== newProps && true === newProps.suppressHydrationWarning) ||
	            checkForUnmatchedText(current.nodeValue, renderLanes)
	              ? true
	              : false;
	          current || throwOnHydrationMismatch(workInProgress);
	        } else
	          (current =
	            getOwnerDocumentFromRootContainer(current).createTextNode(
	              newProps
	            )),
	            (current[internalInstanceKey] = workInProgress),
	            (workInProgress.stateNode = current);
	      }
	      bubbleProperties(workInProgress);
	      return null;
	    case 13:
	      newProps = workInProgress.memoizedState;
	      if (
	        null === current ||
	        (null !== current.memoizedState &&
	          null !== current.memoizedState.dehydrated)
	      ) {
	        type = popHydrationState(workInProgress);
	        if (null !== newProps && null !== newProps.dehydrated) {
	          if (null === current) {
	            if (!type) throw Error(formatProdErrorMessage(318));
	            type = workInProgress.memoizedState;
	            type = null !== type ? type.dehydrated : null;
	            if (!type) throw Error(formatProdErrorMessage(317));
	            type[internalInstanceKey] = workInProgress;
	          } else
	            resetHydrationState(),
	              0 === (workInProgress.flags & 128) &&
	                (workInProgress.memoizedState = null),
	              (workInProgress.flags |= 4);
	          bubbleProperties(workInProgress);
	          type = false;
	        } else
	          (type = upgradeHydrationErrorsToRecoverable()),
	            null !== current &&
	              null !== current.memoizedState &&
	              (current.memoizedState.hydrationErrors = type),
	            (type = true);
	        if (!type) {
	          if (workInProgress.flags & 256)
	            return popSuspenseHandler(workInProgress), workInProgress;
	          popSuspenseHandler(workInProgress);
	          return null;
	        }
	      }
	      popSuspenseHandler(workInProgress);
	      if (0 !== (workInProgress.flags & 128))
	        return (workInProgress.lanes = renderLanes), workInProgress;
	      renderLanes = null !== newProps;
	      current = null !== current && null !== current.memoizedState;
	      if (renderLanes) {
	        newProps = workInProgress.child;
	        type = null;
	        null !== newProps.alternate &&
	          null !== newProps.alternate.memoizedState &&
	          null !== newProps.alternate.memoizedState.cachePool &&
	          (type = newProps.alternate.memoizedState.cachePool.pool);
	        var cache$127 = null;
	        null !== newProps.memoizedState &&
	          null !== newProps.memoizedState.cachePool &&
	          (cache$127 = newProps.memoizedState.cachePool.pool);
	        cache$127 !== type && (newProps.flags |= 2048);
	      }
	      renderLanes !== current &&
	        renderLanes &&
	        (workInProgress.child.flags |= 8192);
	      scheduleRetryEffect(workInProgress, workInProgress.updateQueue);
	      bubbleProperties(workInProgress);
	      return null;
	    case 4:
	      return (
	        popHostContainer(),
	        null === current &&
	          listenToAllSupportedEvents(workInProgress.stateNode.containerInfo),
	        bubbleProperties(workInProgress),
	        null
	      );
	    case 10:
	      return (
	        popProvider(workInProgress.type), bubbleProperties(workInProgress), null
	      );
	    case 19:
	      pop(suspenseStackCursor);
	      type = workInProgress.memoizedState;
	      if (null === type) return bubbleProperties(workInProgress), null;
	      newProps = 0 !== (workInProgress.flags & 128);
	      cache$127 = type.rendering;
	      if (null === cache$127)
	        if (newProps) cutOffTailIfNeeded(type, false);
	        else {
	          if (
	            0 !== workInProgressRootExitStatus ||
	            (null !== current && 0 !== (current.flags & 128))
	          )
	            for (current = workInProgress.child; null !== current; ) {
	              cache$127 = findFirstSuspended(current);
	              if (null !== cache$127) {
	                workInProgress.flags |= 128;
	                cutOffTailIfNeeded(type, false);
	                current = cache$127.updateQueue;
	                workInProgress.updateQueue = current;
	                scheduleRetryEffect(workInProgress, current);
	                workInProgress.subtreeFlags = 0;
	                current = renderLanes;
	                for (renderLanes = workInProgress.child; null !== renderLanes; )
	                  resetWorkInProgress(renderLanes, current),
	                    (renderLanes = renderLanes.sibling);
	                push(
	                  suspenseStackCursor,
	                  (suspenseStackCursor.current & 1) | 2
	                );
	                return workInProgress.child;
	              }
	              current = current.sibling;
	            }
	          null !== type.tail &&
	            now() > workInProgressRootRenderTargetTime &&
	            ((workInProgress.flags |= 128),
	            (newProps = true),
	            cutOffTailIfNeeded(type, false),
	            (workInProgress.lanes = 4194304));
	        }
	      else {
	        if (!newProps)
	          if (((current = findFirstSuspended(cache$127)), null !== current)) {
	            if (
	              ((workInProgress.flags |= 128),
	              (newProps = true),
	              (current = current.updateQueue),
	              (workInProgress.updateQueue = current),
	              scheduleRetryEffect(workInProgress, current),
	              cutOffTailIfNeeded(type, true),
	              null === type.tail &&
	                "hidden" === type.tailMode &&
	                !cache$127.alternate &&
	                !isHydrating)
	            )
	              return bubbleProperties(workInProgress), null;
	          } else
	            2 * now() - type.renderingStartTime >
	              workInProgressRootRenderTargetTime &&
	              536870912 !== renderLanes &&
	              ((workInProgress.flags |= 128),
	              (newProps = true),
	              cutOffTailIfNeeded(type, false),
	              (workInProgress.lanes = 4194304));
	        type.isBackwards
	          ? ((cache$127.sibling = workInProgress.child),
	            (workInProgress.child = cache$127))
	          : ((current = type.last),
	            null !== current
	              ? (current.sibling = cache$127)
	              : (workInProgress.child = cache$127),
	            (type.last = cache$127));
	      }
	      if (null !== type.tail)
	        return (
	          (workInProgress = type.tail),
	          (type.rendering = workInProgress),
	          (type.tail = workInProgress.sibling),
	          (type.renderingStartTime = now()),
	          (workInProgress.sibling = null),
	          (current = suspenseStackCursor.current),
	          push(suspenseStackCursor, newProps ? (current & 1) | 2 : current & 1),
	          workInProgress
	        );
	      bubbleProperties(workInProgress);
	      return null;
	    case 22:
	    case 23:
	      return (
	        popSuspenseHandler(workInProgress),
	        popHiddenContext(),
	        (newProps = null !== workInProgress.memoizedState),
	        null !== current
	          ? (null !== current.memoizedState) !== newProps &&
	            (workInProgress.flags |= 8192)
	          : newProps && (workInProgress.flags |= 8192),
	        newProps
	          ? 0 !== (renderLanes & 536870912) &&
	            0 === (workInProgress.flags & 128) &&
	            (bubbleProperties(workInProgress),
	            workInProgress.subtreeFlags & 6 && (workInProgress.flags |= 8192))
	          : bubbleProperties(workInProgress),
	        (renderLanes = workInProgress.updateQueue),
	        null !== renderLanes &&
	          scheduleRetryEffect(workInProgress, renderLanes.retryQueue),
	        (renderLanes = null),
	        null !== current &&
	          null !== current.memoizedState &&
	          null !== current.memoizedState.cachePool &&
	          (renderLanes = current.memoizedState.cachePool.pool),
	        (newProps = null),
	        null !== workInProgress.memoizedState &&
	          null !== workInProgress.memoizedState.cachePool &&
	          (newProps = workInProgress.memoizedState.cachePool.pool),
	        newProps !== renderLanes && (workInProgress.flags |= 2048),
	        null !== current && pop(resumedCache),
	        null
	      );
	    case 24:
	      return (
	        (renderLanes = null),
	        null !== current && (renderLanes = current.memoizedState.cache),
	        workInProgress.memoizedState.cache !== renderLanes &&
	          (workInProgress.flags |= 2048),
	        popProvider(CacheContext),
	        bubbleProperties(workInProgress),
	        null
	      );
	    case 25:
	      return null;
	    case 30:
	      return null;
	  }
	  throw Error(formatProdErrorMessage(156, workInProgress.tag));
	}
	function unwindWork(current, workInProgress) {
	  popTreeContext(workInProgress);
	  switch (workInProgress.tag) {
	    case 1:
	      return (
	        (current = workInProgress.flags),
	        current & 65536
	          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
	          : null
	      );
	    case 3:
	      return (
	        popProvider(CacheContext),
	        popHostContainer(),
	        (current = workInProgress.flags),
	        0 !== (current & 65536) && 0 === (current & 128)
	          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
	          : null
	      );
	    case 26:
	    case 27:
	    case 5:
	      return popHostContext(workInProgress), null;
	    case 13:
	      popSuspenseHandler(workInProgress);
	      current = workInProgress.memoizedState;
	      if (null !== current && null !== current.dehydrated) {
	        if (null === workInProgress.alternate)
	          throw Error(formatProdErrorMessage(340));
	        resetHydrationState();
	      }
	      current = workInProgress.flags;
	      return current & 65536
	        ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
	        : null;
	    case 19:
	      return pop(suspenseStackCursor), null;
	    case 4:
	      return popHostContainer(), null;
	    case 10:
	      return popProvider(workInProgress.type), null;
	    case 22:
	    case 23:
	      return (
	        popSuspenseHandler(workInProgress),
	        popHiddenContext(),
	        null !== current && pop(resumedCache),
	        (current = workInProgress.flags),
	        current & 65536
	          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
	          : null
	      );
	    case 24:
	      return popProvider(CacheContext), null;
	    case 25:
	      return null;
	    default:
	      return null;
	  }
	}
	function unwindInterruptedWork(current, interruptedWork) {
	  popTreeContext(interruptedWork);
	  switch (interruptedWork.tag) {
	    case 3:
	      popProvider(CacheContext);
	      popHostContainer();
	      break;
	    case 26:
	    case 27:
	    case 5:
	      popHostContext(interruptedWork);
	      break;
	    case 4:
	      popHostContainer();
	      break;
	    case 13:
	      popSuspenseHandler(interruptedWork);
	      break;
	    case 19:
	      pop(suspenseStackCursor);
	      break;
	    case 10:
	      popProvider(interruptedWork.type);
	      break;
	    case 22:
	    case 23:
	      popSuspenseHandler(interruptedWork);
	      popHiddenContext();
	      null !== current && pop(resumedCache);
	      break;
	    case 24:
	      popProvider(CacheContext);
	  }
	}
	function commitHookEffectListMount(flags, finishedWork) {
	  try {
	    var updateQueue = finishedWork.updateQueue,
	      lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
	    if (null !== lastEffect) {
	      var firstEffect = lastEffect.next;
	      updateQueue = firstEffect;
	      do {
	        if ((updateQueue.tag & flags) === flags) {
	          lastEffect = void 0;
	          var create = updateQueue.create,
	            inst = updateQueue.inst;
	          lastEffect = create();
	          inst.destroy = lastEffect;
	        }
	        updateQueue = updateQueue.next;
	      } while (updateQueue !== firstEffect);
	    }
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	function commitHookEffectListUnmount(
	  flags,
	  finishedWork,
	  nearestMountedAncestor$jscomp$0
	) {
	  try {
	    var updateQueue = finishedWork.updateQueue,
	      lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
	    if (null !== lastEffect) {
	      var firstEffect = lastEffect.next;
	      updateQueue = firstEffect;
	      do {
	        if ((updateQueue.tag & flags) === flags) {
	          var inst = updateQueue.inst,
	            destroy = inst.destroy;
	          if (void 0 !== destroy) {
	            inst.destroy = void 0;
	            lastEffect = finishedWork;
	            var nearestMountedAncestor = nearestMountedAncestor$jscomp$0,
	              destroy_ = destroy;
	            try {
	              destroy_();
	            } catch (error) {
	              captureCommitPhaseError(
	                lastEffect,
	                nearestMountedAncestor,
	                error
	              );
	            }
	          }
	        }
	        updateQueue = updateQueue.next;
	      } while (updateQueue !== firstEffect);
	    }
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	function commitClassCallbacks(finishedWork) {
	  var updateQueue = finishedWork.updateQueue;
	  if (null !== updateQueue) {
	    var instance = finishedWork.stateNode;
	    try {
	      commitCallbacks(updateQueue, instance);
	    } catch (error) {
	      captureCommitPhaseError(finishedWork, finishedWork.return, error);
	    }
	  }
	}
	function safelyCallComponentWillUnmount(
	  current,
	  nearestMountedAncestor,
	  instance
	) {
	  instance.props = resolveClassComponentProps(
	    current.type,
	    current.memoizedProps
	  );
	  instance.state = current.memoizedState;
	  try {
	    instance.componentWillUnmount();
	  } catch (error) {
	    captureCommitPhaseError(current, nearestMountedAncestor, error);
	  }
	}
	function safelyAttachRef(current, nearestMountedAncestor) {
	  try {
	    var ref = current.ref;
	    if (null !== ref) {
	      switch (current.tag) {
	        case 26:
	        case 27:
	        case 5:
	          var instanceToUse = current.stateNode;
	          break;
	        case 30:
	          instanceToUse = current.stateNode;
	          break;
	        default:
	          instanceToUse = current.stateNode;
	      }
	      "function" === typeof ref
	        ? (current.refCleanup = ref(instanceToUse))
	        : (ref.current = instanceToUse);
	    }
	  } catch (error) {
	    captureCommitPhaseError(current, nearestMountedAncestor, error);
	  }
	}
	function safelyDetachRef(current, nearestMountedAncestor) {
	  var ref = current.ref,
	    refCleanup = current.refCleanup;
	  if (null !== ref)
	    if ("function" === typeof refCleanup)
	      try {
	        refCleanup();
	      } catch (error) {
	        captureCommitPhaseError(current, nearestMountedAncestor, error);
	      } finally {
	        (current.refCleanup = null),
	          (current = current.alternate),
	          null != current && (current.refCleanup = null);
	      }
	    else if ("function" === typeof ref)
	      try {
	        ref(null);
	      } catch (error$143) {
	        captureCommitPhaseError(current, nearestMountedAncestor, error$143);
	      }
	    else ref.current = null;
	}
	function commitHostMount(finishedWork) {
	  var type = finishedWork.type,
	    props = finishedWork.memoizedProps,
	    instance = finishedWork.stateNode;
	  try {
	    a: switch (type) {
	      case "button":
	      case "input":
	      case "select":
	      case "textarea":
	        props.autoFocus && instance.focus();
	        break a;
	      case "img":
	        props.src
	          ? (instance.src = props.src)
	          : props.srcSet && (instance.srcset = props.srcSet);
	    }
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	function commitHostUpdate(finishedWork, newProps, oldProps) {
	  try {
	    var domElement = finishedWork.stateNode;
	    updateProperties(domElement, finishedWork.type, oldProps, newProps);
	    domElement[internalPropsKey] = newProps;
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	function isHostParent(fiber) {
	  return (
	    5 === fiber.tag ||
	    3 === fiber.tag ||
	    26 === fiber.tag ||
	    (27 === fiber.tag && isSingletonScope(fiber.type)) ||
	    4 === fiber.tag
	  );
	}
	function getHostSibling(fiber) {
	  a: for (;;) {
	    for (; null === fiber.sibling; ) {
	      if (null === fiber.return || isHostParent(fiber.return)) return null;
	      fiber = fiber.return;
	    }
	    fiber.sibling.return = fiber.return;
	    for (
	      fiber = fiber.sibling;
	      5 !== fiber.tag && 6 !== fiber.tag && 18 !== fiber.tag;

	    ) {
	      if (27 === fiber.tag && isSingletonScope(fiber.type)) continue a;
	      if (fiber.flags & 2) continue a;
	      if (null === fiber.child || 4 === fiber.tag) continue a;
	      else (fiber.child.return = fiber), (fiber = fiber.child);
	    }
	    if (!(fiber.flags & 2)) return fiber.stateNode;
	  }
	}
	function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
	  var tag = node.tag;
	  if (5 === tag || 6 === tag)
	    (node = node.stateNode),
	      before
	        ? (9 === parent.nodeType
	            ? parent.body
	            : "HTML" === parent.nodeName
	              ? parent.ownerDocument.body
	              : parent
	          ).insertBefore(node, before)
	        : ((before =
	            9 === parent.nodeType
	              ? parent.body
	              : "HTML" === parent.nodeName
	                ? parent.ownerDocument.body
	                : parent),
	          before.appendChild(node),
	          (parent = parent._reactRootContainer),
	          (null !== parent && void 0 !== parent) ||
	            null !== before.onclick ||
	            (before.onclick = noop$1));
	  else if (
	    4 !== tag &&
	    (27 === tag &&
	      isSingletonScope(node.type) &&
	      ((parent = node.stateNode), (before = null)),
	    (node = node.child),
	    null !== node)
	  )
	    for (
	      insertOrAppendPlacementNodeIntoContainer(node, before, parent),
	        node = node.sibling;
	      null !== node;

	    )
	      insertOrAppendPlacementNodeIntoContainer(node, before, parent),
	        (node = node.sibling);
	}
	function insertOrAppendPlacementNode(node, before, parent) {
	  var tag = node.tag;
	  if (5 === tag || 6 === tag)
	    (node = node.stateNode),
	      before ? parent.insertBefore(node, before) : parent.appendChild(node);
	  else if (
	    4 !== tag &&
	    (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode),
	    (node = node.child),
	    null !== node)
	  )
	    for (
	      insertOrAppendPlacementNode(node, before, parent), node = node.sibling;
	      null !== node;

	    )
	      insertOrAppendPlacementNode(node, before, parent), (node = node.sibling);
	}
	function commitHostSingletonAcquisition(finishedWork) {
	  var singleton = finishedWork.stateNode,
	    props = finishedWork.memoizedProps;
	  try {
	    for (
	      var type = finishedWork.type, attributes = singleton.attributes;
	      attributes.length;

	    )
	      singleton.removeAttributeNode(attributes[0]);
	    setInitialProperties(singleton, type, props);
	    singleton[internalInstanceKey] = finishedWork;
	    singleton[internalPropsKey] = props;
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	var offscreenSubtreeIsHidden = false,
	  offscreenSubtreeWasHidden = false,
	  needsFormReset = false,
	  PossiblyWeakSet = "function" === typeof WeakSet ? WeakSet : Set,
	  nextEffect = null;
	function commitBeforeMutationEffects(root, firstChild) {
	  root = root.containerInfo;
	  eventsEnabled = _enabled;
	  root = getActiveElementDeep(root);
	  if (hasSelectionCapabilities(root)) {
	    if ("selectionStart" in root)
	      var JSCompiler_temp = {
	        start: root.selectionStart,
	        end: root.selectionEnd
	      };
	    else
	      a: {
	        JSCompiler_temp =
	          ((JSCompiler_temp = root.ownerDocument) &&
	            JSCompiler_temp.defaultView) ||
	          window;
	        var selection =
	          JSCompiler_temp.getSelection && JSCompiler_temp.getSelection();
	        if (selection && 0 !== selection.rangeCount) {
	          JSCompiler_temp = selection.anchorNode;
	          var anchorOffset = selection.anchorOffset,
	            focusNode = selection.focusNode;
	          selection = selection.focusOffset;
	          try {
	            JSCompiler_temp.nodeType, focusNode.nodeType;
	          } catch (e$20) {
	            JSCompiler_temp = null;
	            break a;
	          }
	          var length = 0,
	            start = -1,
	            end = -1,
	            indexWithinAnchor = 0,
	            indexWithinFocus = 0,
	            node = root,
	            parentNode = null;
	          b: for (;;) {
	            for (var next; ; ) {
	              node !== JSCompiler_temp ||
	                (0 !== anchorOffset && 3 !== node.nodeType) ||
	                (start = length + anchorOffset);
	              node !== focusNode ||
	                (0 !== selection && 3 !== node.nodeType) ||
	                (end = length + selection);
	              3 === node.nodeType && (length += node.nodeValue.length);
	              if (null === (next = node.firstChild)) break;
	              parentNode = node;
	              node = next;
	            }
	            for (;;) {
	              if (node === root) break b;
	              parentNode === JSCompiler_temp &&
	                ++indexWithinAnchor === anchorOffset &&
	                (start = length);
	              parentNode === focusNode &&
	                ++indexWithinFocus === selection &&
	                (end = length);
	              if (null !== (next = node.nextSibling)) break;
	              node = parentNode;
	              parentNode = node.parentNode;
	            }
	            node = next;
	          }
	          JSCompiler_temp =
	            -1 === start || -1 === end ? null : { start: start, end: end };
	        } else JSCompiler_temp = null;
	      }
	    JSCompiler_temp = JSCompiler_temp || { start: 0, end: 0 };
	  } else JSCompiler_temp = null;
	  selectionInformation = { focusedElem: root, selectionRange: JSCompiler_temp };
	  _enabled = false;
	  for (nextEffect = firstChild; null !== nextEffect; )
	    if (
	      ((firstChild = nextEffect),
	      (root = firstChild.child),
	      0 !== (firstChild.subtreeFlags & 1024) && null !== root)
	    )
	      (root.return = firstChild), (nextEffect = root);
	    else
	      for (; null !== nextEffect; ) {
	        firstChild = nextEffect;
	        focusNode = firstChild.alternate;
	        root = firstChild.flags;
	        switch (firstChild.tag) {
	          case 0:
	            break;
	          case 11:
	          case 15:
	            break;
	          case 1:
	            if (0 !== (root & 1024) && null !== focusNode) {
	              root = void 0;
	              JSCompiler_temp = firstChild;
	              anchorOffset = focusNode.memoizedProps;
	              focusNode = focusNode.memoizedState;
	              selection = JSCompiler_temp.stateNode;
	              try {
	                var resolvedPrevProps = resolveClassComponentProps(
	                  JSCompiler_temp.type,
	                  anchorOffset,
	                  JSCompiler_temp.elementType === JSCompiler_temp.type
	                );
	                root = selection.getSnapshotBeforeUpdate(
	                  resolvedPrevProps,
	                  focusNode
	                );
	                selection.__reactInternalSnapshotBeforeUpdate = root;
	              } catch (error) {
	                captureCommitPhaseError(
	                  JSCompiler_temp,
	                  JSCompiler_temp.return,
	                  error
	                );
	              }
	            }
	            break;
	          case 3:
	            if (0 !== (root & 1024))
	              if (
	                ((root = firstChild.stateNode.containerInfo),
	                (JSCompiler_temp = root.nodeType),
	                9 === JSCompiler_temp)
	              )
	                clearContainerSparingly(root);
	              else if (1 === JSCompiler_temp)
	                switch (root.nodeName) {
	                  case "HEAD":
	                  case "HTML":
	                  case "BODY":
	                    clearContainerSparingly(root);
	                    break;
	                  default:
	                    root.textContent = "";
	                }
	            break;
	          case 5:
	          case 26:
	          case 27:
	          case 6:
	          case 4:
	          case 17:
	            break;
	          default:
	            if (0 !== (root & 1024)) throw Error(formatProdErrorMessage(163));
	        }
	        root = firstChild.sibling;
	        if (null !== root) {
	          root.return = firstChild.return;
	          nextEffect = root;
	          break;
	        }
	        nextEffect = firstChild.return;
	      }
	}
	function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork) {
	  var flags = finishedWork.flags;
	  switch (finishedWork.tag) {
	    case 0:
	    case 11:
	    case 15:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      flags & 4 && commitHookEffectListMount(5, finishedWork);
	      break;
	    case 1:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      if (flags & 4)
	        if (((finishedRoot = finishedWork.stateNode), null === current))
	          try {
	            finishedRoot.componentDidMount();
	          } catch (error) {
	            captureCommitPhaseError(finishedWork, finishedWork.return, error);
	          }
	        else {
	          var prevProps = resolveClassComponentProps(
	            finishedWork.type,
	            current.memoizedProps
	          );
	          current = current.memoizedState;
	          try {
	            finishedRoot.componentDidUpdate(
	              prevProps,
	              current,
	              finishedRoot.__reactInternalSnapshotBeforeUpdate
	            );
	          } catch (error$142) {
	            captureCommitPhaseError(
	              finishedWork,
	              finishedWork.return,
	              error$142
	            );
	          }
	        }
	      flags & 64 && commitClassCallbacks(finishedWork);
	      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
	      break;
	    case 3:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      if (
	        flags & 64 &&
	        ((finishedRoot = finishedWork.updateQueue), null !== finishedRoot)
	      ) {
	        current = null;
	        if (null !== finishedWork.child)
	          switch (finishedWork.child.tag) {
	            case 27:
	            case 5:
	              current = finishedWork.child.stateNode;
	              break;
	            case 1:
	              current = finishedWork.child.stateNode;
	          }
	        try {
	          commitCallbacks(finishedRoot, current);
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      }
	      break;
	    case 27:
	      null === current &&
	        flags & 4 &&
	        commitHostSingletonAcquisition(finishedWork);
	    case 26:
	    case 5:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      null === current && flags & 4 && commitHostMount(finishedWork);
	      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
	      break;
	    case 12:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      break;
	    case 13:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
	      flags & 64 &&
	        ((finishedRoot = finishedWork.memoizedState),
	        null !== finishedRoot &&
	          ((finishedRoot = finishedRoot.dehydrated),
	          null !== finishedRoot &&
	            ((finishedWork = retryDehydratedSuspenseBoundary.bind(
	              null,
	              finishedWork
	            )),
	            registerSuspenseInstanceRetry(finishedRoot, finishedWork))));
	      break;
	    case 22:
	      flags = null !== finishedWork.memoizedState || offscreenSubtreeIsHidden;
	      if (!flags) {
	        current =
	          (null !== current && null !== current.memoizedState) ||
	          offscreenSubtreeWasHidden;
	        prevProps = offscreenSubtreeIsHidden;
	        var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
	        offscreenSubtreeIsHidden = flags;
	        (offscreenSubtreeWasHidden = current) && !prevOffscreenSubtreeWasHidden
	          ? recursivelyTraverseReappearLayoutEffects(
	              finishedRoot,
	              finishedWork,
	              0 !== (finishedWork.subtreeFlags & 8772)
	            )
	          : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	        offscreenSubtreeIsHidden = prevProps;
	        offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
	      }
	      break;
	    case 30:
	      break;
	    default:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	  }
	}
	function detachFiberAfterEffects(fiber) {
	  var alternate = fiber.alternate;
	  null !== alternate &&
	    ((fiber.alternate = null), detachFiberAfterEffects(alternate));
	  fiber.child = null;
	  fiber.deletions = null;
	  fiber.sibling = null;
	  5 === fiber.tag &&
	    ((alternate = fiber.stateNode),
	    null !== alternate && detachDeletedInstance(alternate));
	  fiber.stateNode = null;
	  fiber.return = null;
	  fiber.dependencies = null;
	  fiber.memoizedProps = null;
	  fiber.memoizedState = null;
	  fiber.pendingProps = null;
	  fiber.stateNode = null;
	  fiber.updateQueue = null;
	}
	var hostParent = null,
	  hostParentIsContainer = false;
	function recursivelyTraverseDeletionEffects(
	  finishedRoot,
	  nearestMountedAncestor,
	  parent
	) {
	  for (parent = parent.child; null !== parent; )
	    commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, parent),
	      (parent = parent.sibling);
	}
	function commitDeletionEffectsOnFiber(
	  finishedRoot,
	  nearestMountedAncestor,
	  deletedFiber
	) {
	  if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount)
	    try {
	      injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
	    } catch (err) {}
	  switch (deletedFiber.tag) {
	    case 26:
	      offscreenSubtreeWasHidden ||
	        safelyDetachRef(deletedFiber, nearestMountedAncestor);
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      deletedFiber.memoizedState
	        ? deletedFiber.memoizedState.count--
	        : deletedFiber.stateNode &&
	          ((deletedFiber = deletedFiber.stateNode),
	          deletedFiber.parentNode.removeChild(deletedFiber));
	      break;
	    case 27:
	      offscreenSubtreeWasHidden ||
	        safelyDetachRef(deletedFiber, nearestMountedAncestor);
	      var prevHostParent = hostParent,
	        prevHostParentIsContainer = hostParentIsContainer;
	      isSingletonScope(deletedFiber.type) &&
	        ((hostParent = deletedFiber.stateNode), (hostParentIsContainer = false));
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      releaseSingletonInstance(deletedFiber.stateNode);
	      hostParent = prevHostParent;
	      hostParentIsContainer = prevHostParentIsContainer;
	      break;
	    case 5:
	      offscreenSubtreeWasHidden ||
	        safelyDetachRef(deletedFiber, nearestMountedAncestor);
	    case 6:
	      prevHostParent = hostParent;
	      prevHostParentIsContainer = hostParentIsContainer;
	      hostParent = null;
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      hostParent = prevHostParent;
	      hostParentIsContainer = prevHostParentIsContainer;
	      if (null !== hostParent)
	        if (hostParentIsContainer)
	          try {
	            (9 === hostParent.nodeType
	              ? hostParent.body
	              : "HTML" === hostParent.nodeName
	                ? hostParent.ownerDocument.body
	                : hostParent
	            ).removeChild(deletedFiber.stateNode);
	          } catch (error) {
	            captureCommitPhaseError(
	              deletedFiber,
	              nearestMountedAncestor,
	              error
	            );
	          }
	        else
	          try {
	            hostParent.removeChild(deletedFiber.stateNode);
	          } catch (error) {
	            captureCommitPhaseError(
	              deletedFiber,
	              nearestMountedAncestor,
	              error
	            );
	          }
	      break;
	    case 18:
	      null !== hostParent &&
	        (hostParentIsContainer
	          ? ((finishedRoot = hostParent),
	            clearSuspenseBoundary(
	              9 === finishedRoot.nodeType
	                ? finishedRoot.body
	                : "HTML" === finishedRoot.nodeName
	                  ? finishedRoot.ownerDocument.body
	                  : finishedRoot,
	              deletedFiber.stateNode
	            ),
	            retryIfBlockedOn(finishedRoot))
	          : clearSuspenseBoundary(hostParent, deletedFiber.stateNode));
	      break;
	    case 4:
	      prevHostParent = hostParent;
	      prevHostParentIsContainer = hostParentIsContainer;
	      hostParent = deletedFiber.stateNode.containerInfo;
	      hostParentIsContainer = true;
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      hostParent = prevHostParent;
	      hostParentIsContainer = prevHostParentIsContainer;
	      break;
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	      offscreenSubtreeWasHidden ||
	        commitHookEffectListUnmount(2, deletedFiber, nearestMountedAncestor);
	      offscreenSubtreeWasHidden ||
	        commitHookEffectListUnmount(4, deletedFiber, nearestMountedAncestor);
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      break;
	    case 1:
	      offscreenSubtreeWasHidden ||
	        (safelyDetachRef(deletedFiber, nearestMountedAncestor),
	        (prevHostParent = deletedFiber.stateNode),
	        "function" === typeof prevHostParent.componentWillUnmount &&
	          safelyCallComponentWillUnmount(
	            deletedFiber,
	            nearestMountedAncestor,
	            prevHostParent
	          ));
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      break;
	    case 21:
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      break;
	    case 22:
	      offscreenSubtreeWasHidden =
	        (prevHostParent = offscreenSubtreeWasHidden) ||
	        null !== deletedFiber.memoizedState;
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      offscreenSubtreeWasHidden = prevHostParent;
	      break;
	    default:
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	  }
	}
	function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
	  if (
	    null === finishedWork.memoizedState &&
	    ((finishedRoot = finishedWork.alternate),
	    null !== finishedRoot &&
	      ((finishedRoot = finishedRoot.memoizedState),
	      null !== finishedRoot &&
	        ((finishedRoot = finishedRoot.dehydrated), null !== finishedRoot)))
	  )
	    try {
	      retryIfBlockedOn(finishedRoot);
	    } catch (error) {
	      captureCommitPhaseError(finishedWork, finishedWork.return, error);
	    }
	}
	function getRetryCache(finishedWork) {
	  switch (finishedWork.tag) {
	    case 13:
	    case 19:
	      var retryCache = finishedWork.stateNode;
	      null === retryCache &&
	        (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
	      return retryCache;
	    case 22:
	      return (
	        (finishedWork = finishedWork.stateNode),
	        (retryCache = finishedWork._retryCache),
	        null === retryCache &&
	          (retryCache = finishedWork._retryCache = new PossiblyWeakSet()),
	        retryCache
	      );
	    default:
	      throw Error(formatProdErrorMessage(435, finishedWork.tag));
	  }
	}
	function attachSuspenseRetryListeners(finishedWork, wakeables) {
	  var retryCache = getRetryCache(finishedWork);
	  wakeables.forEach(function (wakeable) {
	    var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
	    retryCache.has(wakeable) ||
	      (retryCache.add(wakeable), wakeable.then(retry, retry));
	  });
	}
	function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber) {
	  var deletions = parentFiber.deletions;
	  if (null !== deletions)
	    for (var i = 0; i < deletions.length; i++) {
	      var childToDelete = deletions[i],
	        root = root$jscomp$0,
	        returnFiber = parentFiber,
	        parent = returnFiber;
	      a: for (; null !== parent; ) {
	        switch (parent.tag) {
	          case 27:
	            if (isSingletonScope(parent.type)) {
	              hostParent = parent.stateNode;
	              hostParentIsContainer = false;
	              break a;
	            }
	            break;
	          case 5:
	            hostParent = parent.stateNode;
	            hostParentIsContainer = false;
	            break a;
	          case 3:
	          case 4:
	            hostParent = parent.stateNode.containerInfo;
	            hostParentIsContainer = true;
	            break a;
	        }
	        parent = parent.return;
	      }
	      if (null === hostParent) throw Error(formatProdErrorMessage(160));
	      commitDeletionEffectsOnFiber(root, returnFiber, childToDelete);
	      hostParent = null;
	      hostParentIsContainer = false;
	      root = childToDelete.alternate;
	      null !== root && (root.return = null);
	      childToDelete.return = null;
	    }
	  if (parentFiber.subtreeFlags & 13878)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      commitMutationEffectsOnFiber(parentFiber, root$jscomp$0),
	        (parentFiber = parentFiber.sibling);
	}
	var currentHoistableRoot = null;
	function commitMutationEffectsOnFiber(finishedWork, root) {
	  var current = finishedWork.alternate,
	    flags = finishedWork.flags;
	  switch (finishedWork.tag) {
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 4 &&
	        (commitHookEffectListUnmount(3, finishedWork, finishedWork.return),
	        commitHookEffectListMount(3, finishedWork),
	        commitHookEffectListUnmount(5, finishedWork, finishedWork.return));
	      break;
	    case 1:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 512 &&
	        (offscreenSubtreeWasHidden ||
	          null === current ||
	          safelyDetachRef(current, current.return));
	      flags & 64 &&
	        offscreenSubtreeIsHidden &&
	        ((finishedWork = finishedWork.updateQueue),
	        null !== finishedWork &&
	          ((flags = finishedWork.callbacks),
	          null !== flags &&
	            ((current = finishedWork.shared.hiddenCallbacks),
	            (finishedWork.shared.hiddenCallbacks =
	              null === current ? flags : current.concat(flags)))));
	      break;
	    case 26:
	      var hoistableRoot = currentHoistableRoot;
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 512 &&
	        (offscreenSubtreeWasHidden ||
	          null === current ||
	          safelyDetachRef(current, current.return));
	      if (flags & 4) {
	        var currentResource = null !== current ? current.memoizedState : null;
	        flags = finishedWork.memoizedState;
	        if (null === current)
	          if (null === flags)
	            if (null === finishedWork.stateNode) {
	              a: {
	                flags = finishedWork.type;
	                current = finishedWork.memoizedProps;
	                hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
	                b: switch (flags) {
	                  case "title":
	                    currentResource =
	                      hoistableRoot.getElementsByTagName("title")[0];
	                    if (
	                      !currentResource ||
	                      currentResource[internalHoistableMarker] ||
	                      currentResource[internalInstanceKey] ||
	                      "http://www.w3.org/2000/svg" ===
	                        currentResource.namespaceURI ||
	                      currentResource.hasAttribute("itemprop")
	                    )
	                      (currentResource = hoistableRoot.createElement(flags)),
	                        hoistableRoot.head.insertBefore(
	                          currentResource,
	                          hoistableRoot.querySelector("head > title")
	                        );
	                    setInitialProperties(currentResource, flags, current);
	                    currentResource[internalInstanceKey] = finishedWork;
	                    markNodeAsHoistable(currentResource);
	                    flags = currentResource;
	                    break a;
	                  case "link":
	                    var maybeNodes = getHydratableHoistableCache(
	                      "link",
	                      "href",
	                      hoistableRoot
	                    ).get(flags + (current.href || ""));
	                    if (maybeNodes)
	                      for (var i = 0; i < maybeNodes.length; i++)
	                        if (
	                          ((currentResource = maybeNodes[i]),
	                          currentResource.getAttribute("href") ===
	                            (null == current.href || "" === current.href
	                              ? null
	                              : current.href) &&
	                            currentResource.getAttribute("rel") ===
	                              (null == current.rel ? null : current.rel) &&
	                            currentResource.getAttribute("title") ===
	                              (null == current.title ? null : current.title) &&
	                            currentResource.getAttribute("crossorigin") ===
	                              (null == current.crossOrigin
	                                ? null
	                                : current.crossOrigin))
	                        ) {
	                          maybeNodes.splice(i, 1);
	                          break b;
	                        }
	                    currentResource = hoistableRoot.createElement(flags);
	                    setInitialProperties(currentResource, flags, current);
	                    hoistableRoot.head.appendChild(currentResource);
	                    break;
	                  case "meta":
	                    if (
	                      (maybeNodes = getHydratableHoistableCache(
	                        "meta",
	                        "content",
	                        hoistableRoot
	                      ).get(flags + (current.content || "")))
	                    )
	                      for (i = 0; i < maybeNodes.length; i++)
	                        if (
	                          ((currentResource = maybeNodes[i]),
	                          currentResource.getAttribute("content") ===
	                            (null == current.content
	                              ? null
	                              : "" + current.content) &&
	                            currentResource.getAttribute("name") ===
	                              (null == current.name ? null : current.name) &&
	                            currentResource.getAttribute("property") ===
	                              (null == current.property
	                                ? null
	                                : current.property) &&
	                            currentResource.getAttribute("http-equiv") ===
	                              (null == current.httpEquiv
	                                ? null
	                                : current.httpEquiv) &&
	                            currentResource.getAttribute("charset") ===
	                              (null == current.charSet
	                                ? null
	                                : current.charSet))
	                        ) {
	                          maybeNodes.splice(i, 1);
	                          break b;
	                        }
	                    currentResource = hoistableRoot.createElement(flags);
	                    setInitialProperties(currentResource, flags, current);
	                    hoistableRoot.head.appendChild(currentResource);
	                    break;
	                  default:
	                    throw Error(formatProdErrorMessage(468, flags));
	                }
	                currentResource[internalInstanceKey] = finishedWork;
	                markNodeAsHoistable(currentResource);
	                flags = currentResource;
	              }
	              finishedWork.stateNode = flags;
	            } else
	              mountHoistable(
	                hoistableRoot,
	                finishedWork.type,
	                finishedWork.stateNode
	              );
	          else
	            finishedWork.stateNode = acquireResource(
	              hoistableRoot,
	              flags,
	              finishedWork.memoizedProps
	            );
	        else
	          currentResource !== flags
	            ? (null === currentResource
	                ? null !== current.stateNode &&
	                  ((current = current.stateNode),
	                  current.parentNode.removeChild(current))
	                : currentResource.count--,
	              null === flags
	                ? mountHoistable(
	                    hoistableRoot,
	                    finishedWork.type,
	                    finishedWork.stateNode
	                  )
	                : acquireResource(
	                    hoistableRoot,
	                    flags,
	                    finishedWork.memoizedProps
	                  ))
	            : null === flags &&
	              null !== finishedWork.stateNode &&
	              commitHostUpdate(
	                finishedWork,
	                finishedWork.memoizedProps,
	                current.memoizedProps
	              );
	      }
	      break;
	    case 27:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 512 &&
	        (offscreenSubtreeWasHidden ||
	          null === current ||
	          safelyDetachRef(current, current.return));
	      null !== current &&
	        flags & 4 &&
	        commitHostUpdate(
	          finishedWork,
	          finishedWork.memoizedProps,
	          current.memoizedProps
	        );
	      break;
	    case 5:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 512 &&
	        (offscreenSubtreeWasHidden ||
	          null === current ||
	          safelyDetachRef(current, current.return));
	      if (finishedWork.flags & 32) {
	        hoistableRoot = finishedWork.stateNode;
	        try {
	          setTextContent(hoistableRoot, "");
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      }
	      flags & 4 &&
	        null != finishedWork.stateNode &&
	        ((hoistableRoot = finishedWork.memoizedProps),
	        commitHostUpdate(
	          finishedWork,
	          hoistableRoot,
	          null !== current ? current.memoizedProps : hoistableRoot
	        ));
	      flags & 1024 && (needsFormReset = true);
	      break;
	    case 6:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      if (flags & 4) {
	        if (null === finishedWork.stateNode)
	          throw Error(formatProdErrorMessage(162));
	        flags = finishedWork.memoizedProps;
	        current = finishedWork.stateNode;
	        try {
	          current.nodeValue = flags;
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      }
	      break;
	    case 3:
	      tagCaches = null;
	      hoistableRoot = currentHoistableRoot;
	      currentHoistableRoot = getHoistableRoot(root.containerInfo);
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      currentHoistableRoot = hoistableRoot;
	      commitReconciliationEffects(finishedWork);
	      if (flags & 4 && null !== current && current.memoizedState.isDehydrated)
	        try {
	          retryIfBlockedOn(root.containerInfo);
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      needsFormReset &&
	        ((needsFormReset = false), recursivelyResetForms(finishedWork));
	      break;
	    case 4:
	      flags = currentHoistableRoot;
	      currentHoistableRoot = getHoistableRoot(
	        finishedWork.stateNode.containerInfo
	      );
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      currentHoistableRoot = flags;
	      break;
	    case 12:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      break;
	    case 13:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      finishedWork.child.flags & 8192 &&
	        (null !== finishedWork.memoizedState) !==
	          (null !== current && null !== current.memoizedState) &&
	        (globalMostRecentFallbackTime = now());
	      flags & 4 &&
	        ((flags = finishedWork.updateQueue),
	        null !== flags &&
	          ((finishedWork.updateQueue = null),
	          attachSuspenseRetryListeners(finishedWork, flags)));
	      break;
	    case 22:
	      hoistableRoot = null !== finishedWork.memoizedState;
	      var wasHidden = null !== current && null !== current.memoizedState,
	        prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden,
	        prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
	      offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden || hoistableRoot;
	      offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || wasHidden;
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
	      offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
	      commitReconciliationEffects(finishedWork);
	      if (flags & 8192)
	        a: for (
	          root = finishedWork.stateNode,
	            root._visibility = hoistableRoot
	              ? root._visibility & -2
	              : root._visibility | 1,
	            hoistableRoot &&
	              (null === current ||
	                wasHidden ||
	                offscreenSubtreeIsHidden ||
	                offscreenSubtreeWasHidden ||
	                recursivelyTraverseDisappearLayoutEffects(finishedWork)),
	            current = null,
	            root = finishedWork;
	          ;

	        ) {
	          if (5 === root.tag || 26 === root.tag) {
	            if (null === current) {
	              wasHidden = current = root;
	              try {
	                if (((currentResource = wasHidden.stateNode), hoistableRoot))
	                  (maybeNodes = currentResource.style),
	                    "function" === typeof maybeNodes.setProperty
	                      ? maybeNodes.setProperty("display", "none", "important")
	                      : (maybeNodes.display = "none");
	                else {
	                  i = wasHidden.stateNode;
	                  var styleProp = wasHidden.memoizedProps.style,
	                    display =
	                      void 0 !== styleProp &&
	                      null !== styleProp &&
	                      styleProp.hasOwnProperty("display")
	                        ? styleProp.display
	                        : null;
	                  i.style.display =
	                    null == display || "boolean" === typeof display
	                      ? ""
	                      : ("" + display).trim();
	                }
	              } catch (error) {
	                captureCommitPhaseError(wasHidden, wasHidden.return, error);
	              }
	            }
	          } else if (6 === root.tag) {
	            if (null === current) {
	              wasHidden = root;
	              try {
	                wasHidden.stateNode.nodeValue = hoistableRoot
	                  ? ""
	                  : wasHidden.memoizedProps;
	              } catch (error) {
	                captureCommitPhaseError(wasHidden, wasHidden.return, error);
	              }
	            }
	          } else if (
	            ((22 !== root.tag && 23 !== root.tag) ||
	              null === root.memoizedState ||
	              root === finishedWork) &&
	            null !== root.child
	          ) {
	            root.child.return = root;
	            root = root.child;
	            continue;
	          }
	          if (root === finishedWork) break a;
	          for (; null === root.sibling; ) {
	            if (null === root.return || root.return === finishedWork) break a;
	            current === root && (current = null);
	            root = root.return;
	          }
	          current === root && (current = null);
	          root.sibling.return = root.return;
	          root = root.sibling;
	        }
	      flags & 4 &&
	        ((flags = finishedWork.updateQueue),
	        null !== flags &&
	          ((current = flags.retryQueue),
	          null !== current &&
	            ((flags.retryQueue = null),
	            attachSuspenseRetryListeners(finishedWork, current))));
	      break;
	    case 19:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 4 &&
	        ((flags = finishedWork.updateQueue),
	        null !== flags &&
	          ((finishedWork.updateQueue = null),
	          attachSuspenseRetryListeners(finishedWork, flags)));
	      break;
	    case 30:
	      break;
	    case 21:
	      break;
	    default:
	      recursivelyTraverseMutationEffects(root, finishedWork),
	        commitReconciliationEffects(finishedWork);
	  }
	}
	function commitReconciliationEffects(finishedWork) {
	  var flags = finishedWork.flags;
	  if (flags & 2) {
	    try {
	      for (
	        var hostParentFiber, parentFiber = finishedWork.return;
	        null !== parentFiber;

	      ) {
	        if (isHostParent(parentFiber)) {
	          hostParentFiber = parentFiber;
	          break;
	        }
	        parentFiber = parentFiber.return;
	      }
	      if (null == hostParentFiber) throw Error(formatProdErrorMessage(160));
	      switch (hostParentFiber.tag) {
	        case 27:
	          var parent = hostParentFiber.stateNode,
	            before = getHostSibling(finishedWork);
	          insertOrAppendPlacementNode(finishedWork, before, parent);
	          break;
	        case 5:
	          var parent$144 = hostParentFiber.stateNode;
	          hostParentFiber.flags & 32 &&
	            (setTextContent(parent$144, ""), (hostParentFiber.flags &= -33));
	          var before$145 = getHostSibling(finishedWork);
	          insertOrAppendPlacementNode(finishedWork, before$145, parent$144);
	          break;
	        case 3:
	        case 4:
	          var parent$146 = hostParentFiber.stateNode.containerInfo,
	            before$147 = getHostSibling(finishedWork);
	          insertOrAppendPlacementNodeIntoContainer(
	            finishedWork,
	            before$147,
	            parent$146
	          );
	          break;
	        default:
	          throw Error(formatProdErrorMessage(161));
	      }
	    } catch (error) {
	      captureCommitPhaseError(finishedWork, finishedWork.return, error);
	    }
	    finishedWork.flags &= -3;
	  }
	  flags & 4096 && (finishedWork.flags &= -4097);
	}
	function recursivelyResetForms(parentFiber) {
	  if (parentFiber.subtreeFlags & 1024)
	    for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	      var fiber = parentFiber;
	      recursivelyResetForms(fiber);
	      5 === fiber.tag && fiber.flags & 1024 && fiber.stateNode.reset();
	      parentFiber = parentFiber.sibling;
	    }
	}
	function recursivelyTraverseLayoutEffects(root, parentFiber) {
	  if (parentFiber.subtreeFlags & 8772)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      commitLayoutEffectOnFiber(root, parentFiber.alternate, parentFiber),
	        (parentFiber = parentFiber.sibling);
	}
	function recursivelyTraverseDisappearLayoutEffects(parentFiber) {
	  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	    var finishedWork = parentFiber;
	    switch (finishedWork.tag) {
	      case 0:
	      case 11:
	      case 14:
	      case 15:
	        commitHookEffectListUnmount(4, finishedWork, finishedWork.return);
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      case 1:
	        safelyDetachRef(finishedWork, finishedWork.return);
	        var instance = finishedWork.stateNode;
	        "function" === typeof instance.componentWillUnmount &&
	          safelyCallComponentWillUnmount(
	            finishedWork,
	            finishedWork.return,
	            instance
	          );
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      case 27:
	        releaseSingletonInstance(finishedWork.stateNode);
	      case 26:
	      case 5:
	        safelyDetachRef(finishedWork, finishedWork.return);
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      case 22:
	        null === finishedWork.memoizedState &&
	          recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      case 30:
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      default:
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	    }
	    parentFiber = parentFiber.sibling;
	  }
	}
	function recursivelyTraverseReappearLayoutEffects(
	  finishedRoot$jscomp$0,
	  parentFiber,
	  includeWorkInProgressEffects
	) {
	  includeWorkInProgressEffects =
	    includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 8772);
	  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	    var current = parentFiber.alternate,
	      finishedRoot = finishedRoot$jscomp$0,
	      finishedWork = parentFiber,
	      flags = finishedWork.flags;
	    switch (finishedWork.tag) {
	      case 0:
	      case 11:
	      case 15:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        commitHookEffectListMount(4, finishedWork);
	        break;
	      case 1:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        current = finishedWork;
	        finishedRoot = current.stateNode;
	        if ("function" === typeof finishedRoot.componentDidMount)
	          try {
	            finishedRoot.componentDidMount();
	          } catch (error) {
	            captureCommitPhaseError(current, current.return, error);
	          }
	        current = finishedWork;
	        finishedRoot = current.updateQueue;
	        if (null !== finishedRoot) {
	          var instance = current.stateNode;
	          try {
	            var hiddenCallbacks = finishedRoot.shared.hiddenCallbacks;
	            if (null !== hiddenCallbacks)
	              for (
	                finishedRoot.shared.hiddenCallbacks = null, finishedRoot = 0;
	                finishedRoot < hiddenCallbacks.length;
	                finishedRoot++
	              )
	                callCallback(hiddenCallbacks[finishedRoot], instance);
	          } catch (error) {
	            captureCommitPhaseError(current, current.return, error);
	          }
	        }
	        includeWorkInProgressEffects &&
	          flags & 64 &&
	          commitClassCallbacks(finishedWork);
	        safelyAttachRef(finishedWork, finishedWork.return);
	        break;
	      case 27:
	        commitHostSingletonAcquisition(finishedWork);
	      case 26:
	      case 5:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        includeWorkInProgressEffects &&
	          null === current &&
	          flags & 4 &&
	          commitHostMount(finishedWork);
	        safelyAttachRef(finishedWork, finishedWork.return);
	        break;
	      case 12:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        break;
	      case 13:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        includeWorkInProgressEffects &&
	          flags & 4 &&
	          commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
	        break;
	      case 22:
	        null === finishedWork.memoizedState &&
	          recursivelyTraverseReappearLayoutEffects(
	            finishedRoot,
	            finishedWork,
	            includeWorkInProgressEffects
	          );
	        safelyAttachRef(finishedWork, finishedWork.return);
	        break;
	      case 30:
	        break;
	      default:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	    }
	    parentFiber = parentFiber.sibling;
	  }
	}
	function commitOffscreenPassiveMountEffects(current, finishedWork) {
	  var previousCache = null;
	  null !== current &&
	    null !== current.memoizedState &&
	    null !== current.memoizedState.cachePool &&
	    (previousCache = current.memoizedState.cachePool.pool);
	  current = null;
	  null !== finishedWork.memoizedState &&
	    null !== finishedWork.memoizedState.cachePool &&
	    (current = finishedWork.memoizedState.cachePool.pool);
	  current !== previousCache &&
	    (null != current && current.refCount++,
	    null != previousCache && releaseCache(previousCache));
	}
	function commitCachePassiveMountEffect(current, finishedWork) {
	  current = null;
	  null !== finishedWork.alternate &&
	    (current = finishedWork.alternate.memoizedState.cache);
	  finishedWork = finishedWork.memoizedState.cache;
	  finishedWork !== current &&
	    (finishedWork.refCount++, null != current && releaseCache(current));
	}
	function recursivelyTraversePassiveMountEffects(
	  root,
	  parentFiber,
	  committedLanes,
	  committedTransitions
	) {
	  if (parentFiber.subtreeFlags & 10256)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      commitPassiveMountOnFiber(
	        root,
	        parentFiber,
	        committedLanes,
	        committedTransitions
	      ),
	        (parentFiber = parentFiber.sibling);
	}
	function commitPassiveMountOnFiber(
	  finishedRoot,
	  finishedWork,
	  committedLanes,
	  committedTransitions
	) {
	  var flags = finishedWork.flags;
	  switch (finishedWork.tag) {
	    case 0:
	    case 11:
	    case 15:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      flags & 2048 && commitHookEffectListMount(9, finishedWork);
	      break;
	    case 1:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      break;
	    case 3:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      flags & 2048 &&
	        ((finishedRoot = null),
	        null !== finishedWork.alternate &&
	          (finishedRoot = finishedWork.alternate.memoizedState.cache),
	        (finishedWork = finishedWork.memoizedState.cache),
	        finishedWork !== finishedRoot &&
	          (finishedWork.refCount++,
	          null != finishedRoot && releaseCache(finishedRoot)));
	      break;
	    case 12:
	      if (flags & 2048) {
	        recursivelyTraversePassiveMountEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions
	        );
	        finishedRoot = finishedWork.stateNode;
	        try {
	          var _finishedWork$memoize2 = finishedWork.memoizedProps,
	            id = _finishedWork$memoize2.id,
	            onPostCommit = _finishedWork$memoize2.onPostCommit;
	          "function" === typeof onPostCommit &&
	            onPostCommit(
	              id,
	              null === finishedWork.alternate ? "mount" : "update",
	              finishedRoot.passiveEffectDuration,
	              -0
	            );
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      } else
	        recursivelyTraversePassiveMountEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions
	        );
	      break;
	    case 13:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      break;
	    case 23:
	      break;
	    case 22:
	      _finishedWork$memoize2 = finishedWork.stateNode;
	      id = finishedWork.alternate;
	      null !== finishedWork.memoizedState
	        ? _finishedWork$memoize2._visibility & 2
	          ? recursivelyTraversePassiveMountEffects(
	              finishedRoot,
	              finishedWork,
	              committedLanes,
	              committedTransitions
	            )
	          : recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork)
	        : _finishedWork$memoize2._visibility & 2
	          ? recursivelyTraversePassiveMountEffects(
	              finishedRoot,
	              finishedWork,
	              committedLanes,
	              committedTransitions
	            )
	          : ((_finishedWork$memoize2._visibility |= 2),
	            recursivelyTraverseReconnectPassiveEffects(
	              finishedRoot,
	              finishedWork,
	              committedLanes,
	              committedTransitions,
	              0 !== (finishedWork.subtreeFlags & 10256)
	            ));
	      flags & 2048 && commitOffscreenPassiveMountEffects(id, finishedWork);
	      break;
	    case 24:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      flags & 2048 &&
	        commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
	      break;
	    default:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	  }
	}
	function recursivelyTraverseReconnectPassiveEffects(
	  finishedRoot$jscomp$0,
	  parentFiber,
	  committedLanes$jscomp$0,
	  committedTransitions$jscomp$0,
	  includeWorkInProgressEffects
	) {
	  includeWorkInProgressEffects =
	    includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 10256);
	  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	    var finishedRoot = finishedRoot$jscomp$0,
	      finishedWork = parentFiber,
	      committedLanes = committedLanes$jscomp$0,
	      committedTransitions = committedTransitions$jscomp$0,
	      flags = finishedWork.flags;
	    switch (finishedWork.tag) {
	      case 0:
	      case 11:
	      case 15:
	        recursivelyTraverseReconnectPassiveEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions,
	          includeWorkInProgressEffects
	        );
	        commitHookEffectListMount(8, finishedWork);
	        break;
	      case 23:
	        break;
	      case 22:
	        var instance = finishedWork.stateNode;
	        null !== finishedWork.memoizedState
	          ? instance._visibility & 2
	            ? recursivelyTraverseReconnectPassiveEffects(
	                finishedRoot,
	                finishedWork,
	                committedLanes,
	                committedTransitions,
	                includeWorkInProgressEffects
	              )
	            : recursivelyTraverseAtomicPassiveEffects(
	                finishedRoot,
	                finishedWork
	              )
	          : ((instance._visibility |= 2),
	            recursivelyTraverseReconnectPassiveEffects(
	              finishedRoot,
	              finishedWork,
	              committedLanes,
	              committedTransitions,
	              includeWorkInProgressEffects
	            ));
	        includeWorkInProgressEffects &&
	          flags & 2048 &&
	          commitOffscreenPassiveMountEffects(
	            finishedWork.alternate,
	            finishedWork
	          );
	        break;
	      case 24:
	        recursivelyTraverseReconnectPassiveEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions,
	          includeWorkInProgressEffects
	        );
	        includeWorkInProgressEffects &&
	          flags & 2048 &&
	          commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
	        break;
	      default:
	        recursivelyTraverseReconnectPassiveEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions,
	          includeWorkInProgressEffects
	        );
	    }
	    parentFiber = parentFiber.sibling;
	  }
	}
	function recursivelyTraverseAtomicPassiveEffects(
	  finishedRoot$jscomp$0,
	  parentFiber
	) {
	  if (parentFiber.subtreeFlags & 10256)
	    for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	      var finishedRoot = finishedRoot$jscomp$0,
	        finishedWork = parentFiber,
	        flags = finishedWork.flags;
	      switch (finishedWork.tag) {
	        case 22:
	          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
	          flags & 2048 &&
	            commitOffscreenPassiveMountEffects(
	              finishedWork.alternate,
	              finishedWork
	            );
	          break;
	        case 24:
	          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
	          flags & 2048 &&
	            commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
	          break;
	        default:
	          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
	      }
	      parentFiber = parentFiber.sibling;
	    }
	}
	var suspenseyCommitFlag = 8192;
	function recursivelyAccumulateSuspenseyCommit(parentFiber) {
	  if (parentFiber.subtreeFlags & suspenseyCommitFlag)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      accumulateSuspenseyCommitOnFiber(parentFiber),
	        (parentFiber = parentFiber.sibling);
	}
	function accumulateSuspenseyCommitOnFiber(fiber) {
	  switch (fiber.tag) {
	    case 26:
	      recursivelyAccumulateSuspenseyCommit(fiber);
	      fiber.flags & suspenseyCommitFlag &&
	        null !== fiber.memoizedState &&
	        suspendResource(
	          currentHoistableRoot,
	          fiber.memoizedState,
	          fiber.memoizedProps
	        );
	      break;
	    case 5:
	      recursivelyAccumulateSuspenseyCommit(fiber);
	      break;
	    case 3:
	    case 4:
	      var previousHoistableRoot = currentHoistableRoot;
	      currentHoistableRoot = getHoistableRoot(fiber.stateNode.containerInfo);
	      recursivelyAccumulateSuspenseyCommit(fiber);
	      currentHoistableRoot = previousHoistableRoot;
	      break;
	    case 22:
	      null === fiber.memoizedState &&
	        ((previousHoistableRoot = fiber.alternate),
	        null !== previousHoistableRoot &&
	        null !== previousHoistableRoot.memoizedState
	          ? ((previousHoistableRoot = suspenseyCommitFlag),
	            (suspenseyCommitFlag = 16777216),
	            recursivelyAccumulateSuspenseyCommit(fiber),
	            (suspenseyCommitFlag = previousHoistableRoot))
	          : recursivelyAccumulateSuspenseyCommit(fiber));
	      break;
	    default:
	      recursivelyAccumulateSuspenseyCommit(fiber);
	  }
	}
	function detachAlternateSiblings(parentFiber) {
	  var previousFiber = parentFiber.alternate;
	  if (
	    null !== previousFiber &&
	    ((parentFiber = previousFiber.child), null !== parentFiber)
	  ) {
	    previousFiber.child = null;
	    do
	      (previousFiber = parentFiber.sibling),
	        (parentFiber.sibling = null),
	        (parentFiber = previousFiber);
	    while (null !== parentFiber);
	  }
	}
	function recursivelyTraversePassiveUnmountEffects(parentFiber) {
	  var deletions = parentFiber.deletions;
	  if (0 !== (parentFiber.flags & 16)) {
	    if (null !== deletions)
	      for (var i = 0; i < deletions.length; i++) {
	        var childToDelete = deletions[i];
	        nextEffect = childToDelete;
	        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
	          childToDelete,
	          parentFiber
	        );
	      }
	    detachAlternateSiblings(parentFiber);
	  }
	  if (parentFiber.subtreeFlags & 10256)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      commitPassiveUnmountOnFiber(parentFiber),
	        (parentFiber = parentFiber.sibling);
	}
	function commitPassiveUnmountOnFiber(finishedWork) {
	  switch (finishedWork.tag) {
	    case 0:
	    case 11:
	    case 15:
	      recursivelyTraversePassiveUnmountEffects(finishedWork);
	      finishedWork.flags & 2048 &&
	        commitHookEffectListUnmount(9, finishedWork, finishedWork.return);
	      break;
	    case 3:
	      recursivelyTraversePassiveUnmountEffects(finishedWork);
	      break;
	    case 12:
	      recursivelyTraversePassiveUnmountEffects(finishedWork);
	      break;
	    case 22:
	      var instance = finishedWork.stateNode;
	      null !== finishedWork.memoizedState &&
	      instance._visibility & 2 &&
	      (null === finishedWork.return || 13 !== finishedWork.return.tag)
	        ? ((instance._visibility &= -3),
	          recursivelyTraverseDisconnectPassiveEffects(finishedWork))
	        : recursivelyTraversePassiveUnmountEffects(finishedWork);
	      break;
	    default:
	      recursivelyTraversePassiveUnmountEffects(finishedWork);
	  }
	}
	function recursivelyTraverseDisconnectPassiveEffects(parentFiber) {
	  var deletions = parentFiber.deletions;
	  if (0 !== (parentFiber.flags & 16)) {
	    if (null !== deletions)
	      for (var i = 0; i < deletions.length; i++) {
	        var childToDelete = deletions[i];
	        nextEffect = childToDelete;
	        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
	          childToDelete,
	          parentFiber
	        );
	      }
	    detachAlternateSiblings(parentFiber);
	  }
	  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	    deletions = parentFiber;
	    switch (deletions.tag) {
	      case 0:
	      case 11:
	      case 15:
	        commitHookEffectListUnmount(8, deletions, deletions.return);
	        recursivelyTraverseDisconnectPassiveEffects(deletions);
	        break;
	      case 22:
	        i = deletions.stateNode;
	        i._visibility & 2 &&
	          ((i._visibility &= -3),
	          recursivelyTraverseDisconnectPassiveEffects(deletions));
	        break;
	      default:
	        recursivelyTraverseDisconnectPassiveEffects(deletions);
	    }
	    parentFiber = parentFiber.sibling;
	  }
	}
	function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
	  deletedSubtreeRoot,
	  nearestMountedAncestor
	) {
	  for (; null !== nextEffect; ) {
	    var fiber = nextEffect;
	    switch (fiber.tag) {
	      case 0:
	      case 11:
	      case 15:
	        commitHookEffectListUnmount(8, fiber, nearestMountedAncestor);
	        break;
	      case 23:
	      case 22:
	        if (
	          null !== fiber.memoizedState &&
	          null !== fiber.memoizedState.cachePool
	        ) {
	          var cache = fiber.memoizedState.cachePool.pool;
	          null != cache && cache.refCount++;
	        }
	        break;
	      case 24:
	        releaseCache(fiber.memoizedState.cache);
	    }
	    cache = fiber.child;
	    if (null !== cache) (cache.return = fiber), (nextEffect = cache);
	    else
	      a: for (fiber = deletedSubtreeRoot; null !== nextEffect; ) {
	        cache = nextEffect;
	        var sibling = cache.sibling,
	          returnFiber = cache.return;
	        detachFiberAfterEffects(cache);
	        if (cache === fiber) {
	          nextEffect = null;
	          break a;
	        }
	        if (null !== sibling) {
	          sibling.return = returnFiber;
	          nextEffect = sibling;
	          break a;
	        }
	        nextEffect = returnFiber;
	      }
	  }
	}
	var DefaultAsyncDispatcher = {
	    getCacheForType: function (resourceType) {
	      var cache = readContext(CacheContext),
	        cacheForType = cache.data.get(resourceType);
	      void 0 === cacheForType &&
	        ((cacheForType = resourceType()),
	        cache.data.set(resourceType, cacheForType));
	      return cacheForType;
	    }
	  },
	  PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map,
	  executionContext = 0,
	  workInProgressRoot = null,
	  workInProgress = null,
	  workInProgressRootRenderLanes = 0,
	  workInProgressSuspendedReason = 0,
	  workInProgressThrownValue = null,
	  workInProgressRootDidSkipSuspendedSiblings = false,
	  workInProgressRootIsPrerendering = false,
	  workInProgressRootDidAttachPingListener = false,
	  entangledRenderLanes = 0,
	  workInProgressRootExitStatus = 0,
	  workInProgressRootSkippedLanes = 0,
	  workInProgressRootInterleavedUpdatedLanes = 0,
	  workInProgressRootPingedLanes = 0,
	  workInProgressDeferredLane = 0,
	  workInProgressSuspendedRetryLanes = 0,
	  workInProgressRootConcurrentErrors = null,
	  workInProgressRootRecoverableErrors = null,
	  workInProgressRootDidIncludeRecursiveRenderUpdate = false,
	  globalMostRecentFallbackTime = 0,
	  workInProgressRootRenderTargetTime = Infinity,
	  workInProgressTransitions = null,
	  legacyErrorBoundariesThatAlreadyFailed = null,
	  pendingEffectsStatus = 0,
	  pendingEffectsRoot = null,
	  pendingFinishedWork = null,
	  pendingEffectsLanes = 0,
	  pendingEffectsRemainingLanes = 0,
	  pendingPassiveTransitions = null,
	  pendingRecoverableErrors = null,
	  nestedUpdateCount = 0,
	  rootWithNestedUpdates = null;
	function requestUpdateLane() {
	  if (0 !== (executionContext & 2) && 0 !== workInProgressRootRenderLanes)
	    return workInProgressRootRenderLanes & -workInProgressRootRenderLanes;
	  if (null !== ReactSharedInternals.T) {
	    var actionScopeLane = currentEntangledLane;
	    return 0 !== actionScopeLane ? actionScopeLane : requestTransitionLane();
	  }
	  return resolveUpdatePriority();
	}
	function requestDeferredLane() {
	  0 === workInProgressDeferredLane &&
	    (workInProgressDeferredLane =
	      0 === (workInProgressRootRenderLanes & 536870912) || isHydrating
	        ? claimNextTransitionLane()
	        : 536870912);
	  var suspenseHandler = suspenseHandlerStackCursor.current;
	  null !== suspenseHandler && (suspenseHandler.flags |= 32);
	  return workInProgressDeferredLane;
	}
	function scheduleUpdateOnFiber(root, fiber, lane) {
	  if (
	    (root === workInProgressRoot &&
	      (2 === workInProgressSuspendedReason ||
	        9 === workInProgressSuspendedReason)) ||
	    null !== root.cancelPendingCommit
	  )
	    prepareFreshStack(root, 0),
	      markRootSuspended(
	        root,
	        workInProgressRootRenderLanes,
	        workInProgressDeferredLane,
	        false
	      );
	  markRootUpdated$1(root, lane);
	  if (0 === (executionContext & 2) || root !== workInProgressRoot)
	    root === workInProgressRoot &&
	      (0 === (executionContext & 2) &&
	        (workInProgressRootInterleavedUpdatedLanes |= lane),
	      4 === workInProgressRootExitStatus &&
	        markRootSuspended(
	          root,
	          workInProgressRootRenderLanes,
	          workInProgressDeferredLane,
	          false
	        )),
	      ensureRootIsScheduled(root);
	}
	function performWorkOnRoot(root$jscomp$0, lanes, forceSync) {
	  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
	  var shouldTimeSlice =
	      (!forceSync &&
	        0 === (lanes & 124) &&
	        0 === (lanes & root$jscomp$0.expiredLanes)) ||
	      checkIfRootIsPrerendering(root$jscomp$0, lanes),
	    exitStatus = shouldTimeSlice
	      ? renderRootConcurrent(root$jscomp$0, lanes)
	      : renderRootSync(root$jscomp$0, lanes, true),
	    renderWasConcurrent = shouldTimeSlice;
	  do {
	    if (0 === exitStatus) {
	      workInProgressRootIsPrerendering &&
	        !shouldTimeSlice &&
	        markRootSuspended(root$jscomp$0, lanes, 0, false);
	      break;
	    } else {
	      forceSync = root$jscomp$0.current.alternate;
	      if (
	        renderWasConcurrent &&
	        !isRenderConsistentWithExternalStores(forceSync)
	      ) {
	        exitStatus = renderRootSync(root$jscomp$0, lanes, false);
	        renderWasConcurrent = false;
	        continue;
	      }
	      if (2 === exitStatus) {
	        renderWasConcurrent = lanes;
	        if (root$jscomp$0.errorRecoveryDisabledLanes & renderWasConcurrent)
	          var JSCompiler_inline_result = 0;
	        else
	          (JSCompiler_inline_result = root$jscomp$0.pendingLanes & -536870913),
	            (JSCompiler_inline_result =
	              0 !== JSCompiler_inline_result
	                ? JSCompiler_inline_result
	                : JSCompiler_inline_result & 536870912
	                  ? 536870912
	                  : 0);
	        if (0 !== JSCompiler_inline_result) {
	          lanes = JSCompiler_inline_result;
	          a: {
	            var root = root$jscomp$0;
	            exitStatus = workInProgressRootConcurrentErrors;
	            var wasRootDehydrated = root.current.memoizedState.isDehydrated;
	            wasRootDehydrated &&
	              (prepareFreshStack(root, JSCompiler_inline_result).flags |= 256);
	            JSCompiler_inline_result = renderRootSync(
	              root,
	              JSCompiler_inline_result,
	              false
	            );
	            if (2 !== JSCompiler_inline_result) {
	              if (
	                workInProgressRootDidAttachPingListener &&
	                !wasRootDehydrated
	              ) {
	                root.errorRecoveryDisabledLanes |= renderWasConcurrent;
	                workInProgressRootInterleavedUpdatedLanes |=
	                  renderWasConcurrent;
	                exitStatus = 4;
	                break a;
	              }
	              renderWasConcurrent = workInProgressRootRecoverableErrors;
	              workInProgressRootRecoverableErrors = exitStatus;
	              null !== renderWasConcurrent &&
	                (null === workInProgressRootRecoverableErrors
	                  ? (workInProgressRootRecoverableErrors = renderWasConcurrent)
	                  : workInProgressRootRecoverableErrors.push.apply(
	                      workInProgressRootRecoverableErrors,
	                      renderWasConcurrent
	                    ));
	            }
	            exitStatus = JSCompiler_inline_result;
	          }
	          renderWasConcurrent = false;
	          if (2 !== exitStatus) continue;
	        }
	      }
	      if (1 === exitStatus) {
	        prepareFreshStack(root$jscomp$0, 0);
	        markRootSuspended(root$jscomp$0, lanes, 0, true);
	        break;
	      }
	      a: {
	        shouldTimeSlice = root$jscomp$0;
	        renderWasConcurrent = exitStatus;
	        switch (renderWasConcurrent) {
	          case 0:
	          case 1:
	            throw Error(formatProdErrorMessage(345));
	          case 4:
	            if ((lanes & 4194048) !== lanes) break;
	          case 6:
	            markRootSuspended(
	              shouldTimeSlice,
	              lanes,
	              workInProgressDeferredLane,
	              !workInProgressRootDidSkipSuspendedSiblings
	            );
	            break a;
	          case 2:
	            workInProgressRootRecoverableErrors = null;
	            break;
	          case 3:
	          case 5:
	            break;
	          default:
	            throw Error(formatProdErrorMessage(329));
	        }
	        if (
	          (lanes & 62914560) === lanes &&
	          ((exitStatus = globalMostRecentFallbackTime + 300 - now()),
	          10 < exitStatus)
	        ) {
	          markRootSuspended(
	            shouldTimeSlice,
	            lanes,
	            workInProgressDeferredLane,
	            !workInProgressRootDidSkipSuspendedSiblings
	          );
	          if (0 !== getNextLanes(shouldTimeSlice, 0, true)) break a;
	          shouldTimeSlice.timeoutHandle = scheduleTimeout(
	            commitRootWhenReady.bind(
	              null,
	              shouldTimeSlice,
	              forceSync,
	              workInProgressRootRecoverableErrors,
	              workInProgressTransitions,
	              workInProgressRootDidIncludeRecursiveRenderUpdate,
	              lanes,
	              workInProgressDeferredLane,
	              workInProgressRootInterleavedUpdatedLanes,
	              workInProgressSuspendedRetryLanes,
	              workInProgressRootDidSkipSuspendedSiblings,
	              renderWasConcurrent,
	              2,
	              -0,
	              0
	            ),
	            exitStatus
	          );
	          break a;
	        }
	        commitRootWhenReady(
	          shouldTimeSlice,
	          forceSync,
	          workInProgressRootRecoverableErrors,
	          workInProgressTransitions,
	          workInProgressRootDidIncludeRecursiveRenderUpdate,
	          lanes,
	          workInProgressDeferredLane,
	          workInProgressRootInterleavedUpdatedLanes,
	          workInProgressSuspendedRetryLanes,
	          workInProgressRootDidSkipSuspendedSiblings,
	          renderWasConcurrent,
	          0,
	          -0,
	          0
	        );
	      }
	    }
	    break;
	  } while (1);
	  ensureRootIsScheduled(root$jscomp$0);
	}
	function commitRootWhenReady(
	  root,
	  finishedWork,
	  recoverableErrors,
	  transitions,
	  didIncludeRenderPhaseUpdate,
	  lanes,
	  spawnedLane,
	  updatedLanes,
	  suspendedRetryLanes,
	  didSkipSuspendedSiblings,
	  exitStatus,
	  suspendedCommitReason,
	  completedRenderStartTime,
	  completedRenderEndTime
	) {
	  root.timeoutHandle = -1;
	  suspendedCommitReason = finishedWork.subtreeFlags;
	  if (
	    suspendedCommitReason & 8192 ||
	    16785408 === (suspendedCommitReason & 16785408)
	  )
	    if (
	      ((suspendedState = { stylesheets: null, count: 0, unsuspend: noop }),
	      accumulateSuspenseyCommitOnFiber(finishedWork),
	      (suspendedCommitReason = waitForCommitToBeReady()),
	      null !== suspendedCommitReason)
	    ) {
	      root.cancelPendingCommit = suspendedCommitReason(
	        commitRoot.bind(
	          null,
	          root,
	          finishedWork,
	          lanes,
	          recoverableErrors,
	          transitions,
	          didIncludeRenderPhaseUpdate,
	          spawnedLane,
	          updatedLanes,
	          suspendedRetryLanes,
	          exitStatus,
	          1,
	          completedRenderStartTime,
	          completedRenderEndTime
	        )
	      );
	      markRootSuspended(root, lanes, spawnedLane, !didSkipSuspendedSiblings);
	      return;
	    }
	  commitRoot(
	    root,
	    finishedWork,
	    lanes,
	    recoverableErrors,
	    transitions,
	    didIncludeRenderPhaseUpdate,
	    spawnedLane,
	    updatedLanes,
	    suspendedRetryLanes
	  );
	}
	function isRenderConsistentWithExternalStores(finishedWork) {
	  for (var node = finishedWork; ; ) {
	    var tag = node.tag;
	    if (
	      (0 === tag || 11 === tag || 15 === tag) &&
	      node.flags & 16384 &&
	      ((tag = node.updateQueue),
	      null !== tag && ((tag = tag.stores), null !== tag))
	    )
	      for (var i = 0; i < tag.length; i++) {
	        var check = tag[i],
	          getSnapshot = check.getSnapshot;
	        check = check.value;
	        try {
	          if (!objectIs(getSnapshot(), check)) return !1;
	        } catch (error) {
	          return false;
	        }
	      }
	    tag = node.child;
	    if (node.subtreeFlags & 16384 && null !== tag)
	      (tag.return = node), (node = tag);
	    else {
	      if (node === finishedWork) break;
	      for (; null === node.sibling; ) {
	        if (null === node.return || node.return === finishedWork) return true;
	        node = node.return;
	      }
	      node.sibling.return = node.return;
	      node = node.sibling;
	    }
	  }
	  return true;
	}
	function markRootSuspended(
	  root,
	  suspendedLanes,
	  spawnedLane,
	  didAttemptEntireTree
	) {
	  suspendedLanes &= ~workInProgressRootPingedLanes;
	  suspendedLanes &= ~workInProgressRootInterleavedUpdatedLanes;
	  root.suspendedLanes |= suspendedLanes;
	  root.pingedLanes &= ~suspendedLanes;
	  didAttemptEntireTree && (root.warmLanes |= suspendedLanes);
	  didAttemptEntireTree = root.expirationTimes;
	  for (var lanes = suspendedLanes; 0 < lanes; ) {
	    var index$4 = 31 - clz32(lanes),
	      lane = 1 << index$4;
	    didAttemptEntireTree[index$4] = -1;
	    lanes &= ~lane;
	  }
	  0 !== spawnedLane &&
	    markSpawnedDeferredLane(root, spawnedLane, suspendedLanes);
	}
	function flushSyncWork$1() {
	  return 0 === (executionContext & 6)
	    ? (flushSyncWorkAcrossRoots_impl(0), false)
	    : true;
	}
	function resetWorkInProgressStack() {
	  if (null !== workInProgress) {
	    if (0 === workInProgressSuspendedReason)
	      var interruptedWork = workInProgress.return;
	    else
	      (interruptedWork = workInProgress),
	        (lastContextDependency = currentlyRenderingFiber$1 = null),
	        resetHooksOnUnwind(interruptedWork),
	        (thenableState = null),
	        (thenableIndexCounter = 0),
	        (interruptedWork = workInProgress);
	    for (; null !== interruptedWork; )
	      unwindInterruptedWork(interruptedWork.alternate, interruptedWork),
	        (interruptedWork = interruptedWork.return);
	    workInProgress = null;
	  }
	}
	function prepareFreshStack(root, lanes) {
	  var timeoutHandle = root.timeoutHandle;
	  -1 !== timeoutHandle &&
	    ((root.timeoutHandle = -1), cancelTimeout(timeoutHandle));
	  timeoutHandle = root.cancelPendingCommit;
	  null !== timeoutHandle &&
	    ((root.cancelPendingCommit = null), timeoutHandle());
	  resetWorkInProgressStack();
	  workInProgressRoot = root;
	  workInProgress = timeoutHandle = createWorkInProgress(root.current, null);
	  workInProgressRootRenderLanes = lanes;
	  workInProgressSuspendedReason = 0;
	  workInProgressThrownValue = null;
	  workInProgressRootDidSkipSuspendedSiblings = false;
	  workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root, lanes);
	  workInProgressRootDidAttachPingListener = false;
	  workInProgressSuspendedRetryLanes =
	    workInProgressDeferredLane =
	    workInProgressRootPingedLanes =
	    workInProgressRootInterleavedUpdatedLanes =
	    workInProgressRootSkippedLanes =
	    workInProgressRootExitStatus =
	      0;
	  workInProgressRootRecoverableErrors = workInProgressRootConcurrentErrors =
	    null;
	  workInProgressRootDidIncludeRecursiveRenderUpdate = false;
	  0 !== (lanes & 8) && (lanes |= lanes & 32);
	  var allEntangledLanes = root.entangledLanes;
	  if (0 !== allEntangledLanes)
	    for (
	      root = root.entanglements, allEntangledLanes &= lanes;
	      0 < allEntangledLanes;

	    ) {
	      var index$2 = 31 - clz32(allEntangledLanes),
	        lane = 1 << index$2;
	      lanes |= root[index$2];
	      allEntangledLanes &= ~lane;
	    }
	  entangledRenderLanes = lanes;
	  finishQueueingConcurrentUpdates();
	  return timeoutHandle;
	}
	function handleThrow(root, thrownValue) {
	  currentlyRenderingFiber = null;
	  ReactSharedInternals.H = ContextOnlyDispatcher;
	  thrownValue === SuspenseException || thrownValue === SuspenseActionException
	    ? ((thrownValue = getSuspendedThenable()),
	      (workInProgressSuspendedReason = 3))
	    : thrownValue === SuspenseyCommitException
	      ? ((thrownValue = getSuspendedThenable()),
	        (workInProgressSuspendedReason = 4))
	      : (workInProgressSuspendedReason =
	          thrownValue === SelectiveHydrationException
	            ? 8
	            : null !== thrownValue &&
	                "object" === typeof thrownValue &&
	                "function" === typeof thrownValue.then
	              ? 6
	              : 1);
	  workInProgressThrownValue = thrownValue;
	  null === workInProgress &&
	    ((workInProgressRootExitStatus = 1),
	    logUncaughtError(
	      root,
	      createCapturedValueAtFiber(thrownValue, root.current)
	    ));
	}
	function pushDispatcher() {
	  var prevDispatcher = ReactSharedInternals.H;
	  ReactSharedInternals.H = ContextOnlyDispatcher;
	  return null === prevDispatcher ? ContextOnlyDispatcher : prevDispatcher;
	}
	function pushAsyncDispatcher() {
	  var prevAsyncDispatcher = ReactSharedInternals.A;
	  ReactSharedInternals.A = DefaultAsyncDispatcher;
	  return prevAsyncDispatcher;
	}
	function renderDidSuspendDelayIfPossible() {
	  workInProgressRootExitStatus = 4;
	  workInProgressRootDidSkipSuspendedSiblings ||
	    ((workInProgressRootRenderLanes & 4194048) !==
	      workInProgressRootRenderLanes &&
	      null !== suspenseHandlerStackCursor.current) ||
	    (workInProgressRootIsPrerendering = true);
	  (0 === (workInProgressRootSkippedLanes & 134217727) &&
	    0 === (workInProgressRootInterleavedUpdatedLanes & 134217727)) ||
	    null === workInProgressRoot ||
	    markRootSuspended(
	      workInProgressRoot,
	      workInProgressRootRenderLanes,
	      workInProgressDeferredLane,
	      false
	    );
	}
	function renderRootSync(root, lanes, shouldYieldForPrerendering) {
	  var prevExecutionContext = executionContext;
	  executionContext |= 2;
	  var prevDispatcher = pushDispatcher(),
	    prevAsyncDispatcher = pushAsyncDispatcher();
	  if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes)
	    (workInProgressTransitions = null), prepareFreshStack(root, lanes);
	  lanes = false;
	  var exitStatus = workInProgressRootExitStatus;
	  a: do
	    try {
	      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
	        var unitOfWork = workInProgress,
	          thrownValue = workInProgressThrownValue;
	        switch (workInProgressSuspendedReason) {
	          case 8:
	            resetWorkInProgressStack();
	            exitStatus = 6;
	            break a;
	          case 3:
	          case 2:
	          case 9:
	          case 6:
	            null === suspenseHandlerStackCursor.current && (lanes = !0);
	            var reason = workInProgressSuspendedReason;
	            workInProgressSuspendedReason = 0;
	            workInProgressThrownValue = null;
	            throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
	            if (
	              shouldYieldForPrerendering &&
	              workInProgressRootIsPrerendering
	            ) {
	              exitStatus = 0;
	              break a;
	            }
	            break;
	          default:
	            (reason = workInProgressSuspendedReason),
	              (workInProgressSuspendedReason = 0),
	              (workInProgressThrownValue = null),
	              throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
	        }
	      }
	      workLoopSync();
	      exitStatus = workInProgressRootExitStatus;
	      break;
	    } catch (thrownValue$167) {
	      handleThrow(root, thrownValue$167);
	    }
	  while (1);
	  lanes && root.shellSuspendCounter++;
	  lastContextDependency = currentlyRenderingFiber$1 = null;
	  executionContext = prevExecutionContext;
	  ReactSharedInternals.H = prevDispatcher;
	  ReactSharedInternals.A = prevAsyncDispatcher;
	  null === workInProgress &&
	    ((workInProgressRoot = null),
	    (workInProgressRootRenderLanes = 0),
	    finishQueueingConcurrentUpdates());
	  return exitStatus;
	}
	function workLoopSync() {
	  for (; null !== workInProgress; ) performUnitOfWork(workInProgress);
	}
	function renderRootConcurrent(root, lanes) {
	  var prevExecutionContext = executionContext;
	  executionContext |= 2;
	  var prevDispatcher = pushDispatcher(),
	    prevAsyncDispatcher = pushAsyncDispatcher();
	  workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes
	    ? ((workInProgressTransitions = null),
	      (workInProgressRootRenderTargetTime = now() + 500),
	      prepareFreshStack(root, lanes))
	    : (workInProgressRootIsPrerendering = checkIfRootIsPrerendering(
	        root,
	        lanes
	      ));
	  a: do
	    try {
	      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
	        lanes = workInProgress;
	        var thrownValue = workInProgressThrownValue;
	        b: switch (workInProgressSuspendedReason) {
	          case 1:
	            workInProgressSuspendedReason = 0;
	            workInProgressThrownValue = null;
	            throwAndUnwindWorkLoop(root, lanes, thrownValue, 1);
	            break;
	          case 2:
	          case 9:
	            if (isThenableResolved(thrownValue)) {
	              workInProgressSuspendedReason = 0;
	              workInProgressThrownValue = null;
	              replaySuspendedUnitOfWork(lanes);
	              break;
	            }
	            lanes = function () {
	              (2 !== workInProgressSuspendedReason &&
	                9 !== workInProgressSuspendedReason) ||
	                workInProgressRoot !== root ||
	                (workInProgressSuspendedReason = 7);
	              ensureRootIsScheduled(root);
	            };
	            thrownValue.then(lanes, lanes);
	            break a;
	          case 3:
	            workInProgressSuspendedReason = 7;
	            break a;
	          case 4:
	            workInProgressSuspendedReason = 5;
	            break a;
	          case 7:
	            isThenableResolved(thrownValue)
	              ? ((workInProgressSuspendedReason = 0),
	                (workInProgressThrownValue = null),
	                replaySuspendedUnitOfWork(lanes))
	              : ((workInProgressSuspendedReason = 0),
	                (workInProgressThrownValue = null),
	                throwAndUnwindWorkLoop(root, lanes, thrownValue, 7));
	            break;
	          case 5:
	            var resource = null;
	            switch (workInProgress.tag) {
	              case 26:
	                resource = workInProgress.memoizedState;
	              case 5:
	              case 27:
	                var hostFiber = workInProgress;
	                if (resource ? preloadResource(resource) : 1) {
	                  workInProgressSuspendedReason = 0;
	                  workInProgressThrownValue = null;
	                  var sibling = hostFiber.sibling;
	                  if (null !== sibling) workInProgress = sibling;
	                  else {
	                    var returnFiber = hostFiber.return;
	                    null !== returnFiber
	                      ? ((workInProgress = returnFiber),
	                        completeUnitOfWork(returnFiber))
	                      : (workInProgress = null);
	                  }
	                  break b;
	                }
	            }
	            workInProgressSuspendedReason = 0;
	            workInProgressThrownValue = null;
	            throwAndUnwindWorkLoop(root, lanes, thrownValue, 5);
	            break;
	          case 6:
	            workInProgressSuspendedReason = 0;
	            workInProgressThrownValue = null;
	            throwAndUnwindWorkLoop(root, lanes, thrownValue, 6);
	            break;
	          case 8:
	            resetWorkInProgressStack();
	            workInProgressRootExitStatus = 6;
	            break a;
	          default:
	            throw Error(formatProdErrorMessage(462));
	        }
	      }
	      workLoopConcurrentByScheduler();
	      break;
	    } catch (thrownValue$169) {
	      handleThrow(root, thrownValue$169);
	    }
	  while (1);
	  lastContextDependency = currentlyRenderingFiber$1 = null;
	  ReactSharedInternals.H = prevDispatcher;
	  ReactSharedInternals.A = prevAsyncDispatcher;
	  executionContext = prevExecutionContext;
	  if (null !== workInProgress) return 0;
	  workInProgressRoot = null;
	  workInProgressRootRenderLanes = 0;
	  finishQueueingConcurrentUpdates();
	  return workInProgressRootExitStatus;
	}
	function workLoopConcurrentByScheduler() {
	  for (; null !== workInProgress && !shouldYield(); )
	    performUnitOfWork(workInProgress);
	}
	function performUnitOfWork(unitOfWork) {
	  var next = beginWork(unitOfWork.alternate, unitOfWork, entangledRenderLanes);
	  unitOfWork.memoizedProps = unitOfWork.pendingProps;
	  null === next ? completeUnitOfWork(unitOfWork) : (workInProgress = next);
	}
	function replaySuspendedUnitOfWork(unitOfWork) {
	  var next = unitOfWork;
	  var current = next.alternate;
	  switch (next.tag) {
	    case 15:
	    case 0:
	      next = replayFunctionComponent(
	        current,
	        next,
	        next.pendingProps,
	        next.type,
	        void 0,
	        workInProgressRootRenderLanes
	      );
	      break;
	    case 11:
	      next = replayFunctionComponent(
	        current,
	        next,
	        next.pendingProps,
	        next.type.render,
	        next.ref,
	        workInProgressRootRenderLanes
	      );
	      break;
	    case 5:
	      resetHooksOnUnwind(next);
	    default:
	      unwindInterruptedWork(current, next),
	        (next = workInProgress =
	          resetWorkInProgress(next, entangledRenderLanes)),
	        (next = beginWork(current, next, entangledRenderLanes));
	  }
	  unitOfWork.memoizedProps = unitOfWork.pendingProps;
	  null === next ? completeUnitOfWork(unitOfWork) : (workInProgress = next);
	}
	function throwAndUnwindWorkLoop(
	  root,
	  unitOfWork,
	  thrownValue,
	  suspendedReason
	) {
	  lastContextDependency = currentlyRenderingFiber$1 = null;
	  resetHooksOnUnwind(unitOfWork);
	  thenableState = null;
	  thenableIndexCounter = 0;
	  var returnFiber = unitOfWork.return;
	  try {
	    if (
	      throwException(
	        root,
	        returnFiber,
	        unitOfWork,
	        thrownValue,
	        workInProgressRootRenderLanes
	      )
	    ) {
	      workInProgressRootExitStatus = 1;
	      logUncaughtError(
	        root,
	        createCapturedValueAtFiber(thrownValue, root.current)
	      );
	      workInProgress = null;
	      return;
	    }
	  } catch (error) {
	    if (null !== returnFiber) throw ((workInProgress = returnFiber), error);
	    workInProgressRootExitStatus = 1;
	    logUncaughtError(
	      root,
	      createCapturedValueAtFiber(thrownValue, root.current)
	    );
	    workInProgress = null;
	    return;
	  }
	  if (unitOfWork.flags & 32768) {
	    if (isHydrating || 1 === suspendedReason) root = true;
	    else if (
	      workInProgressRootIsPrerendering ||
	      0 !== (workInProgressRootRenderLanes & 536870912)
	    )
	      root = false;
	    else if (
	      ((workInProgressRootDidSkipSuspendedSiblings = root = true),
	      2 === suspendedReason ||
	        9 === suspendedReason ||
	        3 === suspendedReason ||
	        6 === suspendedReason)
	    )
	      (suspendedReason = suspenseHandlerStackCursor.current),
	        null !== suspendedReason &&
	          13 === suspendedReason.tag &&
	          (suspendedReason.flags |= 16384);
	    unwindUnitOfWork(unitOfWork, root);
	  } else completeUnitOfWork(unitOfWork);
	}
	function completeUnitOfWork(unitOfWork) {
	  var completedWork = unitOfWork;
	  do {
	    if (0 !== (completedWork.flags & 32768)) {
	      unwindUnitOfWork(
	        completedWork,
	        workInProgressRootDidSkipSuspendedSiblings
	      );
	      return;
	    }
	    unitOfWork = completedWork.return;
	    var next = completeWork(
	      completedWork.alternate,
	      completedWork,
	      entangledRenderLanes
	    );
	    if (null !== next) {
	      workInProgress = next;
	      return;
	    }
	    completedWork = completedWork.sibling;
	    if (null !== completedWork) {
	      workInProgress = completedWork;
	      return;
	    }
	    workInProgress = completedWork = unitOfWork;
	  } while (null !== completedWork);
	  0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 5);
	}
	function unwindUnitOfWork(unitOfWork, skipSiblings) {
	  do {
	    var next = unwindWork(unitOfWork.alternate, unitOfWork);
	    if (null !== next) {
	      next.flags &= 32767;
	      workInProgress = next;
	      return;
	    }
	    next = unitOfWork.return;
	    null !== next &&
	      ((next.flags |= 32768), (next.subtreeFlags = 0), (next.deletions = null));
	    if (
	      !skipSiblings &&
	      ((unitOfWork = unitOfWork.sibling), null !== unitOfWork)
	    ) {
	      workInProgress = unitOfWork;
	      return;
	    }
	    workInProgress = unitOfWork = next;
	  } while (null !== unitOfWork);
	  workInProgressRootExitStatus = 6;
	  workInProgress = null;
	}
	function commitRoot(
	  root,
	  finishedWork,
	  lanes,
	  recoverableErrors,
	  transitions,
	  didIncludeRenderPhaseUpdate,
	  spawnedLane,
	  updatedLanes,
	  suspendedRetryLanes
	) {
	  root.cancelPendingCommit = null;
	  do flushPendingEffects();
	  while (0 !== pendingEffectsStatus);
	  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
	  if (null !== finishedWork) {
	    if (finishedWork === root.current) throw Error(formatProdErrorMessage(177));
	    didIncludeRenderPhaseUpdate = finishedWork.lanes | finishedWork.childLanes;
	    didIncludeRenderPhaseUpdate |= concurrentlyUpdatedLanes;
	    markRootFinished(
	      root,
	      lanes,
	      didIncludeRenderPhaseUpdate,
	      spawnedLane,
	      updatedLanes,
	      suspendedRetryLanes
	    );
	    root === workInProgressRoot &&
	      ((workInProgress = workInProgressRoot = null),
	      (workInProgressRootRenderLanes = 0));
	    pendingFinishedWork = finishedWork;
	    pendingEffectsRoot = root;
	    pendingEffectsLanes = lanes;
	    pendingEffectsRemainingLanes = didIncludeRenderPhaseUpdate;
	    pendingPassiveTransitions = transitions;
	    pendingRecoverableErrors = recoverableErrors;
	    0 !== (finishedWork.subtreeFlags & 10256) ||
	    0 !== (finishedWork.flags & 10256)
	      ? ((root.callbackNode = null),
	        (root.callbackPriority = 0),
	        scheduleCallback$1(NormalPriority$1, function () {
	          flushPassiveEffects();
	          return null;
	        }))
	      : ((root.callbackNode = null), (root.callbackPriority = 0));
	    recoverableErrors = 0 !== (finishedWork.flags & 13878);
	    if (0 !== (finishedWork.subtreeFlags & 13878) || recoverableErrors) {
	      recoverableErrors = ReactSharedInternals.T;
	      ReactSharedInternals.T = null;
	      transitions = ReactDOMSharedInternals.p;
	      ReactDOMSharedInternals.p = 2;
	      spawnedLane = executionContext;
	      executionContext |= 4;
	      try {
	        commitBeforeMutationEffects(root, finishedWork, lanes);
	      } finally {
	        (executionContext = spawnedLane),
	          (ReactDOMSharedInternals.p = transitions),
	          (ReactSharedInternals.T = recoverableErrors);
	      }
	    }
	    pendingEffectsStatus = 1;
	    flushMutationEffects();
	    flushLayoutEffects();
	    flushSpawnedWork();
	  }
	}
	function flushMutationEffects() {
	  if (1 === pendingEffectsStatus) {
	    pendingEffectsStatus = 0;
	    var root = pendingEffectsRoot,
	      finishedWork = pendingFinishedWork,
	      rootMutationHasEffect = 0 !== (finishedWork.flags & 13878);
	    if (0 !== (finishedWork.subtreeFlags & 13878) || rootMutationHasEffect) {
	      rootMutationHasEffect = ReactSharedInternals.T;
	      ReactSharedInternals.T = null;
	      var previousPriority = ReactDOMSharedInternals.p;
	      ReactDOMSharedInternals.p = 2;
	      var prevExecutionContext = executionContext;
	      executionContext |= 4;
	      try {
	        commitMutationEffectsOnFiber(finishedWork, root);
	        var priorSelectionInformation = selectionInformation,
	          curFocusedElem = getActiveElementDeep(root.containerInfo),
	          priorFocusedElem = priorSelectionInformation.focusedElem,
	          priorSelectionRange = priorSelectionInformation.selectionRange;
	        if (
	          curFocusedElem !== priorFocusedElem &&
	          priorFocusedElem &&
	          priorFocusedElem.ownerDocument &&
	          containsNode(
	            priorFocusedElem.ownerDocument.documentElement,
	            priorFocusedElem
	          )
	        ) {
	          if (
	            null !== priorSelectionRange &&
	            hasSelectionCapabilities(priorFocusedElem)
	          ) {
	            var start = priorSelectionRange.start,
	              end = priorSelectionRange.end;
	            void 0 === end && (end = start);
	            if ("selectionStart" in priorFocusedElem)
	              (priorFocusedElem.selectionStart = start),
	                (priorFocusedElem.selectionEnd = Math.min(
	                  end,
	                  priorFocusedElem.value.length
	                ));
	            else {
	              var doc = priorFocusedElem.ownerDocument || document,
	                win = (doc && doc.defaultView) || window;
	              if (win.getSelection) {
	                var selection = win.getSelection(),
	                  length = priorFocusedElem.textContent.length,
	                  start$jscomp$0 = Math.min(priorSelectionRange.start, length),
	                  end$jscomp$0 =
	                    void 0 === priorSelectionRange.end
	                      ? start$jscomp$0
	                      : Math.min(priorSelectionRange.end, length);
	                !selection.extend &&
	                  start$jscomp$0 > end$jscomp$0 &&
	                  ((curFocusedElem = end$jscomp$0),
	                  (end$jscomp$0 = start$jscomp$0),
	                  (start$jscomp$0 = curFocusedElem));
	                var startMarker = getNodeForCharacterOffset(
	                    priorFocusedElem,
	                    start$jscomp$0
	                  ),
	                  endMarker = getNodeForCharacterOffset(
	                    priorFocusedElem,
	                    end$jscomp$0
	                  );
	                if (
	                  startMarker &&
	                  endMarker &&
	                  (1 !== selection.rangeCount ||
	                    selection.anchorNode !== startMarker.node ||
	                    selection.anchorOffset !== startMarker.offset ||
	                    selection.focusNode !== endMarker.node ||
	                    selection.focusOffset !== endMarker.offset)
	                ) {
	                  var range = doc.createRange();
	                  range.setStart(startMarker.node, startMarker.offset);
	                  selection.removeAllRanges();
	                  start$jscomp$0 > end$jscomp$0
	                    ? (selection.addRange(range),
	                      selection.extend(endMarker.node, endMarker.offset))
	                    : (range.setEnd(endMarker.node, endMarker.offset),
	                      selection.addRange(range));
	                }
	              }
	            }
	          }
	          doc = [];
	          for (
	            selection = priorFocusedElem;
	            (selection = selection.parentNode);

	          )
	            1 === selection.nodeType &&
	              doc.push({
	                element: selection,
	                left: selection.scrollLeft,
	                top: selection.scrollTop
	              });
	          "function" === typeof priorFocusedElem.focus &&
	            priorFocusedElem.focus();
	          for (
	            priorFocusedElem = 0;
	            priorFocusedElem < doc.length;
	            priorFocusedElem++
	          ) {
	            var info = doc[priorFocusedElem];
	            info.element.scrollLeft = info.left;
	            info.element.scrollTop = info.top;
	          }
	        }
	        _enabled = !!eventsEnabled;
	        selectionInformation = eventsEnabled = null;
	      } finally {
	        (executionContext = prevExecutionContext),
	          (ReactDOMSharedInternals.p = previousPriority),
	          (ReactSharedInternals.T = rootMutationHasEffect);
	      }
	    }
	    root.current = finishedWork;
	    pendingEffectsStatus = 2;
	  }
	}
	function flushLayoutEffects() {
	  if (2 === pendingEffectsStatus) {
	    pendingEffectsStatus = 0;
	    var root = pendingEffectsRoot,
	      finishedWork = pendingFinishedWork,
	      rootHasLayoutEffect = 0 !== (finishedWork.flags & 8772);
	    if (0 !== (finishedWork.subtreeFlags & 8772) || rootHasLayoutEffect) {
	      rootHasLayoutEffect = ReactSharedInternals.T;
	      ReactSharedInternals.T = null;
	      var previousPriority = ReactDOMSharedInternals.p;
	      ReactDOMSharedInternals.p = 2;
	      var prevExecutionContext = executionContext;
	      executionContext |= 4;
	      try {
	        commitLayoutEffectOnFiber(root, finishedWork.alternate, finishedWork);
	      } finally {
	        (executionContext = prevExecutionContext),
	          (ReactDOMSharedInternals.p = previousPriority),
	          (ReactSharedInternals.T = rootHasLayoutEffect);
	      }
	    }
	    pendingEffectsStatus = 3;
	  }
	}
	function flushSpawnedWork() {
	  if (4 === pendingEffectsStatus || 3 === pendingEffectsStatus) {
	    pendingEffectsStatus = 0;
	    requestPaint();
	    var root = pendingEffectsRoot,
	      finishedWork = pendingFinishedWork,
	      lanes = pendingEffectsLanes,
	      recoverableErrors = pendingRecoverableErrors;
	    0 !== (finishedWork.subtreeFlags & 10256) ||
	    0 !== (finishedWork.flags & 10256)
	      ? (pendingEffectsStatus = 5)
	      : ((pendingEffectsStatus = 0),
	        (pendingFinishedWork = pendingEffectsRoot = null),
	        releaseRootPooledCache(root, root.pendingLanes));
	    var remainingLanes = root.pendingLanes;
	    0 === remainingLanes && (legacyErrorBoundariesThatAlreadyFailed = null);
	    lanesToEventPriority(lanes);
	    finishedWork = finishedWork.stateNode;
	    if (injectedHook && "function" === typeof injectedHook.onCommitFiberRoot)
	      try {
	        injectedHook.onCommitFiberRoot(
	          rendererID,
	          finishedWork,
	          void 0,
	          128 === (finishedWork.current.flags & 128)
	        );
	      } catch (err) {}
	    if (null !== recoverableErrors) {
	      finishedWork = ReactSharedInternals.T;
	      remainingLanes = ReactDOMSharedInternals.p;
	      ReactDOMSharedInternals.p = 2;
	      ReactSharedInternals.T = null;
	      try {
	        for (
	          var onRecoverableError = root.onRecoverableError, i = 0;
	          i < recoverableErrors.length;
	          i++
	        ) {
	          var recoverableError = recoverableErrors[i];
	          onRecoverableError(recoverableError.value, {
	            componentStack: recoverableError.stack
	          });
	        }
	      } finally {
	        (ReactSharedInternals.T = finishedWork),
	          (ReactDOMSharedInternals.p = remainingLanes);
	      }
	    }
	    0 !== (pendingEffectsLanes & 3) && flushPendingEffects();
	    ensureRootIsScheduled(root);
	    remainingLanes = root.pendingLanes;
	    0 !== (lanes & 4194090) && 0 !== (remainingLanes & 42)
	      ? root === rootWithNestedUpdates
	        ? nestedUpdateCount++
	        : ((nestedUpdateCount = 0), (rootWithNestedUpdates = root))
	      : (nestedUpdateCount = 0);
	    flushSyncWorkAcrossRoots_impl(0);
	  }
	}
	function releaseRootPooledCache(root, remainingLanes) {
	  0 === (root.pooledCacheLanes &= remainingLanes) &&
	    ((remainingLanes = root.pooledCache),
	    null != remainingLanes &&
	      ((root.pooledCache = null), releaseCache(remainingLanes)));
	}
	function flushPendingEffects(wasDelayedCommit) {
	  flushMutationEffects();
	  flushLayoutEffects();
	  flushSpawnedWork();
	  return flushPassiveEffects();
	}
	function flushPassiveEffects() {
	  if (5 !== pendingEffectsStatus) return false;
	  var root = pendingEffectsRoot,
	    remainingLanes = pendingEffectsRemainingLanes;
	  pendingEffectsRemainingLanes = 0;
	  var renderPriority = lanesToEventPriority(pendingEffectsLanes),
	    prevTransition = ReactSharedInternals.T,
	    previousPriority = ReactDOMSharedInternals.p;
	  try {
	    ReactDOMSharedInternals.p = 32 > renderPriority ? 32 : renderPriority;
	    ReactSharedInternals.T = null;
	    renderPriority = pendingPassiveTransitions;
	    pendingPassiveTransitions = null;
	    var root$jscomp$0 = pendingEffectsRoot,
	      lanes = pendingEffectsLanes;
	    pendingEffectsStatus = 0;
	    pendingFinishedWork = pendingEffectsRoot = null;
	    pendingEffectsLanes = 0;
	    if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(331));
	    var prevExecutionContext = executionContext;
	    executionContext |= 4;
	    commitPassiveUnmountOnFiber(root$jscomp$0.current);
	    commitPassiveMountOnFiber(
	      root$jscomp$0,
	      root$jscomp$0.current,
	      lanes,
	      renderPriority
	    );
	    executionContext = prevExecutionContext;
	    flushSyncWorkAcrossRoots_impl(0, !1);
	    if (
	      injectedHook &&
	      "function" === typeof injectedHook.onPostCommitFiberRoot
	    )
	      try {
	        injectedHook.onPostCommitFiberRoot(rendererID, root$jscomp$0);
	      } catch (err) {}
	    return !0;
	  } finally {
	    (ReactDOMSharedInternals.p = previousPriority),
	      (ReactSharedInternals.T = prevTransition),
	      releaseRootPooledCache(root, remainingLanes);
	  }
	}
	function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
	  sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
	  sourceFiber = createRootErrorUpdate(rootFiber.stateNode, sourceFiber, 2);
	  rootFiber = enqueueUpdate(rootFiber, sourceFiber, 2);
	  null !== rootFiber &&
	    (markRootUpdated$1(rootFiber, 2), ensureRootIsScheduled(rootFiber));
	}
	function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
	  if (3 === sourceFiber.tag)
	    captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
	  else
	    for (; null !== nearestMountedAncestor; ) {
	      if (3 === nearestMountedAncestor.tag) {
	        captureCommitPhaseErrorOnRoot(
	          nearestMountedAncestor,
	          sourceFiber,
	          error
	        );
	        break;
	      } else if (1 === nearestMountedAncestor.tag) {
	        var instance = nearestMountedAncestor.stateNode;
	        if (
	          "function" ===
	            typeof nearestMountedAncestor.type.getDerivedStateFromError ||
	          ("function" === typeof instance.componentDidCatch &&
	            (null === legacyErrorBoundariesThatAlreadyFailed ||
	              !legacyErrorBoundariesThatAlreadyFailed.has(instance)))
	        ) {
	          sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
	          error = createClassErrorUpdate(2);
	          instance = enqueueUpdate(nearestMountedAncestor, error, 2);
	          null !== instance &&
	            (initializeClassErrorUpdate(
	              error,
	              instance,
	              nearestMountedAncestor,
	              sourceFiber
	            ),
	            markRootUpdated$1(instance, 2),
	            ensureRootIsScheduled(instance));
	          break;
	        }
	      }
	      nearestMountedAncestor = nearestMountedAncestor.return;
	    }
	}
	function attachPingListener(root, wakeable, lanes) {
	  var pingCache = root.pingCache;
	  if (null === pingCache) {
	    pingCache = root.pingCache = new PossiblyWeakMap();
	    var threadIDs = new Set();
	    pingCache.set(wakeable, threadIDs);
	  } else
	    (threadIDs = pingCache.get(wakeable)),
	      void 0 === threadIDs &&
	        ((threadIDs = new Set()), pingCache.set(wakeable, threadIDs));
	  threadIDs.has(lanes) ||
	    ((workInProgressRootDidAttachPingListener = true),
	    threadIDs.add(lanes),
	    (root = pingSuspendedRoot.bind(null, root, wakeable, lanes)),
	    wakeable.then(root, root));
	}
	function pingSuspendedRoot(root, wakeable, pingedLanes) {
	  var pingCache = root.pingCache;
	  null !== pingCache && pingCache.delete(wakeable);
	  root.pingedLanes |= root.suspendedLanes & pingedLanes;
	  root.warmLanes &= ~pingedLanes;
	  workInProgressRoot === root &&
	    (workInProgressRootRenderLanes & pingedLanes) === pingedLanes &&
	    (4 === workInProgressRootExitStatus ||
	    (3 === workInProgressRootExitStatus &&
	      (workInProgressRootRenderLanes & 62914560) ===
	        workInProgressRootRenderLanes &&
	      300 > now() - globalMostRecentFallbackTime)
	      ? 0 === (executionContext & 2) && prepareFreshStack(root, 0)
	      : (workInProgressRootPingedLanes |= pingedLanes),
	    workInProgressSuspendedRetryLanes === workInProgressRootRenderLanes &&
	      (workInProgressSuspendedRetryLanes = 0));
	  ensureRootIsScheduled(root);
	}
	function retryTimedOutBoundary(boundaryFiber, retryLane) {
	  0 === retryLane && (retryLane = claimNextRetryLane());
	  boundaryFiber = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
	  null !== boundaryFiber &&
	    (markRootUpdated$1(boundaryFiber, retryLane),
	    ensureRootIsScheduled(boundaryFiber));
	}
	function retryDehydratedSuspenseBoundary(boundaryFiber) {
	  var suspenseState = boundaryFiber.memoizedState,
	    retryLane = 0;
	  null !== suspenseState && (retryLane = suspenseState.retryLane);
	  retryTimedOutBoundary(boundaryFiber, retryLane);
	}
	function resolveRetryWakeable(boundaryFiber, wakeable) {
	  var retryLane = 0;
	  switch (boundaryFiber.tag) {
	    case 13:
	      var retryCache = boundaryFiber.stateNode;
	      var suspenseState = boundaryFiber.memoizedState;
	      null !== suspenseState && (retryLane = suspenseState.retryLane);
	      break;
	    case 19:
	      retryCache = boundaryFiber.stateNode;
	      break;
	    case 22:
	      retryCache = boundaryFiber.stateNode._retryCache;
	      break;
	    default:
	      throw Error(formatProdErrorMessage(314));
	  }
	  null !== retryCache && retryCache.delete(wakeable);
	  retryTimedOutBoundary(boundaryFiber, retryLane);
	}
	function scheduleCallback$1(priorityLevel, callback) {
	  return scheduleCallback$3(priorityLevel, callback);
	}
	var firstScheduledRoot = null,
	  lastScheduledRoot = null,
	  didScheduleMicrotask = false,
	  mightHavePendingSyncWork = false,
	  isFlushingWork = false,
	  currentEventTransitionLane = 0;
	function ensureRootIsScheduled(root) {
	  root !== lastScheduledRoot &&
	    null === root.next &&
	    (null === lastScheduledRoot
	      ? (firstScheduledRoot = lastScheduledRoot = root)
	      : (lastScheduledRoot = lastScheduledRoot.next = root));
	  mightHavePendingSyncWork = true;
	  didScheduleMicrotask ||
	    ((didScheduleMicrotask = true), scheduleImmediateRootScheduleTask());
	}
	function flushSyncWorkAcrossRoots_impl(syncTransitionLanes, onlyLegacy) {
	  if (!isFlushingWork && mightHavePendingSyncWork) {
	    isFlushingWork = true;
	    do {
	      var didPerformSomeWork = false;
	      for (var root$174 = firstScheduledRoot; null !== root$174; ) {
	        if (0 !== syncTransitionLanes) {
	            var pendingLanes = root$174.pendingLanes;
	            if (0 === pendingLanes) var JSCompiler_inline_result = 0;
	            else {
	              var suspendedLanes = root$174.suspendedLanes,
	                pingedLanes = root$174.pingedLanes;
	              JSCompiler_inline_result =
	                (1 << (31 - clz32(42 | syncTransitionLanes) + 1)) - 1;
	              JSCompiler_inline_result &=
	                pendingLanes & ~(suspendedLanes & ~pingedLanes);
	              JSCompiler_inline_result =
	                JSCompiler_inline_result & 201326741
	                  ? (JSCompiler_inline_result & 201326741) | 1
	                  : JSCompiler_inline_result
	                    ? JSCompiler_inline_result | 2
	                    : 0;
	            }
	            0 !== JSCompiler_inline_result &&
	              ((didPerformSomeWork = true),
	              performSyncWorkOnRoot(root$174, JSCompiler_inline_result));
	          } else
	            (JSCompiler_inline_result = workInProgressRootRenderLanes),
	              (JSCompiler_inline_result = getNextLanes(
	                root$174,
	                root$174 === workInProgressRoot ? JSCompiler_inline_result : 0,
	                null !== root$174.cancelPendingCommit ||
	                  -1 !== root$174.timeoutHandle
	              )),
	              0 === (JSCompiler_inline_result & 3) ||
	                checkIfRootIsPrerendering(root$174, JSCompiler_inline_result) ||
	                ((didPerformSomeWork = true),
	                performSyncWorkOnRoot(root$174, JSCompiler_inline_result));
	        root$174 = root$174.next;
	      }
	    } while (didPerformSomeWork);
	    isFlushingWork = false;
	  }
	}
	function processRootScheduleInImmediateTask() {
	  processRootScheduleInMicrotask();
	}
	function processRootScheduleInMicrotask() {
	  mightHavePendingSyncWork = didScheduleMicrotask = false;
	  var syncTransitionLanes = 0;
	  0 !== currentEventTransitionLane &&
	    (shouldAttemptEagerTransition() &&
	      (syncTransitionLanes = currentEventTransitionLane),
	    (currentEventTransitionLane = 0));
	  for (
	    var currentTime = now(), prev = null, root = firstScheduledRoot;
	    null !== root;

	  ) {
	    var next = root.next,
	      nextLanes = scheduleTaskForRootDuringMicrotask(root, currentTime);
	    if (0 === nextLanes)
	      (root.next = null),
	        null === prev ? (firstScheduledRoot = next) : (prev.next = next),
	        null === next && (lastScheduledRoot = prev);
	    else if (
	      ((prev = root), 0 !== syncTransitionLanes || 0 !== (nextLanes & 3))
	    )
	      mightHavePendingSyncWork = true;
	    root = next;
	  }
	  flushSyncWorkAcrossRoots_impl(syncTransitionLanes);
	}
	function scheduleTaskForRootDuringMicrotask(root, currentTime) {
	  for (
	    var suspendedLanes = root.suspendedLanes,
	      pingedLanes = root.pingedLanes,
	      expirationTimes = root.expirationTimes,
	      lanes = root.pendingLanes & -62914561;
	    0 < lanes;

	  ) {
	    var index$3 = 31 - clz32(lanes),
	      lane = 1 << index$3,
	      expirationTime = expirationTimes[index$3];
	    if (-1 === expirationTime) {
	      if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes))
	        expirationTimes[index$3] = computeExpirationTime(lane, currentTime);
	    } else expirationTime <= currentTime && (root.expiredLanes |= lane);
	    lanes &= ~lane;
	  }
	  currentTime = workInProgressRoot;
	  suspendedLanes = workInProgressRootRenderLanes;
	  suspendedLanes = getNextLanes(
	    root,
	    root === currentTime ? suspendedLanes : 0,
	    null !== root.cancelPendingCommit || -1 !== root.timeoutHandle
	  );
	  pingedLanes = root.callbackNode;
	  if (
	    0 === suspendedLanes ||
	    (root === currentTime &&
	      (2 === workInProgressSuspendedReason ||
	        9 === workInProgressSuspendedReason)) ||
	    null !== root.cancelPendingCommit
	  )
	    return (
	      null !== pingedLanes &&
	        null !== pingedLanes &&
	        cancelCallback$1(pingedLanes),
	      (root.callbackNode = null),
	      (root.callbackPriority = 0)
	    );
	  if (
	    0 === (suspendedLanes & 3) ||
	    checkIfRootIsPrerendering(root, suspendedLanes)
	  ) {
	    currentTime = suspendedLanes & -suspendedLanes;
	    if (currentTime === root.callbackPriority) return currentTime;
	    null !== pingedLanes && cancelCallback$1(pingedLanes);
	    switch (lanesToEventPriority(suspendedLanes)) {
	      case 2:
	      case 8:
	        suspendedLanes = UserBlockingPriority;
	        break;
	      case 32:
	        suspendedLanes = NormalPriority$1;
	        break;
	      case 268435456:
	        suspendedLanes = IdlePriority;
	        break;
	      default:
	        suspendedLanes = NormalPriority$1;
	    }
	    pingedLanes = performWorkOnRootViaSchedulerTask.bind(null, root);
	    suspendedLanes = scheduleCallback$3(suspendedLanes, pingedLanes);
	    root.callbackPriority = currentTime;
	    root.callbackNode = suspendedLanes;
	    return currentTime;
	  }
	  null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes);
	  root.callbackPriority = 2;
	  root.callbackNode = null;
	  return 2;
	}
	function performWorkOnRootViaSchedulerTask(root, didTimeout) {
	  if (0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus)
	    return (root.callbackNode = null), (root.callbackPriority = 0), null;
	  var originalCallbackNode = root.callbackNode;
	  if (flushPendingEffects() && root.callbackNode !== originalCallbackNode)
	    return null;
	  var workInProgressRootRenderLanes$jscomp$0 = workInProgressRootRenderLanes;
	  workInProgressRootRenderLanes$jscomp$0 = getNextLanes(
	    root,
	    root === workInProgressRoot ? workInProgressRootRenderLanes$jscomp$0 : 0,
	    null !== root.cancelPendingCommit || -1 !== root.timeoutHandle
	  );
	  if (0 === workInProgressRootRenderLanes$jscomp$0) return null;
	  performWorkOnRoot(root, workInProgressRootRenderLanes$jscomp$0, didTimeout);
	  scheduleTaskForRootDuringMicrotask(root, now());
	  return null != root.callbackNode && root.callbackNode === originalCallbackNode
	    ? performWorkOnRootViaSchedulerTask.bind(null, root)
	    : null;
	}
	function performSyncWorkOnRoot(root, lanes) {
	  if (flushPendingEffects()) return null;
	  performWorkOnRoot(root, lanes, true);
	}
	function scheduleImmediateRootScheduleTask() {
	  scheduleMicrotask(function () {
	    0 !== (executionContext & 6)
	      ? scheduleCallback$3(
	          ImmediatePriority,
	          processRootScheduleInImmediateTask
	        )
	      : processRootScheduleInMicrotask();
	  });
	}
	function requestTransitionLane() {
	  0 === currentEventTransitionLane &&
	    (currentEventTransitionLane = claimNextTransitionLane());
	  return currentEventTransitionLane;
	}
	function coerceFormActionProp(actionProp) {
	  return null == actionProp ||
	    "symbol" === typeof actionProp ||
	    "boolean" === typeof actionProp
	    ? null
	    : "function" === typeof actionProp
	      ? actionProp
	      : sanitizeURL("" + actionProp);
	}
	function createFormDataWithSubmitter(form, submitter) {
	  var temp = submitter.ownerDocument.createElement("input");
	  temp.name = submitter.name;
	  temp.value = submitter.value;
	  form.id && temp.setAttribute("form", form.id);
	  submitter.parentNode.insertBefore(temp, submitter);
	  form = new FormData(form);
	  temp.parentNode.removeChild(temp);
	  return form;
	}
	function extractEvents$1(
	  dispatchQueue,
	  domEventName,
	  maybeTargetInst,
	  nativeEvent,
	  nativeEventTarget
	) {
	  if (
	    "submit" === domEventName &&
	    maybeTargetInst &&
	    maybeTargetInst.stateNode === nativeEventTarget
	  ) {
	    var action = coerceFormActionProp(
	        (nativeEventTarget[internalPropsKey] || null).action
	      ),
	      submitter = nativeEvent.submitter;
	    submitter &&
	      ((domEventName = (domEventName = submitter[internalPropsKey] || null)
	        ? coerceFormActionProp(domEventName.formAction)
	        : submitter.getAttribute("formAction")),
	      null !== domEventName && ((action = domEventName), (submitter = null)));
	    var event = new SyntheticEvent(
	      "action",
	      "action",
	      null,
	      nativeEvent,
	      nativeEventTarget
	    );
	    dispatchQueue.push({
	      event: event,
	      listeners: [
	        {
	          instance: null,
	          listener: function () {
	            if (nativeEvent.defaultPrevented) {
	              if (0 !== currentEventTransitionLane) {
	                var formData = submitter
	                  ? createFormDataWithSubmitter(nativeEventTarget, submitter)
	                  : new FormData(nativeEventTarget);
	                startHostTransition(
	                  maybeTargetInst,
	                  {
	                    pending: true,
	                    data: formData,
	                    method: nativeEventTarget.method,
	                    action: action
	                  },
	                  null,
	                  formData
	                );
	              }
	            } else
	              "function" === typeof action &&
	                (event.preventDefault(),
	                (formData = submitter
	                  ? createFormDataWithSubmitter(nativeEventTarget, submitter)
	                  : new FormData(nativeEventTarget)),
	                startHostTransition(
	                  maybeTargetInst,
	                  {
	                    pending: true,
	                    data: formData,
	                    method: nativeEventTarget.method,
	                    action: action
	                  },
	                  action,
	                  formData
	                ));
	          },
	          currentTarget: nativeEventTarget
	        }
	      ]
	    });
	  }
	}
	for (
	  var i$jscomp$inline_1528 = 0;
	  i$jscomp$inline_1528 < simpleEventPluginEvents.length;
	  i$jscomp$inline_1528++
	) {
	  var eventName$jscomp$inline_1529 =
	      simpleEventPluginEvents[i$jscomp$inline_1528],
	    domEventName$jscomp$inline_1530 =
	      eventName$jscomp$inline_1529.toLowerCase(),
	    capitalizedEvent$jscomp$inline_1531 =
	      eventName$jscomp$inline_1529[0].toUpperCase() +
	      eventName$jscomp$inline_1529.slice(1);
	  registerSimpleEvent(
	    domEventName$jscomp$inline_1530,
	    "on" + capitalizedEvent$jscomp$inline_1531
	  );
	}
	registerSimpleEvent(ANIMATION_END, "onAnimationEnd");
	registerSimpleEvent(ANIMATION_ITERATION, "onAnimationIteration");
	registerSimpleEvent(ANIMATION_START, "onAnimationStart");
	registerSimpleEvent("dblclick", "onDoubleClick");
	registerSimpleEvent("focusin", "onFocus");
	registerSimpleEvent("focusout", "onBlur");
	registerSimpleEvent(TRANSITION_RUN, "onTransitionRun");
	registerSimpleEvent(TRANSITION_START, "onTransitionStart");
	registerSimpleEvent(TRANSITION_CANCEL, "onTransitionCancel");
	registerSimpleEvent(TRANSITION_END, "onTransitionEnd");
	registerDirectEvent("onMouseEnter", ["mouseout", "mouseover"]);
	registerDirectEvent("onMouseLeave", ["mouseout", "mouseover"]);
	registerDirectEvent("onPointerEnter", ["pointerout", "pointerover"]);
	registerDirectEvent("onPointerLeave", ["pointerout", "pointerover"]);
	registerTwoPhaseEvent(
	  "onChange",
	  "change click focusin focusout input keydown keyup selectionchange".split(" ")
	);
	registerTwoPhaseEvent(
	  "onSelect",
	  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
	    " "
	  )
	);
	registerTwoPhaseEvent("onBeforeInput", [
	  "compositionend",
	  "keypress",
	  "textInput",
	  "paste"
	]);
	registerTwoPhaseEvent(
	  "onCompositionEnd",
	  "compositionend focusout keydown keypress keyup mousedown".split(" ")
	);
	registerTwoPhaseEvent(
	  "onCompositionStart",
	  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
	);
	registerTwoPhaseEvent(
	  "onCompositionUpdate",
	  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
	);
	var mediaEventTypes =
	    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
	      " "
	    ),
	  nonDelegatedEvents = new Set(
	    "beforetoggle cancel close invalid load scroll scrollend toggle"
	      .split(" ")
	      .concat(mediaEventTypes)
	  );
	function processDispatchQueue(dispatchQueue, eventSystemFlags) {
	  eventSystemFlags = 0 !== (eventSystemFlags & 4);
	  for (var i = 0; i < dispatchQueue.length; i++) {
	    var _dispatchQueue$i = dispatchQueue[i],
	      event = _dispatchQueue$i.event;
	    _dispatchQueue$i = _dispatchQueue$i.listeners;
	    a: {
	      var previousInstance = void 0;
	      if (eventSystemFlags)
	        for (
	          var i$jscomp$0 = _dispatchQueue$i.length - 1;
	          0 <= i$jscomp$0;
	          i$jscomp$0--
	        ) {
	          var _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0],
	            instance = _dispatchListeners$i.instance,
	            currentTarget = _dispatchListeners$i.currentTarget;
	          _dispatchListeners$i = _dispatchListeners$i.listener;
	          if (instance !== previousInstance && event.isPropagationStopped())
	            break a;
	          previousInstance = _dispatchListeners$i;
	          event.currentTarget = currentTarget;
	          try {
	            previousInstance(event);
	          } catch (error) {
	            reportGlobalError(error);
	          }
	          event.currentTarget = null;
	          previousInstance = instance;
	        }
	      else
	        for (
	          i$jscomp$0 = 0;
	          i$jscomp$0 < _dispatchQueue$i.length;
	          i$jscomp$0++
	        ) {
	          _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0];
	          instance = _dispatchListeners$i.instance;
	          currentTarget = _dispatchListeners$i.currentTarget;
	          _dispatchListeners$i = _dispatchListeners$i.listener;
	          if (instance !== previousInstance && event.isPropagationStopped())
	            break a;
	          previousInstance = _dispatchListeners$i;
	          event.currentTarget = currentTarget;
	          try {
	            previousInstance(event);
	          } catch (error) {
	            reportGlobalError(error);
	          }
	          event.currentTarget = null;
	          previousInstance = instance;
	        }
	    }
	  }
	}
	function listenToNonDelegatedEvent(domEventName, targetElement) {
	  var JSCompiler_inline_result = targetElement[internalEventHandlersKey];
	  void 0 === JSCompiler_inline_result &&
	    (JSCompiler_inline_result = targetElement[internalEventHandlersKey] =
	      new Set());
	  var listenerSetKey = domEventName + "__bubble";
	  JSCompiler_inline_result.has(listenerSetKey) ||
	    (addTrappedEventListener(targetElement, domEventName, 2, false),
	    JSCompiler_inline_result.add(listenerSetKey));
	}
	function listenToNativeEvent(domEventName, isCapturePhaseListener, target) {
	  var eventSystemFlags = 0;
	  isCapturePhaseListener && (eventSystemFlags |= 4);
	  addTrappedEventListener(
	    target,
	    domEventName,
	    eventSystemFlags,
	    isCapturePhaseListener
	  );
	}
	var listeningMarker = "_reactListening" + Math.random().toString(36).slice(2);
	function listenToAllSupportedEvents(rootContainerElement) {
	  if (!rootContainerElement[listeningMarker]) {
	    rootContainerElement[listeningMarker] = true;
	    allNativeEvents.forEach(function (domEventName) {
	      "selectionchange" !== domEventName &&
	        (nonDelegatedEvents.has(domEventName) ||
	          listenToNativeEvent(domEventName, false, rootContainerElement),
	        listenToNativeEvent(domEventName, true, rootContainerElement));
	    });
	    var ownerDocument =
	      9 === rootContainerElement.nodeType
	        ? rootContainerElement
	        : rootContainerElement.ownerDocument;
	    null === ownerDocument ||
	      ownerDocument[listeningMarker] ||
	      ((ownerDocument[listeningMarker] = true),
	      listenToNativeEvent("selectionchange", false, ownerDocument));
	  }
	}
	function addTrappedEventListener(
	  targetContainer,
	  domEventName,
	  eventSystemFlags,
	  isCapturePhaseListener
	) {
	  switch (getEventPriority(domEventName)) {
	    case 2:
	      var listenerWrapper = dispatchDiscreteEvent;
	      break;
	    case 8:
	      listenerWrapper = dispatchContinuousEvent;
	      break;
	    default:
	      listenerWrapper = dispatchEvent;
	  }
	  eventSystemFlags = listenerWrapper.bind(
	    null,
	    domEventName,
	    eventSystemFlags,
	    targetContainer
	  );
	  listenerWrapper = void 0;
	  !passiveBrowserEventsSupported ||
	    ("touchstart" !== domEventName &&
	      "touchmove" !== domEventName &&
	      "wheel" !== domEventName) ||
	    (listenerWrapper = true);
	  isCapturePhaseListener
	    ? void 0 !== listenerWrapper
	      ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
	          capture: true,
	          passive: listenerWrapper
	        })
	      : targetContainer.addEventListener(domEventName, eventSystemFlags, true)
	    : void 0 !== listenerWrapper
	      ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
	          passive: listenerWrapper
	        })
	      : targetContainer.addEventListener(domEventName, eventSystemFlags, false);
	}
	function dispatchEventForPluginEventSystem(
	  domEventName,
	  eventSystemFlags,
	  nativeEvent,
	  targetInst$jscomp$0,
	  targetContainer
	) {
	  var ancestorInst = targetInst$jscomp$0;
	  if (
	    0 === (eventSystemFlags & 1) &&
	    0 === (eventSystemFlags & 2) &&
	    null !== targetInst$jscomp$0
	  )
	    a: for (;;) {
	      if (null === targetInst$jscomp$0) return;
	      var nodeTag = targetInst$jscomp$0.tag;
	      if (3 === nodeTag || 4 === nodeTag) {
	        var container = targetInst$jscomp$0.stateNode.containerInfo;
	        if (container === targetContainer) break;
	        if (4 === nodeTag)
	          for (nodeTag = targetInst$jscomp$0.return; null !== nodeTag; ) {
	            var grandTag = nodeTag.tag;
	            if (
	              (3 === grandTag || 4 === grandTag) &&
	              nodeTag.stateNode.containerInfo === targetContainer
	            )
	              return;
	            nodeTag = nodeTag.return;
	          }
	        for (; null !== container; ) {
	          nodeTag = getClosestInstanceFromNode(container);
	          if (null === nodeTag) return;
	          grandTag = nodeTag.tag;
	          if (
	            5 === grandTag ||
	            6 === grandTag ||
	            26 === grandTag ||
	            27 === grandTag
	          ) {
	            targetInst$jscomp$0 = ancestorInst = nodeTag;
	            continue a;
	          }
	          container = container.parentNode;
	        }
	      }
	      targetInst$jscomp$0 = targetInst$jscomp$0.return;
	    }
	  batchedUpdates$1(function () {
	    var targetInst = ancestorInst,
	      nativeEventTarget = getEventTarget(nativeEvent),
	      dispatchQueue = [];
	    a: {
	      var reactName = topLevelEventsToReactNames.get(domEventName);
	      if (void 0 !== reactName) {
	        var SyntheticEventCtor = SyntheticEvent,
	          reactEventType = domEventName;
	        switch (domEventName) {
	          case "keypress":
	            if (0 === getEventCharCode(nativeEvent)) break a;
	          case "keydown":
	          case "keyup":
	            SyntheticEventCtor = SyntheticKeyboardEvent;
	            break;
	          case "focusin":
	            reactEventType = "focus";
	            SyntheticEventCtor = SyntheticFocusEvent;
	            break;
	          case "focusout":
	            reactEventType = "blur";
	            SyntheticEventCtor = SyntheticFocusEvent;
	            break;
	          case "beforeblur":
	          case "afterblur":
	            SyntheticEventCtor = SyntheticFocusEvent;
	            break;
	          case "click":
	            if (2 === nativeEvent.button) break a;
	          case "auxclick":
	          case "dblclick":
	          case "mousedown":
	          case "mousemove":
	          case "mouseup":
	          case "mouseout":
	          case "mouseover":
	          case "contextmenu":
	            SyntheticEventCtor = SyntheticMouseEvent;
	            break;
	          case "drag":
	          case "dragend":
	          case "dragenter":
	          case "dragexit":
	          case "dragleave":
	          case "dragover":
	          case "dragstart":
	          case "drop":
	            SyntheticEventCtor = SyntheticDragEvent;
	            break;
	          case "touchcancel":
	          case "touchend":
	          case "touchmove":
	          case "touchstart":
	            SyntheticEventCtor = SyntheticTouchEvent;
	            break;
	          case ANIMATION_END:
	          case ANIMATION_ITERATION:
	          case ANIMATION_START:
	            SyntheticEventCtor = SyntheticAnimationEvent;
	            break;
	          case TRANSITION_END:
	            SyntheticEventCtor = SyntheticTransitionEvent;
	            break;
	          case "scroll":
	          case "scrollend":
	            SyntheticEventCtor = SyntheticUIEvent;
	            break;
	          case "wheel":
	            SyntheticEventCtor = SyntheticWheelEvent;
	            break;
	          case "copy":
	          case "cut":
	          case "paste":
	            SyntheticEventCtor = SyntheticClipboardEvent;
	            break;
	          case "gotpointercapture":
	          case "lostpointercapture":
	          case "pointercancel":
	          case "pointerdown":
	          case "pointermove":
	          case "pointerout":
	          case "pointerover":
	          case "pointerup":
	            SyntheticEventCtor = SyntheticPointerEvent;
	            break;
	          case "toggle":
	          case "beforetoggle":
	            SyntheticEventCtor = SyntheticToggleEvent;
	        }
	        var inCapturePhase = 0 !== (eventSystemFlags & 4),
	          accumulateTargetOnly =
	            !inCapturePhase &&
	            ("scroll" === domEventName || "scrollend" === domEventName),
	          reactEventName = inCapturePhase
	            ? null !== reactName
	              ? reactName + "Capture"
	              : null
	            : reactName;
	        inCapturePhase = [];
	        for (
	          var instance = targetInst, lastHostComponent;
	          null !== instance;

	        ) {
	          var _instance = instance;
	          lastHostComponent = _instance.stateNode;
	          _instance = _instance.tag;
	          (5 !== _instance && 26 !== _instance && 27 !== _instance) ||
	            null === lastHostComponent ||
	            null === reactEventName ||
	            ((_instance = getListener(instance, reactEventName)),
	            null != _instance &&
	              inCapturePhase.push(
	                createDispatchListener(instance, _instance, lastHostComponent)
	              ));
	          if (accumulateTargetOnly) break;
	          instance = instance.return;
	        }
	        0 < inCapturePhase.length &&
	          ((reactName = new SyntheticEventCtor(
	            reactName,
	            reactEventType,
	            null,
	            nativeEvent,
	            nativeEventTarget
	          )),
	          dispatchQueue.push({ event: reactName, listeners: inCapturePhase }));
	      }
	    }
	    if (0 === (eventSystemFlags & 7)) {
	      a: {
	        reactName =
	          "mouseover" === domEventName || "pointerover" === domEventName;
	        SyntheticEventCtor =
	          "mouseout" === domEventName || "pointerout" === domEventName;
	        if (
	          reactName &&
	          nativeEvent !== currentReplayingEvent &&
	          (reactEventType =
	            nativeEvent.relatedTarget || nativeEvent.fromElement) &&
	          (getClosestInstanceFromNode(reactEventType) ||
	            reactEventType[internalContainerInstanceKey])
	        )
	          break a;
	        if (SyntheticEventCtor || reactName) {
	          reactName =
	            nativeEventTarget.window === nativeEventTarget
	              ? nativeEventTarget
	              : (reactName = nativeEventTarget.ownerDocument)
	                ? reactName.defaultView || reactName.parentWindow
	                : window;
	          if (SyntheticEventCtor) {
	            if (
	              ((reactEventType =
	                nativeEvent.relatedTarget || nativeEvent.toElement),
	              (SyntheticEventCtor = targetInst),
	              (reactEventType = reactEventType
	                ? getClosestInstanceFromNode(reactEventType)
	                : null),
	              null !== reactEventType &&
	                ((accumulateTargetOnly =
	                  getNearestMountedFiber(reactEventType)),
	                (inCapturePhase = reactEventType.tag),
	                reactEventType !== accumulateTargetOnly ||
	                  (5 !== inCapturePhase &&
	                    27 !== inCapturePhase &&
	                    6 !== inCapturePhase)))
	            )
	              reactEventType = null;
	          } else (SyntheticEventCtor = null), (reactEventType = targetInst);
	          if (SyntheticEventCtor !== reactEventType) {
	            inCapturePhase = SyntheticMouseEvent;
	            _instance = "onMouseLeave";
	            reactEventName = "onMouseEnter";
	            instance = "mouse";
	            if ("pointerout" === domEventName || "pointerover" === domEventName)
	              (inCapturePhase = SyntheticPointerEvent),
	                (_instance = "onPointerLeave"),
	                (reactEventName = "onPointerEnter"),
	                (instance = "pointer");
	            accumulateTargetOnly =
	              null == SyntheticEventCtor
	                ? reactName
	                : getNodeFromInstance(SyntheticEventCtor);
	            lastHostComponent =
	              null == reactEventType
	                ? reactName
	                : getNodeFromInstance(reactEventType);
	            reactName = new inCapturePhase(
	              _instance,
	              instance + "leave",
	              SyntheticEventCtor,
	              nativeEvent,
	              nativeEventTarget
	            );
	            reactName.target = accumulateTargetOnly;
	            reactName.relatedTarget = lastHostComponent;
	            _instance = null;
	            getClosestInstanceFromNode(nativeEventTarget) === targetInst &&
	              ((inCapturePhase = new inCapturePhase(
	                reactEventName,
	                instance + "enter",
	                reactEventType,
	                nativeEvent,
	                nativeEventTarget
	              )),
	              (inCapturePhase.target = lastHostComponent),
	              (inCapturePhase.relatedTarget = accumulateTargetOnly),
	              (_instance = inCapturePhase));
	            accumulateTargetOnly = _instance;
	            if (SyntheticEventCtor && reactEventType)
	              b: {
	                inCapturePhase = SyntheticEventCtor;
	                reactEventName = reactEventType;
	                instance = 0;
	                for (
	                  lastHostComponent = inCapturePhase;
	                  lastHostComponent;
	                  lastHostComponent = getParent(lastHostComponent)
	                )
	                  instance++;
	                lastHostComponent = 0;
	                for (
	                  _instance = reactEventName;
	                  _instance;
	                  _instance = getParent(_instance)
	                )
	                  lastHostComponent++;
	                for (; 0 < instance - lastHostComponent; )
	                  (inCapturePhase = getParent(inCapturePhase)), instance--;
	                for (; 0 < lastHostComponent - instance; )
	                  (reactEventName = getParent(reactEventName)),
	                    lastHostComponent--;
	                for (; instance--; ) {
	                  if (
	                    inCapturePhase === reactEventName ||
	                    (null !== reactEventName &&
	                      inCapturePhase === reactEventName.alternate)
	                  )
	                    break b;
	                  inCapturePhase = getParent(inCapturePhase);
	                  reactEventName = getParent(reactEventName);
	                }
	                inCapturePhase = null;
	              }
	            else inCapturePhase = null;
	            null !== SyntheticEventCtor &&
	              accumulateEnterLeaveListenersForEvent(
	                dispatchQueue,
	                reactName,
	                SyntheticEventCtor,
	                inCapturePhase,
	                !1
	              );
	            null !== reactEventType &&
	              null !== accumulateTargetOnly &&
	              accumulateEnterLeaveListenersForEvent(
	                dispatchQueue,
	                accumulateTargetOnly,
	                reactEventType,
	                inCapturePhase,
	                !0
	              );
	          }
	        }
	      }
	      a: {
	        reactName = targetInst ? getNodeFromInstance(targetInst) : window;
	        SyntheticEventCtor =
	          reactName.nodeName && reactName.nodeName.toLowerCase();
	        if (
	          "select" === SyntheticEventCtor ||
	          ("input" === SyntheticEventCtor && "file" === reactName.type)
	        )
	          var getTargetInstFunc = getTargetInstForChangeEvent;
	        else if (isTextInputElement(reactName))
	          if (isInputEventSupported)
	            getTargetInstFunc = getTargetInstForInputOrChangeEvent;
	          else {
	            getTargetInstFunc = getTargetInstForInputEventPolyfill;
	            var handleEventFunc = handleEventsForInputEventPolyfill;
	          }
	        else
	          (SyntheticEventCtor = reactName.nodeName),
	            !SyntheticEventCtor ||
	            "input" !== SyntheticEventCtor.toLowerCase() ||
	            ("checkbox" !== reactName.type && "radio" !== reactName.type)
	              ? targetInst &&
	                isCustomElement(targetInst.elementType) &&
	                (getTargetInstFunc = getTargetInstForChangeEvent)
	              : (getTargetInstFunc = getTargetInstForClickEvent);
	        if (
	          getTargetInstFunc &&
	          (getTargetInstFunc = getTargetInstFunc(domEventName, targetInst))
	        ) {
	          createAndAccumulateChangeEvent(
	            dispatchQueue,
	            getTargetInstFunc,
	            nativeEvent,
	            nativeEventTarget
	          );
	          break a;
	        }
	        handleEventFunc && handleEventFunc(domEventName, reactName, targetInst);
	        "focusout" === domEventName &&
	          targetInst &&
	          "number" === reactName.type &&
	          null != targetInst.memoizedProps.value &&
	          setDefaultValue(reactName, "number", reactName.value);
	      }
	      handleEventFunc = targetInst ? getNodeFromInstance(targetInst) : window;
	      switch (domEventName) {
	        case "focusin":
	          if (
	            isTextInputElement(handleEventFunc) ||
	            "true" === handleEventFunc.contentEditable
	          )
	            (activeElement = handleEventFunc),
	              (activeElementInst = targetInst),
	              (lastSelection = null);
	          break;
	        case "focusout":
	          lastSelection = activeElementInst = activeElement = null;
	          break;
	        case "mousedown":
	          mouseDown = !0;
	          break;
	        case "contextmenu":
	        case "mouseup":
	        case "dragend":
	          mouseDown = !1;
	          constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
	          break;
	        case "selectionchange":
	          if (skipSelectionChangeEvent) break;
	        case "keydown":
	        case "keyup":
	          constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
	      }
	      var fallbackData;
	      if (canUseCompositionEvent)
	        b: {
	          switch (domEventName) {
	            case "compositionstart":
	              var eventType = "onCompositionStart";
	              break b;
	            case "compositionend":
	              eventType = "onCompositionEnd";
	              break b;
	            case "compositionupdate":
	              eventType = "onCompositionUpdate";
	              break b;
	          }
	          eventType = void 0;
	        }
	      else
	        isComposing
	          ? isFallbackCompositionEnd(domEventName, nativeEvent) &&
	            (eventType = "onCompositionEnd")
	          : "keydown" === domEventName &&
	            229 === nativeEvent.keyCode &&
	            (eventType = "onCompositionStart");
	      eventType &&
	        (useFallbackCompositionData &&
	          "ko" !== nativeEvent.locale &&
	          (isComposing || "onCompositionStart" !== eventType
	            ? "onCompositionEnd" === eventType &&
	              isComposing &&
	              (fallbackData = getData())
	            : ((root = nativeEventTarget),
	              (startText = "value" in root ? root.value : root.textContent),
	              (isComposing = !0))),
	        (handleEventFunc = accumulateTwoPhaseListeners(targetInst, eventType)),
	        0 < handleEventFunc.length &&
	          ((eventType = new SyntheticCompositionEvent(
	            eventType,
	            domEventName,
	            null,
	            nativeEvent,
	            nativeEventTarget
	          )),
	          dispatchQueue.push({ event: eventType, listeners: handleEventFunc }),
	          fallbackData
	            ? (eventType.data = fallbackData)
	            : ((fallbackData = getDataFromCustomEvent(nativeEvent)),
	              null !== fallbackData && (eventType.data = fallbackData))));
	      if (
	        (fallbackData = canUseTextInputEvent
	          ? getNativeBeforeInputChars(domEventName, nativeEvent)
	          : getFallbackBeforeInputChars(domEventName, nativeEvent))
	      )
	        (eventType = accumulateTwoPhaseListeners(targetInst, "onBeforeInput")),
	          0 < eventType.length &&
	            ((handleEventFunc = new SyntheticCompositionEvent(
	              "onBeforeInput",
	              "beforeinput",
	              null,
	              nativeEvent,
	              nativeEventTarget
	            )),
	            dispatchQueue.push({
	              event: handleEventFunc,
	              listeners: eventType
	            }),
	            (handleEventFunc.data = fallbackData));
	      extractEvents$1(
	        dispatchQueue,
	        domEventName,
	        targetInst,
	        nativeEvent,
	        nativeEventTarget
	      );
	    }
	    processDispatchQueue(dispatchQueue, eventSystemFlags);
	  });
	}
	function createDispatchListener(instance, listener, currentTarget) {
	  return {
	    instance: instance,
	    listener: listener,
	    currentTarget: currentTarget
	  };
	}
	function accumulateTwoPhaseListeners(targetFiber, reactName) {
	  for (
	    var captureName = reactName + "Capture", listeners = [];
	    null !== targetFiber;

	  ) {
	    var _instance2 = targetFiber,
	      stateNode = _instance2.stateNode;
	    _instance2 = _instance2.tag;
	    (5 !== _instance2 && 26 !== _instance2 && 27 !== _instance2) ||
	      null === stateNode ||
	      ((_instance2 = getListener(targetFiber, captureName)),
	      null != _instance2 &&
	        listeners.unshift(
	          createDispatchListener(targetFiber, _instance2, stateNode)
	        ),
	      (_instance2 = getListener(targetFiber, reactName)),
	      null != _instance2 &&
	        listeners.push(
	          createDispatchListener(targetFiber, _instance2, stateNode)
	        ));
	    if (3 === targetFiber.tag) return listeners;
	    targetFiber = targetFiber.return;
	  }
	  return [];
	}
	function getParent(inst) {
	  if (null === inst) return null;
	  do inst = inst.return;
	  while (inst && 5 !== inst.tag && 27 !== inst.tag);
	  return inst ? inst : null;
	}
	function accumulateEnterLeaveListenersForEvent(
	  dispatchQueue,
	  event,
	  target,
	  common,
	  inCapturePhase
	) {
	  for (
	    var registrationName = event._reactName, listeners = [];
	    null !== target && target !== common;

	  ) {
	    var _instance3 = target,
	      alternate = _instance3.alternate,
	      stateNode = _instance3.stateNode;
	    _instance3 = _instance3.tag;
	    if (null !== alternate && alternate === common) break;
	    (5 !== _instance3 && 26 !== _instance3 && 27 !== _instance3) ||
	      null === stateNode ||
	      ((alternate = stateNode),
	      inCapturePhase
	        ? ((stateNode = getListener(target, registrationName)),
	          null != stateNode &&
	            listeners.unshift(
	              createDispatchListener(target, stateNode, alternate)
	            ))
	        : inCapturePhase ||
	          ((stateNode = getListener(target, registrationName)),
	          null != stateNode &&
	            listeners.push(
	              createDispatchListener(target, stateNode, alternate)
	            )));
	    target = target.return;
	  }
	  0 !== listeners.length &&
	    dispatchQueue.push({ event: event, listeners: listeners });
	}
	var NORMALIZE_NEWLINES_REGEX = /\r\n?/g,
	  NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
	function normalizeMarkupForTextOrAttribute(markup) {
	  return ("string" === typeof markup ? markup : "" + markup)
	    .replace(NORMALIZE_NEWLINES_REGEX, "\n")
	    .replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
	}
	function checkForUnmatchedText(serverText, clientText) {
	  clientText = normalizeMarkupForTextOrAttribute(clientText);
	  return normalizeMarkupForTextOrAttribute(serverText) === clientText ? true : false;
	}
	function noop$1() {}
	function setProp(domElement, tag, key, value, props, prevValue) {
	  switch (key) {
	    case "children":
	      "string" === typeof value
	        ? "body" === tag ||
	          ("textarea" === tag && "" === value) ||
	          setTextContent(domElement, value)
	        : ("number" === typeof value || "bigint" === typeof value) &&
	          "body" !== tag &&
	          setTextContent(domElement, "" + value);
	      break;
	    case "className":
	      setValueForKnownAttribute(domElement, "class", value);
	      break;
	    case "tabIndex":
	      setValueForKnownAttribute(domElement, "tabindex", value);
	      break;
	    case "dir":
	    case "role":
	    case "viewBox":
	    case "width":
	    case "height":
	      setValueForKnownAttribute(domElement, key, value);
	      break;
	    case "style":
	      setValueForStyles(domElement, value, prevValue);
	      break;
	    case "data":
	      if ("object" !== tag) {
	        setValueForKnownAttribute(domElement, "data", value);
	        break;
	      }
	    case "src":
	    case "href":
	      if ("" === value && ("a" !== tag || "href" !== key)) {
	        domElement.removeAttribute(key);
	        break;
	      }
	      if (
	        null == value ||
	        "function" === typeof value ||
	        "symbol" === typeof value ||
	        "boolean" === typeof value
	      ) {
	        domElement.removeAttribute(key);
	        break;
	      }
	      value = sanitizeURL("" + value);
	      domElement.setAttribute(key, value);
	      break;
	    case "action":
	    case "formAction":
	      if ("function" === typeof value) {
	        domElement.setAttribute(
	          key,
	          "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
	        );
	        break;
	      } else
	        "function" === typeof prevValue &&
	          ("formAction" === key
	            ? ("input" !== tag &&
	                setProp(domElement, tag, "name", props.name, props, null),
	              setProp(
	                domElement,
	                tag,
	                "formEncType",
	                props.formEncType,
	                props,
	                null
	              ),
	              setProp(
	                domElement,
	                tag,
	                "formMethod",
	                props.formMethod,
	                props,
	                null
	              ),
	              setProp(
	                domElement,
	                tag,
	                "formTarget",
	                props.formTarget,
	                props,
	                null
	              ))
	            : (setProp(domElement, tag, "encType", props.encType, props, null),
	              setProp(domElement, tag, "method", props.method, props, null),
	              setProp(domElement, tag, "target", props.target, props, null)));
	      if (
	        null == value ||
	        "symbol" === typeof value ||
	        "boolean" === typeof value
	      ) {
	        domElement.removeAttribute(key);
	        break;
	      }
	      value = sanitizeURL("" + value);
	      domElement.setAttribute(key, value);
	      break;
	    case "onClick":
	      null != value && (domElement.onclick = noop$1);
	      break;
	    case "onScroll":
	      null != value && listenToNonDelegatedEvent("scroll", domElement);
	      break;
	    case "onScrollEnd":
	      null != value && listenToNonDelegatedEvent("scrollend", domElement);
	      break;
	    case "dangerouslySetInnerHTML":
	      if (null != value) {
	        if ("object" !== typeof value || !("__html" in value))
	          throw Error(formatProdErrorMessage(61));
	        key = value.__html;
	        if (null != key) {
	          if (null != props.children) throw Error(formatProdErrorMessage(60));
	          domElement.innerHTML = key;
	        }
	      }
	      break;
	    case "multiple":
	      domElement.multiple =
	        value && "function" !== typeof value && "symbol" !== typeof value;
	      break;
	    case "muted":
	      domElement.muted =
	        value && "function" !== typeof value && "symbol" !== typeof value;
	      break;
	    case "suppressContentEditableWarning":
	    case "suppressHydrationWarning":
	    case "defaultValue":
	    case "defaultChecked":
	    case "innerHTML":
	    case "ref":
	      break;
	    case "autoFocus":
	      break;
	    case "xlinkHref":
	      if (
	        null == value ||
	        "function" === typeof value ||
	        "boolean" === typeof value ||
	        "symbol" === typeof value
	      ) {
	        domElement.removeAttribute("xlink:href");
	        break;
	      }
	      key = sanitizeURL("" + value);
	      domElement.setAttributeNS(
	        "http://www.w3.org/1999/xlink",
	        "xlink:href",
	        key
	      );
	      break;
	    case "contentEditable":
	    case "spellCheck":
	    case "draggable":
	    case "value":
	    case "autoReverse":
	    case "externalResourcesRequired":
	    case "focusable":
	    case "preserveAlpha":
	      null != value && "function" !== typeof value && "symbol" !== typeof value
	        ? domElement.setAttribute(key, "" + value)
	        : domElement.removeAttribute(key);
	      break;
	    case "inert":
	    case "allowFullScreen":
	    case "async":
	    case "autoPlay":
	    case "controls":
	    case "default":
	    case "defer":
	    case "disabled":
	    case "disablePictureInPicture":
	    case "disableRemotePlayback":
	    case "formNoValidate":
	    case "hidden":
	    case "loop":
	    case "noModule":
	    case "noValidate":
	    case "open":
	    case "playsInline":
	    case "readOnly":
	    case "required":
	    case "reversed":
	    case "scoped":
	    case "seamless":
	    case "itemScope":
	      value && "function" !== typeof value && "symbol" !== typeof value
	        ? domElement.setAttribute(key, "")
	        : domElement.removeAttribute(key);
	      break;
	    case "capture":
	    case "download":
	      true === value
	        ? domElement.setAttribute(key, "")
	        : false !== value &&
	            null != value &&
	            "function" !== typeof value &&
	            "symbol" !== typeof value
	          ? domElement.setAttribute(key, value)
	          : domElement.removeAttribute(key);
	      break;
	    case "cols":
	    case "rows":
	    case "size":
	    case "span":
	      null != value &&
	      "function" !== typeof value &&
	      "symbol" !== typeof value &&
	      !isNaN(value) &&
	      1 <= value
	        ? domElement.setAttribute(key, value)
	        : domElement.removeAttribute(key);
	      break;
	    case "rowSpan":
	    case "start":
	      null == value ||
	      "function" === typeof value ||
	      "symbol" === typeof value ||
	      isNaN(value)
	        ? domElement.removeAttribute(key)
	        : domElement.setAttribute(key, value);
	      break;
	    case "popover":
	      listenToNonDelegatedEvent("beforetoggle", domElement);
	      listenToNonDelegatedEvent("toggle", domElement);
	      setValueForAttribute(domElement, "popover", value);
	      break;
	    case "xlinkActuate":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:actuate",
	        value
	      );
	      break;
	    case "xlinkArcrole":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:arcrole",
	        value
	      );
	      break;
	    case "xlinkRole":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:role",
	        value
	      );
	      break;
	    case "xlinkShow":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:show",
	        value
	      );
	      break;
	    case "xlinkTitle":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:title",
	        value
	      );
	      break;
	    case "xlinkType":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:type",
	        value
	      );
	      break;
	    case "xmlBase":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/XML/1998/namespace",
	        "xml:base",
	        value
	      );
	      break;
	    case "xmlLang":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/XML/1998/namespace",
	        "xml:lang",
	        value
	      );
	      break;
	    case "xmlSpace":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/XML/1998/namespace",
	        "xml:space",
	        value
	      );
	      break;
	    case "is":
	      setValueForAttribute(domElement, "is", value);
	      break;
	    case "innerText":
	    case "textContent":
	      break;
	    default:
	      if (
	        !(2 < key.length) ||
	        ("o" !== key[0] && "O" !== key[0]) ||
	        ("n" !== key[1] && "N" !== key[1])
	      )
	        (key = aliases.get(key) || key),
	          setValueForAttribute(domElement, key, value);
	  }
	}
	function setPropOnCustomElement(domElement, tag, key, value, props, prevValue) {
	  switch (key) {
	    case "style":
	      setValueForStyles(domElement, value, prevValue);
	      break;
	    case "dangerouslySetInnerHTML":
	      if (null != value) {
	        if ("object" !== typeof value || !("__html" in value))
	          throw Error(formatProdErrorMessage(61));
	        key = value.__html;
	        if (null != key) {
	          if (null != props.children) throw Error(formatProdErrorMessage(60));
	          domElement.innerHTML = key;
	        }
	      }
	      break;
	    case "children":
	      "string" === typeof value
	        ? setTextContent(domElement, value)
	        : ("number" === typeof value || "bigint" === typeof value) &&
	          setTextContent(domElement, "" + value);
	      break;
	    case "onScroll":
	      null != value && listenToNonDelegatedEvent("scroll", domElement);
	      break;
	    case "onScrollEnd":
	      null != value && listenToNonDelegatedEvent("scrollend", domElement);
	      break;
	    case "onClick":
	      null != value && (domElement.onclick = noop$1);
	      break;
	    case "suppressContentEditableWarning":
	    case "suppressHydrationWarning":
	    case "innerHTML":
	    case "ref":
	      break;
	    case "innerText":
	    case "textContent":
	      break;
	    default:
	      if (!registrationNameDependencies.hasOwnProperty(key))
	        a: {
	          if (
	            "o" === key[0] &&
	            "n" === key[1] &&
	            ((props = key.endsWith("Capture")),
	            (tag = key.slice(2, props ? key.length - 7 : void 0)),
	            (prevValue = domElement[internalPropsKey] || null),
	            (prevValue = null != prevValue ? prevValue[key] : null),
	            "function" === typeof prevValue &&
	              domElement.removeEventListener(tag, prevValue, props),
	            "function" === typeof value)
	          ) {
	            "function" !== typeof prevValue &&
	              null !== prevValue &&
	              (key in domElement
	                ? (domElement[key] = null)
	                : domElement.hasAttribute(key) &&
	                  domElement.removeAttribute(key));
	            domElement.addEventListener(tag, value, props);
	            break a;
	          }
	          key in domElement
	            ? (domElement[key] = value)
	            : true === value
	              ? domElement.setAttribute(key, "")
	              : setValueForAttribute(domElement, key, value);
	        }
	  }
	}
	function setInitialProperties(domElement, tag, props) {
	  switch (tag) {
	    case "div":
	    case "span":
	    case "svg":
	    case "path":
	    case "a":
	    case "g":
	    case "p":
	    case "li":
	      break;
	    case "img":
	      listenToNonDelegatedEvent("error", domElement);
	      listenToNonDelegatedEvent("load", domElement);
	      var hasSrc = false,
	        hasSrcSet = false,
	        propKey;
	      for (propKey in props)
	        if (props.hasOwnProperty(propKey)) {
	          var propValue = props[propKey];
	          if (null != propValue)
	            switch (propKey) {
	              case "src":
	                hasSrc = true;
	                break;
	              case "srcSet":
	                hasSrcSet = true;
	                break;
	              case "children":
	              case "dangerouslySetInnerHTML":
	                throw Error(formatProdErrorMessage(137, tag));
	              default:
	                setProp(domElement, tag, propKey, propValue, props, null);
	            }
	        }
	      hasSrcSet &&
	        setProp(domElement, tag, "srcSet", props.srcSet, props, null);
	      hasSrc && setProp(domElement, tag, "src", props.src, props, null);
	      return;
	    case "input":
	      listenToNonDelegatedEvent("invalid", domElement);
	      var defaultValue = (propKey = propValue = hasSrcSet = null),
	        checked = null,
	        defaultChecked = null;
	      for (hasSrc in props)
	        if (props.hasOwnProperty(hasSrc)) {
	          var propValue$188 = props[hasSrc];
	          if (null != propValue$188)
	            switch (hasSrc) {
	              case "name":
	                hasSrcSet = propValue$188;
	                break;
	              case "type":
	                propValue = propValue$188;
	                break;
	              case "checked":
	                checked = propValue$188;
	                break;
	              case "defaultChecked":
	                defaultChecked = propValue$188;
	                break;
	              case "value":
	                propKey = propValue$188;
	                break;
	              case "defaultValue":
	                defaultValue = propValue$188;
	                break;
	              case "children":
	              case "dangerouslySetInnerHTML":
	                if (null != propValue$188)
	                  throw Error(formatProdErrorMessage(137, tag));
	                break;
	              default:
	                setProp(domElement, tag, hasSrc, propValue$188, props, null);
	            }
	        }
	      initInput(
	        domElement,
	        propKey,
	        defaultValue,
	        checked,
	        defaultChecked,
	        propValue,
	        hasSrcSet,
	        false
	      );
	      track(domElement);
	      return;
	    case "select":
	      listenToNonDelegatedEvent("invalid", domElement);
	      hasSrc = propValue = propKey = null;
	      for (hasSrcSet in props)
	        if (
	          props.hasOwnProperty(hasSrcSet) &&
	          ((defaultValue = props[hasSrcSet]), null != defaultValue)
	        )
	          switch (hasSrcSet) {
	            case "value":
	              propKey = defaultValue;
	              break;
	            case "defaultValue":
	              propValue = defaultValue;
	              break;
	            case "multiple":
	              hasSrc = defaultValue;
	            default:
	              setProp(domElement, tag, hasSrcSet, defaultValue, props, null);
	          }
	      tag = propKey;
	      props = propValue;
	      domElement.multiple = !!hasSrc;
	      null != tag
	        ? updateOptions(domElement, !!hasSrc, tag, false)
	        : null != props && updateOptions(domElement, !!hasSrc, props, true);
	      return;
	    case "textarea":
	      listenToNonDelegatedEvent("invalid", domElement);
	      propKey = hasSrcSet = hasSrc = null;
	      for (propValue in props)
	        if (
	          props.hasOwnProperty(propValue) &&
	          ((defaultValue = props[propValue]), null != defaultValue)
	        )
	          switch (propValue) {
	            case "value":
	              hasSrc = defaultValue;
	              break;
	            case "defaultValue":
	              hasSrcSet = defaultValue;
	              break;
	            case "children":
	              propKey = defaultValue;
	              break;
	            case "dangerouslySetInnerHTML":
	              if (null != defaultValue) throw Error(formatProdErrorMessage(91));
	              break;
	            default:
	              setProp(domElement, tag, propValue, defaultValue, props, null);
	          }
	      initTextarea(domElement, hasSrc, hasSrcSet, propKey);
	      track(domElement);
	      return;
	    case "option":
	      for (checked in props)
	        if (
	          props.hasOwnProperty(checked) &&
	          ((hasSrc = props[checked]), null != hasSrc)
	        )
	          switch (checked) {
	            case "selected":
	              domElement.selected =
	                hasSrc &&
	                "function" !== typeof hasSrc &&
	                "symbol" !== typeof hasSrc;
	              break;
	            default:
	              setProp(domElement, tag, checked, hasSrc, props, null);
	          }
	      return;
	    case "dialog":
	      listenToNonDelegatedEvent("beforetoggle", domElement);
	      listenToNonDelegatedEvent("toggle", domElement);
	      listenToNonDelegatedEvent("cancel", domElement);
	      listenToNonDelegatedEvent("close", domElement);
	      break;
	    case "iframe":
	    case "object":
	      listenToNonDelegatedEvent("load", domElement);
	      break;
	    case "video":
	    case "audio":
	      for (hasSrc = 0; hasSrc < mediaEventTypes.length; hasSrc++)
	        listenToNonDelegatedEvent(mediaEventTypes[hasSrc], domElement);
	      break;
	    case "image":
	      listenToNonDelegatedEvent("error", domElement);
	      listenToNonDelegatedEvent("load", domElement);
	      break;
	    case "details":
	      listenToNonDelegatedEvent("toggle", domElement);
	      break;
	    case "embed":
	    case "source":
	    case "link":
	      listenToNonDelegatedEvent("error", domElement),
	        listenToNonDelegatedEvent("load", domElement);
	    case "area":
	    case "base":
	    case "br":
	    case "col":
	    case "hr":
	    case "keygen":
	    case "meta":
	    case "param":
	    case "track":
	    case "wbr":
	    case "menuitem":
	      for (defaultChecked in props)
	        if (
	          props.hasOwnProperty(defaultChecked) &&
	          ((hasSrc = props[defaultChecked]), null != hasSrc)
	        )
	          switch (defaultChecked) {
	            case "children":
	            case "dangerouslySetInnerHTML":
	              throw Error(formatProdErrorMessage(137, tag));
	            default:
	              setProp(domElement, tag, defaultChecked, hasSrc, props, null);
	          }
	      return;
	    default:
	      if (isCustomElement(tag)) {
	        for (propValue$188 in props)
	          props.hasOwnProperty(propValue$188) &&
	            ((hasSrc = props[propValue$188]),
	            void 0 !== hasSrc &&
	              setPropOnCustomElement(
	                domElement,
	                tag,
	                propValue$188,
	                hasSrc,
	                props,
	                void 0
	              ));
	        return;
	      }
	  }
	  for (defaultValue in props)
	    props.hasOwnProperty(defaultValue) &&
	      ((hasSrc = props[defaultValue]),
	      null != hasSrc &&
	        setProp(domElement, tag, defaultValue, hasSrc, props, null));
	}
	function updateProperties(domElement, tag, lastProps, nextProps) {
	  switch (tag) {
	    case "div":
	    case "span":
	    case "svg":
	    case "path":
	    case "a":
	    case "g":
	    case "p":
	    case "li":
	      break;
	    case "input":
	      var name = null,
	        type = null,
	        value = null,
	        defaultValue = null,
	        lastDefaultValue = null,
	        checked = null,
	        defaultChecked = null;
	      for (propKey in lastProps) {
	        var lastProp = lastProps[propKey];
	        if (lastProps.hasOwnProperty(propKey) && null != lastProp)
	          switch (propKey) {
	            case "checked":
	              break;
	            case "value":
	              break;
	            case "defaultValue":
	              lastDefaultValue = lastProp;
	            default:
	              nextProps.hasOwnProperty(propKey) ||
	                setProp(domElement, tag, propKey, null, nextProps, lastProp);
	          }
	      }
	      for (var propKey$205 in nextProps) {
	        var propKey = nextProps[propKey$205];
	        lastProp = lastProps[propKey$205];
	        if (
	          nextProps.hasOwnProperty(propKey$205) &&
	          (null != propKey || null != lastProp)
	        )
	          switch (propKey$205) {
	            case "type":
	              type = propKey;
	              break;
	            case "name":
	              name = propKey;
	              break;
	            case "checked":
	              checked = propKey;
	              break;
	            case "defaultChecked":
	              defaultChecked = propKey;
	              break;
	            case "value":
	              value = propKey;
	              break;
	            case "defaultValue":
	              defaultValue = propKey;
	              break;
	            case "children":
	            case "dangerouslySetInnerHTML":
	              if (null != propKey)
	                throw Error(formatProdErrorMessage(137, tag));
	              break;
	            default:
	              propKey !== lastProp &&
	                setProp(
	                  domElement,
	                  tag,
	                  propKey$205,
	                  propKey,
	                  nextProps,
	                  lastProp
	                );
	          }
	      }
	      updateInput(
	        domElement,
	        value,
	        defaultValue,
	        lastDefaultValue,
	        checked,
	        defaultChecked,
	        type,
	        name
	      );
	      return;
	    case "select":
	      propKey = value = defaultValue = propKey$205 = null;
	      for (type in lastProps)
	        if (
	          ((lastDefaultValue = lastProps[type]),
	          lastProps.hasOwnProperty(type) && null != lastDefaultValue)
	        )
	          switch (type) {
	            case "value":
	              break;
	            case "multiple":
	              propKey = lastDefaultValue;
	            default:
	              nextProps.hasOwnProperty(type) ||
	                setProp(
	                  domElement,
	                  tag,
	                  type,
	                  null,
	                  nextProps,
	                  lastDefaultValue
	                );
	          }
	      for (name in nextProps)
	        if (
	          ((type = nextProps[name]),
	          (lastDefaultValue = lastProps[name]),
	          nextProps.hasOwnProperty(name) &&
	            (null != type || null != lastDefaultValue))
	        )
	          switch (name) {
	            case "value":
	              propKey$205 = type;
	              break;
	            case "defaultValue":
	              defaultValue = type;
	              break;
	            case "multiple":
	              value = type;
	            default:
	              type !== lastDefaultValue &&
	                setProp(
	                  domElement,
	                  tag,
	                  name,
	                  type,
	                  nextProps,
	                  lastDefaultValue
	                );
	          }
	      tag = defaultValue;
	      lastProps = value;
	      nextProps = propKey;
	      null != propKey$205
	        ? updateOptions(domElement, !!lastProps, propKey$205, false)
	        : !!nextProps !== !!lastProps &&
	          (null != tag
	            ? updateOptions(domElement, !!lastProps, tag, true)
	            : updateOptions(domElement, !!lastProps, lastProps ? [] : "", false));
	      return;
	    case "textarea":
	      propKey = propKey$205 = null;
	      for (defaultValue in lastProps)
	        if (
	          ((name = lastProps[defaultValue]),
	          lastProps.hasOwnProperty(defaultValue) &&
	            null != name &&
	            !nextProps.hasOwnProperty(defaultValue))
	        )
	          switch (defaultValue) {
	            case "value":
	              break;
	            case "children":
	              break;
	            default:
	              setProp(domElement, tag, defaultValue, null, nextProps, name);
	          }
	      for (value in nextProps)
	        if (
	          ((name = nextProps[value]),
	          (type = lastProps[value]),
	          nextProps.hasOwnProperty(value) && (null != name || null != type))
	        )
	          switch (value) {
	            case "value":
	              propKey$205 = name;
	              break;
	            case "defaultValue":
	              propKey = name;
	              break;
	            case "children":
	              break;
	            case "dangerouslySetInnerHTML":
	              if (null != name) throw Error(formatProdErrorMessage(91));
	              break;
	            default:
	              name !== type &&
	                setProp(domElement, tag, value, name, nextProps, type);
	          }
	      updateTextarea(domElement, propKey$205, propKey);
	      return;
	    case "option":
	      for (var propKey$221 in lastProps)
	        if (
	          ((propKey$205 = lastProps[propKey$221]),
	          lastProps.hasOwnProperty(propKey$221) &&
	            null != propKey$205 &&
	            !nextProps.hasOwnProperty(propKey$221))
	        )
	          switch (propKey$221) {
	            case "selected":
	              domElement.selected = false;
	              break;
	            default:
	              setProp(
	                domElement,
	                tag,
	                propKey$221,
	                null,
	                nextProps,
	                propKey$205
	              );
	          }
	      for (lastDefaultValue in nextProps)
	        if (
	          ((propKey$205 = nextProps[lastDefaultValue]),
	          (propKey = lastProps[lastDefaultValue]),
	          nextProps.hasOwnProperty(lastDefaultValue) &&
	            propKey$205 !== propKey &&
	            (null != propKey$205 || null != propKey))
	        )
	          switch (lastDefaultValue) {
	            case "selected":
	              domElement.selected =
	                propKey$205 &&
	                "function" !== typeof propKey$205 &&
	                "symbol" !== typeof propKey$205;
	              break;
	            default:
	              setProp(
	                domElement,
	                tag,
	                lastDefaultValue,
	                propKey$205,
	                nextProps,
	                propKey
	              );
	          }
	      return;
	    case "img":
	    case "link":
	    case "area":
	    case "base":
	    case "br":
	    case "col":
	    case "embed":
	    case "hr":
	    case "keygen":
	    case "meta":
	    case "param":
	    case "source":
	    case "track":
	    case "wbr":
	    case "menuitem":
	      for (var propKey$226 in lastProps)
	        (propKey$205 = lastProps[propKey$226]),
	          lastProps.hasOwnProperty(propKey$226) &&
	            null != propKey$205 &&
	            !nextProps.hasOwnProperty(propKey$226) &&
	            setProp(domElement, tag, propKey$226, null, nextProps, propKey$205);
	      for (checked in nextProps)
	        if (
	          ((propKey$205 = nextProps[checked]),
	          (propKey = lastProps[checked]),
	          nextProps.hasOwnProperty(checked) &&
	            propKey$205 !== propKey &&
	            (null != propKey$205 || null != propKey))
	        )
	          switch (checked) {
	            case "children":
	            case "dangerouslySetInnerHTML":
	              if (null != propKey$205)
	                throw Error(formatProdErrorMessage(137, tag));
	              break;
	            default:
	              setProp(
	                domElement,
	                tag,
	                checked,
	                propKey$205,
	                nextProps,
	                propKey
	              );
	          }
	      return;
	    default:
	      if (isCustomElement(tag)) {
	        for (var propKey$231 in lastProps)
	          (propKey$205 = lastProps[propKey$231]),
	            lastProps.hasOwnProperty(propKey$231) &&
	              void 0 !== propKey$205 &&
	              !nextProps.hasOwnProperty(propKey$231) &&
	              setPropOnCustomElement(
	                domElement,
	                tag,
	                propKey$231,
	                void 0,
	                nextProps,
	                propKey$205
	              );
	        for (defaultChecked in nextProps)
	          (propKey$205 = nextProps[defaultChecked]),
	            (propKey = lastProps[defaultChecked]),
	            !nextProps.hasOwnProperty(defaultChecked) ||
	              propKey$205 === propKey ||
	              (void 0 === propKey$205 && void 0 === propKey) ||
	              setPropOnCustomElement(
	                domElement,
	                tag,
	                defaultChecked,
	                propKey$205,
	                nextProps,
	                propKey
	              );
	        return;
	      }
	  }
	  for (var propKey$236 in lastProps)
	    (propKey$205 = lastProps[propKey$236]),
	      lastProps.hasOwnProperty(propKey$236) &&
	        null != propKey$205 &&
	        !nextProps.hasOwnProperty(propKey$236) &&
	        setProp(domElement, tag, propKey$236, null, nextProps, propKey$205);
	  for (lastProp in nextProps)
	    (propKey$205 = nextProps[lastProp]),
	      (propKey = lastProps[lastProp]),
	      !nextProps.hasOwnProperty(lastProp) ||
	        propKey$205 === propKey ||
	        (null == propKey$205 && null == propKey) ||
	        setProp(domElement, tag, lastProp, propKey$205, nextProps, propKey);
	}
	var eventsEnabled = null,
	  selectionInformation = null;
	function getOwnerDocumentFromRootContainer(rootContainerElement) {
	  return 9 === rootContainerElement.nodeType
	    ? rootContainerElement
	    : rootContainerElement.ownerDocument;
	}
	function getOwnHostContext(namespaceURI) {
	  switch (namespaceURI) {
	    case "http://www.w3.org/2000/svg":
	      return 1;
	    case "http://www.w3.org/1998/Math/MathML":
	      return 2;
	    default:
	      return 0;
	  }
	}
	function getChildHostContextProd(parentNamespace, type) {
	  if (0 === parentNamespace)
	    switch (type) {
	      case "svg":
	        return 1;
	      case "math":
	        return 2;
	      default:
	        return 0;
	    }
	  return 1 === parentNamespace && "foreignObject" === type
	    ? 0
	    : parentNamespace;
	}
	function shouldSetTextContent(type, props) {
	  return (
	    "textarea" === type ||
	    "noscript" === type ||
	    "string" === typeof props.children ||
	    "number" === typeof props.children ||
	    "bigint" === typeof props.children ||
	    ("object" === typeof props.dangerouslySetInnerHTML &&
	      null !== props.dangerouslySetInnerHTML &&
	      null != props.dangerouslySetInnerHTML.__html)
	  );
	}
	var currentPopstateTransitionEvent = null;
	function shouldAttemptEagerTransition() {
	  var event = window.event;
	  if (event && "popstate" === event.type) {
	    if (event === currentPopstateTransitionEvent) return false;
	    currentPopstateTransitionEvent = event;
	    return true;
	  }
	  currentPopstateTransitionEvent = null;
	  return false;
	}
	var scheduleTimeout = "function" === typeof setTimeout ? setTimeout : void 0,
	  cancelTimeout = "function" === typeof clearTimeout ? clearTimeout : void 0,
	  localPromise = "function" === typeof Promise ? Promise : void 0,
	  scheduleMicrotask =
	    "function" === typeof queueMicrotask
	      ? queueMicrotask
	      : "undefined" !== typeof localPromise
	        ? function (callback) {
	            return localPromise
	              .resolve(null)
	              .then(callback)
	              .catch(handleErrorInNextTick);
	          }
	        : scheduleTimeout;
	function handleErrorInNextTick(error) {
	  setTimeout(function () {
	    throw error;
	  });
	}
	function isSingletonScope(type) {
	  return "head" === type;
	}
	function clearSuspenseBoundary(parentInstance, suspenseInstance) {
	  var node = suspenseInstance,
	    possiblePreambleContribution = 0,
	    depth = 0;
	  do {
	    var nextNode = node.nextSibling;
	    parentInstance.removeChild(node);
	    if (nextNode && 8 === nextNode.nodeType)
	      if (((node = nextNode.data), "/$" === node)) {
	        if (
	          0 < possiblePreambleContribution &&
	          8 > possiblePreambleContribution
	        ) {
	          node = possiblePreambleContribution;
	          var ownerDocument = parentInstance.ownerDocument;
	          node & 1 && releaseSingletonInstance(ownerDocument.documentElement);
	          node & 2 && releaseSingletonInstance(ownerDocument.body);
	          if (node & 4)
	            for (
	              node = ownerDocument.head,
	                releaseSingletonInstance(node),
	                ownerDocument = node.firstChild;
	              ownerDocument;

	            ) {
	              var nextNode$jscomp$0 = ownerDocument.nextSibling,
	                nodeName = ownerDocument.nodeName;
	              ownerDocument[internalHoistableMarker] ||
	                "SCRIPT" === nodeName ||
	                "STYLE" === nodeName ||
	                ("LINK" === nodeName &&
	                  "stylesheet" === ownerDocument.rel.toLowerCase()) ||
	                node.removeChild(ownerDocument);
	              ownerDocument = nextNode$jscomp$0;
	            }
	        }
	        if (0 === depth) {
	          parentInstance.removeChild(nextNode);
	          retryIfBlockedOn(suspenseInstance);
	          return;
	        }
	        depth--;
	      } else
	        "$" === node || "$?" === node || "$!" === node
	          ? depth++
	          : (possiblePreambleContribution = node.charCodeAt(0) - 48);
	    else possiblePreambleContribution = 0;
	    node = nextNode;
	  } while (node);
	  retryIfBlockedOn(suspenseInstance);
	}
	function clearContainerSparingly(container) {
	  var nextNode = container.firstChild;
	  nextNode && 10 === nextNode.nodeType && (nextNode = nextNode.nextSibling);
	  for (; nextNode; ) {
	    var node = nextNode;
	    nextNode = nextNode.nextSibling;
	    switch (node.nodeName) {
	      case "HTML":
	      case "HEAD":
	      case "BODY":
	        clearContainerSparingly(node);
	        detachDeletedInstance(node);
	        continue;
	      case "SCRIPT":
	      case "STYLE":
	        continue;
	      case "LINK":
	        if ("stylesheet" === node.rel.toLowerCase()) continue;
	    }
	    container.removeChild(node);
	  }
	}
	function canHydrateInstance(instance, type, props, inRootOrSingleton) {
	  for (; 1 === instance.nodeType; ) {
	    var anyProps = props;
	    if (instance.nodeName.toLowerCase() !== type.toLowerCase()) {
	      if (
	        !inRootOrSingleton &&
	        ("INPUT" !== instance.nodeName || "hidden" !== instance.type)
	      )
	        break;
	    } else if (!inRootOrSingleton)
	      if ("input" === type && "hidden" === instance.type) {
	        var name = null == anyProps.name ? null : "" + anyProps.name;
	        if (
	          "hidden" === anyProps.type &&
	          instance.getAttribute("name") === name
	        )
	          return instance;
	      } else return instance;
	    else if (!instance[internalHoistableMarker])
	      switch (type) {
	        case "meta":
	          if (!instance.hasAttribute("itemprop")) break;
	          return instance;
	        case "link":
	          name = instance.getAttribute("rel");
	          if ("stylesheet" === name && instance.hasAttribute("data-precedence"))
	            break;
	          else if (
	            name !== anyProps.rel ||
	            instance.getAttribute("href") !==
	              (null == anyProps.href || "" === anyProps.href
	                ? null
	                : anyProps.href) ||
	            instance.getAttribute("crossorigin") !==
	              (null == anyProps.crossOrigin ? null : anyProps.crossOrigin) ||
	            instance.getAttribute("title") !==
	              (null == anyProps.title ? null : anyProps.title)
	          )
	            break;
	          return instance;
	        case "style":
	          if (instance.hasAttribute("data-precedence")) break;
	          return instance;
	        case "script":
	          name = instance.getAttribute("src");
	          if (
	            (name !== (null == anyProps.src ? null : anyProps.src) ||
	              instance.getAttribute("type") !==
	                (null == anyProps.type ? null : anyProps.type) ||
	              instance.getAttribute("crossorigin") !==
	                (null == anyProps.crossOrigin ? null : anyProps.crossOrigin)) &&
	            name &&
	            instance.hasAttribute("async") &&
	            !instance.hasAttribute("itemprop")
	          )
	            break;
	          return instance;
	        default:
	          return instance;
	      }
	    instance = getNextHydratable(instance.nextSibling);
	    if (null === instance) break;
	  }
	  return null;
	}
	function canHydrateTextInstance(instance, text, inRootOrSingleton) {
	  if ("" === text) return null;
	  for (; 3 !== instance.nodeType; ) {
	    if (
	      (1 !== instance.nodeType ||
	        "INPUT" !== instance.nodeName ||
	        "hidden" !== instance.type) &&
	      !inRootOrSingleton
	    )
	      return null;
	    instance = getNextHydratable(instance.nextSibling);
	    if (null === instance) return null;
	  }
	  return instance;
	}
	function isSuspenseInstanceFallback(instance) {
	  return (
	    "$!" === instance.data ||
	    ("$?" === instance.data && "complete" === instance.ownerDocument.readyState)
	  );
	}
	function registerSuspenseInstanceRetry(instance, callback) {
	  var ownerDocument = instance.ownerDocument;
	  if ("$?" !== instance.data || "complete" === ownerDocument.readyState)
	    callback();
	  else {
	    var listener = function () {
	      callback();
	      ownerDocument.removeEventListener("DOMContentLoaded", listener);
	    };
	    ownerDocument.addEventListener("DOMContentLoaded", listener);
	    instance._reactRetry = listener;
	  }
	}
	function getNextHydratable(node) {
	  for (; null != node; node = node.nextSibling) {
	    var nodeType = node.nodeType;
	    if (1 === nodeType || 3 === nodeType) break;
	    if (8 === nodeType) {
	      nodeType = node.data;
	      if (
	        "$" === nodeType ||
	        "$!" === nodeType ||
	        "$?" === nodeType ||
	        "F!" === nodeType ||
	        "F" === nodeType
	      )
	        break;
	      if ("/$" === nodeType) return null;
	    }
	  }
	  return node;
	}
	var previousHydratableOnEnteringScopedSingleton = null;
	function getParentSuspenseInstance(targetInstance) {
	  targetInstance = targetInstance.previousSibling;
	  for (var depth = 0; targetInstance; ) {
	    if (8 === targetInstance.nodeType) {
	      var data = targetInstance.data;
	      if ("$" === data || "$!" === data || "$?" === data) {
	        if (0 === depth) return targetInstance;
	        depth--;
	      } else "/$" === data && depth++;
	    }
	    targetInstance = targetInstance.previousSibling;
	  }
	  return null;
	}
	function resolveSingletonInstance(type, props, rootContainerInstance) {
	  props = getOwnerDocumentFromRootContainer(rootContainerInstance);
	  switch (type) {
	    case "html":
	      type = props.documentElement;
	      if (!type) throw Error(formatProdErrorMessage(452));
	      return type;
	    case "head":
	      type = props.head;
	      if (!type) throw Error(formatProdErrorMessage(453));
	      return type;
	    case "body":
	      type = props.body;
	      if (!type) throw Error(formatProdErrorMessage(454));
	      return type;
	    default:
	      throw Error(formatProdErrorMessage(451));
	  }
	}
	function releaseSingletonInstance(instance) {
	  for (var attributes = instance.attributes; attributes.length; )
	    instance.removeAttributeNode(attributes[0]);
	  detachDeletedInstance(instance);
	}
	var preloadPropsMap = new Map(),
	  preconnectsSet = new Set();
	function getHoistableRoot(container) {
	  return "function" === typeof container.getRootNode
	    ? container.getRootNode()
	    : 9 === container.nodeType
	      ? container
	      : container.ownerDocument;
	}
	var previousDispatcher = ReactDOMSharedInternals.d;
	ReactDOMSharedInternals.d = {
	  f: flushSyncWork,
	  r: requestFormReset,
	  D: prefetchDNS,
	  C: preconnect,
	  L: preload,
	  m: preloadModule,
	  X: preinitScript,
	  S: preinitStyle,
	  M: preinitModuleScript
	};
	function flushSyncWork() {
	  var previousWasRendering = previousDispatcher.f(),
	    wasRendering = flushSyncWork$1();
	  return previousWasRendering || wasRendering;
	}
	function requestFormReset(form) {
	  var formInst = getInstanceFromNode(form);
	  null !== formInst && 5 === formInst.tag && "form" === formInst.type
	    ? requestFormReset$1(formInst)
	    : previousDispatcher.r(form);
	}
	var globalDocument = "undefined" === typeof document ? null : document;
	function preconnectAs(rel, href, crossOrigin) {
	  var ownerDocument = globalDocument;
	  if (ownerDocument && "string" === typeof href && href) {
	    var limitedEscapedHref =
	      escapeSelectorAttributeValueInsideDoubleQuotes(href);
	    limitedEscapedHref =
	      'link[rel="' + rel + '"][href="' + limitedEscapedHref + '"]';
	    "string" === typeof crossOrigin &&
	      (limitedEscapedHref += '[crossorigin="' + crossOrigin + '"]');
	    preconnectsSet.has(limitedEscapedHref) ||
	      (preconnectsSet.add(limitedEscapedHref),
	      (rel = { rel: rel, crossOrigin: crossOrigin, href: href }),
	      null === ownerDocument.querySelector(limitedEscapedHref) &&
	        ((href = ownerDocument.createElement("link")),
	        setInitialProperties(href, "link", rel),
	        markNodeAsHoistable(href),
	        ownerDocument.head.appendChild(href)));
	  }
	}
	function prefetchDNS(href) {
	  previousDispatcher.D(href);
	  preconnectAs("dns-prefetch", href, null);
	}
	function preconnect(href, crossOrigin) {
	  previousDispatcher.C(href, crossOrigin);
	  preconnectAs("preconnect", href, crossOrigin);
	}
	function preload(href, as, options) {
	  previousDispatcher.L(href, as, options);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && href && as) {
	    var preloadSelector =
	      'link[rel="preload"][as="' +
	      escapeSelectorAttributeValueInsideDoubleQuotes(as) +
	      '"]';
	    "image" === as
	      ? options && options.imageSrcSet
	        ? ((preloadSelector +=
	            '[imagesrcset="' +
	            escapeSelectorAttributeValueInsideDoubleQuotes(
	              options.imageSrcSet
	            ) +
	            '"]'),
	          "string" === typeof options.imageSizes &&
	            (preloadSelector +=
	              '[imagesizes="' +
	              escapeSelectorAttributeValueInsideDoubleQuotes(
	                options.imageSizes
	              ) +
	              '"]'))
	        : (preloadSelector +=
	            '[href="' +
	            escapeSelectorAttributeValueInsideDoubleQuotes(href) +
	            '"]')
	      : (preloadSelector +=
	          '[href="' +
	          escapeSelectorAttributeValueInsideDoubleQuotes(href) +
	          '"]');
	    var key = preloadSelector;
	    switch (as) {
	      case "style":
	        key = getStyleKey(href);
	        break;
	      case "script":
	        key = getScriptKey(href);
	    }
	    preloadPropsMap.has(key) ||
	      ((href = assign(
	        {
	          rel: "preload",
	          href:
	            "image" === as && options && options.imageSrcSet ? void 0 : href,
	          as: as
	        },
	        options
	      )),
	      preloadPropsMap.set(key, href),
	      null !== ownerDocument.querySelector(preloadSelector) ||
	        ("style" === as &&
	          ownerDocument.querySelector(getStylesheetSelectorFromKey(key))) ||
	        ("script" === as &&
	          ownerDocument.querySelector(getScriptSelectorFromKey(key))) ||
	        ((as = ownerDocument.createElement("link")),
	        setInitialProperties(as, "link", href),
	        markNodeAsHoistable(as),
	        ownerDocument.head.appendChild(as)));
	  }
	}
	function preloadModule(href, options) {
	  previousDispatcher.m(href, options);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && href) {
	    var as = options && "string" === typeof options.as ? options.as : "script",
	      preloadSelector =
	        'link[rel="modulepreload"][as="' +
	        escapeSelectorAttributeValueInsideDoubleQuotes(as) +
	        '"][href="' +
	        escapeSelectorAttributeValueInsideDoubleQuotes(href) +
	        '"]',
	      key = preloadSelector;
	    switch (as) {
	      case "audioworklet":
	      case "paintworklet":
	      case "serviceworker":
	      case "sharedworker":
	      case "worker":
	      case "script":
	        key = getScriptKey(href);
	    }
	    if (
	      !preloadPropsMap.has(key) &&
	      ((href = assign({ rel: "modulepreload", href: href }, options)),
	      preloadPropsMap.set(key, href),
	      null === ownerDocument.querySelector(preloadSelector))
	    ) {
	      switch (as) {
	        case "audioworklet":
	        case "paintworklet":
	        case "serviceworker":
	        case "sharedworker":
	        case "worker":
	        case "script":
	          if (ownerDocument.querySelector(getScriptSelectorFromKey(key)))
	            return;
	      }
	      as = ownerDocument.createElement("link");
	      setInitialProperties(as, "link", href);
	      markNodeAsHoistable(as);
	      ownerDocument.head.appendChild(as);
	    }
	  }
	}
	function preinitStyle(href, precedence, options) {
	  previousDispatcher.S(href, precedence, options);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && href) {
	    var styles = getResourcesFromRoot(ownerDocument).hoistableStyles,
	      key = getStyleKey(href);
	    precedence = precedence || "default";
	    var resource = styles.get(key);
	    if (!resource) {
	      var state = { loading: 0, preload: null };
	      if (
	        (resource = ownerDocument.querySelector(
	          getStylesheetSelectorFromKey(key)
	        ))
	      )
	        state.loading = 5;
	      else {
	        href = assign(
	          { rel: "stylesheet", href: href, "data-precedence": precedence },
	          options
	        );
	        (options = preloadPropsMap.get(key)) &&
	          adoptPreloadPropsForStylesheet(href, options);
	        var link = (resource = ownerDocument.createElement("link"));
	        markNodeAsHoistable(link);
	        setInitialProperties(link, "link", href);
	        link._p = new Promise(function (resolve, reject) {
	          link.onload = resolve;
	          link.onerror = reject;
	        });
	        link.addEventListener("load", function () {
	          state.loading |= 1;
	        });
	        link.addEventListener("error", function () {
	          state.loading |= 2;
	        });
	        state.loading |= 4;
	        insertStylesheet(resource, precedence, ownerDocument);
	      }
	      resource = {
	        type: "stylesheet",
	        instance: resource,
	        count: 1,
	        state: state
	      };
	      styles.set(key, resource);
	    }
	  }
	}
	function preinitScript(src, options) {
	  previousDispatcher.X(src, options);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && src) {
	    var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts,
	      key = getScriptKey(src),
	      resource = scripts.get(key);
	    resource ||
	      ((resource = ownerDocument.querySelector(getScriptSelectorFromKey(key))),
	      resource ||
	        ((src = assign({ src: src, async: true }, options)),
	        (options = preloadPropsMap.get(key)) &&
	          adoptPreloadPropsForScript(src, options),
	        (resource = ownerDocument.createElement("script")),
	        markNodeAsHoistable(resource),
	        setInitialProperties(resource, "link", src),
	        ownerDocument.head.appendChild(resource)),
	      (resource = {
	        type: "script",
	        instance: resource,
	        count: 1,
	        state: null
	      }),
	      scripts.set(key, resource));
	  }
	}
	function preinitModuleScript(src, options) {
	  previousDispatcher.M(src, options);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && src) {
	    var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts,
	      key = getScriptKey(src),
	      resource = scripts.get(key);
	    resource ||
	      ((resource = ownerDocument.querySelector(getScriptSelectorFromKey(key))),
	      resource ||
	        ((src = assign({ src: src, async: true, type: "module" }, options)),
	        (options = preloadPropsMap.get(key)) &&
	          adoptPreloadPropsForScript(src, options),
	        (resource = ownerDocument.createElement("script")),
	        markNodeAsHoistable(resource),
	        setInitialProperties(resource, "link", src),
	        ownerDocument.head.appendChild(resource)),
	      (resource = {
	        type: "script",
	        instance: resource,
	        count: 1,
	        state: null
	      }),
	      scripts.set(key, resource));
	  }
	}
	function getResource(type, currentProps, pendingProps, currentResource) {
	  var JSCompiler_inline_result = (JSCompiler_inline_result =
	    rootInstanceStackCursor.current)
	    ? getHoistableRoot(JSCompiler_inline_result)
	    : null;
	  if (!JSCompiler_inline_result) throw Error(formatProdErrorMessage(446));
	  switch (type) {
	    case "meta":
	    case "title":
	      return null;
	    case "style":
	      return "string" === typeof pendingProps.precedence &&
	        "string" === typeof pendingProps.href
	        ? ((currentProps = getStyleKey(pendingProps.href)),
	          (pendingProps = getResourcesFromRoot(
	            JSCompiler_inline_result
	          ).hoistableStyles),
	          (currentResource = pendingProps.get(currentProps)),
	          currentResource ||
	            ((currentResource = {
	              type: "style",
	              instance: null,
	              count: 0,
	              state: null
	            }),
	            pendingProps.set(currentProps, currentResource)),
	          currentResource)
	        : { type: "void", instance: null, count: 0, state: null };
	    case "link":
	      if (
	        "stylesheet" === pendingProps.rel &&
	        "string" === typeof pendingProps.href &&
	        "string" === typeof pendingProps.precedence
	      ) {
	        type = getStyleKey(pendingProps.href);
	        var styles$244 = getResourcesFromRoot(
	            JSCompiler_inline_result
	          ).hoistableStyles,
	          resource$245 = styles$244.get(type);
	        resource$245 ||
	          ((JSCompiler_inline_result =
	            JSCompiler_inline_result.ownerDocument || JSCompiler_inline_result),
	          (resource$245 = {
	            type: "stylesheet",
	            instance: null,
	            count: 0,
	            state: { loading: 0, preload: null }
	          }),
	          styles$244.set(type, resource$245),
	          (styles$244 = JSCompiler_inline_result.querySelector(
	            getStylesheetSelectorFromKey(type)
	          )) &&
	            !styles$244._p &&
	            ((resource$245.instance = styles$244),
	            (resource$245.state.loading = 5)),
	          preloadPropsMap.has(type) ||
	            ((pendingProps = {
	              rel: "preload",
	              as: "style",
	              href: pendingProps.href,
	              crossOrigin: pendingProps.crossOrigin,
	              integrity: pendingProps.integrity,
	              media: pendingProps.media,
	              hrefLang: pendingProps.hrefLang,
	              referrerPolicy: pendingProps.referrerPolicy
	            }),
	            preloadPropsMap.set(type, pendingProps),
	            styles$244 ||
	              preloadStylesheet(
	                JSCompiler_inline_result,
	                type,
	                pendingProps,
	                resource$245.state
	              )));
	        if (currentProps && null === currentResource)
	          throw Error(formatProdErrorMessage(528, ""));
	        return resource$245;
	      }
	      if (currentProps && null !== currentResource)
	        throw Error(formatProdErrorMessage(529, ""));
	      return null;
	    case "script":
	      return (
	        (currentProps = pendingProps.async),
	        (pendingProps = pendingProps.src),
	        "string" === typeof pendingProps &&
	        currentProps &&
	        "function" !== typeof currentProps &&
	        "symbol" !== typeof currentProps
	          ? ((currentProps = getScriptKey(pendingProps)),
	            (pendingProps = getResourcesFromRoot(
	              JSCompiler_inline_result
	            ).hoistableScripts),
	            (currentResource = pendingProps.get(currentProps)),
	            currentResource ||
	              ((currentResource = {
	                type: "script",
	                instance: null,
	                count: 0,
	                state: null
	              }),
	              pendingProps.set(currentProps, currentResource)),
	            currentResource)
	          : { type: "void", instance: null, count: 0, state: null }
	      );
	    default:
	      throw Error(formatProdErrorMessage(444, type));
	  }
	}
	function getStyleKey(href) {
	  return 'href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"';
	}
	function getStylesheetSelectorFromKey(key) {
	  return 'link[rel="stylesheet"][' + key + "]";
	}
	function stylesheetPropsFromRawProps(rawProps) {
	  return assign({}, rawProps, {
	    "data-precedence": rawProps.precedence,
	    precedence: null
	  });
	}
	function preloadStylesheet(ownerDocument, key, preloadProps, state) {
	  ownerDocument.querySelector('link[rel="preload"][as="style"][' + key + "]")
	    ? (state.loading = 1)
	    : ((key = ownerDocument.createElement("link")),
	      (state.preload = key),
	      key.addEventListener("load", function () {
	        return (state.loading |= 1);
	      }),
	      key.addEventListener("error", function () {
	        return (state.loading |= 2);
	      }),
	      setInitialProperties(key, "link", preloadProps),
	      markNodeAsHoistable(key),
	      ownerDocument.head.appendChild(key));
	}
	function getScriptKey(src) {
	  return '[src="' + escapeSelectorAttributeValueInsideDoubleQuotes(src) + '"]';
	}
	function getScriptSelectorFromKey(key) {
	  return "script[async]" + key;
	}
	function acquireResource(hoistableRoot, resource, props) {
	  resource.count++;
	  if (null === resource.instance)
	    switch (resource.type) {
	      case "style":
	        var instance = hoistableRoot.querySelector(
	          'style[data-href~="' +
	            escapeSelectorAttributeValueInsideDoubleQuotes(props.href) +
	            '"]'
	        );
	        if (instance)
	          return (
	            (resource.instance = instance),
	            markNodeAsHoistable(instance),
	            instance
	          );
	        var styleProps = assign({}, props, {
	          "data-href": props.href,
	          "data-precedence": props.precedence,
	          href: null,
	          precedence: null
	        });
	        instance = (hoistableRoot.ownerDocument || hoistableRoot).createElement(
	          "style"
	        );
	        markNodeAsHoistable(instance);
	        setInitialProperties(instance, "style", styleProps);
	        insertStylesheet(instance, props.precedence, hoistableRoot);
	        return (resource.instance = instance);
	      case "stylesheet":
	        styleProps = getStyleKey(props.href);
	        var instance$250 = hoistableRoot.querySelector(
	          getStylesheetSelectorFromKey(styleProps)
	        );
	        if (instance$250)
	          return (
	            (resource.state.loading |= 4),
	            (resource.instance = instance$250),
	            markNodeAsHoistable(instance$250),
	            instance$250
	          );
	        instance = stylesheetPropsFromRawProps(props);
	        (styleProps = preloadPropsMap.get(styleProps)) &&
	          adoptPreloadPropsForStylesheet(instance, styleProps);
	        instance$250 = (
	          hoistableRoot.ownerDocument || hoistableRoot
	        ).createElement("link");
	        markNodeAsHoistable(instance$250);
	        var linkInstance = instance$250;
	        linkInstance._p = new Promise(function (resolve, reject) {
	          linkInstance.onload = resolve;
	          linkInstance.onerror = reject;
	        });
	        setInitialProperties(instance$250, "link", instance);
	        resource.state.loading |= 4;
	        insertStylesheet(instance$250, props.precedence, hoistableRoot);
	        return (resource.instance = instance$250);
	      case "script":
	        instance$250 = getScriptKey(props.src);
	        if (
	          (styleProps = hoistableRoot.querySelector(
	            getScriptSelectorFromKey(instance$250)
	          ))
	        )
	          return (
	            (resource.instance = styleProps),
	            markNodeAsHoistable(styleProps),
	            styleProps
	          );
	        instance = props;
	        if ((styleProps = preloadPropsMap.get(instance$250)))
	          (instance = assign({}, props)),
	            adoptPreloadPropsForScript(instance, styleProps);
	        hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
	        styleProps = hoistableRoot.createElement("script");
	        markNodeAsHoistable(styleProps);
	        setInitialProperties(styleProps, "link", instance);
	        hoistableRoot.head.appendChild(styleProps);
	        return (resource.instance = styleProps);
	      case "void":
	        return null;
	      default:
	        throw Error(formatProdErrorMessage(443, resource.type));
	    }
	  else
	    "stylesheet" === resource.type &&
	      0 === (resource.state.loading & 4) &&
	      ((instance = resource.instance),
	      (resource.state.loading |= 4),
	      insertStylesheet(instance, props.precedence, hoistableRoot));
	  return resource.instance;
	}
	function insertStylesheet(instance, precedence, root) {
	  for (
	    var nodes = root.querySelectorAll(
	        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
	      ),
	      last = nodes.length ? nodes[nodes.length - 1] : null,
	      prior = last,
	      i = 0;
	    i < nodes.length;
	    i++
	  ) {
	    var node = nodes[i];
	    if (node.dataset.precedence === precedence) prior = node;
	    else if (prior !== last) break;
	  }
	  prior
	    ? prior.parentNode.insertBefore(instance, prior.nextSibling)
	    : ((precedence = 9 === root.nodeType ? root.head : root),
	      precedence.insertBefore(instance, precedence.firstChild));
	}
	function adoptPreloadPropsForStylesheet(stylesheetProps, preloadProps) {
	  null == stylesheetProps.crossOrigin &&
	    (stylesheetProps.crossOrigin = preloadProps.crossOrigin);
	  null == stylesheetProps.referrerPolicy &&
	    (stylesheetProps.referrerPolicy = preloadProps.referrerPolicy);
	  null == stylesheetProps.title && (stylesheetProps.title = preloadProps.title);
	}
	function adoptPreloadPropsForScript(scriptProps, preloadProps) {
	  null == scriptProps.crossOrigin &&
	    (scriptProps.crossOrigin = preloadProps.crossOrigin);
	  null == scriptProps.referrerPolicy &&
	    (scriptProps.referrerPolicy = preloadProps.referrerPolicy);
	  null == scriptProps.integrity &&
	    (scriptProps.integrity = preloadProps.integrity);
	}
	var tagCaches = null;
	function getHydratableHoistableCache(type, keyAttribute, ownerDocument) {
	  if (null === tagCaches) {
	    var cache = new Map();
	    var caches = (tagCaches = new Map());
	    caches.set(ownerDocument, cache);
	  } else
	    (caches = tagCaches),
	      (cache = caches.get(ownerDocument)),
	      cache || ((cache = new Map()), caches.set(ownerDocument, cache));
	  if (cache.has(type)) return cache;
	  cache.set(type, null);
	  ownerDocument = ownerDocument.getElementsByTagName(type);
	  for (caches = 0; caches < ownerDocument.length; caches++) {
	    var node = ownerDocument[caches];
	    if (
	      !(
	        node[internalHoistableMarker] ||
	        node[internalInstanceKey] ||
	        ("link" === type && "stylesheet" === node.getAttribute("rel"))
	      ) &&
	      "http://www.w3.org/2000/svg" !== node.namespaceURI
	    ) {
	      var nodeKey = node.getAttribute(keyAttribute) || "";
	      nodeKey = type + nodeKey;
	      var existing = cache.get(nodeKey);
	      existing ? existing.push(node) : cache.set(nodeKey, [node]);
	    }
	  }
	  return cache;
	}
	function mountHoistable(hoistableRoot, type, instance) {
	  hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
	  hoistableRoot.head.insertBefore(
	    instance,
	    "title" === type ? hoistableRoot.querySelector("head > title") : null
	  );
	}
	function isHostHoistableType(type, props, hostContext) {
	  if (1 === hostContext || null != props.itemProp) return false;
	  switch (type) {
	    case "meta":
	    case "title":
	      return true;
	    case "style":
	      if (
	        "string" !== typeof props.precedence ||
	        "string" !== typeof props.href ||
	        "" === props.href
	      )
	        break;
	      return true;
	    case "link":
	      if (
	        "string" !== typeof props.rel ||
	        "string" !== typeof props.href ||
	        "" === props.href ||
	        props.onLoad ||
	        props.onError
	      )
	        break;
	      switch (props.rel) {
	        case "stylesheet":
	          return (
	            (type = props.disabled),
	            "string" === typeof props.precedence && null == type
	          );
	        default:
	          return true;
	      }
	    case "script":
	      if (
	        props.async &&
	        "function" !== typeof props.async &&
	        "symbol" !== typeof props.async &&
	        !props.onLoad &&
	        !props.onError &&
	        props.src &&
	        "string" === typeof props.src
	      )
	        return true;
	  }
	  return false;
	}
	function preloadResource(resource) {
	  return "stylesheet" === resource.type && 0 === (resource.state.loading & 3)
	    ? false
	    : true;
	}
	var suspendedState = null;
	function noop() {}
	function suspendResource(hoistableRoot, resource, props) {
	  if (null === suspendedState) throw Error(formatProdErrorMessage(475));
	  var state = suspendedState;
	  if (
	    "stylesheet" === resource.type &&
	    ("string" !== typeof props.media ||
	      false !== matchMedia(props.media).matches) &&
	    0 === (resource.state.loading & 4)
	  ) {
	    if (null === resource.instance) {
	      var key = getStyleKey(props.href),
	        instance = hoistableRoot.querySelector(
	          getStylesheetSelectorFromKey(key)
	        );
	      if (instance) {
	        hoistableRoot = instance._p;
	        null !== hoistableRoot &&
	          "object" === typeof hoistableRoot &&
	          "function" === typeof hoistableRoot.then &&
	          (state.count++,
	          (state = onUnsuspend.bind(state)),
	          hoistableRoot.then(state, state));
	        resource.state.loading |= 4;
	        resource.instance = instance;
	        markNodeAsHoistable(instance);
	        return;
	      }
	      instance = hoistableRoot.ownerDocument || hoistableRoot;
	      props = stylesheetPropsFromRawProps(props);
	      (key = preloadPropsMap.get(key)) &&
	        adoptPreloadPropsForStylesheet(props, key);
	      instance = instance.createElement("link");
	      markNodeAsHoistable(instance);
	      var linkInstance = instance;
	      linkInstance._p = new Promise(function (resolve, reject) {
	        linkInstance.onload = resolve;
	        linkInstance.onerror = reject;
	      });
	      setInitialProperties(instance, "link", props);
	      resource.instance = instance;
	    }
	    null === state.stylesheets && (state.stylesheets = new Map());
	    state.stylesheets.set(resource, hoistableRoot);
	    (hoistableRoot = resource.state.preload) &&
	      0 === (resource.state.loading & 3) &&
	      (state.count++,
	      (resource = onUnsuspend.bind(state)),
	      hoistableRoot.addEventListener("load", resource),
	      hoistableRoot.addEventListener("error", resource));
	  }
	}
	function waitForCommitToBeReady() {
	  if (null === suspendedState) throw Error(formatProdErrorMessage(475));
	  var state = suspendedState;
	  state.stylesheets &&
	    0 === state.count &&
	    insertSuspendedStylesheets(state, state.stylesheets);
	  return 0 < state.count
	    ? function (commit) {
	        var stylesheetTimer = setTimeout(function () {
	          state.stylesheets &&
	            insertSuspendedStylesheets(state, state.stylesheets);
	          if (state.unsuspend) {
	            var unsuspend = state.unsuspend;
	            state.unsuspend = null;
	            unsuspend();
	          }
	        }, 6e4);
	        state.unsuspend = commit;
	        return function () {
	          state.unsuspend = null;
	          clearTimeout(stylesheetTimer);
	        };
	      }
	    : null;
	}
	function onUnsuspend() {
	  this.count--;
	  if (0 === this.count)
	    if (this.stylesheets) insertSuspendedStylesheets(this, this.stylesheets);
	    else if (this.unsuspend) {
	      var unsuspend = this.unsuspend;
	      this.unsuspend = null;
	      unsuspend();
	    }
	}
	var precedencesByRoot = null;
	function insertSuspendedStylesheets(state, resources) {
	  state.stylesheets = null;
	  null !== state.unsuspend &&
	    (state.count++,
	    (precedencesByRoot = new Map()),
	    resources.forEach(insertStylesheetIntoRoot, state),
	    (precedencesByRoot = null),
	    onUnsuspend.call(state));
	}
	function insertStylesheetIntoRoot(root, resource) {
	  if (!(resource.state.loading & 4)) {
	    var precedences = precedencesByRoot.get(root);
	    if (precedences) var last = precedences.get(null);
	    else {
	      precedences = new Map();
	      precedencesByRoot.set(root, precedences);
	      for (
	        var nodes = root.querySelectorAll(
	            "link[data-precedence],style[data-precedence]"
	          ),
	          i = 0;
	        i < nodes.length;
	        i++
	      ) {
	        var node = nodes[i];
	        if (
	          "LINK" === node.nodeName ||
	          "not all" !== node.getAttribute("media")
	        )
	          precedences.set(node.dataset.precedence, node), (last = node);
	      }
	      last && precedences.set(null, last);
	    }
	    nodes = resource.instance;
	    node = nodes.getAttribute("data-precedence");
	    i = precedences.get(node) || last;
	    i === last && precedences.set(null, nodes);
	    precedences.set(node, nodes);
	    this.count++;
	    last = onUnsuspend.bind(this);
	    nodes.addEventListener("load", last);
	    nodes.addEventListener("error", last);
	    i
	      ? i.parentNode.insertBefore(nodes, i.nextSibling)
	      : ((root = 9 === root.nodeType ? root.head : root),
	        root.insertBefore(nodes, root.firstChild));
	    resource.state.loading |= 4;
	  }
	}
	var HostTransitionContext = {
	  $$typeof: REACT_CONTEXT_TYPE,
	  Provider: null,
	  Consumer: null,
	  _currentValue: sharedNotPendingObject,
	  _currentValue2: sharedNotPendingObject,
	  _threadCount: 0
	};
	function FiberRootNode(
	  containerInfo,
	  tag,
	  hydrate,
	  identifierPrefix,
	  onUncaughtError,
	  onCaughtError,
	  onRecoverableError,
	  formState
	) {
	  this.tag = 1;
	  this.containerInfo = containerInfo;
	  this.pingCache = this.current = this.pendingChildren = null;
	  this.timeoutHandle = -1;
	  this.callbackNode =
	    this.next =
	    this.pendingContext =
	    this.context =
	    this.cancelPendingCommit =
	      null;
	  this.callbackPriority = 0;
	  this.expirationTimes = createLaneMap(-1);
	  this.entangledLanes =
	    this.shellSuspendCounter =
	    this.errorRecoveryDisabledLanes =
	    this.expiredLanes =
	    this.warmLanes =
	    this.pingedLanes =
	    this.suspendedLanes =
	    this.pendingLanes =
	      0;
	  this.entanglements = createLaneMap(0);
	  this.hiddenUpdates = createLaneMap(null);
	  this.identifierPrefix = identifierPrefix;
	  this.onUncaughtError = onUncaughtError;
	  this.onCaughtError = onCaughtError;
	  this.onRecoverableError = onRecoverableError;
	  this.pooledCache = null;
	  this.pooledCacheLanes = 0;
	  this.formState = formState;
	  this.incompleteTransitions = new Map();
	}
	function createFiberRoot(
	  containerInfo,
	  tag,
	  hydrate,
	  initialChildren,
	  hydrationCallbacks,
	  isStrictMode,
	  identifierPrefix,
	  onUncaughtError,
	  onCaughtError,
	  onRecoverableError,
	  transitionCallbacks,
	  formState
	) {
	  containerInfo = new FiberRootNode(
	    containerInfo,
	    tag,
	    hydrate,
	    identifierPrefix,
	    onUncaughtError,
	    onCaughtError,
	    onRecoverableError,
	    formState
	  );
	  tag = 1;
	  true === isStrictMode && (tag |= 24);
	  isStrictMode = createFiberImplClass(3, null, null, tag);
	  containerInfo.current = isStrictMode;
	  isStrictMode.stateNode = containerInfo;
	  tag = createCache();
	  tag.refCount++;
	  containerInfo.pooledCache = tag;
	  tag.refCount++;
	  isStrictMode.memoizedState = {
	    element: initialChildren,
	    isDehydrated: hydrate,
	    cache: tag
	  };
	  initializeUpdateQueue(isStrictMode);
	  return containerInfo;
	}
	function getContextForSubtree(parentComponent) {
	  if (!parentComponent) return emptyContextObject;
	  parentComponent = emptyContextObject;
	  return parentComponent;
	}
	function updateContainerImpl(
	  rootFiber,
	  lane,
	  element,
	  container,
	  parentComponent,
	  callback
	) {
	  parentComponent = getContextForSubtree(parentComponent);
	  null === container.context
	    ? (container.context = parentComponent)
	    : (container.pendingContext = parentComponent);
	  container = createUpdate(lane);
	  container.payload = { element: element };
	  callback = void 0 === callback ? null : callback;
	  null !== callback && (container.callback = callback);
	  element = enqueueUpdate(rootFiber, container, lane);
	  null !== element &&
	    (scheduleUpdateOnFiber(element, rootFiber, lane),
	    entangleTransitions(element, rootFiber, lane));
	}
	function markRetryLaneImpl(fiber, retryLane) {
	  fiber = fiber.memoizedState;
	  if (null !== fiber && null !== fiber.dehydrated) {
	    var a = fiber.retryLane;
	    fiber.retryLane = 0 !== a && a < retryLane ? a : retryLane;
	  }
	}
	function markRetryLaneIfNotHydrated(fiber, retryLane) {
	  markRetryLaneImpl(fiber, retryLane);
	  (fiber = fiber.alternate) && markRetryLaneImpl(fiber, retryLane);
	}
	function attemptContinuousHydration(fiber) {
	  if (13 === fiber.tag) {
	    var root = enqueueConcurrentRenderForLane(fiber, 67108864);
	    null !== root && scheduleUpdateOnFiber(root, fiber, 67108864);
	    markRetryLaneIfNotHydrated(fiber, 67108864);
	  }
	}
	var _enabled = true;
	function dispatchDiscreteEvent(
	  domEventName,
	  eventSystemFlags,
	  container,
	  nativeEvent
	) {
	  var prevTransition = ReactSharedInternals.T;
	  ReactSharedInternals.T = null;
	  var previousPriority = ReactDOMSharedInternals.p;
	  try {
	    (ReactDOMSharedInternals.p = 2),
	      dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
	  } finally {
	    (ReactDOMSharedInternals.p = previousPriority),
	      (ReactSharedInternals.T = prevTransition);
	  }
	}
	function dispatchContinuousEvent(
	  domEventName,
	  eventSystemFlags,
	  container,
	  nativeEvent
	) {
	  var prevTransition = ReactSharedInternals.T;
	  ReactSharedInternals.T = null;
	  var previousPriority = ReactDOMSharedInternals.p;
	  try {
	    (ReactDOMSharedInternals.p = 8),
	      dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
	  } finally {
	    (ReactDOMSharedInternals.p = previousPriority),
	      (ReactSharedInternals.T = prevTransition);
	  }
	}
	function dispatchEvent(
	  domEventName,
	  eventSystemFlags,
	  targetContainer,
	  nativeEvent
	) {
	  if (_enabled) {
	    var blockedOn = findInstanceBlockingEvent(nativeEvent);
	    if (null === blockedOn)
	      dispatchEventForPluginEventSystem(
	        domEventName,
	        eventSystemFlags,
	        nativeEvent,
	        return_targetInst,
	        targetContainer
	      ),
	        clearIfContinuousEvent(domEventName, nativeEvent);
	    else if (
	      queueIfContinuousEvent(
	        blockedOn,
	        domEventName,
	        eventSystemFlags,
	        targetContainer,
	        nativeEvent
	      )
	    )
	      nativeEvent.stopPropagation();
	    else if (
	      (clearIfContinuousEvent(domEventName, nativeEvent),
	      eventSystemFlags & 4 &&
	        -1 < discreteReplayableEvents.indexOf(domEventName))
	    ) {
	      for (; null !== blockedOn; ) {
	        var fiber = getInstanceFromNode(blockedOn);
	        if (null !== fiber)
	          switch (fiber.tag) {
	            case 3:
	              fiber = fiber.stateNode;
	              if (fiber.current.memoizedState.isDehydrated) {
	                var lanes = getHighestPriorityLanes(fiber.pendingLanes);
	                if (0 !== lanes) {
	                  var root = fiber;
	                  root.pendingLanes |= 2;
	                  for (root.entangledLanes |= 2; lanes; ) {
	                    var lane = 1 << (31 - clz32(lanes));
	                    root.entanglements[1] |= lane;
	                    lanes &= ~lane;
	                  }
	                  ensureRootIsScheduled(fiber);
	                  0 === (executionContext & 6) &&
	                    ((workInProgressRootRenderTargetTime = now() + 500),
	                    flushSyncWorkAcrossRoots_impl(0));
	                }
	              }
	              break;
	            case 13:
	              (root = enqueueConcurrentRenderForLane(fiber, 2)),
	                null !== root && scheduleUpdateOnFiber(root, fiber, 2),
	                flushSyncWork$1(),
	                markRetryLaneIfNotHydrated(fiber, 2);
	          }
	        fiber = findInstanceBlockingEvent(nativeEvent);
	        null === fiber &&
	          dispatchEventForPluginEventSystem(
	            domEventName,
	            eventSystemFlags,
	            nativeEvent,
	            return_targetInst,
	            targetContainer
	          );
	        if (fiber === blockedOn) break;
	        blockedOn = fiber;
	      }
	      null !== blockedOn && nativeEvent.stopPropagation();
	    } else
	      dispatchEventForPluginEventSystem(
	        domEventName,
	        eventSystemFlags,
	        nativeEvent,
	        null,
	        targetContainer
	      );
	  }
	}
	function findInstanceBlockingEvent(nativeEvent) {
	  nativeEvent = getEventTarget(nativeEvent);
	  return findInstanceBlockingTarget(nativeEvent);
	}
	var return_targetInst = null;
	function findInstanceBlockingTarget(targetNode) {
	  return_targetInst = null;
	  targetNode = getClosestInstanceFromNode(targetNode);
	  if (null !== targetNode) {
	    var nearestMounted = getNearestMountedFiber(targetNode);
	    if (null === nearestMounted) targetNode = null;
	    else {
	      var tag = nearestMounted.tag;
	      if (13 === tag) {
	        targetNode = getSuspenseInstanceFromFiber(nearestMounted);
	        if (null !== targetNode) return targetNode;
	        targetNode = null;
	      } else if (3 === tag) {
	        if (nearestMounted.stateNode.current.memoizedState.isDehydrated)
	          return 3 === nearestMounted.tag
	            ? nearestMounted.stateNode.containerInfo
	            : null;
	        targetNode = null;
	      } else nearestMounted !== targetNode && (targetNode = null);
	    }
	  }
	  return_targetInst = targetNode;
	  return null;
	}
	function getEventPriority(domEventName) {
	  switch (domEventName) {
	    case "beforetoggle":
	    case "cancel":
	    case "click":
	    case "close":
	    case "contextmenu":
	    case "copy":
	    case "cut":
	    case "auxclick":
	    case "dblclick":
	    case "dragend":
	    case "dragstart":
	    case "drop":
	    case "focusin":
	    case "focusout":
	    case "input":
	    case "invalid":
	    case "keydown":
	    case "keypress":
	    case "keyup":
	    case "mousedown":
	    case "mouseup":
	    case "paste":
	    case "pause":
	    case "play":
	    case "pointercancel":
	    case "pointerdown":
	    case "pointerup":
	    case "ratechange":
	    case "reset":
	    case "resize":
	    case "seeked":
	    case "submit":
	    case "toggle":
	    case "touchcancel":
	    case "touchend":
	    case "touchstart":
	    case "volumechange":
	    case "change":
	    case "selectionchange":
	    case "textInput":
	    case "compositionstart":
	    case "compositionend":
	    case "compositionupdate":
	    case "beforeblur":
	    case "afterblur":
	    case "beforeinput":
	    case "blur":
	    case "fullscreenchange":
	    case "focus":
	    case "hashchange":
	    case "popstate":
	    case "select":
	    case "selectstart":
	      return 2;
	    case "drag":
	    case "dragenter":
	    case "dragexit":
	    case "dragleave":
	    case "dragover":
	    case "mousemove":
	    case "mouseout":
	    case "mouseover":
	    case "pointermove":
	    case "pointerout":
	    case "pointerover":
	    case "scroll":
	    case "touchmove":
	    case "wheel":
	    case "mouseenter":
	    case "mouseleave":
	    case "pointerenter":
	    case "pointerleave":
	      return 8;
	    case "message":
	      switch (getCurrentPriorityLevel()) {
	        case ImmediatePriority:
	          return 2;
	        case UserBlockingPriority:
	          return 8;
	        case NormalPriority$1:
	        case LowPriority:
	          return 32;
	        case IdlePriority:
	          return 268435456;
	        default:
	          return 32;
	      }
	    default:
	      return 32;
	  }
	}
	var hasScheduledReplayAttempt = false,
	  queuedFocus = null,
	  queuedDrag = null,
	  queuedMouse = null,
	  queuedPointers = new Map(),
	  queuedPointerCaptures = new Map(),
	  queuedExplicitHydrationTargets = [],
	  discreteReplayableEvents =
	    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
	      " "
	    );
	function clearIfContinuousEvent(domEventName, nativeEvent) {
	  switch (domEventName) {
	    case "focusin":
	    case "focusout":
	      queuedFocus = null;
	      break;
	    case "dragenter":
	    case "dragleave":
	      queuedDrag = null;
	      break;
	    case "mouseover":
	    case "mouseout":
	      queuedMouse = null;
	      break;
	    case "pointerover":
	    case "pointerout":
	      queuedPointers.delete(nativeEvent.pointerId);
	      break;
	    case "gotpointercapture":
	    case "lostpointercapture":
	      queuedPointerCaptures.delete(nativeEvent.pointerId);
	  }
	}
	function accumulateOrCreateContinuousQueuedReplayableEvent(
	  existingQueuedEvent,
	  blockedOn,
	  domEventName,
	  eventSystemFlags,
	  targetContainer,
	  nativeEvent
	) {
	  if (
	    null === existingQueuedEvent ||
	    existingQueuedEvent.nativeEvent !== nativeEvent
	  )
	    return (
	      (existingQueuedEvent = {
	        blockedOn: blockedOn,
	        domEventName: domEventName,
	        eventSystemFlags: eventSystemFlags,
	        nativeEvent: nativeEvent,
	        targetContainers: [targetContainer]
	      }),
	      null !== blockedOn &&
	        ((blockedOn = getInstanceFromNode(blockedOn)),
	        null !== blockedOn && attemptContinuousHydration(blockedOn)),
	      existingQueuedEvent
	    );
	  existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
	  blockedOn = existingQueuedEvent.targetContainers;
	  null !== targetContainer &&
	    -1 === blockedOn.indexOf(targetContainer) &&
	    blockedOn.push(targetContainer);
	  return existingQueuedEvent;
	}
	function queueIfContinuousEvent(
	  blockedOn,
	  domEventName,
	  eventSystemFlags,
	  targetContainer,
	  nativeEvent
	) {
	  switch (domEventName) {
	    case "focusin":
	      return (
	        (queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(
	          queuedFocus,
	          blockedOn,
	          domEventName,
	          eventSystemFlags,
	          targetContainer,
	          nativeEvent
	        )),
	        true
	      );
	    case "dragenter":
	      return (
	        (queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(
	          queuedDrag,
	          blockedOn,
	          domEventName,
	          eventSystemFlags,
	          targetContainer,
	          nativeEvent
	        )),
	        true
	      );
	    case "mouseover":
	      return (
	        (queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(
	          queuedMouse,
	          blockedOn,
	          domEventName,
	          eventSystemFlags,
	          targetContainer,
	          nativeEvent
	        )),
	        true
	      );
	    case "pointerover":
	      var pointerId = nativeEvent.pointerId;
	      queuedPointers.set(
	        pointerId,
	        accumulateOrCreateContinuousQueuedReplayableEvent(
	          queuedPointers.get(pointerId) || null,
	          blockedOn,
	          domEventName,
	          eventSystemFlags,
	          targetContainer,
	          nativeEvent
	        )
	      );
	      return true;
	    case "gotpointercapture":
	      return (
	        (pointerId = nativeEvent.pointerId),
	        queuedPointerCaptures.set(
	          pointerId,
	          accumulateOrCreateContinuousQueuedReplayableEvent(
	            queuedPointerCaptures.get(pointerId) || null,
	            blockedOn,
	            domEventName,
	            eventSystemFlags,
	            targetContainer,
	            nativeEvent
	          )
	        ),
	        true
	      );
	  }
	  return false;
	}
	function attemptExplicitHydrationTarget(queuedTarget) {
	  var targetInst = getClosestInstanceFromNode(queuedTarget.target);
	  if (null !== targetInst) {
	    var nearestMounted = getNearestMountedFiber(targetInst);
	    if (null !== nearestMounted)
	      if (((targetInst = nearestMounted.tag), 13 === targetInst)) {
	        if (
	          ((targetInst = getSuspenseInstanceFromFiber(nearestMounted)),
	          null !== targetInst)
	        ) {
	          queuedTarget.blockedOn = targetInst;
	          runWithPriority(queuedTarget.priority, function () {
	            if (13 === nearestMounted.tag) {
	              var lane = requestUpdateLane();
	              lane = getBumpedLaneForHydrationByLane(lane);
	              var root = enqueueConcurrentRenderForLane(nearestMounted, lane);
	              null !== root &&
	                scheduleUpdateOnFiber(root, nearestMounted, lane);
	              markRetryLaneIfNotHydrated(nearestMounted, lane);
	            }
	          });
	          return;
	        }
	      } else if (
	        3 === targetInst &&
	        nearestMounted.stateNode.current.memoizedState.isDehydrated
	      ) {
	        queuedTarget.blockedOn =
	          3 === nearestMounted.tag
	            ? nearestMounted.stateNode.containerInfo
	            : null;
	        return;
	      }
	  }
	  queuedTarget.blockedOn = null;
	}
	function attemptReplayContinuousQueuedEvent(queuedEvent) {
	  if (null !== queuedEvent.blockedOn) return false;
	  for (
	    var targetContainers = queuedEvent.targetContainers;
	    0 < targetContainers.length;

	  ) {
	    var nextBlockedOn = findInstanceBlockingEvent(queuedEvent.nativeEvent);
	    if (null === nextBlockedOn) {
	      nextBlockedOn = queuedEvent.nativeEvent;
	      var nativeEventClone = new nextBlockedOn.constructor(
	        nextBlockedOn.type,
	        nextBlockedOn
	      );
	      currentReplayingEvent = nativeEventClone;
	      nextBlockedOn.target.dispatchEvent(nativeEventClone);
	      currentReplayingEvent = null;
	    } else
	      return (
	        (targetContainers = getInstanceFromNode(nextBlockedOn)),
	        null !== targetContainers &&
	          attemptContinuousHydration(targetContainers),
	        (queuedEvent.blockedOn = nextBlockedOn),
	        false
	      );
	    targetContainers.shift();
	  }
	  return true;
	}
	function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
	  attemptReplayContinuousQueuedEvent(queuedEvent) && map.delete(key);
	}
	function replayUnblockedEvents() {
	  hasScheduledReplayAttempt = false;
	  null !== queuedFocus &&
	    attemptReplayContinuousQueuedEvent(queuedFocus) &&
	    (queuedFocus = null);
	  null !== queuedDrag &&
	    attemptReplayContinuousQueuedEvent(queuedDrag) &&
	    (queuedDrag = null);
	  null !== queuedMouse &&
	    attemptReplayContinuousQueuedEvent(queuedMouse) &&
	    (queuedMouse = null);
	  queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
	  queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
	}
	function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
	  queuedEvent.blockedOn === unblocked &&
	    ((queuedEvent.blockedOn = null),
	    hasScheduledReplayAttempt ||
	      ((hasScheduledReplayAttempt = true),
	      Scheduler.unstable_scheduleCallback(
	        Scheduler.unstable_NormalPriority,
	        replayUnblockedEvents
	      )));
	}
	var lastScheduledReplayQueue = null;
	function scheduleReplayQueueIfNeeded(formReplayingQueue) {
	  lastScheduledReplayQueue !== formReplayingQueue &&
	    ((lastScheduledReplayQueue = formReplayingQueue),
	    Scheduler.unstable_scheduleCallback(
	      Scheduler.unstable_NormalPriority,
	      function () {
	        lastScheduledReplayQueue === formReplayingQueue &&
	          (lastScheduledReplayQueue = null);
	        for (var i = 0; i < formReplayingQueue.length; i += 3) {
	          var form = formReplayingQueue[i],
	            submitterOrAction = formReplayingQueue[i + 1],
	            formData = formReplayingQueue[i + 2];
	          if ("function" !== typeof submitterOrAction)
	            if (null === findInstanceBlockingTarget(submitterOrAction || form))
	              continue;
	            else break;
	          var formInst = getInstanceFromNode(form);
	          null !== formInst &&
	            (formReplayingQueue.splice(i, 3),
	            (i -= 3),
	            startHostTransition(
	              formInst,
	              {
	                pending: true,
	                data: formData,
	                method: form.method,
	                action: submitterOrAction
	              },
	              submitterOrAction,
	              formData
	            ));
	        }
	      }
	    ));
	}
	function retryIfBlockedOn(unblocked) {
	  function unblock(queuedEvent) {
	    return scheduleCallbackIfUnblocked(queuedEvent, unblocked);
	  }
	  null !== queuedFocus && scheduleCallbackIfUnblocked(queuedFocus, unblocked);
	  null !== queuedDrag && scheduleCallbackIfUnblocked(queuedDrag, unblocked);
	  null !== queuedMouse && scheduleCallbackIfUnblocked(queuedMouse, unblocked);
	  queuedPointers.forEach(unblock);
	  queuedPointerCaptures.forEach(unblock);
	  for (var i = 0; i < queuedExplicitHydrationTargets.length; i++) {
	    var queuedTarget = queuedExplicitHydrationTargets[i];
	    queuedTarget.blockedOn === unblocked && (queuedTarget.blockedOn = null);
	  }
	  for (
	    ;
	    0 < queuedExplicitHydrationTargets.length &&
	    ((i = queuedExplicitHydrationTargets[0]), null === i.blockedOn);

	  )
	    attemptExplicitHydrationTarget(i),
	      null === i.blockedOn && queuedExplicitHydrationTargets.shift();
	  i = (unblocked.ownerDocument || unblocked).$$reactFormReplay;
	  if (null != i)
	    for (queuedTarget = 0; queuedTarget < i.length; queuedTarget += 3) {
	      var form = i[queuedTarget],
	        submitterOrAction = i[queuedTarget + 1],
	        formProps = form[internalPropsKey] || null;
	      if ("function" === typeof submitterOrAction)
	        formProps || scheduleReplayQueueIfNeeded(i);
	      else if (formProps) {
	        var action = null;
	        if (submitterOrAction && submitterOrAction.hasAttribute("formAction"))
	          if (
	            ((form = submitterOrAction),
	            (formProps = submitterOrAction[internalPropsKey] || null))
	          )
	            action = formProps.formAction;
	          else {
	            if (null !== findInstanceBlockingTarget(form)) continue;
	          }
	        else action = formProps.action;
	        "function" === typeof action
	          ? (i[queuedTarget + 1] = action)
	          : (i.splice(queuedTarget, 3), (queuedTarget -= 3));
	        scheduleReplayQueueIfNeeded(i);
	      }
	    }
	}
	function ReactDOMRoot(internalRoot) {
	  this._internalRoot = internalRoot;
	}
	ReactDOMHydrationRoot.prototype.render = ReactDOMRoot.prototype.render =
	  function (children) {
	    var root = this._internalRoot;
	    if (null === root) throw Error(formatProdErrorMessage(409));
	    var current = root.current,
	      lane = requestUpdateLane();
	    updateContainerImpl(current, lane, children, root, null, null);
	  };
	ReactDOMHydrationRoot.prototype.unmount = ReactDOMRoot.prototype.unmount =
	  function () {
	    var root = this._internalRoot;
	    if (null !== root) {
	      this._internalRoot = null;
	      var container = root.containerInfo;
	      updateContainerImpl(root.current, 2, null, root, null, null);
	      flushSyncWork$1();
	      container[internalContainerInstanceKey] = null;
	    }
	  };
	function ReactDOMHydrationRoot(internalRoot) {
	  this._internalRoot = internalRoot;
	}
	ReactDOMHydrationRoot.prototype.unstable_scheduleHydration = function (target) {
	  if (target) {
	    var updatePriority = resolveUpdatePriority();
	    target = { blockedOn: null, target: target, priority: updatePriority };
	    for (
	      var i = 0;
	      i < queuedExplicitHydrationTargets.length &&
	      0 !== updatePriority &&
	      updatePriority < queuedExplicitHydrationTargets[i].priority;
	      i++
	    );
	    queuedExplicitHydrationTargets.splice(i, 0, target);
	    0 === i && attemptExplicitHydrationTarget(target);
	  }
	};
	var isomorphicReactPackageVersion$jscomp$inline_1785 = React.version;
	if (
	  "19.1.0" !==
	  isomorphicReactPackageVersion$jscomp$inline_1785
	)
	  throw Error(
	    formatProdErrorMessage(
	      527,
	      isomorphicReactPackageVersion$jscomp$inline_1785,
	      "19.1.0"
	    )
	  );
	ReactDOMSharedInternals.findDOMNode = function (componentOrElement) {
	  var fiber = componentOrElement._reactInternals;
	  if (void 0 === fiber) {
	    if ("function" === typeof componentOrElement.render)
	      throw Error(formatProdErrorMessage(188));
	    componentOrElement = Object.keys(componentOrElement).join(",");
	    throw Error(formatProdErrorMessage(268, componentOrElement));
	  }
	  componentOrElement = findCurrentFiberUsingSlowPath(fiber);
	  componentOrElement =
	    null !== componentOrElement
	      ? findCurrentHostFiberImpl(componentOrElement)
	      : null;
	  componentOrElement =
	    null === componentOrElement ? null : componentOrElement.stateNode;
	  return componentOrElement;
	};
	var internals$jscomp$inline_2256 = {
	  bundleType: 0,
	  version: "19.1.0",
	  rendererPackageName: "react-dom",
	  currentDispatcherRef: ReactSharedInternals,
	  reconcilerVersion: "19.1.0"
	};
	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
	  var hook$jscomp$inline_2257 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	  if (
	    !hook$jscomp$inline_2257.isDisabled &&
	    hook$jscomp$inline_2257.supportsFiber
	  )
	    try {
	      (rendererID = hook$jscomp$inline_2257.inject(
	        internals$jscomp$inline_2256
	      )),
	        (injectedHook = hook$jscomp$inline_2257);
	    } catch (err) {}
	}
	reactDomClient_production.createRoot = function (container, options) {
	  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
	  var isStrictMode = false,
	    identifierPrefix = "",
	    onUncaughtError = defaultOnUncaughtError,
	    onCaughtError = defaultOnCaughtError,
	    onRecoverableError = defaultOnRecoverableError,
	    transitionCallbacks = null;
	  null !== options &&
	    void 0 !== options &&
	    (true === options.unstable_strictMode && (isStrictMode = true),
	    void 0 !== options.identifierPrefix &&
	      (identifierPrefix = options.identifierPrefix),
	    void 0 !== options.onUncaughtError &&
	      (onUncaughtError = options.onUncaughtError),
	    void 0 !== options.onCaughtError && (onCaughtError = options.onCaughtError),
	    void 0 !== options.onRecoverableError &&
	      (onRecoverableError = options.onRecoverableError),
	    void 0 !== options.unstable_transitionCallbacks &&
	      (transitionCallbacks = options.unstable_transitionCallbacks));
	  options = createFiberRoot(
	    container,
	    1,
	    false,
	    null,
	    null,
	    isStrictMode,
	    identifierPrefix,
	    onUncaughtError,
	    onCaughtError,
	    onRecoverableError,
	    transitionCallbacks,
	    null
	  );
	  container[internalContainerInstanceKey] = options.current;
	  listenToAllSupportedEvents(container);
	  return new ReactDOMRoot(options);
	};
	reactDomClient_production.hydrateRoot = function (container, initialChildren, options) {
	  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
	  var isStrictMode = false,
	    identifierPrefix = "",
	    onUncaughtError = defaultOnUncaughtError,
	    onCaughtError = defaultOnCaughtError,
	    onRecoverableError = defaultOnRecoverableError,
	    transitionCallbacks = null,
	    formState = null;
	  null !== options &&
	    void 0 !== options &&
	    (true === options.unstable_strictMode && (isStrictMode = true),
	    void 0 !== options.identifierPrefix &&
	      (identifierPrefix = options.identifierPrefix),
	    void 0 !== options.onUncaughtError &&
	      (onUncaughtError = options.onUncaughtError),
	    void 0 !== options.onCaughtError && (onCaughtError = options.onCaughtError),
	    void 0 !== options.onRecoverableError &&
	      (onRecoverableError = options.onRecoverableError),
	    void 0 !== options.unstable_transitionCallbacks &&
	      (transitionCallbacks = options.unstable_transitionCallbacks),
	    void 0 !== options.formState && (formState = options.formState));
	  initialChildren = createFiberRoot(
	    container,
	    1,
	    true,
	    initialChildren,
	    null != options ? options : null,
	    isStrictMode,
	    identifierPrefix,
	    onUncaughtError,
	    onCaughtError,
	    onRecoverableError,
	    transitionCallbacks,
	    formState
	  );
	  initialChildren.context = getContextForSubtree(null);
	  options = initialChildren.current;
	  isStrictMode = requestUpdateLane();
	  isStrictMode = getBumpedLaneForHydrationByLane(isStrictMode);
	  identifierPrefix = createUpdate(isStrictMode);
	  identifierPrefix.callback = null;
	  enqueueUpdate(options, identifierPrefix, isStrictMode);
	  options = isStrictMode;
	  initialChildren.current.lanes = options;
	  markRootUpdated$1(initialChildren, options);
	  ensureRootIsScheduled(initialChildren);
	  container[internalContainerInstanceKey] = initialChildren.current;
	  listenToAllSupportedEvents(container);
	  return new ReactDOMHydrationRoot(initialChildren);
	};
	reactDomClient_production.version = "19.1.0";
	return reactDomClient_production;
}

var hasRequiredClient;

function requireClient () {
	if (hasRequiredClient) return client.exports;
	hasRequiredClient = 1;
	function checkDCE() {
	  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
	    return;
	  }
	  try {
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    console.error(err);
	  }
	}
	{
	  checkDCE();
	  client.exports = requireReactDomClient_production();
	}
	return client.exports;
}

var clientExports = requireClient();
const ReactDOM$1 = /*@__PURE__*/getDefaultExportFromCjs(clientExports);

var reactDomExports = requireReactDom();
const ReactDOM = /*@__PURE__*/getDefaultExportFromCjs(reactDomExports);

/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}

////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
 * Actions represent the type of change to a location value.
 */
var Action;
(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */
  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */
  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createBrowserLocation(window, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window.location;
    return createLocation("", {
      pathname,
      search,
      hash
    },
    // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }
  function createBrowserHref(window, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);
    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience, so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message);
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
/**
 * Creates a Location object with a unique key from the given Path
 */
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends$1({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
  return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex();
  // Index should only be null when we initialize. If not, it's because the
  // user called history.pushState or history.replaceState directly, in which
  // case we should log a warning as it will result in bugs.
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends$1({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    // try...catch because iOS limits us to 100 pushState calls :/
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      // If the exception is because `state` can't be serialized, let that throw
      // outwards just like a replace call would so the dev knows the cause
      // https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
      // https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      // They are going to lose state here, but there is no real
      // way to warn them about it since the page will refresh...
      window.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to) {
    // window.location.origin is "null" (the literal string value) in Firefox
    // under certain conditions, notably when serving from a local HTML file
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
    let base = window.location.origin !== "null" ? window.location.origin : window.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    // Treating this as a full URL will strip any trailing spaces so we need to
    // pre-encode them since they might be part of a matching splat param from
    // an ancestor route
    href = href.replace(/ $/, "%20");
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref(window, to);
    },
    createURL,
    encodeLocation(to) {
      // Encode a Location the same way window.location would
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace,
    go(n) {
      return globalHistory.go(n);
    }
  };
  return history;
}
//#endregion

var ResultType;
(function (ResultType) {
  ResultType["data"] = "data";
  ResultType["deferred"] = "deferred";
  ResultType["redirect"] = "redirect";
  ResultType["error"] = "error";
})(ResultType || (ResultType = {}));
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/v6/utils/match-routes
 */
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  return matchRoutesImpl(routes, locationArg, basename);
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    // Incoming pathnames are generally encoded from either window.location
    // or from router.navigate, but we want to match against the unencoded
    // paths in the route definitions.  Memory router locations won't be
    // encoded here but there also shouldn't be anything to decode so this
    // should be a safe operation.  This avoids needing matchRoutes to be
    // history-aware.
    let decoded = decodePath(pathname);
    matches = matchRouteBranch(branches[i], decoded);
  }
  return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === undefined ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    // Add the children before adding this route to the array, so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.
    if (route.children && route.children.length > 0) {
      invariant(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    var _route$path;
    // coarse-grain check for optional params
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments;
  // Optional path segments are denoted by a trailing `?`
  let isOptional = first.endsWith("?");
  // Compute the corresponding required segment: `foo?` -> `foo`
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    // Intepret empty string as omitting an optional segment
    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  // All child paths with the prefix.  Do this for all children before the
  // optional version for all children, so we get consistent ordering where the
  // parent optional aspect is preferred as required.  Otherwise, we can get
  // child sections interspersed where deeper optional segments are higher than
  // parent optional segments, where for example, /:two would explode _earlier_
  // then /:one.  By always including the parent as required _for all children_
  // first, we avoid this issue
  result.push(...restExploded.map(subpath => subpath === "" ? required : [required, subpath].join("/")));
  // Then, if this is an optional value, add all child versions without
  if (isOptional) {
    result.push(...restExploded);
  }
  // for absolute paths, ensure `/` instead of empty segment
  return result.map(exploded => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}
const paramRe = /^:[\w-]+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = s => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ?
  // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] :
  // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}
function matchRouteBranch(branch, pathname, allowPartial) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    let route = meta.route;
    if (!match) {
      return null;
    }
    Object.assign(matchedParams, match.params);
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/v6/utils/match-path
 */
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce((memo, _ref, index) => {
    let {
      paramName,
      isOptional
    } = _ref;
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    const value = captureGroups[index];
    if (isOptional && !value) {
      memo[paramName] = undefined;
    } else {
      memo[paramName] = (value || "").replace(/%2F/g, "/");
    }
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^${}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional) => {
    params.push({
      paramName,
      isOptional: isOptional != null
    });
    return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    params.push({
      paramName: "*"
    });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else if (end) {
    // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex, so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
  } else ;
  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, params];
}
function decodePath(value) {
  try {
    return value.split("/").map(v => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
  } catch (error) {
    warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
    return value;
  }
}
/**
 * @private
 */
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  // We want to leave trailing slash behavior in the user's control, so if they
  // specify a basename with a trailing slash, we should support it
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
/**
 * @private
 */
const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */
const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}

const validMutationMethodsArr = ["post", "put", "patch", "delete"];
new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
new Set(validRequestMethodsArr);

/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
const DataRouterContext = /* @__PURE__ */ reactExports.createContext(null);
const DataRouterStateContext = /* @__PURE__ */ reactExports.createContext(null);
const NavigationContext = /* @__PURE__ */ reactExports.createContext(null);
const LocationContext = /* @__PURE__ */ reactExports.createContext(null);
const RouteContext = /* @__PURE__ */ reactExports.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
const RouteErrorContext = /* @__PURE__ */ reactExports.createContext(null);
function useInRouterContext() {
  return reactExports.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? invariant(false) : void 0;
  return reactExports.useContext(LocationContext).location;
}
function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}
function useRoutesImpl(routes, locationArg, dataRouterState, future) {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    navigator
  } = reactExports.useContext(NavigationContext);
  let {
    matches: parentMatches
  } = reactExports.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  routeMatch && routeMatch.route;
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
    let segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });
  let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname
    ]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
    ])
  })), parentMatches, dataRouterState, future);
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
      value: {
        location: _extends({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let devInfo = null;
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ reactExports.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /* @__PURE__ */ reactExports.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}
const defaultErrorElement = /* @__PURE__ */ reactExports.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }
    return {
      error: props.error !== void 0 ? props.error : state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ reactExports.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState, future) {
  var _dataRouterState;
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (dataRouterState === void 0) {
    dataRouterState = null;
  }
  if (future === void 0) {
    future = null;
  }
  if (matches == null) {
    var _future;
    if (!dataRouterState) {
      return null;
    }
    if (dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else if ((_future = future) != null && _future.v7_partialHydration && parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = (_dataRouterState = dataRouterState) == null ? void 0 : _dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex((m) => m.route.id && (errors == null ? void 0 : errors[m.route.id]) !== void 0);
    !(errorIndex >= 0) ? invariant(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterState && future && future.v7_partialHydration) {
    for (let i = 0; i < renderedMatches.length; i++) {
      let match = renderedMatches[i];
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i;
      }
      if (match.route.id) {
        let {
          loaderData,
          errors: errors2
        } = dataRouterState;
        let needsToRunLoader = match.route.loader && loaderData[match.route.id] === void 0 && (!errors2 || errors2[match.route.id] === void 0);
        if (match.route.lazy || needsToRunLoader) {
          renderFallback = true;
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    let error;
    let shouldRenderHydrateFallback = false;
    let errorElement = null;
    let hydrateFallbackElement = null;
    if (dataRouterState) {
      error = errors && match.route.id ? errors[match.route.id] : void 0;
      errorElement = match.route.errorElement || defaultErrorElement;
      if (renderFallback) {
        if (fallbackIndex < 0 && index === 0) {
          warningOnce("route-fallback");
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = null;
        } else if (fallbackIndex === index) {
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = match.route.hydrateFallbackElement || null;
        }
      }
    }
    let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (shouldRenderHydrateFallback) {
        children = hydrateFallbackElement;
      } else if (match.route.Component) {
        children = /* @__PURE__ */ reactExports.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return /* @__PURE__ */ reactExports.createElement(RenderedRoute, {
        match,
        routeContext: {
          outlet,
          matches: matches2,
          isDataRoute: dataRouterState != null
        },
        children
      });
    };
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ reactExports.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      revalidation: dataRouterState.revalidation,
      component: errorElement,
      error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches: matches2,
        isDataRoute: true
      }
    }) : getChildren();
  }, null);
}
var DataRouterStateHook$1 = /* @__PURE__ */ function(DataRouterStateHook2) {
  DataRouterStateHook2["UseBlocker"] = "useBlocker";
  DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook2["UseActionData"] = "useActionData";
  DataRouterStateHook2["UseRouteError"] = "useRouteError";
  DataRouterStateHook2["UseNavigation"] = "useNavigation";
  DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook2["UseMatches"] = "useMatches";
  DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
  DataRouterStateHook2["UseNavigateStable"] = "useNavigate";
  DataRouterStateHook2["UseRouteId"] = "useRouteId";
  return DataRouterStateHook2;
}(DataRouterStateHook$1 || {});
function useDataRouterState(hookName) {
  let state = reactExports.useContext(DataRouterStateContext);
  !state ? invariant(false) : void 0;
  return state;
}
function useRouteContext(hookName) {
  let route = reactExports.useContext(RouteContext);
  !route ? invariant(false) : void 0;
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext();
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? invariant(false) : void 0;
  return thisRoute.route.id;
}
function useRouteError() {
  var _state$errors;
  let error = reactExports.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook$1.UseRouteError);
  let routeId = useCurrentRouteId();
  if (error !== void 0) {
    return error;
  }
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
const alreadyWarned$1 = {};
function warningOnce(key, cond, message) {
  if (!alreadyWarned$1[key]) {
    alreadyWarned$1[key] = true;
  }
}
function logV6DeprecationWarnings(renderFuture, routerFuture) {
  if ((renderFuture == null ? void 0 : renderFuture.v7_startTransition) === void 0) ;
  if ((renderFuture == null ? void 0 : renderFuture.v7_relativeSplatPath) === void 0 && (true)) ;
}
function Route(_props) {
  invariant(false);
}
function Router(_ref5) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator,
    static: staticProp = false,
    future
  } = _ref5;
  !!useInRouterContext() ? invariant(false) : void 0;
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = reactExports.useMemo(() => ({
    basename,
    navigator,
    static: staticProp,
    future: _extends({
      v7_relativeSplatPath: false
    }, future)
  }), [basename, future, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = reactExports.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  if (locationContext == null) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
    children,
    value: locationContext
  }));
}
function Routes(_ref6) {
  let {
    children,
    location
  } = _ref6;
  return useRoutes(createRoutesFromChildren(children), location);
}
new Promise(() => {
});
function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  let routes = [];
  reactExports.Children.forEach(children, (element, index) => {
    if (!/* @__PURE__ */ reactExports.isValidElement(element)) {
      return;
    }
    let treePath = [...parentPath, index];
    if (element.type === reactExports.Fragment) {
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
      return;
    }
    !(element.type === Route) ? invariant(false) : void 0;
    !(!element.props.index || !element.props.children) ? invariant(false) : void 0;
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes.push(route);
  });
  return routes;
}

/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const REACT_ROUTER_VERSION = "6";
try {
  window.__reactRouterVersion = REACT_ROUTER_VERSION;
} catch (e) {
}
const START_TRANSITION = "startTransition";
const startTransitionImpl = React$1[START_TRANSITION];
function BrowserRouter(_ref4) {
  let {
    basename,
    children,
    future,
    window: window2
  } = _ref4;
  let historyRef = reactExports.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window: window2,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = reactExports.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = reactExports.useCallback((newState) => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  reactExports.useLayoutEffect(() => history.listen(setState), [history, setState]);
  reactExports.useEffect(() => logV6DeprecationWarnings(future), [future]);
  return /* @__PURE__ */ reactExports.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
    future
  });
}
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook2["UseSubmit"] = "useSubmit";
  DataRouterHook2["UseSubmitFetcher"] = "useSubmitFetcher";
  DataRouterHook2["UseFetcher"] = "useFetcher";
  DataRouterHook2["useViewTransitionState"] = "useViewTransitionState";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseFetcher"] = "useFetcher";
  DataRouterStateHook2["UseFetchers"] = "useFetchers";
  DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));

// packages/react/compose-refs/src/compose-refs.tsx
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return reactExports.useCallback(composeRefs(...refs), refs);
}

// src/slot.tsx
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
  const Slot2 = reactExports.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = reactExports.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (reactExports.Children.count(newElement) > 1) return reactExports.Children.only(null);
          return reactExports.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, { ...slotProps, ref: forwardedRef, children: reactExports.isValidElement(newElement) ? reactExports.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var Slot$1 = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
  const SlotClone = reactExports.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (reactExports.isValidElement(children)) {
      const childrenRef = getElementRef$1(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== reactExports.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return reactExports.cloneElement(children, props2);
    }
    return reactExports.Children.count(children) > 1 ? reactExports.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function isSlottable(child) {
  return reactExports.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef$1(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = clsx;
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };

const CLASS_PART_SEPARATOR = '-';
const createClassGroupUtils = config => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = className => {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
    if (classParts[0] === '' && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
const getGroupRecursive = (classParts, classPartObject) => {
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return undefined;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return classPartObject.validators.find(({
    validator
  }) => validator(classRest))?.classGroupId;
};
const arbitraryPropertyRegex = /^\[(.+)\]$/;
const getGroupIdForArbitraryProperty = className => {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
    if (property) {
      // I use two dots here because one dot is used as prefix for class groups in plugins
      return 'arbitrary..' + property;
    }
  }
};
/**
 * Exported for testing only
 */
const createClassMap = config => {
  const {
    theme,
    prefix
  } = config;
  const classMap = {
    nextPart: new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  classGroup.forEach(classDefinition => {
    if (typeof classDefinition === 'string') {
      const classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === 'function') {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup]) => {
      processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
    });
  });
};
const getPart = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach(pathPart => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
};
const isThemeGetter = func => func.isThemeGetter;
const getPrefixedClassGroupEntries = (classGroupEntries, prefix) => {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map(classDefinition => {
      if (typeof classDefinition === 'string') {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === 'object') {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
};

// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
const createLruCache = maxCacheSize => {
  if (maxCacheSize < 1) {
    return {
      get: () => undefined,
      set: () => {}
    };
  }
  let cacheSize = 0;
  let cache = new Map();
  let previousCache = new Map();
  const update = (key, value) => {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = new Map();
    }
  };
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== undefined) {
        return value;
      }
      if ((value = previousCache.get(key)) !== undefined) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
};
const IMPORTANT_MODIFIER = '!';
const createParseClassName = config => {
  const {
    separator,
    experimentalParseClassName
  } = config;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  // parseClassName inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
  const parseClassName = className => {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === '/') {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === '[') {
        bracketDepth++;
      } else if (currentCharacter === ']') {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
  if (experimentalParseClassName) {
    return className => experimentalParseClassName({
      className,
      parseClassName
    });
  }
  return parseClassName;
};
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */
const sortModifiers = modifiers => {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach(modifier => {
    const isArbitraryVariant = modifier[0] === '[';
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
};
const createConfigUtils = config => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  ...createClassGroupUtils(config)
});
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = '';
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        // Not a Tailwind class
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        // Not a Tailwind class
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(':');
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId)) {
      // Tailwind class omitted due to conflict
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i = 0; i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    // Tailwind class not in conflict
    result = originalClassName + (result.length > 0 ? ' ' + result : result);
  }
  return result;
};

/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = '';
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}
const toValue = mix => {
  if (typeof mix === 'string') {
    return mix;
  }
  let resolvedValue;
  let string = '';
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
const fromTheme = key => {
  const themeGetter = theme => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /*#__PURE__*/new Set(['px', 'full', 'screen']);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isLength = value => isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
const isArbitraryLength = value => getIsArbitraryValue(value, 'length', isLengthOnly);
const isNumber = value => Boolean(value) && !Number.isNaN(Number(value));
const isArbitraryNumber = value => getIsArbitraryValue(value, 'number', isNumber);
const isInteger = value => Boolean(value) && Number.isInteger(Number(value));
const isPercent = value => value.endsWith('%') && isNumber(value.slice(0, -1));
const isArbitraryValue = value => arbitraryValueRegex.test(value);
const isTshirtSize = value => tshirtUnitRegex.test(value);
const sizeLabels = /*#__PURE__*/new Set(['length', 'size', 'percentage']);
const isArbitrarySize = value => getIsArbitraryValue(value, sizeLabels, isNever);
const isArbitraryPosition = value => getIsArbitraryValue(value, 'position', isNever);
const imageLabels = /*#__PURE__*/new Set(['image', 'url']);
const isArbitraryImage = value => getIsArbitraryValue(value, imageLabels, isImage);
const isArbitraryShadow = value => getIsArbitraryValue(value, '', isShadow);
const isAny = () => true;
const getIsArbitraryValue = (value, label, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === 'string' ? result[1] === label : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
const isLengthOnly = value =>
// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
// For example, `hsl(0 0% 0%)` would be classified as a length without this check.
// I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
const isNever = () => false;
const isShadow = value => shadowRegex.test(value);
const isImage = value => imageRegex.test(value);
const getDefaultConfig = () => {
  const colors = fromTheme('colors');
  const spacing = fromTheme('spacing');
  const blur = fromTheme('blur');
  const brightness = fromTheme('brightness');
  const borderColor = fromTheme('borderColor');
  const borderRadius = fromTheme('borderRadius');
  const borderSpacing = fromTheme('borderSpacing');
  const borderWidth = fromTheme('borderWidth');
  const contrast = fromTheme('contrast');
  const grayscale = fromTheme('grayscale');
  const hueRotate = fromTheme('hueRotate');
  const invert = fromTheme('invert');
  const gap = fromTheme('gap');
  const gradientColorStops = fromTheme('gradientColorStops');
  const gradientColorStopPositions = fromTheme('gradientColorStopPositions');
  const inset = fromTheme('inset');
  const margin = fromTheme('margin');
  const opacity = fromTheme('opacity');
  const padding = fromTheme('padding');
  const saturate = fromTheme('saturate');
  const scale = fromTheme('scale');
  const sepia = fromTheme('sepia');
  const skew = fromTheme('skew');
  const space = fromTheme('space');
  const translate = fromTheme('translate');
  const getOverscroll = () => ['auto', 'contain', 'none'];
  const getOverflow = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'];
  const getSpacingWithAutoAndArbitrary = () => ['auto', isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ['', isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ['auto', isNumber, isArbitraryValue];
  const getPositions = () => ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'];
  const getLineStyles = () => ['solid', 'dashed', 'dotted', 'double', 'none'];
  const getBlendModes = () => ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];
  const getAlign = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];
  const getZeroAndEmpty = () => ['', '0', isArbitraryValue];
  const getBreaks = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ':',
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ['none', '', isTshirtSize, isArbitraryValue],
      brightness: getNumberAndArbitrary(),
      borderColor: [colors],
      borderRadius: ['none', '', 'full', isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumberAndArbitrary(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumberAndArbitrary(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumberAndArbitrary(),
      scale: getNumberAndArbitrary(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ['auto', 'square', 'video', isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ['container'],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      'break-after': [{
        'break-after': getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      'break-before': [{
        'break-before': getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      'break-inside': [{
        'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column']
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      'box-decoration': [{
        'box-decoration': ['slice', 'clone']
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ['border', 'content']
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ['right', 'left', 'none', 'start', 'end']
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ['left', 'right', 'both', 'none', 'start', 'end']
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ['isolate', 'isolation-auto'],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      'object-fit': [{
        object: ['contain', 'cover', 'fill', 'none', 'scale-down']
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      'object-position': [{
        object: [...getPositions(), isArbitraryValue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-x': [{
        'overflow-x': getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-y': [{
        'overflow-y': getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-x': [{
        'overscroll-x': getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-y': [{
        'overscroll-y': getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-x': [{
        'inset-x': [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-y': [{
        'inset-y': [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ['visible', 'invisible', 'collapse'],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ['auto', isInteger, isArbitraryValue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      'flex-direction': [{
        flex: ['row', 'row-reverse', 'col', 'col-reverse']
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      'flex-wrap': [{
        flex: ['wrap', 'wrap-reverse', 'nowrap']
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ['1', 'auto', 'initial', 'none', isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ['first', 'last', 'none', isInteger, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      'grid-cols': [{
        'grid-cols': [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start-end': [{
        col: ['auto', {
          span: ['full', isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start': [{
        'col-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-end': [{
        'col-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      'grid-rows': [{
        'grid-rows': [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start-end': [{
        row: ['auto', {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start': [{
        'row-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-end': [{
        'row-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      'grid-flow': [{
        'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense']
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      'auto-cols': [{
        'auto-cols': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      'auto-rows': [{
        'auto-rows': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-x': [{
        'gap-x': [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-y': [{
        'gap-y': [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      'justify-content': [{
        justify: ['normal', ...getAlign()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      'justify-items': [{
        'justify-items': ['start', 'end', 'center', 'stretch']
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      'justify-self': [{
        'justify-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      'align-content': [{
        content: ['normal', ...getAlign(), 'baseline']
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      'align-items': [{
        items: ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      'align-self': [{
        self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline']
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      'place-content': [{
        'place-content': [...getAlign(), 'baseline']
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      'place-items': [{
        'place-items': ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      'place-self': [{
        'place-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      'space-x': [{
        'space-x': [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-x-reverse': ['space-x-reverse'],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      'space-y': [{
        'space-y': [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-y-reverse': ['space-y-reverse'],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-w': [{
        'min-w': [isArbitraryValue, spacing, 'min', 'max', 'fit']
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-w': [{
        'max-w': [isArbitraryValue, spacing, 'none', 'full', 'min', 'max', 'fit', 'prose', {
          screen: [isTshirtSize]
        }, isTshirtSize]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-h': [{
        'min-h': [isArbitraryValue, spacing, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-h': [{
        'max-h': [isArbitraryValue, spacing, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit']
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      'font-size': [{
        text: ['base', isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      'font-style': ['italic', 'not-italic'],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      'font-weight': [{
        font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      'font-family': [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-normal': ['normal-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-ordinal': ['ordinal'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-slashed-zero': ['slashed-zero'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      'line-clamp': [{
        'line-clamp': ['none', isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', isLength, isArbitraryValue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      'list-image': [{
        'list-image': ['none', isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      'list-style-type': [{
        list: ['none', 'disc', 'decimal', isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      'list-style-position': [{
        list: ['inside', 'outside']
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      'placeholder-color': [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      'placeholder-opacity': [{
        'placeholder-opacity': [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      'text-alignment': [{
        text: ['left', 'center', 'right', 'justify', 'start', 'end']
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      'text-color': [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      'text-opacity': [{
        'text-opacity': [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      'text-decoration-style': [{
        decoration: [...getLineStyles(), 'wavy']
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      'text-decoration-thickness': [{
        decoration: ['auto', 'from-font', isLength, isArbitraryLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      'underline-offset': [{
        'underline-offset': ['auto', isLength, isArbitraryValue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      'text-decoration-color': [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      'text-wrap': [{
        text: ['wrap', 'nowrap', 'balance', 'pretty']
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      'vertical-align': [{
        align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces']
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ['normal', 'words', 'all', 'keep']
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ['none', 'manual', 'auto']
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ['none', isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      'bg-attachment': [{
        bg: ['fixed', 'local', 'scroll']
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      'bg-clip': [{
        'bg-clip': ['border', 'padding', 'content', 'text']
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      'bg-opacity': [{
        'bg-opacity': [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      'bg-origin': [{
        'bg-origin': ['border', 'padding', 'content']
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      'bg-position': [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      'bg-repeat': [{
        bg: ['no-repeat', {
          repeat: ['', 'x', 'y', 'round', 'space']
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      'bg-size': [{
        bg: ['auto', 'cover', 'contain', isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      'bg-image': [{
        bg: ['none', {
          'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
        }, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      'bg-color': [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from-pos': [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via-pos': [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to-pos': [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from': [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via': [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to': [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-s': [{
        'rounded-s': [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-e': [{
        'rounded-e': [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-t': [{
        'rounded-t': [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-r': [{
        'rounded-r': [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-b': [{
        'rounded-b': [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-l': [{
        'rounded-l': [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ss': [{
        'rounded-ss': [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-se': [{
        'rounded-se': [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ee': [{
        'rounded-ee': [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-es': [{
        'rounded-es': [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tl': [{
        'rounded-tl': [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tr': [{
        'rounded-tr': [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-br': [{
        'rounded-br': [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-bl': [{
        'rounded-bl': [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w': [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-x': [{
        'border-x': [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-y': [{
        'border-y': [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-s': [{
        'border-s': [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-e': [{
        'border-e': [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-t': [{
        'border-t': [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-r': [{
        'border-r': [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-b': [{
        'border-b': [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-l': [{
        'border-l': [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      'border-opacity': [{
        'border-opacity': [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      'border-style': [{
        border: [...getLineStyles(), 'hidden']
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x': [{
        'divide-x': [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x-reverse': ['divide-x-reverse'],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y': [{
        'divide-y': [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y-reverse': ['divide-y-reverse'],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      'divide-opacity': [{
        'divide-opacity': [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      'divide-style': [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color': [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-x': [{
        'border-x': [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-y': [{
        'border-y': [borderColor]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-s': [{
        'border-s': [borderColor]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-e': [{
        'border-e': [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-t': [{
        'border-t': [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-r': [{
        'border-r': [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-b': [{
        'border-b': [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-l': [{
        'border-l': [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      'divide-color': [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      'outline-style': [{
        outline: ['', ...getLineStyles()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      'outline-offset': [{
        'outline-offset': [isLength, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      'outline-w': [{
        outline: [isLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      'outline-color': [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w': [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w-inset': ['ring-inset'],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      'ring-color': [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      'ring-opacity': [{
        'ring-opacity': [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      'ring-offset-w': [{
        'ring-offset': [isLength, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      'ring-offset-color': [{
        'ring-offset': [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ['', 'inner', 'none', isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      'shadow-color': [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      'mix-blend': [{
        'mix-blend': [...getBlendModes(), 'plus-lighter', 'plus-darker']
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      'bg-blend': [{
        'bg-blend': getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ['', 'none']
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      'drop-shadow': [{
        'drop-shadow': ['', 'none', isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      'hue-rotate': [{
        'hue-rotate': [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      'backdrop-filter': [{
        'backdrop-filter': ['', 'none']
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      'backdrop-blur': [{
        'backdrop-blur': [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      'backdrop-brightness': [{
        'backdrop-brightness': [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      'backdrop-contrast': [{
        'backdrop-contrast': [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      'backdrop-grayscale': [{
        'backdrop-grayscale': [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      'backdrop-hue-rotate': [{
        'backdrop-hue-rotate': [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      'backdrop-invert': [{
        'backdrop-invert': [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      'backdrop-opacity': [{
        'backdrop-opacity': [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      'backdrop-saturate': [{
        'backdrop-saturate': [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      'backdrop-sepia': [{
        'backdrop-sepia': [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      'border-collapse': [{
        border: ['collapse', 'separate']
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing': [{
        'border-spacing': [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-x': [{
        'border-spacing-x': [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-y': [{
        'border-spacing-y': [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      'table-layout': [{
        table: ['auto', 'fixed']
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ['top', 'bottom']
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ['linear', 'in', 'out', 'in-out', isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ['none', 'spin', 'ping', 'pulse', 'bounce', isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ['', 'gpu', 'none']
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-x': [{
        'scale-x': [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-y': [{
        'scale-y': [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-x': [{
        'translate-x': [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-y': [{
        'translate-y': [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-x': [{
        'skew-x': [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-y': [{
        'skew-y': [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      'transform-origin': [{
        origin: ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ['auto', colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ['none', 'auto']
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      'caret-color': [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      'pointer-events': [{
        'pointer-events': ['none', 'auto']
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ['none', 'y', 'x', '']
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      'scroll-behavior': [{
        scroll: ['auto', 'smooth']
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-m': [{
        'scroll-m': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mx': [{
        'scroll-mx': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-my': [{
        'scroll-my': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ms': [{
        'scroll-ms': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-me': [{
        'scroll-me': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mt': [{
        'scroll-mt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mr': [{
        'scroll-mr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mb': [{
        'scroll-mb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ml': [{
        'scroll-ml': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-p': [{
        'scroll-p': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-px': [{
        'scroll-px': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-py': [{
        'scroll-py': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-ps': [{
        'scroll-ps': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pe': [{
        'scroll-pe': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pt': [{
        'scroll-pt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pr': [{
        'scroll-pr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pb': [{
        'scroll-pb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pl': [{
        'scroll-pl': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      'snap-align': [{
        snap: ['start', 'end', 'center', 'align-none']
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      'snap-stop': [{
        snap: ['normal', 'always']
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-type': [{
        snap: ['none', 'x', 'y', 'both']
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-strictness': [{
        snap: ['mandatory', 'proximity']
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ['auto', 'none', 'manipulation']
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-x': [{
        'touch-pan': ['x', 'left', 'right']
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-y': [{
        'touch-pan': ['y', 'up', 'down']
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-pz': ['touch-pinch-zoom'],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ['none', 'text', 'all', 'auto']
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      'will-change': [{
        'will-change': ['auto', 'scroll', 'contents', 'transform', isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, 'none']
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      'stroke-w': [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, 'none']
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ['sr-only', 'not-sr-only'],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      'forced-color-adjust': [{
        'forced-color-adjust': ['auto', 'none']
      }]
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      size: ['w', 'h'],
      'font-size': ['leading'],
      'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      'line-clamp': ['display', 'overflow'],
      rounded: ['rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-ss', 'rounded-se', 'rounded-ee', 'rounded-es', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'],
      'rounded-s': ['rounded-ss', 'rounded-es'],
      'rounded-e': ['rounded-se', 'rounded-ee'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': ['border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': ['border-color-s', 'border-color-e', 'border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': ['scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb'],
      touch: ['touch-x', 'touch-y', 'touch-pz'],
      'touch-x': ['touch'],
      'touch-y': ['touch'],
      'touch-pz': ['touch']
    },
    conflictingClassGroupModifiers: {
      'font-size': ['leading']
    }
  };
};
const twMerge = /*#__PURE__*/createTailwindMerge(getDefaultConfig);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot$1 : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$l = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$l);

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$k = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$k);

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$j = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$j);

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$i = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]];
const Circle = createLucideIcon("circle", __iconNode$i);

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$h = [
  ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
  ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }]
];
const Code = createLucideIcon("code", __iconNode$h);

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$g = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
];
const Facebook = createLucideIcon("facebook", __iconNode$g);

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$f = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode$f);

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$e = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$e);

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$d = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$d);

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$c = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$c);

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$b = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$b);

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$a = [
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 18h16", key: "19g7jn" }],
  ["path", { d: "M4 6h16", key: "1o0s65" }]
];
const Menu$1 = createLucideIcon("menu", __iconNode$a);

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$9 = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
];
const Moon = createLucideIcon("moon", __iconNode$9);

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$8 = [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
];
const Palette = createLucideIcon("palette", __iconNode$8);

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$7 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$7);

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$6 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode$6);

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$5 = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = createLucideIcon("smartphone", __iconNode$5);

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const Sun = createLucideIcon("sun", __iconNode$4);

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$3 = [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6"
    }
  ]
];
const Twitter = createLucideIcon("twitter", __iconNode$3);

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$2 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode$2);

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode$1);

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);

// packages/core/primitive/src/primitive.tsx
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
}

// packages/react/context/src/create-context.tsx
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = reactExports.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = reactExports.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = reactExports.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return reactExports.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return reactExports.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return reactExports.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// packages/react/use-layout-effect/src/use-layout-effect.tsx
var useLayoutEffect2 = globalThis?.document ? reactExports.useLayoutEffect : () => {
};

// src/use-controllable-state.tsx
var useInsertionEffect = React$1[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {
  },
  caller
}) {
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  {
    const isControlledRef = reactExports.useRef(prop !== void 0);
    reactExports.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(
          `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        );
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const setValue = reactExports.useCallback(
    (nextValue) => {
      if (isControlled) {
        const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
        if (value2 !== prop) {
          onChangeRef.current?.(value2);
        }
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, onChangeRef]
  );
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const [value, setValue] = reactExports.useState(defaultProp);
  const prevValueRef = reactExports.useRef(value);
  const onChangeRef = reactExports.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  reactExports.useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);
  return [value, setValue, onChangeRef];
}
function isFunction(value) {
  return typeof value === "function";
}

// src/primitive.tsx
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) reactDomExports.flushSync(() => target.dispatchEvent(event));
}

function createCollection(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope] = createContextScope(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(
    PROVIDER_NAME,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  );
  const CollectionProvider = (props) => {
    const { scope, children } = props;
    const ref = React.useRef(null);
    const itemMap = React.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionProviderImpl, { scope, itemMap, collectionRef: ref, children });
  };
  CollectionProvider.displayName = PROVIDER_NAME;
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlotImpl = createSlot(COLLECTION_SLOT_NAME);
  const CollectionSlot = React.forwardRef(
    (props, forwardedRef) => {
      const { scope, children } = props;
      const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
      const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionSlotImpl, { ref: composedRefs, children });
    }
  );
  CollectionSlot.displayName = COLLECTION_SLOT_NAME;
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlotImpl = createSlot(ITEM_SLOT_NAME);
  const CollectionItemSlot = React.forwardRef(
    (props, forwardedRef) => {
      const { scope, children, ...itemData } = props;
      const ref = React.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, ref);
      const context = useCollectionContext(ITEM_SLOT_NAME, scope);
      React.useEffect(() => {
        context.itemMap.set(ref, { ref, ...itemData });
        return () => void context.itemMap.delete(ref);
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionItemSlotImpl, { ...{ [ITEM_DATA_ATTR]: "" }, ref: composedRefs, children });
    }
  );
  CollectionItemSlot.displayName = ITEM_SLOT_NAME;
  function useCollection(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = React.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode) return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
      );
      return orderedItems;
    }, [context.collectionRef, context.itemMap]);
    return getItems;
  }
  return [
    { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
    useCollection,
    createCollectionScope
  ];
}

// packages/react/direction/src/direction.tsx
var DirectionContext = reactExports.createContext(void 0);
function useDirection(localDir) {
  const globalDir = reactExports.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}

// packages/react/use-callback-ref/src/use-callback-ref.tsx
function useCallbackRef$1(callback) {
  const callbackRef = reactExports.useRef(callback);
  reactExports.useEffect(() => {
    callbackRef.current = callback;
  });
  return reactExports.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}

// packages/react/use-escape-keydown/src/use-escape-keydown.tsx
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
  const onEscapeKeyDown = useCallbackRef$1(onEscapeKeyDownProp);
  reactExports.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event);
      }
    };
    ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [onEscapeKeyDown, ownerDocument]);
}

var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = reactExports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      disableOutsidePointerEvents = false,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      ...layerProps
    } = props;
    const context = reactExports.useContext(DismissableLayerContext);
    const [node, setNode] = reactExports.useState(null);
    const ownerDocument = node?.ownerDocument ?? globalThis?.document;
    const [, force] = reactExports.useState({});
    const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2));
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside((event) => {
      const target = event.target;
      const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
      if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
      onPointerDownOutside?.(event);
      onInteractOutside?.(event);
      if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    const focusOutside = useFocusOutside((event) => {
      const target = event.target;
      const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
      if (isFocusInBranch) return;
      onFocusOutside?.(event);
      onInteractOutside?.(event);
      if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    useEscapeKeydown((event) => {
      const isHighestLayer = index === context.layers.size - 1;
      if (!isHighestLayer) return;
      onEscapeKeyDown?.(event);
      if (!event.defaultPrevented && onDismiss) {
        event.preventDefault();
        onDismiss();
      }
    }, ownerDocument);
    reactExports.useEffect(() => {
      if (!node) return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
          ownerDocument.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(node);
      }
      context.layers.add(node);
      dispatchUpdate();
      return () => {
        if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
          ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
        }
      };
    }, [node, ownerDocument, disableOutsidePointerEvents, context]);
    reactExports.useEffect(() => {
      return () => {
        if (!node) return;
        context.layers.delete(node);
        context.layersWithOutsidePointerEventsDisabled.delete(node);
        dispatchUpdate();
      };
    }, [node, context]);
    reactExports.useEffect(() => {
      const handleUpdate = () => force({});
      document.addEventListener(CONTEXT_UPDATE, handleUpdate);
      return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        ...layerProps,
        ref: composedRefs,
        style: {
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          ...props.style
        },
        onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: composeEventHandlers(
          props.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      }
    );
  }
);
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = reactExports.forwardRef((props, forwardedRef) => {
  const context = reactExports.useContext(DismissableLayerContext);
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  reactExports.useEffect(() => {
    const node = ref.current;
    if (node) {
      context.branches.add(node);
      return () => {
        context.branches.delete(node);
      };
    }
  }, [context.branches]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { ...props, ref: composedRefs });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis?.document) {
  const handlePointerDownOutside = useCallbackRef$1(onPointerDownOutside);
  const isPointerInsideReactTreeRef = reactExports.useRef(false);
  const handleClickRef = reactExports.useRef(() => {
  });
  reactExports.useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          handleAndDispatchCustomEvent(
            POINTER_DOWN_OUTSIDE,
            handlePointerDownOutside,
            eventDetail,
            { discrete: true }
          );
        };
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
        } else {
          handleAndDispatchPointerDownOutsideEvent2();
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current);
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [ownerDocument, handlePointerDownOutside]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
  const handleFocusOutside = useCallbackRef$1(onFocusOutside);
  const isFocusInsideReactTreeRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [ownerDocument, handleFocusOutside]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler) target.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(target, event);
  } else {
    target.dispatchEvent(event);
  }
}

var count$1 = 0;
function useFocusGuards() {
  reactExports.useEffect(() => {
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
    document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
    count$1++;
    return () => {
      if (count$1 === 1) {
        document.querySelectorAll("[data-radix-focus-guard]").forEach((node) => node.remove());
      }
      count$1--;
    };
  }, []);
}
function createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.outline = "none";
  element.style.opacity = "0";
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  return element;
}

var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS$1 = { bubbles: false, cancelable: true };
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = reactExports.forwardRef((props, forwardedRef) => {
  const {
    loop = false,
    trapped = false,
    onMountAutoFocus: onMountAutoFocusProp,
    onUnmountAutoFocus: onUnmountAutoFocusProp,
    ...scopeProps
  } = props;
  const [container, setContainer] = reactExports.useState(null);
  const onMountAutoFocus = useCallbackRef$1(onMountAutoFocusProp);
  const onUnmountAutoFocus = useCallbackRef$1(onUnmountAutoFocusProp);
  const lastFocusedElementRef = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setContainer(node));
  const focusScope = reactExports.useRef({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  reactExports.useEffect(() => {
    if (trapped) {
      let handleFocusIn2 = function(event) {
        if (focusScope.paused || !container) return;
        const target = event.target;
        if (container.contains(target)) {
          lastFocusedElementRef.current = target;
        } else {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleFocusOut2 = function(event) {
        if (focusScope.paused || !container) return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null) return;
        if (!container.contains(relatedTarget)) {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleMutations2 = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body) return;
        for (const mutation of mutations) {
          if (mutation.removedNodes.length > 0) focus(container);
        }
      };
      document.addEventListener("focusin", handleFocusIn2);
      document.addEventListener("focusout", handleFocusOut2);
      const mutationObserver = new MutationObserver(handleMutations2);
      if (container) mutationObserver.observe(container, { childList: true, subtree: true });
      return () => {
        document.removeEventListener("focusin", handleFocusIn2);
        document.removeEventListener("focusout", handleFocusOut2);
        mutationObserver.disconnect();
      };
    }
  }, [trapped, container, focusScope.paused]);
  reactExports.useEffect(() => {
    if (container) {
      focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS$1);
        container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          focusFirst$2(removeLinks(getTabbableCandidates(container)), { select: true });
          if (document.activeElement === previouslyFocusedElement) {
            focus(container);
          }
        }
      }
      return () => {
        container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS$1);
          container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented) {
            focus(previouslyFocusedElement ?? document.body, { select: true });
          }
          container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
  const handleKeyDown = reactExports.useCallback(
    (event) => {
      if (!loop && !trapped) return;
      if (focusScope.paused) return;
      const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
      const focusedElement = document.activeElement;
      if (isTabKey && focusedElement) {
        const container2 = event.currentTarget;
        const [first, last] = getTabbableEdges(container2);
        const hasTabbableElementsInside = first && last;
        if (!hasTabbableElementsInside) {
          if (focusedElement === container2) event.preventDefault();
        } else {
          if (!event.shiftKey && focusedElement === last) {
            event.preventDefault();
            if (loop) focus(first, { select: true });
          } else if (event.shiftKey && focusedElement === first) {
            event.preventDefault();
            if (loop) focus(last, { select: true });
          }
        }
      }
    },
    [loop, trapped, focusScope.paused]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { tabIndex: -1, ...scopeProps, ref: composedRefs, onKeyDown: handleKeyDown });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst$2(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (document.activeElement !== previouslyFocusedElement) return;
  }
}
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container);
  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);
  return [first, last];
}
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function findVisible(elements, container) {
  for (const element of elements) {
    if (!isHidden(element, { upTo: container })) return element;
  }
}
function isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden") return true;
  while (node) {
    if (upTo !== void 0 && node === upTo) return false;
    if (getComputedStyle(node).display === "none") return true;
    node = node.parentElement;
  }
  return false;
}
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
      element.select();
  }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope) {
        activeFocusScope?.pause();
      }
      stack = arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      stack = arrayRemove(stack, focusScope);
      stack[0]?.resume();
    }
  };
}
function arrayRemove(array, item) {
  const updatedArray = [...array];
  const index = updatedArray.indexOf(item);
  if (index !== -1) {
    updatedArray.splice(index, 1);
  }
  return updatedArray;
}
function removeLinks(items) {
  return items.filter((item) => item.tagName !== "A");
}

// packages/react/id/src/id.tsx
var useReactId = React$1[" useId ".trim().toString()] || (() => void 0);
var count = 0;
function useId(deterministicId) {
  const [id, setId] = reactExports.useState(useReactId());
  useLayoutEffect2(() => {
    setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return (id ? `radix-${id}` : "");
}

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

const sides = ['top', 'right', 'bottom', 'left'];
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function getSideAxis(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow$3 = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = clamp(min$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. To ensure `shift()` continues to take action,
    // a single reset is performed when this is true.
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    };
  }
});

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip$2 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === 'alignment' ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow ||
          // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every(d => d.overflows[0] > 0 && getSideAxis(d.placement) === initialSideAxis)) {
            // Try next placement and re-run the lifecycle.
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$filter2;
                const placement = (_overflowsData$filter2 = overflowsData.filter(d => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = getSideAxis(d.placement);
                    return currentSideAxis === initialSideAxis ||
                    // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === 'y';
                  }
                  return true;
                }).map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some(side => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide$2 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = 'referenceHidden',
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case 'escaped':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === 'y';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset$2 = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);

      // If the placement is the same and the arrow caused an alignment offset
      // then we don't need to change the positioning coordinates.
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift$2 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift$2 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset, state);
      const computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === 'y' ? 'width' : 'height';
        const isOriginSide = ['top', 'left'].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size$2 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === 'y';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

function hasWindow() {
  return typeof window !== 'undefined';
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [':popover-open', ':modal'].some(selector => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  // https://drafts.csswg.org/css-transforms-2/#individual-transforms
  return ['transform', 'translate', 'scale', 'rotate', 'perspective'].some(value => css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}

function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 :
  // RTL <body> scrollbar.
  getWindowScrollBarX(documentElement, htmlRect));
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === 'fixed';
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);

  // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
  // Firefox with layout.scrollbar.side = 3 in about:config to test this.
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}

function isStaticPositioned(element) {
  return getComputedStyle$1(element).position === 'static';
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;

  // Firefox returns the <html> element as the offsetParent if it's non-static,
  // while Chrome and Safari return the <body> element. The <body> element must
  // be used to perform the correct calculations even if the <html> element is
  // non-static.
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}

const getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};

function isRTL(element) {
  return getComputedStyle$1(element).direction === 'rtl';
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};

function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          // If the reference is clipped, the ratio is 0. Throttle the refresh
          // to prevent an infinite loop of updates.
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1000);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        // It's possible that even though the ratio is reported as 1, the
        // element is not actually fully within the IntersectionObserver's root
        // area anymore. This can happen under performance constraints. This may
        // be a bug in the browser's IntersectionObserver implementation. To
        // work around this, we compare the element's bounding rect now with
        // what it was at the time we created the IntersectionObserver. If they
        // are not equal then the element moved, so we refresh.
        refresh();
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset$1 = offset$2;

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift$1 = shift$2;

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip$1 = flip$2;

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size$1 = size$2;

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide$1 = hide$2;

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow$2 = arrow$3;

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift$1 = limitShift$2;

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

var isClient = typeof document !== 'undefined';

var noop = function noop() {};
var index = isClient ? reactExports.useLayoutEffect : noop;

// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === 'function' && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === 'object') {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0;) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0;) {
      const key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}

function getDPR(element) {
  if (typeof window === 'undefined') {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}

function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}

function useLatestRef(value) {
  const ref = reactExports.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}

/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/useFloating
 */
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = reactExports.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = reactExports.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = reactExports.useState(null);
  const [_floating, _setFloating] = reactExports.useState(null);
  const setReference = reactExports.useCallback(node => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = reactExports.useCallback(node => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = reactExports.useRef(null);
  const floatingRef = reactExports.useRef(null);
  const dataRef = reactExports.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform);
  const openRef = useLatestRef(open);
  const update = reactExports.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition(referenceRef.current, floatingRef.current, config).then(data => {
      const fullData = {
        ...data,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        reactDomExports.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData(data => ({
        ...data,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = reactExports.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = reactExports.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = reactExports.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = reactExports.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...(getDPR(elements.floating) >= 1.5 && {
          willChange: 'transform'
        })
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return reactExports.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow$1 = options => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, 'current');
  }
  return {
    name: 'arrow',
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === 'function' ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow$2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow$2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = (options, deps) => ({
  ...offset$1(options),
  options: [options, deps]
});

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = (options, deps) => ({
  ...shift$1(options),
  options: [options, deps]
});

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = (options, deps) => ({
  ...limitShift$1(options),
  options: [options, deps]
});

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = (options, deps) => ({
  ...flip$1(options),
  options: [options, deps]
});

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = (options, deps) => ({
  ...size$1(options),
  options: [options, deps]
});

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = (options, deps) => ({
  ...hide$1(options),
  options: [options, deps]
});

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = (options, deps) => ({
  ...arrow$1(options),
  options: [options, deps]
});

// src/arrow.tsx
var NAME$1 = "Arrow";
var Arrow$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { children, width = 10, height = 5, ...arrowProps } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.svg,
    {
      ...arrowProps,
      ref: forwardedRef,
      width,
      height,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: props.asChild ? children : /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Arrow$1.displayName = NAME$1;
var Root$2 = Arrow$1;

// packages/react/use-size/src/use-size.tsx
function useSize(element) {
  const [size, setSize] = reactExports.useState(void 0);
  useLayoutEffect2(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size;
}

var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var Popper = (props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PopperProvider, { scope: __scopePopper, anchor, onAnchorChange: setAnchor, children });
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME$1 = "PopperAnchor";
var PopperAnchor = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopper, virtualRef, ...anchorProps } = props;
    const context = usePopperContext(ANCHOR_NAME$1, __scopePopper);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    reactExports.useEffect(() => {
      context.onAnchorChange(virtualRef?.current || ref.current);
    });
    return virtualRef ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { ...anchorProps, ref: composedRefs });
  }
);
PopperAnchor.displayName = ANCHOR_NAME$1;
var CONTENT_NAME$2 = "PopperContent";
var [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME$2);
var PopperContent = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopePopper,
      side = "bottom",
      sideOffset = 0,
      align = "center",
      alignOffset = 0,
      arrowPadding = 0,
      avoidCollisions = true,
      collisionBoundary = [],
      collisionPadding: collisionPaddingProp = 0,
      sticky = "partial",
      hideWhenDetached = false,
      updatePositionStrategy = "optimized",
      onPlaced,
      ...contentProps
    } = props;
    const context = usePopperContext(CONTENT_NAME$2, __scopePopper);
    const [content, setContent] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
    const [arrow$1, setArrow] = reactExports.useState(null);
    const arrowSize = useSize(arrow$1);
    const arrowWidth = arrowSize?.width ?? 0;
    const arrowHeight = arrowSize?.height ?? 0;
    const desiredPlacement = side + (align !== "center" ? "-" + align : "");
    const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : { top: 0, right: 0, bottom: 0, left: 0, ...collisionPaddingProp };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [collisionBoundary];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
      padding: collisionPadding,
      boundary: boundary.filter(isNotNull),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: hasExplicitBoundaries
    };
    const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: desiredPlacement,
      whileElementsMounted: (...args) => {
        const cleanup = autoUpdate(...args, {
          animationFrame: updatePositionStrategy === "always"
        });
        return cleanup;
      },
      elements: {
        reference: context.anchor
      },
      middleware: [
        offset({ mainAxis: sideOffset + arrowHeight, alignmentAxis: alignOffset }),
        avoidCollisions && shift({
          mainAxis: true,
          crossAxis: false,
          limiter: sticky === "partial" ? limitShift() : void 0,
          ...detectOverflowOptions
        }),
        avoidCollisions && flip({ ...detectOverflowOptions }),
        size({
          ...detectOverflowOptions,
          apply: ({ elements, rects, availableWidth, availableHeight }) => {
            const { width: anchorWidth, height: anchorHeight } = rects.reference;
            const contentStyle = elements.floating.style;
            contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
            contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
            contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
            contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
          }
        }),
        arrow$1 && arrow({ element: arrow$1, padding: arrowPadding }),
        transformOrigin({ arrowWidth, arrowHeight }),
        hideWhenDetached && hide({ strategy: "referenceHidden", ...detectOverflowOptions })
      ]
    });
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const handlePlaced = useCallbackRef$1(onPlaced);
    useLayoutEffect2(() => {
      if (isPositioned) {
        handlePlaced?.();
      }
    }, [isPositioned, handlePlaced]);
    const arrowX = middlewareData.arrow?.x;
    const arrowY = middlewareData.arrow?.y;
    const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
    const [contentZIndex, setContentZIndex] = reactExports.useState();
    useLayoutEffect2(() => {
      if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [content]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: refs.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...floatingStyles,
          transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: contentZIndex,
          ["--radix-popper-transform-origin"]: [
            middlewareData.transformOrigin?.x,
            middlewareData.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...middlewareData.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: props.dir,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          PopperContentProvider,
          {
            scope: __scopePopper,
            placedSide,
            onArrowChange: setArrow,
            arrowX,
            arrowY,
            shouldHideArrow: cannotCenterArrow,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Primitive.div,
              {
                "data-side": placedSide,
                "data-align": placedAlign,
                ...contentProps,
                ref: composedRefs,
                style: {
                  ...contentProps.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: !isPositioned ? "none" : void 0
                }
              }
            )
          }
        )
      }
    );
  }
);
PopperContent.displayName = CONTENT_NAME$2;
var ARROW_NAME$2 = "PopperArrow";
var OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var PopperArrow = reactExports.forwardRef(function PopperArrow2(props, forwardedRef) {
  const { __scopePopper, ...arrowProps } = props;
  const contentContext = useContentContext(ARROW_NAME$2, __scopePopper);
  const baseSide = OPPOSITE_SIDE[contentContext.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        ref: contentContext.onArrowChange,
        style: {
          position: "absolute",
          left: contentContext.arrowX,
          top: contentContext.arrowY,
          [baseSide]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[contentContext.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: `rotate(180deg)`,
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[contentContext.placedSide],
          visibility: contentContext.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Root$2,
          {
            ...arrowProps,
            ref: forwardedRef,
            style: {
              ...arrowProps.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
PopperArrow.displayName = ARROW_NAME$2;
function isNotNull(value) {
  return value !== null;
}
var transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
    const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
    const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
    let x = "";
    let y = "";
    if (placedSide === "bottom") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x = `${-arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x = `${rects.floating.width + arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return { data: { x, y } };
  }
});
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
var Root2$1 = Popper;
var Anchor = PopperAnchor;
var Content = PopperContent;
var Arrow = PopperArrow;

var PORTAL_NAME$2 = "Portal";
var Portal$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { container: containerProp, ...portalProps } = props;
  const [mounted, setMounted] = reactExports.useState(false);
  useLayoutEffect2(() => setMounted(true), []);
  const container = containerProp || mounted && globalThis?.document?.body;
  return container ? ReactDOM.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
});
Portal$1.displayName = PORTAL_NAME$2;

function useStateMachine(initialState, machine) {
  return reactExports.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}

// src/presence.tsx
var Presence = (props) => {
  const { present, children } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : reactExports.Children.only(children);
  const ref = useComposedRefs(presence.ref, getElementRef(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? reactExports.cloneElement(child, { ref }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
  const [node, setNode] = reactExports.useState();
  const stylesRef = reactExports.useRef(null);
  const prevPresentRef = reactExports.useRef(present);
  const prevAnimationNameRef = reactExports.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  reactExports.useEffect(() => {
    const currentAnimationName = getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]);
  useLayoutEffect2(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        send("MOUNT");
      } else if (currentAnimationName === "none" || styles?.display === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect2(() => {
    if (node) {
      let timeoutId;
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = (event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode;
            node.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === "forwards") {
                node.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      };
      const handleAnimationStart = (event) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      };
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: reactExports.useCallback((node2) => {
      stylesRef.current = node2 ? getComputedStyle(node2) : null;
      setNode(node2);
    }, [])
  };
}
function getAnimationName(styles) {
  return styles?.animationName || "none";
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var GROUP_NAME$2 = "RovingFocusGroup";
var [Collection$1, useCollection$1, createCollectionScope$1] = createCollection(GROUP_NAME$2);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(
  GROUP_NAME$2,
  [createCollectionScope$1]
);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME$2);
var RovingFocusGroup = reactExports.forwardRef(
  (props, forwardedRef) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection$1.Provider, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection$1.Slot, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RovingFocusGroupImpl, { ...props, ref: forwardedRef }) }) });
  }
);
RovingFocusGroup.displayName = GROUP_NAME$2;
var RovingFocusGroupImpl = reactExports.forwardRef((props, forwardedRef) => {
  const {
    __scopeRovingFocusGroup,
    orientation,
    loop = false,
    dir,
    currentTabStopId: currentTabStopIdProp,
    defaultCurrentTabStopId,
    onCurrentTabStopIdChange,
    onEntryFocus,
    preventScrollOnEntryFocus = false,
    ...groupProps
  } = props;
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const direction = useDirection(dir);
  const [currentTabStopId, setCurrentTabStopId] = useControllableState({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId ?? null,
    onChange: onCurrentTabStopIdChange,
    caller: GROUP_NAME$2
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = reactExports.useState(false);
  const handleEntryFocus = useCallbackRef$1(onEntryFocus);
  const getItems = useCollection$1(__scopeRovingFocusGroup);
  const isClickFocusRef = reactExports.useRef(false);
  const [focusableItemsCount, setFocusableItemsCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
    }
  }, [handleEntryFocus]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    RovingFocusProvider,
    {
      scope: __scopeRovingFocusGroup,
      orientation,
      dir: direction,
      loop,
      currentTabStopId,
      onItemFocus: reactExports.useCallback(
        (tabStopId) => setCurrentTabStopId(tabStopId),
        [setCurrentTabStopId]
      ),
      onItemShiftTab: reactExports.useCallback(() => setIsTabbingBackOut(true), []),
      onFocusableItemAdd: reactExports.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount + 1),
        []
      ),
      onFocusableItemRemove: reactExports.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount - 1),
        []
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.div,
        {
          tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
          "data-orientation": orientation,
          ...groupProps,
          ref: composedRefs,
          style: { outline: "none", ...props.style },
          onMouseDown: composeEventHandlers(props.onMouseDown, () => {
            isClickFocusRef.current = true;
          }),
          onFocus: composeEventHandlers(props.onFocus, (event) => {
            const isKeyboardFocus = !isClickFocusRef.current;
            if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
              const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
              event.currentTarget.dispatchEvent(entryFocusEvent);
              if (!entryFocusEvent.defaultPrevented) {
                const items = getItems().filter((item) => item.focusable);
                const activeItem = items.find((item) => item.active);
                const currentItem = items.find((item) => item.id === currentTabStopId);
                const candidateItems = [activeItem, currentItem, ...items].filter(
                  Boolean
                );
                const candidateNodes = candidateItems.map((item) => item.ref.current);
                focusFirst$1(candidateNodes, preventScrollOnEntryFocus);
              }
            }
            isClickFocusRef.current = false;
          }),
          onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
        }
      )
    }
  );
});
var ITEM_NAME$2 = "RovingFocusGroupItem";
var RovingFocusGroupItem = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRovingFocusGroup,
      focusable = true,
      active = false,
      tabStopId,
      children,
      ...itemProps
    } = props;
    const autoId = useId();
    const id = tabStopId || autoId;
    const context = useRovingFocusContext(ITEM_NAME$2, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = useCollection$1(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove, currentTabStopId } = context;
    reactExports.useEffect(() => {
      if (focusable) {
        onFocusableItemAdd();
        return () => onFocusableItemRemove();
      }
    }, [focusable, onFocusableItemAdd, onFocusableItemRemove]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Collection$1.ItemSlot,
      {
        scope: __scopeRovingFocusGroup,
        id,
        focusable,
        active,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.span,
          {
            tabIndex: isCurrentTabStop ? 0 : -1,
            "data-orientation": context.orientation,
            ...itemProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!focusable) event.preventDefault();
              else context.onItemFocus(id);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id)),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if (event.key === "Tab" && event.shiftKey) {
                context.onItemShiftTab();
                return;
              }
              if (event.target !== event.currentTarget) return;
              const focusIntent = getFocusIntent(event, context.orientation, context.dir);
              if (focusIntent !== void 0) {
                if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
                event.preventDefault();
                const items = getItems().filter((item) => item.focusable);
                let candidateNodes = items.map((item) => item.ref.current);
                if (focusIntent === "last") candidateNodes.reverse();
                else if (focusIntent === "prev" || focusIntent === "next") {
                  if (focusIntent === "prev") candidateNodes.reverse();
                  const currentIndex = candidateNodes.indexOf(event.currentTarget);
                  candidateNodes = context.loop ? wrapArray$1(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                }
                setTimeout(() => focusFirst$1(candidateNodes));
              }
            }),
            children: typeof children === "function" ? children({ isCurrentTabStop, hasTabStop: currentTabStopId != null }) : children
          }
        )
      }
    );
  }
);
RovingFocusGroupItem.displayName = ITEM_NAME$2;
var MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function getDirectionAwareKey(key, dir) {
  if (dir !== "rtl") return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
  const key = getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key)) return void 0;
  if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key)) return void 0;
  return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst$1(candidates, preventScroll = false) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
    candidate.focus({ preventScroll });
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
  }
}
function wrapArray$1(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
var Root$1 = RovingFocusGroup;
var Item = RovingFocusGroupItem;

var getDefaultParent = function (originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function (node) {
    return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function (parent, targets) {
    return targets
        .map(function (target) {
        if (parent.contains(target)) {
            return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');
        return null;
    })
        .filter(function (x) { return Boolean(x); });
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @param {String} [controlAttribute] - html Attribute to control
 * @return {Undo} undo command
 */
var applyAttributeToOthers = function (originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = new Set();
    var elementsToStop = new Set(targets);
    var keep = function (el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function (parent) {
        if (!parent || elementsToStop.has(parent)) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function (node) {
            if (elementsToKeep.has(node)) {
                deep(node);
            }
            else {
                try {
                    var attr = node.getAttribute(controlAttribute);
                    var alreadyHidden = attr !== null && attr !== 'false';
                    var counterValue = (counterMap.get(node) || 0) + 1;
                    var markerValue = (markerCounter.get(node) || 0) + 1;
                    counterMap.set(node, counterValue);
                    markerCounter.set(node, markerValue);
                    hiddenNodes.push(node);
                    if (counterValue === 1 && alreadyHidden) {
                        uncontrolledNodes.set(node, true);
                    }
                    if (markerValue === 1) {
                        node.setAttribute(markerName, 'true');
                    }
                    if (!alreadyHidden) {
                        node.setAttribute(controlAttribute, 'true');
                    }
                }
                catch (e) {
                    console.error('aria-hidden: cannot operate on ', node, e);
                }
            }
        });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function () {
        hiddenNodes.forEach(function (node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute(controlAttribute);
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            // clear
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @return {Undo} undo command
 */
var hideOthers = function (originalTarget, parentNode, markerName) {
    if (markerName === void 0) { markerName = 'data-aria-hidden'; }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    var activeParentNode = getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function () { return null; };
    }
    // we should not hide aria-live elements - https://github.com/theKashey/aria-hidden/issues/10
    // and script elements, as they have no impact on accessibility.
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live], script')));
    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
/**
 * Name of a CSS variable containing the amount of "hidden" scrollbar
 * ! might be undefined ! use will fallback!
 */
var removedBarSizeVariable = '--removed-body-scroll-bar-size';

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
    return ref;
}

/**
 * creates a MutableRef with ref change callback
 * @param initialValue - initial ref value
 * @param {Function} callback - a callback to run when value changes
 *
 * @example
 * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
 * ref.current = 1;
 * // prints 0 -> 1
 *
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
 * @returns {MutableRefObject}
 */
function useCallbackRef(initialValue, callback) {
    var ref = reactExports.useState(function () { return ({
        // value
        value: initialValue,
        // last callback
        callback: callback,
        // "memoized" public interface
        facade: {
            get current() {
                return ref.value;
            },
            set current(value) {
                var last = ref.value;
                if (last !== value) {
                    ref.value = value;
                    ref.callback(value, last);
                }
            },
        },
    }); })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}

var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? reactExports.useLayoutEffect : reactExports.useEffect;
var currentValues = new WeakMap();
/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link mergeRefs} a version without buit-in memoization
 * @see https://github.com/theKashey/use-callback-ref#usemergerefs
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
function useMergeRefs(refs, defaultValue) {
    var callbackRef = useCallbackRef(null, function (newValue) {
        return refs.forEach(function (ref) { return assignRef(ref, newValue); });
    });
    // handle refs changes - added or removed
    useIsomorphicLayoutEffect(function () {
        var oldValue = currentValues.get(callbackRef);
        if (oldValue) {
            var prevRefs_1 = new Set(oldValue);
            var nextRefs_1 = new Set(refs);
            var current_1 = callbackRef.current;
            prevRefs_1.forEach(function (ref) {
                if (!nextRefs_1.has(ref)) {
                    assignRef(ref, null);
                }
            });
            nextRefs_1.forEach(function (ref) {
                if (!prevRefs_1.has(ref)) {
                    assignRef(ref, current_1);
                }
            });
        }
        currentValues.set(callbackRef, refs);
    }, [refs]);
    return callbackRef;
}

function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function () {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function (data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function () {
                buffer = buffer.filter(function (x) { return x !== item; });
            };
        },
        assignSyncMedium: function (cb) {
            assigned = true;
            while (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function (x) { return cb(x); },
                filter: function () { return buffer; },
            };
        },
        assignMedium: function (cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function () {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function () { return Promise.resolve().then(executeQueue); };
            cycle();
            buffer = {
                push: function (x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function (filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                },
            };
        },
    };
    return medium;
}
// eslint-disable-next-line @typescript-eslint/ban-types
function createSidecarMedium(options) {
    if (options === void 0) { options = {}; }
    var medium = innerCreateMedium(null);
    medium.options = __assign({ async: true, ssr: false }, options);
    return medium;
}

var SideCar$1 = function (_a) {
    var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return reactExports.createElement(Target, __assign({}, rest));
};
SideCar$1.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar$1;
}

var effectCar = createSidecarMedium();

var nothing = function () {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */
var RemoveScroll = reactExports.forwardRef(function (props, parentRef) {
    var ref = reactExports.useRef(null);
    var _a = reactExports.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing,
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
    var SideCar = sideCar;
    var containerRef = useMergeRefs([ref, parentRef]);
    var containerProps = __assign(__assign({}, rest), callbacks);
    return (reactExports.createElement(reactExports.Fragment, null,
        enabled && (reactExports.createElement(SideCar, { sideCar: effectCar, removeScrollBar: removeScrollBar, shards: shards, noRelative: noRelative, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode: gapMode })),
        forwardProps ? (reactExports.cloneElement(reactExports.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef }))) : (reactExports.createElement(Container, __assign({}, containerProps, { className: className, ref: containerRef }), children))));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false,
};
RemoveScroll.classNames = {
    fullWidth: fullWidthClassName,
    zeroRight: zeroRightClassName,
};

var getNonce = function () {
    if (typeof __webpack_nonce__ !== 'undefined') {
        return __webpack_nonce__;
    }
    return undefined;
};

function makeStyleTag() {
    if (!document)
        return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = getNonce();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    }
    else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function () {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function (style) {
            if (counter == 0) {
                if ((stylesheet = makeStyleTag())) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function () {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        },
    };
};

/**
 * creates a hook to control style singleton
 * @see {@link styleSingleton} for a safer component version
 * @example
 * ```tsx
 * const useStyle = styleHookSingleton();
 * ///
 * useStyle('body { overflow: hidden}');
 */
var styleHookSingleton = function () {
    var sheet = stylesheetSingleton();
    return function (styles, isDynamic) {
        reactExports.useEffect(function () {
            sheet.add(styles);
            return function () {
                sheet.remove();
            };
        }, [styles && isDynamic]);
    };
};

/**
 * create a Component to add styles on demand
 * - styles are added when first instance is mounted
 * - styles are removed when the last instance is unmounted
 * - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior
 */
var styleSingleton = function () {
    var useStyle = styleHookSingleton();
    var Sheet = function (_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};

var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0,
};
var parse = function (x) { return parseInt(x || '', 10) || 0; };
var getOffset = function (gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function (gapMode) {
    if (gapMode === void 0) { gapMode = 'margin'; }
    if (typeof window === 'undefined') {
        return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0]),
    };
};

var Style = styleSingleton();
var lockAttribute = 'data-scroll-locked';
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function (_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) { gapMode = 'margin'; }
    return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' &&
            "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";"),
    ]
        .filter(Boolean)
        .join(''), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function () {
    var counter = parseInt(document.body.getAttribute(lockAttribute) || '0', 10);
    return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function () {
    reactExports.useEffect(function () {
        document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
        return function () {
            var newCounter = getCurrentUseCounter() - 1;
            if (newCounter <= 0) {
                document.body.removeAttribute(lockAttribute);
            }
            else {
                document.body.setAttribute(lockAttribute, newCounter.toString());
            }
        };
    }, []);
};
/**
 * Removes page scrollbar and blocks page scroll when mounted
 */
var RemoveScrollBar = function (_a) {
    var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    useLockAttribute();
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */
    var gap = reactExports.useMemo(function () { return getGapWidth(gapMode); }, [gapMode]);
    return reactExports.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '') });
};

var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
                return true;
            },
        });
        // @ts-ignore
        window.addEventListener('test', options, options);
        // @ts-ignore
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? { passive: false } : false;

var alwaysContainsScroll = function (node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function (node, overflow) {
    if (!(node instanceof Element)) {
        return false;
    }
    var styles = window.getComputedStyle(node);
    return (
    // not-not-scrollable
    styles[overflow] !== 'hidden' &&
        // contains scroll inside self
        !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function (node) { return elementCanBeScrolled(node, 'overflowY'); };
var elementCouldBeHScrolled = function (node) { return elementCanBeScrolled(node, 'overflowX'); };
var locationCouldBeScrolled = function (axis, node) {
    var ownerDocument = node.ownerDocument;
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
            if (scrollHeight > clientHeight) {
                return true;
            }
        }
        current = current.parentNode;
    } while (current && current !== ownerDocument.body);
    return false;
};
var getVScrollVariables = function (_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight,
    ];
};
var getHScrollVariables = function (_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth,
    ];
};
var elementCouldBeScrolled = function (axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function (axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function (axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */
    return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        if (!target) {
            break;
        }
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        var parent_1 = target.parentNode;
        // we will "bubble" from ShadowDom in case we are, or just to the parent in normal case
        // this is the same logic used in focus-lock
        target = (parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1);
    } while (
    // portaled content
    (!targetInLock && target !== document.body) ||
        // self content
        (targetInLock && (endTarget.contains(target) || endTarget === target)));
    // handle epsilon around 0 (non standard zoom levels)
    if (isDeltaPositive &&
        ((Math.abs(availableScroll) < 1) || (false))) {
        shouldCancelScroll = true;
    }
    else if (!isDeltaPositive &&
        ((Math.abs(availableScrollTop) < 1) || (false))) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};

var getTouchXY = function (event) {
    return 'changedTouches' in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function (event) { return [event.deltaX, event.deltaY]; };
var extractRef = function (ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function (x, y) { return x[0] === y[0] && x[1] === y[1]; };
var generateStyle = function (id) { return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n"); };
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = reactExports.useRef([]);
    var touchStartRef = reactExports.useRef([0, 0]);
    var activeAxis = reactExports.useRef();
    var id = reactExports.useState(idCounter++)[0];
    var Style = reactExports.useState(styleSingleton)[0];
    var lastProps = reactExports.useRef(props);
    reactExports.useEffect(function () {
        lastProps.current = props;
    }, [props]);
    reactExports.useEffect(function () {
        if (props.inert) {
            document.body.classList.add("block-interactivity-".concat(id));
            var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
            allow_1.forEach(function (el) { return el.classList.add("allow-interactivity-".concat(id)); });
            return function () {
                document.body.classList.remove("block-interactivity-".concat(id));
                allow_1.forEach(function (el) { return el.classList.remove("allow-interactivity-".concat(id)); });
            };
        }
        return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = reactExports.useCallback(function (event, parent) {
        if (('touches' in event && event.touches.length === 2) || (event.type === 'wheel' && event.ctrlKey)) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        // allow horizontal touch move on Range inputs. They will not cause any scroll
        if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
            return false;
        }
        var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        }
        else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
            // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return handleScroll(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY);
    }, []);
    var shouldPrevent = reactExports.useCallback(function (_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function (e) { return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta); })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            if (event.cancelable) {
                event.preventDefault();
            }
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || [])
                .map(extractRef)
                .filter(Boolean)
                .filter(function (node) { return node.contains(event.target); });
            var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
            if (shouldStop) {
                if (event.cancelable) {
                    event.preventDefault();
                }
            }
        }
    }, []);
    var shouldCancel = reactExports.useCallback(function (name, delta, target, should) {
        var event = { name: name, delta: delta, target: target, should: should, shadowParent: getOutermostShadowParent(target) };
        shouldPreventQueue.current.push(event);
        setTimeout(function () {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function (e) { return e !== event; });
        }, 1);
    }, []);
    var scrollTouchStart = reactExports.useCallback(function (event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = reactExports.useCallback(function (event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = reactExports.useCallback(function (event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    reactExports.useEffect(function () {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove,
        });
        document.addEventListener('wheel', shouldPrevent, nonPassive);
        document.addEventListener('touchmove', shouldPrevent, nonPassive);
        document.addEventListener('touchstart', scrollTouchStart, nonPassive);
        return function () {
            lockStack = lockStack.filter(function (inst) { return inst !== Style; });
            document.removeEventListener('wheel', shouldPrevent, nonPassive);
            document.removeEventListener('touchmove', shouldPrevent, nonPassive);
            document.removeEventListener('touchstart', scrollTouchStart, nonPassive);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return (reactExports.createElement(reactExports.Fragment, null,
        inert ? reactExports.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? reactExports.createElement(RemoveScrollBar, { noRelative: props.noRelative, gapMode: props.gapMode }) : null));
}
function getOutermostShadowParent(node) {
    var shadowParent = null;
    while (node !== null) {
        if (node instanceof ShadowRoot) {
            shadowParent = node.host;
            node = node.host;
        }
        node = node.parentNode;
    }
    return shadowParent;
}

const SideCar = exportSidecar(effectCar, RemoveScrollSideCar);

var ReactRemoveScroll = reactExports.forwardRef(function (props, ref) { return (reactExports.createElement(RemoveScroll, __assign({}, props, { ref: ref, sideCar: SideCar }))); });
ReactRemoveScroll.classNames = RemoveScroll.classNames;

var SELECTION_KEYS = ["Enter", " "];
var FIRST_KEYS = ["ArrowDown", "PageUp", "Home"];
var LAST_KEYS = ["ArrowUp", "PageDown", "End"];
var FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
var SUB_OPEN_KEYS = {
  ltr: [...SELECTION_KEYS, "ArrowRight"],
  rtl: [...SELECTION_KEYS, "ArrowLeft"]
};
var SUB_CLOSE_KEYS = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
var MENU_NAME = "Menu";
var [Collection, useCollection, createCollectionScope] = createCollection(MENU_NAME);
var [createMenuContext, createMenuScope] = createContextScope(MENU_NAME, [
  createCollectionScope,
  createPopperScope,
  createRovingFocusGroupScope
]);
var usePopperScope = createPopperScope();
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME);
var [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME);
var Menu = (props) => {
  const { __scopeMenu, open = false, children, dir, onOpenChange, modal = true } = props;
  const popperScope = usePopperScope(__scopeMenu);
  const [content, setContent] = reactExports.useState(null);
  const isUsingKeyboardRef = reactExports.useRef(false);
  const handleOpenChange = useCallbackRef$1(onOpenChange);
  const direction = useDirection(dir);
  reactExports.useEffect(() => {
    const handleKeyDown = () => {
      isUsingKeyboardRef.current = true;
      document.addEventListener("pointerdown", handlePointer, { capture: true, once: true });
      document.addEventListener("pointermove", handlePointer, { capture: true, once: true });
    };
    const handlePointer = () => isUsingKeyboardRef.current = false;
    document.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => {
      document.removeEventListener("keydown", handleKeyDown, { capture: true });
      document.removeEventListener("pointerdown", handlePointer, { capture: true });
      document.removeEventListener("pointermove", handlePointer, { capture: true });
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2$1, { ...popperScope, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    MenuProvider,
    {
      scope: __scopeMenu,
      open,
      onOpenChange: handleOpenChange,
      content,
      onContentChange: setContent,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        MenuRootProvider,
        {
          scope: __scopeMenu,
          onClose: reactExports.useCallback(() => handleOpenChange(false), [handleOpenChange]),
          isUsingKeyboardRef,
          dir: direction,
          modal,
          children
        }
      )
    }
  ) });
};
Menu.displayName = MENU_NAME;
var ANCHOR_NAME = "MenuAnchor";
var MenuAnchor = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...anchorProps } = props;
    const popperScope = usePopperScope(__scopeMenu);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Anchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
  }
);
MenuAnchor.displayName = ANCHOR_NAME;
var PORTAL_NAME$1 = "MenuPortal";
var [PortalProvider, usePortalContext] = createMenuContext(PORTAL_NAME$1, {
  forceMount: void 0
});
var MenuPortal = (props) => {
  const { __scopeMenu, forceMount, children, container } = props;
  const context = useMenuContext(PORTAL_NAME$1, __scopeMenu);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortalProvider, { scope: __scopeMenu, forceMount, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$1, { asChild: true, container, children }) }) });
};
MenuPortal.displayName = PORTAL_NAME$1;
var CONTENT_NAME$1 = "MenuContent";
var [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME$1);
var MenuContent = reactExports.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME$1, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useMenuContext(CONTENT_NAME$1, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME$1, props.__scopeMenu);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: props.__scopeMenu, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: props.__scopeMenu, children: rootContext.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(MenuRootContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MenuRootContentNonModal, { ...contentProps, ref: forwardedRef }) }) }) });
  }
);
var MenuRootContentModal = reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = useMenuContext(CONTENT_NAME$1, props.__scopeMenu);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    reactExports.useEffect(() => {
      const content = ref.current;
      if (content) return hideOthers(content);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      MenuContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: context.open,
        disableOutsideScroll: true,
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault(),
          { checkForDefaultPrevented: false }
        ),
        onDismiss: () => context.onOpenChange(false)
      }
    );
  }
);
var MenuRootContentNonModal = reactExports.forwardRef((props, forwardedRef) => {
  const context = useMenuContext(CONTENT_NAME$1, props.__scopeMenu);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    MenuContentImpl,
    {
      ...props,
      ref: forwardedRef,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      disableOutsideScroll: false,
      onDismiss: () => context.onOpenChange(false)
    }
  );
});
var Slot = createSlot("MenuContent.ScrollLock");
var MenuContentImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeMenu,
      loop = false,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEntryFocus,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      disableOutsideScroll,
      ...contentProps
    } = props;
    const context = useMenuContext(CONTENT_NAME$1, __scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME$1, __scopeMenu);
    const popperScope = usePopperScope(__scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
    const getItems = useCollection(__scopeMenu);
    const [currentItemId, setCurrentItemId] = reactExports.useState(null);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef, context.onContentChange);
    const timerRef = reactExports.useRef(0);
    const searchRef = reactExports.useRef("");
    const pointerGraceTimerRef = reactExports.useRef(0);
    const pointerGraceIntentRef = reactExports.useRef(null);
    const pointerDirRef = reactExports.useRef("right");
    const lastPointerXRef = reactExports.useRef(0);
    const ScrollLockWrapper = disableOutsideScroll ? ReactRemoveScroll : reactExports.Fragment;
    const scrollLockWrapperProps = disableOutsideScroll ? { as: Slot, allowPinchZoom: true } : void 0;
    const handleTypeaheadSearch = (key) => {
      const search = searchRef.current + key;
      const items = getItems().filter((item) => !item.disabled);
      const currentItem = document.activeElement;
      const currentMatch = items.find((item) => item.ref.current === currentItem)?.textValue;
      const values = items.map((item) => item.textValue);
      const nextMatch = getNextMatch(values, search, currentMatch);
      const newItem = items.find((item) => item.textValue === nextMatch)?.ref.current;
      (function updateSearch(value) {
        searchRef.current = value;
        window.clearTimeout(timerRef.current);
        if (value !== "") timerRef.current = window.setTimeout(() => updateSearch(""), 1e3);
      })(search);
      if (newItem) {
        setTimeout(() => newItem.focus());
      }
    };
    reactExports.useEffect(() => {
      return () => window.clearTimeout(timerRef.current);
    }, []);
    useFocusGuards();
    const isPointerMovingToSubmenu = reactExports.useCallback((event) => {
      const isMovingTowards = pointerDirRef.current === pointerGraceIntentRef.current?.side;
      return isMovingTowards && isPointerInGraceArea(event, pointerGraceIntentRef.current?.area);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      MenuContentProvider,
      {
        scope: __scopeMenu,
        searchRef,
        onItemEnter: reactExports.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
          },
          [isPointerMovingToSubmenu]
        ),
        onItemLeave: reactExports.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event)) return;
            contentRef.current?.focus();
            setCurrentItemId(null);
          },
          [isPointerMovingToSubmenu]
        ),
        onTriggerLeave: reactExports.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
          },
          [isPointerMovingToSubmenu]
        ),
        pointerGraceTimerRef,
        onPointerGraceIntentChange: reactExports.useCallback((intent) => {
          pointerGraceIntentRef.current = intent;
        }, []),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollLockWrapper, { ...scrollLockWrapperProps, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          FocusScope,
          {
            asChild: true,
            trapped: trapFocus,
            onMountAutoFocus: composeEventHandlers(onOpenAutoFocus, (event) => {
              event.preventDefault();
              contentRef.current?.focus({ preventScroll: true });
            }),
            onUnmountAutoFocus: onCloseAutoFocus,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              DismissableLayer,
              {
                asChild: true,
                disableOutsidePointerEvents,
                onEscapeKeyDown,
                onPointerDownOutside,
                onFocusOutside,
                onInteractOutside,
                onDismiss,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Root$1,
                  {
                    asChild: true,
                    ...rovingFocusGroupScope,
                    dir: rootContext.dir,
                    orientation: "vertical",
                    loop,
                    currentTabStopId: currentItemId,
                    onCurrentTabStopIdChange: setCurrentItemId,
                    onEntryFocus: composeEventHandlers(onEntryFocus, (event) => {
                      if (!rootContext.isUsingKeyboardRef.current) event.preventDefault();
                    }),
                    preventScrollOnEntryFocus: true,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Content,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": getOpenState(context.open),
                        "data-radix-menu-content": "",
                        dir: rootContext.dir,
                        ...popperScope,
                        ...contentProps,
                        ref: composedRefs,
                        style: { outline: "none", ...contentProps.style },
                        onKeyDown: composeEventHandlers(contentProps.onKeyDown, (event) => {
                          const target = event.target;
                          const isKeyDownInside = target.closest("[data-radix-menu-content]") === event.currentTarget;
                          const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                          const isCharacterKey = event.key.length === 1;
                          if (isKeyDownInside) {
                            if (event.key === "Tab") event.preventDefault();
                            if (!isModifierKey && isCharacterKey) handleTypeaheadSearch(event.key);
                          }
                          const content = contentRef.current;
                          if (event.target !== content) return;
                          if (!FIRST_LAST_KEYS.includes(event.key)) return;
                          event.preventDefault();
                          const items = getItems().filter((item) => !item.disabled);
                          const candidateNodes = items.map((item) => item.ref.current);
                          if (LAST_KEYS.includes(event.key)) candidateNodes.reverse();
                          focusFirst(candidateNodes);
                        }),
                        onBlur: composeEventHandlers(props.onBlur, (event) => {
                          if (!event.currentTarget.contains(event.target)) {
                            window.clearTimeout(timerRef.current);
                            searchRef.current = "";
                          }
                        }),
                        onPointerMove: composeEventHandlers(
                          props.onPointerMove,
                          whenMouse((event) => {
                            const target = event.target;
                            const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
                            if (event.currentTarget.contains(target) && pointerXHasChanged) {
                              const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
                              pointerDirRef.current = newDir;
                              lastPointerXRef.current = event.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
MenuContent.displayName = CONTENT_NAME$1;
var GROUP_NAME$1 = "MenuGroup";
var MenuGroup = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...groupProps } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { role: "group", ...groupProps, ref: forwardedRef });
  }
);
MenuGroup.displayName = GROUP_NAME$1;
var LABEL_NAME$1 = "MenuLabel";
var MenuLabel = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...labelProps } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { ...labelProps, ref: forwardedRef });
  }
);
MenuLabel.displayName = LABEL_NAME$1;
var ITEM_NAME$1 = "MenuItem";
var ITEM_SELECT = "menu.itemSelect";
var MenuItem = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { disabled = false, onSelect, ...itemProps } = props;
    const ref = reactExports.useRef(null);
    const rootContext = useMenuRootContext(ITEM_NAME$1, props.__scopeMenu);
    const contentContext = useMenuContentContext(ITEM_NAME$1, props.__scopeMenu);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const isPointerDownRef = reactExports.useRef(false);
    const handleSelect = () => {
      const menuItem = ref.current;
      if (!disabled && menuItem) {
        const itemSelectEvent = new CustomEvent(ITEM_SELECT, { bubbles: true, cancelable: true });
        menuItem.addEventListener(ITEM_SELECT, (event) => onSelect?.(event), { once: true });
        dispatchDiscreteCustomEvent(menuItem, itemSelectEvent);
        if (itemSelectEvent.defaultPrevented) {
          isPointerDownRef.current = false;
        } else {
          rootContext.onClose();
        }
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      MenuItemImpl,
      {
        ...itemProps,
        ref: composedRefs,
        disabled,
        onClick: composeEventHandlers(props.onClick, handleSelect),
        onPointerDown: (event) => {
          props.onPointerDown?.(event);
          isPointerDownRef.current = true;
        },
        onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
          if (!isPointerDownRef.current) event.currentTarget?.click();
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          const isTypingAhead = contentContext.searchRef.current !== "";
          if (disabled || isTypingAhead && event.key === " ") return;
          if (SELECTION_KEYS.includes(event.key)) {
            event.currentTarget.click();
            event.preventDefault();
          }
        })
      }
    );
  }
);
MenuItem.displayName = ITEM_NAME$1;
var MenuItemImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
    const contentContext = useMenuContentContext(ITEM_NAME$1, __scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const [isFocused, setIsFocused] = reactExports.useState(false);
    const [textContent, setTextContent] = reactExports.useState("");
    reactExports.useEffect(() => {
      const menuItem = ref.current;
      if (menuItem) {
        setTextContent((menuItem.textContent ?? "").trim());
      }
    }, [itemProps.children]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Collection.ItemSlot,
      {
        scope: __scopeMenu,
        disabled,
        textValue: textValue ?? textContent,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { asChild: true, ...rovingFocusGroupScope, focusable: !disabled, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            role: "menuitem",
            "data-highlighted": isFocused ? "" : void 0,
            "aria-disabled": disabled || void 0,
            "data-disabled": disabled ? "" : void 0,
            ...itemProps,
            ref: composedRefs,
            onPointerMove: composeEventHandlers(
              props.onPointerMove,
              whenMouse((event) => {
                if (disabled) {
                  contentContext.onItemLeave(event);
                } else {
                  contentContext.onItemEnter(event);
                  if (!event.defaultPrevented) {
                    const item = event.currentTarget;
                    item.focus({ preventScroll: true });
                  }
                }
              })
            ),
            onPointerLeave: composeEventHandlers(
              props.onPointerLeave,
              whenMouse((event) => contentContext.onItemLeave(event))
            ),
            onFocus: composeEventHandlers(props.onFocus, () => setIsFocused(true)),
            onBlur: composeEventHandlers(props.onBlur, () => setIsFocused(false))
          }
        ) })
      }
    );
  }
);
var CHECKBOX_ITEM_NAME$1 = "MenuCheckboxItem";
var MenuCheckboxItem = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { checked = false, onCheckedChange, ...checkboxItemProps } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicatorProvider, { scope: props.__scopeMenu, checked, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      MenuItem,
      {
        role: "menuitemcheckbox",
        "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
        ...checkboxItemProps,
        ref: forwardedRef,
        "data-state": getCheckedState(checked),
        onSelect: composeEventHandlers(
          checkboxItemProps.onSelect,
          () => onCheckedChange?.(isIndeterminate(checked) ? true : !checked),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }
);
MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME$1;
var RADIO_GROUP_NAME$1 = "MenuRadioGroup";
var [RadioGroupProvider, useRadioGroupContext] = createMenuContext(
  RADIO_GROUP_NAME$1,
  { value: void 0, onValueChange: () => {
  } }
);
var MenuRadioGroup = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { value, onValueChange, ...groupProps } = props;
    const handleValueChange = useCallbackRef$1(onValueChange);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupProvider, { scope: props.__scopeMenu, value, onValueChange: handleValueChange, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuGroup, { ...groupProps, ref: forwardedRef }) });
  }
);
MenuRadioGroup.displayName = RADIO_GROUP_NAME$1;
var RADIO_ITEM_NAME$1 = "MenuRadioItem";
var MenuRadioItem = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { value, ...radioItemProps } = props;
    const context = useRadioGroupContext(RADIO_ITEM_NAME$1, props.__scopeMenu);
    const checked = value === context.value;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicatorProvider, { scope: props.__scopeMenu, checked, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      MenuItem,
      {
        role: "menuitemradio",
        "aria-checked": checked,
        ...radioItemProps,
        ref: forwardedRef,
        "data-state": getCheckedState(checked),
        onSelect: composeEventHandlers(
          radioItemProps.onSelect,
          () => context.onValueChange?.(value),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }
);
MenuRadioItem.displayName = RADIO_ITEM_NAME$1;
var ITEM_INDICATOR_NAME = "MenuItemIndicator";
var [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(
  ITEM_INDICATOR_NAME,
  { checked: false }
);
var MenuItemIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
    const indicatorContext = useItemIndicatorContext(ITEM_INDICATOR_NAME, __scopeMenu);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Presence,
      {
        present: forceMount || isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.span,
          {
            ...itemIndicatorProps,
            ref: forwardedRef,
            "data-state": getCheckedState(indicatorContext.checked)
          }
        )
      }
    );
  }
);
MenuItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SEPARATOR_NAME$1 = "MenuSeparator";
var MenuSeparator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...separatorProps } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...separatorProps,
        ref: forwardedRef
      }
    );
  }
);
MenuSeparator.displayName = SEPARATOR_NAME$1;
var ARROW_NAME$1 = "MenuArrow";
var MenuArrow = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeMenu);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
MenuArrow.displayName = ARROW_NAME$1;
var SUB_NAME = "MenuSub";
var [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME);
var SUB_TRIGGER_NAME$1 = "MenuSubTrigger";
var MenuSubTrigger = reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = useMenuContext(SUB_TRIGGER_NAME$1, props.__scopeMenu);
    const rootContext = useMenuRootContext(SUB_TRIGGER_NAME$1, props.__scopeMenu);
    const subContext = useMenuSubContext(SUB_TRIGGER_NAME$1, props.__scopeMenu);
    const contentContext = useMenuContentContext(SUB_TRIGGER_NAME$1, props.__scopeMenu);
    const openTimerRef = reactExports.useRef(null);
    const { pointerGraceTimerRef, onPointerGraceIntentChange } = contentContext;
    const scope = { __scopeMenu: props.__scopeMenu };
    const clearOpenTimer = reactExports.useCallback(() => {
      if (openTimerRef.current) window.clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }, []);
    reactExports.useEffect(() => clearOpenTimer, [clearOpenTimer]);
    reactExports.useEffect(() => {
      const pointerGraceTimer = pointerGraceTimerRef.current;
      return () => {
        window.clearTimeout(pointerGraceTimer);
        onPointerGraceIntentChange(null);
      };
    }, [pointerGraceTimerRef, onPointerGraceIntentChange]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuAnchor, { asChild: true, ...scope, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      MenuItemImpl,
      {
        id: subContext.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context.open,
        "aria-controls": subContext.contentId,
        "data-state": getOpenState(context.open),
        ...props,
        ref: composeRefs(forwardedRef, subContext.onTriggerChange),
        onClick: (event) => {
          props.onClick?.(event);
          if (props.disabled || event.defaultPrevented) return;
          event.currentTarget.focus();
          if (!context.open) context.onOpenChange(true);
        },
        onPointerMove: composeEventHandlers(
          props.onPointerMove,
          whenMouse((event) => {
            contentContext.onItemEnter(event);
            if (event.defaultPrevented) return;
            if (!props.disabled && !context.open && !openTimerRef.current) {
              contentContext.onPointerGraceIntentChange(null);
              openTimerRef.current = window.setTimeout(() => {
                context.onOpenChange(true);
                clearOpenTimer();
              }, 100);
            }
          })
        ),
        onPointerLeave: composeEventHandlers(
          props.onPointerLeave,
          whenMouse((event) => {
            clearOpenTimer();
            const contentRect = context.content?.getBoundingClientRect();
            if (contentRect) {
              const side = context.content?.dataset.side;
              const rightSide = side === "right";
              const bleed = rightSide ? -5 : 5;
              const contentNearEdge = contentRect[rightSide ? "left" : "right"];
              const contentFarEdge = contentRect[rightSide ? "right" : "left"];
              contentContext.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: event.clientX + bleed, y: event.clientY },
                  { x: contentNearEdge, y: contentRect.top },
                  { x: contentFarEdge, y: contentRect.top },
                  { x: contentFarEdge, y: contentRect.bottom },
                  { x: contentNearEdge, y: contentRect.bottom }
                ],
                side
              });
              window.clearTimeout(pointerGraceTimerRef.current);
              pointerGraceTimerRef.current = window.setTimeout(
                () => contentContext.onPointerGraceIntentChange(null),
                300
              );
            } else {
              contentContext.onTriggerLeave(event);
              if (event.defaultPrevented) return;
              contentContext.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          const isTypingAhead = contentContext.searchRef.current !== "";
          if (props.disabled || isTypingAhead && event.key === " ") return;
          if (SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
            context.onOpenChange(true);
            context.content?.focus();
            event.preventDefault();
          }
        })
      }
    ) });
  }
);
MenuSubTrigger.displayName = SUB_TRIGGER_NAME$1;
var SUB_CONTENT_NAME$1 = "MenuSubContent";
var MenuSubContent = reactExports.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME$1, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...subContentProps } = props;
    const context = useMenuContext(CONTENT_NAME$1, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME$1, props.__scopeMenu);
    const subContext = useMenuSubContext(SUB_CONTENT_NAME$1, props.__scopeMenu);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: props.__scopeMenu, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: props.__scopeMenu, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      MenuContentImpl,
      {
        id: subContext.contentId,
        "aria-labelledby": subContext.triggerId,
        ...subContentProps,
        ref: composedRefs,
        align: "start",
        side: rootContext.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: false,
        disableOutsideScroll: false,
        trapFocus: false,
        onOpenAutoFocus: (event) => {
          if (rootContext.isUsingKeyboardRef.current) ref.current?.focus();
          event.preventDefault();
        },
        onCloseAutoFocus: (event) => event.preventDefault(),
        onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => {
          if (event.target !== subContext.trigger) context.onOpenChange(false);
        }),
        onEscapeKeyDown: composeEventHandlers(props.onEscapeKeyDown, (event) => {
          rootContext.onClose();
          event.preventDefault();
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          const isKeyDownInside = event.currentTarget.contains(event.target);
          const isCloseKey = SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
          if (isKeyDownInside && isCloseKey) {
            context.onOpenChange(false);
            subContext.trigger?.focus();
            event.preventDefault();
          }
        })
      }
    ) }) }) });
  }
);
MenuSubContent.displayName = SUB_CONTENT_NAME$1;
function getOpenState(open) {
  return open ? "open" : "closed";
}
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getCheckedState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
  }
}
function wrapArray(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
function getNextMatch(values, search, currentMatch) {
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = wrapArray(values, Math.max(currentMatchIndex, 0));
  const excludeCurrentMatch = normalizedSearch.length === 1;
  if (excludeCurrentMatch) wrappedValues = wrappedValues.filter((v) => v !== currentMatch);
  const nextMatch = wrappedValues.find(
    (value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const ii = polygon[i];
    const jj = polygon[j];
    const xi = ii.x;
    const yi = ii.y;
    const xj = jj.x;
    const yj = jj.y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function isPointerInGraceArea(event, area) {
  if (!area) return false;
  const cursorPos = { x: event.clientX, y: event.clientY };
  return isPointInPolygon(cursorPos, area);
}
function whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var Root3 = Menu;
var Anchor2 = MenuAnchor;
var Portal = MenuPortal;
var Content2$1 = MenuContent;
var Group = MenuGroup;
var Label$2 = MenuLabel;
var Item2$1 = MenuItem;
var CheckboxItem = MenuCheckboxItem;
var RadioGroup = MenuRadioGroup;
var RadioItem = MenuRadioItem;
var ItemIndicator = MenuItemIndicator;
var Separator = MenuSeparator;
var Arrow2 = MenuArrow;
var SubTrigger = MenuSubTrigger;
var SubContent = MenuSubContent;

var DROPDOWN_MENU_NAME = "DropdownMenu";
var [createDropdownMenuContext, createDropdownMenuScope] = createContextScope(
  DROPDOWN_MENU_NAME,
  [createMenuScope]
);
var useMenuScope = createMenuScope();
var [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME);
var DropdownMenu$1 = (props) => {
  const {
    __scopeDropdownMenu,
    children,
    dir,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  const triggerRef = reactExports.useRef(null);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: DROPDOWN_MENU_NAME
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DropdownMenuProvider,
    {
      scope: __scopeDropdownMenu,
      triggerId: useId(),
      triggerRef,
      contentId: useId(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Root3, { ...menuScope, open, onOpenChange: setOpen, dir, modal, children })
    }
  );
};
DropdownMenu$1.displayName = DROPDOWN_MENU_NAME;
var TRIGGER_NAME = "DropdownMenuTrigger";
var DropdownMenuTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, disabled = false, ...triggerProps } = props;
    const context = useDropdownMenuContext(TRIGGER_NAME, __scopeDropdownMenu);
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Anchor2, { asChild: true, ...menuScope, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        id: context.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context.open,
        "aria-controls": context.open ? context.contentId : void 0,
        "data-state": context.open ? "open" : "closed",
        "data-disabled": disabled ? "" : void 0,
        disabled,
        ...triggerProps,
        ref: composeRefs(forwardedRef, context.triggerRef),
        onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
          if (!disabled && event.button === 0 && event.ctrlKey === false) {
            context.onOpenToggle();
            if (!context.open) event.preventDefault();
          }
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          if (disabled) return;
          if (["Enter", " "].includes(event.key)) context.onOpenToggle();
          if (event.key === "ArrowDown") context.onOpenChange(true);
          if (["Enter", " ", "ArrowDown"].includes(event.key)) event.preventDefault();
        })
      }
    ) });
  }
);
DropdownMenuTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DropdownMenuPortal";
var DropdownMenuPortal = (props) => {
  const { __scopeDropdownMenu, ...portalProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { ...menuScope, ...portalProps });
};
DropdownMenuPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "DropdownMenuContent";
var DropdownMenuContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...contentProps } = props;
    const context = useDropdownMenuContext(CONTENT_NAME, __scopeDropdownMenu);
    const menuScope = useMenuScope(__scopeDropdownMenu);
    const hasInteractedOutsideRef = reactExports.useRef(false);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Content2$1,
      {
        id: context.contentId,
        "aria-labelledby": context.triggerId,
        ...menuScope,
        ...contentProps,
        ref: forwardedRef,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
          hasInteractedOutsideRef.current = false;
          event.preventDefault();
        }),
        onInteractOutside: composeEventHandlers(props.onInteractOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (!context.modal || isRightClick) hasInteractedOutsideRef.current = true;
        }),
        style: {
          ...props.style,
          // re-namespace exposed content custom properties
          ...{
            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      }
    );
  }
);
DropdownMenuContent$1.displayName = CONTENT_NAME;
var GROUP_NAME = "DropdownMenuGroup";
var DropdownMenuGroup = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...groupProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Group, { ...menuScope, ...groupProps, ref: forwardedRef });
  }
);
DropdownMenuGroup.displayName = GROUP_NAME;
var LABEL_NAME = "DropdownMenuLabel";
var DropdownMenuLabel$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...labelProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Label$2, { ...menuScope, ...labelProps, ref: forwardedRef });
  }
);
DropdownMenuLabel$1.displayName = LABEL_NAME;
var ITEM_NAME = "DropdownMenuItem";
var DropdownMenuItem$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...itemProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Item2$1, { ...menuScope, ...itemProps, ref: forwardedRef });
  }
);
DropdownMenuItem$1.displayName = ITEM_NAME;
var CHECKBOX_ITEM_NAME = "DropdownMenuCheckboxItem";
var DropdownMenuCheckboxItem$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...checkboxItemProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CheckboxItem, { ...menuScope, ...checkboxItemProps, ref: forwardedRef });
});
DropdownMenuCheckboxItem$1.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "DropdownMenuRadioGroup";
var DropdownMenuRadioGroup = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioGroupProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroup, { ...menuScope, ...radioGroupProps, ref: forwardedRef });
});
DropdownMenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "DropdownMenuRadioItem";
var DropdownMenuRadioItem$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioItemProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioItem, { ...menuScope, ...radioItemProps, ref: forwardedRef });
});
DropdownMenuRadioItem$1.displayName = RADIO_ITEM_NAME;
var INDICATOR_NAME = "DropdownMenuItemIndicator";
var DropdownMenuItemIndicator = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator, { ...menuScope, ...itemIndicatorProps, ref: forwardedRef });
});
DropdownMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME = "DropdownMenuSeparator";
var DropdownMenuSeparator$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...separatorProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { ...menuScope, ...separatorProps, ref: forwardedRef });
});
DropdownMenuSeparator$1.displayName = SEPARATOR_NAME;
var ARROW_NAME = "DropdownMenuArrow";
var DropdownMenuArrow = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...arrowProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow2, { ...menuScope, ...arrowProps, ref: forwardedRef });
  }
);
DropdownMenuArrow.displayName = ARROW_NAME;
var SUB_TRIGGER_NAME = "DropdownMenuSubTrigger";
var DropdownMenuSubTrigger$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subTriggerProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SubTrigger, { ...menuScope, ...subTriggerProps, ref: forwardedRef });
});
DropdownMenuSubTrigger$1.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "DropdownMenuSubContent";
var DropdownMenuSubContent$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subContentProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SubContent,
    {
      ...menuScope,
      ...subContentProps,
      ref: forwardedRef,
      style: {
        ...props.style,
        // re-namespace exposed content custom properties
        ...{
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    }
  );
});
DropdownMenuSubContent$1.displayName = SUB_CONTENT_NAME;
var Root2 = DropdownMenu$1;
var Trigger = DropdownMenuTrigger$1;
var Portal2 = DropdownMenuPortal;
var Content2 = DropdownMenuContent$1;
var Label2 = DropdownMenuLabel$1;
var Item2 = DropdownMenuItem$1;
var CheckboxItem2 = DropdownMenuCheckboxItem$1;
var RadioItem2 = DropdownMenuRadioItem$1;
var ItemIndicator2 = DropdownMenuItemIndicator;
var Separator2 = DropdownMenuSeparator$1;
var SubTrigger2 = DropdownMenuSubTrigger$1;
var SubContent2 = DropdownMenuSubContent$1;

const DropdownMenu = Root2;
const DropdownMenuTrigger = Trigger;
const DropdownMenuSubTrigger = reactExports.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SubTrigger2,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
const DropdownMenuSubContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SubContent2,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = SubContent2.displayName;
const DropdownMenuContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = Content2.displayName;
const DropdownMenuItem = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Item2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = Item2.displayName;
const DropdownMenuCheckboxItem = reactExports.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  CheckboxItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
const DropdownMenuRadioItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  RadioItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
const DropdownMenuLabel = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label2,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = Label2.displayName;
const DropdownMenuSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator2,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = Separator2.displayName;

const initialState = {
  theme: "system",
  setTheme: () => null
};
const ThemeProviderContext = reactExports.createContext(initialState);
function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme"
}) {
  const [theme, _setTheme] = reactExports.useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  );
  reactExports.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);
  const setTheme = (theme2) => {
    localStorage.setItem(storageKey, theme2);
    _setTheme(theme2);
  };
  const value = { theme, setTheme };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProviderContext.Provider, { value, children });
}
const useTheme = () => {
  const context = reactExports.useContext(ThemeProviderContext);
  if (context === void 0) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

function ModeToggle() {
  const { setTheme } = useTheme();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "icon", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle theme" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { onClick: () => setTheme("light"), children: "Light" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { onClick: () => setTheme("dark"), children: "Dark" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { onClick: () => setTheme("system"), children: "System" })
    ] })
  ] });
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = reactExports.useState(false);
  const { theme } = useTheme();
  const [logoSrc, setLogoSrc] = reactExports.useState("/rf3.png");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  reactExports.useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (theme === "dark") {
      setLogoSrc("/rf3-light.png");
    } else if (theme === "light") {
      setLogoSrc("/rf3.png");
    } else {
      setLogoSrc(systemPrefersDark ? "/rf3-light.png" : "/rf3.png");
    }
  }, [theme]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 w-full bg-transparent shadow-none h-16 flex-shrink-0 transition-colors duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-16 items-center justify-between w-full px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: logoSrc,
          alt: "RFX logo",
          className: "h-5 sm:h-5 w-auto object-contain",
          onError: (e) => {
            e.currentTarget.src = "/fallback-logo.png";
          }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#home",
            className: "text-foreground text-sm font-medium hover:text-primary transition-colors",
            children: "Home"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#services",
            className: "text-foreground text-sm font-medium hover:text-primary transition-colors",
            children: "Services"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#portfolio",
            className: "text-foreground text-sm font-medium hover:text-primary transition-colors",
            children: "Portfolio"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#contact",
            className: "text-foreground text-sm font-medium hover:text-primary transition-colors",
            children: "Contact"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "default",
            className: "bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", children: " Get Started " })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ModeToggle, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ModeToggle, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            onClick: toggleMenu,
            "aria-label": "Toggle Menu",
            className: "text-foreground hover:bg-foreground/10",
            children: isMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu$1, { className: "h-5 w-5" })
          }
        )
      ] })
    ] }),
    isMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden w-full py-4 bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#home",
          className: "text-sm font-medium hover:text-primary transition-colors",
          onClick: toggleMenu,
          children: "Home"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#services",
          className: "text-sm font-medium hover:text-primary transition-colors",
          onClick: toggleMenu,
          children: "Services"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#portfolio",
          className: "text-sm font-medium hover:text-primary transition-colors",
          onClick: toggleMenu,
          children: "Portfolio"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#contact",
          className: "text-sm font-medium hover:text-primary transition-colors",
          onClick: toggleMenu,
          children: "Contact"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "default",
          className: "bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 w-full",
          children: "Get Started"
        }
      )
    ] }) })
  ] });
};

const Footer = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-gray-900 text-gray-400 dark:bg-black text-xs py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-screen-xl mx-auto px-4 flex flex-col items-center space-y-2 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.facebook.com/ralph.lawrence.568847/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { size: 16 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { size: 16 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 16 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 16 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-500", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " RFX.Studios"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gray-300", children: "Privacy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gray-300", children: "Terms" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gray-300", children: "Cookies" })
    ] })
  ] }) });
};

const Hero = () => {
  const { theme } = useTheme();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative min-h-screen flex items-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "video",
      {
        className: "absolute inset-0 w-full h-full object-cover z-0",
        loop: true,
        autoPlay: true,
        muted: true,
        playsInline: true,
        preload: "auto",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: "vid.mp4", type: "video/mp4" }),
          "Your browser does not support the video tag."
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black opacity-70 z-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container px-6 md:px-8 lg:px-12 relative z-20 pt-20 md:pt-28", children: [
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-2 lg:gap-20 items-center text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center lg:justify-end md:order-first", children: [
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-[600px] aspect-[4/3] rounded-3xl border-2 border-gray-200 bg-background p-3 shadow-2xl overflow-hidden\n              transform hover:scale-105 transition-transform duration-500 ease-out", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.facebook.com/ralph.lawrence.568847/",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    alt: "Digital Experience Showcase",
                    className: "w-full h-full object-cover rounded-2xl",
                    src: "ceo.jpg",
                    width: 800,
                    height: 600
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl pointer-events-none border border-white/20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 left-0 right-0 h-8 bg-gray-800 rounded-t-2xl flex items-center px-3 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 bg-red-500 rounded-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 bg-yellow-500 rounded-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 bg-green-500 rounded-full" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center space-y-6 md:space-y-8 text-center lg:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-extrabold md:tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/tight", children: [
              "Transforming Ideas into",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-purple-600 to-cyan-500 text-transparent bg-clip-text", children: " Digital Experiences" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "max-w-[650px] mx-auto lg:mx-0 text-base md:text-lg text-gray-300 leading-relaxed", children: [
              "We craft stunning, highly responsive websites that elevate your brand, engage your audience, and drive measurable results. Our designs are not just beautiful—they're strategically built for success and also the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold bg-gradient-to-r from-purple-600 to-cyan-500 text-transparent bg-clip-text", children: "cheapest" }),
              " on the market."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out\n                bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600\n                focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:outline-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#portfolio", children: " View Our Work " }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg md:text-xl font-medium text-white", children: [
              "Trusted by ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-400", children: "10+" }),
              " satisfied clients"
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
};

const Card = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

const Services = () => {
  const services = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "\n          flex items-center justify-center\n          w-16 h-16 rounded-xl\n          bg-gradient-to-br from-purple-600 to-cyan-500\n          shadow-md\n          transform -translate-y-1\n        ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "h-9 w-9 text-white dark:text-gray-900" }) }),
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences that keep visitors coming back."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "\n          flex items-center justify-center\n          w-16 h-16 rounded-xl\n          bg-gradient-to-br from-purple-600 to-cyan-500\n          shadow-md\n          transform -translate-y-1\n        ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Code, { className: "h-9 w-9 text-white dark:text-gray-900" }) }),
      title: "Web Development",
      description: "Building fast, responsive, and feature-rich websites using the latest technologies."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "\n          flex items-center justify-center\n          w-16 h-16 rounded-xl\n          bg-gradient-to-br from-purple-600 to-cyan-500\n          shadow-md\n          transform -translate-y-1\n        ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "h-9 w-9 text-white dark:text-gray-900" }) }),
      title: "Mobile-First Design",
      description: "Ensuring your website looks and works perfectly on all devices and screen sizes."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "\n          flex items-center justify-center\n          w-16 h-16 rounded-xl\n          bg-gradient-to-br from-purple-600 to-cyan-500\n          shadow-md\n          transform -translate-y-1\n        ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-9 w-9 text-white dark:text-gray-900" }) }),
      title: "E-Commerce Solutions",
      description: "Creating online stores that drive sales and provide seamless shopping experiences."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "\n          flex items-center justify-center\n          w-16 h-16 rounded-xl\n          bg-gradient-to-br from-purple-600 to-cyan-500\n          shadow-md\n          transform -translate-y-1\n        ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-9 w-9 text-white dark:text-gray-900" }) }),
      title: "Performance Optimization",
      description: "Speeding up your website for better user experience and search engine rankings."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "\n          flex items-center justify-center\n          w-16 h-16 rounded-xl\n          bg-gradient-to-br from-purple-600 to-cyan-500\n          shadow-md\n          transform -translate-y-1\n        ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-9 w-9 text-white dark:text-gray-900" }) }),
      title: "CMS Integration",
      description: "Implementing content management systems that make updating your site easy."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "services", className: "relative py-20 md:py-28 min-h-screen flex items-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "video",
      {
        className: "absolute inset-0 w-full h-full object-cover z-0",
        loop: true,
        autoPlay: true,
        muted: true,
        playsInline: true,
        preload: "auto",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: "vid2.mp4", type: "video/mp4" }),
          "Your browser does not support the video tag."
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black opacity-70 z-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 relative z-20 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center justify-center space-y-4 text-center mb-16 md:mb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold text-purple-400 mb-2", children: "Our Services" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl sm:text-5xl font-extrabold tracking-tight text-white inline-block", children: [
          " ",
          "What We ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-purple-600 to-cyan-500 text-transparent bg-clip-text", children: "Offer" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "max-w-3xl text-lg md:text-xl text-gray-300 mt-4 leading-relaxed", children: [
          " ",
          "We provide comprehensive web design and development services to help your business thrive online. Our solutions are crafted for impact."
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12", children: services.map((service, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "group relative overflow-hidden transition-all duration-300 ease-in-out\n                         hover:shadow-xl hover:scale-[1.02] border border-gray-700 dark:border-gray-600\n                         dark:hover:border-purple-600 hover:border-purple-300 rounded-xl\n                         bg-white/10 backdrop-blur-sm shadow-xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "relative z-10 pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2", children: service.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-white text-xl font-bold", children: service.title }),
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "relative z-10 pt-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-gray-300 text-base leading-relaxed", children: service.description }),
              " "
            ] })
          ]
        },
        index
      )) })
    ] })
  ] });
};

const projectsData = [
  {
    id: 1,
    title: "Modern Dental Clinic Site",
    category: "Clinic",
    image: "dental.jpg",
    description: "A modern dental clinic design with fast loading and direct contact to Messenger app.",
    siteUrl: "https://goodtoothdentalclinic.com"
  }
];
const Portfolio = () => {
  const [filter, setFilter] = reactExports.useState("All Projects");
  const { theme } = useTheme();
  const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDarkMode = theme === "dark" || theme === "system" && prefersDark;
  const filteredProjects = filter === "All Projects" ? projectsData : projectsData.filter((project) => project.category === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "portfolio",
      className: `relative py-20 md:py-28 min-h-screen flex items-center overflow-hidden ${isDarkMode ? "text-white" : "text-black"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "video",
          {
            className: "absolute inset-0 w-full h-full object-cover z-0",
            loop: true,
            autoPlay: true,
            muted: true,
            playsInline: true,
            preload: "auto",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: "vid3.mp4", type: "video/mp4" }),
              "Your browser does not support the video tag."
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black opacity-70 z-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 relative z-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 md:mb-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground inline-block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-purple-600 to-cyan-500 text-transparent bg-clip-text", children: "Recent Projects" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed", children: "Explore our latest web design and development projects that showcase our expertise and creativity." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-3 mb-12 md:mb-16", children: ["All Projects", "Clinic", "Shop", "Gym"].map((category) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: () => setFilter(category),
              variant: filter === category ? "default" : "outline",
              className: `
                px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${filter === category ? "bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white shadow-md" : isDarkMode ? "border border-gray-600 hover:border-purple-600 hover:bg-gray-700/20 text-white" : "border border-gray-300 hover:border-purple-400 hover:bg-gray-100 text-gray-800"}
              `,
              children: category
            },
            category
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10", children: filteredProjects.map((project) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "group relative overflow-hidden rounded-2xl border shadow-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl backdrop-blur-md bg-black/50 text-white border-white/20",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: project.image,
                      alt: project.title,
                      className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "relative z-10 p-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg font-semibold leading-snug mb-1 text-white", children: project.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-xs uppercase tracking-wide text-gray-300", children: project.category })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "relative z-10 px-5 pb-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed mb-4 hidden sm:block text-gray-200", children: project.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: project.siteUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-block",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          variant: "ghost",
                          className: "text-cyan-400 hover:text-cyan-300",
                          children: "View Details"
                        }
                      )
                    }
                  )
                ] })
              ]
            },
            project.id
          )) })
        ] })
      ]
    }
  );
};

const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        props.onMouseDown?.(event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root = Label$1;

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = Root.displayName;

const InquiryForm = () => {
  const [isSubmitted, setIsSubmitted] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    company: "",
    address: "",
    location: "",
    message: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://formspree.io/f/yourformid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          address: "",
          location: "",
          message: ""
        });
      }, 3e3);
    } catch (error) {
      console.error("Formspree submission failed:", error);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "contact",
      className: "relative py-20 md:py-28 min-h-screen flex items-center overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "video",
          {
            className: "absolute inset-0 w-full h-full object-cover z-0",
            loop: true,
            autoPlay: true,
            muted: true,
            playsInline: true,
            preload: "auto",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: "vid4.mp4", type: "video/mp4" }),
              "Your browser does not support the video tag."
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black opacity-70 z-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 relative z-20 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col space-y-8 text-center lg:text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold text-purple-400 mb-2", children: "Get in Touch" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl sm:text-5xl font-extrabold tracking-tight text-white", children: [
                "Let's Discuss Your",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-purple-600 to-cyan-500 text-transparent bg-clip-text", children: "Project" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-300 leading-relaxed", children: "Ready to transform your digital presence? Fill out the form and we'll get back to you within 24 hours." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col space-y-6 text-white items-center lg:items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "09770927090/09202768751" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-300", children: "Globe/Smart" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-6 w-6" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "dev@rfxstudios.com" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-300", children: "Send us a message" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-6 w-6" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Quezon City, Philippines" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-300", children: "Find us here" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center lg:justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "w-full max-w-md p-6 md:p-8 rounded-xl shadow-xl border border-gray-700 dark:border-gray-600 bg-white/10 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "text-center pb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl font-bold text-white", children: "Inquire Now" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-gray-300", children: "Fill out the form below and we'll get back to you as soon as possible." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: isSubmitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-8 space-y-4 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-16 w-16 text-green-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-medium text-white", children: "Thank You!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300", children: "Your inquiry has been submitted successfully. We'll contact you shortly." })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
              [
                { id: "name", type: "text", label: "Full Name", placeholder: "John Doe" },
                { id: "email", type: "email", label: "Email", placeholder: "john@example.com" },
                { id: "company", type: "text", label: "Company", placeholder: "Your Company" },
                { id: "address", type: "text", label: "Address", placeholder: "123 Main St" },
                { id: "location", type: "text", label: "Location", placeholder: "City, Country" }
              ].map(({ id, type, label, placeholder }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: id, className: "text-white", children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id,
                    name: id,
                    type,
                    placeholder,
                    required: id === "name" || id === "email",
                    value: formData[id],
                    onChange: handleChange,
                    className: "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                  }
                )
              ] }, id)),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "message", className: "text-white", children: "Project Details" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    id: "message",
                    name: "message",
                    placeholder: "Tell us about your project...",
                    className: "min-h-[100px] w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 resize-y",
                    value: formData.message,
                    onChange: handleChange
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "submit",
                  className: "w-full px-6 py-3 text-lg font-semibold rounded-md shadow-lg transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:outline-none text-white",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "mr-2 h-4 w-4" }),
                    " Submit Inquiry"
                  ]
                }
              )
            ] }) })
          ] }) })
        ] }) })
      ]
    }
  );
};

const BACKEND_URL = "https://myrepo-bh50.onrender.com";
function ClientDashboard() {
  const [clients, setClients] = reactExports.useState([]);
  const [editingClient, setEditingClient] = reactExports.useState(null);
  const [formOpen, setFormOpen] = reactExports.useState(false);
  const fetchClients = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/clients`);
      const data = await res.json();
      if (Array.isArray(data)) {
        setClients(data);
      } else {
        console.error("Expected array, but got:", data);
        setClients([]);
      }
    } catch (err) {
      console.error("Error fetching clients:", err);
      setClients([]);
    }
  };
  const handleDelete = async (id) => {
    try {
      await fetch(`${BACKEND_URL}/api/clients/${id}`, { method: "DELETE" });
      fetchClients();
    } catch (err) {
      console.error("Error deleting client:", err);
    }
  };
  const handleSave = async () => {
    if (!editingClient) return;
    const clientToSave = {
      ...editingClient,
      age: Number(editingClient.age)
    };
    const method = editingClient.id ? "PUT" : "POST";
    const url = editingClient.id ? `${BACKEND_URL}/api/clients/${editingClient.id}` : `${BACKEND_URL}/api/clients`;
    try {
      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(clientToSave)
      });
      setFormOpen(false);
      setEditingClient(null);
      fetchClients();
    } catch (err) {
      console.error("Error saving client:", err);
    }
  };
  const openForm = (client) => {
    setEditingClient(client || {});
    setFormOpen(true);
  };
  reactExports.useEffect(() => {
    fetchClients();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold mb-4", children: "Client Dashboard" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => openForm(),
        className: "bg-blue-600 text-white px-4 py-2 rounded mb-4",
        children: "Add New Client"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full border text-sm sm:text-base", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Age" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Gender" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "First Visit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Last Visit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: clients.map((client) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: client.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: client.email }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: client.address }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: client.age }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: client.gender }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: client.contact }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: client.firstVisit }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: client.lastVisit }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "space-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => openForm(client),
              className: "text-blue-600",
              children: "Edit"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleDelete(client.id),
              className: "text-red-600",
              children: "Delete"
            }
          )
        ] })
      ] }, client.id)) })
    ] }) }),
    formOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-6 rounded w-full max-w-lg space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: editingClient?.id ? "Edit Client" : "Add Client" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          placeholder: "Name",
          value: editingClient?.name || "",
          onChange: (e) => setEditingClient((prev) => ({ ...prev, name: e.target.value })),
          className: "w-full border px-3 py-2 rounded"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "email",
          placeholder: "Email",
          value: editingClient?.email || "",
          onChange: (e) => setEditingClient((prev) => ({ ...prev, email: e.target.value })),
          className: "w-full border px-3 py-2 rounded"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          placeholder: "Address",
          value: editingClient?.address || "",
          onChange: (e) => setEditingClient((prev) => ({ ...prev, address: e.target.value })),
          className: "w-full border px-3 py-2 rounded"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "number",
          placeholder: "Age",
          value: editingClient?.age || "",
          onChange: (e) => setEditingClient((prev) => ({ ...prev, age: Number(e.target.value) })),
          className: "w-full border px-3 py-2 rounded"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          placeholder: "Gender",
          value: editingClient?.gender || "",
          onChange: (e) => setEditingClient((prev) => ({ ...prev, gender: e.target.value })),
          className: "w-full border px-3 py-2 rounded"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          placeholder: "Contact",
          value: editingClient?.contact || "",
          onChange: (e) => setEditingClient((prev) => ({ ...prev, contact: e.target.value })),
          className: "w-full border px-3 py-2 rounded"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "date",
          value: editingClient?.firstVisit || "",
          onChange: (e) => setEditingClient((prev) => ({ ...prev, firstVisit: e.target.value })),
          className: "w-full border px-3 py-2 rounded"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "date",
          value: editingClient?.lastVisit || "",
          onChange: (e) => setEditingClient((prev) => ({ ...prev, lastVisit: e.target.value })),
          className: "w-full border px-3 py-2 rounded"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setFormOpen(false),
            className: "bg-gray-300 px-4 py-2 rounded",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleSave,
            className: "bg-green-600 text-white px-4 py-2 rounded",
            children: "Save"
          }
        )
      ] })
    ] }) })
  ] });
}

function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-grow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Portfolio, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InquiryForm, {})
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/dashboard", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ClientDashboard, {}) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) });
}

ReactDOM$1.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { defaultTheme: "system", storageKey: "vite-ui-theme", children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) })
);
