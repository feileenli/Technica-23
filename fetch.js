fetch('https://api.umd.io/v1/courses/list')
    .then(response => response.json())
    .then(data => {
        // Filter the courses with the "CMSC" department 
        const cmscCourses = data.filter(course => course.course_id.includes('CMSC'));

        //display the names of CMSC courses
        const cmscCoursesList = document.getElementById('cmscCourses');
        cmscCourses.forEach(course => {
            const listItem = document.createElement('li');
            listItem.textContent = course.course_id;
            cmscCoursesList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('cmscCourses').textContent = 'Error fetching data';
    });



    
