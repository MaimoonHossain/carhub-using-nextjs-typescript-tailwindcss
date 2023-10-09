'use client';
import React from 'react';
import { ShowMoreProps } from '@/types';
import { updateSearchParams } from '@/utils';
import { CustomButton } from '@/components';
import { useRouter } from 'next/navigation';

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    const newPathName = updateSearchParams('limit', `${newLimit}`);

    router.push(newPathName);
  };
  return (
    <div>
      {!isNext && (
        <CustomButton
          btnType='button'
          title='Show More'
          containerStyles='bg-primary-blue rounded-full text-white'
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
