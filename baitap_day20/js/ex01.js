var content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quo perferendis id doloribus nemo fugiat! Modi harum labore, minima deleniti tempora odit ad tenetur, rerum dolores impedit possimus inventore quo`;
var keyword = " ";
var position = 0;

setInterval(() => {
  if (position >= content.length) {
    position = 0;
    return;
  }
  var nextSpaceIndex = content.indexOf(keyword, position);
  if (nextSpaceIndex === -1) {
    nextSpaceIndex = content.length;
  }
  var coloredText =
    content.slice(0, position) +
    `<span>${content.slice(position, nextSpaceIndex)}</span>`;
  if (nextSpaceIndex < content.length) {
    coloredText += " ";
  }
  coloredText += content.slice(nextSpaceIndex + 1);

  document.body.innerHTML = coloredText;
  position = nextSpaceIndex + 1;
}, 500);
