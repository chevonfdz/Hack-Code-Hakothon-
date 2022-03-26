
var postData = [
    {
        "id": "post1",
        "main-heading": "How to Start from Ground Zero",
        "content-image-name": "Beginner-working-out.png", 
        "content-body-paragraph": "Often when we are sick, we’re told we need to start all of these changes at once. At the beginning of my fitness journey, I would start a new supplement, new workouts, change lots of different health activities simultaneously.I could never tell which ones helped or hurt me by adding all these changes at once. Introduce only one change at a time, whether it is a type of exercise, medicine, supplement, or a new diet, so you can see what and how it affects your condition. But then what if we feel like we really can’t add a workout, for whatever reason that may be? It feels easier to accept that we are too sick to work out and can’t make any changes. For some of us, that may be true. But you need to ask yourself questions to know if you are doing all that you can to be in a place where you can be working out. Are you doing everything you can to support your condition and set yourself up for success? Keeping your condition manageable can look like taking your medicine, getting at least 8 hours of sleep, staying hydrated, avoiding triggers, and focusing on having a positive and grateful mindset. Are you struggling with being too exhausted? If you know you are prone to exhaustion, try to get the bulk of your work done in the mornings, focus on getting enough quality sleep, and get an extra kick by drinking green tea or diffusing essential oils that promote energy. Are you struggling with being in too much pain to work out? When you struggle with chronic pain, you understand that there is your average pain and worse pain during flares. To support your pain management, you can take your meds, anti-inflammatory supplements, try CBD oil, massage therapy, or an anti-inflammatory diet.", 
        "user-details-name": "Donald Trump", 
        "user-details-description": "I’m SO excited you’re here! I’m super passionate about nutrition, and specialize in teaching others how to lose weight through healthy, low-carb eating. Here at Avocadu, we believe in quality over quantity and that diet is EVERYTHING when it comes to your health and well-being. In short, we believe in being healthy from the inside out.", 
        "user-details-image-name": "Donald_Trump_official_portrait.jpg"
    },
    {
        "id": "post2",
        "main-heading": "Start Out Slow and Low-Impact",
        "content-image-name": "Walking-to-Lose-Weight-for-Insulin-Resistance.png", 
        "content-body-paragraph": "People always think, well, I used to run 2 miles a few years ago, but it’s been a while. They go for it, thinking it’ll be fine, and that’s how they injure themselves. When you start up your new exercise routine, go for low impact and nothing too extreme. Changes in the seasons and weather tend to flare my Postural Orthostatic Tachycardia Syndrome (or POTS for short), so I tend not to make changes to my exercise routine or diet during this time. Many fitness influencers and motivational speakers will tell you to start now and not wait for the right time. There will never be a right time. And while I do think this has some validity with us chronically ill, we don’t need to start something in the middle of a storm either. If you wake up in pain but know that your pain subsides in the afternoon, plan to get your workout in the afternoon. Your time of day can matter greatly depending on your condition. People with different chronic conditions feel best at different times of the day. With POTS, I typically feel good upon waking, but during flares, my exhaustion gets progressively worse throughout the day, so good luck trying to get me to work out in the evening. If I don’t work out in the morning, I won’t be able to later. Working out with a chronic condition is like a game; you need to know when to play, how to play, and when to fold. Slow and steady wins the race, and make sure you’re only playing one game at a time.", 
        "user-details-name": "Joe Biden", 
        "user-details-description": "I’m SO excited you’re here! I’m super passionate about nutrition, and specialize in teaching others how to lose weight through healthy, low-carb eating. Here at Avocadu, we believe in quality over quantity and that diet is EVERYTHING when it comes to your health and well-being. In short, we believe in being healthy from the inside out.", 
        "user-details-image-name": "Joe_Biden_presidential_portrait.jpg"
    }
]

var usp = new URLSearchParams(window.location.search);
var postId = usp.get("id");

const invocation = new XMLHttpRequest();
invocation.open('GET', 'https://befitapi.azurewebsites.net/Post/post1', true);
invocation.withCredentials = true;
invocation.send();
invocation.onload = () => {
    if (request.status == 200) {
        alert(request.response);
        // this.setState({ pageData: JSON.parse(request.response) });
        //this.pageData = JSON.parse(request.response);
    } else {
        console.log(`error ${request.status}`);
    }
}


// fetch('https://befitapi.azurewebsites.net/Post/post1')
//   .then(response => response.json())
//   .then(data => console.log(data));

//     const request = new XMLHttpRequest();

document.title = `Healthy Lives | ${postData["main-heading"]}`;
document.getElementById("main-heading").innerHTML = postData["main-heading"];
document.getElementById("content-image-div").innerHTML = `<img src="images/post-page/${postData["content-image-name"]}" alt="Content Image">`;
document.getElementById("content-body-paragraph").innerHTML = postData["content-body-paragraph"];
document.getElementById("user-details-name").innerHTML = postData["user-details-name"];
document.getElementById("user-details-description").innerHTML = postData["user-details-description"];
document.getElementById("user-image-div").innerHTML = `<img src="images/post-page/${postData["user-details-image-name"]}" alt="User Image">`;

// function loadData() {
    // $.ajax({
    //     type: 'GET',
    //     url: 'https://befitapi.azurewebsites.net/Post/post1',
    //     crossDomain: true,
    //     data: '{"some":"json"}',
    //     dataType: 'json',
    //     success: function(responseData, textStatus, jqXHR) {
    //         console.log(responseData)
    //         // var value = responseData.someKey;
    //     },
    //     error: function (responseData, textStatus, errorThrown) {
    //         alert('POST failed.');
    //     }
    // });

    // const request = new XMLHttpRequest();
    // request.open("GET", "https://befitapi.azurewebsites.net/Post/post1");
    // request.withCredentials = true;
    // request.setRequestHeader('Content-Type', 'application/json');
    // request.setRequestHeader('Access-Control-Allow-Origin', '*');
    // request.send();
    // request.onload = () => {

    //     if (request.status == 200) {
    //         console.log(request.response);
    //         // this.setState({ pageData: JSON.parse(request.response) });
    //         //this.pageData = JSON.parse(request.response);
    //     } else {
    //         console.log(`error ${request.status}`);
    //     }
    // }

    

    


// }