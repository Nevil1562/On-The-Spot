(function($, document, window) {

    $(document).ready(function() {

        // hero-slider
        $(".hero-slider").flexslider({
            controlNav: true,
            directionNav: false,
            animation: "fade"
        });

        $(".menu-toggle").click(function() {
            $(".mobile-navigation").slideToggle();
        });
        $(".mobile-navigation").append($(".main-navigation .menu").clone());


        // Changing background image using data-attribute
        $("[data-bg-image]").each(function() {
            var image = $(this).data("bg-image");
            $(this).css("background-image", "url(" + image + ")");
        });

        // Changing background color using data-attribute
        $("[data-bg-color]").each(function() {
            var color = $(this).data("bg-color");
            $(this).css("background-color", color);
        });

        var $container = $('.filterable-items');

        $container.imagesLoaded(function() {
            $container.isotope({
                filter: '*',
                layoutMode: 'fitRows',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

        });
        $('.filterable-nav a').click(function(e) {
            e.preventDefault();
            $('.filterable-nav .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
        $('.mobile-filter').change(function() {

            var selector = $(this).val();
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

        initLightbox({
            selector: '.filterable-item a',
            overlay: true,
            closeButton: true,
            arrow: true
        });

        // $('.map').gmap3({
        //         map: {
        //             options: {
        //                 maxZoom: 14
        //             }
        //         },
        //         marker: {
        //             address: "40 Sibley St, Detroit",
        //             options: {
        //                 icon: new google.maps.MarkerImage(
        //                     "images/map-marker.png",
        //                     new google.maps.Size(43, 53, "px", "px")
        //                 )
        //             }
        //         }
        //     },
        //     "autofit");

    });

    $(window).load(function() {

    });

})(jQuery, document, window);

// custom js==========================================================


document.getElementById('con-log').innerHTML = `
<div class="con-login my-4 w-100 d-flex justify-content-around">
<div class="contact d-flex justify-content-around w-50">
    <p>Contact:+91 6353467371
    </p>
    <p>
        Email: onthespot@gmail.com
    </p>
</div>
<div class="login d-flex justify-content-evenly w-50">
    <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Login
  </button>
    <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
    Register
  </button>
</div>
</div>
`

document.getElementById('modal-wr').innerHTML = `
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content bg-dark">
        <div class="modal-header">
            <h2 class="modal-title text-white" id="staticBackdropLabel">Login To On The Spot</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label"><b>Usrname</b></label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type your Username Here">
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label"><b>Password</b></label>
                <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Password Here">
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Login</button>
        </div>
    </div>
</div>
</div>
<div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog ">
    <div class="modal-content p-3 bg-dark text-white">
        <div class="modal-header">
            <h2 class="modal-title text-white" id="staticBackdropLabel">Register To On The Spot</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Name</label>
                    <input type="text" class="form-control" id="inputEmail4">
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Mobile No</label>
                    <input type="number" class="form-control" id="inputPassword4">
                </div>

                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4">
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4">
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Your location">
                </div>

                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity">
                </div>
                <div class="col-md-6">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>Gujrat</option>
                  </select>
                </div>

                <div class="col-md-12">
                    <label for="inputState" class="form-label">Your Vehicle</label>
                    <select id="inputState" class="form-select">
                    <option selected>Choose Your Vehicle</option>
                    <option>2-Wheeler</option>
                    <option>4-Wheeler</option>
                    <option>Any Other Vehicle</option>
                  </select>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Others</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Specify your vehicle and requirement"></textarea>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Register</button>
        </div>
    </div>
</div>
</div>

`

$('.menu-item').click(function() {
    $(this).addClass('active')
})
