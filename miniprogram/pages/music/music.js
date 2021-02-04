// pages/music/music.js
const MAX_LIMIT = 15
const db = wx.cloud.database

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: [],

    ball: [],

    playlist: [],

    searchdefault: ''
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getPlaylist()
    this._getSwiper()
    this._getBall()
    this._getSearchDefault()
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

  goToSearch() {
    wx.navigateTo({
      url: '../../pages/search/search',
    })
  },

/**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      playlist: [],
      imgUrl: [],
      searchdefault: ''
    })
    this._getPlaylist()
    this._getSwiper()
    this._getSearchDefault()
  },

/**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this._getPlaylist()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  _getPlaylist() {
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'music',
      data: {
        start: this.data.playlist.length,
        count: MAX_LIMIT,
        $url: 'playlist'
      }
    }).then((res) => {
      console.log(res)
      this.setData({   
        playlist: this.data.playlist.concat(res.result.data)
      })
      wx.stopPullDownRefresh()
      wx.hideLoading()
    })
  },

  _getSwiper() {
    wx.cloud.callFunction({
      name: 'music',
      data: {
        $url: 'swiper'
      }
    }).then((res) => {
      this.setData({
        imgUrl: res.result.banners
      })
    })
  },

  _getBall() {
    wx.cloud.callFunction({
      name: 'music',
      data: {
        $url: 'ball'
      }
    }).then((res) => {
      this.setData({
        ball: res.result.data
      })
    })
  },

  _getSearchDefault() {
    wx.cloud.callFunction({
      name: 'music',
      data: {
        $url: 'searchdefault'
      }
    }).then((res) => {
      console.log(res)
      this.setData({
        searchdefault: res.result.data.showKeyword
      })
    })
  }
})