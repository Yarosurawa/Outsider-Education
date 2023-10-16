const header = document.getElementById("header")


// -------- scrolling stuff ----------

var lScrollT = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
        const scrollTpos = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTpos > lScrollT){
            header.classList.add("reverse-downer")
        } else {
            header.classList.remove("reverse-downer")
        }

        lScrollT = scrollTpos <= 0 ? 0 : scrollTpos;
})
