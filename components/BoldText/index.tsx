export default function BoldText({
  children,
  weight,
  underline,
}: {
  children: React.ReactElement | React.ReactElement[] | string;
  weight?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "normal"
    | "bold"
    | "bolder"
    | "lighter"
    | "initial"
    | "inherit";
  underline?: boolean;
}): React.ReactElement {
  const renderUnderline = () =>
    underline ? { textDecoration: "underline" } : null;
  return (
    <span
      style={{ fontWeight: weight ? weight : "bold", ...renderUnderline() }}
    >
      {children}
    </span>
  );
}
