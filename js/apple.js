$(function () {
    $(".boxy").click(function () {
        $(document.body).toggleClass("yin");
        $(".ku").slideToggle("slow");
        $(".gang11").toggleClass("gang1");
        $(".gang22").toggleClass("gang2");
        $(".gang22").toggleClass("gang222");
    });

    $(".icon-gouwuche").click(function () {
        $(".right").toggleClass("display2");
    })
    $(".coluumn h3").click(function () {
        $(this).next().children().toggleClass("display2");
        $(this).children().toggleClass("icon-cuowu")
        $(this).children().toggleClass("icon-jia")
    })

})



