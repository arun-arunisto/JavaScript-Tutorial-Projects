const generateMemeBtn = document.querySelector(".generate-meme-btn");
const memeTitle = document.querySelector(".meme-title");
const memeImg = document.querySelector(".meme-img");
const memeUrl = "https://meme-api.com/gimme";

async function memeGenerator() {
    try {
        const response = await fetch(memeUrl);
        var data = await response.json();
        console.log(data);
        memeTitle.innerHTML = data.title;
        memeImg.src = data.url;
    } catch (error) {
        console.log(error.message);
        memeTitle.innerHTML = "Something Went Wrong!!"
    }
}

generateMemeBtn.addEventListener("click", () => {
    memeGenerator();
})
