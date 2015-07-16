let test = new Campaign();
test.Description = "hello this is a test";

test.save().then(function(data) {
  test.Verified = true;
  test.save().then(function(data) {
    console.log(data);
  });
});

