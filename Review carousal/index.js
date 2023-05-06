let userTexts = document.getElementsByClassName("user-text")
let userPics = document.getElementsByClassName("user-pic")




function showReview(event) {
    for (let userPic of userPics) {
        userPic.classList.remove('active-pic');
    }
    for (let userText of userTexts) {
        userText.classList.remove('active-text');
        console.log(userText)
    }
    let i = Array.from(userPics).indexOf(event.target);

    userPics[i].classList.add('active-pic');
    userTexts[i].classList.add('active-text');
   
}
