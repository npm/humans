var humans = require("..")
var test = require("tap").test

test("humans", function (t) {
  t.ok((typeof humans === "object"), "humans are objects")
  t.ok((Object.keys(humans).length == 11), "there are 11 humans")
  t.ok(humans.zeke, "one of them is zeke")
  t.end()
})
