let rules=(function () {
 var  isEmpty =function (str){

    if($.type(str)!='string') return true;
    return str.length <= 0;
  }
  //正则判定
  var _validateByReg = function (str,sRegexp){
    str = str?str.trim():'';
    if(isEmpty(str)) return true;
    if(str && (new RegExp (sRegexp) ) && (new RegExp (sRegexp)).test(str)) return true ;
    return false;
  };
    return {
      /**
       * 是否不为空
       * @param {String} str
       * @return {Boolean}
       */
      isNotEmpty :function (str){
        if(!str || $.type(str)!='string') return false;
        return str.length > 0;
      },
      /**
       * 是否为空
       * @param {String} str
       * @return {Boolean}
       */
      isEmpty:isEmpty,
      /**
       * 是否为手机号码
       * @param {String} str
       * @return {Boolean}
       */
      isTel:function (str) {
        return _validateByReg(str,/^[1][3,4,5,7,8][0-9]{9}$/)
      },
      /**
       * 邮箱校验
       * @param {String} str
       * @return {Boolean}
       */
      isEmai:function (str) {
        return _validateByReg(str,/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)
      }

    }
})()
let messges={
  isNotEmpty:'不能为空',
  isTel:"请输入正确的手机号码",
  isEmai:"请输入正确的邮箱"
}
export {messges,rules}
