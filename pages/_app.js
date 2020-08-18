import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { RecoilRoot } from 'recoil/dist';

const MusicManager = ({ Component }) => {

    return (
        <RecoilRoot>
            <Head/>
            <AppLayout>
                <Component/>
            </AppLayout>
        </RecoilRoot>
    );
};

export default MusicManager;