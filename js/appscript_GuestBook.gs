/* This is the Google Sheets AppScript code.
   I will NOT provide the guestbook log out of respect for the users of the site! */

// get Active Sheet
const ss = SpreadsheetApp.getActiveSpreadsheet()
const sheet = ss.getSheetByName("guestbook")

// For reading the data
function readData(){
  // Read Data from guestbook worksheet
  let data = sheet.getDataRange().getValues();  
  let headers = data[0];
  let rows = data.slice(1);

  // Map rows into structured objects
  let allComments = rows.map(function(row) {
    let obj = {};
    headers.forEach(function(header, index) {
      obj[header.toString().trim()] = row[index];
    });
    return obj;
  });

  return allComments;
}

// For saving the data
function saveData(data){
  let datetime = new Date();
  let name = data.name;
  let email = data.email || "";
  let comment = data.comment;
  let approval = "Pending";
  try{
    sheet.appendRow([datetime, name, email, comment, approval]);
    return ({ status: "success", message: "Thank you! Your entry is pending approval." });
  }catch(err){
    return ({ status: "error", message: "There's an error saving your entry" });
  }
}

// For deploying the script
function doGet(e){
  let callback = e.parameter.callback;
  let responseData;

  //If data write is requested and both name and comment is present
  if (e.parameter.name && e.parameter.comment){
    let data = e.parameter;
    //save data to Sheet
    responseData = saveData(data);
  }else{
    //Read the guestbook
    responseData = readData();
  }

  if (callback) {
    var output = callback + "(" + JSON.stringify(responseData) + ");";
    return ContentService.createTextOutput(output).setMimeType(ContentService.MimeType.JAVASCRIPT);
  } else {
    return ContentService.createTextOutput(JSON.stringify(responseData)).setMimeType(ContentService.MimeType.JSON);
  }
}

/* >>>>>> END OF FILE <<<<<< */
