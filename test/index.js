var humans = require("..")
var test = require("tap").test

test("humans", function (t) {
  t.ok((typeof humans === "object"), "humans are objects")
  t.equal(Object.keys(humans).length, 11, "there are 11 humans")
  t.ok(humans.zeke, "one of them is zeke")
  t.equal(humans.zeke.email, "zeke@npmjs.com", "zeke's email address is zeke@npmjs.com")
  t.equal(humans.zeke.avatar, "https://secure.gravatar.com/avatar/fd135247e752fe8cbefc5b8c1eb8cc4a?size=512&default=retro", "zeke has an HTTPS gravatar")
  t.end()
})
