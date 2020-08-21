import React from 'react';

const utils = {
    client: null,
    setClient(client) {
        utils.client = client;
    }
};

export const trackParse = (track) =>
    (track.no ?? '') + (track.of ? (' of '+ track.of) : '');

export default utils;

