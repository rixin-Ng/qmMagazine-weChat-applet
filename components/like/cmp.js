// components/like/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isLike: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLike: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLikeTap(e) {
      const isLike = !this.data.isLike
      this.setData({
        isLike: isLike
      })
      this.triggerEvent('like', { isLike }, {})
  
    }

  }
})
