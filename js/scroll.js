(function ($) {

    $.fn.verticalScroll = function() {

          var padding = 10;

          var browserHeight = window.innerHeight;
          var htmlHeight = $("#avisos").outerHeight(true);

          console.info(browserHeight);
          console.info(htmlHeight);

          if (browserHeight<htmlHeight) {
            $('<style>.scroll {animation: MoveUpDown 20s ease-in-out infinite;position: absolute;top: 0px;}' +
            '@keyframes MoveUpDown' +
            '{ 0% { top: 0px; } ' +
            ' 25% { top: 0px; } ' +
            ' 50% { top: -' + (htmlHeight-browserHeight) + 'px; } ' +
            ' 75% { top: -' + (htmlHeight-browserHeight) + 'px; } ' +
            ' 100% { top: 0px; }' +
            '}</style>').appendTo('head');
          }

        return this;
    };

}(jQuery));