// components/subscribe/cmp.js
import { SubscribeModel } from '../../models/subscribe.js'
const subscribeModel = new SubscribeModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag: String,
    tagId: Number,
    authorized: Boolean

  },

  /**
   * 组件的初始数据
   */
  data: {
    class: 'common',
    myTagList: []
  },
  attached() {
    this.judgeTag()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e) {
      if (!this.data.authorized) {
        this.setData({
          myTagList: []
        })
        wx.showToast({
          title: '请先授权登录',
          icon: 'none'
        })
        return
      }
      const markList = {
        tag: this.properties.tag,
        tagId: this.properties.tagId
      }
      if (this.data.class == 'common') {
        const myTagList = this.getMyTagList();
        myTagList.push(markList)
        subscribeModel.setMyTagList(myTagList)
      } else {
        subscribeModel.removeMyTagList(markList.tagId)
      }
      this.toggleClass();
      this.triggerEvent('tap', {}, {})
    },
    getMyTagList() {
      const myTagList = subscribeModel.getMyTagList();
      this.setData({
        myTagList: myTagList
      })
      return myTagList
    },
    judgeTag() {
      let className = "";
      const myTagList = this.getMyTagList();
      myTagList.forEach((item) => {
        if (item.tagId == this.properties.tagId) {
          className = 'subscribe'
        } else {
          return
        }
        this.setData({
          class: className
        })
      })
    },
    toggleClass() {
      let className = '';
      if (this.data.class == 'common') {
        className = 'subscribe'
      } else {
        className = 'common'
      }
      this.setData({
        class: className
      })
    }
  }
})
