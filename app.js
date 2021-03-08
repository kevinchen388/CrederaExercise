// Fetches content from content.js and updates content of all cards
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
        fullMonth = displayMonth(splitted[1])
        formatted_date = fullMonth.concat(" ").concat(splitted[2]).concat(",").concat(splitted[3])
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

// Transform month shorthand to full name (ex. Jan -> January)
function displayMonth(input) {
    if (input == 'Jan'){
        return "January"
    }
    else if (input == 'Feb'){
        return "February"
    }
    else if (input == 'Feb'){
        return "February"
    }
    else if (input == 'Mar'){
        return "March"
    }
    else if (input == 'Apr'){
        return "April"
    }
    else if (input == 'Jun'){
        return "June"
    }
    else if (input == 'Jul'){
        return "July"
    }
    else if (input == 'Aug'){
        return "August"
    }
    else if (input == 'Sep'){
        return "September"
    }
    else if (input == 'Oct'){
        return "October"
    }
    else if (input == 'Nov'){
        return "November"
    }
    else {
        return "December"
    }
}

window.onload = changeContent ;
