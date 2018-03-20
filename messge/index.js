import messeger from './messeger.vue'

let messger={};
messger.install=function (Vue,option) {
  // if(document.getElementsByClassName('alertBox').length){
  //   return
  // }
  // if( document.body.contains){
  //   return
  // }
  let toastTpl = Vue.extend(messeger);
  let $vm = new toastTpl()
  let tpl = $vm.$mount().$el
  document.body.appendChild(tpl)
 Vue.prototype.$confirm=function (title) {
    $vm.title=title;
   $vm.value=true;
   return new Promise((res,ref)=>{
     $vm.ok=function () {
       res(true)
     }
     $vm.cancel=function () {
       res(false)
     }
   })

 }
}

export default messger
