/*
 * 构建全量压缩包，先删除min目录中之前的min.js，后通过webpack打包并保存新的压缩包至min目录中：
 */

const path = require('path')
const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const webpack = require('webpack')

const config = require('./webpack.conf')
const pkg = require('../package.json')
const rootPath = path.resolve(__dirname, '../')

//文件打包模块
let building = ora('building...');
building.start();
rm(path.relative(rootPath,'min',`${pkg.name}.min.js`),err => {
    if(err) throw (err);
    webpack(config,function (err,stats) {
        if (err) throw (err);
        building.stop();
        process.stdout.write(stats.toString({
            colors:true,
            modules:false,
            children:false,
            chunks:false,
            chunkModules: false
        })+'\n\n');
        console.log(chalk.cyan('构建完成.\n'))
    })
})
