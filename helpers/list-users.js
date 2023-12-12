const fs = require('fs');
const xlsx = require('xlsx');

const listEmails = () => {
    const filePath = './Correos_Activos.xlsx';
    const sheetName = 'correos';
    const columnName = 'A';
    const workbook = xlsx.readFile(filePath);
    const sheet = workbook.Sheets[sheetName];
    const columnData = [];

    for (const cell in sheet) {
        if (cell.startsWith(columnName) && sheet.hasOwnProperty(cell)) {
          // Extraer el valor de la celda y agregarlo al arreglo
          columnData.push(sheet[cell].v);
        }
      }
      console.log(columnData);
    return columnData;
}

module.exports = {
    listEmails
}