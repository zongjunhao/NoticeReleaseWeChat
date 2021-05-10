// pages/todo_detail/todo_detail.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    response: ""
  },

  finishTodo: function () {
    wx.request({
      url: app.globalData.hostUrl + '/todo/finishTodo',
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        todoId: wx.getStorageSync('todoId')
      },
      success: function (res) {
        if (res.data.code === "2002") {
          wx.showToast({
            title: '已完成',
            icon: 'success',
            duration: 1000
          })
          setTimeout(function () {
            wx.navigateBack({
              delta: 1,
            })
           }, 1000) 
        } else {
          wx.showToast({
            title: '网络异常，请重试',
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail: function (res) {
        wx.showToast({
          title: '网络连接错误',
          icon: 'error',
          duration: 2000
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    wx.request({
      url: app.globalData.hostUrl + '/todo/getTodo',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data: {
        todoId: wx.getStorageSync('todoId')
      },
      success: function (res) {
        console.log(res);
        that.setData({
          response: res.data
        })
      },
      fail: function () {
        wx.showToast({
          title: '网络连接错误',
          icon: 'error',
          duration: 2000
        })
      }
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