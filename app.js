const boss = () => {
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => displayBoss(data))
}
boss();

const displayBoss = data => {
    
    const buddies = data.results;
    let div = document.getElementById('div');
    for(const buddy of buddies){
        let images = document.createElement('div');
        images.innerHTML= `<img src="${buddy.picture.large}"/>`;
        div.appendChild(images);

        let h2 = document.createElement('h2');
        h2.innerText = 'Name:'+ ' ' + buddy.name.title + ' ' + buddy.name.first + ' ' + buddy.name.last;
        div.appendChild(h2);

        let h4 = document.createElement('h4');
        h4.innerText = 'Email:' + ' ' + buddy.email;
        div.appendChild(h4);

        h4 = document.createElement('h4');
        h4.innerText = 'Phone:' + ' ' + buddy.cell;
        div.appendChild(h4);

        let h5 = document.createElement('h5');
        h5.innerText = 'City:' + ' ' + buddy.location.city + ' ' + 'Country:' + ' ' + buddy.location.country;
        div.appendChild(h5);

        let h6 = document.createElement('h6');
        h6.innerText = 'Gender:' + ' ' + buddy.gender;
        div.appendChild(h6);
    }
}
