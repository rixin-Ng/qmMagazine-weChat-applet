// pages/index/index.js

import { requestModels } from '../../models/index.js';
import { random } from '../../utils/randomStr.js';
import { likeModel } from '../../models/like.js'
const request = new requestModels();
const likeM = new likeModel();

Page({


  /**
   * 页面的初始数据
   */
  data: {
    recommendInfo: {},
    markType: [],
    articleList: [],
    getMore: '',
    magazineId: 0,
    isLoading: true,
    likeStatus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getData();
    // wx.showLoading({
    //   title: "加载中"
    // })
  },
  _getData(magazineId) {
    const recommendInfo = request.getRecommendInfo(magazineId);
    const markType = request.getMarkTypeList(magazineId);
    const articleList = request.getIndexArticleList(magazineId);
    Promise.all([recommendInfo, markType, articleList]).then(res => {
      this.setData({
        recommendInfo: res[0],
        markType: res[1],
        articleList: res[2],
      });
      this._hideLoading();
    })
  },
  _hideLoading() {
    this.setData({
      isLoading: false
    })
  },
  onCatalogTap() {
    wx.switchTab({
      url: '/pages/catalog/catalog'
    })
  },
  onNavTap(e) {
    const index = e.detail.index;
    this._resetData();
    this._setMagazineId(index);
    this._scrollPageToTop();
    this._getData(index);

  },
  _resetData() {
    this.setData({
      recommendInfo: {},
      markType: [],
      articleList: []
    })
  },
  _setMagazineId(index) {
    this.setData({
      magazineId: index
    })
  },
  _scrollPageToTop() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
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
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      getMore: random(20)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})