import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { Icons } from './Icons';
import { buttonVariants } from './ui/Button';
import { UserAccountNav } from './UserAccountNav';
import SearchBar from './SearchBar';

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className='fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2 shadow-md'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
        <Link href='/' className='flex gap-2 items-center'>
          <Icons.logo className='h-8 w-8 sm:h-6 sm:w-6' />
          <p className='hidden text-zinc-700 text-sm font-medium md:block transition-colors duration-300 hover:text-blue-500'>
            Community Hub
          </p>
        </Link>
        <SearchBar />
        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link
            href='/sign-in'
            className={`${buttonVariants()} bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300`}
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
