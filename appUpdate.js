Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.InitAppUpdate=InitAppUpdate;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _reactNativeDeviceInfo=require('react-native-device-info');var _reactNativeDeviceInfo2=_interopRequireDefault(_reactNativeDeviceInfo);var _reactNativeAppupdate=require('react-native-appupdate');var _reactNativeAppupdate2=_interopRequireDefault(_reactNativeAppupdate);var _appUpdateRender=require('./jsx/appUpdateRender');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function InitAppUpdate(appUpdateImg,appid,apkUrl){return function(_Component){_inherits(AppUpgradeVersion,_Component);function AppUpgradeVersion(props){_classCallCheck(this,AppUpgradeVersion);var _this=_possibleConstructorReturn(this,(AppUpgradeVersion.__proto__||Object.getPrototypeOf(AppUpgradeVersion)).call(this,props));_this.state={modalVisible:false,showLoading:false,appid:appid,apkUrl:apkUrl,lineWidth:1,version:_this.props.versionName||''};return _this;}_createClass(AppUpgradeVersion,[{key:'componentDidMount',value:function componentDidMount(){console.log(this.state.version);if(this.state.version&&this.state.version!=_reactNativeDeviceInfo2.default.getVersion()){if(_reactNativeDeviceInfo2.default.getVersion()!=this.state.version){this.setState({modalVisible:true});}else{this.setState({modalVisible:false});}}}},{key:'setModalVisible',value:function setModalVisible(visible){this.setState({modalVisible:visible});}},{key:'updateApp',value:function updateApp(){var _this2=this;console.log(this.state.apkUrl);this.setState({showLoading:true});var appUpdate=new _reactNativeAppupdate2.default({iosAppId:this.state.appid,apkVersionUrl:this.state.apkUrl,needUpdateApp:function needUpdateApp(needUpdate){needUpdate(true);},forceUpdateApp:function forceUpdateApp(){console.log("Force update will start");},notNeedUpdateApp:function notNeedUpdateApp(){console.log("App is up to date");},downloadApkStart:function downloadApkStart(){console.log("Start");},downloadApkProgress:function downloadApkProgress(progress){_this2.setState({progress:progress,lineWidth:scaleSize(progress*3)});},downloadApkEnd:function downloadApkEnd(){_this2.setState({progress:'100',lineWidth:scaleSize(300)});},onError:function onError(){console.log("downloadApkError");}});appUpdate.checkUpdate();}},{key:'render',value:function render(){return{updateRender:_appUpdateRender.updateRender};}}]);return AppUpgradeVersion;}(_react.Component);}var styles=_reactNative.StyleSheet.create({UpgradeVersion:{flex:1,top:0,left:0,backgroundColor:'rgba(0,0,0,0.4)',position:'absolute',width:deviceWidth,height:deviceHeight,zIndex:9999,justifyContent:'center',alignItems:'center'},appCodePop:{left:'50%',top:'50%',marginLeft:-scaleSize(560/2),marginTop:-scaleSize(260/2+180),width:scaleSize(560),height:scaleSize(560),backgroundColor:'#ebebeb',borderRadius:4},UpgradePic:{width:scaleSize(509),height:scaleSize(825)},updateInfo:{paddingTop:scaleSize(580),paddingHorizontal:scaleSize(80)},updateTipText:{fontSize:15,color:'#999',paddingVertical:scaleSize(4)},updateAppBtn:{marginTop:scaleSize(36),width:scaleSize(200),height:scaleSize(70),backgroundColor:'#53a7fd',justifyContent:'center',alignItems:'center'},downloadStyle:{marginTop:scaleSize(30),height:scaleSize(70),justifyContent:'center',alignItems:'center'},downloadLongWrap:{marginTop:scaleSize(20),width:scaleSize(300),height:scaleSize(20),justifyContent:'center',alignItems:'flex-start',backgroundColor:'#ebebeb'},downloadLong:{height:scaleSize(20),backgroundColor:'#53a7fd'}});