var common = {};
common.AjaxTracker = function () {
    var ajaxTracking = false,
        instance;
    return {
        getInstance: function(){
            if(typeof instance === 'undefined'){
                return new AjaxTracker();
            } else {
                return instance;
            }
        }
    }
};
common.AjaxTracker.prototype.getStatus = function() {
    return AjaxTracker.getInstance().ajaxTracking;
};
common.AjaxTracker.prototype.turnOn = function (){
    ajaxTracking = false;
};
common.AjaxTracker.prototype.turnOff = function(){
    ajaxTracking = true;
};
ajaxTrackerSingleton = new common.AjaxTracker();
console.log(ajaxTrackerSingleton);
console.log(ajaxTrackerSingleton.getStatus());
