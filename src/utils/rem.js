// rem等比适配配置文件
// 基准大小
const baseSize = 10
// 设置 rem 函数
function setRem() {
  // 设置rem基准值为10px
  document.documentElement.style.fontSize = baseSize + 'px'
  // 设置body默认字体大小为16px
  document.body.style.fontSize = '16px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function() {
  setRem()
} 