
function observe(data) {
  if (!data || typeof data !== 'object') {
    return;
  }
  // 取出所有属性遍历
  Object.keys(data).forEach(function(key) {
    if(key!='entityState'){
      defineReactive(data, key, data[key]);
    }

  });
};
function defineReactive(data, key, val) {
  observe(val); // 监听子属性
  Object.defineProperty(data, key, {
    enumerable: true, // 可枚举
//        configurable: false, // 不能再define
    get: function() {
      return val;
    },
    set: function(newVal) {
      if(data.entityState!=2){
        data.entityState=4
      }
      val = newVal;
    }
  });
}

class  Crud{
  constructor(arr){
    this.arr=arr;
    this.init()
  }
  delet(index){
    if(this.arr[index].entityState==2){
      this.arr.splice(index,1)
      return
    }
    this.arr[index].entityState=3;
  }
  add(obj){
    this.arr.push(obj);
    obj.entityState=2
    this.init()
  }
  init(){
    for(let value of this.arr){
      if( value.entityState){
        break
      }
      value.entityState=1;
    }
    this.watch()
  }
  watch(){
    for(let value of this.arr){
      observe(value)
    }
  }
}
export default Crud;
