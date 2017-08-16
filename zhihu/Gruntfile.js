var grunt = require("grunt");

grunt.config.init({
    pkg: grunt.file.readJSON('package.json'),
    'create-windows-installer': {
        x64: {
            version: '1.1.0',
            appDirectory: './zhihu-win32-x64',
            authors: 'yohnz.',
            iconUrl:'http://7xn0vc.com1.z0.glb.clouddn.com/zhihu_logo.ico',
            exe: 'zhihu.exe',
            description:"zhihu",
            setupIcon:"logo.ico",
            noMsi:false,
            remoteReleases: 'https://github.com/bigcupcoke/Electron-build-tutorial'
        }
    }
})

grunt.loadNpmTasks('grunt-electron-installer');
grunt.registerTask('default', ['create-windows-installer']);
