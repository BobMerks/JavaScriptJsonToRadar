// Mock JSON data
var items = {
  id: "48cf09a1-9dbe-4533-13d2-08d8143472ac",
  formId: "a4f27885-c3d7-4418-9924-ba844b5a05f0",
  userId: "9024de7c-17ae-4b93-8748-3197a92fd29d",
  answers: [
    {
      id: "4e5aeb0a-98bd-431c-7f59-08d8143472af",
      questionId: "e8a186c1-cdc6-4816-721c-08d813a32e6c",
      categoryName: "Sleeping",
      value: 10,
      max: 100,
    },
    {
      id: "4e5aeb0a-98bd-431c-7f59-08d8143472af",
      questionId: "e8a186c1-cdc6-4816-721c-08d813a32e6c",
      categoryName: "Running",
      value: 10,
      max: 50,
    },
    {
      id: "4e5aeb0a-98bd-431c-7f59-08d8143472af",
      questionId: "e8a186c1-cdc6-4816-721c-08d813a32e6c",
      categoryName: "Running",
      value: 50,
      max: 55,
    },
    {
      id: "4e5aeb0a-98bd-431c-7f59-08d8143472af",
      questionId: "e8a186c1-cdc6-4816-721c-08d813a32e6c",
      categoryName: "Eating",
      value: 100,
      max: 100,
    },
    {
      id: "4e5aeb0a-98bd-431c-7f59-08d8143472af",
      questionId: "e8a186c1-cdc6-4816-721c-08d813a32e6c",
      categoryName: "Cycling",
      value: 25,
      max: 35,
    },
    {
      id: "4e5aeb0a-98bd-431c-7f59-08d8143472af",
      questionId: "e8a186c1-cdc6-4816-721c-08d813a32e6c",
      categoryName: "Coding",
      value: 35,
      max: 90,
    },
  ],
};

let values = [];
let labels = [];
let graphvalues = [];
let graphlabels = [];
let total = 0;

items.answers.forEach((e) => {
  labels.push(e.categoryName);
  values.push(Math.round((e.value / e.max) * 100));
});

// Filter out duplicate values
Array.prototype.getDuplicates = function () {
  var duplicates = [];
  for (var i = 0; i < this.length; i++) {
    if (duplicates.hasOwnProperty(this[i])) {
      duplicates[this[i]].push(i);
    } else if (this.lastIndexOf(this[i]) !== i) {
      duplicates[this[i]] = [i];
    }
  }
  return duplicates;
};

// Store duplicate labels in seperate array
let d = Object.values(labels.getDuplicates());
let dIndex = [];

// Convert all values for duplicate categories to a 100% scale
for (let i = 0; i < d.length; i++) {
  let categoryCount = d[i];

  categoryCount.forEach((item) => {
    total += values[item];
    dIndex.push(item);
  });
  graphlabels.push(Object.keys(labels.getDuplicates())[i]);
  graphvalues.push(Math.round((total / categoryCount.length) * 10) / 10);
  total = 0;
}

// Create new array with values for the radar chart
for (let i = 0; i < values.length; i++) {
  if (!dIndex.includes(i)) {
    graphlabels.push(labels[i]);
    graphvalues.push(values[i]);
  }
}
