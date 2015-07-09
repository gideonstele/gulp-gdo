# gulp-gdo
gulp 插件，在回调中传入file流对象，可做任意修改
# gulp-gdo

gulp-gdo is a [gulp](https://github.com/shijinyu/gulp-gdo) plugin to make easily.
## Usage

gulp-gdo 将file和path返回到回调函数中，可以在回调函数中操作file对象并送入下一个管道（pipe）

```javascript
var gulp = require("gulp");
var gdo = require("gulp-do");
var _ = require("underscore");
var cfg = require("./config.json");

gulp.src('./src/*.js')
  .pipe(gdo(function(file,path){
  
        var name = path.basename;
        
        if(cfg.hasOwnProperty(name)){
        
          // 把config.json里的键值对拷贝到file上
          // 注意不要乱改file本身的属性，否则后果自负。
				      file.MyAttr = cfg[name];
        }
  }))
  .pipe(gdo(function(file,path){
        console.log(file.MyAttr);
        
        file.MyAttr = _.extend(file.MyAttr,{
            "Hello":"World"
        });
        
  }))
  .pipe(gulp.dest("./dist"))

**See test/rename.spec.js for more examples and test/path-parsing.spec.js for hairy details.**

## Notes

* `path` 是一个对象，它记录了从 `gulp.src`获取的路径.
  * `path.extname` 文件扩展名
  * `path.basename` 文件名
  * `path.pathname` 文件相对路径
* `file` 是管道中的文件流对象

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
