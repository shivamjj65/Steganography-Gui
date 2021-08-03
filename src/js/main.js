
/*--------------------------------SELECT IMAGE-------------------------------*/
/*  var filePath = null;
  var fileName = null;
  
  document.addEventListener('drop', function (e) 
  {
    e.preventDefault();
    e.stopPropagation();
    
    for (let f of e.dataTransfer.files) {
      console.log('File(s) you dragged here: ', f.path);
      filePath = f.path;
      fileName = filePath.split('.');
      console.log(fileName);
      break;
    }
  
    
    //console.log('File you dragged here: ',filePath);
    document.getElementById('output1').src = filePath;
    document.getElementById('myImage1').innerHTML = "File Path : " + filePath;
  }
  );
  
  document.addEventListener('dragover', function (e) {
    e.preventDefault();
    e.stopPropagation();
  });
  
*/
/*--------------------------------SELECT MESSAGE-------------------------------*/
//function to save text from box
function getMessage() {
  // get data from textBox
  const m = document.getElementById("message");
  // store data
  let msg = "" + m.value;                  //msg has message in it
  // Convert the text to BLOB.
  const textToBLOB = new Blob([msg], { type: "text/plain" });
  const sFileName = "message.txt"; // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
}



/*--------------------------------SELECT KEY-------------------------------*/
//function to save key from box
var valueOfKey;
function getKey() {
  // get data from textBox
  const k = document.getElementById("secretkey");
  // store data
  let skey = "" + k.value;              //skey has key in it
  valueOfKey = 'shivam';
  // Convert the text to BLOB.
  const textToBLOB = new Blob([skey], { type: "text/plain" });
  const sFileName = "key.txt"; // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
}


/*--------------------------------SEND KEY-------------------------------*/
/*--------------------------------SEND - REC IMAGE-----------------------*/
/*--------------------------------SELECT IMAGE-------------------------------*/

//function to take image
/*var imagePath;
var imageName;
document.getElementById("holder2").addEventListener("drop",function(x)
{
  x.preventDefault();
  x.stopPropagation();
  for (let i of x.dataTransfer.files) {
    console.log('Image(s) you selected here: ', i.path);
    imagePath = i.path;
    imageName = imagePath.split('.');
    console.log(imageName);
    break;
  }

  
  //console.log('File you dragged here: ',filePath);
  document.getElementById('output2').src = imagePath;
  document.getElementById('myImage2').innerHTML = "File Path : " + imagePath;
  
}
);


*/
/*---------------------------------Js to YAML----------------------------*/
// write.js
const fs = require('fs');
const yaml = require('js-yaml');

let configuration = {
  valueOfKey
};

let yamlStr = yaml.dump(configuration);
fs.writeFileSync('data-out.yaml', yamlStr, 'utf8');


/*----------------------------------ARROW--------------------------------
let animation = function(){
  if(window.isInAnim)
    return;
  
  window.isInAnim =true;
  let move1 = true;
  let move2 = false;
  let move3 = false;
  let move4 = false;
  let h1 = 120;
  let h2 = 70;
  let h3 = 30;
  let h4 = 10;
  let a1 = -3000;
  let a2 = -3000;
  let a3 = -3000;
  let a4 = -3000;
  let frame = 10;
  let dt = frame / 1000;
  let v01 = Math.sqrt(2 * -a1 * h1);
  let v02 = Math.sqrt(2 * -a2 * h2);
  let v03 = Math.sqrt(2 * -a3 * h3);
  let v04 = Math.sqrt(2 * -a4 * h4);
  let timer;
  let t1 = 0;
  let t2 = 0;
  let t3 = 0;
  let t4 = 0;
  let x1 = 0;
  let x2 = 0;
  let x3 = 0;
  let x4 = 0;
  timer = setInterval(() => {

    if (move1) {
      t1 += dt;
      x1 = (0.5 * a1 * t1 * t1) + (v01 * t1);
      if (x1 > 0) {
        this.style.top = -x1 + "px";
      }
      else {
        this.style.top = 0 + "px";
        move1 = false;
        move2 = true;
      }
    }
    else if (move2) {
      t2 += dt;
      x2 = (0.5 * a2 * t2 * t2) + (v02 * t2);
      if (x2 > 0) {
        this.style.top = -x2 + "px";
      }
      else {
        this.style.top = 0 + "px";
        move2 = false;
        move3 = true;
      }
    }
    else if (move3) {
      t3 += dt;
      x3 = (0.5 * a3 * t3 * t3) + (v03 * t3);
      if (x3 > 0) {
        this.style.top = -x3 + "px";
      }
      else {
        this.style.top = 0 + "px";
        move3 = false;
        move4 = true;
      }
    }
    else if (move4) {
      t4 += dt;
      x4 = (0.5 * a4 * t4 * t4) + (v04 * t4);
      if (x4 > 0) {
        this.style.top = -x4 + "px";
      }
      else {
        this.style.top = 0 + "px";
        window.isInAnim=false;
        clearInterval(timer);
      }
    }
  }, frame);
}

document.getElementsByClassName("arrow-wrap1")[0].addEventListener("mouseenter",animation);
document.getElementsByClassName("arrow-wrap2")[0].addEventListener("mouseenter",animation);
document.getElementsByClassName("arrow-wrap3")[0].addEventListener("mouseenter",animation);
*/