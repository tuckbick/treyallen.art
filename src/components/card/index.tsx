import * as React from "react";

import "./index.scss";

interface CardProps {
    className?: string;
    theme?: "default" | "none";
}

const Card: React.FC<CardProps> = ({
    children,
    className = "",
    theme = "default",
}) => <div className={`Card Card--${theme} ${className}`}>{children}</div>;

export default Card;
