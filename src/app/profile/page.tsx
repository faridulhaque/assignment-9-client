import ProfileMain from '@/components/profile/ProfileMain';
import Navbar from '@/components/shared/Navbar';
import { ProtectedPage } from '@/services/ProtectedPage';
import React from 'react';

const page = () => {
    return (
      <ProtectedPage userType='user'>

        <div className="bg-primary min-h-screen">
        <Navbar></Navbar>
        <ProfileMain></ProfileMain>
      </div>
      </ProtectedPage>
    );
};

export default page;