module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			html: {
				files: ['index.haml'],
				tasks: ['haml', 'htmlcompressor']
			},
			styles: {
				files: ['sass/**/*.sass'],
				tasks: ['compass', 'autoprefixer', 'cssmin']
			},
			js: {
				files: ['js/init.js'],
				tasks: ['uglify']
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
		// haml compilation
		haml: {
			dist: {
				files: {
					'index.php': 'index.haml'
				}
			},
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