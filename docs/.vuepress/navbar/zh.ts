export const zhNavbar = [
    //单层
    {
        text: '主页',
        link: '/',
        // 该元素将一直处于激活状态
        activeMatch: '/',
    },
    {
        text: '宪法相关法',
        children: [
            { text: '宪法', link: 'constitution/1' },
        ],
    },
    {
        text: '民法商法',
        children: [
            { text: '民法典', link: '404' },
        ],
    },
    {
        text: '行政法',
        children: [
            { text: '人口与计划生育法', link: 'administrative/1' },
        ],
    },
    {
        text: '经济法',
        children: [
            { text: '宪法', link: '' },
        ],
    },
    {
        text: '社会法',
        children: [
            { text: '空缺', link: '' },
        ],
    },
    {
        text: '刑法',
        children: [
            { text: '刑法', link: '' },
            { text: '社区矫正法', link: 'criminal/1' },
            { text: '行政诉讼法', link: '' },
        ],
    },
    {
        text: '诉讼法',
        children: [
            { text: '民事诉讼法', link: '' },
            { text: '刑事诉讼法', link: '' },
            { text: '行政诉讼法', link: '' },
        ],
    },
    {
        text: '部门规章',
        link: 'regulate/1',
    },

    // 字符串 - 页面文件路径
    // '/Guide/README.md',
]
