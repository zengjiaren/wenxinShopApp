// pages/list/list.js
Page({

      /**
       * 页面的初始数据
       */
      data: {
            date:[],
            indicatorDots: false,
            autoplay: false,
            interval: 3000,
            duration: 800,
            shopcartCount:0
      },

      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (options) {
            // console.log(options)
            let item = JSON.parse(options.jsonStr)
            // console.log(item)
            let arr = []
            arr.push(item)
            // this.data.date.push(item)
            this.setData({
                  date: arr
            })
            // console.log(this.data.date)
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
            var arr = wx.getStorageSync('cart') || [];
            this.setData({
                  shopcartCount: arr.length
            })
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
      addShopcart:function(e){
            
            var goods = e.currentTarget.dataset.item[0]
            var arr = wx.getStorageSync('cart') || [];
            // console.log(arr)
            // console.log(arr.length)

            // shopcartCount
            
            if(arr.length == 0){
                  arr.push(goods)
                  this.setData({
                        shopcartCount: ++this.data.shopcartCount
                  })
                  // console.log('成功')
                  wx.showToast({
                        title: '加入成功',
                        icon: 'success',
                        duration: 1000
                  })
            }else{
                  for (var i in arr) {
                        if (arr[i].title == goods.title) {
                              arr[i].num = arr[i].num + 1
                              wx.setStorageSync('cart', arr)
                              // console.log('商品重复');
                              wx.showToast({
                                    title: '加入成功',
                                    icon: 'success',
                                    duration: 1000
                              })
                              return;
                        }
                  }
                  arr.push(goods)
                  this.setData({
                        shopcartCount: arr.length
                  })
                  wx.showToast({
                        title: '加入成功',
                        icon: 'success',
                        duration: 1000
                  })
                  // console.log('添加成功')
            }

            // arr.push(goods)
            wx.setStorageSync('cart', arr)
            // console.log(this.data.shopcartCount)
            

      },
      goToCar:() => {
            // wx.clearStorageSync()
            wx.switchTab({
                  url: '../car/car',
            })
      }
})