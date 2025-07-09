import { renderGlucoseChart } from './glucose-timeline.js';
import { updateProgressLines } from './initProgressBars.js';
import { renderCustomDateInput } from './DataInputCustom.js';
import { initFlatpickrButton } from './DataInputButton.js';
$(document).ready(function () {
    const labels = Array.from({ length: 30 }, (_, i) => i + 1);
    const seriesData = [
      {
        name: 'Частота измерений',
        data: [
          4, 6, 3, 7, 5, 8, 3, 4, 6, 7,
          5, 4, 3, 6, 8, 5, 7, 6, 4, 3,
          5, 7, 6, 4, 3, 8, 6, 5, 7, 4
        ]
      },
      {
        name: 'Средняя глюкоза',
        data: [
          4.2, 4.6, 5.0, 5.5, 6.1, 6.3, 6.8, 7.2, 6.9, 6.5,
          6.1, 5.7, 5.4, 5.1, 5.6, 6.0, 6.5, 6.9, 7.1, 6.7,
          6.3, 5.9, 5.4, 5.0, 4.8, 4.6, 4.4, 4.2, 4.0, 3.9
        ]
      }
    ];

  renderGlucoseChart('glucoseChart', labels, seriesData);
  updateProgressLines();
  renderCustomDateInput('#birthdate');
  initFlatpickrButton('#flatpickrInput', '#calendarButton');
});