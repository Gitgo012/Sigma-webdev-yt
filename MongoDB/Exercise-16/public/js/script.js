const mongoose=require("mongoose")
const { generateData } =require("./generateData");
let a = mongoose.connect("mongodb://localhost:27017/");


async function addData() {
    try {
        const response = await fetch('/addData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: "Yash",
                salary: 100000,
                language: "Hindi",
                city: "Vadodara",
                isManager: false
            })
        });
  
        const result = await response.json();
        if (response.ok) {
            alert('Data added successfully: ' + JSON.stringify(result));
        } else {
            alert('Failed to add data: ' + result.error);
        }
    } catch (error) {
        console.error('Error while adding data:', error);
        alert('Failed to add data.');
    }
  }
  