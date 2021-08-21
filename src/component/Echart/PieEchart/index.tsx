import React, {Component} from 'react';
// 引入 ECharts 主模块
import * as echarts from 'echarts/core'
// 引入环形图
import 'echarts/lib/chart/pie';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import {
    PieChart,
} from 'echarts/charts';
// import components, all suffixed with Component
import {
    TooltipComponent,
    TitleComponent,
    VisualMapComponent,
} from 'echarts/components';
import {CanvasRenderer} from 'echarts/renderers';

// Register the required components
echarts.use(
    [TitleComponent, TooltipComponent, PieChart, CanvasRenderer,VisualMapComponent]
);

interface seriesData{
    x:string,
    y:number
}
type roseType = 'radius'|'area'|''|undefined
interface IProps{
    PieData:seriesData[],
    isRoseType?:roseType
}
class Index extends Component<IProps,any> {
    EchartForReact:any
    //获取配置项对象
    getOption = (data : seriesData[],isRoseType:roseType = '') => {
         //展示的数据
         const PieData : {name:string,value:number}[] = data.map((item:seriesData) => ({
             name: item.x,      //name就是  名称
             value: item.y,   //value就是  数值
         }))
        //数据项图形的名称
        const LegendData: string[] = data.map((item:seriesData) =>{
            return item.x
        })
        return {
            title:{
                text: '测试-扇形图',
                left: 'center',
                top: 0,
                textStyle: {
                    color: 'black'
                }
            },
            tooltip: {
                //数据项图形触发，也就是非坐标轴的图形
                trigger: 'item',
            },
            //是否展示图例图标(也就是右上角那个)
            legend:{
                //规定图标纵向排列
                orient: "vertical",
                left: "right",
                top:'top',
                data: LegendData
            },
            series: [
                {
                    name: '设备占比数量',
                    type: 'pie',
                    //['x%','y%']内外半径,仅仅'x%'就表示半径的大小
                    radius: '70%',
                    label: {
                        formatter: '{b}:{d}%',
                        textStyle: {
                            color: '#000000',
                            fontSize: 15,
                        },
                    },
                    data: PieData,
                    //是否展示成南丁格尔图。扇区圆心角展现数据的百分比,半径展现数据的大小
                    roseType:isRoseType,
                    //是否支持多个选中(也就是点击后，是否支持多个偏移)；默认偏移10px
                    selectedMode: "multiple",
                }]
        }
    };
    componentDidMount() {
        let echarts_instance = this.EchartForReact.getEchartsInstance();
        // console.log(echarts_instance)
        // echarts_instance.setOption({})
        this.setState({})
        echarts_instance.resize()
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<any>, snapshot?: any) {
        let echarts_instance = this.EchartForReact.getEchartsInstance();
        echarts_instance.clear();
        echarts_instance.setOption(this.getOption(this.props.PieData,this.props.isRoseType))
    }

    render() {
        return (
            <ReactEchartsCore
                ref={(e) => { this.EchartForReact = e }}
                //获取到配置项，并传入props传过来的数据
                option={this.getOption(this.props.PieData,this.props.isRoseType)}
                echarts={echarts}
                style={{width:'40%',height:350,marginLeft:450}}
                notMerge={true}
                lazyUpdate={true}
                // theme={"dark"}
                // showLoading={true}
                loadingOption={{
                    text: 'loading',
                    color: '#c23531',
                    textColor: '#000',
                    maskColor: 'rgba(255, 255, 255, 0.8)',
                    zlevel: 0,
                    fontSize: 12,
                    showSpinner: true,
                    spinnerRadius: 10,
                    lineWidth: 5,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    fontFamily: 'sans-serif'
                }}
                // onChartReady={this.onChartReadyCallback}
                // onEvents={EventsDict}
                // opts={}
                opts={{renderer: 'svg'}}
            />
        );
    }
}

export default Index;