export default definePageConfig({
  navigationBarTitleText: '测试结果'
})

const config = {
  // 省略其他配置项
  mini: {
    postcss: {
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      }
    },
  }
}
