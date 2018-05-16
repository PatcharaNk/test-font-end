const ul_days = [
  document.getElementById('ul-sunday'),
  document.getElementById('ul-monday'),
  document.getElementById('ul-tuesday'),
  document.getElementById('ul-wednesday'),
  document.getElementById('ul-thursday'),
  document.getElementById('ul-friday'),
  document.getElementById('ul-saturday')];

const url = 'http://uinames.com/api/?ext&amount=25'
fetch(url)
.then(response => {
  return response.json();
})
.then(data => {
  data.map(function(data) {
    let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span'),
        date = new Date(data.birthday.raw),
        day = date.getDay();
    img.src = data.photo;
    span.innerHTML = data.name;
    append(li, img);
    append(li, span);
    append(ul_days[day], li);
  })
});

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  parent.appendChild(el);
}
