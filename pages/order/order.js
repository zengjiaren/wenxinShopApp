// pages/order/order.js
Page({

      /**
       * 页面的初始数据
       */
      data: {
            orders:[],
            hasAddress: false,
            total: 0,
            timer:null
      },

      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (options) {
            // console.log(options.jsonStr)
            let arr = JSON.parse(options.jsonStr)
            // console.log(arr)
            this.setData({
                  orders:arr
            })
            console.log(this.data.orders)

      },

      /**
       * 生命周期函数--监听页面初次渲染完成
       */
      onReady: function () {
            this.getTotalPrice();
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

      },
      /**
   * 计算总价
   */
      getTotalPrice() {
            let orders = this.data.orders;
            let total = 0;
            for (let i = 0; i < orders.length; i++) {
                  total += orders[i].num * orders[i].price;
            }
            this.setData({
                  total: total
            })
      },

      toPay() {
            let arr = this.data.orders;
            arr.splice(0)
            this.setData({
                  orders: arr
            })
            this.getTotalPrice();
            console.log(this.data.orders)

            wx.showToast({
                  title: '付款成功',
                  icon: 'success',
                  duration: 1000
            })

            this.data.timer = setTimeout(() => {
                  wx.switchTab({
                        url: '../index/index',
                  })
            },1000)

            
      }
})