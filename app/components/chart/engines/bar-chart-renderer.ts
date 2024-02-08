import { Chart } from '@antv/g2';

export default function BarChartRender(container: any, dataProps: any) {

    // Prepare data
    const data = dataProps || [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
    ];

    const chart = new Chart({
        container: container,
        autoFit: true,
        height: 500,
        padding: [50, 20, 50, 50],
    });
    chart.data(data.splice(0,10));
    chart.axis('newFirstEpisodesBySpecimenDate', {
        tickLine: {
            alignTick: false,
        },
    });
    chart.axis('date', true);

    chart.tooltip({
        showMarkers: false,
    });
    chart.interval().position('date*newFirstEpisodesBySpecimenDate');
    chart.interaction('element-active');
    chart.render();

    return chart;
}
