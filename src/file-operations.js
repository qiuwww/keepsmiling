/**
 * @module file-operations
 * @description 以下为代码中所涉及的一些方法：
 *  1. 删除文件夹及子文件
 *  2. 删除文件
 *  3. 删除文件夹
 *  4. 复制文件
 *  5. 复制文件夹
 *  6. 文本替换操作
 */

var fs = require('fs');
var path = require('path');

// 根目录
// eslint-disable-next-line no-undef
let BASEPATHURL = path.resolve(__dirname, '..');

// 移动目录
let startFileDirectory = BASEPATHURL + '888888';
// 放置目录
let endFileDirectory = BASEPATHURL + '888888';

var startDate = new Date().getTime();

// 删除复制执行
rmDirFile(endFileDirectory, () => {
  console.log('全部删除完成，开始复制');
  copyDir(startFileDirectory, endFileDirectory, (res) => {
    console.log('全部复制完成');
    console.log('修改文件内容');
    replaceText(endFileDirectory);
  });
});

// 文本替换
function replaceText(url) {
  let testHtml = fs.readFileSync(url + '/index.html', 'utf8');
  console.log('修改之前', testHtml);
  fs.writeFileSync(url + '/index.jsp', '888888' + testHtml, 'utf8');
  console.log('新建index.jsp文件完成');
  let newTestHtml = fs.readFileSync(url + '/index.jsp', 'utf8');
  console.log('index.jsp文件内容', newTestHtml);
  console.log('删除index.html文件开始');
  fs.unlinkSync(url + '/index.html');
  console.log('删除index.html文件完成');
  // 耗时
  let endDate = new Date().getTime();

  console.log('本次耗时', endDate - startDate, 'ms');
}

// 删除
function rmDirFile(path, cb) {
  let files = [];
  console.log('开始删除');
  if (fs.existsSync(path)) {
    var count = 0;
    var checkEnd = function () {
      console.log('进度', count);
      ++count == files.length && cb && cb();
    };
    files = fs.readdirSync(path);
    files.forEach(function (file, index) {
      let curPath = path + '/' + file;
      if (fs.statSync(curPath).isDirectory()) {
        console.log('遇到文件夹', curPath);
        rmDirFile(curPath, checkEnd);
      } else {
        fs.unlinkSync(curPath);
        console.log('删除文件完成', curPath);
        checkEnd();
      }
    });
    // 如果删除文件夹为放置文件夹根目录  不执行删除
    if (path == endFileDirectory) {
      console.log('删除文件夹完成', path);
    } else {
      fs.rmdirSync(path);
    }
    //为空时直接回调
    files.length === 0 && cb && cb();
  } else {
    cb && cb();
  }
}

// 复制文件
function copyFile(srcPath, tarPath, cb) {
  var rs = fs.createReadStream(srcPath);
  rs.on('error', function (err) {
    if (err) {
      console.log('read error', srcPath);
    }
    cb && cb(err);
  });

  var ws = fs.createWriteStream(tarPath);
  ws.on('error', function (err) {
    if (err) {
      console.log('write error', tarPath);
    }
    cb && cb(err);
  });

  ws.on('close', function (ex) {
    cb && cb(ex);
  });

  rs.pipe(ws);
  console.log('复制文件完成', srcPath);
}

// 复制文件夹所有
function copyDir(srcDir, tarDir, cb) {
  if (fs.existsSync(tarDir)) {
    fs.readdir(srcDir, function (err, files) {
      var count = 0;
      var checkEnd = function () {
        console.log('进度', count);
        ++count == files.length && cb && cb();
      };

      if (err) {
        checkEnd();
        return;
      }

      files.forEach(function (file) {
        var srcPath = path.join(srcDir, file);
        var tarPath = path.join(tarDir, file);

        fs.stat(srcPath, function (err, stats) {
          if (stats.isDirectory()) {
            fs.mkdir(tarPath, function (err) {
              if (err) {
                console.log(err);
                return;
              }

              copyDir(srcPath, tarPath, checkEnd);
              console.log('复制文件完成', srcPath);
            });
          } else {
            copyFile(srcPath, tarPath, checkEnd);
            console.log('复制文件完成', srcPath);
          }
        });
      });

      //为空时直接回调
      files.length === 0 && cb && cb();
    });
  } else {
    fs.mkdir(tarDir, function (err) {
      if (err) {
        console.log(err);
        return;
      }
      console.log('创建文件夹', tarDir);
      copyDir(srcDir, tarDir, cb);
    });
  }
}
