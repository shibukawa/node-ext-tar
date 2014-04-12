import "test-case.jsx";
import "console.jsx";
import "shutil.jsx";
import "nodejs.jsx/fs.jsx";
import "nodejs.jsx/path.jsx";
import "nodejs.jsx/nodejs.jsx";
import "ext-tar.jsx";

class _Test extends TestCase
{
    override function setUp() : void
    {
    	var dir = path.join(node.__dirname, "output");
    	if (fs.existsSync(dir)) {
    		shutil.rmtree(dir);
    	}
    	shutil.mkdirp("output");
    }

    function test_extrace () : void
    {
    	this.async((async : AsyncContext) -> {
	    	var dir = path.join(node.__dirname, "output");
    		tar.extract("test/test.tgz", dir, (err, code) -> {
    			this.expect(code).toBe(0);
    			async.done();
    		});
    	}, 10000);
    }
}
