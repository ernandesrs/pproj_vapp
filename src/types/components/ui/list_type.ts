import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from "vue-router";

export interface ListItemLinkProps {
    to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric,
    href?: string,
    title?: string,
    target?: "_blank" | "_self"
};

export interface ListItemProps {
    label: string,
    description?: string,
    icon?: string,
    appendIcon?: string,
    asLink?: ListItemLinkProps,
    transparent?: boolean
};

export interface ListItem extends ListItemProps { };

export interface ListProps {
    items?: ListItem[]
};