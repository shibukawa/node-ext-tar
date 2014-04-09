import "js/nodejs.jsx";
import "console.jsx";


__export__ class ExtTar {
    static function extract(sourceFile : string, destFolder : string, callback : (Nullable.<Error>, int) -> void) : void {
        if (!node.fs.existsSync(sourceFile)) {
            return callback(new Error('sourceFile `' + sourceFile + '` doesn\'t exist.'), -1);
        }
        if (!node.fs.existsSync(destFolder)) {
            return callback(new Error('destFolder `' + destFolder + '` doesn\'t exist.'), -1);
        }
        var stat = node.fs.statSync(destFolder);
        if (!stat.isDirectory()) {
            return callback(new Error('destFolder `' + destFolder + '` is not directory.'), -1);
        }
        if (process.platform == 'win32') {
            var command = node.path.resolve(node.__dirname, '../bin/TarTool.exe');
            var args = [sourceFile, destFolder];
        } else {
            var command = 'tar';
            var ext = node.path.extname(sourceFile);
            switch (ext) {
            case '.tar':
            case '.tgz':
            case '.gz':
            case '.tbz':
            case '.bz2':
            case '.xz':
                var args = ['-xvf', sourceFile, '-C', destFolder];
                break;
            default:
                return callback(new Error('Unknown extension `' + ext + '`'), -1);
            }
        }
        var tar = node.child_process.spawn(command, args);
        tar.on('close', (code) -> {
            callback(null, code as int);
        });
        tar.stdout.on('data', (data) -> {
          console.log('stdout: ' + data as string);
        });
        tar.stderr.on('data', (data) -> {
          console.log('stdout: ' + data as string);
        });
    }

    static function create(sourceFolder : string, destFile : string, callback : (Nullable.<Error>, int) -> void) : void {
    }
}
