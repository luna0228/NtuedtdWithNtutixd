
console.log('in');
function myFunction() {
    const homeHover = document.querySelectorAll(".homeSchool");;

    homeHover.addEventListener(
        "mouseenter",
        (event) => {
            // highlight the mouseenter target
            event.target.classList.add("active");
        },
        false,
    );
}
