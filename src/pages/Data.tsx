import React, { PureComponent, useState, useEffect } from 'react';
import { customAxios } from '../utils/customAxios';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
} from 'recharts';

// import person from '../data/1인가구 데이터(서울).json';
// import participationOrg from '../data/체육활동 참가 이유(서울).json';
// import nonParticipation from '../data/참여하지 않는 이유(서울).json';

export default function Data() {
    const [person, setPerson] = useState([]);
    const [participation, setParticipation] = useState([]);
    const [nonParticipation, setNonParticipation] = useState([]);

    const fetchDatas = async () => {
        const res1 = await customAxios.get('/api/researches/1');
        const res2 = await customAxios.get('/api/researches/3');
        const res3 = await customAxios.get('/api/researches/2');

        setPerson(res1.data.data.sort((a: any, b: any) => a.연도 - b.연도));
        setParticipation(
            res2.data.data.sort((a: any, b: any) => a.연도 - b.연도)
        );
        setNonParticipation(
            res3.data.data.sort((a: any, b: any) => a.연도 - b.연도)
        );
    };

    useEffect(() => {
        fetchDatas();
    }, []);

    return (
        <>
            <div className='h-[600px] mt-16 mx-[15%] py-16'>
                <h2 className='text-center h-[10%] my-1 text-xl font-semibold'>
                    1인가구 데이터(서울)
                </h2>
                <ResponsiveContainer width='100%' height='100%'>
                    <BarChart
                        width={500}
                        height={300}
                        data={person}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='연도' />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey='value' fill='#8884d8' />
                        {/* <Bar dataKey='비율' fill='#8884d8' /> */}
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className='h-[600px] mx-[15%] py-16'>
                <h2 className='text-center h-[10%] my-1 text-xl font-semibold'>
                    체육활동 참가 이유(서울)
                </h2>
                <ResponsiveContainer width='100%' height='100%'>
                    <LineChart
                        width={500}
                        height={300}
                        data={participation}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='연도' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            strokeWidth={2}
                            type='monotone'
                            dataKey='건강 유지 및 체력증진'
                            stroke='#8884d8'
                        />
                        <Line
                            strokeWidth={2}
                            type='monotone'
                            dataKey='체중조절 및 체형관리'
                            stroke='#82ca9d'
                        />
                        <Line
                            strokeWidth={2}
                            type='monotone'
                            dataKey='스트레스 해소'
                            stroke='#8884d8'
                        />
                        <Line
                            strokeWidth={2}
                            type='monotone'
                            dataKey='대인관계 및 사교'
                            stroke='#fc3939'
                            // activeDot={{ r: 8 }}
                        />
                        <Line
                            strokeWidth={2}
                            type='monotone'
                            dataKey='여가 선용'
                            stroke='#84d8d8'
                        />
                        <Line
                            strokeWidth={2}
                            type='monotone'
                            dataKey='개인의 즐거움'
                            stroke='#ca82ae'
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className='h-[600px] mx-[15%] py-16'>
                <h2 className='text-center h-[10%] my-1 text-xl font-semibold'>
                    체육활동 비 참가 이유(서울)
                </h2>
                <ResponsiveContainer width='100%' height='100%'>
                    <LineChart
                        width={500}
                        height={300}
                        data={nonParticipation}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='연도' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            strokeWidth={2}
                            type='monotone'
                            dataKey='체육활동 가능시간 부족'
                            stroke='#8884d8'
                        />
                        <Line
                            strokeWidth={2}
                            type='monotone'
                            dataKey='체육 활동에 대한 관심 부족'
                            stroke='#82ca9d'
                        />
                        <Line
                            strokeWidth={2}
                            type='monotone'
                            dataKey='체육시설 접근성 낮음'
                            stroke='#84afd8'
                        />
                        <Line
                            strokeWidth={2}
                            type='monotone'
                            dataKey='동반 참여자 부재'
                            stroke='#fc3939'
                            // activeDot={{ r: 8 }}
                        />
                        <Line
                            strokeWidth={2}
                            type='monotone'
                            dataKey='체육활동 지출비용 부담'
                            stroke='#84d8d8'
                        />
                        <Line
                            strokeWidth={2}
                            type='monotone'
                            dataKey='체육에 소질이 없음'
                            stroke='#ca82ae'
                        />
                        <Line
                            strokeWidth={2}
                            type='monotone'
                            dataKey='체육활동 정보 부족'
                            stroke='#d884a7'
                        />
                        <Line
                            strokeWidth={2}
                            type='monotone'
                            dataKey='소득수준 낮음'
                            stroke='#9cca82'
                        />
                        <Line
                            strokeWidth={2}
                            type='monotone'
                            dataKey='건강상의 문제'
                            stroke='#c9d884'
                        />
                        <Line
                            strokeWidth={2}
                            type='monotone'
                            dataKey='체육 프로그램 부족'
                            stroke='#ca9982'
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}
