export function updateProgressLines() {
  $('.card-progress').each(function () {
    const percent = $(this).find('[data-percent]').data('percent');
    $(this).find('.progress-line-inside').css('width', percent + '%');
  });
}