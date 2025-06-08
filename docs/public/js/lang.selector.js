
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null
}


const langBtn = document.querySelector("#lang_toggle")

langBtn.addEventListener("click", function () {
    var currentLang = getCookie("lang")
    var activeLang = langBtn.getAttribute("data-activeLang")
    var altLang = langBtn.getAttribute("data-altLang")
    console.log(currentLang,activeLang,altLang)
    if(currentLang == activeLang){
        document.cookie = `lang=${altLang};path=/`
        var location = window.location.href.replace(currentLang,altLang)
        console.log(location)
        window.location.href = location
    } else {
        document.cookie = `lang=${activeLang};path=/`
        var location = window.location.href.replace(altLang,activeLang)
        window.location.href = location
        console.log(location)
    }
})