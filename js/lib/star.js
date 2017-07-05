+(function () {
    /**
     * ym
     * 
     */
    function Star() {
        this.init();
    }
    Star.prototype.init = function () {
        var _this = this;
        $(document).on('click', '[data-role="star"]', function (e) {
            _this.clickStar(e, $(this))
        })
        $(document).on('mousemove', '[data-role="star"]', function (e) {
            var i =  _this.activeStar(e.offsetX,$(this))
                 $(this).trigger('active',[i])
        })
        $(document).on('mouseleave', '[data-role="star"]', function (e) {
            _this.removeAllStar($(this));
            var i  = $(this).data('active')
            $(this).addClass('star'+i)
            $(this).trigger('active', [i])
        })
    }
    Star.prototype.activeStar = function (x, $myStar) {
        this.removeAllStar($myStar);
        var width = $myStar.width();
        var n = Math.ceil(x / (width / 5));
        $myStar.addClass('star' + n);
        return n;
    }
    Star.prototype.removeAllStar = function ($myStar) {
        var activeClass = ['star0', 'star1', 'star2', 'star3', 'star4', 'star5'];
        activeClass.forEach(function (item, index) {
            $myStar.removeClass(item);
        })
    }
    Star.prototype.clickStar = function (e, $myStar) {
        this.removeAllStar($myStar);
        var i = this.activeStar(e.offsetX, $myStar);
        $myStar.data("active", i)
            .trigger("active", i);
        console.log($myStar.data("active"))
    }

    new Star();
})()





    var starText = ['不喜欢', '没感觉', '还不错', '很喜欢', '非常赞'];

    $('.reviewInfoStar').on('active', function (e, data) {
      var $scoreGroup = $(this).siblings('.score-group');
      if (!data) {
        $scoreGroup.hide();
        $(this).siblings('.make-score').show();
      } else {
        $scoreGroup.show();
        $(this).siblings('.make-score').hide();
        $scoreGroup.find('.score-win').show().html(data + '.0分');
        $scoreGroup.find('.score-fell').html(starText[data - 1]);
      }
    })
