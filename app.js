
// -------- header stuff ----------

const header = document.getElementById("header")
const headerHint = document.getElementById('header-hint')
const hurtok = document.getElementById('main-h1-container')

window.addEventListener("mousemove", (e)=>{
    if (e.clientY < 80) {
        header.classList.remove("reverse-downer")
        hurtok.classList.add('un-upper-decker')
    } else {
        hurtok.classList.remove('un-upper-decker')
        header.classList.add('reverse-downer')
    }
    f = 1/(e.clientY+80) * 2000
    headerHint.style.opacity = f.toString() + "%";
})

// -------- article stuff ----------

const svg1 = document.getElementById('svgN1')
const svg2 = document.getElementById('svgN2')
const svg3 = document.getElementById('svgN3')
const svg4 = document.getElementById('svgN4')
var currentArticlePage = 1;

svg1.onclick = ()=> articleSwitch(1)
svg2.onclick = ()=> articleSwitch(2)
svg3.onclick = ()=> articleSwitch(3)
svg4.onclick = ()=> articleSwitch(4)

const lArr = document.getElementById('lScroll')
const rArr = document.getElementById('rScroll')

lArr.onclick =()=>{ if (currentArticlePage > 1) articleSwitch(currentArticlePage -= 1)}
rArr.onclick =()=>{ if (currentArticlePage < 4) articleSwitch(currentArticlePage += 1)}

const article1 = document.getElementById('article1')
const article2 = document.getElementById('article2')
const article3 = document.getElementById('article3')
const article4 = document.getElementById('article4')

function articleSwitch(data) {
    currentArticlePage = data
    console.log(data);
    if (currentArticlePage === 1) {
        svg1.firstChild.setAttribute("fill", "white")
        svg2.firstChild.setAttribute("fill", "none")
        svg3.firstChild.setAttribute("fill", "none")
        svg4.firstChild.setAttribute("fill", "none")
        article1.style.transform = "translateX(0)"
        article2.style.transform = "translateX(100vw)"
        article3.style.transform = "translateX(200vw)"
        article4.style.transform = "translateX(300vw)"
        article1.style.filter = "blur(0)"
        article2.style.filter = "blur(100px)"
        article3.style.filter = "blur(100px)"
        article4.style.filter = "blur(100px)"
        article1.style.zIndex = 4
        article2.style.zIndex = 3
        article3.style.zIndex = 3
        article4.style.zIndex = 3
    } else if (currentArticlePage === 2) {
        svg1.firstChild.setAttribute("fill", "none")
        svg2.firstChild.setAttribute("fill", "white")
        svg3.firstChild.setAttribute("fill", "none")
        svg4.firstChild.setAttribute("fill", "none")
        article1.style.transform = "translateX(-100vw)"
        article2.style.transform = "translateX(0)"
        article3.style.transform = "translateX(100vw)"
        article4.style.transform = "translateX(200vw)"
        article1.style.filter = "blur(100px)"
        article2.style.filter = "blur(0px)"
        article3.style.filter = "blur(100px)"
        article4.style.filter = "blur(100px)"
        article1.style.zIndex = 3
        article2.style.zIndex = 4
        article3.style.zIndex = 3
        article4.style.zIndex = 3
    } else if (currentArticlePage === 3) {
        svg1.firstChild.setAttribute("fill", "none")
        svg2.firstChild.setAttribute("fill", "none")
        svg3.firstChild.setAttribute("fill", "white")
        svg4.firstChild.setAttribute("fill", "none")
        article1.style.transform = "translateX(-200vw)"
        article2.style.transform = "translateX(-100vw)"
        article3.style.transform = "translateX(0)"
        article4.style.transform = "translateX(100vw)"
        article1.style.filter = "blur(100px)"
        article2.style.filter = "blur(100px)"
        article3.style.filter = "blur(0)"
        article4.style.filter = "blur(100px)"
        article1.style.zIndex = 3
        article2.style.zIndex = 3
        article3.style.zIndex = 4
        article2.style.zIndex = 3
    } else if (currentArticlePage === 4) {
        svg1.firstChild.setAttribute("fill", "none")
        svg2.firstChild.setAttribute("fill", "none")
        svg3.firstChild.setAttribute("fill", "none")
        svg4.firstChild.setAttribute("fill", "white")
        article1.style.transform = "translateX(-300vw)"
        article2.style.transform = "translateX(-200vw)"
        article3.style.transform = "translateX(-100vw)"
        article4.style.transform = "translateX(0)"
        article1.style.filter = "blur(100px)"
        article2.style.filter = "blur(100px)"
        article3.style.filter = "blur(100px)"
        article4.style.filter = "blur(0)"
        article1.style.zIndex = 3
        article2.style.zIndex = 3
        article3.style.zIndex = 3
        article4.style.zIndex = 4
    }
}