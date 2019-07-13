// pages/car/car.js
Page({

      /**
       * 页面的初始数据
       */
      data: {
            carts: [], // 购物车列表
            hasList: false, // 列表是否有数据
            totalPrice: 0, // 总价，初始为0
            selectAllStatus: true, // 全选状态，默认全选
            obj: {
                  name: "hello"
            }
      },

      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function(options) {

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
            var list = wx.getStorageSync('cart')
            // console.log(list)
            if(list.length > 0){
                  this.setData({
                        hasList: true,
                        carts: list
                  });
            }else{
                  this.setData({
                        hasList: false,
                  });
            }

            
            this.getTotalPrice();
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

      },
      /**
       * 当前商品选中事件
       */
      selectList(e) {
            // console.log(e.currentTarget.dataset)
            const index = e.currentTarget.dataset.index;

            let carts = this.data.carts;
            // console.log(carts[index])
            const selected = carts[index].selected;
            carts[index].selected = !selected;
            this.setData({
                  carts: carts
            });
            wx.setStorageSync('cart', carts)
            // let a = wx.getStorageSync('cart')
            // console.log(a)
            this.getTotalPrice();
      },

      /**
       * 删除购物车当前商品
       */
      deleteList(e) {
            const index = e.currentTarget.dataset.index;
            let carts = this.data.carts;
            carts.splice(index, 1);
            this.setData({
                  carts: carts
            });
            if (!carts.length) {
                  this.setData({
                        hasList: false
                  });
            } else {
                  this.getTotalPrice();
            }
            wx.setStorageSync('cart', carts)
      },

      /**
       * 购物车全选事件
       */
      selectAll(e) {
            let selectAllStatus = this.data.selectAllStatus;
            selectAllStatus = !selectAllStatus;
            let carts = this.data.carts;

            for (let i = 0; i < carts.length; i++) {
                  carts[i].selected = selectAllStatus;
            }
            this.setData({
                  selectAllStatus: selectAllStatus,
                  carts: carts
            });
            this.getTotalPrice();
            wx.setStorageSync('cart', carts)
      },

      /**
       * 绑定加数量事件
       */
      addCount(e) {
            const index = e.currentTarget.dataset.index;
            let carts = this.data.carts;
            let num = carts[index].num;
            num = num + 1;
            carts[index].num = num;
            this.setData({
                  carts: carts
            });
            this.getTotalPrice();
            wx.setStorageSync('cart', carts)
      },

      /**
       * 绑定减数量事件
       */
      minusCount(e) {
            const index = e.currentTarget.dataset.index;
            const obj = e.currentTarget.dataset.obj;
            let carts = this.data.carts;
            let num = carts[index].num;
            if (num <= 1) {
                  return false;
            }
            num = num - 1;
            carts[index].num = num;
            this.setData({
                  carts: carts
            });
            this.getTotalPrice();
            wx.setStorageSync('cart', carts)
      },

      /**
       * 计算总价
       */
      getTotalPrice() {
            let carts = this.data.carts;                  // 获取购物车列表
            let total = 0;
            for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
                  if (carts[i].selected) {                     // 判断选中才会计算价格
                        total += carts[i].num * carts[i].price;   // 所有价格加起来
                  }
            }
            this.setData({                                // 最后赋值到data中渲染到页面
                  carts: carts,
                  totalPrice: total.toFixed(2)
            });
      },
      tishi() {
            // var list = wx.getStorageSync('cart')
            let carts = this.data.carts;
            let arr = []
            let del = []
            for(let i in carts){
                  if (!carts[i].selected){
                        arr.push(carts[i])
                  }else{
                        del.push(carts[i])
                  }
            }
            // console.log(arr)
            wx.setStorageSync('cart',arr)
            // console.log(del)
            let date = JSON.stringify(del)
            // console.log(date)
            wx.navigateTo({
                  url: '../order/order?jsonStr=' + date,
            })

            // wx.showToast({
            //       title: '结算成功',
            //       icon: 'success',
            //       duration: 1000
            // })
      }
})