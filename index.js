'use strict';

var through = require('through2');
var gutil = require('gulp-util');
var Path = require('path');

module.exports = function(callback) {

  if(typeof callback!= 'function'){
    callback = function(){}
  }
  
  function parsePath(path) {
    var extname = Path.extname(path);
    return {
      dirname: Path.dirname(path),
      basename: Path.basename(path, extname),
      extname: extname
    };
  }

  return through.obj(function (file, enc, cb) {
    
        if (file.isNull()) {
            this.push(file);
            return cb();
        }

        if (file.isStream()) {
            this.emit(
                'error',
                new gutil.PluginError('gulp-ejs', 'Streaming not supported')
            );
        }
        
        var parsedPath = parsePath(file.relative);
        
        try{
          
          callback(file,parsedPath);
        
        } catch(err){
          
          this.emit('error', new gutil.PluginError('gulp-do', err.toString()));
          
        }
        
        this.push(file);
        cb();
  });
}

