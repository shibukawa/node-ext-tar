import "test-case.jsx";
import "console.jsx";
import "hogan.jsx";
import "js.jsx";
import "js/nodejs.jsx";

class _Test extends TestCase
{
    function before() : void
    {
    }
    function test_delimiters () : void
    {
        this.expect(template.render(data)).toBe(test['expected']);
    }
}
