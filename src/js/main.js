var loop = 4;
var filePath = null;
var fileName = null;
var textMessage = null;
var valueOfKey = null;
var imagePath = null;
var imageName = null;



function counter(){
  loop = loop-1;
  console.log(loop);
  if(loop==0){
    console.log("All values are entered")
  }
}



/*--------------------------------SELECT IMAGE-------------------------------*/
function getImage1() {
  document.addEventListener("drop", function (e) {
    e.preventDefault();
    e.stopPropagation();

    for (let f of e.dataTransfer.files) {
      filePath = f.path;
      fileName = filePath.split(".");
      console.log("Image path is: " + filePath);
      counter();
      break;
    }

    //console.log('File you dragged here: ',filePath);
    document.getElementById("output1").src = filePath;
    document.getElementById("myImage1").innerHTML =
      "Image Path is : " + filePath;
  });

  document.addEventListener("dragover", function (e) {
    e.preventDefault();
    e.stopPropagation();
  });
}
getImage1();

/*--------------------------------SELECT MESSAGE-------------------------------*/
//function to save text from box

function getMessage() {
  var userInput = document.getElementById("message").value;

  if (filePath != null && userInput != "") {
    textMessage = userInput;
  } else {
    alert("Please select a image first");
  }
  document
    .getElementById("selectMessage")
    .addEventListener("click", console.log("Message is: " + textMessage));
    counter();
}

/*--------------------------------SELECT KEY-------------------------------*/
//function to save key from box

function getKey() {
  var userInput = document.getElementById("secretkey").value;

  if (filePath != null && userInput != "") {
    valueOfKey = userInput;
  } else {
    alert("Please select a image first");
  }
  document
    .getElementById("saveKey1")
    .addEventListener("click", console.log("Key is: " + valueOfKey));
    counter();
}

/*--------------------------------SEND - REC IMAGE-----------------------*/
/*--------------------------------SELECT IMAGE-------------------------------*/

//function to take image

function getImage2() {
  document.getElementById("holder2").addEventListener("drop", function (x) {
    x.preventDefault();
    x.stopPropagation();
    for (let i of x.dataTransfer.files) {
      imagePath = i.path;
      imageName = imagePath.split(".");
      console.log("Image path is: " + imagePath);
      counter();
      break;
    }

    //console.log('File you dragged here: ',filePath);
    document.getElementById("output2").src = imagePath;
    document.getElementById("myImage2").innerHTML = "Image Path : " + imagePath;
  });
 
}
getImage2();

