var Foo = function (a) {
  this.a = a;
  this.bar = function() {
      return a;
  }
  this.baz = function () {
      return a;
  };
};
Foo.prototype = {
  biz: function () {
      return this.a;
  }
};
var f = new Foo(7);
console.log(f.bar()); //undefined
console.log(f.baz()); //undefined
console.log(f.biz()); //7
