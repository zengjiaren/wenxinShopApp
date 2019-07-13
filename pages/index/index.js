// pages/car/car.js
Page({

      /**
       * 页面的初始数据
       */
      data: {
            imgUrls:[
                  '/img/lun1.jpg',
                  '/img/lun2.jpg',
                  '/img/lun3.jpg',
                  '/img/lun4.jpg',
                  '/img/lun5.jpg'
            ],
            indicatorDots: false,
            autoplay: false,
            interval: 3000,
            duration: 800,
            date:[
                  {
                        url:'/img/good1.webp',
                        title:'碎花雪纺连衣裙 白色-5262#',
                        price:68,
                        num:1,
                        selected: true
                  },
                  {
                        url: '/img/good2.webp',
                        title: '全面屏realmex 6GB+64GB',
                        price: 1599,
                        num: 1,
                        selected: true
                  },
                  {
                        url: '/img/good3.webp',
                        title: '彩屏触控运动手环 防水 黑色',
                        price: 149,
                        num: 1,
                        selected: true
                  },
                  {
                        url: '/img/good4.webp',
                        title: '压褶系带连衣裙 杏色 均码',
                        price: 109,
                        num: 1,
                        selected: true
                  },
                  {
                        url: '/img/good5.webp',
                        title: '潮流韩版校园旅行包书包',
                        price: 89,
                        num: 1,
                        selected: true
                  },
            ]
      },

      goList:function(event){
            // console.log(event);
            // console.log(event.currentTarget.dataset.item);
            let date = JSON.stringify(event.currentTarget.dataset.item)
            // console.log(date)
            wx.navigateTo({
                  url: '../list/list?jsonStr=' + date,
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