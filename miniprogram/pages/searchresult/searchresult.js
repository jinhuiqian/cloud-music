// miniprogram/pages/searchresult/searchresult.js
let Index = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //歌曲列表
    musiclist: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    Index = options.index
    console.log(Index)
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'music',
      data : {
        key: options.key,
        $url: 'searchresult'
      }
    }).then((res) => {
      console.log(res.result.result.data)
      
      this._setMusiclist()
      wx.hideLoading()
    })
  },

  _setMusiclist() {
    //将本地歌单的歌曲列表存入本地存储
    wx.setStorageSync('musiclist', this.data.musiclist)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})