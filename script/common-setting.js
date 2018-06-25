var common = {
    
    loadSidebar: true,
    autoHeader: true,
    subMaxLevel: 6,
    loadNavbar: true,
    basePath: './',
    
    // search: 'auto', // 默认值

    // 完整配置参数
    search: {
        maxAge: 86400000, // 过期时间，单位毫秒，默认一天
        // paths: [
        // '/',
        // ], // or 'auto'

        // 支持本地化
        placeholder: {
            '/zh-CN/': '搜索',
            '/': 'Type to search',
        },


        // 支持本地化
        noData: {
            '/zh-CN/': '找不到结果',
            '/': 'No Results',
        },

        // 搜索标题的最大程级, 1 - 6
        depth: 6,
    },


}