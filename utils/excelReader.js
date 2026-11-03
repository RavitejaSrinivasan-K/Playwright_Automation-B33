

import XLSX from 'xlsx'


export function getExcelData(sheetName) {
    const workBook =  XLSX.readFile("test-Data/UserData.xlsx")
    const workSheet =  workBook.Sheets[sheetName]

    return XLSX.utils.sheet_to_json(workSheet) 
}







