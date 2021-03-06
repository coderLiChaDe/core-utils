import JPushModule from 'jpush-react-native';

//用户点击通知后触发
const JPushInit = (callback)=>{
  console.log('JPushUtils loading');
  JPushModule.notifyJSDidLoad((resCode)=>{
    if(resCode == 0){

    }
  })
};

//接收推送事件
const receivePush = (callback)=>{
  JPushModule.addReceiveNotificationListener((map) => {
    callback && callback();
  });
};

//点击推送事件
const tapNotice = (callback)=>{
  JPushModule.addReceiveOpenNotificationListener((map) => {
    callback && callback(map.extras);
  });
};

//接收自定义消息事件
const customMsg = (callback)=>{
  JPushModule.addReceiveCustomMsgListener((map)=>{
    callback && callback()
  });
};

//点击推送启动应用事件
const launchApp = (callback)=>{
  JPushModule.addOpenNotificationLaunchAppListener((map)=>{
    callback && callback()  ;
  })
};



const destroyAll = (callback)=>{
  //销毁接收推送事件
  JPushModule.removeReceiveNotificationListener();
  //销毁点击推送事件
  JPushModule.removeReceiveOpenNotificationListener();
  //销毁接收自定义消息事件
  JPushModule.removeReceiveCustomMsgListener();
  //销毁点击推送启动应用事件
  JPushModule.removeOpenNotificationLaunchAppEventListener();
  callback && callback()
};

export default {
  JPushInit,
  receivePush,
  tapNotice,
  customMsg,
  launchApp,
  destroyAll
}
