ready();
let el_button = document.getElementById("load-more-button");
if (el_button) {
    console.log('el_button');
    document.getElementById("load-more-button").addEventListener("click", function() {
        console.log('el_button-ready');
        ready();
    })
}

let check_myStopFunction;


check_myStopFunction = setInterval(function(){
    let el = document.querySelector('.load-newer-button');
    if (el) {
        console.log('ready-true');
        load_newer_button ();
        myStopFunction();
    }
    console.log('setInterval');
}, 6000);


function myStopFunction() {
    clearInterval(check_myStopFunction);
}


function load_newer_button () {
    document.querySelector(".load-newer-button").addEventListener("click", function () {
        ready();
        console.log('click-load-newer-button');
    });
}

function ready () {
    console.log('ready-start');

    setTimeout(function() {
        console.log('ready-onload');
        let last_save = localStorage.getItem('last_link');
        console.log('last_save-' + last_save);
        let last = document.querySelector("section.job-tile");
        let last_link = last.querySelector("h4 a");
        last_link = last_link.href;
        if (!last_link) {
            console.log("last_link " + last_link);
            ready();
        }

        let all = document.querySelectorAll("section.job-tile");
        localStorage.setItem('last_link', last_link);
        let arrayLength = all.length;
        console.log('arrayLength-' + arrayLength);
        for (var i = 0; i < arrayLength; i++) {
            console.log('i-' + i);
            let arr_i_href = all[i].querySelector("h4 a").href
            if (last_save == arr_i_href) {
                let ALREADYREAD = document.getElementById("ALREADYREAD");
                if (!ALREADYREAD) {
                    console.log('last_save == arr_i_href-');
                    let set = all[i].querySelector(".job-title")
                    set.outerHTML = "<h2 id='ALREADYREAD' style=' width: 100%;  text-align: center; border-bottom: 1px solid #1d4354;  line-height: 0.1em; margin: -20px 0 50px; '>" +
                        "<span style='color: #14a800;background:#fff; padding:0 10px;'>ALREADY READ</span></h2> " + set.outerHTML;
                }
            }
        }
    }, 3000);
}

