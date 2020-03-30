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
  total[24] = json.data.at_chaeng_wattana;
  total[25] = json.data.updated_at;
  total[26] = json.data.date;  
  
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
  sheet.getRange(2,17).setValue([total[14]]); 
  sheet.getRange(2,18).setValue([total[15]]); 
  sheet.getRange(2,19).setValue([total[16]]); 
  sheet.getRange(2,20).setValue([total[24]]); 
  sheet.getRange(2,21).setValue([total[25]]); 
  sheet.getRange(2,22).setValue([total[26]]); 

}


function getFormData(e) {
  var token = "sF9nYg1cKfadquLSxrPX9wBLbz8XGTYzJjXZJkb516z";

  var spreadSheet = SpreadsheetApp.getActive();
  var sheet = spreadSheet.getActiveSheet();
  var lastColumn = sheet.getLastColumn();
  var sheetData = sheet.getSheetValues(2, 1, 1, lastColumn); 
  var currentDate = new Date(sheetData[0][20]);
  var date = currentDate.getDate();
  var month = currentDate.getMonth(); 
  var year = currentDate.getFullYear();
  var Hour = currentDate.getHours();
  var Min = currentDate.getMinutes();
  var Time =" เวลา "+ Hour + ":" + Min +":" +" น." 
    
  var thaiDateYear  = date + "/" + (month+1) + "/" + (year+543) + Time 
 
  var message = "";

    message += "ผลสถิติโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19) ประจำวันที่ "+thaiDateYear + " มีดังนี้"
         + "\n" + ""
         + "\n" + "***** ประเทศไทย *****"
         + "\n" + ""
         + "\n" + "- ผู้ติดเชื้อ "+ sheetData[0][0] + " คน" + " (รายใหม่ "+ sheetData[0][1] + " คน)" +""
         + "\n" + ""
         + "\n" + "- เฝ้าระวัง "+ sheetData[0][8] + " คน" + " (รายใหม่ "+ sheetData[0][9] + " คน)" +""
         + "\n" + ""
         + "\n" + "- เสียชีวิต "+ sheetData[0][6] + " คน" + " (รายใหม่ "+ sheetData[0][7] + " คน)" +""  
         + "\n" + ""
         + "\n" + "- รักษาอยู่ใน รพ. "+ sheetData[0][2] + " คน" +" (รายใหม่ "+ sheetData[0][3] + " คน)" +""
         + "\n" + ""
         + "\n" + "- อาการรุนแรง "+ sheetData[0][10] + " คน" +" (รายใหม่ "+ sheetData[0][11] + " คน)" +""
         + "\n" + ""
         + "\n" + "- รักษาหายแล้ว "+ sheetData[0][4] + " คน" +" (รายใหม่ "+ sheetData[0][5] + " คน)" +""
         + "\n\n" + ""
         + "\n" + "  ***** ผู้เดินทางที่คัดกรองสะสม *****"
         + "\n" + ""
         + "\n" + "- สนามบิน "+ sheetData[0][16] + " คน" +""
         + "\n" + ""
         + "\n" + "- ท่าเรือ "+ sheetData[0][17] + " คน" +""
         + "\n" + ""
         + "\n" + "- ด่านพรมแดน "+ sheetData[0][18] + " คน" +""
         + "\n" + ""
         + "\n" + "- สตม.แจ้งวัฒนะ "+ sheetData[0][19] + " คน" +""
         + "\n" + ""
         + "\n" + "     ** สำนักงาน ปภ. จังหวัดระยอง **"
         + "\n" + "ข้อมูลอ้างอิง : https://th.city/5kUcoX"
    
    
    
    
    
    "- ผู้ติดเชื้อ "+ sheetData[0][0] + " คน" + " (รายใหม่ "+ sheetData[0][1] + " คน)" +"\n\n";
            

  sendLineNotify(message, token);
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
