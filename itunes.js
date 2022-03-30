$(function () {
    $("#searchBtn").on('click', function (e) {
        $("#results").empty();
        let searchTerm = $("#searchInput").val();
        $.get(
            // the endpoint
            'https://itunes.apple.com/search?',
            // query params
            {
                term: searchTerm,
                media: 'music',
                limit: 20,
            },
            // function to call when a result is returned
            function (data) {
                // data is what you see in postman
                for (i in data.results) {
                    $("#results").append(`
                        <div class="card bg-dark text-light col-md-3">
                            <img class="card-img-top mx-auto" src="${data.results[i].artworkUrl100}" alt="">
                            <div class="card-body">
                                <h5 class="card-title">${data.results[i].trackName}</h5>
                                <p class="card-text">Album:<br>${data.results[i].collectionName}</p>
                                <p class="card-text">By:<br>${data.results[i].artistName}</p>        
                            </div>
                        </div>
                    `);
                }
            },
            // return type expected
            'json' // or html, text, xml
        )
        //$.post()
        //$.ajax();
    });

    // this code after the request would run before the results are returned
})