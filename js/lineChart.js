class LineChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    zoom: {
                        enabled: false
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [5, 7, 5],
                    curve: 'straight',
                    dashArray: [0, 8, 5]
                },
                markers: {
                    size: 0,

                    hover: {
                        sizeOffset: 6
                    }
                },
                xaxis: {
                    categories: ['2014', '2015', '2016', '2017', '2018', '2019'],
                },
                tooltip: {
                    y: [{
                        title: {
                            formatter: function (val) {
                                return val + " (mins)"
                            }
                        }
                    }, {
                        title: {
                            formatter: function (val) {
                                return val + " per session"
                            }
                        }
                    }, {
                        title: {
                            formatter: function (val) {
                                return val;
                            }
                        }
                    }]
                },
                grid: {
                    borderColor: '#f1f1f1',
                }
            },
            series: [{
                name: "Times Higher Education",
                data: [601, 601, 601, 601, 601, 601]
            },
            {
                name: "Center for World University Ranking",
                data: [515, 479, 427, 407, 296, 274]
            },
            {
                name: 'QS University Ranking',
                data: [551, 551, 551, 551, 551, 601]
            },
            {
                name: 'Shanghai Ranking',
                data: [301, 301, 201, 151, 151, 151]
            },
            {
                name: 'Round University Ranking',
                data: [469, 526, 476, 509, 441, 431]
            },
            {
                name: 'Webometrics',
                data: [231, 207, 218, 255, 255, 282]
            }
            ],
        }
    }

    render() {

        return (
            <div>
                <div id="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="line" height="350vh" />
                </div>
                <div id="html-dist">
                </div>
            </div>
        );
    }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(LineChart), domContainer);