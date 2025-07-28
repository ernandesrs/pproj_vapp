import { computed } from "vue";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, ArcElement, LineElement, PointElement, CategoryScale, LinearScale, type LineOptions, plugins } from 'chart.js';
import { ChartColors } from "@/types/components/ui/chart_type";
import { useApp } from "@/composables/useApp";

/**
 * 
 * Text color: ChartJS.defaults.color
 * 
 */

ChartJS.defaults.backgroundColor = [
    ChartColors.BLUE,
    ChartColors.SKY,

    ChartColors.GREEN,
    ChartColors.EMERALD,
    ChartColors.LIME,

    ChartColors.ORANGE,

    ChartColors.PINK,

    ChartColors.RED,
    ChartColors.RED_DARK,

    ChartColors.VIOLET,

    ChartColors.YELLOW,
];

ChartJS.register(Title, Tooltip, Legend, BarElement, ArcElement, LineElement, PointElement, CategoryScale, LinearScale);

export function useBaseChart<T>(type: "bar" | "pie" | "line" | "area" | "doughnut", props: {
    id: string | undefined,
    title: string | undefined
}) {
    const fontFamily = 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
    const { isDarkTheme } = useApp();

    const getId = computed(() => {
        return props.id ?? (type + '_chart_' + crypto.randomUUID());
    });

    const getOptions = computed(() => {
        return {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    // position: 'bottom',
                    title: {
                        display: true,
                    },
                    labels: {
                        font: {
                            family: fontFamily,
                            weight: 400
                        },
                        color: isDarkTheme() ? '#B5B5B5' : '#828282'
                    }
                },
                title: {
                    display: props.title ? true : false,
                    text: props.title,
                    color: isDarkTheme() ? '#E0E0E0' : '#525252',
                    // position: 'top',
                    font: {
                        family: fontFamily,
                        size: 15,
                        weight: 600
                    }
                }
            },
            datasets: {
                doughnut: {
                    borderColor: isDarkTheme() ? '#171717' : '#f5f5f5'
                },
                pie: {
                    borderColor: isDarkTheme() ? '#171717' : '#f5f5f5'
                },
                line: {
                    fill: type === 'area' ? true : true,
                    tension: 0.4,
                    borderWidth: 1.5
                }
            }
        };
    });

    return {
        getId,
        getOptions,
    };
};