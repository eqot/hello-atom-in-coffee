(function() {
  var TestView, View,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  View = require('space-pen').View;

  module.exports = TestView = (function(_super) {
    __extends(TestView, _super);

    function TestView() {
      return TestView.__super__.constructor.apply(this, arguments);
    }

    TestView.content = function() {
      return this.div((function(_this) {
        return function() {
          _this.h1("Spacecraft");
          return _this.ol(function() {
            _this.li("Apollo");
            _this.li("Soyuz");
            return _this.li("Space Shuttle");
          });
        };
      })(this));
    };

    return TestView;

  })(View);

}).call(this);
