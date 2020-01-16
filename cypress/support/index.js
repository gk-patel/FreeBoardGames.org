require('@cypress/code-coverage/support');
const { addMatchImageSnapshotCommand } = require('@duplotech/cypress-image-snapshot/command');

addMatchImageSnapshotCommand({
  failureThreshold: 0.03, // threshold for entire image
  failureThresholdType: 'percent', // percent of image or number of pixels
  customDiffConfig: { threshold: 0.1 }, // threshold for each pixel
  capture: 'viewport', // capture viewport in screenshot
  // capture: 'fullPage',
});
