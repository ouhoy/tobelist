export interface FooterLink {
    title: string;
    href: string;
}

export interface FooterLinksParent {
    title: string;
    className: string,
    footerLink: FooterLink[];
}

export const footerLinksParent: FooterLinksParent[] = [
    {
        title: "Company",
        className: "company",
        footerLink: [
            {title: "About", href: "#"},
            {title: "Blog", href: "#"},
            {title: "Contact", href: "#"},
        ],
    },
    {
        title: "Team",
        className: "team",
        footerLink: [
            { title: "Development", href: "#" },
            { title: "Design", href: "#" },
            { title: "Join Us", href: "#" },
        ],
    },
    {
        title: "Welp",
        className: "help",
        footerLink: [
            {title: "Talk To Support", href: "#"},
            {title: "FAQ", href: "#"},
            {title: "Status", href: "#"},
        ],
    },
];
