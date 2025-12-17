let studentType = null;
let selectedLevel = "100 Level";
let grades = {};

const studentScreen = document.getElementById("student-screen");
const calculatorScreen = document.getElementById("calculator-screen");
const tabsDiv = document.getElementById("tabs");
const contentDiv = document.getElementById("content");
const gpaBox = document.getElementById("gpa-box");
const programLabel = document.getElementById("program-label");

function selectStudentType(type) {
  studentType = type;
  studentScreen.classList.add("hidden");
  calculatorScreen.classList.remove("hidden");
  render();
}

function goBack() {
  studentType = null;
  grades = {};
  calculatorScreen.classList.add("hidden");
  studentScreen.classList.remove("hidden");
}

function resetGrades() {
  grades = {};
  render();
}

function changeLevel(level) {
  selectedLevel = level;
  render();
}

function setGrade(code, value) {
  e.preventDefault();
  if (value === "") delete grades[code];
  else grades[code] = value;
  render();
}

function calculateGPA() {
  let totalQP = 0;
  let totalUnits = 0;
  let completedUnits = 0;

  curriculum.forEach((level) => {
    level.semesters.forEach((sem) => {
      sem.courses.forEach((course) => {
        const units =
          studentType === "major"
            ? course.unitsMajor
            : course.unitsComputerStat;

        totalUnits += units;

        if (grades[course.code]) {
          totalQP += gradePoints[grades[course.code]] * units;
          completedUnits += units;
        }
      });
    });
  });

  return {
    gpa: completedUnits ? totalQP / completedUnits : 0,
    totalUnits,
    completedUnits,
  };
}

function render() {
  // Program Label
  programLabel.textContent =
    studentType === "major"
      ? "Computer Science Major"
      : studentType === "computer-stat"
      ? "Computer / Statistics"
      : "";

  // Tabs
  tabsDiv.innerHTML = `
  <div class="tabs-wrapper">
    ${curriculum
      .map(
        (l) => `
      <button
        class="tab ${l.level === selectedLevel ? "active" : ""}"
        onclick="changeLevel('${l.level}')">
        ${l.level.replace(" Level", "")}
      </button>
    `
      )
      .join("")}
  </div>
`;

  // Courses
  const level = curriculum.find((l) => l.level === selectedLevel);
  contentDiv.innerHTML = level.semesters
    .map(
      (sem) => `
    <h3>${sem.name}</h3>
      <div class="courses-grid">
    ${sem.courses
      .map((course) => {
        const units =
          studentType === "major"
            ? course.unitsMajor
            : course.unitsComputerStat;

        return `
  <div class="course-card animate-scale-in">
    <div class="course-left">
      <div class="course-meta">
        <span class="course-code">${course.code}</span>
        <span class="course-units">
          ${units} ${units === 1 ? "Unit" : "Units"}
        </span>
      </div>
      <h4 class="course-title">${course.title}</h4>
    </div>

    <select
      class="grade-select ${
        grades[course.code] ? `grade-${grades[course.code]}` : ""
      }"
      onchange="setGrade('${course.code}', this.value)"
    >
      <option value="">--</option>
      ${Object.keys(gradePoints)
        .map(
          (g) =>
            `<option value="${g}" ${
              grades[course.code] === g ? "selected" : ""
            }>${g}</option>`
        )
        .join("")}
    </select>
  </div>
`;
      })
      .join("")}
     </div>
  `
    )
    .join("");

  // GPA box
  const { gpa, completedUnits, totalUnits } = calculateGPA();
  gpaBox.innerHTML = `
    GPA: ${gpa.toFixed(2)} <br/>
    Units: ${completedUnits} / ${totalUnits}
  `;
}
