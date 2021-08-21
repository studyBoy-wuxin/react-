import React, {FC, useEffect, useState} from 'react'
import * as echarts from "echarts/core";
import {
    GridComponent,
    TooltipComponent,
    TitleComponent,
    VisualMapComponent,
    LegendComponent,
    MarkPointComponent
} from 'echarts/components';
import {
    BarChart,
    LineChart
} from 'echarts/charts';
import {CanvasRenderer} from 'echarts/renderers';
import {EChartsType} from "echarts/core";
import {message} from "antd";
import {RouteComponentProps, withRouter} from 'react-router-dom'
import ThemeColor from "../../../assets/ThemeColor";

echarts.use(
    [GridComponent, BarChart, CanvasRenderer,TooltipComponent,TitleComponent,
        VisualMapComponent,LegendComponent,MarkPointComponent,LineChart]
);
export interface seriesData{
    name:string,
    type:'line'|'bar'
    data:number[],
    stack?:string
}
interface IProps extends RouteComponentProps{
    EchartData:seriesData[],
    XData:string[]
}

// const WeekXData = ['周一','周二','周三','周四','周五','周六','周日']
// const MonthXData = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
// const SeasonXData = ['春季','夏季','秋季','冬季']

const LineAndBarEchart:FC<IProps> = (props:IProps)=>{

    const [echart,setEchart] = useState<EChartsType>()

    useEffect(() => {
        const getOption = (data:seriesData[]) => {
            setEchart(echarts.init(document.getElementById('LineAndBarEchart') as HTMLDivElement ,ThemeColor))
            //判断传入的数据数组长度和XDate既X坐标数组长度是否都一致
            try {
                data.forEach((item:seriesData)=>{
                    if(item.data.length !== props.XData.length){
                        throw Error('数据格式有误')
                    }
                })
            }catch (e) {message.error(e.message);props.history.replace('/Page404')}

            //使用Set数据结构
            let XDate = new Set()
            props.XData.forEach((value)=> XDate.add(value))

            //当数据中包含了type为bar的元素，那么就需要让boundaryGap为true,否则就会导致柱形区域溢出
            let flag = props.EchartData.some(item=>{
                return item.type==='bar'
            })
            // 数据项图形的名称
            const legendData: string[] = data.map((item:seriesData) =>item.name)

            echart && echart.setOption({
                title: {
                    text: '折线图堆叠'
                },
                //坐标轴触发，主要在柱状图，折线图等使用
                tooltip: { trigger: 'axis'},
                // 数据项图形的名称
                legend: {data: legendData},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {
                            //保存的格式为jpg
                            type:'jpg',
                        }}},
                xAxis: {
                    type: 'category',
                    //为true时，柱状图不会溢出
                    boundaryGap:flag,
                    data: Array.from(XDate)
                },
                yAxis: {
                    type: 'value'
                },
                series: data
            })
        };
        getOption(props.EchartData)
    }, [echart,props]);
    return (
        <div id='LineAndBarEchart' style={{width:700,height:350,marginLeft:500}}/>
    )
}
export  default  withRouter(LineAndBarEchart)