var tempGuide = "";
var tkStartTime = Date.now();
var tkTimeEnable = false;
var currPopID = "";
var currBadgeHolder = Array(5).fill('');
var obj = [
    {'class': 'cat_auto', 'name': 'Designing An Autonomous Car'},
    {'class': 'cat_auto', 'name': 'Designing An Autonomous UAV'},
    {'class': 'cat_auto', 'name': 'Designing An Autonomous Rocket'},
    {'class': 'cat_auto', 'name': 'Designing An Autonomous Honey Bee Bug Robot'},
    {'class': 'cat_auto', 'name': 'Designing An AI Autonomous Boat'},
    {'class': 'cat_auto', 'name': 'Designing the Ultimate Next Gen Autonomous Car'},



    {'class': 'cat_drones', 'name': 'Designing An Attrack Drone'},
    {'class': 'cat_drones', 'name': 'Designing A find Person Drone'},
    {'class': 'cat_drones', 'name': 'Designing An fire fighter Drone'},
    {'class': 'cat_drones', 'name': 'Designing An inspection drone'},
    {'class': 'cat_drones', 'name': 'Designing An life guard drone Boat'},
    {'class': 'cat_drones', 'name': 'Designing the Ultimate Next Gen Autonomous Drone'},
    
    
    {'class': 'cat_catapults', 'name': 'Designing A Electronic Catapult'},
    {'class': 'cat_catapults', 'name': 'Designing A Human Launch Catapult'},
    {'class': 'cat_catapults', 'name': 'Designing A Egg Safe Catapult'},
    {'class': 'cat_catapults', 'name': 'Designing A Granade Catapult'},
    {'class': 'cat_catapults', 'name': 'Designing A Underwater Catapult'},
    {'class': 'cat_catapults', 'name': 'Designing A Trampoline Catapult'},
    
    {'class': 'cat_glasses', 'name': 'Designing An AI AR Glasses'},
    {'class': 'cat_glasses', 'name': 'Designing An AI AR Motorcycle Visor'},
    {'class': 'cat_glasses', 'name': 'Designing A AR Assisted Vision System'},
    {'class': 'cat_glasses', 'name': 'Designing Covert AR Glasses'},
    {'class': 'cat_glasses', 'name': 'Remaking the Microsoft Hololens'},
    {'class': 'cat_glasses', 'name': 'Designing AR Iron Man Helmet'},
    
    
    {'class': 'cat_lasers', 'name': 'Designing A Laser Bazooka'},
    {'class': 'cat_lasers', 'name': 'Designing A Laser Destruction System'},
    {'class': 'cat_lasers', 'name': 'Designing A Laser Automatic Blinder'},
    {'class': 'cat_lasers', 'name': 'Designing A Laser Drone'},
    {'class': 'cat_lasers', 'name': 'Designing Laser Glass Eye Tracking'},
    {'class': 'cat_lasers', 'name': 'Designing A High Power Hand Mounted Laser'},

];
function ccHideAll(){
    jQuery(".cat_auto").hide();
    jQuery(".cat_drones").hide();
    jQuery(".cat_catapults").hide();
    jQuery(".cat_glasses").hide();
    jQuery(".cat_lasers").hide();
}
function ccShowDrones(){
    ccHideAll();
    jQuery(".cat_drones").show();
    $("#cc_gui").html("Drone Engineering Guides");
}

function ccShowVehicles(){
    ccHideAll();
    jQuery(".cat_auto").show();
    $("#cc_gui").html("Autonomous Vehicle Engineering Guides");
}

function ccShowGlass(){
    ccHideAll();
    jQuery(".cat_glasses").show();
    $("#cc_gui").html("AI AR Glass Engineering Guides");
}
function ccShowCatapults(){
    ccHideAll();
    jQuery(".cat_catapults").show();
    $("#cc_gui").html("Catapult Engineering Guides");
}
function ccHashCode(str) { 
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
} 

function ccIntToRGB(i){
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
}
function ccGenColor(str){
    return ccIntToRGB(ccHashCode(str));
}
function tk_id(tk_input) {
    return tk_input.substring(7);
}
function ccScrollTo(id) {
    $('html, body').animate({
        scrollTop: $("#" + id).offset().top - 100
    }, 2000);
}
function ccShowAdvanceSearch() {
    jQuery('.cc_sea').hide();
    jQuery('.cc_ser').show();
    jQuery('.cc_seh').show();
}
function ccHideAdvanceSearch() {
    jQuery('.cc_sea').show();
    jQuery('.cc_ser').hide();
    jQuery('.cc_seh').hide();
}
function ccGuidedList() {
    var listitem;
    $.each(obj, function (index, value) {
        listitem = $(tempGuide);
        listitem.find(".cc_tit").html(value.name);
        listitem.attr('style', 'background-color: #'+ccGenColor(value.name)+' !important;');
        listitem.addClass(value.class);
        $("#cc_bui").append(listitem);
        console.log(index, value.class);
    });

}
function ccInit(){
    tempGuide = $("#cc_bui").html();
    $("#cc_bui").html("");
}
function reListen() {
    jQuery(document).on('click', '.cc_prj', function (e) {
        e.preventDefault();
        ccScrollTo("projects");
    });
    jQuery(document).on('click', '.cc_cmp', function (e) {
        e.preventDefault();
        ccScrollTo("competitions");
    });
    jQuery(document).on('click', '.cc_tem', function () {
        ccScrollTo("team");
    });
    jQuery(document).on('click', '.cc_tut', function () {
        ccScrollTo("buildawesome");
    });

    jQuery(document).on('click', '.cc_buy', function () {
        alert("This will allow the user to buy a ready made kit if we decide to make them.");
    });

    jQuery(document).on('click', '.cc_sea', function () {
        ccShowAdvanceSearch();
    });
    jQuery(document).on('click', '.cc_sec', function () {
        ccHideAdvanceSearch();
    });
    jQuery(document).on('click', '.cc_dro', function (e) {
        e.preventDefault();
        ccShowDrones();
    });
    
    jQuery(document).on('click', '.cc_veh', function (e) {
        e.preventDefault();
        ccShowVehicles();
    });
    
    jQuery(document).on('click', '.cc_cat', function (e) {
        e.preventDefault();
        ccShowCatapults();
    });
    jQuery(document).on('click', '.cc_gls', function (e) {
        e.preventDefault();
        ccShowGlass();
    });
    
    jQuery(document).on('click', '.cc_las', function (e) {
        e.preventDefault();
        ccShowGlass();
    });
    
    jQuery(document).on('click', '.cc_fun', function (e) {
        e.preventDefault();
        ccHideAll();
    });
    ccInit();
    ccHideAdvanceSearch();
    ccGuidedList();
//    jQuery(document).on('keyup', '#tk_txt', function () {
//        if (event.keyCode === 13) {
//            addTask();
//        }
//    });
//    jQuery(document).on('click', '.tk_ply', function () {
//        var tk_current_id = tk_id(jQuery(this).attr('id'));
//        if ((parseInt(tk_current_id) || 0) !== 0) {
//            txt = jQuery("#tk_tsk_" + tk_current_id).text();
//            console.log(txt);
//            addTrack(txt);
//        } else {
//            addTrack(jQuery("#tk_txt").val());
//        }
//
//
//    });
//    jQuery(document).on('click', '.tk_del', function () {
//        remTaskList(tk_id(jQuery(this).attr('id')));
//    });
}
jQuery(document).ready(function () {
    reListen();
});
