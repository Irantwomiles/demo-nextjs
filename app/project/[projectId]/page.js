'use client';

import {useEffect} from "react";
import {useSearchParams, usePathname} from "next/navigation";

export default function Project() {

    const pathname = usePathname();
    const query = pathname.split('/').pop();

    console.log(query)

    return (
        <main>
            <div>Shayan {query}</div>
        </main>
    )
}

export const runtime = 'edge';