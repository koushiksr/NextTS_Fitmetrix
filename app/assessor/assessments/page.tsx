'use client';

import React, { useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';
import { getAssessmentsBySchoolId } from '@/app/assessor/actions/actions';
import { columns } from '@/app/assessor/assessments/columns';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/data-table';
import Loading from './loading';
import Link from 'next/link';

const SchoolStudent = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data: any = await getAssessmentsBySchoolId('BULCB00002', 0, 10);
      setData(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="flex flex-col h-screen text-2xl">
      <h1 className="mb-10 font-bold text-4xl">Assesments</h1>
      <div className="flex justify-between items-center my-5">
        <Input value={search} onChange={handleSearch} type="text" className="max-w-sm" placeholder="Search" />
        <Button asChild variant="outline" className="">
          <Link href="/assessor/assessments/add">Add Assesment</Link>
        </Button>
      </div>

      <Suspense fallback={<Loading />}>
        <DataTable columns={columns} data={data} />
      </Suspense>
    </div>
  );
};

export default SchoolStudent;
