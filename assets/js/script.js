const themeSwitch = document.getElementById("theme_switch")

const enableDarkMode = () => {
    document.body.classList.add("dark_mode")
}

const disableDarkMode = () =>{
    document.body.classList.remove("dark_mode")
}

themeSwitch.addEventListener("click" , () => {
    document.body.classList == "dark_mode" ? disableDarkMode() : enableDarkMode()
})
