const backgroundAudioManager = wx.getBackgroundAudioManager();
let movableAreaWidth = 0;
let movableViewWidth = 0;
let duration = 0;
let isMoving = false;
let currentSec = -1;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isSame: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    showTimes: {
      currentTime: "00:00",
      totalTime: "00:00"
    },
    movableDis: 0,
    progress: 0
  },

  lifetimes: {
    ready() {
      if (this.properties.isSame && this.data.showTimes.totalTime == "00:00") {
        this._setTime();
      }

      this._getMovableDis();
      this._bindBgmEvent();
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

    onChange(e) {
      if (e.detail.source == "touch") {
        this.data.movableDis = e.detail.x;
        this.data.progress = e.detail.x / (movableAreaWidth - movableViewWidth) * 100;
        isMoving = true;
      }
    },

    onTouchEnd(e) {
      const currentTime = backgroundAudioManager.currentTime;
      const currentTimeFmt = this._dateFormat(currentTime);
      this.setData({
        movableDis: this.data.movableDis,
        progress: this.data.progress,
        ["showTimes.currentTime"]: `${currentTimeFmt.min}:${currentTimeFmt.sec}`
      });
      const sec = duration * this.data.progress / 100;
      backgroundAudioManager.seek(sec);
      isMoving = false;
    },

    _bindBgmEvent() {
      backgroundAudioManager.onCanplay(() => {
        if (typeof backgroundAudioManager.duration != "undefined") {
          this._setTime();
        } else {
          setTimeout(() => {
            this._setTime();
          }, 1000);
        }
        isMoving = false;
      });

      backgroundAudioManager.onPlay(() => {
        this.triggerEvent("musicPlay");
      });

      backgroundAudioManager.onTimeUpdate(() => {
        if(!isMoving) {
          const currentTime = backgroundAudioManager.currentTime;
          const duration = backgroundAudioManager.duration;
          const sec = currentTime.toString().split(".")[0];
          if (sec != currentSec) {
            const currentTimeFmt = this._dateFormat(currentTime);
            const movableDis = (movableAreaWidth - movableViewWidth) * currentTime / duration;
            const progress = currentTime / duration * 100;
            this.setData({
              movableDis,
              progress,
              ["showTimes.currentTime"]: `${currentTimeFmt.min}:${currentTimeFmt.sec}`
            });
            currentSec = sec
            //联动歌词
            this.triggerEvent('timeUpdate', {
              currentTime
            })
          }
          currentSec = sec;
          this.triggerEvent("timeUpdate", {
            currentTime
          });
        }
      });

      backgroundAudioManager.onPause(() => {
        this.triggerEvent("musicPause");
      });

      backgroundAudioManager.onStop(() => {

      });

      backgroundAudioManager.onEnded(() => {
        this.triggerEvent("musicEnd");
      });

      backgroundAudioManager.onWaiting(() => {

      });

      backgroundAudioManager.onError((res) => {
        console.error(res.erMsg);
        console.error(res.errCode);
        wx.showToast({
          title: `错误${res.errCode}`,
        });
      });

    },

    _getMovableDis() {
      const query = this.createSelectorQuery();
      query.select(".movable-area").boundingClientRect();
      query.select(".movable-view").boundingClientRect();
      query.exec((res) => {
        movableAreaWidth = res[0].width;
        movableViewWidth = res[1].width;
      });
    },

    _setTime() {
      duration = backgroundAudioManager.duration;
      const durationFmt = this._dateFormat(duration);
      this.setData({
        ["showTimes.totalTime"]: `${durationFmt.min}:${durationFmt.sec}`
      });

    },

    _dateFormat(duration) {
      const min = Math.floor(duration / 60);
      const sec = Math.floor(duration % 60);
      return {
        min: this._parse0(min),
        sec: this._parse0(sec)
      }
    },

    _parse0(num) {
      return num < 10 ? "0" + num : num;
    }

  }
})