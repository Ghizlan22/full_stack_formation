const data = {
  header: "Half Stack application development",
  parts: [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ]
};

console.log("1.4", data.header);
data.parts.forEach(part => {
  console.log("1.4", part.name, part.exercises);
});
console.log("1.4", "Total:", data.parts.reduce((sum, part) => sum + part.exercises, 0));
