





fetch("project.json")
    .then(res => res.json())
    .then(data => {
        let output = "<ul>"
        data.map(item => {
            console.log(item);
            output += `<li>${item}</li>`;
        })
        output+="</ul>"
        console.log(output)
    }).catch(error => {
    console.error('Error fetching or parsing JSON:', error);
});
