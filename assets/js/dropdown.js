$("#profileButton").click(function(){
    $("#pageDropped").addClass("show");
    $("body").addClass("nonscroll");

    $("#profileDropdown").addClass("profile-dropdown");
    $("#profileDropdown").addClass("dropdown-active");
});

$("#switcher").click(function(){
    $("#pageDropped").addClass("show");
    $("body").addClass("nonscroll");

    $("#switchDropdown").addClass("dropdown-active");
    $('.title-list-options-box-options-sorting').addClass("z-boost-200");
});

$("#smallProfileButton").click(function(){
    $("#pageDropped").addClass("show");
    $("body").addClass("nonscroll");

    $("#profileDropdown").addClass("profile-dropdown");
    $("#profileDropdown").addClass("dropdown-active");
    $("#profileDropdown").addClass("small-profile-dropdown");
});
  
$(document).click(function(event) {
    if (!$(event.target).closest("#profileButton,#switcher,#smallProfileButton").length) {
        $("#pageDropped").removeClass("show");
        $('.title-list-options-box-options-sorting').removeClass("z-boost-200");
        $("body").removeClass("nonscroll");

        $("#profileDropdown").removeClass("dropdown-active");
        $("#profileDropdown").removeClass("profile-dropdown");
        $("#profileDropdown").removeClass("small-profile-dropdown");
        $("#switchDropdown").removeClass("dropdown-active");
    }
});
  