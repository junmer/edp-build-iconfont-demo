# edp-build iconfont demo

> edp build iconfont from svgs

## PreInstall

```
$ npm install -g edp
```

## Usage

```
$ git clone https://github.com/junmer/edp-build-iconfont-demo
$ cd edp-build-iconfont-demo
$ npm install edp-build-iconfont --save-dev
$ edp build -f --stage=iconfont
```

## Config

```
var IconProcessor = require('edp-build-iconfont');

exports.getProcessors = function () {

    var iconProcessor = new IconProcessor({
        files: 'src/svg/*.svg',         // svg 文件
        fontName: 'icon-food',          // 字体名
        dest: 'src/font',               // 目标路径
        fmOptions: {                    // fontmin 配置
            adjust: {                   // 校正信息
                leftSideBearing: 0,     // 左支撑 或 左边距
                rightSideBearing: 0,    // 右支撑 或 右边距
                ajdustToEmBox: true,    // 调整上下边界到 em 框
                ajdustToEmPadding: 1024 * 0.1    // 调整上下边界到 em 框留白
                                        // embox 默认 1024
            },
            startCode: 0xe001           // 字符 起始 unicode 编码
        }
    });

    return {
        'iconfont': [iconProcessor]
    };

};
```

## Showcase

```
$ edp webserver start
```

打开 `http://127.0.01:8848/` 看效果

![showcase](screenshot/showcase.png)

## Related

- [edp](https://github.com/ecomfe/edp)
- [fontmin](https://github.com/ecomfe/fontmin)
- [edp-build-iconfont](https://github.com/ecomfe/edp-build-iconfont)
- [fonteditor](https://github.com/ecomfe/fonteditor)

