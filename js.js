window.onload = () => {
    var mList = [{
        name: "#python",
        icon: "https://source.unsplash.com/160x100/?coding,hacking",
    }, {
        name: "#javascript",
        icon: "https://source.unsplash.com/160x100/?programming,javascript",
    }, {
        name: "#java",
        icon: "https://source.unsplash.com/160x100/?programming",
    }, {
        name: "#php",
        icon: "https://source.unsplash.com/160x100/?programming,php",
    }, {
        name: "#go",
        icon: "https://source.unsplash.com/160x100/?programming,coding",
    }, {
        name: "#sql",
        icon: "https://source.unsplash.com/160x100/?programming,sql",
    }, ]
    for (var c = 0; c < mList.length; c++) {
        document.querySelector("#cards").innerHTML += `
    
            <div class="cards">
                <div class="heading">${mList[c].name}</div>
                <div id="imgs">
                <img id="image" src="${mList[c].icon}">
                </div>
                <div id="th-name">
                    <p>About course-</p>
                </div>
                <div id="th-info">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum iaculis sollicitudin. </p>
                </div>
                <div id="btn">
                    <div id="start">Start Learning</div>
                </div>
            </div>
    `
    }


}