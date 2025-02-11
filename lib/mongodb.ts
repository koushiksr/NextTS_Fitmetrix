import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClient?: MongoClient;
  };

  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(uri, options);
  }
  client = globalWithMongo._mongoClient;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
}

// Export a module-scoped MongoClient. By doing this in a
// separate module, the client can be shared across functions.
export default client;

export async function connectDB() {
  const connection = await client.connect();
  return connection.db(process.env.MONGODB_DB);
}

export async function getSchoolModel() {
  const db = await connectDB();
  const schools = db.collection('schools');
  return schools;
}

export async function getAdminModel() {
  const db = await connectDB();
  const admins = db.collection('admins');
  return admins;
}

export async function getStudentModel() {
  const db = await connectDB();
  const students = db.collection('students');
  return students;
}

export async function getAssessorModel() {
  const db = await connectDB();
  const assessors = db.collection('assessors');
  return assessors;
}

export async function getAdultModel() {
  const db = await connectDB();
  const adults = db.collection('adults');
  return adults;
}

export async function getAssessmentModel() {
  const db = await connectDB();
  // const assessments = db.collection('assessments');
  const assessments = db.collection('activities');
  return assessments;
}

export async function getActivityModel() {
  const db = await connectDB();
  const activities = db.collection('activities');
  return activities;
}
