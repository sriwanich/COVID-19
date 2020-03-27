function COVID() {
  
  var total =[];
  // Call the Numbers API for random math fact
  var fetchAPI = UrlFetchApp.fetch("https://data-covid-2019.herokuapp.com/api/covids/thailand_summary");
  Logger.log(fetchAPI.getContentText());
  var json = JSON.parse(fetchAPI.getContentText());
  total[1] = json.data.confirmed;
  total[2] = json.data.healings;
  total[3] = json.data.deaths;
  total[4] = json.data.recovered;
  total[5] = json.data.confirmed_add_today;
  total[6] = json.data.last_updated;
  total[7] = json.data.updated_at;
  total[8] = json.data.critical;
  total[9] = json.data.watch_out_collectors;
  total[10] = json.data.new_watch_out;
  total[11] = json.data.case_management_admit;
  total[12] = json.data.case_management_discharged;
  total[13] = json.data.case_management_observation;
  total[14] = json.data.airport;
  total[15] = json.data.sea_port;
  total[16] = json.data.ground_port; 
  total[17] = json.data.deaths_add_today;
  total[18] = json.data.healings_add_today;
  total[19] = json.data.critical_add_today;
  total[20] = json.data.recovered_add_today;
  total[21] = json.data.watch_out_collectors_add_today;
  total[22] = json.data.case_management_admit_add_today;
  total[23] = json.data.case_management_observation_add_today;
  
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange(2,1).setValue([total[1]]);
  sheet.getRange(2,2).setValue([total[5]]);  
  sheet.getRange(2,3).setValue([total[2]]);
  sheet.getRange(2,4).setValue([total[18]]);
  sheet.getRange(2,5).setValue([total[4]]);  
  sheet.getRange(2,6).setValue([total[20]]); 
  sheet.getRange(2,7).setValue([total[3]]);
  sheet.getRange(2,8).setValue([total[17]]);  
  sheet.getRange(2,9).setValue([total[9]]);   
  sheet.getRange(2,10).setValue([total[21]]);
  sheet.getRange(2,11).setValue([total[8]]);  
  sheet.getRange(2,12).setValue([total[19]]);
  sheet.getRange(2,13).setValue([total[11]]);
  sheet.getRange(2,14).setValue([total[22]]);  
  sheet.getRange(2,15).setValue([total[13]]); 
  sheet.getRange(2,16).setValue([total[23]]);
  sheet.getRange(2,17).setValue([total[7]]);  

}

function getLastData() {
   var token = "Insert Line Notify Token";
   var SpreadSheet = SpreadsheetApp.getActive();
   var sheet = SpreadSheet.getActiveSheet();
   if(sheet) {
     var lastColumn = sheet.getLastColumn();
     var lastRow = sheet.getLastRow();
     var sheetData = sheet.getSheetValues(1, 1, lastRow, lastColumn);
     var message = "\n";
     for (var i = 0 ; i < lastColumn; i++) {
     
       message += sheetData[0][i] + "：" + sheetData[lastRow-1][i] + "\n";
     }
     //Logger.log(message)
    sendLineNotify(message, token);
   } else {
     Logger.log("ข้อผิดพลาดของสเปรดชีต！");
   }  
 }
 
 function sendLineNotify(message, token){
   var options =
   {
      "method"  : "post",
      "payload" : {"message" : message},
      "headers" : {"Authorization" : "Bearer " + token}
    };
    UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
 }

