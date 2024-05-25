import ProfileMain from '@/components/profile/ProfileMain';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const page = () => {
    return (
        <div className="bg-primary min-h-screen">
        <Navbar></Navbar>
        <ProfileMain></ProfileMain>
      </div>
    );
};

export default page;