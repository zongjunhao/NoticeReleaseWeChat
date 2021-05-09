// pages/todo_detail/todo_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    response: {
      "data": {
           "todoId": 1,
           "todoTitle": "修改测试",
           "todoContent": "修改测试",
           "todoLevel": 1,
           "todoIsFinished": 1,
           "todoUserId": 1,
           "todoEndtime": "2021-04-19",
           "todoFinishtime": "2021-04-12 21:29:51",
           "todoAddtime": "2021-04-06 21:40:19",
           "todoUpdatetime": "2021-04-12 21:29:51"
      },
      "code": "2006",
      "desc": "数据库查找成功"
 }
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