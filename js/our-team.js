window.addEventListener('load', () => {
    var rat = document.getElementById('rat')
    var sy = document.getElementById('sy')
    var slash = document.getElementById('slash')
    var luigi = document.getElementById('luigi')
    var links = document.getElementsByClassName('links')

    function addLinks() {
        for (let i = 0; i < links.length; i++) {
            links[i].classList.add('link-trans')
        }
    }

    function delLinks() {
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('link-trans')
        }
    }

    rat.addEventListener('mouseover', event => {
        sy.classList.add('transition')
        slash.classList.add('transition')
        luigi.classList.add('transition')
        addLinks()
    })
    
    sy.addEventListener('mouseover', event => {
        rat.classList.add('transition')
        slash.classList.add('transition')
        luigi.classList.add('transition')
        addLinks()
    })
    
    slash.addEventListener('mouseover', event => {
        rat.classList.add('transition')
        sy.classList.add('transition')
        luigi.classList.add('transition')
        addLinks()
    })
    
    luigi.addEventListener('mouseover', event => {
        rat.classList.add('transition')
        sy.classList.add('transition')
        slash.classList.add('transition')
        addLinks()
    })
    
    // MOUSE OUT
    
    rat.addEventListener('mouseout', event => {
        sy.classList.remove('transition')
        slash.classList.remove('transition')
        luigi.classList.remove('transition')
        delLinks()
    })
    
    sy.addEventListener('mouseout', event => {
        rat.classList.remove('transition')
        slash.classList.remove('transition')
        luigi.classList.remove('transition')
    })
    
    slash.addEventListener('mouseout', event => {
        rat.classList.remove('transition')
        sy.classList.remove('transition')
        luigi.classList.remove('transition')
        delLinks()
    })
    
    luigi.addEventListener('mouseout', event => {
        rat.classList.remove('transition')
        sy.classList.remove('transition')
        slash.classList.remove('transition')
        delLinks()
    })
})
