// 省份列表
export var rank1 = [
    /*******华北五省********/
    { id: '1', value: '参考类', parentId: '0' },
    { id: '2', value: '工具类', parentId: '0' },
    { id: '3', value: '其他', parentId: '0' },
];

// 城市列表
export var rank2 = [
    /**********北京市********/
    { id: 'a1', value: 'input组件', parentId: '1' },
    /**********天津市********/
    { id: 'a2', value: '选择器', parentId: '2' },
    { id: 'a4', value: '上传', parentId: '2' },
    /**********河北省********/
    { id: 'a3', value: '石家庄市', parentId: '3' },
];

// 区县列表
export var rank3 = [
    /**********北京市********/
    {
        id: '1',
        value: 'InputParten1',
        parentId: 'a1',
        pluginName: 'InputParten1',
    },
    {
        id: '2',
        value: '地址选择器',
        parentId: 'a2',
        pluginName: 'AddressSelector',
    },
    {
        id: '3',
        value: '时间选择器',
        parentId: 'a2',
        pluginName: 'TimeSelector',
    },
    {
        id: '4',
        value: '朝阳区',
        parentId: 'a3',
        pluginName: 'InputParten1',
    },
    {
        id: '5',
        value: '图片上传',
        parentId: 'a4',
        pluginName: 'UploadImage',
    },
    {
        id: '6',
        value: '视频',
        parentId: 'a4',
        pluginName: 'UploadVideo',
    },
];
