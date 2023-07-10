/* eslint-disable prettier/prettier */

const CDN_URL = 'https://www.uni.cards';

export const getAssetImageUrl = (name: string): string => {
    return CDN_URL + '/images/' + name;
}

export const getAssetVideoUrl = (name: string): string => {
    return CDN_URL + '/videos/' + name;
}