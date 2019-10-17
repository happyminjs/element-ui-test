/**
 * 暴露属性：
 *  msg
 *  time
 *  type  // type 属性待定
 * 暴露方法：
 *  endCallback
 * 调用方式：
 *  this.$toast('msg msg')
 *  this.$toast({
 *    msg:''
 *    time: 2000,
 *    type: 'success'
 *  })
 */
import Vue from 'vue';
import Main from './main.vue';
let ToastConstructor = Vue.extend(Main);
let instance;
let seed = 1;
const Toast = function(options) {
  console.log('toast test ', options);
  if (Vue.prototype.$isServer) return;
  if (typeof options === 'string') {
    options = {
      msg: options
    };
  }
  let id = 'toast_' + seed++;
  if (instance) {
    Object.assign(instance.$data, options);
  } else {
    instance = new ToastConstructor({
      data: options
    });
    instance.id = id;
    instance.$mount();
    document.body.appendChild(instance.$el);
  }
  console.log(222, instance.$data);
};
export default Toast;
