// pages/my/my.js.
// 获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    hiddenPasswordModal: true,
    hiddenPhoneModal: true,
    hiddenMailModal: true,
    response: ""
  },


  changePassword: function () {
    this.setData({
      hiddenPasswordModal: !this.data.hiddenPasswordModal
    })
  },
  getPassword: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  getConfirmPassword: function (e) {
    this.setData({
      confirmPassword: e.detail.value
    })
  },
  passwordCancel: function () {
    this.setData({
      hiddenPasswordModal: true
    });
  },
  passwordConfirm: function () {
    console.log(this.data.password);
    console.log(this.data.confirmPassword);
    var passwordRegExp = new RegExp("^.{6,}$")
    if (this.data.password !== this.data.confirmPassword){
      wx.showToast({
        title: '两次输入密码不一致，请重新输入',
        icon: 'none',
        duration: 2000
      })
      return
    }
    if (!passwordRegExp.test(this.data.password)) {
      wx.showToast({
        title: '请输入六位以上密码',
        icon: 'none',
        duration: 2000
      })
      return 
    }
    this.setData({
      hiddenPasswordModal: true
    })
    this.updateUserInfo("user_password", this.data.password, app.globalData.userId);
  },


  changePhone: function () {
    this.setData({
      hiddenPhoneModal: !this.data.hiddenPhoneModal
    })
  },
  getPhone: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  phoneCancel: function () {
    this.setData({
      hiddenPhoneModal: true
    });
  },
  phoneConfirm: function () {
    console.log(this.data.phone);
    var phoneRegExp = new RegExp("^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$")
    if (!phoneRegExp.test(this.data.phone)) {
      wx.showToast({
        title: '请输入正确的手机号码',
        icon: 'none',
        duration: 2000
      })
      return 
    }
    this.setData({
      hiddenPhoneModal: true
    })
    this.updateUserInfo("user_phone", this.data.phone, app.globalData.userId);
  },


  changeMail: function () {
    this.setData({
      hiddenMailModal: !this.data.hiddenMailModal
    })
  },
  getMail: function (e) {
    this.setData({
      mail: e.detail.value
    })
  },
  mailCancel: function () {
    this.setData({
      hiddenMailModal: true
    });
  },
  mailConfirm: function () {
    console.log(this.data.mail);
    var mailRegExp = new RegExp("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$")
    if (!mailRegExp.test(this.data.mail)) {
      wx.showToast({
        title: '请输入正确的邮箱',
        icon: 'none',
        duration: 2000
      })
      return 
    }
    this.setData({
      hiddenMailModal: true
    })
    this.updateUserInfo("user_email", this.data.mail, app.globalData.userId);
  },



  getUser: function () {
    let that = this
    wx.request({
      url: app.globalData.hostUrl + '/index/getUser',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data: {
        userId: app.globalData.userId
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

  updateUserInfo: function (field, value, userId) {
    let that = this
    wx.request({
      url: app.globalData.hostUrl + '/index/updateUserInfo',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data: {
        field: field,
        value: value,
        userId: userId
      },
      success: function (res) {
        console.log(res);
        if (res.data.code === "2002") {
          wx.showToast({
            title: '更新成功',
            icon: 'success',
            duration: 1000
          })
          setTimeout(function () {
            that.getUser()
          }, 1000)
        } else {
          wx.showToast({
            title: '网络异常，请重试',
            icon: 'none',
            duration: 2000
          })
        }
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

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    console.log("onload");
    this.getUser()
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