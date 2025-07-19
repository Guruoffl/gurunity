import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import Header from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import PostCreator from '@/components/PostCreator/PostCreator';
import PostList from '@/components/PostList/PostList';
import RightSidebar from '@/components/RightSidebar/RightSidebar';
import './page.css';

export default function Home() {
  return (
    <MainLayout
      header={<Header />}
      sidebar={<Sidebar />}
      rightSidebar={<RightSidebar />}
    >
      {/* Main Feed Content */}
      <div className="main-feed-content">
        <PostCreator />
        <PostList />
      </div>
    </MainLayout>
  );
}

