// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:{
      username:"sunny",
      photo:"/image/picture1.jpg",
      iLike:"3",
      likeMe:"5",
    },
    list: [
      {
        id:'selfCenter',
        name:"个人中心",
        url:"/pages/selfCenter/selfCenter"
      },
      {
        id: 'edit',
        name: '编辑资料',
        url: "/pages/edit/edit"
      }, {
        id: 'identify',
        name: '身份认证',
        url: "/pages/certification/certification"
      }
    ]
  },
})