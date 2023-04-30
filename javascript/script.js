const myButton = document.getElementById("id");
const image = document.getElementsByClassName("bird")[0];
const originalImgSrc = image.src;

const imgArray = [
    "./images/FB_IMG_1646404054511.jpg",
    "./images/FB_IMG_1646486597222.jpg"
];

let counter = 0;

const myFun = () => {
    if (counter === 2) {
        image.src = originalImgSrc;
        counter = 0;
        return;
    }
    const imgLink = imgArray[counter];
    image.src = imgLink;
    counter += 1;
    console.log("Counter is: " , counter);
}

myButton.addEventListener("click", myFun);