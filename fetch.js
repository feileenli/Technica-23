fetch('https://api.umd.io/v1/courses')
    .then(response => response.json())
    .then(data => {
        // Process the data and insert it into the HTML
        //console.log("===>", data[0]);
        displayData(data);
    })
    .catch(error => console.error('Error:', error));

    function displayData(data) {
        const dataContainer = document.getElementById('data-container');
        // Create HTML elements and insert data
        data.forEach(course => {
             // Create a div element for each course
            const courseElement = document.createElement('div');
        
            // Populate the div with course data (adjust as needed)
            courseElement.textContent = `Course ID: ${course.course_id}, Course Name: ${course.name}`;
        
            // Append the div to the data container
            dataContainer.appendChild(courseElement);
        
        });
    }
    
