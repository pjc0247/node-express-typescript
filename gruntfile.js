module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    ts: {
      app: {
        tsconfig: true
      }
    },
    tslint: {
      options: {
        configuration: "tslint.json"
      },
      files: {
        src: ["src/**/*.ts"]
      }
    },
    watch: {
      ts: {
        files: ["js/src/**/*.ts", "src/**/*.ts"],
        tasks: ["ts", "tslint"]
      }
    },
    run: {
        serve: {
            cmd: 'node',
            args : [
                "./bin/www"
            ]
        }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-run');
  //grunt.loadNpmTasks("grunt-tslint");

  grunt.registerTask("default", [
    "ts",
    "run:serve"
  ]);

};