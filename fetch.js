fetch('https://api.umd.io/v1/courses')
    .then(response => response.json())
    .then(data => {
        // Process the data and insert it into the HTML
        //console.log("DATAAAA:", data[0]);
        displayData(data);
    })
    .catch(error => console.error('Error:', error));

    function displayData(data) {
        const dataContainer = document.getElementById('data-container');
        // Create HTML elements and insert data
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = "*"; // Adjust this to match your data structure
            dataContainer.appendChild(itemElement);
            console.log("course id:", data);
        });
    }
    
