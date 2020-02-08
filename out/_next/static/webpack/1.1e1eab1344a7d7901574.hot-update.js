webpackHotUpdate(1,{

/***/ "./components/MyMap.tsx":
/*!******************************!*\
  !*** ./components/MyMap.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "F:\\AmateurSpace\\disease-map\\components\\MyMap.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var MyMap = function MyMap() {
  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var mapBoxRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null); // 初始化加载地图

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // dom加载完成后新建地图
    mapRef.current = new leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.Map(mapBoxRef.current, {
      center: [39.90791, 116.397006],
      zoom: 11
    }); // 高德地图切片地址

    var url = "http://webrd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8";
    new leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.TileLayer(url, {
      subdomains: "1234"
    }).addTo(mapRef.current); // 绑定地图事件

    mapRef.current.addEventListener('dragend', function (e) {
      console.log(e.target.getCenter());
      console.log(e.target.getZoom());
    });
    return function () {
      mapRef.current = undefined;
    };
  }, []); // 获取用户位置，使用腾讯接口获取疫情信息

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    navigator.geolocation.getCurrentPosition(function (position) {
      var _mapRef$current;

      (_mapRef$current = mapRef.current) === null || _mapRef$current === void 0 ? void 0 : _mapRef$current.flyTo([position.coords.latitude, position.coords.longitude], 17); // 首先根据经纬度获取所在城市

      var url = "https://restapi.amap.com/v3/geocode/regeo?location=".concat(position.coords.longitude, ",").concat(position.coords.latitude, "&key=ee420794c4113817c43da88d7dc18130");
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url).then(function (res) {
        console.log(res.data.regeocode.addressComponent);
        alert(res.data.regeocode.formatted_address);
      });
    }, function () {
      alert('获取位置失败了呀');
    }, {});
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    id: "map",
    ref: mapBoxRef,
    className: "jsx-4165621220",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4165621220",
    __self: this
  }, "#map.jsx-4165621220{width:100%;height:100%;position:absolute;left:0;top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxBbWF0ZXVyU3BhY2VcXGRpc2Vhc2UtbWFwXFxjb21wb25lbnRzXFxNeU1hcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0R3QixBQUdnQyxXQUNDLFlBQ00sa0JBQ1gsT0FDRCxNQUNWIiwiZmlsZSI6IkY6XFxBbWF0ZXVyU3BhY2VcXGRpc2Vhc2UtbWFwXFxjb21wb25lbnRzXFxNeU1hcC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTCBmcm9tICdsZWFmbGV0JztcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IE15TWFwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWFwUmVmID0gdXNlUmVmPEwuTWFwPigpO1xyXG4gICAgY29uc3QgbWFwQm94UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICAgIC8vIOWIneWni+WMluWKoOi9veWcsOWbvlxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBkb23liqDovb3lrozmiJDlkI7mlrDlu7rlnLDlm75cclxuICAgICAgICBtYXBSZWYuY3VycmVudCA9IG5ldyBMLk1hcChtYXBCb3hSZWYuY3VycmVudCBhcyBIVE1MRGl2RWxlbWVudCwge1xyXG4gICAgICAgICAgICBjZW50ZXI6IFszOS45MDc5MSwgMTE2LjM5NzAwNl0sXHJcbiAgICAgICAgICAgIHpvb206IDExXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8g6auY5b635Zyw5Zu+5YiH54mH5Zyw5Z2AXHJcbiAgICAgICAgY29uc3QgdXJsID0gXCJodHRwOi8vd2VicmQwe3N9LmlzLmF1dG9uYXZpLmNvbS9hcHBtYXB0aWxlP3g9e3h9Jnk9e3l9Jno9e3p9Jmxhbmc9emhfY24mc2l6ZT0xJnNjYWxlPTEmc3R5bGU9OFwiO1xyXG4gICAgICAgIG5ldyBMLlRpbGVMYXllcih1cmwsIHtcclxuICAgICAgICAgICAgc3ViZG9tYWluczogXCIxMjM0XCJcclxuICAgICAgICB9KS5hZGRUbyhtYXBSZWYuY3VycmVudCk7XHJcbiAgICAgICAgLy8g57uR5a6a5Zyw5Zu+5LqL5Lu2XHJcbiAgICAgICAgbWFwUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmdldENlbnRlcigpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZ2V0Wm9vbSgpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgbWFwUmVmLmN1cnJlbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyDojrflj5bnlKjmiLfkvY3nva7vvIzkvb/nlKjohb7orq/mjqXlj6Pojrflj5bnlqvmg4Xkv6Hmga9cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zaXRpb24pID0+IHtcclxuICAgICAgICAgICAgbWFwUmVmLmN1cnJlbnQ/LmZseVRvKFtwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsIHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGVdLCAxNyk7XHJcbiAgICAgICAgICAgIC8vIOmmluWFiOagueaNrue7j+e6rOW6puiOt+WPluaJgOWcqOWfjuW4glxyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9yZXN0YXBpLmFtYXAuY29tL3YzL2dlb2NvZGUvcmVnZW8/bG9jYXRpb249JHtwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlfSwke3Bvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZX0ma2V5PWVlNDIwNzk0YzQxMTM4MTdjNDNkYTg4ZDdkYzE4MTMwYDtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KHVybCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5yZWdlb2NvZGUuYWRkcmVzc0NvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICBhbGVydChyZXMuZGF0YS5yZWdlb2NvZGUuZm9ybWF0dGVkX2FkZHJlc3MpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfojrflj5bkvY3nva7lpLHotKXkuoblkYAnKTtcclxuICAgICAgICB9LCB7fSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFwXCIgcmVmPXttYXBCb3hSZWZ9PjwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAjbWFwIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlNYXA7Il19 */\n/*@ sourceURL=F:\\\\AmateurSpace\\\\disease-map\\\\components\\\\MyMap.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MyMap);

/***/ })

})
//# sourceMappingURL=1.1e1eab1344a7d7901574.hot-update.js.map