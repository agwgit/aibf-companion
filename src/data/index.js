// Central index for all week content
// Import individual week files and combine them

import { week1 } from './weeks/week1.js';
import { week2 } from './weeks/week2.js';
import { week3 } from './weeks/week3.js';
import { week4 } from './weeks/week4.js';
import { week5 } from './weeks/week5.js';

// Import Week 0 from the main weekContent.js (keeping legacy for now)
import { weekContent as legacyWeekContent } from './weekContent.js';

// Combine modular weeks with legacy content
export const weekContent = {
  // Legacy week (keeping original Week 0)
  w0: legacyWeekContent.w0,
  
  // Modular weeks with updated PRD content
  w1: week1,
  w2: week2,
  w3: week3,
  w4: week4,
  w5: week5
};

// Export individual weeks for direct access if needed
export { week1, week2, week3, week4, week5 };

// Course structure metadata
export const courseWeeks = [
  { id: 'w0', label: 'Week 0', color: 'bg-green-100 text-green-800', number: '0' },
  { id: 'w1', label: 'Week 1', color: 'bg-blue-100 text-blue-800', number: '1' },
  { id: 'w2', label: 'Week 2', color: 'bg-purple-100 text-purple-800', number: '10' },
  { id: 'w3', label: 'Week 3', color: 'bg-orange-100 text-orange-800', number: '11' },
  { id: 'w4', label: 'Week 4', color: 'bg-red-100 text-red-800', number: '12' },
  { id: 'w5', label: 'Week 5', color: 'bg-teal-100 text-teal-800', number: '13' }
];
