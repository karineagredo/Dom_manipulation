uList = document.getElementById('countries_list');
const countries = ['Colombia', 'Uruguay', 'Paraguay', 'Australia', 'Indonesia', 'United Kingdom',
    'United States', 'Malaysia', 'Japan', 'Norway'];

const fragment = document.createDocumentFragment();

countries.forEach(country => {
    const li = document.createElement('li');
    li.textContent = country;
    fragment.appendChild(li);
});
uList.appendChild(fragment);

// exercise 2

function displayArticle() {
    const article = document.getElementById('mobile');
    article.style.display = (window.innerWidth > 500) ? 'none' : 'block';
}
window.onresize = displayArticle;
