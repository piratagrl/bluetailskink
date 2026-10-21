function doGet() {
return HtmlService.createHtmlOutputFromFile('bluetailskink')
.setTitle('Entering the Future...')
.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
function onOpen() {
var ui = SpreadsheetApp.getUi();
ui.createMenu('🚀 Future Menu')
.addItem('Launch Wizard', 'showWebUrl')
.addToUi();
}
function openTheFutureWizard() {
    var webAppUrl = "https://script.google.com/a/macros/google.com/s/AKfycbxY3WhP8_H7RrrPRlk2-zlaWwVrR132Ec42lkBM3_FySayS157VuT9Hsv0L9zYC1nqbnw/exec"; 
  
  var html = HtmlService.createHtmlOutput(
    "<div style='text-align:center; padding-top:15px; font-family:sans-serif;'>" +
    "<p style='color:#555; font-size:14px; margin-bottom:20px;'>Your secure workstation settings require a dedicated window layer.</p>" +
    
    // NATIVE HTML FORM BUTTON CONTAINER
    "<form action='" + webAppUrl + "' target='_blank'>" +
    "<button type='submit' style='display:inline-block; width:85%; padding:14px; background:#007bff; color:white; border:none; border-radius:6px; font-weight:bold; font-size:16px; cursor:pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1);'>🚀 Click to Blast into the Future</button>" +
    "</form>" +
    
    "</div>"
  ).setWidth(400).setHeight(160);
  
  SpreadsheetApp.getUi().showModalDialog(html, 'Connection Security Initialized');
}

function saveParagraphToSheet(finalText) {
var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
sheet.appendRow([new Date(), finalText]);
return "Success";
}
