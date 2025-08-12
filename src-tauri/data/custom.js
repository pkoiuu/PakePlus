console.log(
    '%cbuild from PakePlus： https://github.com/Sjj1024/PakePlus',
    'color:orangered;font-weight:bolder'
)
// 替换为非阻塞的自定义弹窗
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
    setTimeout(() => notice.remove(), 3000); // 3秒后自动消失
  }, delay);
}

// 页面加载后显示通知（非阻塞）
showNotice("这是一个提醒通知！", 1000); // 延迟1秒显示
document.addEventListener('DOMContentLoaded', () => {
  showNotice('页面加载完成！', 500); // 延迟0.5秒显示
});
// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })
