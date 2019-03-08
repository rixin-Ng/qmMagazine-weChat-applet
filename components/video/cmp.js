// components/video/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src: String,
    poster: String,
    duration: String,
    mainTitle: String,
    videoId: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPoster: true
  },
  lifetimes: {
    attached() {
      this._getVideoInfo();
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onPlayTap(e) {
      this._toggleVideoPoster();
      this.video.play();
      
    },
    onStopTap(e) {
      this._toggleVideoPoster();
      this.video.stop();
      this.video.seek(0);
    },
    _toggleVideoPoster() {
      this.setData({
        showPoster: !this.data.showPoster
      })
    },
    _getVideoInfo() {
      const id = this.properties.videoId;
      this.video = wx.createVideoContext(id, this);
    },
    onVideoEnd() {
      this._toggleVideoPoster();
    }
  }
})
