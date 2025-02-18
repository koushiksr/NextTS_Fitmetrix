import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Users, School, Book, UserCheck } from 'lucide-react';
import { SignOutButton } from '@/lib/AuthButtons';
import { auth } from '@/app/auth';
import { CustomSession } from '../types/Session';
import { ModeToggle } from './ModeToggle';

const Sidebar: React.FC = async () => {
  const session: CustomSession = (await auth()) as CustomSession;
  const user = session?.user;
  const role = user?.role || '';

  // Role-based links
  const getLinks = () => {
    switch (role) {
      case 'admin':
        return [
          { href: '/admin', label: 'Dashboard', icon: Home },
          { href: '/admin/assessors', label: 'Assessors', icon: Users },
          { href: '/admin/schools', label: 'Schools', icon: School },
          { href: '/admin/students', label: 'Students', icon: Book },
          { href: '/admin/adults', label: 'Adults', icon: UserCheck },
        ];
      case 'school':
        return [
          { href: '/school', label: 'Dashboard', icon: Home },
          { href: '/school/assessments', label: 'Assessments', icon: Book },
          { href: '/school/students', label: 'Students', icon: Users },
          { href: '/school/adults', label: 'Adults', icon: UserCheck },
        ];
      case 'assessor':
        return [
          { href: '/assessor', label: 'Dashboard', icon: Home },
          { href: '/assessor/assessments', label: 'Assessments', icon: Book },
          { href: '/assessor/students', label: 'Students', icon: Users },
          { href: '/assessor/adults', label: 'Adults', icon: UserCheck },
        ];
      case 'student':
        return [
          { href: '/student', label: 'Dashboard', icon: Home },
          { href: '/student/assessments', label: 'Assessments', icon: Book },
        ];
      case 'adult':
        return [
          { href: '/adult', label: 'Dashboard', icon: Home },
          { href: '/adult/assessments', label: 'Assessments', icon: Book },
        ];
      default:
        return [];
    }
  };

  return (
    <aside className="group rounded-r-3xl top-0 left-0 z-50 fixed bg-background border-r-4 w-16 hover:w-64 h-screen text-foreground transition-all duration-300 overflow-hidden">
      <div className="group-hover:px-4 flex flex-col items-center py-5 h-full">
        {/* Profile Image */}
        <div className="flex flex-col items-center p-3 group-hover:border group-hover:border-border rounded-3xl w-full">
          {user?.image ? (
            <Image loading="lazy" src={user.image} alt={`${user.name}'s profile picture`} width={50} height={50} className="border-2 shadow-lg border-border rounded-full" />
          ) : (
            <div className="flex justify-center items-center bg-border rounded-full w-12 h-12">
              <span className="font-bold text-gray-700 text-lg">{user?.email?.charAt(0)}</span>
            </div>
          )}
          <span className="group-hover:block hidden mt-2 text-sm">{user?.name}</span>
          <span className="group-hover:block hidden text-xs">{role}</span>
        </div>

        {/* Navigation Links */}
        <ul className="mt-5 w-full">
          {getLinks().map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link href={href} className="flex items-center gap-3 hover:bg-secondary p-3 rounded-md w-full">
                <Icon size={24} />
                <span className="group-hover:block hidden">{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Sign Out Button */}
        <div className="mt-auto mb-5 w-full">
          {session && (
            <div className="flex items-center gap-3 hover:bg-secondary p-3 w-full cursor-pointer">
              <SignOutButton />
            </div>
          )}
          <div className="flex items-center gap-3 hover:bg-secondary p-3 w-full cursor-pointer">
            <ModeToggle />
            <span className="group-hover:block hidden">Theme</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
