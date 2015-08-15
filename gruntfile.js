module.exports = function(grunt) {
	
	grunt.initConfig({
		
		concat : {
			options: {
				separator: '\n\n//-----------------------------------\n',
				banner: '\n\n//------------------[SCRIPT]-----------------\n'
			}, //options
			dist : {
				src: ['components/scripts/*.js'],
				dest: 'builds/development/js/script.js'
			} //dist
		}, // :concat:
		
		sass : {
			dist: {
				options: {
					style: 'expanded'
				}, //options
				files : [{
					src: 'components/sass/style.scss',
					dest: 'builds/development/css/style.css'
				}] //files
			} //dist
		}, // :sass:
		
		watch: {
			options: {
				spawn: false
			}, //options
			scripts: {
				files: ['builds/development/**/*.html',
							'components/scripts/**/*.js',
							'components/sass/**/*.scss'],
				tasks: ['concat', 'sass']
			} //scripts
		} // :watch:
		
	}); //initConfig
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['concat', 'sass', 'watch']);
	
}; //wrapper function