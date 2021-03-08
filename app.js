function changeContent() {

    for (i = 0; i < json_data["cards"].length; i++) {
        card = json_data["cards"][i]

        // Image
        var image = document.getElementById("image".concat(i));
        new_image_url = "url(\"".concat(card["image_url"]).concat("\")")
        image.style.backgroundImage = new_image_url;

        // Date
        var date = document.getElementById("date".concat(i));
        var currentdate = new Date(card["date_published"]);
        var splitted = currentdate.toDateString().split(" ");
        formatted_date = splitted[1].concat(" ").concat(splitted[2]).concat(",").concat(splitted[3])
        date.innerHTML = formatted_date;

        // Title
        var title = document.getElementById("title".concat(i));
        title.innerHTML = card["title"];

        // Description
        var description = document.getElementById("description".concat(i));
        description.innerHTML = card["description"];

        // Link
        var link = document.getElementById("link".concat(i));
        link.setAttribute("href", card["link"]);

    }
}
window.onload = changeContent ;

// fetch()
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