updateText = () => {
  let typedText = document.getElementById('text-input').value;
  document.getElementById('text-output').innerText = typedText;
}    
  
makeBold = (elem) => {
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}
  
makeItalic = (elem) => {
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
}

makeUnderline = (elem) => {
  elem.classList.toggle('active');
  let underText = document.getElementById('text-output');
  if (underText.classList.contains("underline")){
       underText.classList.remove("underline")
  } else {
      underText.classList.add("underline")
  }
}
  
  
alignText = (elem, alignType) =>{
  document.getElementById('text-output').style.textAlign = alignType;
  let Abutton = document.getElementsByClassName('align');
  for (let button of Abutton) {
    button.classList.remove('active')
  }
  elem.classList.toggle('active');
}

cleartheText = () => {
  document.getElementById('text-input').value = "";
  document.getElementById('text-output').innerText = "";
}