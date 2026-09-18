import StepHeader from "@/components/shared/StepHeader";
import { ToastContainer } from "react-toastify";
import { ReactNode } from "react";

export default function OrderFeaturesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mb-16 md:mb-24 pt-32 xl:pt-44">
      <StepHeader />
      <ToastContainer />
      <div>{children}</div>
    </div>
  );
}
