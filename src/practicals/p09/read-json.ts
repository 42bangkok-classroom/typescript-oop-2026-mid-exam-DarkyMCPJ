function readJson(fileName: string): unknown[] {
  
    const fs = require('fs');
    try {
        const data = fs.readFileSync(fileName, 'utf-8');
        const jsonData = JSON.parse(data);
        return jsonData;
    } catch (error) {
        console.error("Invalid JSON format");
        return [];
    }

}

//test