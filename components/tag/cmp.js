// components/tag/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag: String,
    tagId: Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e) {
      this._showError();
      // wx.navigateTo({
      //   url: `/pages/type/type?tagId=${this.properties.tagId}`
      // })    
    },
    _showError(){
      wx.showToast({
        title: '当前小程序为测试版本，暂不提供跳转功能哦~',
        icon: 'none'
      })
    }
  }
})
