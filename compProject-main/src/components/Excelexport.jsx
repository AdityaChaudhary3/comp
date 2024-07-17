// This component is used to export the data in the form of excel sheet.
// But does nothing in the code. code is dirctly used in the section where it has to be used.
// This file is for refrence or future use. can be refactor and used in the future. As a sperate component to provide the functionality of exporting the data in the form of excel sheet.



// import React from 'react'

// import { Button } from '@chakra-ui/react';
// import * as XLSX from 'xlsx';
// import { saveAs } from 'file-saver';



// function Excelexport() {

//   const data = [
//     { name: "John", email: "john@example.com", age: 28 },
//     { name: "Jane", email: "jane@example.com", age: 32 }
//   ];

//     const exportToExcel = () => {

//         const worksheet = XLSX.utils.json_to_sheet(data);
//         const workbook = XLSX.utils.book_new();
//         XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

//         // Buffer to store the generated Excel file
//         const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
//         const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });

//         saveAs(blob, "exportedData.xlsx");

//     }

//   return (
//     <Button onClick={exportToExcel} 
//     style={{ cursor: 'pointer', color: 'blue', fontSize: '16px'}}
//     >Excel Export</Button>
//   )
// }

// export default Excelexport