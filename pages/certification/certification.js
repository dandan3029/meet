// pages/certification/certification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus: false,
    inputValue: '',
    tempFilePaths1:'',
    tempFilePaths2:'',
    tempFilePaths3:'',
  },
   /** 
     * 上传身份证正面
     */
  chooseimage1: function () {
    var _this = this;
    var uploadList = this.data.uploadList;
    wx.chooseImage({
      count: 1, // 默认9  
      // 可以指定是原图还是压缩图，默认二者都有  
      sizeType: ['original', 'compressed'],
      // 可以指定来源是相册还是相机，默认二者都有
      sourceType: ['album', 'camera'],
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片   
      success: function (res) {
        _this.setData({
            // uploadList[index].tempFilePaths: res.tempFilePaths
            tempFilePaths1:res.tempFilePaths
          })
      }
    })
  },
    /** 
       * 上传毕业证
       */
    chooseimage2: function () {
      var _this = this;
      wx.chooseImage({
        count: 1, // 默认9  
        // 可以指定是原图还是压缩图，默认二者都有  
        sizeType: ['original', 'compressed'],
        // 可以指定来源是相册还是相机，默认二者都有
        sourceType: ['album', 'camera'],
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片   
        success: function (res) {
          _this.setData({
            tempFilePaths2: res.tempFilePaths
          })
        }
      })
    },
    /** 
     * 上传录用截图
     */
    chooseimage3: function () {
      var _this = this;
      wx.chooseImage({
        count: 1, // 默认9  
        // 可以指定是原图还是压缩图，默认二者都有  
        sizeType: ['original', 'compressed'],
        // 可以指定来源是相册还是相机，默认二者都有
        sourceType: ['album', 'camera'],
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片   
        success: function (res) {
          _this.setData({
            tempFilePaths3: res.tempFilePaths
          })
        }
      })
    }
})