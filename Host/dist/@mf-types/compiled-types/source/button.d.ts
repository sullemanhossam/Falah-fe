declare const variants: {
    primary: string;
    secondary: string;
    outline: string;
};
type ButtonProps = {
    variant?: keyof typeof variants;
    href?: string;
    disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
/**
 * Button component supporting different variants and hrefs.
 * - Renders as `<button>` by default.
 * - If `href` is provided, renders as an `<a>` for links.
 */
export declare function Button({ variant, className, href, disabled, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
