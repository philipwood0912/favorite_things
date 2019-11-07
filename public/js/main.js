

const myVM = (() => {

    var things = document.querySelectorAll(".thing-div"),
        left = document.querySelector(".left"),
        right = document.querySelector(".right"),
        imgLink = document.querySelectorAll(".u-link");

    var counter = 0;

    function counterCheck(x) {
        counter += x;
        if(counter > 2){
            counter = 0;
        }
        if(counter < 0){
            counter = 2;
        }
    }
    function imageCheck(x) {
        let targetDiv = document.querySelector('.info-con');
        targetDiv.innerHTML = "";
        things.forEach(thing => {
            thing.classList.add("hidden");
        });
        things[x].classList.remove("hidden");
    }

    function renderPhoto(image){
        return `<div class="img-con">
                ${image.map((img, index) => `<img src="../images/${img}">`)}
                </div>`;
    }

    function renderItems(item){
        return `<ul class="item-con">
                ${item.map((itm, index) => `<li data-itemref="${index}" class="item-but">${itm}</li>`)}
                </ul>`;
                debugger;
    }

    function parseUserData(data) {
        let targetDiv = document.querySelector('.info-con');
        //loop through media stuff here
        let bioContent = `
            ${renderItems(data.Items)};
            ${renderPhoto(data.ItemImg)};
        `;
        targetDiv.innerHTML = bioContent;
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
                //data.currentSrc = currentImg;
                parseUserData(data);
                debugger;
            })
            .catch(err => {
                console.log(err);
            });
    }

    things[0].classList.remove("hidden");

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