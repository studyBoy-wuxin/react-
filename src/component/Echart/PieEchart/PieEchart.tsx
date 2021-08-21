import React, {FC, useEffect, useState} from 'react'
import * as echarts from "echarts/core";
// 引入环形图
import 'echarts/lib/chart/pie';
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
import { EChartsType } from 'echarts/core';

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

const PieEchart:FC<IProps> = (props:IProps)=>{
    const [echart,setEchart] = useState<EChartsType>()

    useEffect(() => {
        const getOption = (data : seriesData[],isRoseType:roseType = '') => {
            setEchart(echarts.init(document.getElementById('PieEchart') as HTMLDivElement))

            //展示的数据
            const PieData : {name:string,value:number}[] = data.map((item:seriesData) => ({
                name: item.x,      //name就是  名称
                value: item.y,   //value就是  数值
            }))
            //数据项图形的名称
            const LegendData: string[] = data.map((item:seriesData) =>{
                return item.x
            })
            echart && echart.setOption({
                title:{
                    text: '测试-扇形图',
                    left: 'center',
                    top: 0,
                    textStyle: {
                        color: 'black'
                    }
                },
                //数据项图形触发，也就是非坐标轴的图形
                tooltip: {trigger: 'item'},
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
            })

        };
        getOption(props.PieData)
    }, [props,echart]);

    return (
        <div id='PieEchart' style={{width:'40%',height:350}}/>
    )
}
export default PieEchart