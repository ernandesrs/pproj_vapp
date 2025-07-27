// const customColorPallet = [
//     '#3B82F6', // blue-500
//     '#10B981', // emerald-500
//     '#F59E0B', // amber-500
//     '#EF4444', // red-500
//     '#6366F1', // indigo-500
//     '#14B8A6', // teal-500
//     '#E879F9', // fuchsia-400
//     '#F97316', // orange-500
//     '#8B5CF6', // violet-500
//     '#22D3EE', // cyan-400
//     '#84CC16', // lime-500
//     '#D946EF', // fuchsia-500
//     '#A855F7', // purple-500
//     '#EC4899', // pink-500
//     '#0EA5E9', // sky-500
//     '#4B5563', // gray-600 (neutro)
//     '#991B1B', // red-800 (mais escuro)
//     '#1D4ED8', // blue-700
//     '#15803D', // green-700
//     '#B91C1C'  // red-700
// ];

import type { Point } from "chart.js";

export const ChartColors = {
    RED: '#EF4444',
    RED_DARK: '#B91C1C',

    BLUE: '#3B82F6',
    SKY: '#0EA5E9',

    GREEN: '#15803D',
    EMERALD: '#10B981',
    LIME: '#84CC16',

    ORANGE: '#F97316',

    YELLOW: '#EFB100',

    VIOLET: '#8B5CF6',

    PINK: '#EC4899'
};

type ChartColor = (typeof ChartColors)[keyof typeof ChartColors];

interface BaseChartDataSet {
    label?: string,
    borderColor?: string,
    borderWidth?: number,
};

export interface BarChartDataSet extends BaseChartDataSet {
    backgroundColor?: ChartColor,
    data: Array<number | [number, number]>,
};

export interface PieChartDataSet extends BaseChartDataSet {
    backgroundColor?: ChartColor[],
    data: Array<number>
};

export interface LineChartDataSet extends BaseChartDataSet {
    backgroundColor?: ChartColor | ChartColor[],
    data: Array<number | Point>,
};