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
    response: {
      "data": [
        {
          "notice": {
            "noticeId": 1,
            "noticeTitle": "第60次全国计算机等级考试报名的通知",
            "noticeContent": "2021年3月第60次全国计算机等级考试报名工作安排如下： 考生报名（注册）时间为2020年12月29日9:00至2021年1月7日17：00；缴费须在2021年1月7日17：00前成功完成（已支付状态）。报名时间和缴费时间同时截止。 准考证打印开始时间为：2021年3月16日09：00考试时间：2021年3月27日至29日。报名注意事项：1.本次报名设南湖校区（420032）和首义校区（420142）两个考点，报考时请考生注意选择自己方便的考点报名。",
            "noticeUnitId": 1,
            "noticeLevel": 3,
            "noticeEndtime": "2021-04-12",
            "noticeAddtime": "2021-04-10T14:51:23.000+0000",
            "noticeUpdatetime": "2021-04-12T01:51:03.000+0000"
          },
          "labels": [
            "活动",
            "比赛"
          ],
          "files": [{
              "fileId": 1,
              "fileNoticeId": 1,
              "fileName": "通知1附件",
              "filePath": "路径",
              "fileAddtime": "2021-04-12T01:53:53.000+0000",
              "fileUpdatetime": "2021-04-12T01:53:53.000+0000"
            },
            {
              "fileId": 2,
              "fileNoticeId": 1,
              "fileName": "通知1附件2",
              "filePath": "路径",
              "fileAddtime": "2021-04-12T01:54:04.000+0000",
              "fileUpdatetime": "2021-04-12T01:54:04.000+0000"
            }
          ],
          "rNoticeUser": {
            "rFinishtime": "2021-04-12 11:04:02",
            "risReaded": 0,
            "rreadtime": "2021-04-12T03:04:02.000+0000",
            "risFinished": 0,
            "raddtime": "2021-04-12T03:04:02.000+0000",
            "rnoticeId": 1,
            "rupdatetime": "2021-04-12T03:04:02.000+0000",
            "rnoticeUserId": 1,
            "ruserId": 1,
            "rfinishtime": "2021-04-12T03:04:02.000+0000"
          },
          "isFinished": 0
        },
        {
          "notice": {
            "noticeId": 2,
            "noticeTitle": "信息与安全工程学院2021年硕士研究生招生复试通知及工作细则",
            "noticeContent": "中南财经政法大学2021年硕士研究生招生的复试和录取工作即将开始，为使我院复试录取工作更加规范化、制度化，结合我院实际情况，特制定《中南财经政法大学信息与安全工程学院2021年硕士研究生招生复试工作细则》。,可与计算学部办公室联系，联系电话：86403509。",
            "noticeUnitId": 1,
            "noticeLevel": 2,
            "noticeEndtime": "2021-04-12",
            "noticeAddtime": "2021-04-12T01:49:16.000+0000",
            "noticeUpdatetime": "2021-04-12T01:51:05.000+0000"
          },
          "labels": [
            "课程"
          ],
          "files": [],
          "rNoticeUser": {
            "rFinishtime": "2021-04-12 11:04:21",
            "risReaded": 1,
            "rreadtime": "2021-04-12T03:04:21.000+0000",
            "risFinished": 1,
            "raddtime": "2021-04-12T03:04:21.000+0000",
            "rnoticeId": 2,
            "rupdatetime": "2021-04-12T03:04:21.000+0000",
            "rnoticeUserId": 3,
            "ruserId": 1,
            "rfinishtime": "2021-04-12T03:04:21.000+0000"
          },
          "isFinished": 1
        },
        {
          "notice": {
            "noticeId": 3,
            "noticeTitle": "信息与安全工程学院2021届硕士研究生预答辩公告",
            "noticeContent": "根据学校相关要求，为规范博士、硕士学位论文答辩工作，体现答辩的公平公正性，保障工作的顺利开展，建立此公告平台，公布2021届硕士研究生论文预答辩公告。",
            "noticeUnitId": 1,
            "noticeLevel": 3,
            "noticeEndtime": "2021-04-15",
            "noticeAddtime": "2021-04-12T01:49:35.000+0000",
            "noticeUpdatetime": "2021-04-12T01:49:35.000+0000"
          },
          "labels": ["课程"],
          "files": [{
            "fileId": 3,
            "fileNoticeId": 3,
            "fileName": "通知3附件",
            "filePath": "路径",
            "fileAddtime": "2021-04-12T01:54:17.000+0000",
            "fileUpdatetime": "2021-04-12T01:54:17.000+0000"
          }],
          "rNoticeUser": null,
          "isFinished": 0
        },
        {
          "notice": {
            "noticeId": 4,
            "noticeTitle": "第58次全国计算机等级考试合格证书发放通知",
            "noticeContent": "为了方便广大考生，我校南湖校区考点自2020年12月21日起开始集中发放第58次（2020年下半年）全国计算机等级考试合格证书，请考试通过并取得合格证书的考生前来领取。",
            "noticeUnitId": 1,
            "noticeLevel": 3,
            "noticeEndtime": "2021-04-18",
            "noticeAddtime": "2021-04-12T01:49:47.000+0000",
            "noticeUpdatetime": "2021-04-12T01:49:47.000+0000"
          },
          "labels": [
            "学校通知"
          ],
          "files": [],
          "rNoticeUser": null,
          "isFinished": 0
        }
      ],
      "code": "2006",
      "desc": "数据库查找成功"
    }
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
    this.getNotices(app.globalData.userId, this.data.finishIndex, this.data.levelIndex)
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