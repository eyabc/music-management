import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { RecoilRoot } from 'recoil/dist';
import axiosClient from '../utils/axios';
import utils from '../utils';


const MusicManager = ({ Component }) => {
    const client = axiosClient;
    utils.setClient(client);

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