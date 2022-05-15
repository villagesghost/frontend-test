import React from "react";

export interface Props {
    title: String;
    variant: 'default' | 'success' | 'wraning' | 'error' | 'info';
}

export const Button = ({title = 'Default text', variant = 'default', ...props}: Props) => {
    return (
        <button {...props} className={variant}>
            {title}
        </button>
    )
}