module.exports = function(grunt){
    grunt.initConfig({
        
//CONFIGURACION HERRAMIENTA SASS A CSS
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
            
        },
        
//CONFIGURACION WATCH
        watch: {
            files: ['css/*.scss'],
            tasks: ['css']
        },

//CONFIGURACION DEL BROWSERSYNC
        browserSync: {
            dev: {
                bsFiles: { //browser files
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                }
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: './' //directorio base para nuestro servidor
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: 'images/*.(png,gif,jpg,jpeg)',
                    dest: 'dist/'
                }]
            }
        }
    });

//CARGA DE MODULOS Y DEFINICION DE TAREAS
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']); //TAREA DEFAULT, SI SE EJECUTA GRUNT A SECAS
    grunt.registerTask('img:compress', ['imagemin']);
};