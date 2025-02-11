// Roles
export const roles = {
  admin: 'admin',
  assessor: 'assessor',
  school: 'school',
  student: 'student',
  guest: 'guest',
};
export const rolesArray = Object.values(roles);
export type Role = (typeof rolesArray)[number];

// Classes
export const classes = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
};
export const classesArray = Object.values(classes);
export type Classess = (typeof classesArray)[number];

// Dominant Side
export const dominantSide = {
  left: 'Left',
  right: 'Right',
};
export const dominantSideArray = Object.values(dominantSide);
export type DominantSide = (typeof dominantSideArray)[number];
