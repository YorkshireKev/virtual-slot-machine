module.exports = function (grunt) {
  grunt.initConfig({
    'copy': {
      dev: {
        files: [{
          expand: true,
          src: './images/*',
          dest: './gh-pages/'
        }, {
          src: './index.html',
          dest: './gh-pages/index.html'
        }, {
          src: './css/style.css',
          dest: './gh-pages/css/style.css'
        }, {
          src: './js/wheel.js',
          dest: './gh-pages/js/wheel.js'
        }, {
          src: './js/stats.min.js',
          dest: './gh-pages/js/stats.min.js'
        }]
      }
    },

    uglify: {
      options: {
        mangle: true,
        report: "gzip"
      },
      my_target: {
        files: [{
          'gh-pages/js/orbit.js': ['js/orbit.js']
        }, {
          'gh-pages/js/three.js': ['js/three.js']
        }, {
          'gh-pages/js/slotmachine.js': ['js/slotmachine.js']
        }]
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify', 'copy']);
};