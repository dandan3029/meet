// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/image/1.jpg',
      '/image/2.jpg',
      '/image/3.jpg',
      '/image/4.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular:true,
    proList:[
      {
        picture:"/image/picture1.jpg",
        school:"大连理工大学",
        height:"160cm",
        area:"辽宁省大连市",
        desc:"我性格活泼开朗，爱好打网球，\n有兴趣的小伙伴可以一起哟！"
      },
      {
        picture:"/image/picture2.jpg",
        school:"华中农业大学",
        height:"165cm",
        area:"河南省鹤壁市",
        desc:"我性格比较安静，喜欢读书写字，\n喜欢广交朋友！"
      }
    ]
  },
  toDetail:function(e){
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
    var proList = this.data.proList;
    var school = proList[index].school;
    wx.setStorageSync("school", school)
    wx.navigateTo({
      url: '/pages/selfCenter/selfCenter' //通过url进行传值（方法一）
    })

  },
  toLike:function(){
    console.log("like him")
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