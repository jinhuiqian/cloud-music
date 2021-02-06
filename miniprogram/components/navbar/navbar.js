const app = getApp()
Component({
  properties: {
    title:{
        type:String,
      },
      listInfo:{
          type:Object,
      }
    },
  data: {
      navBarHeight: app.globalData.navBarHeight,
      menuRight: app.globalData.menuRight,
      menuBotton: app.globalData.menuBotton,
      menuHeight: app.globalData.menuHeight,
  },

  attached: function() {
    
  },

  methods: {
    back() {
        wx.navigateBack({
          delta: 1,
        })
      },
  }
})
