import { getAssessmentsBySchoolId } from '@/app/school/assessments/actions';
import { DataTable } from '@/components/data-table';
import { columns } from '@/app/school/assessments/columns';

const Schoolssessments = async () => {
  const data = await getAssessmentsBySchoolId('BULCB00002');

  return (
    <div className="flex flex-col h-screen text-2xl">
      <h1 className="mb-10 font-bold text-4xl">School Assessments</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Schoolssessments;
