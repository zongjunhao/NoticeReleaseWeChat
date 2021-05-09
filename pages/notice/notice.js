// pages/notice/notice.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    levelArray: ['所有', '紧急', '重要', '一般'],
    levelIndex: 0,
    finishArray: ['未完成', '已完成', '全部', '已过期'],
    finishIndex: 0,
    response: ""
  },

  getNotices: function(userId, isFinished, level){
    const that = this
    wx.request({
      url: app.globalData.hostUrl + '/notice/getNotices',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data: {
        userId: userId,
        isFinished: isFinished,
        level: level
      },
      success: function (res) {
        if (res.data.code === "2006") {
          that.setData({
            response: res.data
          })
        } else if(res.data.code === "2007"){
          that.setData({
            response:""
          })
          wx.showToast({
            title: '无所查询数据',
            icon: 'error',
            duration: 2000
          })
        }
      },
      fail:function(){
        wx.showToast({
          title: '网络连接错误',
          icon: 'error',
          duration: 2000
        })
      }
    }) 
  },

  query: function(){
    this.getNotices(app.globalData.userId, this.data.finishIndex, this.data.levelIndex)
  },

  readNotice: function(e){
    // 设置缓冲区，将通知id存入缓冲区，以便到达新页面进行新的请求加载页面详情
    wx.setStorageSync('noticeId', e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/notice_detail/notice_detail',
    })
  },

  bindLevelChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      levelIndex: e.detail.value
    })
  },

  bindFinishChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      finishIndex: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
   
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
    console.log("onshow");
    this.setData({
      response:""
    })
    this.getNotices(app.globalData.userId, this.data.finishIndex, this.data.levelIndex)
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