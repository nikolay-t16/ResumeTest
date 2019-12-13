import './dropdown.scss'

$(function () {
  $('.dropdown').each(function () {
    const dropdownItems = $(this).find('.dropdown__items')
    $(this).find('.dropdown__input').each(function () {
      $(this).click(function () {
        const obj = $(this)
        const isClose = obj.hasClass('dropdown_state-open')

        if (isClose) {
          obj.addClass('dropdown_state-open')
        }

        dropdownItems.slideToggle(400, () => {
          if (!isClose) {
            obj.removeClass('dropdown_state-open')
          }
        })
      })
    })
    $(this).find('.dropdown__item').each(function () {
      const value = $(this).find('.dropdown__item-control-value')
      const addBtn = $(this).find('.dropdown__item-control-add')
      const removeBtn = $(this).find('.dropdown__item-control-remove')

      addBtn.click(function () {
        value.html(+value.html() + 1)
      })

      removeBtn.click(function () {
        const val = +value.html()
        value.html(val === 0 ? 0 : val - 1)
      })
    })

  })

})
