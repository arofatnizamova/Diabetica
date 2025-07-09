// calendar-picker.js
export function initFlatpickrButton(inputSelector, buttonSelector, options = {}) {
  const input = document.querySelector(inputSelector);
  const button = document.querySelector(buttonSelector);

  if (!input || !button) return;

  const fp = flatpickr(input, {
    dateFormat: "m-d",
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
}