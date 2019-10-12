const list = ["Batman Begins/batmanbegins","Black Panther/blackpanther","Blade Runner 2049/bladerunner2049",
              "Dunkirk/dunkirk","Game of Thrones/gameofthrones","Harry Potter/harrypotter","Inception/inception",
              "Interstellar/interstellar","Man of Steel/manofsteel","Narnia/narnia",
              "Pirates of The Caribbean/piratesofthecaribbean","Sherlock Holmes/sherlockholmes",
              "The Amazing Spider-man 2/theamazingspiderman2","The Dark Knight Rises/thedarkknightrises",
              "The Dark Knight/thedarkknight","Wonder Woman/wonderwoman"];

for(i=0;i<list.length;i++){
    const createjs = document.createElement("script");
    createjs.setAttribute("src",`js&cssFiles/${list[i]}.js`);
    document.head.appendChild(createjs);

    const createcss = document.createElement("link");
    createcss.setAttribute("rel","stylesheet");
    createcss.setAttribute("href",`js&cssFiles/${list[i]}.css`);
    document.head.appendChild(createcss);
}





























// function para_0(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[0]}.MP3`;
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(0)){
//             document.querySelector('.para_0').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }

// }

// function para_1(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[1]}.MP3`;
//     document.querySelector('.para_1').style.color = 'red';
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(1)){
//             document.querySelector('.para_1').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }
// }
// function para_2(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[2]}.MP3`;
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(2)){
//             document.querySelector('.para_2').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }

// }

// function para_3(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[3]}.MP3`;
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(3)){
//             document.querySelector('.para_3').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }
// }
// function para_4(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[4]}.MP3`;
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(4)){
//             document.querySelector('.para_4').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }

// }

// function para_5(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[5]}.MP3`;
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(5)){
//             document.querySelector('.para_5').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }
// }
// function para_6(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[6]}.MP3`;
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(6)){
//             document.querySelector('.para_6').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }

// }

// function para_7(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[7]}.MP3`;
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(7)){
//             document.querySelector('.para_7').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }
// }
// function para_8(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[8]}.MP3`;
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(8)){
//             document.querySelector('.para_8').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }

// }

// function para_9(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[9]}.MP3`;
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(9)){
//             document.querySelector('.para_9').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }
// }
// function para_10(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[10]}.MP3`;
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(10)){
//             document.querySelector('.para_10').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }

// }

// function para_11(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[11]}.MP3`;
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(11)){
//             document.querySelector('.para_11').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }
// }
// function para_12(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[12]}.MP3`;
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(12)){
//             document.querySelector('.para_12').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }

// }

// function para_13(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[13]}.MP3`;
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(13)){
//             document.querySelector('.para_13').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }
// }
// function para_14(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[14]}.MP3`;
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(14)){
//             document.querySelector('.para_14').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }

// }

// function para_15(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[15]}.MP3`;
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(15)){
//             document.querySelector('.para_15').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }
// }
// function para_16(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[16]}.MP3`;
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(16)){
//             document.querySelector('.para_16').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }

// }

// function para_17(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[17]}.MP3`;
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(17)){
//             document.querySelector('.para_17').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }
// }
// function para_18(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[18]}.MP3`;
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(18)){
//             document.querySelector('.para_18').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }

// }

// function para_19(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[19]}.MP3`;
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(19)){
//             document.querySelector('.para_19').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }
// }
// function para_20(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[20]}.MP3`;
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(20)){
//             document.querySelector('.para_20').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }

// }

// function para_21(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[21]}.MP3`;
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(21)){
//             document.querySelector('.para_21').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }
// }
// function para_22(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[22]}.MP3`;
//     for(i=0;i<list.length;i++){
//         if(document.getElementsByTagName("P").item(22)){
//             document.querySelector('.para_22').style.color = 'red';
//         }
//         document.getElementsByTagName("P").item(i).style.color = 'black';
//     }

// }

// function para_23(){
//     document.getElementById('audio').src = `Music/Interstellar/${list[23]}.MP3`;
//     document.querySelector('.para_23').style.color = 'red';
//     for(i=0;i<list.length-1;i++){
//         if(document.getElementsByTagName("P").item(23)){
//             document.querySelector('.para_23').style.color = 'red';
//         }
//             document.getElementsByTagName("P").item(i).style.color = 'black';
//     }
// }

