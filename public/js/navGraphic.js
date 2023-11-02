for (i=1;i<9;i++) {
  // let link = document.createElementNS("http://www.w3.org/2000/svg", "a");
  // link.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', i);
  // box.appendChild(link);
  if (document.title == i) {
    let box = document.getElementById("box" + i);
    console.log(box);
    box.children[0].classList.add('active-graphic');
  }
}
