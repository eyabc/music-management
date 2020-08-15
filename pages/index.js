import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import Music from './music'

const Home = () => {
    return (
        <AppLayout>
            <Music/>
        </AppLayout>
    );
};

export default Home;