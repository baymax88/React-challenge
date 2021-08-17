export const onOpen = () => {
  const menu = SpreadsheetApp.getUi()
    .createMenu('Aleph')
    .addItem('Launch Aleph', 'openAleph');

  menu.addToUi();
};

export const openAleph = () => {
  const html = HtmlService.createHtmlOutputFromFile('sidebar');
  SpreadsheetApp.getUi().showSidebar(html);
};
