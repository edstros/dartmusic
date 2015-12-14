module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  var randomPort = getRandomInt(3000, 65536);
  /* CONFIGURE GRUNT
   ========================================*/
  grunt.initConfig({
    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        reporter: require('jshint-stylish') // makes our error outputs look good
      },
      build: ['Gruntfile.js', 'src/**/*.js'] // lint Gruntfile and all js files in src
    },
    uglify: {
      options: {
        banner: '/*\n <% pkg.name %> <% grunt.template.today("yyyy-mm-dd") %> \n*/\n' //header for js file
      },
      build: {
        files: {
          'dist/js/main.min.js': 'src/js/main.js' //minify js files
        }
      }
    },
    sass: {
      build: {
        files: {
          'dist/css/style.css': 'src/css/style.scss' //compile scss to css
        }
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: [
              '**',
              '!**/*.scss',
              '!**/*.js'
            ],
            dest: 'dist/',
            filter: 'isFile'
          }
        ]
      }
    },
    connect: {
      main: {
        options: {
          port: randomPort,
          base: 'dist/',
          open: true,
          livereload: true
        }
      }
    },
    watch: {
      livereload: {
        options: {
          livereload: true
        },

        files: [
          'dist/css/style.css',
          'dist/js/**/*.js',
          'dist/**/*.html'
        ]
      }
    }
  });
  /* LOAD GRUNT PLUGINS
     ======================================= */
  grunt.registerTask('default', ['jshint', 'uglify', 'sass', 'copy', 'connect', 'watch']);


};
