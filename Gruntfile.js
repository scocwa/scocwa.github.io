module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    wiredep: {
      task: {
        src: [
          '*.html'
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-wiredep');
};
