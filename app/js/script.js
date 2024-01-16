
const theme = document.getElementsByTagName("body")[0];
const radioButtons = document.querySelectorAll(".toggle__wrapper input");

radioButtons.forEach((button) => {
    button.addEventListener('click', event => {
        if(document.getElementById("dark").checked) {
            theme.classList = 'dark'; 
        } else {
            theme.classList = 'light'; 
        }
    });
});