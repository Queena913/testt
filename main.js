const $ = attr => document.querySelector(attr);
const textDom = $('.text');
const cursorDom = $('.cursor');
const input = (text) => {
    const textArr = text.split('');
    let index = 0;
    const timer = setInterval(() => {
        const showText = textArr.slice(0, index).join('');
        textDom.innerHTML = showText;
        index++;
        if (index > textArr.length) clearInterval(timer);
    }, 100);
    setInterval(() => {
        if (cursorDom.style.display === 'none') {
            cursorDom.style.display = 'inline';
        } else {
            cursorDom.style.display = 'none';
        }
    }, 500);
}
input('若仍無法確認是否成功訂房請直接聯絡我們：886-4-22240888，我們將親自為您查詢');