// generatedy by JSX compiler 0.9.86 (2014-04-12 21:06:45 +0900; 925b9f5a378447f64b9f0c7a75344ccb45b9e75c)
var JSX = {};
(function (JSX) {
/**
 * extends the class
 */
function $__jsx_extend(derivations, base) {
	var ctor = function () {};
	ctor.prototype = base.prototype;
	var proto = new ctor();
	for (var i in derivations) {
		derivations[i].prototype = proto;
	}
}

/**
 * copies the implementations from source interface to target
 */
function $__jsx_merge_interface(target, source) {
	for (var k in source.prototype)
		if (source.prototype.hasOwnProperty(k))
			target.prototype[k] = source.prototype[k];
}

/**
 * defers the initialization of the property
 */
function $__jsx_lazy_init(obj, prop, func) {
	function reset(obj, prop, value) {
		delete obj[prop];
		obj[prop] = value;
		return value;
	}

	Object.defineProperty(obj, prop, {
		get: function () {
			return reset(obj, prop, func());
		},
		set: function (v) {
			reset(obj, prop, v);
		},
		enumerable: true,
		configurable: true
	});
}

var $__jsx_imul = Math.imul;
if (typeof $__jsx_imul === "undefined") {
	$__jsx_imul = function (a, b) {
		var ah  = (a >>> 16) & 0xffff;
		var al = a & 0xffff;
		var bh  = (b >>> 16) & 0xffff;
		var bl = b & 0xffff;
		return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
	};
}

/**
 * fused int-ops with side-effects
 */
function $__jsx_ipadd(o, p, r) {
	return o[p] = (o[p] + r) | 0;
}
function $__jsx_ipsub(o, p, r) {
	return o[p] = (o[p] - r) | 0;
}
function $__jsx_ipmul(o, p, r) {
	return o[p] = $__jsx_imul(o[p], r);
}
function $__jsx_ipdiv(o, p, r) {
	return o[p] = (o[p] / r) | 0;
}
function $__jsx_ipmod(o, p, r) {
	return o[p] = (o[p] % r) | 0;
}
function $__jsx_ippostinc(o, p) {
	var v = o[p];
	o[p] = (v + 1) | 0;
	return v;
}
function $__jsx_ippostdec(o, p) {
	var v = o[p];
	o[p] = (v - 1) | 0;
	return v;
}

/**
 * non-inlined version of Array#each
 */
function $__jsx_forEach(o, f) {
	var l = o.length;
	for (var i = 0; i < l; ++i)
		f(o[i]);
}

/*
 * global functions, renamed to avoid conflict with local variable names
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
function $__jsx_isNaN(n) { return n !== n; }
var $__jsx_isFinite = isFinite;

var $__jsx_encodeURIComponent = encodeURIComponent;
var $__jsx_decodeURIComponent = decodeURIComponent;
var $__jsx_encodeURI = encodeURI;
var $__jsx_decodeURI = decodeURI;

var $__jsx_ObjectToString = Object.prototype.toString;
var $__jsx_ObjectHasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * profiler object, initialized afterwards
 */
function $__jsx_profiler() {
}

/*
 * public interface to JSX code
 */
JSX.require = function (path) {
	var m = $__jsx_classMap[path];
	return m !== undefined ? m : null;
};

JSX.profilerIsRunning = function () {
	return $__jsx_profiler.getResults != null;
};

JSX.getProfileResults = function () {
	return ($__jsx_profiler.getResults || function () { return {}; })();
};

JSX.postProfileResults = function (url, cb) {
	if ($__jsx_profiler.postResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.postResults(url, cb);
};

JSX.resetProfileResults = function () {
	if ($__jsx_profiler.resetResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.resetResults();
};
JSX.DEBUG = false;
var GeneratorFunction$0 = 
(function () {
  try {
    return Function('import {GeneratorFunction} from "std:iteration"; return GeneratorFunction')();
  } catch (e) {
    return function GeneratorFunction () {};
  }
})();
var __jsx_generator_object$0 = 
(function () {
  function __jsx_generator_object() {
  	this.__next = 0;
  	this.__loop = null;
  	this.__value = undefined;
  	this.__status = 0;	// SUSPENDED: 0, ACTIVE: 1, DEAD: 2
  }

  __jsx_generator_object.prototype.next = function () {
  	switch (this.__status) {
  	case 0:
  		this.__status = 1;

  		// go next!
  		this.__loop(this.__next);

  		var done = false;
  		if (this.__next != -1) {
  			this.__status = 0;
  		} else {
  			this.__status = 2;
  			done = true;
  		}
  		return { value: this.__value, done: done };
  	case 1:
  		throw new Error("Generator is already running");
  	case 2:
  		throw new Error("Generator is already finished");
  	default:
  		throw new Error("Unexpected generator internal state");
  	}
  };

  return __jsx_generator_object;
}());
function tar() {
};

$__jsx_extend([tar], Object);
function tar$_findCommand$S(cmd) {
	var dir;
	var result;
	var path1;
	var path2;
	var path3;
	var parentDir;
	dir = node$0.__dirname;
	result = '';
	while (true) {
		path1 = path$0.join(dir, cmd);
		if (fs$0.existsSync(path1)) {
			result = path1;
			break;
		}
		path2 = path$0.join(dir, 'bin', cmd);
		if (fs$0.existsSync(path2)) {
			result = path2;
			break;
		}
		path3 = path$0.join(dir, 'node_modules', 'ext-tar', 'bin', cmd);
		if (fs$0.existsSync(path3)) {
			result = path3;
			break;
		}
		parentDir = path$0.dirname(dir);
		if (parentDir === dir) {
			throw new Error("can't find " + cmd + " command.");
		}
		dir = parentDir;
	}
	return result;
};

tar._findCommand$S = tar$_findCommand$S;

function tar$extract$SSF$LError$IV$(sourceFile, destFolder, callback) {
	var stat;
	var command;
	var args;
	var tar;
	if (! fs$0.existsSync(sourceFile)) {
		return callback(new Error('sourceFile `' + sourceFile + '` doesn\'t exist.'), -1);
	}
	if (! fs$0.existsSync(destFolder)) {
		return callback(new Error('destFolder `' + destFolder + '` doesn\'t exist.'), -1);
	}
	stat = fs$0.statSync(destFolder);
	if (! stat.isDirectory()) {
		return callback(new Error('destFolder `' + destFolder + '` is not directory.'), -1);
	}
	if (process.platform === 'win32') {
		command = tar$_findCommand$S('TarTool.exe');
		args = [ sourceFile, destFolder ];
	} else {
		command = 'tar';
		args = [ '-xvf', sourceFile, '-C', destFolder ];
	}
	tar = child_process$0.spawn(command, args);
	tar.on('close', (function (code) {
		var codeInt;
		codeInt = code | 0;
		if (codeInt === 0) {
			callback(null, 0);
		} else {
			callback(new Error("ext-tar: command '" + command + "' fails by code " + (codeInt + "") + "."), (codeInt | 0));
		}
	}));
};

tar.extract = tar$extract$SSF$LError$IV$;
tar.extract$SSF$LError$IV$ = tar$extract$SSF$LError$IV$;

function tar$create$SSF$LError$IV$(sourceFolder, destFile, callback) {
};

tar.create = tar$create$SSF$LError$IV$;
tar.create$SSF$LError$IV$ = tar$create$SSF$LError$IV$;

var node$0 = { __dirname: __dirname, __filename: __filename, require: require };
var fs$0 = require('fs');
var path$0 = require('path');
var child_process$0 = require('child_process');
var js$0 = (function () {
	var global = (function () { return this; }());
	return {
		global: global,
		eval: global.eval,
		invoke: function(invocant, methodName, args) {
			return invocant[methodName].apply(invocant, args);
		},
		newFunction: Function
	};
}());
var ReadStream$0 = require('tty').ReadStream;
var WriteStream$0 = require('tty').WriteStream;
var EventEmitter$0 = require('events').EventEmitter;
var Readable$0 = require('stream').Readable;
var Writable$0 = require('stream').Writable;
var Duplex$0 = require('stream').Duplex;

var $__jsx_classMap = {
	"src/ext-tar.jsx": {
		tar: tar,
		tar$: tar
	}
};


})(JSX);

exports.tar = JSX.require("src/ext-tar.jsx").tar;
