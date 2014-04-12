ext-tar
===========================================

Synopsis
---------------

Fast tar extract module. This module invoke extarnal tar command. It processes much faster than pure JavaScript tar implementation and works parallely.

Current Status
----------------

* Now it provides only `extract` method.
* It doesn't support fancy EventEmitter interface yet.
* Windows is supported by [TarTool](http://tartool.codeplex.com/).

Code Example
---------------

### Use from JSX

```js
import "ext-tar.jsx";

class _Main {
    static function main(argv : string[]) : void
    {
        tar.extract('input.tar.gz', './output', (err, code) -> {
            console.log("finished : " + code as string);
        });
    }
}
```

### Use from node.js

```js
var tar = require('ext-tar').tar;

tar.extract('input.tar.gz', './output', function (err, code) {
    console.log("finished : " + code as string);
});
```

Installation
---------------

```sh
$ npm install ext-tar
```

If you want to use this library from other JSX project, install like the following:

```sh
$ npm install ext-tar --save-dev
```

It needs its 'bin' folder to run on Windows. If you use this module from JSX project, you should add this module to the `package.json` in top level modules. Runtime code can't find the command in deep folders.

API Reference
------------------

* tar.extract(sourceFile : string, outputFolder : string, callback (Nullable.<Error>, int) -> void)

  Extract tar file. It detects extension automatically. It support `.tar`, `.tgz`, `.tar.gz`, `.tbz`, `.tar.bz2`.

Development
-------------

## JSX

Don't be afraid [JSX](http://jsx.github.io)! If you have an experience of JavaScript, you can learn JSX
quickly.

* Static type system and unified class syntax.
* All variables and methods belong to class.
* JSX includes optimizer. You don't have to write tricky unreadalbe code for speed.
* You can use almost all JavaScript API as you know. Some functions become static class functions. See [reference](http://jsx.github.io/doc/stdlibref.html).

## Setup

To create development environment, call following command:

```sh
$ npm install
```

## Repository

* Repository: git://github.com/shibukawa/noe-ext-tar.git
* Issues: https://github.com/shibukawa/node-ext-tar/issues

## Run Test

```sh
$ grunt test
```

## Build

```sh
$ grunt build
```

## Generate API reference

```sh
$ grunt doc
```

Author
---------

* shibukawa / yoshiki@shibu.jp

License
------------

BSD-2-Clause

Complete license is written in `LICENSE.md`.

Bundled TarTool is licensed under GPLv2.
