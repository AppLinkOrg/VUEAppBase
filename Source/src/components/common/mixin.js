import {
  fileUploadAPI
} from '@/config/env'

import {
  Toast
} from 'mint-ui'

export const inputFocus = {
  directives: {
    'focus': {
      // 指令的定义
      inserted: function(el) {
        el.focus()
      }
    }
  }
}

export const _Camera = {
  methods: {
    setOptions(srcType) {
      var options = {
        quality: 100,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: srcType,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true
      }
      return options
    },
    openFilePicker(srcType, selection, cb) {
      var that = this
      var options = this.setOptions(srcType)

      if (selection == "camera-thmb") {
        options.targetHeight = 200;
        options.targetWidth = 200;
      }

      navigator.camera.getPicture(onSuccess, onFail, options)

      function onSuccess(imageURI) {
        that.uploadFile(imageURI, 'member', cb)
      }

      function onFail(message) {
        Toast({
          message: '打开图片遇到问题',
          position: 'bottom',
          duration: 3000
        })
      }
    },
    choosePictures() {
      var that = this
      ImagePicker.getPictures(function(result) {
        console.log(result)
        result.forEach(item => {
          that.dealFiles('fill://' + item)
        })

      }, function(err) {
        console.log(err)
      }, {
        maximumImagesCount: 9,
        width: 720,
        height: 1080,
        quality: 100
      })
    },
    dealFiles(imageURI) {
      console.log(imageURI)
      window.resolveLocalFileSystemURL(imageURI, successCallback, errorCallback)

      function successCallback(fileEntry) {
        console.log('fileEntry', fileEntry)
      }

      function errorCallback(error) {
        console.log('error', error)
      }
      // var imgData = new FormData()
      // window.resolveLocalFileSystemURL(imageAry, function(fileEntry) {
      //   console.log('第一部：------', fileEntry)
      //   console.log('file system open: ' + fileEntry.name)
      //   fileEntry.file(file => {
      //     console.log('第二部：------')
      //     var reader = new FileReader()
      //     reader.onloadend = e => {
      //       const the_file = new Blob([e.target.result], {
      //         type: file.type
      //       })
      //       console.log('第三部：------', the_file)
      //       imgData.append("files" + key, the_file, file.name)
      //       console.log('已经成功一半了.................' + imgData)
      //     }
      //     reader.readAsArrayBuffer(file)
      //   }, err => {
      //     console.log('哔了狗-----失败' + err)
      //   })
      // })
    },
    uploadFile(imageURI, module, cb) {
      var win = function(r) {
        let photo = r.response.toString().split("|~~|")[1]
        cb && cb(photo)
        Toast({
          message: '设置头像成功',
          position: 'center',
          duration: 3000
        })
      }

      var fail = function(error) {
        Toast({
          message: '上传头像失败，请确保网络正常后再试',
          position: 'bottom',
          duration: 3000
        })
      }

      var options = new FileUploadOptions()

      options.fileKey = "img"

      var fileTransfer = new FileTransfer()

      // fileTransfer.onprogress = function(progressEvent) {
      //   if (progressEvent.lengthComputable) {
      //     console.log("开始:", progressEvent.loaded / progressEvent.total)
      //     // loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total)
      //   } else {
      //     console.log("结束:", progressEvent.loaded / progressEvent.total)
      //     // loadingStatus.increment()
      //   }
      // }

      fileTransfer.upload(
        imageURI,
        encodeURI(fileUploadAPI + "?field=img&module=" + module),
        win,
        fail,
        options)
    }
  }
}