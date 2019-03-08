// components/recommend/cmp.js
Component({
  attached() {
    this.getDate()
  },
  /**
   * 组件的属性列表
   */
  properties: {
    recommendInfo: Object,
    magazineId:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    recommendType:['轻芒','兴趣','物质','世界','新事','灵魂']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getDate() {
      const monthArr = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
      const dayArr = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '二一', '二二', '二三', '二四', '二五', '二六', '二七', '二八', '二九', '三十', '三一']
      const month = monthArr[new Date().getMonth()];
      const day = dayArr[new Date().getDate() - 1];
      const dateStr = `${month}月${day}日`;
      this.setData({
        date: dateStr
      })
    }
  }
})
