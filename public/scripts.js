const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

console.log(currentPage)
for (item of menuItems) {
	if (currentPage.includes(item.getAttribute("href"))) {			
        item.classList.add("active")
	}
}

 // paginação
    // totalPages = 20
    // SelectedPage = 15
    // [1, ..., 13, 14, 15, 16, 17, ..., 20]

    function paginate (selectedPage, totalPages) {
        let pages = [],
        oldPage

        for(let currentPage = 1; currentPage <= totalPages; currentPage++){

            const firstAndLastPage = currentPage == 1 || currentPage == total
            const pagesAfterSelectedPage = currentPage <= selectedPage + 2
            const pagesBeforeSelectedPage = currentPage >= selecetdPage - 2


            if(firstAndLastPage == 1 || pagesBeforeSelectedPage && pagesAfterSelectedPage) {
                if (oldPage && currentPage - oldPage > 2){
                    pages.push("...")
                }

                if (oldPage && currentPage - oldPage == 2) {
                    pages.push(oldPage + 1)
                }

                pages.push(currentPage)
                
                oldPage = currentPage
            }
        }
        return pages    
	}
	
	const pagination = document.querySelector(".paginate")
	const filter = pagination.dataset.filter
    const page = +pagination.dataset.page;
    const total = +pagination.dataset.total;

	const pages = paginate(page, total)

    let elements = ""

    for (let page of pages) {
        if (string(page).includes("...")) {
            elements += `<span>${page}</span>`
        } else {
            if( filter ) {
                elements += `<a href= "?page=${page}&filter=${filter}">${page}</a>`
            } else {
                elements += `<a href= "?page=${page}">${page}</a>`
            }
        }    
    }

    pagination.innerHTML = elements
