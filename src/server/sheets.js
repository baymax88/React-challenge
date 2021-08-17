const placeResults = dataAndHeaders => {
  const timestamp = Date.now();
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const newSheet = activeSpreadsheet.insertSheet(
    `Query | ${timestamp.toString()}`
  );
  const outputRange = newSheet.getRange(
    `R1C1:R${dataAndHeaders.length}C${dataAndHeaders[0].length}`
  );
  outputRange.setValues(dataAndHeaders);
  newSheet.activate();
};

export default placeResults;
