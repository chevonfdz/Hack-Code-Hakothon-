var postDataRecipeArray; 
var postDataFitnessArray; 
var postDataMentalHealthArray; 

$.ajax({
    type:"GET",
    url:`https://befitapi.azurewebsites.net/Post/Category/recipe`,
    async: false,
    success: function(response){
        postDataRecipeArray = response;
    }
});

$.ajax({
    type:"GET",
    url:`https://befitapi.azurewebsites.net/Post/Category/fitness`,
    async: false,
    success: function(response){
        postDataFitnessArray = response;
    }
});

$.ajax({
    type:"GET",
    url:`https://befitapi.azurewebsites.net/Post/Category/mental-health`,
    async: false,
    success: function(response){
        postDataMentalHealthArray = response;
    }
});

var fitnessPostResults = ``;
for(var postDataIndex in postDataFitnessArray) {
    fitnessPostResults += `
        <div class = "product">
            <div class = "product-content">
                <div class = "product-img">
                    <img class="item_img" src="https://befitblob.blob.core.windows.net/befitimages/${postDataFitnessArray[postDataIndex].contentImageName}" alt="product">
                </div>
            </div>
            <div class = "product-info">
                <div class = "product-info-top">
                    <h2 class = "sm-title">${postDataFitnessArray[postDataIndex].mainHeading}</h2>
                </div>
            </div>
            <h4 class="product_name">${postDataFitnessArray[postDataIndex].description}</h4>
            <br>
            <a href="post.html?id=${postDataFitnessArray[postDataIndex].id}" target="_blank">
                <button class="blogPostButton readBut" >Read More</button>
            </a>
            <br>
        </div>
    `;
}
document.getElementById("fitnessProductwrapper").innerHTML = fitnessPostResults;

var recipePostResults = ``;
for(var postDataIndex in postDataRecipeArray) {
    recipePostResults += `
        <div class = "product">
            <div class = "product-content">
                <div class = "product-img">
                    <img class="item_img" src="https://befitblob.blob.core.windows.net/befitimages/${postDataRecipeArray[postDataIndex].contentImageName}" alt="product">
                </div>
            </div>
            <div class = "product-info">
                <div class = "product-info-top">
                    <h2 class = "sm-title">${postDataRecipeArray[postDataIndex].mainHeading}</h2>
                </div>
            </div>
            <h4 class="product_name">${postDataRecipeArray[postDataIndex].description}</h4>
            <br>
            <a href="post.html?id=${postDataRecipeArray[postDataIndex].id}" target="_blank">
                <button class="blogPostButton readBut" >Read More</button>
            </a>
            <br>
        </div>
    `;
}
document.getElementById("recipeProductwrapper").innerHTML = recipePostResults;

var mentalHealthPostResults = ``;
for(var postDataIndex in postDataMentalHealthArray) {
    mentalHealthPostResults += `
        <div class = "product">
            <div class = "product-content">
                <div class = "product-img">
                    <img class="item_img" src="https://befitblob.blob.core.windows.net/befitimages/${postDataMentalHealthArray[postDataIndex].contentImageName}" alt="product">
                </div>
            </div>
            <div class = "product-info">
                <div class = "product-info-top">
                    <h2 class = "sm-title">${postDataMentalHealthArray[postDataIndex].mainHeading}</h2>
                </div>
            </div>
            <h4 class="product_name">${postDataMentalHealthArray[postDataIndex].description}</h4>
            <br>
            <a href="post.html?id=${postDataMentalHealthArray[postDataIndex].id}" target="_blank">
                <button class="blogPostButton readBut" >Read More</button>
            </a>
            <br>
        </div>
    `;
}
document.getElementById("mentalHealthProductwrapper").innerHTML = mentalHealthPostResults;

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