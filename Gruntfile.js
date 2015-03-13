module.exports = function(grunt) {
  grunt.initConfig({
    nodeunit: {
      libs: ['test/libs/*.js'],
    },
    jshint: {
      libs: ['libs/*.js'],
      main: ['hubot-lunch-today.js'],
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('default', ['jshint', 'nodeunit']);
};
