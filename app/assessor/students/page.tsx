'use client';

import { DataTable } from '@/components/data-table';
import { columns } from '@/app/assessor/students/columns';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useEffect } from 'react';
import { getStudentByAssessorId } from '@/app/assessor/actions/actions';

const SchoolStudent = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data: any = await getStudentByAssessorId('BULCB00002');
      setData(data);
    };

    fetchData();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(search);
  };
  return (
    <div className="flex flex-col h-screen text-2xl">
      <h1 className="mb-10 font-bold text-4xl">Assessor Students</h1>
      <div className="flex justify-between items-center my-5">
        <Input value={search} onChange={handleSearch} type="text" className="max-w-sm" placeholder="Search" />
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default SchoolStudent;
