const refs = {
  arr: document.querySelectorAll('.myBar'),
};

const increase = () => {
  for (let item of refs.arr) {
    const percent = item.getAttribute('js-progress');
    item.style.width = percent;
  }
};

const timerId = setTimeout(increase, 1000);
