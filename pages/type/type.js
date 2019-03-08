// pages/type/type.js
var request = require("../../utils/requestType.js")


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tagId = options.tagId;
    console.log(tagId);
    this.getData(tagId);

  },
  getData: function (tagId) {
    var that = this;
    request({
      url: 'https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine/getArticleTypeTitleInfo/' + tagId,
      success: function (res) {
        that.setData({
          typeInfo: res.data.data
        })
      }
    })
    request({
      url: 'https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine/getArticleTypeList/' + tagId,
      success: function (res) {
        that.setData({
          articleTypeList: res.data.data
        });
      }
    })
  },
  onArticleDetailTap: function (e) {
    var articleDetailId = e.currentTarget.dataset.articledetailid;
    wx.navigateTo({
      url: '/pages/details/details?id=' + articleDetailId,
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})