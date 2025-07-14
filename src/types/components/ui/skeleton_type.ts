export interface SkeletonProps {
    variant?: 'text' | 'circle' | 'rect',
    width?: string,
    height?: string
};

export interface SkeletonTextProps {
    lines?: Array<string> | number,
    lineHeight?: string,
    lineGap?: string
};