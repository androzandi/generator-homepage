module.exports = function(grunt) {
    grunt.initConfig({
      //task config
    });
   
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
   
    grunt.registerTask('serve', ['connect']);
    grunt.registerTask('build', ['concat', 'cssmin']);
    grunt.registerTask('default', ['build']);
  };