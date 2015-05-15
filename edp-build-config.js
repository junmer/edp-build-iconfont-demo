exports.input = __dirname;

var path = require( 'path' );
exports.output = path.resolve( __dirname, 'output' );

var IconProcessor = require('edp-build-iconfont');

// var moduleEntries = 'html,htm,phtml,tpl,vm,js';
// var pageEntries = 'html,htm,phtml,tpl,vm';

exports.getProcessors = function () {
    var lessProcessor = new LessCompiler();
    var cssProcessor = new CssCompressor();
    var moduleProcessor = new ModuleCompiler();
    var jsProcessor = new JsCompressor();
    var pathMapperProcessor = new PathMapper();
    var addCopyright = new AddCopyright();
    var iconProcessor = new IconProcessor({
        files: 'src/svg/*.svg',
        fontName: 'icon-food',
        dest: 'src/font',
        fmOptions: {                    // fontmin 配置
            adjust: {                   // 校正信息
                leftSideBearing: 0,     // 左支撑 或 左边距
                rightSideBearing: 0,    // 右支撑 或 右边距
                ajdustToEmBox: true,    // 调整上下边界到 em 框
                ajdustToEmPadding: 0    // 调整上下边界到 em 框留白
                                        // embox 默认 1024
            },
            startCode: 0xe001           // 字符 起始 unicode 编码
        }
    });

    return {
        'iconfont': [ iconProcessor ],
        'default': [ lessProcessor, moduleProcessor, pathMapperProcessor ],
        'release': [
            lessProcessor, cssProcessor, moduleProcessor,
            jsProcessor, pathMapperProcessor, addCopyright
        ]
    };
};

exports.exclude = [
    'node_modules',
    'screenshot',
    'README.md',
    'package.json',
    'tool',
    'doc',
    'test',
    'module.conf',
    'dep/packages.manifest',
    'dep/*/*/test',
    'dep/*/*/doc',
    'dep/*/*/demo',
    'dep/*/*/tool',
    'dep/*/*/*.md',
    'dep/*/*/package.json',
    'edp-*',
    '.edpproj',
    '.svn',
    '.git',
    '.gitignore',
    '.idea',
    '.project',
    'Desktop.ini',
    'Thumbs.db',
    '.DS_Store',
    '*.tmp',
    '*.bak',
    '*.swp'
];

exports.injectProcessor = function ( processors ) {
    for ( var key in processors ) {
        global[ key ] = processors[ key ];
    }
};

