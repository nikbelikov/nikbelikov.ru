module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			html: {
				files: ['index.jade'],
				tasks: ['jade'],
				options: {
					livereload: true
				}
			},
			styles: {
				files: ['sass/**/*.sass'],
				tasks: ['compass', 'autoprefixer', 'cssmin'],
				options: {
					livereload: true
				}
			},
			js: {
				files: ['js/init.js'],
				tasks: ['uglify'],
				options: {
					livereload: true
				}
			}
		},
		// autoprefix css
		autoprefixer: {
			dist: {
				files: {
					'css/style.css': 'css/style.css'
				}
			}
		},
		// use compass (variables, mixins, sprite autogenetation)
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},
		// minify css
		cssmin: {
			build: {
				src: 'css/style.css',
				dest: 'css/style.css'
			}
		},
		// compress js
		uglify: {
			build: {
				files: {
					'js/min/init.min.js': ['js/init.js']
				}
			}
		},
		// jade compilation
		jade: {
			compile: {
				options: {
					data: {
						debug: false
					},
					pretty: true
				},
				files: {
					"index.php": ["index.jade"]
				}
			}
		},
		// compress php
		htmlcompressor: {
			compile: {
				files: {
					'index.php': 'index.php'
				}
			}
		}
	});

	grunt.registerTask('default', []);

};