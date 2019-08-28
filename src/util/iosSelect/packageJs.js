// 省份列表
export var rank1 = [
    /*******华北五省********/
    { id: '1', value: '参考类', parentId: '0' },
    { id: '2', value: '工具类', parentId: '0' },
    { id: '3', value: '其他', parentId: '0' },
];

// 城市列表
export var rank2 = [
    { id: 's1', value: 'input组件', parentId: '1' },
    { id: 's2', value: '上传', parentId: '1' },
    { id: 's3', value: '序列帧', parentId: '1' },
    { id: 's4', value: '音乐', parentId: '1' },

    { id: 'p1', value: '选择器', parentId: '2' },
    { id: 'p2', value: '截图', parentId: '2' },
    { id: 'p3', value: 'swiper', parentId: '2' },

    { id: 'o1', value: 'axios', parentId: '3' },
];

// 区县列表
export var rank3 = [
    {
        id: '1',
        value: 'InputParten',
        parentId: 's1',
        pluginName: 'InputParten',
    },
    {
        id: '2',
        value: '地址选择器',
        parentId: 'p1',
        pluginName: 'PluginSelector',
    },

    {
        id: '3',
        value: '说明和简单使用',
        parentId: 'o1',
        pluginName: 'AxiosPart',
    },
    {
        id: '4',
        value: '图片上传',
        parentId: 's2',
        pluginName: 'SampleUpload',
    },

    {
        id: '5',
        value: 'html2Canvas',
        parentId: 'p2',
        pluginName: 'PluginHtml2CanvasContainer',
    },
    {
        id: '6',
        value: '序列帧1',
        parentId: 's3',
        pluginName: 'SampleMovieClipContainer',
    },
    {
        id: '7',
        value: '音乐',
        parentId: 's4',
        pluginName: 'SampleMusicContainer',
    },
    {
        id: '8',
        value: 'swiper',
        parentId: 'p3',
        pluginName: 'PluginSwiperContainer',
    },
];
