import StepHeader from "@/components/StepHeader";
import { ToastContainer } from "react-toastify";

export default function OrderFeaturesLayout({ children }) {
  return (
    <div className="mb-16 md:mb-24 pt-32 xl:pt-44">
      <StepHeader />
      <ToastContainer />
      <div>{children}</div>
    </div>
  );
}
