const buttons = document.querySelectorAll(".mywork-menu button"
);
const items = document.querySelectorAll(".mywork-item .item");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        items.forEach(item => {
            if (filter === "all" || item.classList.contains(filter)){
                item.classList.remove("hide");
            
            }
            else{
                item.classList.add("hide");
            }
        }
        );
    });
});