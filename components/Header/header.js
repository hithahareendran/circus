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
nav a:hover{
    color: #0C3653;
}
nav a:active{
    color: #255A7E;
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
              <ul class="navLinks">
                  <li id="Home"><a href="home.html">Home</a></li>
                  <li id="Shows"><a href="shows.html">Shows</a></li>
                  <li id="Menu"><a href="menu.html">Menu</a></li>
                  <li id="Gallery"><a href="gallery.html">Gallery</a></li>
                  <li id="Contact"><a href="contact.html">Contact us</a></li>
              </ul>
          </nav>
      </div>
  </div>
</header>
`;

class Header extends HTMLElement {
    static get observedAttributes() {
        return ['selected'];
    }

    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (oldVal !== newVal) {
            console.log(document.getElementById("Menu"));
            // var style = document.createElement( 'style' )
            // style.innerHTML = ".navLinks #"+newVal+"{ pointer-events: none; cursor: default; font-weight: bold;}";
            // this.shadowRoot.appendChild( style );
        }
    }

}

customElements.define('header-component', Header);