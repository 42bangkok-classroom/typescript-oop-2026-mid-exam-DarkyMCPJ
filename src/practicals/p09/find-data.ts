function findData(fileName: string, key: string, value: string | number): void {
  
    const fs = require('fs');
    
    try {
        const data = fs.readFileSync(fileName, 'utf-8');
        const jsonData = JSON.parse(data);
    
        const results = jsonData.filter((item: any) => item[key] === value);
    
        if (results.length > 0) {
        console.log("Matching records found:");
        results.forEach((record: any) => console.log(record));
        } else {
        console.log("No matching records found.");
        }
    } catch (error) {
        console.error("Invalid JSON format");
    }

}
//test