// Content script to remove elements matching specific selectors
const selectorsToRemove = [
    "iframe[src*='ad']",
    "div[class*='ad']",
    // Add more selectors as needed
  ];
  
  selectorsToRemove.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
      element.remove();
    });
  });
  