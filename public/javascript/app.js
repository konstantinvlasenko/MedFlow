// controller
function MyCtrl($scope) {
    var today = new Date(),
        events = [
            +new Date(today.getFullYear(), today.getMonth(), 8),
            +new Date(today.getFullYear(), today.getMonth(), 12),
            +new Date(today.getFullYear(), today.getMonth(), 24),
            +new Date(today.getFullYear(), today.getMonth() + 1, 6),
            +new Date(today.getFullYear(), today.getMonth() + 1, 7),
            +new Date(today.getFullYear(), today.getMonth() + 1, 25),
            +new Date(today.getFullYear(), today.getMonth() + 1, 27),
            +new Date(today.getFullYear(), today.getMonth() - 1, 3),
            +new Date(today.getFullYear(), today.getMonth() - 1, 5),
            +new Date(today.getFullYear(), today.getMonth() - 2, 22),
            +new Date(today.getFullYear(), today.getMonth() - 2, 27)
        ];
    $scope.thingsOptions = {
        value: today,
        dates: events,
        month: {
            // template for dates in month view
            content: '# if ($.inArray(+data.date, data.dates) != -1) { #' +
                '<div class="' +
                '# if (data.value < 10) { #' +
                "exhibition" +
                '# } else if ( data.value < 20 ) { #' +
                "party" +
                '# } else { #' +
                "cocktail" +
                '# } #' +
                '">#= data.value #</div>' +
                '# } else { #' +
                '#= data.value #' +
                '# } #'
        },
        footer: false
    };
}