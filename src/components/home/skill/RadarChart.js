import Chart from "react-apexcharts";
import styles from './RadarChart.module.css'

export default function RadarChart({ chart }) {
    const state = {
        series: [
            {
                name: 'Series 1',
                data: chart.data,
            }
        ],
        options: {
            chart: {
                type: 'radar',
            },
            plotOptions: {
                radar: {
                    size: 140,
                    polygons: {
                        strokeColors: '#e9e9e9',
                        fill: {
                        colors: ['#f8f8f8', '#fff']
                        }
                    }
                }
            },
            colors: ['#FF4560'],
            markers: {
                size: 4,
                colors: ['#fff'],
                strokeColor: '#FF4560',
                strokeWidth: 2,
            },
            tooltip: {
                y: {
                    formatter: function(val) {
                        return val
                    }
                }
            },
            xaxis: {
                categories: chart.categories
            },
            yaxis: {
                tickAmount: chart.data.length,
                labels: {
                    formatter: function(val, i) {
                        return ''
                    }
                }
            }
        },
    };

    return (
        <div>
            <h3>Tech Stack</h3>
            <Chart
                className={styles.chart}
                options={state.options}
                series={state.series}
                type="radar"
                width="400"
                height="350"
            />
        </div>
    )
}