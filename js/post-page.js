
var postData; 

var usp = new URLSearchParams(window.location.search);
var postId = usp.get("id");

$.ajax({
    type:"GET",
    url:`https://befitapi.azurewebsites.net/Post/${postId}`,
    async: false,
    success: function(response){
        console.log(response);
        postData = response;
    }
});

document.title = `Healthy Lives | ${postData.mainHeading}`;
document.getElementById("main-heading").innerHTML = postData.mainHeading;
document.getElementById("content-image-div").innerHTML = `<img class="content-image" src="https://befitblob.blob.core.windows.net/befitimages/${postData.contentImageName}" alt="Content Image">`;
document.getElementById("content-body-paragraph").innerHTML = postData.contentBodyParagraph;
document.getElementById("user-details-name").innerHTML = postData.userDetailsName;
document.getElementById("user-image-div").innerHTML = `<img src="https://befitblob.blob.core.windows.net/befitimages/${postData.userDetailsImageName}" alt="User Image">`;
