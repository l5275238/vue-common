import Subscriber from './Subscriber.js'
function observe(data,name,obj) {
  if (!data || typeof data !== 'object') {
    return;
  }
  // 取出所有属性遍历
  Object.keys(data).forEach(function(key) {
    if(key!='entityState'){
      defineReactive(data, key, data[key],name,obj);
    }

  });
};
function defineReactive(data, key, val,name,obj) {
  observe(val,name,obj); // 监听子属性
  Object.defineProperty(data, key, {
    enumerable: true, // 可枚举
//        configurable: false, // 不能再define
    get: function() {
      return val;
    },
    set: function(newVal) {
      obj.Subscriber.emit(name)
      val = newVal;
    }
  });
}

class  Crud{
  constructor(arr){
    this.arr=arr;
    this.Subscriber=new Subscriber();
    this.init();
    this.watch();

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
  }
  init(){
    for(let value of this.arr){
      if( value.entityState){
        break
      }
      value.entityState=1;
    }
  }
  watch(){
    for(let [index,item] of new Map(this.arr.map((item,i)=>[i,item])))
    {
      this.Subscriber.on(index,()=>{
       if( this.arr[index].entityState!=2){
         this.arr[index].entityState=4
       }
      })
      observe(item,index,this)
    }
  }
}
export default Crud;
