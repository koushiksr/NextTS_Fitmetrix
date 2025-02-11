// get assessments by school id
import { getAssessmentModel } from '@/lib/mongodb';

export const getAssessmentsBySchoolId = async (schoolId: string) => {
  // get assesment  model from mongoose
  const Assessment = await getAssessmentModel();
  const assessments = await Assessment.find({ SchoolID: schoolId }).sort({ createdAt: -1 }).skip(0).limit(10).toArray();
  assessments.map((assessment: any) => {
    assessment._id = assessment._id.toString();
  });

  return assessments;
};
