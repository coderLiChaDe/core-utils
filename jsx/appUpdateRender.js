export function updateRender(){
  return(
      <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.modalVisible}
      >
        <View style={styles.UpgradeVersion}>
          <ImageBackground source={appUpdateImg} style={styles.UpgradePic} >
            <View style={styles.updateInfo}>
              <Text style={styles.updateTipText}>立即升级!</Text>
              <Text style={styles.updateTipText}>系统更新至 {this.state.version||'2.0.1'} 版本</Text>
            </View>
            <View style={{alignItems:'center'}}>
              {
                this.state.showLoading == false ?
                    <TouchableOpacity activeOpacity={0.7} style={styles.updateAppBtn} onPress={()=>{this.updateApp()}}>
                      <Text style={{color:'#fff'}}>立即升级</Text>
                    </TouchableOpacity>
                    :
                    <View style={styles.downloadStyle} >
                      <Text style={{fontSize:12}}>APP下载{this.state.progress}%...</Text>
                      <View style={styles.downloadLongWrap}>
                        <View style={[styles.downloadLong,{width:this.state.lineWidth}]}></View>
                      </View>
                    </View>
              }
            </View>
          </ImageBackground>
        </View>
      </Modal>
  )
}
