const gradePoints = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  E: 1,
  F: 0
};

const curriculum = [
  {
    level: "100 Level",
    semesters: [
      {
        name: "First Semester",
        courses: [
         { code: 'COS 101', title: 'Introduction to Computer Science', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'MTH 101', title: 'Elementary Mathematics I', unitsMajor: 3, unitsComputerStat: 3 },
          { code: 'MTH 103', title: 'Elementary Mathematics II', unitsMajor: 3, unitsComputerStat: 3 },
          { code: 'PHY 101', title: 'General Physics I', unitsMajor: 3, unitsComputerStat: 3 },
          { code: 'PHY 107', title: 'General Physics Lab I', unitsMajor: 1, unitsComputerStat: 1 },
          { code: 'GSP 101', title: 'Use of English I', unitsMajor: 2, unitsComputerStat: 2 },
          { code: 'GSP 103', title: 'Nigerian Peoples and Culture', unitsMajor: 2, unitsComputerStat: 2 },
        ]
      },
      {
        name: "Second Semester",
       courses: [
          { code: 'COS 102', title: 'Introduction to Problem Solving', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'MTH 102', title: 'Elementary Mathematics III', unitsMajor: 3, unitsComputerStat: 3 },
          { code: 'MTH 104', title: 'Elementary Mathematics IV', unitsMajor: 3, unitsComputerStat: 3 },
          { code: 'PHY 102', title: 'General Physics II', unitsMajor: 3, unitsComputerStat: 3 },
          { code: 'PHY 108', title: 'General Physics Lab II', unitsMajor: 1, unitsComputerStat: 1 },
          { code: 'GSP 102', title: 'Use of English II', unitsMajor: 2, unitsComputerStat: 2 },
          { code: 'STA 102', title: 'Introduction to Statistics', unitsMajor: 2, unitsComputerStat: 3 },
        ],
      }
    ]
  },
  {
    level: "200 Level",
    semesters: [
      {
        name: 'First Semester',
        courses: [
          { code: 'COS 201', title: 'Computer Programming I', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 203', title: 'Discrete Structures', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 205', title: 'Computer Hardware', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'MTH 201', title: 'Mathematical Methods I', unitsMajor: 3, unitsComputerStat: 3 },
          { code: 'STA 201', title: 'Statistics for Sciences', unitsMajor: 2, unitsComputerStat: 3 },
          { code: 'GSP 201', title: 'Philosophy and Logic', unitsMajor: 2, unitsComputerStat: 2 },
        ],
      },
      {
        name: 'Second Semester',
        courses: [
          { code: 'COS 202', title: 'Computer Programming II', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 204', title: 'Systems Programming', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 206', title: 'Operating Systems I', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'MTH 202', title: 'Mathematical Methods II', unitsMajor: 3, unitsComputerStat: 3 },
          { code: 'STA 202', title: 'Probability Theory', unitsMajor: 2, unitsComputerStat: 3 },
          { code: 'GSP 202', title: 'Peace and Conflict Resolution', unitsMajor: 2, unitsComputerStat: 2 },
        ],
      },
    ],
  },
  {
    level: "300 Level",
    semesters: [
      {
        name: 'First Semester',
        courses: [
          { code: 'COS 301', title: 'Data Structures', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 303', title: 'Numerical Methods', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 305', title: 'Operating Systems II', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 307', title: 'Computer Architecture', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 309', title: 'Database Management Systems I', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'STA 301', title: 'Statistical Inference', unitsMajor: 2, unitsComputerStat: 3 },
        ],
      },
      {
        name: 'Second Semester',
        courses: [
          { code: 'COS 302', title: 'Algorithms', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 304', title: 'Programming Languages', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 306', title: 'Software Engineering I', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 308', title: 'Database Management Systems II', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 310', title: 'Computer Networks I', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'STA 302', title: 'Regression Analysis', unitsMajor: 2, unitsComputerStat: 3 },
        ],
      },
    ],
  },
  {
    level: '400 Level',
    semesters: [
      {
        name: 'First Semester',
        courses: [
          { code: 'COS 401', title: 'Artificial Intelligence', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 403', title: 'Software Engineering II', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 405', title: 'Computer Networks II', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 407', title: 'Compiler Construction', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 409', title: 'Research Methodology', unitsMajor: 2, unitsComputerStat: 2 },
          { code: 'COS 499', title: 'Project I', unitsMajor: 3, unitsComputerStat: 3 },
        ],
      },
      {
        name: 'Second Semester',
        courses: [
          { code: 'COS 402', title: 'Theory of Computing', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 404', title: 'Computer Security', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 406', title: 'Human Computer Interaction', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 408', title: 'Computer Graphics', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 498', title: 'Project II', unitsMajor: 3, unitsComputerStat: 3 },
          { code: 'STA 402', title: 'Operations Research', unitsMajor: 2, unitsComputerStat: 3 },
        ],
      },
    ],
  },
];
