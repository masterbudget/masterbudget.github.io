    $('#go2Top').hide();
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        //console.log(height);
        if (height > 100) {
            $('#go2Top').show();
        } else {
            $('#go2Top').hide();
        }
    });