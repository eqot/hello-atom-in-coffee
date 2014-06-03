'use strict';

module.exports = function(grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    "download-atom-shell": {
      version: "0.12.7",
      outputDir: "./bin",
      rebuild: true
    },

    watch: {
      coffee: {
        files: ['./app/scripts/*.coffee'],
        tasks: ['coffee_jshint', 'coffee']
      },
    },

    coffee: {
      compile: {
        files: {
          './dist/scripts/app.js': ['./app/scripts/*.coffee']
        }
      },
    },

    coffee_jshint: {
      options: {
        globals: [
          'console', 'require',
          'process', '__dirname'
        ]
      },
      target: {
        files: {
          code: ['./app/scripts/{,**/}*.coffee']
        }
      }
    },

    copy: {
      html: {
        files: [
          {expand: true, flatten: true, src: ['./app/*.html'], dest: 'dist/', filter: 'isFile'}
        ]
      }
    },

    shell: {
      run: {
        command: './bin/Atom.app/Contents/MacOS/Atom ./'
      }
    }
  });

  grunt.registerTask('build', [
    'coffee',
    'copy:html'
  ]);

  grunt.registerTask('default', [
    'build',
    'shell:run'
  ]);
};
