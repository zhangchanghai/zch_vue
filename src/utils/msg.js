import { ElMessage,ElMessageBox } from 'element-plus'
const error = (msg) => {
  ElMessage({
    message: msg,
    type: 'error'
  });
};
const warning = (msg) => {
  ElMessage({
    message: msg,
    type: 'warning'
  });
};
const success = (msg) => {
  ElMessage({
    message: msg,
    type: 'success'
  });
};
const info = (msg, f1, f2) => {
  if (!msg) return;
  if (!f1) {
    ElMessage({
      message: msg
    });
    return;
  }
  if(f1 === 1){
    success(msg);
    return;
  }
  if(f1 === 2){
    error(msg);
    return;
  }
  if(f1 === 3){
    warning(msg);
    return;
  }
  if (typeof f1 == 'function' && typeof f2 == 'function') {
    ElMessageBox.confirm(msg, '确认信息', {
      distinguishCancelAndClose: true,
      confirmButtonText: '确认',
      cancelButtonText: '取消'
    })
      .then(() => {
        f1();
      })
      .catch(() => {
        f2();
      });
    return;
  }
  if (typeof f1 == 'function' && !f2) {
    ElMessageBox.alert(msg, '提示信息', {
      confirmButtonText: '确定',
      callback: () => {
       f1();
      }
    });
    return;
  }
};

export default {
  info,error,warning,success
}

