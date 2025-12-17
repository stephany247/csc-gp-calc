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
          { code: 'MTH 111', title: 'Elementary Mathematics I', unitsMajor: 3, unitsComputerStat: 3 },
          { code: 'MTH 121', title: 'Elementary Mathematics II', unitsMajor: 3, unitsComputerStat: 3 },
          { code: 'PHY 115', title: 'General Physics for Physical Sciences I', unitsMajor: 3, unitsComputerStat: 3 },
          { code: 'STA 131', title: 'Interference I', unitsMajor: 1, unitsComputerStat: 1 },
          { code: 'GSP 101', title: 'Use of English I', unitsMajor: 2, unitsComputerStat: 2 },
          { code: 'GSP 111', title: 'Use of Library and Study Skills', unitsMajor: 2, unitsComputerStat: 2 },
        ]
      },
      {
        name: "Second Semester",
       courses: [
          { code: 'COS 102', title: 'Introduction to Problem Solving', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 104', title: 'Introduction to Database Systems', unitsMajor: 2, unitsComputerStat: 3 },
          { code: 'MTH 112', title: 'Elementary Mathematics III', unitsMajor: 3, unitsComputerStat: 3 },
          { code: 'PHY 116', title: 'General Physics for Physical Sciences II', unitsMajor: 2, unitsComputerStat: 2 },
          { code: 'PHY 118', title: 'General Physics for Physical Sciences III', unitsMajor: 2, unitsComputerStat: 2 },
          { code: 'STA 132', title: 'Interference II', unitsMajor: 2, unitsComputerStat: 2 },
          { code: 'STA 172', title: 'Statistical Computing I', unitsMajor: 2, unitsComputerStat: 2 },
          { code: 'GSP 102', title: 'Use of English II', unitsMajor: 2, unitsComputerStat: 2 },
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
          { code: 'COS 201', title: 'Computer Programming I', unitsMajor: 2, unitsComputerStat: 2 },
          { code: 'COS 203', title: 'Introduction to Microcomputer Systems', unitsMajor: 3, unitsComputerStat: 2 },
          // { code: 'COS 205', title: 'Computer Hardware', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'MTH 215', title: 'Linear Algebra I', unitsMajor: 2, unitsComputerStat: 2 },
          // { code: 'STA 201', title: 'Statistics for Sciences', unitsMajor: 2, unitsComputerStat: 3 },
          { code: 'GSP 201', title: 'Social Sciences', unitsMajor: 2, unitsComputerStat: 2 },
          { code: 'GSP 207', title: 'Logic, Philosophy & Human Existence', unitsMajor: 2, unitsComputerStat: 2 },
        ],
      },
      {
        name: 'Second Semester',
        courses: [
          { code: 'COS 202', title: 'Computer EngineeringI', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 204', title: 'Introduction to Digital System Design', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 232', title: 'Data Structures', unitsMajor: 2, unitsComputerStat: 2 },
          { code: 'COS 242', title: 'Data and Computer Communication', unitsMajor: 2, unitsComputerStat: 2 },
          // { code: 'MTH 202', title: 'Mathematical Methods II', unitsMajor: 3, unitsComputerStat: 3 },
          // { code: 'STA 202', title: 'Probability Theory', unitsMajor: 2, unitsComputerStat: 3 },
          { code: 'GSP 202', title: 'Peace and Conflict Resolution', unitsMajor: 2, unitsComputerStat: 2 },
          { code: 'GSP 208', title: 'Nigerian Peoples and Culture', unitsMajor: 2, unitsComputerStat: 2 },

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
          { code: 'COS 311', title: 'Switching Algebra & Discrete Structures', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 331', title: 'Operating Systems', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 333', title: 'Software Engineering II', unitsMajor: 2, unitsComputerStat: 2 },

          { code: 'COS 335', title: 'Automata Theory and Formal Languages', unitsMajor: 2, unitsComputerStat: 2 },
          { code: 'COS 337', title: 'Artificial Intelligence I', unitsMajor: 3, unitsComputerStat: 2 },
          { code: 'COS 341', title: 'Computer Architecture', unitsMajor: 2, unitsComputerStat: 2 },
          { code: 'CED 341', title: 'Introduction to Entrepreneurship', unitsMajor: 2, unitsComputerStat: 3 },
        ],
      },
      {
        name: 'Second Semester',
        courses: [
          { code: 'COS 382', title: 'Students Industrial Work Experience Scheme', unitsMajor: 6, unitsComputerStat: 6 },
          { code: 'COS 304', title: 'Technical SIWES Report', unitsMajor: 5, unitsComputerStat: 5 },
          { code: 'COS 306', title: 'SIWES Seminar', unitsMajor: 4, unitsComputerStat: 4 },
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
