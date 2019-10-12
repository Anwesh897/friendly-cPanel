const Interstellar = ['Dreaming of the Crash','Cornfield Chase','Dust','Day One','Stay',
              'Message from Home','The Wormhole','Mountains','Afraid of Time',
              'A Place Among the Stars','Running Out',`I'm Going Home`,'Coward',
              'Detach','STAY_',`Where We're Going`,'First Step','Flying Drone',
              'Atmospheric Entry','No Need To Come Back','Imperfect Lock',
              'No Time For Caution','What Happens Now','Do Not Go Gentle Into That Good Night'];


for(i=0;i<Interstellar.length;i++){
    const create = document.createElement("p");
    const text = document.createTextNode(`${Interstellar[i]}`);
    create.appendChild(text);

    const access = document.querySelector('.musicContainer');
    access.appendChild(create);
}
function fnInterstellar(){
    if(fnInterstellar){
        document.querySelector('.musicContainer').style.display = "block";
    }
}