import React, { useContext } from 'react';
import { OverLayContext } from '../components/OverLay/provider'

export function useLoading(params) {
    const { setLoading } = useContext(OverLayContext)

    const showLoading = () => {
        setLoading(true);
    };

    const hideLoading = () => {
        setLoading(false);
    };

    return [showLoading, hideLoading];
}
