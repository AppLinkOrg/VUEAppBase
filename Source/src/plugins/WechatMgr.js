export class WechatMgr{
    static checkInstalled(callback){
        var Wechat=window.Wechat;
        if(Wechat==undefined){
            console.log("wechat is not running in website");
            callback(false);
            return;
        }
        Wechat.isInstalled(function(installed) {
            callback(true);
        }, function(reason) {
            console.log("Failed: " + reason);
            callback(false);
        });
    }
}