import React from "react";

type Props = {
  title: string;
  children?: React.ReactNode;
  className?: string;
};

export default function InfoBox({ title, children, className = "" }: Props) {
  return (
    <div className={`InformationBox ${className}`}>
      <h3>{title}</h3>
      <div className="Informations">{children}</div>
    </div>
  );
}
