const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<style>
.menuContainer{
    display: flex;
    justify-content: space-between;
}
.logo{
    margin-left: 20px;
}
header{
    display: block;
    position: fixed;
    top:0;
    right:0;
    width: 100%;
    background-color: #a493c0;
    padding: 10px;
}

nav a:visited,
nav a:link{
    color: #fff;
    text-decoration: none;
}

nav > ul {
display: inline;
padding: 0;
}

nav> ul > li{
    display: inline-block;
    list-style: none;
    margin: 0 5px 0 5px;
}
  </style>
  <header>
  <div class="menuContainer">
      <div class="logo"><img src="images/logo.jpeg" alt="The Famous Circus Restaurant" width="30px" height="30px"></div>
      <div>
          <nav>
              <ul>
                  <li><a href="home.html">Home</a></li>
                  <li><a href="shows.html">Shows</a></li>
                  <li><a href="menu.html">Menu</a></li>
                  <li><a href="gallery.html">Gallery</a></li>
                  <li><a href="contact.html">Contact us</a></li>
              </ul>
          </nav>
      </div>
  </div>
</header>
`;

class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);