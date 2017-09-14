module.exports = function(grunt) {  
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
        
		sass: {
			dev: {
				options: {
					outputStyle:'compressed',
					sourceComments: 'map',
					sourceMap : 'public/assets/styles/css/main.css.map',
					includePaths: require('node-bourbon').includePaths
				},
				files: {
					'public/assets/styles/css/main.css' : 'public/assets/styles/scss/main.scss',
					'public/assets/styles/css/old-ie.css' : 'public/assets/styles/scss/old-ie.scss'
				}
			}
		},
		watch: {
			sass: {
				files: 'public/assets/styles/**/*.scss',
				tasks: ['sass'],
				options: {
					spawn: false
      			}
			},
			html: {
				files: 'public/assets/*.html',
				options: {
      			}
			},
			php: {
				files: 'public/assets/*.php',
				options: {
      			}
			},
		    js: {
		        files: ['public/assets/js/**/*.js'],
		        options: {
		          spawn: false
		       	}
		    }
		},
		browserSync: {
            dev: {
                bsFiles: {
                    src : [
                    'public/assets/styles/css/*.css',
                    'public/assets/js/**/*.js',
                    'public/assets/img/**/*.svg',
                    'public/assets/img/**/*.jpg',
                    'public/assets/img/**/*.png',
                    'public/*.php',
                    'public/*.html',
                    ]

                },
                options: {
                    watchTask: true,
                    proxy: 'todo.dev',
                    ghostMode: false,
                    notify: false
                }
            }
        }
	   
	});

	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('dev', ['sass:dev', 'browserSync', 'watch']);
  	grunt.registerTask('default', ['dev']);
};
