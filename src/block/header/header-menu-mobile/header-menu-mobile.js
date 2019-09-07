import './header-menu-mobile.scss'

const toogleMenu = function (menu) {
  const height = menu.scrollHeight
  const width = document.documentElement.clientWidth
  menu.style.width = `${width}px`
  if (menu.style.height != `${height}px`)
    menu.style.height = `${height}px`
  else
    menu.style.height = '0'
}
const menu_icons = document.querySelectorAll('.header-menu-mobile__icon')
if (menu_icons) {
  for (const m of menu_icons) {
    m.onclick = function () {
      const menu = this.nextSibling
      toogleMenu(menu)
    }
  }
}

const sub_menu_icons = document.querySelectorAll('.header-menu-mobile__expand_more')
if (sub_menu_icons) {
  for (const m of sub_menu_icons) {
    m.onclick = function () {
      this.innerHTML = this.innerHTML === 'expand_less' ? 'expand_more': 'expand_less';
      const menu = this.parentNode.nextSibling
      toogleMenu(menu)
    }
  }
}
