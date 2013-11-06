module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			html: {
				files: ['index.php'],
				tasks: ['htmlhint']
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
				dest: 'css/min/style.min.css'
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
		// check html for errors
		htmlhint: {
			build: {
				options: {
					'tag-pair': true,
					'tagname-lowercase': true,
					'attr-lowercase': true,
					'attr-value-double-quotes': true,
					'doctype-first': true,
					'id-unique': true,
					'head-script-disabled': true,
					'style-disabled': true
				},
				src: ['index.php']
			}
		}
	});

	grunt.registerTask('default', []);

};