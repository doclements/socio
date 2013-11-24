module.exports = function(grunt) {
  grunt.initConfig({

    clean: ['dist'],

    uglify: {

      all: {
        files: {
          'dist/js/app.min.js': ['dist/js/app.js']
        }
      }

    },

    jshint: {
      // define the files to lint
      files: ['gruntfile.js', 'js/**/*.js', '!js/jquery.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },

    browserify: {
      all: {
        src: ['js/app.js', '!js/jquery.js', '!js/bartest.js'],
        dest: 'dist/js/app.js'
      },
      map: {
        src: ['js/map.js'],
        dest: 'dist/js/map.js'
      },
      options: {
        //transform: ['debowerify']
      }
    },

    copy: {
      all: {
        src: ['css/*.css', 'data/*', '*.html', 'images/**/*', 'js/jquery.js', 'bs/**/*', 'bootstrap/dist/**/*', '!Gruntfile.js'],
        dest: 'dist/',
      },
    },

    connect: {
      options: {
        port: process.env.PORT || 3131,
        base: 'dist/',
        hostname: '*'
      },

      all: {},
    },

    watch: {
      options: {
        livereload: true
      },

      assets: {
        files: ['css/*.css', 'data/**/*','*.html', 'js/**/*.js', '!js/jquery.js', 'images/**/*', 'js/jquery.js', 'bs/**/*', 'bootstrap/dist/**/*', '!Gruntfile.js'],
        tasks: ['jshint', 'browserify', 'uglify', 'copy'],
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['clean', 'jshint', 'browserify', 'copy', 'uglify']);

  grunt.registerTask('server', ['default', 'connect', 'watch']);


}; //