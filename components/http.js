;
(function(angular) {
	var httpModule = angular.module('httpModule', []);
	httpModule.service('HttpService', ['$document', '$window', function($document, $window) {
		this.jsonp = function(url, data, callback) {
			//原理利用script的SRC属性，解决跨域问题
			//1.将传入的数据(对象)解析成地址传值形式。count=1&start=2
			var queryString = url.indexOf('?') == -1 ? '?' : '';
			for (var key in data) {
				queryString += key + '=' + data[key] + '&';
			}


			//2.处理回调函数函数名
			var fun = 'yf_crossdomin' + Math.random().toString().replace('.', '');
			queryString += 'callback=' + fun;

			//3.创建script
			var scriptElement = $document[0].createElement('script');
			scriptElement.src = url + queryString;

			//4.在全局暴露回调函数需要执行的函数

			$window[fun] = function(data) {
				callback(data);
				$document[0].body.removeChild(scriptElement);
			}
			//等同于window.yf_crossdomin07187713633812414=function(data){}

			//5.append标签
			$document[0].body.appendChild(scriptElement);


		};
	}])
})(angular);
