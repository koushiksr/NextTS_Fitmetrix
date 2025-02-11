'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type StudentTableData = {
  _id: string;
  Name: string;
  candidateID: string;
  schoolID: string;
  Gender: string;
  Class: string;
  email: string;
  phone: string;
};

export const columns: ColumnDef<StudentTableData>[] = [
  {
    accessorKey: 'Name',
    header: 'Candidate Name',
  },
  {
    accessorKey: 'ID',
    header: 'Candidate ID',
  },
  {
    accessorKey: 'SchoolID',
    header: 'School ID',
  },
  {
    accessorKey: 'Gender',
    header: 'Gender',
  },
  {
    accessorKey: 'Class',
    header: 'Class',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },

  {
    accessorKey: 'ParentMobileNo',
    header: 'Phone',
  },
  {
    // accessorKey: 'actions',
    // header: () => <div className="text-right">Actions</div>,
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-0 w-8 h-8">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>View</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
