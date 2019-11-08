

const myVM = (() => {

    var things = document.querySelectorAll(".thing-div"),
        left = document.querySelector(".left"),
        right = document.querySelector(".right"),
        imgLink = document.querySelectorAll(".u-link"),
        buttons = document.querySelectorAll(".button"),
        infoCon = document.querySelector(".info-con"),
        lightBox = document.querySelector(".lightbox"),
        close = document.querySelector(".close"),
        svgRight = document.getElementById("right"),
        svgLeft = document.getElementById("left");

    var counter = 0;

    //counter function

    function counterCheck(x) {
        counter += x;
        if(counter > 2){
            counter = 0;
        }
        if(counter < 0){
            counter = 2;
        }
    }

    //function controlling images

    function imageCheck(x) {
        infoCon.innerHTML = "";
        things.forEach(thing => {
            thing.classList.add("hidden");
        });
        things[x].classList.remove("hidden");
        for(i=0; i<buttons.length; i++){
            buttons[i].style.background = '#FFFFFF';
        }
        buttons[x].style.background = "#c1272d";
    }

    // render images

    function renderPhoto(image){
        return `<div class="img-con">
                ${image.map(img => `<img class="sub-photo hidden" src="../images/${img}" alt="image">`).join("")}
                </div>`
    }

    // render item links

    function renderItems(item){
        return `<ul class="item-con">
                ${item.map((itm, index) => `<li data-itemref="${index}" id="link${index}" class="item-but">${itm}</li>`).join("")}
                </ul>`
                //debugger;
    }

    //parse data

    function parseUserData(data) {
        let lightboxCon = document.querySelector('.lb-content');
        let bioContent = `
            ${renderItems(data.Items)}
            <div class="wrapper">
                ${renderPhoto(data.ItemImg)}
            <p class="info">${data.Info}</p>
            </div>
        `;
        lightBox.classList.add("show-lb");
        lightboxCon.innerHTML = bioContent;

        let images = document.querySelectorAll(".sub-photo");
        images[0].classList.remove("hidden");
        debugger;
    }

    // get things data with an event / fetch
    function getUserData(event) {
        event.preventDefault();
        let url = `/${this.getAttribute('href')}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                parseUserData(data);
                //debugger;
            })
            .catch(err => {
                console.log(err);
            });
    }

    //buttons controlling images

    buttons.forEach(button => {
        button.addEventListener("click", function(e) {
            infoCon.innerHTML = "";
            for(i=0; i<things.length; i++){
                things[i].classList.add("hidden");
                buttons[i].style.background = "#FFFFFF";
            }
            things[button.dataset.buttonref].classList.remove("hidden");
            e.target.style.background = "#c1272d";
        });
    });

    //click events added for new document elements

    document.addEventListener("click", function(e) {
        if((e.target.id == "link0") || (e.target.id == "link1")){
            console.log("click");
            let images = document.querySelectorAll(".sub-photo");
            for(i=0; i<images.length; i++){
                images[i].classList.add("hidden");
            }
            images[e.target.dataset.itemref].classList.remove("hidden");
            debugger;
        }
    });

    document.addEventListener("click", function(e) {
        if(e.target.id == "link2"){
            lightBox.classList.remove("show-lb");
        }
    });

    things[0].classList.remove("hidden");
    buttons[0].style.background = '#c1272d';

    //svg links / events

    window.addEventListener("load", function(e){
        var svgRightArrow = svgRight.contentDocument.querySelector("#arrow");
        var svgLeftArrow = svgLeft.contentDocument.querySelector("#arrow");
        right.addEventListener("mouseover", function(e){
            svgRightArrow.style.fill = "#c1272d";
            right.addEventListener("mouseleave", function(e){
                svgRightArrow.style.fill = "#FFFFFF";
            });
        });
        left.addEventListener("mouseover", function(e){
            svgLeftArrow.style.fill = "#c1272d";
            left.addEventListener("mouseleave", function(e){
                svgLeftArrow.style.fill = "#FFFFFF";
            });
        });
        debugger;
    });

    //events

    imgLink.forEach(ulink => {
        ulink.addEventListener("click", getUserData);
    });

    left.addEventListener("click", function(e) {
        counterCheck(-1);
        imageCheck(counter);
        console.log(counter);
    });
    right.addEventListener("click", function(e) {
        counterCheck(1);
        imageCheck(counter);
        console.log(counter);
    });
})();