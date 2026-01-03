import * as data from "xlsx"
export function readData() {
    const file = data.readFile("C:/Users/manasc/Desktop/SprintPW/tests/Data/ExcelData.xlsx")
    const sheetName = file.SheetNames[0]
    const sheetinvalid = file.SheetNames[1]
    const sheet = file.Sheets[sheetName]
    const sheet2 = file.Sheets[sheetinvalid]
    const jsonData = data.utils.sheet_to_json(sheet)
    const jsonData2 = data.utils.sheet_to_json(sheet2)
    return [jsonData, jsonData2];
}