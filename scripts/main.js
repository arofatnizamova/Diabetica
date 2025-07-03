import { renderGlucoseChart } from './glucose-timeline.js';

const labels = ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];
const data = [5.5, 7.4, 6.1, 5.8, 6.4, 8.0];

renderGlucoseChart('glucoseChart', labels, data);
