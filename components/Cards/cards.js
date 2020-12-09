const cardTemplate = document.createElement('template');
cardTemplate.innerHTML = `
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
 * {
	 margin: 0;
	 padding: 0;
	 font-family: 'Roboto', sans-serif;
	 list-style-type: none;
	 text-decoration: none;
	 -webkit-box-sizing: border-box;
	 -moz-box-sizing: border-box;
	 -o-box-sizing: border-box;
	 box-sizing: border-box;
}
 img {
	 max-width: 100%;
}
 html, body {
	 height: 100%;
}
 body {
	 background: url("https://wallpaperscraft.com/image/coffee_coffee_beans_cupcake_candy_93301_1920x1080.jpg") no-repeat center;
}
 .card {
	 position: relative;
	 background: #fff;
	 max-width: 500px;
	 margin: 20px auto;
	 box-shadow: 0px 0px 30px 2px #000;
}
 .card .header {
	 background: url("http://img.taste.com.au/UZVXAdo7/taste/2016/11/chinese-egg-noodle-and-vegetable-stir-fry-94186-1.jpeg") no-repeat center;
	 background-size: cover;
	 min-height: 350px;
}
 .card .header .icon a .fa-heart-o {
	 position: absolute;
	 left: 85%;
	 bottom: 30.7%;
	 background: #17bebb;
	 color: #fff;
	 font-size: 1.3em;
	 font-weight: bold;
	 padding: 15px;
	 border-radius: 50%;
	 box-shadow: 0px 5px 30px 1px #17bebb;
}
 .card .text .food {
	 color: #212129;
	 text-align: left;
	 font-weight: normal;
	 text-transform: uppercase;
	 letter-spacing: 0.1em;
	 margin: 5px 30px;
}
 .card .text .fa-clock-o {
	 color: #9b9b9b;
	 margin: 0 30px;
}
 .card .text .fa-users {
	 color: #9b9b9b;
}
 .card .stars {
	 margin: 10px 30px;
}
 .card .stars li a i {
	 color: #ffe500;
}
 .card .info {
	 margin: 10px 30px;
}
 .card a.btn {
	 display: block;
	 background: #ef3e36;
	 color: #fff;
	 position: relative;
	 text-transform: uppercase;
	 letter-spacing: 0.1em;
	 text-align: center;
	 padding: 10px;
	 transition: 250ms;
}
 .card a.btn:hover {
	 background: #17bebb;
	 transition: 250ms;
}
 
  </style>
  <div class="card">
  <div class="header">
     <div class="icon">
     <a href="#"><i class="fa fa-heart-o"></i></a>
     </div>
  </div>
  <div class="text">
     <h1 class="food">
        Chinese Noodles
     </h1>
     <i class="fa fa-clock-o"> 15 Mins</i>
     <i class="fa fa-users"> Serves 2</i>
     
     <div class="stars">
        <li>
           <a href="#"><i class="fa fa-star"></i></a>
           <a href="#"><i class="fa fa-star"></i></a>
           <a href="#"><i class="fa fa-star"></i></a>
           <a href="#"><i class="fa fa-star"></i></a>
           <a href="#"><i class="fa fa-star-o"></i></a>
        </li>
     </div>
     <p class="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, temporibus.</p>
  </div>
  <a href="#" class="btn">Let's Cook!</a>
</div>
`;
class Cards extends HTMLElement {

    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(cardTemplate.content);
    }

}

customElements.define('card-component', Cards);