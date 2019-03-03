export class CameraMgr {
  static getPicture(onSuccess, onFail) {
    navigator.camera.getPicture(onSuccess, onFail, {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY)
    });
  }
}
