const { header, parts } = {
  header: "Half Stack application development",
  parts: [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 }
  ]
};

const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
const part1 = parts[0];
const part2 = parts[1];
const part3 = parts[2];

console.log("1.5", header);
console.log("1.5", part1.name, part1.exercises);
console.log("1.5", part2.name, part2.exercises);
console.log("1.5", part3.name, part3.exercises);
console.log("1.5", "Total:", totalExercises);
