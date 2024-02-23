import React from "react";
import axios from "axios";
import useSWR from "swr";
import { Skeleton } from "@/components/ui/skeleton"


export default function Month_API({ poolid }) {
    const api_key = "3baa3518-e8f6-4a4b-a15a-1f987c3553d3";
    const header = {
        headers: {
            "Api-Key": `${api_key}`,
        },
    };
    const fetcher = (url) => axios.get(url, header).then((res) => res.data);
    const baseUrl = "https://api.boi.fund";
    const { data, error } = useSWR(`${baseUrl}/api/pools/${poolid}/`, fetcher);

    if (error) return <>An error has occurred: {error.message}</>;
    if (!data) return  <><Skeleton className="h-4" /></>;

    const dailyValue = parseFloat(data.month);
    const isNumber = !isNaN(dailyValue);
    const percentage = isNumber ? (dailyValue * 100).toFixed(2) + '%' : 'N/A';

    return (
        <>
            {percentage}
        </>
    );
}