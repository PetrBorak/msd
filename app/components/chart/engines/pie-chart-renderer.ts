import { Chart } from '@antv/g2';
import DataSet from '@antv/data-set';

export default function PieChartRenderer(container: HTMLElement, dataSource: any){
    debugger
    const data = dataSource.splice(0,10);
    const chart = new Chart({
        container: container,
        autoFit: true,
        height: 500,
    });

    chart.data(data);
    chart.coordinate('theta', {
        radius: 0.75,
        innerRadius: 0.6,
    });
    chart.tooltip({
        showTitle: false,
        showMarkers: false,
    });
    chart
        .interval()
        .adjust('stack')
        .position('newFirstEpisodesBySpecimenDate')
        .color('date')
        .shape('slice-shape');

    chart.render();
    return chart;

}
