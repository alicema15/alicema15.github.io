function openSection(event, sectionId) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tab-content-c');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tab-link-c');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(sectionId).style.display = 'block';
    event.currentTarget.className += ' active';
}

document.getElementById('default-open').click();