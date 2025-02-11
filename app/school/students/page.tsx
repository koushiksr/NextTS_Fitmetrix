'use client';

import React, { useEffect, useState } from 'react';
import { getStudentBySchoolId } from '@/app/school/actions/actions';
import { DataTable } from '@/components/data-table';
import { columns } from '@/app/school/students/columns';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SchoolStudent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: any = await getStudentBySchoolId('HYDCB00001');
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-screen text-2xl">
      <h1 className="mb-10 font-bold text-4xl">School Students</h1>
      <div className="flex justify-between items-center my-5">
        <Input type="text" className="max-w-sm" placeholder="Search" />
        <Button variant="outline" className="">
          Add Student
        </Button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default SchoolStudent;
