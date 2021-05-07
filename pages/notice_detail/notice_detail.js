// pages/notice_detail/notice_detail.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    response: {
      "notice": {
        "noticeId": 1,
        "noticeTitle": "信息与安全工程学院2021年硕士研究生招生复试通知及工作细则",
        "noticeContent": "\t中南财经政法大学2021年硕士研究生招生的复试和录取工作即将开始，为使我院复试录取工作更加规范化、制度化，结合我院实际情况，特制定《中南财经政法大学信息与安全工程学院2021年硕士研究生招生复试工作细则》。\n 一、复试工作的指导思想\n \t\t以习近平新时代中国特色社会主义思想为指导，全面贯彻落实党的教育方针和全国研究生教育会议精神，坚持以立德树人、服务需求、提高质量、追求卓越为主线，坚持安全有序、科学选拔、公平公正的工作原则，灵活采用多样化的考查方式、方法，突出学科特色和需求，确保复试录取质量。严格规范考核流程，做到政策透明、程序公正、结果公开，维护考生的合法权益。统筹做好疫情防控和复试录取工作，安全平稳有序完成2021年硕士研究生复试录取工作。\n二、组织领导及监督\n按学校要求和学院实际情况，设立机构如下：\n（一）成立由院长、院党委书记任双组长、院领导班子成员为组员的学院招生工作领导小组；\n（二）成立由院党委书记任组长、院党委副书记（纪委书记）任副组长、院纪委委员为组员的复试监督巡视组；",
        "noticeUnitId": 1,
        "noticeLevel": 1,
        "noticeEndtime": "2021-04-24",
        "noticeAddtime": "2021-04-10 22:51:23",
        "noticeUpdatetime": "2021-04-13 14:56:52"
      },
      "labels": [
        "活动",
        "比赛"
      ],
      "files": [{
          "fileId": 1,
          "fileNoticeId": 1,
          "fileName": "信息与安全工程学院2021年硕士研究生招生计划明细表.pdf",
          "filePath": "/5b0ae8b0-4eee-4883-ab0b-3d08498bf959.pdf",
          "fileAddtime": "2021-04-12 09:53:53",
          "fileUpdatetime": "2021-04-12 09:53:53"
        },
        {
          "fileId": 2,
          "fileNoticeId": 1,
          "fileName": "2021中南财经政法大学硕士研究生复试政审函调表.doc",
          "filePath": "路径32",
          "fileAddtime": "2021-04-12 09:54:04",
          "fileUpdatetime": "2021-04-12 09:54:04"
        }
      ],
      "unitName": "信息与安全工程学院",
      "rNoticeUser": {
        "rnoticeUserId": 1,
        "risReaded": 0,
        "rfinishtime": "2021-04-12 11:04:02",
        "rreadtime": "2021-04-12 11:04:02",
        "raddtime": "2021-04-12 11:04:02",
        "ruserId": 1,
        "risFinished": 0,
        "rnoticeId": 1,
        "rupdatetime": "2021-04-12 11:04:02"
      },
      "isFinished": 1
    }
  },

  showFile: function(e){
    var path = e.currentTarget.dataset.path
    console.log(app.globalData.hostUrl + path);
    wx.downloadFile({
      url: app.globalData.hostUrl + path,
      success: function (res) {
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      }
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