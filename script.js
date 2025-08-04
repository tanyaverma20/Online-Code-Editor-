function run() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = "<style>" + document.getElementById("css-code").value + "</style>";
    let jsCode = "<script>" + document.getElementById("js-code").value + "</script>";
  
    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML = htmlCode + cssCode;
    output.contentWindow.eval(document.getElementById("js-code").value);
  }
  