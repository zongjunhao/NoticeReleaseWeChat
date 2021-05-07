// pages/login/login.js
let app = getApp()
Page({
  // 获取账号输入框内容
  getAccount: function (e) {
    this.setData({
      account: e.detail.value
    })
  },
  // 获取密码输入框内容
  getPassword: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  checkInput: function(account, password){
    // 账号校验，学生学号：10位或12位数字   教师工号：Z开头 + 7位数字
    var accountRegExp = new RegExp("(^\\d{10}$)|(^\\d{12}$)|(^(Z|z)\\d{7}$)")
    // 密码校验：不低于六位的字符
    var passwordRegExp = new RegExp("^.{6,}$")
    if (!accountRegExp.test(account)) {
      wx.showToast({
        title: '学工号格式错误，请重新输入',
        icon: 'none',
        duration: 2000
      })
      return false
    }
    if (!passwordRegExp.test(password)) {
      wx.showToast({
        title: '密码不正确，请重新输入',
        icon: 'none',
        duration: 2000
      })
      return false
    }
    return true
  },
  // 登录
  login: function () {
    var flag = this.checkInput(this.data.account, this.data.password)
    console.log(flag);
    if (flag) {
      wx.request({
        url: app.globalData.hostUrl + '/index/login',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        data: {
          account: this.data.account,
          password: this.data.password
        },
        success: function (res) {
          if (res.data.code === "4000") {
            app.globalData.userId = res.data.data.userId
            wx.showToast({
              title: '登录成功',
              icon: 'success',
              duration: 2000
            })
            // tabbar页无法使用wx.navigateTo
            wx.switchTab({
              url: '/pages/notice/notice'
            });
          } else {
            wx.showToast({
              title: '登陆失败，请检查账号密码是否正确',
              icon: 'none',
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
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    account: "",
    password: ""
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