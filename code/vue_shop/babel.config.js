// 这是项目发布阶段需要用到的 babel 插件
const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
  // 项目发布时 删除代码中所有的console
  prodPlugins.push('transform-remove-console')
}

module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    // 发布产品时候的插件数组
    ...prodPlugins,
    // 实现路由懒加载的组件
    '@babel/plugin-syntax-dynamic-import'
  ]
}
