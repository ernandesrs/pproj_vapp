export interface PaginationItem {
    label: string,
    page: number | null
};

export interface PaginationProps {
    totalItems: number,
    itemsPerPage: number,
    currentPage: number,
    itemsOnEachSide?: number
}; 