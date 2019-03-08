// pages/catalog/catalog.js
import { tagInfoList } from '../../utils/tagList.js';
import { SubscribeModel } from '../../models/subscribe.js';
const subscribemodle = new SubscribeModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagInfoList: tagInfoList,
    myTagList: [],
    searchWord:"",
    authorized:false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getAuthorized()
    // this.getMyTagList()
  },
  getAuthorized() {
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: (res) => {
              this.setData({
                authorized: true,
                userInfo: res.userInfo
              })
              this.getMyTagList()
            }
          })
        }
      }
    })

  },
  onSubscribeList(){
    this.getMyTagList()
  },
  getMyTagList(){
    const myTagList = subscribemodle.getMyTagList();
    this.setData({
      myTagList: myTagList
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
    this.getAuthorized()
    this.setData({
      searchWord:""
    })
  },

  
})