'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Tabs = () => {
    const pathname = usePathname()

    const tab = pathname.split('/').pop()

    const activeTab = tab === 'C' ? 'C' : tab === 'B' ? 'B' : 'A'

    return (
        <div className="flex gap-4 border-r px-4 mx-4 items-center">
            <Link href={`/`} className={activeTab === 'A' ? 'bg-red-500' : ''}>
                A
            </Link>
            <Link href={`/B`} className={activeTab === 'B' ? 'bg-red-500' : ''}>
                B
            </Link>
            <Link href={`/C`} className={activeTab === 'C' ? 'bg-red-500' : ''}>
                C
            </Link>
        </div>
    )
}