import "nodejs.jsx/nodejs.jsx";
import "nodejs.jsx/fs.jsx";
import "nodejs.jsx/path.jsx";
import "nodejs.jsx/child_process.jsx";
import "console.jsx";


__export__ class tar {
    static function _findCommand(cmd : string) : string {
        var dir = node.__dirname;
        var result = '';
        while (true) {
            var path1 = path.join(dir, cmd);
            if (fs.existsSync(path1)) {
                result = path1;
                break;
            }
            var path2 = path.join(dir, 'bin', cmd);
            if (fs.existsSync(path2)) {
                result = path2;
                break;
            }
            var path3 = path.join(dir, 'node_modules', 'ext-tar', 'bin', cmd);
            if (fs.existsSync(path3)) {
                result = path3;
                break;
            }
            var parentDir = path.dirname(dir);
            if (parentDir == dir) {
                throw new Error("can't find " + cmd + " command.");
            }
            dir = parentDir;
        }
        return result;
    }

    static function extract(sourceFile : string, destFolder : string, callback : (Nullable.<Error>, int) -> void) : void {
        if (!fs.existsSync(sourceFile)) {
            return callback(new Error('sourceFile `' + sourceFile + '` doesn\'t exist.'), -1);
        }
        if (!fs.existsSync(destFolder)) {
            return callback(new Error('destFolder `' + destFolder + '` doesn\'t exist.'), -1);
        }
        var stat = fs.statSync(destFolder);
        if (!stat.isDirectory()) {
            return callback(new Error('destFolder `' + destFolder + '` is not directory.'), -1);
        }
        if (process.platform == 'win32') {
            var command = tar._findCommand('TarTool.exe');
            var args = [sourceFile, destFolder];
        } else {
            var command = 'tar';
            var ext = path.extname(sourceFile);
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
        var tar = child_process.spawn(command, args);
        tar.on('close', (code) -> {
            callback(null, code as int);
        });
        /* Debug
        tar.stdout.on('data', (data) -> {
            console.log('stdout: ' + data as string);
        });
        tar.stderr.on('data', (data) -> {
            console.log('stdout: ' + data as string);
        });*/
    }

    static function create(sourceFolder : string, destFile : string, callback : (Nullable.<Error>, int) -> void) : void {
    }
}
