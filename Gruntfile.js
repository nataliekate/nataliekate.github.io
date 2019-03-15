/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      options: {
        livereload: {
          port: 35729,
          host: 'localhost'
        }
      },
      scripts: {
        files: ['js/*.js']
      },
      css: {
        files: ['css/*.css']
      },
      html: {
        files: ['index.html']
      }
    },
    connect: {
      server: {
        options: {
          port: 8080,
          hostname: '*'
        }
      },
      dev: {
        options: {
          middleware: function(connect) {
            return [
              require('connect-livereload')() // <--- here
            ];
          }
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['connect', 'watch']);

};
