var currentTheme = 0

function switchTheme(){
   
    let root = document.documentElement;

    if (currentTheme == 0){
        
        document.getElementsByClassName("toggle_button")[0].style.justifyContent = "flex-end"

        document.getElementById("toggle_text").innerText ="Light Mode"; 
        currentTheme = 1;

        root.style.setProperty('--site-bg','var(--light-site-bg)');
        root.style.setProperty('--site-bg-top','var(--light-site-bg-top)');
        root.style.setProperty('--top-text','var(--light-top-text)');
        root.style.setProperty('--header-hr','var(--light-header-hr)');
        root.style.setProperty('--text','var(--light-text)');
        root.style.setProperty('--card-bg','var(--light-card-bg)');
        root.style.setProperty('--hover-card-bg','var(--light-hover-card-bg)');
        root.style.setProperty('--toggle-bg','var(--light-toggle-bg)');
        root.style.setProperty('--toggle-hover-bg','var(--light-toggle-hover-bg)');
        root.style.setProperty('--toggle-circle-bg','var(--light-toggle-circle-bg)');

    }
    else if (currentTheme == 1){

        document.getElementsByClassName("toggle_button")[0].style.justifyContent = "flex-start"

        document.getElementById("toggle_text").innerText = "Dark Mode"; 
        currentTheme = 0;
        
        root.style.setProperty('--site-bg','var(--dark-site-bg)');
        root.style.setProperty('--site-bg-top','var(--dark-site-bg-top)');
        root.style.setProperty('--top-text','var(--dark-top-text)');
        root.style.setProperty('--header-hr','var(--dark-header-hr)');
        root.style.setProperty('--text','var(--dark-text)');
        root.style.setProperty('--card-bg','var(--dark-card-bg)');
        root.style.setProperty('--hover-card-bg','var(--dark-hover-card-bg)');
        root.style.setProperty('--toggle-bg','var(--dark-toggle-bg)');
        root.style.setProperty('--toggle-hover-bg','var(--dark-toggle-hover-bg)');
        root.style.setProperty('--toggle-circle-bg','var(--dark-toggle-circle-bg)');

    }
    
}