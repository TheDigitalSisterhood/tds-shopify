import React from "react";

import styles from "./GenericSection.module.scss";

export default function GenericSection({
  children,
  className,
}: {
  children: React.ReactElement | React.ReactElement[] | string;
  className?: any;
}): React.ReactElement {
  const renderClassName = () => (className ? ` ${className}` : "");
  return <div className={`${styles.main}${renderClassName()}`}>{children}</div>;
}
