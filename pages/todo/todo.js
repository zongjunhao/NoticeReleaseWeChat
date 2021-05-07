// pages/todo/todo.js
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
    response: {
      "data": [{
        "todoId": 1,
        "todoTitle": "修改测试",
        "todoContent": "修改测试",
        "todoLevel": 1,
        "todoIsFinished": 0,
        "todoUserId": 1,
        "todoEndtime": "2021-04-19",
        "todoFinishtime": "2021-04-06 21:40:19",
        "todoAddtime": "2021-04-06T13:40:19.000+0000",
        "todoUpdatetime": "2021-04-07T12:09:02.000+0000"
      }, {
        "todoId": 2,
        "todoTitle": "测试2",
        "todoContent": "测试2",
        "todoLevel": 3,
        "todoIsFinished": 0,
        "todoUserId": 1,
        "todoEndtime": "2021-04-06",
        "todoFinishtime": "2021-04-06 21:40:32",
        "todoAddtime": "2021-04-06T13:40:32.000+0000",
        "todoUpdatetime": "2021-04-06T13:40:32.000+0000"
      }, {
        "todoId": 3,
        "todoTitle": "测试Todo",
        "todoContent": "测试内容",
        "todoLevel": 2,
        "todoIsFinished": 0,
        "todoUserId": 1,
        "todoEndtime": "2021-04-06",
        "todoFinishtime": "2021-04-06 22:30:40",
        "todoAddtime": "2021-04-06T14:30:40.000+0000",
        "todoUpdatetime": "2021-04-06T14:30:40.000+0000"
      }, {
        "todoId": 4,
        "todoTitle": "测试Todo",
        "todoContent": "测试内容",
        "todoLevel": 2,
        "todoIsFinished": 0,
        "todoUserId": 1,
        "todoEndtime": "2021-04-18",
        "todoFinishtime": "2021-04-07 15:35:46",
        "todoAddtime": "2021-04-07T07:35:46.000+0000",
        "todoUpdatetime": "2021-04-07T07:35:46.000+0000"
      }, {
        "todoId": 5,
        "todoTitle": "测试Todo",
        "todoContent": "测试内容",
        "todoLevel": 2,
        "todoIsFinished": 1,
        "todoUserId": 1,
        "todoEndtime": "2021-04-19",
        "todoFinishtime": "2021-04-07 15:47:07",
        "todoAddtime": "2021-04-07T07:46:07.000+0000",
        "todoUpdatetime": "2021-04-07T07:47:07.000+0000"
      }],
      "code": "2006",
      "desc": "数据库查找成功"
    }
  },

  query: function () {
    console.log("levelIndex:", this.data.levelIndex)
    console.log("finishIndex", this.data.finishIndex);
  },

  add_todo: function () {
    wx.navigateTo({
      url: '/pages/add_todo/add_todo',
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