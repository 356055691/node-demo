require('../../css/games/style.css');
var $ = require("jquery");
var runObj = {};

runObj = {
	init: function() {
		var that = this;

		this.$c = $('.table');
		this.$startBtn = $('.start-btn');
		this.$startBtn.on('click', function() {
			that.go();
		});
		$('.chan-speed').on('click', function() {
			var $this = $(this);

			that.choseSpeed($this);
		});
		$(document).on('keydown', function() {
			that.keydown();
		});
		this.preX = 0;
		this.preY = 0;
		this.preXNew = 0;
		this.preYNew = 0;
		this.down = 10;
		this.right = 0;
		this.pointLimit = '';
		this.thisLimit = [{x: 0, y: 0}];
		this.limitX = 0;
		this.limitY = 0;
		this.score = 0;
	},
    go: function() {
    	var that = this;

    	clearInterval(this.autoGo);
		this.speed = $('.speed').val();
    	if (!this.speed) {
    		alert('麻烦先选个速度呗～～');
    		return false;
    	}
    	if (this.$startBtn.hasClass('restart')) {
    		clearInterval(this.autoGo);
    		this.init();
    		$('.table').empty();
    	}
    	this.point();
    	this.autoGo = '';
    	$('.score').text('0');

        this.runArray = [
        	{x: 0,y: 20},
        	{x: 0,y: 10},
        	{x: 0,y: 0},
        ];
        this.autoGo = setInterval(function() {
        	that.runArray.forEach(function(val, index) {
        		if (index === 0) {
        			that.preX = val.x;
        			that.preY = val.y;
        			val.x += that.right;
        			val.y += that.down;
        			that.limitX = val.x;
        			that.limitY = val.y;
        		} else {
        			that.preXNew = val.x;
        			that.preYNew = val.y;
        			val.x = that.preX;
        			val.y = that.preY;
        			that.preX = that.preXNew;
        			that.preY = that.preYNew;
        		}
        	});
        	that.draw();
        }, this.speed);
	},
	draw: function() {
		var $c = this.$c;
		var that =this;
		
		if (this.right < 0) {
			this.thisLimit = [
				{x: this.limitX, y: this.limitY}
			];
			if (this.thisLimit[0].x === this.pointLimit[0].x && this.thisLimit[0].y === this.pointLimit[0].y) {
				that.ok();
			}
		}
		if (this.down < 0) {
			this.thisLimit = [
				{x: this.limitX, y: this.limitY}
			];
			if (this.thisLimit[0].x === this.pointLimit[0].x && this.thisLimit[0].y === this.pointLimit[0].y) {
				that.ok();
			}
		}
		if (this.right > 0) {
			this.thisLimit = [
				{x: this.limitX, y: this.limitY}
			];
			if (this.thisLimit[0].x === this.pointLimit[0].x && this.thisLimit[0].y === this.pointLimit[0].y) {
				that.ok();
			}
		}
		if (this.down > 0) {
			this.thisLimit = [
				{x: this.limitX, y: this.limitY}
			];
			if (this.thisLimit[0].x === this.pointLimit[0].x && this.thisLimit[0].y === this.pointLimit[0].y) {
				that.ok();
			}
		}
		if (this.thisLimit[0].x < 0 || this.thisLimit[0].x > 1010 || this.thisLimit[0].y < 0 || this.thisLimit[0].y > 510) {
			alert('挂啦！菜鸟！我看你骨骼惊奇，再来一局吧～～');
			clearInterval(this.autoGo);
			$('.start-btn').val('再来一局').addClass('restart');
		}
		$('.item').remove();
		this.runArray.forEach(function(val, index) {
			$c.append(`<div class="item" style="top:${val.y}px;left:${val.x}px;"></div>`);
		});
	},
	keydown: function () {
		if (event.keyCode === 37) {
			// alert('左');

			if (this.right <= 0) {
				this.right = -10;
				this.down = 0;
			}
			event.preventDefault();
		}
		if (event.keyCode === 38) {
			// alert('上');

			if (this.down <= 0) {
				this.right = 0;
				this.down = -10;
			}
			event.preventDefault();
		}				 
		if (event.keyCode === 39) {
			// alert('右');

			if (this.right >= 0) {
				this.right = 10;
				this.down = 0;
			}
			event.preventDefault();
		}
		if (event.keyCode === 40) {
			// alert('下');

			if (this.down >= 0) {
				this.right = 0;
				this.down = 10;
			}
			event.preventDefault();
		}
	},
	point: function () {
		var $c = this.$c;
		var randomX = parseInt(100 * Math.random()) * 10;
		var randomY = parseInt(50 * Math.random()) * 10;

		$('.point').remove();
		this.pointLimit = [
			{x: randomX, y: randomY},
			{x: randomX + 10, y: randomY + 10}
		];
		$c.append(`<div class="point" style="top:${randomY}px;left:${randomX}px;"></div>`);
	},
	ok: function() {
		this.runArray.push({
			x: this.pointLimit[0].x,
			y: this.pointLimit[0].y
		});
		this.point();
		this.score ++;
		$('.score').html(this.score);
	},
	choseSpeed: function(obj) {
		clearInterval(this.autoGo);
		this.speed = $('.speed').val();
		this.go();
	}
};

$(
	function() {
		runObj.init();
	}
);
