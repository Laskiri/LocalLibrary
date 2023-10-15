addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("author_search")
    const authorList = document.getElementById("author_list");

    searchBar.addEventListener("input", updateAuthorList) 


    function updateAuthorList(e) {
        const searchQuery = e.target.value.toLowerCase();
        const authors = authorList.getElementsByTagName("li");
      
        for (let i = 0; i < authors.length; i++) {
          const authorName = authors[i].querySelector("a").textContent.toLowerCase();
          if (authorName.includes(searchQuery)) {
            authors[i].style.display = "block";
          } else {
            authors[i].style.display = "none";
          }
        }
      }
});






