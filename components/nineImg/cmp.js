// components/nineImg/cmp.js
import { behavior } from '../behavior/my-behavior.js'
Component({
  behaviors: [behavior],
  /**
   * 组件的属性列表
   */
  properties: {
    imgArr: Array
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
    onTap: function (e) {
      var index = e.currentTarget.dataset.index;
      var arr = this.data.imgArr;
      wx.previewImage({
        urls: arr,
        current:  arr[index]
      })
    }

  }
})
