document.addEventListener('DOMContentLoaded', function () {
    const captureButton = document.getElementById('captureButton');
  
    captureButton.addEventListener('click', function () {
      // Capture the screenshot when the button is clicked.
      chrome.tabs.captureVisibleTab({ format: 'pdf' }, function (screenshotUrl) {
        // Create a new tab to display the screenshot.
        chrome.tabs.create({ url: screenshotUrl });
      });
    });
  });
  