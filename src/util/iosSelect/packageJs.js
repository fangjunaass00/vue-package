// 省份列表
export var rank1 = [
    /*******华北五省********/
    { id: 'a1', value: '参考类', parentId: '0' },
    { id: 'a2', value: '工具类', parentId: '0' },
    { id: 'a3', value: '其他', parentId: '0' },
];

// 城市列表
export var rank2 = [
    { id: 'b1', value: 'input组件', parentId: 'a1' },
    { id: 'b2', value: '选择器', parentId: 'a2' },

    { id: 'b4', value: '上传', parentId: 'a2' },
    { id: 'b5', value: '截图', parentId: 'a2' },
    { id: 'b3', value: 'axios', parentId: 'a3' },
    { id: 'b6', value: '序列帧', parentId: 'a1' },
    { id: 'b7', value: '音乐', parentId: 'a1' },
];

// 区县列表
export var rank3 = [
    {
        id: '1',
        value: 'InputParten',
        parentId: 'b1',
        pluginName: 'InputParten',
    },
    {
        id: '2',
        value: '地址选择器',
        parentId: 'b2',
        pluginName: 'PluginSelector',
    },

    {
        id: '3',
        value: '说明和简单使用',
        parentId: 'b3',
        pluginName: 'AxiosPart',
    },
    {
        id: '4',
        value: '图片上传',
        parentId: 'b4',
        pluginName: 'SampleUpload',
    },

    {
        id: '5',
        value: 'html2Canvas',
        parentId: 'b5',
        pluginName: 'PluginHtml2CanvasContainer',
    },
    {
        id: '6',
        value: '序列帧1',
        parentId: 'b6',
        pluginName: 'SampleMovieClipContainer',
    },
    {
        id: '7',
        value: '音乐',
        parentId: 'b7',
        pluginName: 'SampleMusicContainer',
    },
];
