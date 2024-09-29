'use client';

import Section from '@/components/ui/section';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {countTree} from '@/app/api';
import {useEffect, useState} from 'react';

interface TreeCount {
    young_tree: number;
    '100_old_tree': number;
}

export default function Page() {
    const [treeCount, setTreeCount] = useState<TreeCount | null>(null);
    const [data, setData] = useState(350);
    const [daily, setDaily] = useState(350);

    useEffect(() => {
        if (localStorage) {
            setData(Number(localStorage.getItem('totalValue') ?? 350));
        }
    }, []);

    useEffect(() => {
        if (data) {
            const fetchTreeCount = async () => {
                console.log(Number(localStorage.getItem('totalValue')) / 1000);
                try {
                    const count = await countTree(Number(localStorage.getItem('totalValue')) / 1000); // Example sum value
                    const number = Number(localStorage.getItem('totalValue')) / Math.round((count?.['100_old_tree'] || 1));
                    setDaily(Math.round(number));
                    setTreeCount(count);
                } catch (error) {
                    console.error('Error fetching tree count:', error);
                }
            };
            fetchTreeCount().then(() => {
                console.log(treeCount);
            });
            console.log(treeCount);
        }
    }, [data, treeCount]);

    return (
        <main className='mb-12 mt-4 grid gap-12 px-6'>
            <Section
                color='green'
                label='Zieleń miejska'
                value={`${data}g`}
                description={`${data} CO2 zostanie pochłonięte po ${Math.round(treeCount?.young_tree || 0)} dniach przez małe sadzonki lub ${Math.round(treeCount?.['100_old_tree'] || 0)} dni przez 100-letnie drzewo.`}
                imageSrc='/outdoor.png'
                statistics={[]}
            />

            <Section
                color='green'
                label='100 letnie drzewo'
                value={`${Math.round(treeCount?.['100_old_tree'] || 0)} dni`}
                description=''
                imageSrc='/outdoor.png'
                statistics={[
                    {
                        label: 'Dziennie',
                        value: daily,
                        unit: 'co2',
                        Icon: CalendarTodayIcon
                    },
                ]}
            />
        </main>
    );
}