/* ============================================================
   common.js - 全局公共脚本
   所有子页面引入后即可使用
   ============================================================ */

/* ===== 全局 Toast（子页面也可用） ===== */
function showToast(msg) {
    var toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = msg;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function () {
        toast.classList.remove('show');
    }, 2500);
}

/* ===== 开关自动绑定 ===== */
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.toggle').forEach(function (t) {
        t.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
});

/* ===== 与父页面通信（如果在 iframe 中） ===== */
function notifyParent(type, value) {
    if (window.parent && window.parent !== window) {
        window.parent.postMessage({ type: type, value: value }, '*');
    }
}

/* 子页面调用：
   notifyParent('toast', '保存成功');
   notifyParent('title', '商品管理');
*/
