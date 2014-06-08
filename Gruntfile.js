'use strict';

module.exports = function(grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    "download-atom-shell": {
      version: "0.13.0",
      outputDir: "./bin",
      rebuild: true
    },

    watch: {
      coffee: {
        files: ['./app/scripts/{,**/}*.coffee'],
        tasks: ['coffee_jshint', 'coffee']
      },
      html: {
        files: ['./app/*.html'],
        tasks: ['copy:html']
      }
    },

    coffee: {
      compile: {
        files: {
          './dist/scripts/browser/main.js': ['./app/scripts/browser/{,**/}*.coffee']
        }
      },
      glob_to_multiple: {
        expand: true,
        flatten: true,
        cwd: './app/scripts/client',
        src: ['*.coffee'],
        dest: './dist/scripts/client/',
        ext: '.js'
      }
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
