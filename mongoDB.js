// #1
db.people.find();

// #2
db.people.find().count();

// #3
db.people.find({ state: "Arizona" });

// #4
db.people.find({ $in: [{ state: "Arizona" }, { gender: "Male" }] });

// #5
db.people.find({ state: { $inc: ["Arizona", "New Mexico"] } });

// #6
db.people.find({ age: { $lt: 40 } });

// #7
db.people.find({
  state: "Florida",
  gender: "Female",
  age: { $lte: 45, $gte: 40 },
});

// #8
db.people.find({ first_name: /^H/ });

// #9
db.people.find({ state: "Michigan" }).sort({ first_name: 1 });

// #10
db.people.find({ $or: [{ state: "Virginia" }, { name: "Virginia" }] });

// #11
db.people.find({ age: { $lt: 30 } }, { first_name: 1, last_name: 1 });

// #12
db.people.find({ state: "Montana" }, { age: false });

// #13
db.people.find({ email: /.edu$/ }, { _id: false, email: true });

// #14
db.people.find({ "children.age": { $lt: 4 } });

// #15
db.people.find({ children: { $exists: false } });

// #16
