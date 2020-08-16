import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
const MusicManager = ({ Component }) => (
    <>
        <Head>
            <title>Music Manager</title>
        </Head>
        <AppLayout>
            <Component/>
        </AppLayout>
    </>
);

export default MusicManager;