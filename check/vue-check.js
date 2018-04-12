import {CheckForm,Form} from "./check";
import Subscribe from './Subscribe'; //专门制定的订阅模式

function isMobile() {
  var ua = navigator.userAgent;

  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),

    isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),

    isAndroid = ua.match(/(Android)\s+([\d.]+)/)

    return isIphone || isAndroid


}

var main={};

main.install=function (_Vue) {
  var vue=_Vue;

  vue.prototype.$chek_observer=new Subscribe()
  vue.directive('checked',{
    bind:function (el, binding, vnode) {
      var vm=vnode.context;
      var rules=binding.value.rules;
      var title=binding.value.title;
      var option=new Form(rules,el,title);
      var para=document.createElement("p");
      el.vCheck=option;
      el.className='vue-check-input'
      if(isMobile){
        el.onblur=function () {

          if(this.vCheck.checkVlue()===true){
            this.style.background='none'
            try{
              this.parentNode.removeChild(para)
            }
            catch (e){

            }

          }
         else {
            para.innerHTML=this.vCheck.checkVlue()
            this.style.background='red'

            this.parentNode.appendChild(para)
          }

        }
      }

    },
  })
  vue.directive('checkFrom',{
    bind:function (el,binding,vnode) {
      var vm=vnode.context;

      var formName=binding.value;
      vm.$chek_observer.on(formName,res=>{
        let isTrue=true;
        for(let value of el.elements ){
          if(value.className =='vue-check-input'){
            if(value.vCheck.checkVlue()!==true){
              value.onblur()
              isTrue=false
            }

          }
        }
        return isTrue
      })

    }
  })
}
export default  main;
