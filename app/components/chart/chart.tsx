'use client'
import { Chart as ChartAnt } from '@antv/g2';
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic'

export default function Chart<data>({data, renderer}: { data: data, renderer: (container: HTMLElement, data: data) => ChartAnt}) {
    const container = useRef(null);
    const chart: any = useRef(null);

    useEffect(() => {
        if (!chart.current && container.current) {
            chart.current = renderer((container.current as unknown as HTMLElement), data);
            chart.current.changeSize(window.innerWidth / 2 - 160,chart.current.height)
        };

        window.addEventListener('resize', () => {
            chart.current.changeSize(window.innerWidth / 2 - 160,chart.current.height)
        });
    }, []);

    return (
        <div className="App">
            <div ref={container}></div>
        </div>
    );
}
