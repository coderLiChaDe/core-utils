import JPushModule from 'jpush-react-native';

//初始化
const JPushInit = (callback)=>{
  JPushModule.setupPush();
  JPushModule.setBadge(0,() => {

  });
  callback && callback();
};


//接收推送事件
const receivePush = (callback)=>{
  JPushModule.addReceiveNotificationListener((map) => {
    console.log(JSON.stringify(map));
    callback && callback(JSON.stringify(map));
  });
};

//点击推送事件
const tapNotice = (callback)=>{
  JPushModule.addReceiveOpenNotificationListener((map) => {
    callback && callback(JSON.stringify(map));
  });
};

//接收自定义消息事件
const customMsg = (callback)=>{
  JPushModule.addReceiveCustomMsgListener((map)=>{
    console.log('用户自定义事件');
    console.log(JSON.stringify(map));
    callback && callback(JSON.stringify(map))
  });
};

//点击推送启动应用事件
const launchApp = (callback)=>{
  JPushModule.addOpenNotificationLaunchAppListener((map)=>{
    console.log('启动事件');
    console.log(JSON.stringify(map));
    callback && callback(JSON.stringify(map))  ;
  })
};

export default {
  JPushInit,
  receivePush,
  tapNotice,
  customMsg,
  launchApp
}