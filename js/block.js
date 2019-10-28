document.addEventListener('DOMContentLoaded',
	function () {
		// 초기
		if (localStorage["enabled"] !== "false") {
			document.getElementById('enabled').checked = true;
		} else {
			var checked = !document.getElementById('enabled').checked;
			document.getElementById('blacklist').disabled = checked;
		}

		var bl = localStorage["blacklist"];
		document.getElementById('blacklist').value = bl ? bl : "";

		// attach signals
		document.getElementById('blacklist').addEventListener('keyup',
			function () {
				var blacklist = document.getElementById('blacklist').value;
				localStorage["blacklist"] = blacklist;
			});

		document.getElementById('enabled').addEventListener('click',
			function() {
				var checked = document.getElementById('enabled').checked;
				document.getElementById('blacklist').disabled = !checked;
				localStorage["enabled"] = checked;
			});
	});

function ClosePopupWindow() {
	self.close();
}