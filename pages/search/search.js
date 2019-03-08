// pages/search/search.js
import { SearchModel } from '../../models/search.js';
import {random} from '../../utils/randomStr';
const searchModel = new SearchModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchWord: '',
    more:'',
    searching:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const searchWord = options.searchWord;
    this.setData({
      searchWord
    })
    this.getData()
  },
  getData() {
    const searchWord = this.data.searchWord;
    const getSearchArticleRecommend = searchModel.getSearchArticleRecommend(searchWord);
    const getSearchArticleList = searchModel.getSearchArticleList(searchWord);
    Promise.all([getSearchArticleRecommend, getSearchArticleList]).then((res) => {
      const articleRecommend = res[0];
      const articleList = res[1];
      this.setData({
        tag: articleRecommend.tag,
        recommend: articleRecommend.recommend,
        articleList,
        articleRecommend,
        searching: false
      })
    })
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      more: random(20)
    })
    console.log(this.data.more)
  },

 
})