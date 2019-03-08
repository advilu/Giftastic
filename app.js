let startingArray = ["clouds", "sunrise", "storm", "sun"];


function display() {
let queryURL = "https://api.giphy.com/v1/gifs/search?q="+ response + "&api_key=XTuXwnjA00P7l2H2XtV5Fsp2BxPUw9uq&limit=15";
};

$.ajax ({
    url: queryURL,
    method: GET
}).then(function(response){

    let response = results.data;
    response = toLowerCase(response);

    //for loop, iterate through the resulting images

    let imageStill = response.image.fixed_height_still.url
    let imageRegular = response.image.fixed_height.url


    $("button")


    let imageURL = response.data.image_original_url;
    let image = ("<img>");
    image.attr("src", imageURL);
    image.attr("alt", "A bunch of GIFs for you to enjoy");


});

