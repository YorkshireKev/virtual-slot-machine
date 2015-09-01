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
          src: './js/wheel.json',
          dest: './gh-pages/js/wheel.json'
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
    },

    replace: {
      ghpages: {
        src: './gh-pages/index.html',
        /*dest: './gh-pages/bloxed.html',*/
        overwrite: true,
        replacements: [{
          from: '<!--##ANALYITICS##-->',
          to: "\n<script>\n\
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n\
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n\
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n\
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\n\
  ga('create', 'UA-17896232-1', 'auto');\n\
  ga('send', 'pageview');\n\
</script>"
        }]
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.registerTask('default', ['uglify', 'copy', 'replace:ghpages']);
};