/**
 * Define Global Variables
 * 
*/
const sectionsContainer = document.querySelector('main');
const newSectionContainer= document.createDocumentFragment();
const mainNavBar = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



//Creation of the fourth section
function addFourthSection(){
  const section4= document.createElement('section');
  section4.setAttribute('id','section4');
  section4.setAttribute('data-nav', 'Section 4');
  section4.innerHTML = `<div class="landing__container">
<h2>Section 4</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

<p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
</div>`
  newSectionContainer.appendChild(section4);
  sectionsContainer.appendChild(newSectionContainer);
}
addFourthSection();



//Creation of the navigation bar
function buildNavBar(){
  const fragment= document.createDocumentFragment();
  let sections = [...document.getElementsByTagName('section')];
  for (const section of sections){
    const list = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${section.id}`
    link.classList.add('menu__link');
    link.innerHTML = `${section.dataset.nav}`

    // Scroll to anchor ID
    link.addEventListener('click', (tab) =>{
      tab.preventDefault();
      section.scrollIntoView({behavior: "smooth"});
    });
    list.appendChild(link);
    fragment.appendChild(list)
  }
mainNavBar.appendChild(fragment)
}
buildNavBar();



//Highlighting the active section
let sections = [...document.getElementsByTagName('section')];
const links = [...document.querySelectorAll(".menu__link")];
window.addEventListener("scroll",highlightActiveSection);

function highlightActiveSection(){
  for(const section of sections){
    section.classList.remove("your-active-class");
    const secTop = section.getBoundingClientRect().top;
    const maxTop = 150;
    // Add class 'active' to section when near top of viewport
    if (secTop > 0 && secTop <= maxTop){
        section.classList.add("your-active-class");
        for (const link of links){
          if(link.textContent === section.dataset.nav){
            link.classList.add("active-link");
          } else {
            link.classList.remove("active-link");
          }
        }
        } else {
        section.classList.remove("your-active-class");
        }
  }
}



//Creation of "Go To The Top" footer Button
const footer= document.querySelector('.page__footer');
const footerButton= document.createElement('button');
function addFooterButton(){
  const footerButtonFragment= document.createDocumentFragment();
  footerButton.textContent= "Go To The Top";
  footerButton.setAttribute('style','margin-left: auto; margin-right: auto; position: center;')
  footerButtonFragment.appendChild(footerButton);
  footer.appendChild(footerButtonFragment);
}
addFooterButton();

//Activation of "Go To The Top" footer button 
footerButton.addEventListener("click",(button) =>{
  button.preventDefault();
  document.body.scrollIntoView({behavior: "smooth"});
});



//Adding Class "Collapsible"
const sectionTitles = document.querySelectorAll('h2');
for (const sectionTitle of sectionTitles){
  sectionTitle.classList.add('collapsible');
}



//Activate collapsing of each section content
const cols = [...document.getElementsByClassName("collapsible")];
for (const col of cols) {
  col.addEventListener("click", function() {
    this.classList.toggle("active");
    var contents = [this.nextElementSibling, this.nextElementSibling.nextElementSibling];
    for (const content of contents){
      if (content.style.display === "none") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    }  
  });
}
