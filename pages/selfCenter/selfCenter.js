// pages/selfCenter/selfCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      name: "sunny",
      city:"辽宁 大连",
      age:25,
      height:"165cm",
      major:"软件工程",
      degree:"大连理工大学",
      selfDesc:"这是个人介绍这是个人介绍这是个人介绍这是个人介绍",
      expect:"这是对另一半的期望这是对另一半的期望这是对另一半的期望这是对另一半的期望这是对另一半的期望这是对另一半的期望"
    },
    imgUrls: [
      '/image/picture1.jpg',
      '/image/picture2.jpg',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
  },
})