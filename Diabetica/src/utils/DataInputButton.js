export function initAllFlatpickrCalendars(options = {}) {
  document.querySelectorAll('.calendar-wrapper').forEach(wrapper => {
    const input = wrapper.querySelector('.flatpickr-input');
    const button = wrapper.querySelector('.calendar-button');

    if (!input || !button) return;

    const fp = flatpickr(input, {
      dateFormat: 'Y-m-d',
      maxDate: 'today',
      allowInput: true,
      ...options,
      onChange: function(selectedDates, dateStr, instance) {
        if (dateStr) {
          button.innerHTML = `<i class="bi bi-calendar-event"></i> ${dateStr}`;
        }

        if (typeof options.onChange === 'function') {
          options.onChange(selectedDates, dateStr, instance);
        }
      }
    });

    button.addEventListener('click', () => {
      fp.open();
    });
  });
}
