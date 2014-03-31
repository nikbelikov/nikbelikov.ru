module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            html: {
                files: ['index.jade'],
                tasks: ['jade', 'htmlcompressor']
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
            combine: {
                files: {
                    'css/all.css': [

                    'css/lib/font-awesome.min.css',
                    'css/lib/foundation.min.css',
                    'css/style.css'
                    ]
                }
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

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-htmlcompressor');

    grunt.registerTask('default', []);
};