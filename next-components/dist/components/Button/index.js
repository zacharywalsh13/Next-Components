"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var KitButton = function KitButton(_ref) {
  var _colorMapping;
  var _ref$ButtonText = _ref.ButtonText,
    ButtonText = _ref$ButtonText === void 0 ? "Submit" : _ref$ButtonText,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "blue" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "medium" : _ref$size,
    _ref$weight = _ref.weight,
    weight = _ref$weight === void 0 ? "medium" : _ref$weight,
    _ref$radius = _ref.radius,
    radius = _ref$radius === void 0 ? "full" : _ref$radius,
    _ref$shadow = _ref.shadow,
    shadow = _ref$shadow === void 0 ? "medium" : _ref$shadow;
  var colorMapping = (_colorMapping = {
    // Blues
    sky: "bg-sky-500 hover:bg-sky-700",
    blue: "bg-blue-500 hover:bg-blue-700",
    indigo: "bg-indigo-500 hover:bg-indigo-700",
    slate: "bg-slate-500 hover:bg-slate-700",
    // Reds
    red: "bg-red-500 hover:bg-red-700",
    rose: "bg-rose-500 hover:bg-rose-700",
    // Greens
    green: "bg-green-500 hover:bg-green-700",
    teal: "bg-teal-500 hover:bg-teal-700",
    // Yellows/Oranges
    yellow: "bg-yellow-500 hover:bg-yellow-700",
    orange: "bg-orange-500 hover:bg-orange-700",
    amber: "bg-amber-500 hover:bg-amber-700",
    // Purples
    purple: "bg-purple-500 hover:bg-purple-700",
    violet: "bg-violet-500 hover:bg-violet-700",
    fuchsia: "bg-fuchsia-500 hover:bg-fuchsia-700",
    // Greys
    gray: "bg-gray-500 hover:bg-gray-700"
  }, _defineProperty(_colorMapping, "gray", "bg-gray-500 hover:bg-gray-700"), _defineProperty(_colorMapping, "neutral", "bg-neutral-500 hover:bg-neutral-700"), _defineProperty(_colorMapping, "stone", "bg-stone-500 hover:bg-stone-700"), _defineProperty(_colorMapping, "pink", "bg-pink-500 hover:bg-pink-700"), _defineProperty(_colorMapping, "lime", "bg-lime-500 hover:bg-lime-700"), _defineProperty(_colorMapping, "cyan", "bg-cyan-500 hover:bg-cyan-700"), _defineProperty(_colorMapping, "emerald", "bg-emerald-500 hover:bg-emerald-700"), _colorMapping);
  var sizeMapping = {
    extraSmall: "py-1 px-2 text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl",
    small: "py-1 px-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl",
    medium: "py-2 px-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl",
    large: "py-3 px-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl",
    extraLarge: "py-3.5 px-7 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl",
    extraExtraLarge: "py-4 px-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
  };
  var weightMapping = {
    thin: 'font-thin md:font-extralight',
    extraLight: 'font-extralight md:font-light',
    light: 'font-light md:font-normal',
    normal: 'font-normal md:font-medium',
    medium: 'font-medium md:font-semibold',
    semibold: 'font-semibold md:font-bold',
    bold: 'font-bold md:font-extrabold',
    extrabold: 'font-extrabold md:font-black',
    black: 'font-black'
  };
  var radiusMapping = {
    none: 'rounded-none md:rounded-sm',
    small: 'rounded-sm md:rounded-md',
    medium: 'rounded-md md:rounded-lg',
    large: 'rounded-lg md:rounded-full',
    full: 'rounded-full'
  };
  var shadowMapping = {
    none: 'shadow-none md:shadow-sm',
    small: 'shadow-sm md:shadow-md',
    medium: 'shadow-md md:shadow-lg',
    large: 'shadow-lg md:shadow-xl',
    xl: 'shadow-xl'
  };
  var colorClass = colorMapping[color] || 'bg-blue-500 hover:bg-blue-700 md:bg-blue-600 md:hover:bg-blue-800';
  var sizeClass = sizeMapping[size] || 'py-2 px-4 text-base md:py-3 md:px-6 md:text-lg';
  var weightClass = weightMapping[weight] || 'font-medium md:font-semibold';
  var radiusClass = radiusMapping[radius] || 'rounded-full';
  var shadowClass = shadowMapping[shadow] || 'shadow-md md:shadow-lg';
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClick,
    className: "".concat(colorClass, " ").concat(sizeClass, " ").concat(weightClass, " ").concat(radiusClass, " ").concat(shadowClass, " transition duration-500 ease-in-out transform hover:-translate-y-0 hover:scale-10")
  }, ButtonText);
};
var _default = KitButton;
exports["default"] = _default;