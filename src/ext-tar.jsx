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
            var args = ['-xvf', sourceFile, '-C', destFolder];
        }
        var tar = child_process.spawn(command, args);
        tar.on('close', (code) -> {
            var codeInt = code as int;
            if (codeInt == 0) {
                callback(null, 0);
            } else {
                callback(new Error("ext-tar: command '" + command + "' fails by code " + codeInt as string + "."), codeInt);
            }
        });
    }

    static function create(sourceFolder : string, destFile : string, callback : (Nullable.<Error>, int) -> void) : void {
    }
}
