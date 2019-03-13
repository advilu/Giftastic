$(document).ready(function(){

let startingArray = ["clouds", "sunrise", "storm", "sun"];


function displayStartingArray() {
    $("#buttonSpace").empty();
    for (i in startingArray) {
        let startingButtons = $("<button>");
        startingButtons.attr("id", "startingButtons");
        startingButtons.addClass("gif");
        startingButtons.attr("data-tag", startingArray[i]);

        //console.log(startingButtons);
        startingButtons.text(startingArray[i]);
        $("#buttonSpace").append(startingButtons);
    }
}


$("#submit").on('click', function(event){
    event.preventDefault();
    let data = $("#input").val().trim().toLowerCase();
    startingArray.push(data);
    displayStartingArray();
    $("button").on("click", function(){
        //createButtons();
        
        let tag = $(this).attr("data-tag");
        //alert(tag)
        console.log("Tag",tag)
        $('#imageSpace').empty()
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tag + "&api_key=XTuXwnjA00P7l2H2XtV5Fsp2BxPUw9uq&limit=10";
    
        $.ajax ({
            url: queryURL,
            method: "GET"
        }).then(function(response){
                let result = response.data;
                for (let i=0; i<result.length; i++){
                
                    let imageStill = result[i].images.fixed_height_still.url;
                    let imageMoving = result[i].images.fixed_height.url;
                    let gifRating = result[i].rating;
    
                    
                    let programmaticImages = $("<img>");
                    programmaticImages.addClass("gif")
                    // programmaticImages.attr("id", "programmaticImages");
                    programmaticImages.attr("src", imageStill);
                    programmaticImages.attr("data-still", imageStill);
                    programmaticImages.attr("data-animate", imageMoving);
                    programmaticImages.attr("data-state", "still");
    
                    $("#imageSpace").prepend(programmaticImages);
                    $("#imageSpace").prepend("Rating: " + gifRating);
    
            }
        })
        
    });

})

//console.log("#submit");
    
//function createButtons(){
//    $("#submit").val().trim();
//}

// let response = toLowerCase(response);

displayStartingArray();

$("button").on("click", function(){
    //createButtons();
    
    let tag = $(this).attr("data-tag");
    //alert(tag)
    console.log("Tag",tag)
    $('#imageSpace').empty()
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tag + "&api_key=XTuXwnjA00P7l2H2XtV5Fsp2BxPUw9uq&limit=10";

    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then(function(response){
            let result = response.data;
            for (let i=0; i<result.length; i++){
            
                let imageStill = result[i].images.fixed_height_still.url;
                let imageMoving = result[i].images.fixed_height.url;
                let gifRating = result[i].rating;

                
                let programmaticImages = $("<img>");
                programmaticImages.addClass("gif")
                // programmaticImages.attr("id", "programmaticImages");
                programmaticImages.attr("src", imageStill);
                programmaticImages.attr("data-still", imageStill);
                programmaticImages.attr("data-animate", imageMoving);
                programmaticImages.attr("data-state", "still");

                $("#imageSpace").prepend(programmaticImages);
                $("#imageSpace").prepend("Rating: " + gifRating);

        }
        $(".gif").on("click", function() {
            var state = $(this).attr("data-state");
            if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
            } else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            };
        
          });

    })

    
    
    
});


});


