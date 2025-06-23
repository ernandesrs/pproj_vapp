import type { RouteLocationAsRelativeGeneric } from "vue-router";

export interface SidebarLinkProps {
    label: string,
    title?: string,
    icon?: string,
    to?: string | RouteLocationAsRelativeGeneric,
    activeIn?: Array<string>
};

export interface SidebarNavProps {
    items?: SidebarLinkProps[]
};
