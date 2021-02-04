// pages/player/player.js
let musiclist = []
//正在播放的歌曲index
let playingIndex = 0
const backgroundAudioManager = wx.getBackgroundAudioManager()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picUrl: '',
    isPlaying: false,
    isSame: false,
    currentTime: 0,
    isLyricShow: false,
    lyric: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    playingIndex = options.index
    musiclist = wx.getStorageSync('musiclist')
    this._loadMusicDetail(options.musicId)
  },
  
  togglePlaying() {
    if(this.data.isPlaying){
      backgroundAudioManager.pause()
    }else{
      backgroundAudioManager.play()
    }
    this.setData({
      isPlaying: !this.data.isPlaying
    })
  },

    // 切换显示歌词
    onLyricShow() {
      this.setData({
        isLyricShow: !this.data.isLyricShow
      });
    },

    timeUpdate(event){
      this.selectComponent('.lyric').update(event.detail.currentTime)
    },

    onPrev(){
      playingIndex--
      if(playingIndex < 0){
        playingIndex = musiclist.length - 1
      }
      this._loadMusicDetail(musiclist[playingIndex].id)
    },
    onNext(){
      playingIndex++
      if(playingIndex === musiclist.length){
        playingIndex = 0
      }
      this._loadMusicDetail(musiclist[playingIndex].id)
    },
  

  _loadMusicDetail(musicId) {
    let music = musiclist[playingIndex]
    console.log(music)
    wx.setNavigationBarTitle({
      title: music.name,
    })
    this.setData({
      picUrl : music.al.picUrl
    })
    wx.cloud.callFunction({
      name: 'music',
      data: {
        musicId,
        $url: 'musicUrl',
      }
    }).then((res) => {
      const url = res.result.data[0].url
      if(url === null) {
        wx.showToast({
          title: '没有权限播放',
        })
        backgroundAudioManager.pause()
        this.setData({
          isPlaying: false
        })
        return
      }
      backgroundAudioManager.src = url
      backgroundAudioManager.title = music.name
      backgroundAudioManager.coverImgUrl = music.al.picUrl
      backgroundAudioManager.singer = music.ar[0].name
      this.setData({
        isPlaying: true
      })
      this._getLyric(musicId)
    })
  },

  // 加载歌词
  _getLyric(musicId) {
    wx.cloud.callFunction({
      name: "music",
      data: {
        musicId,
        $url: "lyric"
      }
    }).then((res) => {
      let lyric = "暂无歌词";
      const lrc = res.result.lrc;
      if (lrc) {
        lyric = lrc.lyric;
      }
      this.setData({
        lyric
      });
    });
  },

  // 音乐播放事件
  onPlay() {
    this.setData({
      isPlaying: true
    });
  },

  // 音乐暂停事件
  onPause() {
    this.setData({
      isPlaying: false
    });
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