let clickCount = 0;
let clickCount1 = 0;
let clickCount2 = 0;
let clickCount3 = 0;
let clickCount4 = 0;
let clickCount5 = 0;
let yesclick = 0;
    const button = document.getElementById("no_button");
    const yesbtn = document.getElementById("yes_button");
    const popupContainer = document.getElementById("popupContainer");
    const arrow = document.getElementById("arrow");
    const c1 = document.getElementById("crying1");
    const c2 = document.getElementById("crying2");
    const c3 = document.getElementById("crying3");
    const c4 = document.getElementById("crying4");
    const first = document.getElementById("firstform");
    const yes = document.getElementById("yesform");

    button.addEventListener("click", function() {
        clickCount++;

        if (clickCount === 1) {
            popupContainer.style.display = "flex";

            setTimeout(function() {
                popupContainer.style.display = "none";
                 clickCount = 0;
            }, 1500);
        }
    });

    button.addEventListener("click", function() {
        clickCount1++;

        if (clickCount1 === 1) {
            c1.style.display = "flex";
        }
    });

    button.addEventListener("click", function() {
        clickCount2++;

        if (clickCount2 === 2) {
            c2.style.display = "flex";
        }
    });

    button.addEventListener("click", function() {
        clickCount3++;

        if (clickCount3 === 3) {
            c3.style.display = "flex";
        }
    });

    button.addEventListener("click", function() {
        clickCount4++;

        if (clickCount4 === 4) {
            c4.style.display = "flex";
        }
    });

    button.addEventListener("click", function() {
        clickCount5++;

        if (clickCount5 === 5) {
            button.style.display = "none";
            arrow.style.display = "flex";
        }
    });

    yesbtn.addEventListener("click", function() {
        yesclick++;

        if (yesclick === 1) {
            yes.style.display = "flex";
            first.style.display = "none";
        }
    });