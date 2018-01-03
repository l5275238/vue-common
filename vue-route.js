function createView (key) {
  return function (resolve) {
    require(['@/components/views/' + key], resolve)
  }
}
function load (url,component) {//按需加载组件
  let _router=url||'components';
  return () => System.import(`../${_router}/${component}`)


}