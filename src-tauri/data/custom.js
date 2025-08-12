console.log(
    '%cbuild from PakePlus： https://github.com/Sjj1024/PakePlus',
    'color:orangered;font-weight:bolder'
)

// 非阻塞自定义通知函数
function showNotice(message, delay = 0) {
  setTimeout(() => {
    const notice = document.createElement('div');
    notice.style = `
      position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
      padding: 12px 20px; background: #4CAF50; color: white; border-radius: 4px;
      z-index: 9999; box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    `;
    notice.textContent = message;
    document.body.appendChild(notice);
    setTimeout(() => notice.remove(), 15000); // 15秒后自动消失
  }, delay);
}

// 页面加载相关通知
showNotice("注册之后搜索hhj,选择传说中的管理员,获取帮助", 4000);
document.addEventListener('DOMContentLoaded', () => {
  showNotice('页面加载完成！', 500);
});


// 链接跳转控制（阻止新窗口打开）
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector('head base[target="_blank"]')
    
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        location.href = origin.href
    }
}

// 重写window.open，强制在当前窗口打开
window.open = function (url, target, features) {
    location.href = url
}

// 绑定点击事件拦截
document.addEventListener('click', hookClick, { capture: true })
