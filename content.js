console.log("start" );
    ready();
document.getElementById("load-more-button").addEventListener("click", function() {
        ready();
});

function ready () {
    window.onload = function() {
        console.log("ready" );
        let last_save = localStorage.getItem('last_link');

        let last = document.querySelector("section.job-tile");
        let last_link = last.querySelector("h4 a");
        last_link = last_link.href;
        console.log("last_link " +last_link);
        let all = document.querySelectorAll("section.job-tile");
        localStorage.setItem('last_link', last_link);
        let arrayLength = all.length;

        for (var i = 0; i < arrayLength; i++) {
            console.log("for " + i);
            let arr_i_href = all[i].querySelector("h4 a").href
            if (last_save == arr_i_href) {

                console.log("mark +" );
                console.log("1");
               // console.log("= " + all[i].innerHTML);

                let set = all[i].querySelector(".job-title")
                set.outerHTML = "<h2 style=' width: 100%;  text-align: center; border-bottom: 1px solid #1d4354;  line-height: 0.1em; margin: -20px 0 50px; '><span style='color: #14a800;background:#fff; padding:0 10px;'>ALREADY READ</span></h2> " + set.outerHTML;
                console.log(set);
            }

        }
    };
}

