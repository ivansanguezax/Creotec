class Navigator {
    constructor(content, ids, navIds) {
        this.page = 0;

        this.content = content;
        this.ids = ids
        this.navIds = navIds;

        this.update = this.update.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);

        this.update();
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
        this.page = num;
        this.update();
    }
    update(){
        const current = this.content.slice(this.page*this.ids.length, this.page*this.ids.length+this.ids.length);
        this.ids.forEach(element => {
            document.getElementById(element).style.display = 'none';
        });

        current.forEach((element,index) => {
            document.getElementById(this.ids[index]).style.display = "flex";
            document.getElementById(this.ids[index]).querySelector("card-img-top").src = element.img;
            document.getElementById(this.ids[index]).querySelector(".card-body").querySelector("p").innerHTML = element.title;
            document.getElementById(this.ids[index]).querySelector(".card-body").querySelector("a").href = element.url;
        });

        this.page == 0
            ? document.getElementById(this.navIds[0]).style.display = "none"
            : document.getElementById(this.navIds[0]).style.removeProperty = "display";

        this.page == Math.ceil(this.ids.length)
            ? document.getElementById(this.navIds[1]).style.display = "none"
            : document.getElementById(this.navIds[1]).style.removeProperty = "display";
    }
}

export default Navigator;