import React from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
  const cartItems = useSelector((store) => store.cart.items);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className=' mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='flex items-center gap-x-2 p-1 font-medium'
      >
        <svg
          width='16'
          height='15'
          viewBox='0 0 16 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5 0.5C4.73478 0.5 4.48043 0.605357 4.29289 0.792893C4.10536 0.98043 4 1.23478 4 1.5C4 1.76522 4.10536 2.01957 4.29289 2.20711C4.48043 2.39464 4.73478 2.5 5 2.5H11C11.2652 2.5 11.5196 2.39464 11.7071 2.20711C11.8946 2.01957 12 1.76522 12 1.5C12 1.23478 11.8946 0.98043 11.7071 0.792893C11.5196 0.605357 11.2652 0.5 11 0.5H5ZM2 4.5C2 4.23478 2.10536 3.98043 2.29289 3.79289C2.48043 3.60536 2.73478 3.5 3 3.5H13C13.2652 3.5 13.5196 3.60536 13.7071 3.79289C13.8946 3.98043 14 4.23478 14 4.5C14 4.76522 13.8946 5.01957 13.7071 5.20711C13.5196 5.39464 13.2652 5.5 13 5.5H3C2.73478 5.5 2.48043 5.39464 2.29289 5.20711C2.10536 5.01957 2 4.76522 2 4.5ZM0 8.5C0 7.96957 0.210714 7.46086 0.585786 7.08579C0.960859 6.71071 1.46957 6.5 2 6.5H14C14.5304 6.5 15.0391 6.71071 15.4142 7.08579C15.7893 7.46086 16 7.96957 16 8.5V12.5C16 13.0304 15.7893 13.5391 15.4142 13.9142C15.0391 14.2893 14.5304 14.5 14 14.5H2C1.46957 14.5 0.960859 14.2893 0.585786 13.9142C0.210714 13.5391 0 13.0304 0 12.5V8.5Z'
            fill='#90A4AE'
          />
        </svg>

        <Link to='/help' className='flex items-center text-white'>
          Help
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='flex items-center gap-x-2 p-1 font-medium'
      >
        <li class='font-sans block lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700'>
          <Link to='/cart' role='button' class='relative flex'>
            <svg
              class='flex-1 w-7 h-7 fill-current text-white'
              viewbox='0 0 24 24'
            >
              <path d='M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z' />
            </svg>
            <span class='absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center'>
              {cartItems.length}
            </span>
          </Link>
        </li>
      </Typography>
    </ul>
  );

  return (
    <Navbar className='bg-black mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4'>
      <div className='container mx-auto flex items-center justify-between text-blue-gray-900'>
        <Link as='a' to='/' className='mr-4 cursor-pointer py-1.5 font-bold text-white'>
          FOODIEHUB
        </Link>

        <div className='hidden lg:block'>{navList}</div>
        <div className='flex items-center gap-x-1'>
          <Button
            variant='text'
            size='sm'
            className='hidden lg:inline-block text-white'
          >
            <span>Log In</span>
          </Button>
          <Button
            variant='gradient'
            size='sm'
            className='hidden lg:inline-block'
          >
            <span>Sign in</span>
          </Button>
        </div>
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              className='h-6 w-6'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className='container mx-auto'>
          {navList}
          <div className='flex items-center gap-x-1 text-white'>
            <Button fullWidth variant='text' size='sm' className='text-white'>
              <span>Log In</span>
            </Button>
            <Button fullWidth variant='gradient' size='sm' className=''>
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavbarDefault;
