// pages/edit/edit.js
const sourceType = [['camera'], ['album'], ['camera', 'album']]
const sizeType = [['compressed'], ['original'], ['compressed', 'original']]

Page({
  onShareAppMessage() {
    return {
      title: '图片',
      path: 'page/API/pages/image/image'
    }
  },

  data: {
    imageList: [],
    sourceTypeIndex: 2,
    sourceType: ['拍照', '相册', '拍照或相册'],

    sizeTypeIndex: 2,
    sizeType: ['压缩', '原图', '压缩或原图'],

    countIndex: 8,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  chooseImage() {
    const that = this
    wx.chooseImage({
      sourceType: sourceType[this.data.sourceTypeIndex],
      sizeType: sizeType[this.data.sizeTypeIndex],
      count: this.data.count[this.data.countIndex],
      success(res) {
        console.log(res)
        that.setData({
          imageList: res.tempFilePaths
        })
      }
    })
  },
  previewImage(e) {
    const current = e.target.dataset.src
    wx.previewImage({
      current,
      urls: this.data.imageList
    })
  }
})






// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     focus: false,
//     inputValue: '',
//     tempFilePaths: '', 
//   },
//   /** 
//      * 上传图片
//      */
//   chooseimage: function () {
//     var _this = this;
//     wx.chooseImage({
//       count: 1, // 默认9  
//       // 可以指定是原图还是压缩图，默认二者都有  
//       sizeType: ['original', 'compressed'],
//       // 可以指定来源是相册还是相机，默认二者都有
//       sourceType: ['album', 'camera'],
//       // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片   
//       success: function (res) {
//         _this.setData({
//           tempFilePaths: res.tempFilePaths
//         })
//       }
//     })
//   },
// })