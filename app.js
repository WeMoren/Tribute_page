const sideNavigation = document.querySelector('.side-navigation');
const sideNavigationContent = document.querySelector('.side-navigation-content');
const openSideNav = document.getElementById('openSideNav');
const closeSideNav = document.getElementById('closeSideNav');

openSideNav.onclick = function(){
    sideNavigation.style.display = 'flex';
}

closeSideNav.onclick = function(){
    sideNavigation.style.display = 'none';
}

window.onclick = function(e){
    if(e.target == sideNavigationContent){
        sideNavigation.style.display = 'none';
    }
}