function display(id){
    // document.getElementsByClassName("right-con").classList.add("active-none")
    // document.getElementById("home-con").classList.remove("active-none");
    const content = document.getElementsByClassName("right-con");
    for (let i = 0; i < content.length; i++) {
        if (!content[i].classList.contains("active-none")) content[i].classList.add("active-none");
    }
    const head = document.getElementsByClassName("con");
    for (let i = 0; i < head.length; i++) {
        if (head[i].classList.contains("active-head")) head[i].classList.remove("active-head");
    }
    if (id==='home') {
        document.getElementById("home-con").classList.remove("active-none");
        document.getElementById("home").classList.add("active-head");

    }
    if (id==='nav') {
        document.getElementById("nav-con").classList.remove("active-none");
        document.getElementById("nav").classList.add("active-head");
    }
    if (id==='feed') {
        document.getElementById("feedback-con").classList.remove("active-none");
        document.getElementById("feedback").classList.add("active-head");
    }
    if (id==='cont') {
        document.getElementById("content-con").classList.remove("active-none");
        document.getElementById("content").classList.add("active-head");
    }
    
}