import type { RouteLocationAsRelativeGeneric } from "vue-router";

export interface SidebarLinkProps {
    label: string,
    title?: string,
    icon?: string,
    to?: string | RouteLocationAsRelativeGeneric,
    activeIn?: Array<string>,
    subitems?: SidebarLinkProps[]
};

export interface SidebarNavProps {
    items?: SidebarLinkProps[]
};

export interface SidebarSubnavProps extends SidebarNavProps {
    label: string,
    icon?: string,
};
