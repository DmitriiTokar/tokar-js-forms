$(document).ready(function() {

	var checkComment = (function () {

		var _commentForm = $('#formComment');
		var _commentText = $('#commentText');
		var _commentError = $('#commentError');

		var init = function () {
			_setUpListners();
		}

		var _setUpListners = function () {
			_commentForm.on('submit', function (e) {
				_checkComment(e);
			})
			_commentText.on('keydown', function (e) {
				_hideErrorOnFocus(e);
			})
		}
		
		var _checkComment = function (e) {
			e.preventDefault();

			if (_commentText.val().trim() == '') {
				_commentError.removeClass('hidden');
			} else {
				_commentError.addClass('hidden');
				$('form').unbind('submit').submit();
			}
		}

		var _hideErrorOnFocus = function () {
			_commentError.addClass('hidden');
		}

		return {
			init
		}

	}());

	checkComment.init();

});