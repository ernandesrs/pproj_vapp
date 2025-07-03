export interface TableHeaderColumn {
    label: string
};

export interface TableProps {
    header?: TableHeaderColumn[],
    captionTop?: string,
    captionBottom?: string,
};

export interface TableGroupProps {
    label: string,
    colspan: number
};

export interface TableRowProps {
};

export interface TableColumnProps {
    th?: boolean,
    value?: string | number | null
};