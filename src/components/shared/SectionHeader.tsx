import Container from "./Container";
import DynamicActionButton from "@/components/shared/DynamicActionButton/DynamicActionButton";
import { ReactNode } from "react";

interface SectionHeaderProps {
  title?: ReactNode;
  btn?: ReactNode;
  btnUrl?: string;
  justify?: string;
}

function SectionHeader({
  title,
  btn,
  btnUrl = "#",
  justify = "between",
}: SectionHeaderProps) {
  return (
    <Container
      className={`flex flex-wrap gap-4 items-center justify-${justify} mb-9`}
    >
      {title && (
        <h2 className="text-[30px] font-semibold font-marcellus">{title}</h2>
      )}
      {btn && <DynamicActionButton href={btnUrl}>{btn}</DynamicActionButton>}
    </Container>
  );
}

export default SectionHeader;
