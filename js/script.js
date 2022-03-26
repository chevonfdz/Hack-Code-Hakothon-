const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", scroll);

function scroll()
{
    if(window.pageYOffset > 300)
    {
        if (!backToTop.classList.contains("btnEntrance"))
        {
            backToTop.classList.remove("btnExit");
            backToTop.classList.add("btnEntrance");
            backToTop.style.display = "block";
        }

    }else
    {
        if (backToTop.classList.contains("btnEntrance"))
        {
            backToTop.classList.remove("btnEntrance");
            backToTop.classList.add("btnExit");

            setTimeout(function(){
                backToTop.style.display = "none";
            },250);
        }
    }
}

backToTop.addEventListener("click", toTop);


function toTop(){
    window.scrollTo(0,0);
}


function validateMail()
{
    const email = document.getElementById('email').value;
    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(mailFormat))
    {
        alert("Successfully Subscribed Our Newsletters.");
        return true;
    }else
    {
        alert("*Please Enter a Valid Email Address.");
        return false;
    }
}