$(document).ready(function() {

    // LightSlider
    $(".main-slider").lightSlider({
        item: 1,
        loop: true,
        enableDrag: false,
        enableTouch: true,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 800,
        keyPress: true,
        auto: true,
        pause: 8000,
        pauseOnHover: false,
        slideMargin: 0,
        pager: true,
        controls: false
    });

    // Ion Range Slider
    let $range1 = $(".js-range-slider-1"),
        $range2 = $(".js-range-slider-2"),
        $range3 = $(".js-range-slider-3"),
        $range4 = $(".js-range-slider-4"),
        $percentage1 = $(".percentage-1 > .percentage"),
        $percentage2 = $(".percentage-2 > .percentage"),
        $percentage3 = $(".percentage-3 > .percentage"),
        $percentage4 = $(".percentage-4 > .percentage");

    $range1.ionRangeSlider({
        skin: "round",
        type: "single",
        min: 0,
        max: 100,
        from: 60,
        onStart: function(data) {
            $percentage1.text(data.from + '%');
        },
        onChange: function(data) {
            $percentage1.text(data.from + '%');
        }
    });

    $range2.ionRangeSlider({
        skin: "round",
        type: "single",
        min: 0,
        max: 100,
        from: 20,
        onStart: function(data) {
            $percentage2.text(data.from + '%');
        },
        onChange: function(data) {
            $percentage2.text(data.from + '%');
        }
    });

    $range3.ionRangeSlider({
        skin: "round",
        type: "single",
        min: 0,
        max: 100,
        from: 5,
        onStart: function(data) {
            $percentage3.text(data.from + '%');
        },
        onChange: function(data) {
            $percentage3.text(data.from + '%');
        }
    });

    $range4.ionRangeSlider({
        skin: "round",
        type: "single",
        min: 0,
        max: 100,
        from: 25,
        onStart: function(data) {
            $percentage4.text(data.from + '%');
        },
        onChange: function(data) {
            $percentage4.text(data.from + '%');
        }
    });

});