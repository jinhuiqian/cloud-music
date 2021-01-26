// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [{
        url:'http://p1.music.126.net/zUv2mRobckK7Tdn2bp9iSA==/109951165664840470.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/C9I9GxpvRX7nCZyXNBeqOw==/109951165664694558.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/q5rKcBx9Y0V37DsUSaQKXg==/109951165664695730.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/WOoIZuva_umxxzYOvWINLA==/109951165664707565.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/pOXTFta-mhTpZOGhBBWvhQ==/109951165664682857.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/UdSM2BmqY_h_t9HAOzb5dQ==/109951165664710664.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/Z90NF2dHuBYrV6x-U9jJJQ==/109951165664719544.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/vAjwukVm-H0LOqzy4FTJXA==/109951165664851877.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/j0gp3gBDRRoqIXxAs0v7oA==/109951165664720877.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/9Ayx-EeCnuLRWKTcIhGB6g==/109951165664742856.jpg?imageView&quality=89'
      }],

      lists:[
        {
          "id": "101",
          "picUrl": "https://jinhuiqian.oss-cn-beijing.aliyuncs.com/icon/calendar.png",
          "describe": "每日推荐"
        },
        {
          "id": "102",
          "picUrl": "https://jinhuiqian.oss-cn-beijing.aliyuncs.com/icon/privatefm.png",
          "describe": "私人FM"
        },
        {
          "id": "103",
          "picUrl": "https://jinhuiqian.oss-cn-beijing.aliyuncs.com/icon/songsheet.png",
          "describe": "歌单"
        },
        {
          "id": "104",
          "picUrl": "https://jinhuiqian.oss-cn-beijing.aliyuncs.com/icon/rankinglist.png",
          "describe": "排行榜"
        },
        {
          "id": "105",
          "picUrl": "https://jinhuiqian.oss-cn-beijing.aliyuncs.com/icon/live.png",
          "describe": "直播"
        },
        {
          "id": "106",
          "picUrl": "https://jinhuiqian.oss-cn-beijing.aliyuncs.com/icon/album.png",
          "describe": "数字专辑"
        },
        {
          "id": "107",
          "picUrl": "https://jinhuiqian.oss-cn-beijing.aliyuncs.com/icon/ktv.png",
          "describe": "歌房"
        },
        {
          "id": "108",
          "picUrl": "https://jinhuiqian.oss-cn-beijing.aliyuncs.com/icon/game.png",
          "describe": "游戏专区"
        }
      ],

      playlist: [
        {
          "id": "1001",
          "playCount": 1.4641238e+06,
          "name": "【Acoustic】坠入断电后的温暖梦境",
          "picUrl": "http://p4.music.126.net/IwTrja3OoFdDmNf1jzzfXw==/109951165534084755.jpg?param=140y140"
        },
        {
          "id": "1002",
          "playCount": 622822.6,
          "name": "劲♂ 夫 ♀ 处 刑 曲",
          "picUrl": "http://p3.music.126.net/klQ-QH6R73Z7LdLkNvl78A==/109951165374086761.jpg?param=140y140"
        },
        {
          "id": "1003",
          "playCount": 1.3256845e+06,
          "name": "做我的公主吧 我把皇冠给你",
          "picUrl": "http://p3.music.126.net/ZJJ1ZKZ9_myIdOMKqT2LAQ==/109951165426759607.jpg?param=140y140"
        },
        {
          "id": "1004",
          "playCount": 1.8562415e+06,
          "name": "Crush只是一场小感冒",
          "picUrl": "http://p3.music.126.net/rPrQVPau1RukWWU4u1UYqA==/109951165559573991.jpg?param=140y140"
        },
        {
          "id": "1005",
          "playCount": 256485.6,
          "name": "精选说唱♥︎旋律rap♥︎单曲循环",
          "picUrl": "http://p4.music.126.net/PDX2qVc9RSq4rasWaxPCvA==/109951165499589898.jpg?param=140y140"
        },
        {
          "id": "1006",
          "playCount": 2.3612485e+06,
          "name": "我对日落许愿，希望你永远在我身边",
          "picUrl": "http://p3.music.126.net/ZIwfRbTpgUf6oHae3ShYAQ==/109951165637049653.jpg?param=140y140"
        },
      ],
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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