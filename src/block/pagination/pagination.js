import './pagination.scss';
import 'paginationjs/src/pagination';

$(() => {
  $('.pagination__pages').each(function () {
    const pagesCount = 180;
    const pageSize = 12;
    const pageRange = 1;
    const nextText = '<i class="material-icons">arrow_forward</i>';
    const prevText = '<i class="material-icons">arrow_back</i>';
    const dataSource = [];
    dataSource[pagesCount - 1] = 1;
    const formatNavigator =  (currentPage, totalPage, totalNumber) => {
      const itemFrom = 1 + (currentPage - 1) * pageSize;
      const itemTo = currentPage * pageSize;
      const totalItems = totalNumber < 101 ? totalNumber : '100+';
      return `${itemFrom} – ${itemTo} из ${totalItems} вариантов аренды`;
    };
    $(this).pagination({
      dataSource,
      pageSize,
      pageRange,
      nextText,
      prevText,
      formatNavigator,
      showNavigator: true,
      autoHidePrevious: true,
      autoHideNext: true,
    })
  });

})
