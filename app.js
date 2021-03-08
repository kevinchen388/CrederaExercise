function changeContent () {
    //console.log(json_data)
    //console.log(json_data["cards"][0])

    for (i = 0; i < json_data["cards"].length; i++) {
        //console.log(json_data["cards"][i])
        card = json_data["cards"][i]

        var image = document.getElementById("image".concat(i));
        var date = document.getElementById("date".concat(i));
        var title = document.getElementById("title".concat(i));
        var description = document.getElementById("description".concat(i));
        new_image_url = "url(\"".concat(card["image_url"]).concat("\")")
        image.style.backgroundImage = new_image_url;
        date.innerHTML = card["date_published"];
        title.innerHTML = card["title"];
        description.innerHTML = card["description"];


    }
}
window.onload = changeContent ;

// fetch('../Credera/content.json')
//  .then(function (response) {
//    return response.json();
//  })
//  .then(function (data) {
//    console.log(data)
//    appendData(data);
//  })
//  .catch(function (err) {
//    console.log(err);
//  });


// function appendData(data) {
//  var mainContainer = document.getElementById("myData");
//  for (var i = 0; i < data.length; i++) {
//    var div = document.createElement("div");
//    div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
//    mainContainer.appendChild(div);
//  }
// }


