// pages/my/my.js
Page({

      /**
       * 页面的初始数据
       */
      data: {
            category: [
                  { name: '手机', id: 'shouji' },
                  { name: '家电', id: 'jiadian' },
                  { name: '电脑', id: 'dianao' },
                  { name: '美妆', id: 'meizhuang' },
                  { name: '男装', id: 'nanzhuang' },
                  { name: '女装', id: 'nvzhuang' }
            ],
            detail: [
                  {
                        id: 'shouji',
                        banner:'/img/shouji.jpg',
                        cate: '手机',
                        dt:[
                              {
                                    thumb: '/img/sj1.jpg',
                                    name: '手机'
                              },
                              {
                                    thumb: '/img/sj2.jpg',
                                    name: '全面屏手机'
                              },
                              {
                                    thumb: '/img/sj3.jpg',
                                    name: '游戏手机'
                              },
                              {
                                    thumb: '/img/sj4.jpg',
                                    name: '拍照手机'
                              },
                        ]
                  },
                  {
                        id: 'jiadian',
                        banner: '/img/jiadian.jpg',
                        cate: '家电',
                        dt: [
                              {
                                    thumb: '/img/jd1.jpg',
                                    name: '微波炉'
                              }
                        ]
                  },
                  {
                        id: 'dianao',
                        banner: '/img/diannao.jpg',
                        cate: '电脑',
                        dt: [
                              {
                                    thumb: '/img/dn1.png',
                                    name: '游戏本'
                              }
                        ]
                  },
                  {
                        id: 'meizhuang',
                        banner: '/img/meizhuang.jpg',
                        cate: '美妆',
                        dt: [
                              {
                                    thumb: '/img/mz1.jpg',
                                    name: '护肤礼盒'
                              }
                        ]
                  },
                  {
                        id: 'nanzhuang',
                        banner: '/img/nanzhuang.jpg',
                        cate: '男装',
                        dt: [
                              {
                                    thumb: '/img/nz1.jpg',
                                    name: '风衣'
                              }
                        ]
                  },
                  {
                        id: 'nvzhuang',
                        banner: '/img/nvzhuang.jpg',
                        cate: '女装',
                        dt: [
                              {
                                    thumb: '/img/nvz1.jpg',
                                    name: '连衣裙'
                              }
                        ]
                  },
            ],
            curIndex: 0,
            isScroll: false,
            toView: 'shouji'
      },
      switchTab(e) {
            const self = this;
            this.setData({
                  isScroll: true
            })
            setTimeout(function () {
                  self.setData({
                        toView: e.target.dataset.id,
                        curIndex: e.target.dataset.index
                  })
            }, 0)
            setTimeout(function () {
                  self.setData({
                        isScroll: false
                  })
            }, 1)

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