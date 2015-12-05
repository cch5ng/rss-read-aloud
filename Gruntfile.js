module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [
          // includes files within path 
          {expand: true,  src: ['bower_components/polymer/*.html'], dest: 'public/js/vendors/', filter: 'isFile'},
          {expand: true,  src: ['bower_components/voice-elements/dist/voice-player.html'], dest: 'public/js/vendors/', filter: 'isFile'},
          {expand: true, src: ['bower_components/webcomponentsjs/webcomponents-lite.min.js'], dest: 'public/js/vendors/', filter: 'isFile'}
        ],
      },
    }//,
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'src/<%= pkg.name %>.js',
    //     dest: 'build/<%= pkg.name %>.min.js'
    //   }
    // }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['copy']);

};