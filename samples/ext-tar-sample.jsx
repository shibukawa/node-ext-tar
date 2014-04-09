import "console.jsx";
import "ext-tar.jsx";

class _Main {
    static function main(argv : string[]) : void
    {
        var obj = new ext-tar();
        obj.setMessage("Hello World");
        console.log(obj.greeting());
    }
}
