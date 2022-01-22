class Search{
    changePage(page,data){
        window.location.href = `${page}?${Object.keys(data).map((value,index) => `${value}=${Object.values(data)[index]}`).join("&")}`;
        debugger;
    }
}

export default Search;