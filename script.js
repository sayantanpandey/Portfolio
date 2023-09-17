// ================== hamburger ================
document.querySelector('.cross').style.display = 'none';
document.querySelector('.ham').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.line').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.line').style.display = 'none'
        setTimeout(()=>{
            document.querySelector('.cross').style.display = 'inline'
        },300)
    }
})
// <!--================ about tab ====================-->
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname) {
            for (tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link")
            document.getElementById(tabname).classList.add("active-tab");
        }
        // <!--================== contact form =======================-->
        // const scriptURL = 'https://script.google.com/macros/s/AKfycbxncglZp7mkV_xt3UJepsDsCRBSezPfAzBY2NO2xY5NbFrGVfBRiD7ZWbAtqIoSBx5g/exec'
        // const form = document.forms['submit-to-google-sheet']
        // const msg = document.getElementById("msg")

        // form.addEventListener('submit', e => {
        //     e.preventDefault()
        //     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        //         .then(response => {
        //             msg.innerHTML = "Message sent successfully"
        //             setTimeout(function () {
        //                 msg.innerHTML = ""
        //             }, 5000)
        //             form.reset()
        //         })

        //         .catch(error => console.error('Error!', error.message))
        // })
        // typing effect
        

        