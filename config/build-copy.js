const path = require('path')
const fs = require('fs')
const ora = require('ora')
const rm = require('rimraf')
const copy = require('copy')
const chalk = require('chalk')

const rootPath = path.resolve(__dirname, '../')
// 文件替换模块
let copying = ora('copy...');
copying.start();
rm('*.js',err => {
    if(err) throw(err);
    let floderList = fs.readdirSync(path.resolve(rootPath,'src'));
    floderList.forEach((item,index) => {
        copy(`src/${item}/*.js`, rootPath, function (err, files) {
            if (err) throw err;
            if (index === floderList.length - 1) {
                console.log(chalk.cyan('复制完成.\n'))
                copying.stop()
            }
        })
    })
})