// components/article/cmp.js
import { likeModel } from '../../models/like.js'
const likeM = new likeModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleListDetail: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeStatus: false
  },
  attached() {
    const articleListDetail = this.data.articleListDetail;
    const artId = articleListDetail.artId;
    const likeStatus = likeM.getLikeStatus(artId);
    this.setData({
      likeStatus: likeStatus
    })

  },
  /**
   * 组件的方法列表
   */
  methods: {
    onLike(e) {
      
      const isLike = e.detail.isLike;
      const articleListDetail = this.data.articleListDetail;
      const artId = articleListDetail.artId;
      if (isLike) {
        //存缓存
        likeM.addLikeList(articleListDetail);
      } else {
        //删缓存
        likeM.removeLikeList(artId);
      }
    }
  }
})
