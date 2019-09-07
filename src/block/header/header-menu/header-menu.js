import './header-menu.scss';

const toogleMenu = function (menu) {
  const height = menu.scrollHeight
  if (menu.style.height != `${height}px`)
    menu.style.height = `${height}px`
  else
    menu.style.height = '0'
}
const menu_icons = document.querySelectorAll('.header-menu__expand_more')
if (menu_icons) {
  for (const m of menu_icons) {
    m.onclick = function () {
      const menu = this.nextSibling
      this.innerHTML = this.innerHTML === 'expand_less' ? 'expand_more': 'expand_less';
      toogleMenu(menu)
    }
  }
}
