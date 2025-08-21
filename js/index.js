const project = [
    {
        "name": "Transit",
        "description": "A Site Without Flex With Flex Login",
        "address": "https://sepehr-design.github.io/transit/",
        "git": "https://github.com/sepehr-design/transit",
        "img": "./img/transit.png",
        "id": 1
    },
    {
        "name": "To Do List",
        "description": "A To Do List With Flex With DummyJson",
        "address": "https://sepehr-design.github.io/to-do-list/",
        "git": "https://github.com/sepehr-design/to-do-list",
        "img": "./img/to-do-list.png",
        "id": 2
    },
    {
        "name": "Main Page",
        "description": "A Main Page That Shows All Projects",
        "address": "https://sepehr-design.github.io/main-page/",
        "git": "https://github.com/sepehr-design/main-page",
        "img": "./img/main-page.png",
        "id": 3
    },
    {
    "name": "Coming Soon",
        "description": "New Projects Will Coming Soon",
        "address": "https://github.com/sepehr-design",
        "git": "https://github.com/sepehr-design",
        "img": "./img/coming-soon.png",
        "id": 4
    }
];//will change with json and node
function proGen(gen){
    for (let item in gen) {
        let idMaker1 = "i"+item;
        let output1 = "<li class=\"projectContainer\">";
        output1 += "<div class=\"projectImg\"></div>"
        output1 += "<div class=\"projectInfo\">"
        output1 += "<div class=\"projectTitle\">"
        output1 += "<h3>"
        output1 += gen[item].name;
        output1 += "</h3>"
        output1 += "<p>"
        output1 += gen[item].description;
        output1 += "</p>"

        output1 += "</div>"
        output1 += "<div class=\"projectAccess\">"
        output1 += "<a href=\"\" class=\"seeSite\">See The Site</a>"
        output1 += "<a href=\"\" class=\"gitSite\"><i class=\"fa-brands fa-github accGit\"></i></a>"

        output1 += "</div>"
        output1 += "</div>"

        output1 += "</li>";
        document.getElementById("projects").innerHTML += output1;
        document.getElementById("projects").children[item].children[0].id = idMaker1;

        const primaryImageUrl = gen[item].img;
        const fallbackImageUrl = 'https://sepehr-design.github.io/main-page/img/image-not-found-scaled.png';
        const img = new Image();
        img.src = primaryImageUrl;

        img.onload = () => {
            // Primary image loaded successfully
            document.getElementById(idMaker1).style.backgroundImage = `url('${primaryImageUrl}')`;
        };

        img.onerror = () => {
            // Primary image failed to load, use fallback
            document.getElementById(idMaker1).style.backgroundImage = `url('${fallbackImageUrl}')`;
        };
        document.getElementById("projects").children[item].children[1].children[1].children[0].href = gen[item].address;
        document.getElementById("projects").children[item].children[1].children[1].children[1].href = gen[item].git;
    }

}
proGen(project);
window.onload = ()=>{
    setTimeout(stop,2000)
}
function stop(){
    document.getElementById('loader').classList.remove('loader');
    document.getElementById('loader').style.display = 'none';
}




