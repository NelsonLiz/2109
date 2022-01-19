var template = document.createElement("template"); //<template> </template>
template.innerHTML = `
<style>
            #counter {
                background-color: rgb(216, 199, 122);
                display: flex;
            }

            #counter > button {
                width: 30px;
                height: 35px;
                font-size: 20px;
                background-color: rgb(219, 138, 63);
                border: none;
                border-radius: 5px;
                margin: 5px;

            }

            #counter > div {
                flex: 1;
                display:flex;
                justify-content: center;
                align-items: center;
            }
            
            #bar {
                width:0px;
                height:15px;
                background-color: crimson;
            }

            #reset {
                display: flex;
                width: 55px;
                height: 35px;
                font-size: 20px;
                background-color: rgb(245, 200, 102);
                border: none;
                border-radius: 5px;
                margin: 5px;
            }
        </style>
        <div id='counter'>
            <button id='i_but'>+</button>
            <div id='number'>1</div>
            <button id='d_but'>-</button>
        </div>
        <div id='bar'></div>
        <button id='r_but'>reset</button>
`;

class TheCounter extends HTMLElement {
    constructor(){
        super();
        this.num = 1;
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("#i_but").onclick = () => this.inc();
        this.shadowRoot.querySelector("#d_but").onclick = () => this.dec();
        this.shadowRoot.querySelector("#r_but").onclick = () => this.re();
    }

    inc(){
        this.num = this.num + 1;
        this.shadowRoot.querySelector("#number").innerText = this.num;
        this.shadowRoot.querySelector("#bar").Style.width = (this.num*10)+"px";
    }

    dec(){
        this.num = this.num - 1;
        this.shadowRoot.querySelector("#number").innerText = this.num;
        this.shadowRoot.querySelector("#bar").Style.width = (this.num*10)+"px";
    }
    re(){
        this.num = this.num = 1;
        this.shadowRoot.querySelector("#number").innerText = this.num;
    }
}

customElements.define("the-counter",TheCounter)