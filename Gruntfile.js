module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON( "package.json" ),

		copy: {
			main: {
				options: {
					mode: true
				},
				src: [
					"**",
					"!node_modules/**",
					"!.git/**",
					"!*.sh",
					"!*.zip",
					"!eslintrc.json",
					"!README.md",
					"!Gruntfile.js",
					"!package.json",
					"!package-lock.json",
					"!.gitignore",
					"!.gitattributes",
					"!*.zip",
					"!Optimization.txt",
					"!composer.json",
					"!composer.lock",
					"!phpcs.xml.dist",
					"!phpunit.xml.dist",
					"!vendor/**",
					"!src/**",
					"!scripts/**",
					"!config/**",
					"!tests/**",
					"!bin/**"
				],
				dest: "form-block-for-gutenberg/"
			}
		},
		compress: {
			main: {
				options: {
					archive: "form-block-for-gutenberg-<%= pkg.version %>.zip",
					mode: "zip"
				},
				files: [
					{
						src: [
							"./form-block-for-gutenberg/**"
						]

					}
				]
			}
		},
		clean: {
			main: ["form-block-for-gutenberg"],
			zip: ["*.zip"],
		},
		makepot: {
			target: {
				options: {
					domainPath: "/",
					mainFile: "form-block-for-gutenberg.php",
					potFilename: "languages/form-block-for-gutenberg.pot",
					exclude: [
						"admin/bsf-core",
					],
					potHeaders: {
						poedit: true,
						"x-poedit-keywordslist": true
					},
					type: "wp-plugin",
					updateTimestamp: true
				}
			}
		},
		addtextdomain: {
			options: {
				textdomain: "form-block-for-gutenberg",
				updateDomains: true
			},
			target: {
				files: {
					src: ["*.php", "**/*.php", "!node_modules/**", "!php-tests/**", "!bin/**", "!admin/bsf-core/**"]
				}
			}
		},
		bumpup: {
			options: {
				updateProps: {
					pkg: "package.json"
				}
			},
			file: "package.json"
		},
		replace: {
            stable_tag: {
                src: ['readme.txt'],
                overwrite: true,
                replacements: [
                    {
                        from: /Stable tag:\ .*/g,
                        to: 'Stable tag: <%= pkg.version %>'
                    }
                ]
            },
            plugin_const: {
				src: [ "classes/class-fbfg-loader.php" ],
				overwrite: true,
				replacements: [
					{
						from: /FBFG_VER', '.*?'/g,
                        to: 'FBFG_VER\', \'<%= pkg.version %>\''
					}
				]
			},
            plugin_function_comment: {
                src: [
                    '*.php',
                    '**/*.php',
                    '!node_modules/**',
                    '!php-tests/**',
                    '!bin/**',
                ],
                overwrite: true,
                replacements: [
                    {
                        from: 'x.x.x',
                        to: '<%=pkg.version %>'
                    }
                ]
            },
			plugin_main: {
				src: [ "form-block-for-gutenberg.php" ],
				overwrite: true,
				replacements: [
					{
						from: /Version: \bv?(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-[\da-z-A-Z-]+(?:\.[\da-z-A-Z-]+)*)?(?:\+[\da-z-A-Z-]+(?:\.[\da-z-A-Z-]+)*)?\b/g,
                        to: 'Version: <%= pkg.version %>'
					}
				]
			},


		},
		wp_readme_to_markdown: {
			your_target: {
				files: {
					"README.md": "readme.txt"
				}
			},
		},
	})

	/* Load Tasks */
	grunt.loadNpmTasks( "grunt-contrib-copy" )
	grunt.loadNpmTasks( "grunt-contrib-compress" )
	grunt.loadNpmTasks( "grunt-contrib-clean" )

	grunt.loadNpmTasks( "grunt-wp-i18n" )

	/* Version Bump Task */
	grunt.loadNpmTasks( "grunt-bumpup" )
	grunt.loadNpmTasks( "grunt-text-replace" )

	/* Read File Generation task */
	grunt.loadNpmTasks("grunt-wp-readme-to-markdown")

	/* Register task started */
	grunt.registerTask("release", ["clean:zip", "copy","compress","clean:main"])
	grunt.registerTask('release-no-clean', ['clean:zip', 'copy']);
	grunt.registerTask( 'textdomain', [ 'addtextdomain' ] );
	grunt.registerTask("i18n", ["addtextdomain", "makepot"])

	// Default
	//grunt.registerTask('default', ['style']);

	// Version Bump `grunt bump-version --ver=<version-number>`
	grunt.registerTask( "bump-version", function() {

		var newVersion = grunt.option('ver');

        if (newVersion) {
            newVersion = newVersion ? newVersion : 'patch';

            grunt.task.run('bumpup:' + newVersion);
            grunt.task.run('replace');
        }
	} )

	// Update Font Awesome library.
    grunt.registerTask('font-awesome', function () {
		this.async();
        var request = require('request');
        var fs = require('fs');

        request('https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/metadata/icons.json', function (error, response, body) {

            if (response && response.statusCode == 200) {

                console.log('Fonts successfully fetched!');

                var fonts = JSON.parse(body);

                fs.writeFile('blocks-config/fbfg-controls/FBFGIcon.json', JSON.stringify(fonts, null, 4), function (err) {
                    if (!err) {
                        console.log("Font-Awesome library updated!");
                    }
                });
            }
        });
    });

	// Generate Read me file
	grunt.registerTask( "readme", ["wp_readme_to_markdown"] )

}
