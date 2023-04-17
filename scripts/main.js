const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/geger-test.JPG") {
    myImage.setAttribute("src", "images/candiplaosan1.JPG");
  } else {
    myImage.setAttribute("src", "images/geger-test.JPG");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Dengan siapa kami berjumpa?");
    if (!myName) {
        setUserName();
      } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Selamat datang di Banyumangsi, ${myName}`;
      }
}
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Selamat datang di Banyumangsi, ${storedName}`;
}
myButton.onclick = () => {
    setUserName();
  };