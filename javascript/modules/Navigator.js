class Navigator {
    constructor(content, ids, navIds) {
        this.content = content;
        this.ids = ids
        this.navIds = navIds;
        
        this.page = 0;
        this.update = this.update.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.changePage = this.changePage.bind(this);
        this.createButtons = this.createButtons.bind(this);
        this.createButtons();
        this.update();
        console.log(this.page);
    }
    nextPage(){
        this.page++;
        this.update();
    }
    
    previousPage(){
        this.page--;
        this.update();
    }

    changePage(num){
        console.log(num);
        this.page = num;
        this.update();
    }
    createButtons(){
        let buttons = [];
        const callback = this.changePage;
        for (let i = 1; i <= Math.ceil(this.content.body.length/this.ids.length); i++) {
            let aux =  document.createElement('a');
            aux.id="pag-"+i
            aux.className = "page-link"
            aux.href = '#'+i;
            aux.innerText = i;
            aux.addEventListener('click', function() {
                callback(i-1);
            }, false);
            let div = document.createElement('div');
            div.className = "page-item";
            div.appendChild(aux);
            buttons.push(div);
        }
        buttons.forEach(element => {
            $(`#${this.navIds[1]}`).before(element);
        });
        
    }
    update(){
        const current = this.content.body.slice(this.page*this.ids.length, this.page*this.ids.length+this.ids.length);
        let count = 0;
        let emptyCards = 0;
        this.ids.forEach(element => {
            document.getElementById(element).style.display = 'none';
        });
        
        current.forEach((element,index) => {
            document.getElementById(this.ids[index]).style.display = "flex";
            document.getElementById(this.ids[index]).parentNode.parentNode.hidden = false;
            document.getElementById(this.ids[index]).querySelector(".card-img-top").src = element.img;
            document.getElementById(this.ids[index]).querySelector(".card-body").querySelector("p").innerHTML = element.title;
            document.getElementById(this.ids[index]).querySelector(".card-body").querySelector("a").href = element.url;
        });
        
        this.ids.forEach((element,index) => {
            if (document.getElementById(element).style.display == 'none') emptyCards++;
            count++;
            if (count == 3) {
                console.log(emptyCards);
                if (emptyCards == 3) {
                    document.getElementById(this.ids[index-2]).parentNode.parentNode.hidden = true;
                }
                emptyCards = count = 0;
            }
        });
        this.page == 0
            ? document.getElementById(this.navIds[0]).style.display = "none"
            : document.getElementById(this.navIds[0]).style.display = "initial";

        this.page >= Math.floor(this.content.body.length/this.ids.length)
            ? document.getElementById(this.navIds[1]).style.display = "none"
            : document.getElementById(this.navIds[1]).style.display = "initial";
    }
}

export default Navigator;