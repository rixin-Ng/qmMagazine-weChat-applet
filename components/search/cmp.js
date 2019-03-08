// components/search/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    // value: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSearch(e) {
      const value = e.detail.value || this.data.value;
      if (value !== '读书') {
        wx.showToast({
          title: '测试版只能搜索 "读书" 哟',
          icon: 'none'
        })
        return
      }
      wx.navigateTo({
        url: `/pages/search/search?searchWord=${value}`
      })
    },
    onBlur(e) {
      const value = e.detail.value;
      this.setData({
        value: value
      })
    },
  }
})
