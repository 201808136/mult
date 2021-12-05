
$("#entry button").on("click", saveOnePost);
$("#restart button").on("click", deleteIt);

function saveOnePost() {

    var title = $("#ftitle").val();
    var fn = $("#firstname").val();
    var sn = $("#secondname").val();
    var search = $("#search").val();
    var search2 = $("#search2").val();
    var search3 = $("#search3").val();
    var search4 = $("#search4").val();
    var search5 = $("#search5").val();
    var search6 = $("#search6").val();
    var search7 = $("#search7").val();
    var search8 = $("#search8").val();
    var search9 = $("#search9").val();
    var search10 = $("#search10").val();
    var search11 = $("#search11").val();
    var search12 = $("#search12").val();
    var search13 = $("#search13").val();
    var search14 = $("#search14").val();
    var search15 = $("#search15").val();
    var search16 = $("#search16").val();
    var search17 = $("#search17").val();
    var search18 = $("#search18").val();
    var search19 = $("#search19").val();
    var search20 = $("#search20").val();
    var search21 = $("#search21").val();
    var search22 = $("#search22").val();
    var search23 = $("#search23").val();
    var search24 = $("#search24").val();
    var search25 = $("#search25").val();
    var search26 = $("#search26").val();
    var search27 = $("#search27").val();

    let x = Math.floor((Math.random() * 1000) + 1);
    let y = Math.floor((Math.random() * 1000) + 1);
    let z = Math.floor((Math.random() * 1000) + 1);
    let k = Math.floor((Math.random() * 1000) + 1);
    let l = Math.floor((Math.random() * 1000) + 1);
    let m = Math.floor((Math.random() * 1000) + 1);
    let n = Math.floor((Math.random() * 1000) + 1);

 var tiitl = "https://picsum.photos/id/"+ x +"/200/200";
  var url1 = "https://picsum.photos/id/"+ y +"/200/200";
  var url2 = "https://picsum.photos/id/"+ z +"/200/200";
  var url3 = "https://picsum.photos/id/"+ k +"/200/200";
  var url4 = "https://picsum.photos/id/"+ l +"/200/200";
  var url5 = "https://picsum.photos/id/"+ m +"/200/200";
  var url6 = "https://picsum.photos/id/"+ n +"/200/200";

  $("#title").attr("src", tiitl);

  $("#img1").attr("src", url1);

  //segunda imagem
  $("#img2").attr("src", url2);

   //terceira imagem
   $("#img3").attr("src", url3);

   //quarta imagem
   $("#img4").attr("src", url4);

    //primeira imagem
  $("#img5").attr("src", url5);

  //segunda imagem
  $("#img6").attr("src", url6);
    
  //fazer alguma coisa com o id para selecionar não me lembro
  var i =  localStorage.length;
var titulos = title;
    let conteudo = '<h1>'+ title +'</h1> <img class ="coverss" src="https://picsum.photos/id/'+ x +'/200/200" alt="" id="'+i+'"> <p> Once upon a time there was a '+ search + ' named '+ fn +', from '+ search25 +'. They had really '+ search2 +' and '+ search3 +'. They were known for '+ search4 +' and everyday they would '+ search5 +'. <img src="https://picsum.photos/id/'+ y +'/200/200" alt="" id="img1"></p> <p> But on a '+ search6 +' '+ fn +' was in '+ search7 +' and a '+ search27 +' named '+ sn +' showed up. '+ sn +' was know for '+ search8 +'. Suddenly, something unexpected happened. '+ sn +' '+ search9 +' and disappeared. They '+ search10 +'. '+ fn +' was devastated. </p><img src="https://picsum.photos/id/'+ z +'/200/200" alt="" id="img2">  <p>'+ fn +' didn’t know what to do so they went to '+ search11 +' looking for '+ search12 +' who gave them advice: <br> -'+ search13 +' <br> -'+ search14 +' - '+ fn +' replied.</p><img src="https://picsum.photos/id/'+ k +'/200/200" alt="" id="img3"> <p>'+ fn +' was '+ search15 +' and decided to go looking for '+ sn +'. After '+ search16 +' for '+ search17 +' hours they finally found them. '+ sn +' was '+ search18 +', and said: <br>- '+ search19 +' </p><img src="https://picsum.photos/id/'+ l +'/200/200" alt="" id="img4"> <p>Unexpectedly '+ fn +' '+ search20 +' and said: <br> - '+ search21 +'</p><img src="https://picsum.photos/id/'+ m +'/200/200" alt="" id="img5"> <p>'+ fn +' was so '+ search22 +' and decided to '+ search23 +' with '+ search24 +'. They lived '+ search26 +' ever after.</p><img src="https://picsum.photos/id/'+ n +'/200/200" alt="" id="img6">'
    console.log(conteudo);
    localStorage.setItem(titulos, conteudo);

  }


function deleteIt() {
  var elements = document.getElementsByTagName("input");
    for (var ii=0; ii < elements.length; ii++) {
      if (elements[ii].type == "text") {
        elements[ii].value = "";
      }}
}
