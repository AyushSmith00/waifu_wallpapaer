import React from "react";
import { useState, useEffect } from "react";

export default function useWallpaper (Category, pageSize, page) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://api.waifu.im/images?IncludedTags=${Category}&IsNsfw=False&PageSize=${pageSize}&Page=${page}`)
        .then((res) => res.json())
        .then((res) => {
            setData(res.items)
        })
    }, [Category])

    console.log(data)
    return data
}