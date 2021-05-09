// pages/add_todo/add_todo.js
var util = require('../../utils/util')
let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    levelArray: ['紧急', '重要', '一般'],
    levelIndex: 2,
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  getTitle: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  getContent: function (e) {
    this.setData({
      content: e.detail.value
    })
  },

  bindLevelChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      levelIndex: e.detail.value
    })
  },

  checkInput: function (title, content) {
    if (title === "") {
      wx.showToast({
        title: '请输入待办标题',
        icon: 'error',
        duration: 2000
      })
      return false;
    }
    if (content === "") {
      wx.showToast({
        title: '请输入待办内容',
        icon: 'error',
        duration: 2000
      })
      return false;
    }
    return true;
  },

  submit: function () {
    console.log();
    console.log(this.data.title);
    console.log(this.data.content);
    console.log(this.data.date);
    console.log(this.data.levelIndex);
    if (this.checkInput(this.data.title, this.data.content)) {
      wx.request({
        url: app.globalData.hostUrl + '/todo/addTodo',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        data: {
          title: this.data.title,
          content: this.data.content,
          level: this.data.levelIndex,
          endTime: this.data.date,
          userId: app.globalData.userId
        },
        success: function (res) {
          if (res.data.code === "2002") {
            wx.showToast({
              title: '添加成功',
              icon: 'success',
              duration: 2000
            })
            setTimeout(function () {
              wx.navigateBack({
                delta: 1,
              })
             }, 1000) 
          }else{
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
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      date: util.formatDate(new Date()),
    });
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