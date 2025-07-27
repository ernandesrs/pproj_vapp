import { computed } from "vue";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, ArcElement, LineElement, PointElement, CategoryScale, LinearScale, type LineOptions } from 'chart.js';
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

export function useBaseChart<T>(type: "bar" | "pie" | "line" | "area", props: {
    id: string | undefined
}) {
    const { isDarkTheme } = useApp();

    const getId = computed(() => {
        return props.id ?? (type + '_chart_' + crypto.randomUUID());
    });

    const getOptions = computed(() => {
        return {
            responsive: true,
            maintainAspectRatio: true,
            datasets: {
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
        getOptions
    };
};