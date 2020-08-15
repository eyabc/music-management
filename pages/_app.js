import React from 'react';
import Head from 'next/head';

const MusicManager = ({ Component }) => (
    <>
        <Head>
            <meta charSet="utf-8" />
            <title>Music Manager</title>
        </Head>
        <Component/>
    </>
);

export default MusicManager;