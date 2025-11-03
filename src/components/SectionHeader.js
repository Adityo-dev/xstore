import Container from "./Container";
import CustomButton from "./ui/CustomButton";

function SectionHeader({ title, btn, btnUrl = "#", justify = "between" }) {
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
