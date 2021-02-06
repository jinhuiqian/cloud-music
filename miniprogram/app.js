//app.js
App({
  onLaunch: function () {
     // 胶囊按钮位置信息
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    console.log(menuButtonInfo)
    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    console.log(systemInfo)
    // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
    this.globalData.navBarHeight = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo.statusBarHeight;
    this.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
    this.globalData.menuButton = menuButtonInfo.top - systemInfo.statusBarHeight;
    this.globalData.menuHeight = menuButtonInfo.height;
    
    this.globalData.statusBarHeight = systemInfo.statusBarHeight;

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'jinhuiqian-8gi1cox44dde5a5a',
        traceUser: true,
      })
    }
  },
  
  // 数据都是根据当前机型进行计算，这样的方式兼容大部分机器
  globalData: {
    navBarHeight: 0, // 导航栏高度
    menuRight: 0, // 胶囊距右方间距（方保持左、右间距一致）
    menuBotton: 0, // 胶囊距底部间距（保持底部间距一致）
    menuHeight: 0, // 胶囊高度（自定义内容可与胶囊高度保证一致)
    statusBarHeight: 0,
},

  onShow(options) {
    console.log('onShow 执行')
    console.log(options)
  
  }
})
