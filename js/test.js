document.getElementById("myBtn").onclick = uploadFile;

function uploadFile() {

    let photo = document.getElementById("image-file").files[0]; 
    let req = new XMLHttpRequest();
    let formData = new FormData();

    formData.append("file", photo);
    req.open("POST", 'https://befitapi.azurewebsites.net/Blob');
    req.send(formData);
    req.onreadystatechange = function() {
        if (req.readyState == 4)
        if (req.status == 200)
            window.open(`https://befitblob.blob.core.windows.net/befitimages/${photo.name}`);
    };

}