import React, {Component} from 'react';
//导入折线图
import 'echarts/lib/chart/line';  //折线图是line,饼图改为pie,柱形图改为bar
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';
import PieEchart from './Echart/PieEchart/PieEchart'
import BarEchart,{seriesData} from "./Echart/LineAndBarEchart/LineAndBarEchart";

export default class APage extends Component {

    getOption =()=> {
        let option = {
            title:{
                text:'用户骑行订单'
            },
            tooltip:{   //展示数据
                trigger:'axis',
            },
            xAxis:{
                position:'bottom',
                data:['周一','周二','周三','周四','周五','周六','周日'],
                type:'category'
            },
            yAxis:{
                type:'value'
            },
            series:[
                {
                    name:'订单量',
                    type:'line',
                    data:[1000,2000,1500,3000,2000,1200,800]
                },
                {
                    name:'a',
                    type:'line',
                    data:[2000,2000,1500,1000,1000,1200,800]
                }
            ]
        }
        return option;
    }

    render() {
        const PieData = [{x:'a',y:100},{x:'b',y:100},{x:'c',y:200},{x:'d',y:300}]
        const LineData = [
            {
                name: '邮件营销',
                type: 'line',
                //数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]

        // const testData = [
        //     {
        //         name:'xxx',
        //         type:'bar',
        //         data:[1,2,3,4],
        //         clip: true
        //     },
        //     {
        //         name:'yyy',
        //         type:'line',
        //         data:[2,3,4,1]
        //     },
        //     {
        //         name: '搜索引擎',
        //         type: 'line',
        //         // stack: '总量',
        //         data: [3, 4, 1, 6]
        //     }
        // ]
        // const XData = ['周一','周二','周三','周四']
        return (
            <div style={{width:'100%',height:'100%'}}>
                这是a页面
                <ReactEcharts option={this.getOption()} />
                <PieEchart PieData={PieData} isRoseType=''/>
                <BarEchart EchartData={LineData as seriesData[]} XData={['周一', '周二', '周三', '周四', '周五', '周六', '周日']}/>
            </div>
        );
    }
}