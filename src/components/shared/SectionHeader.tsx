import Container from "./Container";
import CustomButton from "@/components/ui/buttons/CustomButton";
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
      {btn && <CustomButton href={btnUrl}>{btn}</CustomButton>}
    </Container>
  );
}

export default SectionHeader;
