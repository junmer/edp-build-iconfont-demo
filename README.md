# edp-build iconfont

> edp build iconfont from svgs

## PreInstall

```
$ npm install -g edp
```

## Useage

```
$ git clone https://github.com/junmer/edp-build-iconfont-demo
$ cd edp-build-iconfont-demo
$ npm install
$ edp build -f
```

## Config

```
var FontProcessor = require('edp-build-iconfont');
var iconProcessor = new IconProcessor({
    files: [ 'src/svg/*.svg' ],		// svg 文件
    fontName: 'icon-food',			// 字体名
    dest: 'asset/font'				// 目标路径
});
```

## Showcase

```
$ edp webserver start
```

打开 `http://127.0.01:8848/output/` 看效果

![showcase](screenshot/showcase.png)

## Related

- [edp](https://github.com/ecomfe/edp)
- [fontmin](https://github.com/junmer/fontmin)
- [edp-build-iconfont](https://github.com/junmer/edp-build-iconfont)
- [fonteditor](https://github.com/ecomfe/fonteditor)

