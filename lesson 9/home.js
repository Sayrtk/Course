const fse = require('fs-extra')

fse.ensureDir('./firstFolder', () => {
    console.log('Folder is created');
    fse.ensureDir('./secondFolder', () => {
        console.log('Second folder is created');
        fse.ensureFile('./firstFolder/file.txt', () => {
            console.log('File is created');
            fse.move('./firstFolder/file.txt', './secondFolder/file.txt', () => {
                console.log('File is moved');
                fse.remove('./secondFolder/file.txt', () => {
                    console.log('File is removed');
                    fse.remove('./firstFolder', () => {
                        console.log('First folder is removed');
                        fse.remove('./secondFolder', () => {
                            console.log('Second folder is removed');
                        })
                    })

                })

            })
        })
    })
})
