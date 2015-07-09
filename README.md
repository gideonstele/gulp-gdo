# gulp-gdo
gulp 插件，在回调中传入file流对象，可做任意修改
# gulp-gdo

gulp-gdo is a [gulp](https://github.com/shijinyu/gulp-gdo) plugin to make easily.
## Usage

gulp-rename provides simple file renaming methods.

```javascript
var gdo = require("gulp-do");


**See test/rename.spec.js for more examples and test/path-parsing.spec.js for hairy details.**

## Notes

* `dirname` is the relative path from the base directory set by `gulp.src` to the filename.
  * `gulp.src()` uses glob-stream which sets the base to the parent of the first directory glob (`*`, `**`, [], or extglob). `dirname` is the remaining directories or `./` if none. glob-stream versions >= 3.1.0 (used by gulp >= 3.2.2) accept a `base` option, which can be used to explicitly set the base.
  * `gulp.dest()` renames the directories between `process.cwd()` and `dirname` (i.e. the base relative to CWD). Use `dirname` to rename the directories matched by the glob or descendents of the base of option.
* `basename` is the filename without the extension like path.basename(filename, path.extname(filename)).
* `extname` is the file extension including the '.' like path.extname(filename).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
