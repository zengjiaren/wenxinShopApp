// pages/my/my.js
Page({

      /**
       * 页面的初始数据
       */
      data: {
            items: [{
                        text: "我的收藏",
                        url: "../../img/icon-arrow.png"
                  },
                  {
                        text: "我的订单",
                        url: "../../img/icon-arrow.png"
                  },
                  {
                        text: "我的地址",
                        url: "../../img/icon-arrow.png"
                  },
                  {
                        text: "联系客服",
                        url: "../../img/icon-arrow.png"
                  },
                  {
                        text: "关于我们",
                        url: "../../img/icon-arrow.png"
                  }
            ]
      },

      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function(options) {
            var _this = this;
            wx.login({
                  success(res) {
                        if (res.code) {
                              // console.log(res)
                              // 获取用户信息
                              wx.getUserInfo({
                                    success(res) {
                                          // console.log(res);
                                          // 将数据添加至data中
                                          _this.setData(res.userInfo)
                                    }
                              })
                        } else {
                              console.log('登录失败！' + res.errMsg)
                        }
                  }
            })
            
      },

      /**
       * 生命周期函数--监听页面初次渲染完成
       */
      onReady: function() {

      },

      /**
       * 生命周期函数--监听页面显示
       */
      onShow: function() {
            // var list = wx.getStorageSync('cart')
            // console.log(list)
      },

      /**
       * 生命周期函数--监听页面隐藏
       */
      onHide: function() {

      },

      /**
       * 生命周期函数--监听页面卸载
       */
      onUnload: function() {

      },

      /**
       * 页面相关事件处理函数--监听用户下拉动作
       */
      onPullDownRefresh: function() {

      },

      /**
       * 页面上拉触底事件的处理函数
       */
      onReachBottom: function() {

      },

      /**
       * 用户点击右上角分享
       */
      onShareAppMessage: function() {

      }
})