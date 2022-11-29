let cookie = document.getElementById("cookie");
let points = document.getElementById("points");
let power_click = document.getElementById("power_click");
let auto_click = document.getElementById("auto_click");
let ajoute_points = document.getElementById("ajoute_points");

let prix_pc = document.getElementById("pc_prix");
let prix_ac = document.getElementById("ac_prix");
let prix_ap = document.getElementById("ap_prix");

let nbr_cookie = 3000;
let num = 1;
let auto_click_time = 0;
let interv = 1;
let nbr_pc = 10;
let nbr_ac = 100;
let nbr_ap = 1000;
let active = true;

points.innerText = nbr_cookie + " points";
prix_pc.innerText = nbr_pc + " points";
prix_ac.innerText = nbr_ac + " points";
prix_ap.innerText = nbr_ap + " points";

cookie.addEventListener("click", () => {
    nbr_cookie += num;
    points.innerText = nbr_cookie + " points";

    let cookie_down = setInterval(() => {
        if (cookie.classList == "cookie_up") {
            cookie.classList.remove("cookie_up");
            cookie.classList.add("cookie_down");
        } else {
            cookie.classList.remove("cookie_down");
            cookie.classList.add("cookie_up");
            clearInterval(cookie_down);
        }
    }, 50);
});

power_click.addEventListener("click", () => {
    if (nbr_cookie >= nbr_pc) {
        nbr_cookie -= nbr_pc;
        nbr_pc += 10;
        num += 1;
        points.innerText = nbr_cookie + " points";
        prix_pc.innerText = nbr_pc + " points";
    }
});

auto_click.addEventListener("click", () => {
    if (nbr_cookie >= nbr_ac) {
        nbr_cookie -= nbr_ac;
        nbr_ac += 50;

        if (active) {
            active = false;
            setInterval(() => {
                interv += auto_click_time;
                inter(interv);
            }, 16);
        }
        auto_click_time ++;

        points.innerText = nbr_cookie + " points";
        prix_ac.innerText = nbr_ac + " points";
    }
});

ajoute_points.addEventListener("click", () => {
    if (nbr_cookie >= nbr_ap) {
        nbr_cookie -= nbr_ap;
        nbr_ap = "done";


        setInterval(() => {
            nbr_cookie += num;
            points.innerText = nbr_cookie + " points";
        }, 1000);

        points.innerText = nbr_cookie + " points";
        prix_ap.innerText = nbr_ap;
    }
});

function inter (time) {
    if (time > 60) {
        interv = 0;
        nbr_cookie += num;
        points.innerText = nbr_cookie + " points";
        if (cookie.classList == "cookie_up") {
            cookie.classList.remove("cookie_up");
            cookie.classList.add("cookie_down");
        } else {
            cookie.classList.remove("cookie_down");
            cookie.classList.add("cookie_up");
            clearInterval(cookie_down);
        }
    }
}