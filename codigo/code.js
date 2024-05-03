const MONTH_CODES = ['BB', 'LS', 'JH', 'PL', 'BK', 'WH', 'FF', 'BF', 'CF', 'CK', 'CB', 'VM'];
const d = new Date();
const month = d.getMonth();
const monthCode = MONTH_CODES[month];
const randomNums = Math.floor(Math.random() * 0x15f90) + 0x2710;
window.onload = function () {
  document.getElementsByTagName("codigo")[0x0].innerHTML = monthCode + randomNums;
};