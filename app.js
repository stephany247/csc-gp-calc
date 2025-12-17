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
  coursesAnimated = false;
  render();
}

function setGrade(code, value) {
  // e.preventDefault();
  if (value === "") delete grades[code];
  else grades[code] = value;
  render();
  return false;
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

function calculateBreakdown() {
  const breakdown = [];

  curriculum.forEach((level) => {
    let levelQP = 0;
    let levelUnits = 0;

    const semesters = level.semesters
      .map((sem) => {
        let semQP = 0;
        let semUnits = 0;

        sem.courses.forEach((course) => {
          const units =
            studentType === "major"
              ? course.unitsMajor
              : course.unitsComputerStat;

          const grade = grades[course.code];
          if (grade) {
            semQP += gradePoints[grade] * units;
            semUnits += units;
          }
        });

        // Skip semester if no grades
        if (!semUnits) return null;

        // Accumulate for level GPA
        levelQP += semQP;
        levelUnits += semUnits;

        return {
          name: sem.name,
          gpa: (semQP / semUnits).toFixed(2),
          units: semUnits,
        };
      })
      .filter(Boolean);

    // Skip level if no semester has grades
    if (!semesters.length) return;

    breakdown.push({
      level: level.level,
      levelGpa: (levelQP / levelUnits).toFixed(2),
      semesters,
    });
  });

  return breakdown;
}

let hasAnimated = false;
let coursesAnimated = false;

function render() {
  // Program Label
  programLabel.textContent =
    studentType === "major"
      ? "Computer Science"
      : studentType === "computer-stat"
      ? "Computer / Statistics"
      : "";

  // GPA box
  const { gpa, completedUnits, totalUnits } = calculateGPA();
  const breakdown = calculateBreakdown();

  let classification = { label: "", color: "" };

  if (gpa >= 4.5) classification = { label: "First Class", color: "grade-A" };
  else if (gpa >= 3.5)
    classification = { label: "Second Class Upper", color: "grade-B" };
  else if (gpa >= 2.5)
    classification = { label: "Second Class Lower", color: "grade-C" };
  else if (gpa >= 1.5)
    classification = { label: "Third Class", color: "grade-D" };
  else if (gpa >= 1.0) classification = { label: "Pass", color: "grade-E" };
  else classification = { label: "Fail", color: "grade-F" };

  const progress = totalUnits > 0 ? (completedUnits / totalUnits) * 100 : 0;

  gpaBox.innerHTML = `
  <div class="gpa-card shadow-card ${hasAnimated ? "" : "animate-slide-up"}">
    <div class="gpa-header">
      <h3 class="gpa-title">
        <i class="fa-solid fa-trophy"></i> Your GPA
      </h3>
      ${
        completedUnits > 0
          ? `<span class="gpa-class ${classification.color}">
              ${classification.label}
            </span>`
          : ""
      }
    </div>

    <div class="gpa-score">
      <div class="gpa-value">
        ${completedUnits > 0 ? gpa.toFixed(2) : "0.00"}
      </div>
      <p class="gpa-max">out of 5.00</p>
    </div>

    <div class="gpa-section">
      <div class="gpa-units">
        <span><i class="fa-solid fa-book-open"></i> Units Completed</span>
        <span><strong>${completedUnits}</strong> / ${totalUnits}</span>
      </div>

      <div class="progress-bar">
        <div class="progress-fill" style="width:${progress}%"></div>
      </div>
    </div>

    <div class="gpa-info">
      <i class="fa-solid fa-chart-line"></i>
      <span>
        ${
          completedUnits > 0
            ? `Total Quality Points: ${(gpa * completedUnits).toFixed(1)}`
            : "Select grades to calculate GPA"
        }
      </span>
    </div>
<div class="gpa-breakdown">
  ${breakdown
    .map(
      (level) => `
    <div class="breakdown-level">

      <div class="breakdown-level-header">
        <h4>${level.level}</h4>
        <span class="level-gpa">GP: ${level.levelGpa}</span>
      </div>

      ${level.semesters
        .map(
          (sem) => `
        <div class="breakdown-row">
          <span>${sem.name}</span>
          <span>${sem.gpa}</span>
        </div>
      `
        )
        .join("")}

    </div>
  `
    )
    .join("")}
</div>

  </div>
`;
  hasAnimated = true;

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
  <div class="course-card">
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
      onchange="return setGrade('${course.code}', this.value)"
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
  if (!coursesAnimated) {
    requestAnimationFrame(() => {
      document
        .querySelectorAll(".course-card")
        .forEach((card) => card.classList.add("animate-scale-in"));
    });
    coursesAnimated = true;
  }
}
