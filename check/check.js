import {messges, rules} from "./validator";
class Form {
  constructor(rules, el, title) {
    this.rules=rules;
    this.el=el;
    this.title=title;
  }
  checkVlue(){
    if( document.body.contains(this.el)){
      for(let value of this.rules){

        if(!rules[value](this.el.value)){
          var title=this.title+messges[value];
          return title;
        }

      }
    }

    return true
  }
  set(){
    this.value=value;
  }

}

class CheckForm{
  constructor() {
    this.formObj={

    }
  }
  setFrom(form,option){
    if(this.formObj[form]){
      this.formObj[form].push(option)
    }
    else {
      this.formObj[form]=[];
      this.formObj[form].push(option);
    }
  }
  run(form){
    var list=this.formObj[form];
    for(let value of list){

      if(value.checkVlue()!=true){
        return value.checkVlue();
      }
    }
    return true;
  }
}
export {CheckForm,Form}
