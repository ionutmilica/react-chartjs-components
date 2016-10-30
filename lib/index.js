(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("chart.js"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "chart.js", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["react-chartjs-components"] = factory(require("react"), require("chart.js"), require("react-dom"));
	else
		root["react-chartjs-components"] = factory(root["React"], root["Chart"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(9);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _chart = __webpack_require__(8);

	var _chart2 = _interopRequireDefault(_chart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var propTypes = {
	  className: _react2.default.PropTypes.string,
	  redraw: _react2.default.PropTypes.bool,
	  type: _react2.default.PropTypes.oneOf(['pie', 'doughnut', 'line', 'bar']),
	  data: _react2.default.PropTypes.object.isRequired,
	  width: _react2.default.PropTypes.number,
	  height: _react2.default.PropTypes.number,
	  options: _react2.default.PropTypes.object
	};

	var defaultProps = {
	  redraw: false,
	  type: 'pie'
	};

	var Chart = function (_React$Component) {
	  _inherits(Chart, _React$Component);

	  function Chart(props, context) {
	    _classCallCheck(this, Chart);

	    var _this = _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).call(this, props, context));

	    _this.chart = null;

	    _this.createChart = _this.createChart.bind(_this);
	    _this.updateChart = _this.updateChart.bind(_this);
	    return _this;
	  }

	  _createClass(Chart, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.createChart();
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      // Only new instances of data or config will trigger an update
	      // Users should use Object.assign or alternatives
	      return nextProps.data !== this.props.data || nextProps.options !== this.props.options;
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.redraw) {
	        this.createChart();
	      } else {
	        this.updateChart();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var chart = this.chart;

	      if (chart) {
	        chart.destroy();
	      }
	    }
	  }, {
	    key: 'createChart',
	    value: function createChart() {
	      var _props = this.props,
	          data = _props.data,
	          type = _props.type,
	          options = _props.options;

	      var node = _reactDom2.default.findDOMNode(this);

	      this.chart = new _chart2.default(node, {
	        type: type,
	        data: data,
	        options: options
	      });
	    }
	  }, {
	    key: 'updateChart',
	    value: function updateChart() {
	      var _props2 = this.props,
	          data = _props2.data,
	          options = _props2.options;


	      if (!this.chart) {
	        return;
	      }

	      this.chart.options = _chart2.default.helpers.configMerge(this.chart.options, options);
	      this.chart.data = _extends({}, this.chart.config.data, data);

	      this.chart.update();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props,
	          width = _props3.width,
	          height = _props3.height,
	          className = _props3.className;


	      return _react2.default.createElement('canvas', { className: className, width: width, height: height });
	    }
	  }]);

	  return Chart;
	}(_react2.default.Component);

	Chart.propTypes = propTypes;
	Chart.defaultProps = defaultProps;

	exports.default = Chart;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Chart = __webpack_require__(1);

	var _Chart2 = _interopRequireDefault(_Chart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var propTypes = {
	  className: _react2.default.PropTypes.string,
	  redraw: _react2.default.PropTypes.bool,
	  data: _react2.default.PropTypes.object.isRequired,
	  options: _react2.default.PropTypes.object,
	  width: _react2.default.PropTypes.number,
	  height: _react2.default.PropTypes.number
	};

	var PieChart = function (_React$Component) {
	  _inherits(PieChart, _React$Component);

	  function PieChart(props, context) {
	    _classCallCheck(this, PieChart);

	    var _this = _possibleConstructorReturn(this, (PieChart.__proto__ || Object.getPrototypeOf(PieChart)).call(this, props, context));

	    _this.chart = null;
	    return _this;
	  }

	  _createClass(PieChart, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(_Chart2.default, _extends({}, this.props, { ref: function ref(_ref) {
	          return _this2.chart = _ref;
	        }, type: 'bar' }));
	    }
	  }]);

	  return PieChart;
	}(_react2.default.Component);

	PieChart.propTypes = propTypes;

	exports.default = PieChart;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Chart = __webpack_require__(1);

	var _Chart2 = _interopRequireDefault(_Chart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var propTypes = {
	  className: _react2.default.PropTypes.string,
	  redraw: _react2.default.PropTypes.bool,
	  data: _react2.default.PropTypes.object.isRequired,
	  options: _react2.default.PropTypes.object,
	  width: _react2.default.PropTypes.number,
	  height: _react2.default.PropTypes.number
	};

	var DoughnutChart = function (_React$Component) {
	  _inherits(DoughnutChart, _React$Component);

	  function DoughnutChart(props, context) {
	    _classCallCheck(this, DoughnutChart);

	    var _this = _possibleConstructorReturn(this, (DoughnutChart.__proto__ || Object.getPrototypeOf(DoughnutChart)).call(this, props, context));

	    _this.chart = null;
	    return _this;
	  }

	  _createClass(DoughnutChart, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(_Chart2.default, _extends({}, this.props, { ref: function ref(_ref) {
	          return _this2.chart = _ref;
	        }, type: 'doughnut' }));
	    }
	  }]);

	  return DoughnutChart;
	}(_react2.default.Component);

	DoughnutChart.propTypes = propTypes;

	exports.default = DoughnutChart;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Chart = __webpack_require__(1);

	var _Chart2 = _interopRequireDefault(_Chart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var propTypes = {
	  className: _react2.default.PropTypes.string,
	  redraw: _react2.default.PropTypes.bool,
	  data: _react2.default.PropTypes.object.isRequired,
	  options: _react2.default.PropTypes.object,
	  width: _react2.default.PropTypes.number,
	  height: _react2.default.PropTypes.number
	};

	var LineChart = function (_React$Component) {
	  _inherits(LineChart, _React$Component);

	  function LineChart(props, context) {
	    _classCallCheck(this, LineChart);

	    var _this = _possibleConstructorReturn(this, (LineChart.__proto__ || Object.getPrototypeOf(LineChart)).call(this, props, context));

	    _this.chart = null;
	    return _this;
	  }

	  _createClass(LineChart, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(_Chart2.default, _extends({}, this.props, { ref: function ref(_ref) {
	          return _this2.chart = _ref;
	        }, type: 'line' }));
	    }
	  }]);

	  return LineChart;
	}(_react2.default.Component);

	LineChart.propTypes = propTypes;

	exports.default = LineChart;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Chart = __webpack_require__(1);

	var _Chart2 = _interopRequireDefault(_Chart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var propTypes = {
	  className: _react2.default.PropTypes.string,
	  redraw: _react2.default.PropTypes.bool,
	  data: _react2.default.PropTypes.object.isRequired,
	  options: _react2.default.PropTypes.object,
	  width: _react2.default.PropTypes.number,
	  height: _react2.default.PropTypes.number
	};

	var PieChart = function (_React$Component) {
	  _inherits(PieChart, _React$Component);

	  function PieChart(props, context) {
	    _classCallCheck(this, PieChart);

	    var _this = _possibleConstructorReturn(this, (PieChart.__proto__ || Object.getPrototypeOf(PieChart)).call(this, props, context));

	    _this.chart = null;
	    return _this;
	  }

	  _createClass(PieChart, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(_Chart2.default, _extends({}, this.props, { ref: function ref(_ref) {
	          return _this2.chart = _ref;
	        }, type: 'pie' }));
	    }
	  }]);

	  return PieChart;
	}(_react2.default.Component);

	PieChart.propTypes = propTypes;

	exports.default = PieChart;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BarChart = exports.DoughnutChart = exports.PieChart = exports.LineChart = exports.Chart = undefined;

	var _Chart = __webpack_require__(1);

	var _Chart2 = _interopRequireDefault(_Chart);

	var _LineChart = __webpack_require__(5);

	var _LineChart2 = _interopRequireDefault(_LineChart);

	var _BarChart = __webpack_require__(3);

	var _BarChart2 = _interopRequireDefault(_BarChart);

	var _PieChart = __webpack_require__(6);

	var _PieChart2 = _interopRequireDefault(_PieChart);

	var _DoughnutChart = __webpack_require__(4);

	var _DoughnutChart2 = _interopRequireDefault(_DoughnutChart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Chart = _Chart2.default;
	exports.LineChart = _LineChart2.default;
	exports.PieChart = _PieChart2.default;
	exports.DoughnutChart = _DoughnutChart2.default;
	exports.BarChart = _BarChart2.default;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }
/******/ ])
});
;