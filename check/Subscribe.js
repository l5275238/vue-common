class Subscribe {
  constructor() {
    this.handle = {}
  }

  on(name, listener) {
    //必须是个函数
    if (typeof listener !== 'function') {
      throw new TypeError('"listener" must be a function');
    }
    //获得订阅者信息
    let subscribe = this.handle[name];
    //订阅者不存在
    this.handle[name]=listener

  }

  emit(name, ...arg) {
    let subscribe = this.handle[name];

    //发布信息
    if(subscribe){
      return subscribe.apply(this, arg)
    }

  }


  install(Vue) {
    Vue.prototype.$chek_observer=this
  }
}
export default Subscribe
