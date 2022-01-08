let tabs = document.querySelectorAll('[data-tab-target]');
let tabContents = document.querySelectorAll('.tab-pane');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabs.forEach(tab => {
      tab.classList.remove('active');
    })
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    })
    tab.classList.add('active');
    target.classList.add('active');
  })
});