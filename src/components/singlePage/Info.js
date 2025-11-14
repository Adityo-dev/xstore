import { FaUser } from "react-icons/fa";

function Info({ label, values = [] }) {
  return (
    <div className="flex items-center gap-4">
      <FaUser className="mt-[2px]" />
      <div className="flex flex-col gap-1">
        <p className="text-[#A3A1AF] font-semibold">{label}:</p>
        <div className="flex flex-wrap gap-1.5">
          {values?.map(
            (v) =>
              v && (
                <p key={v} className="font-medium text-white">
                  {v}
                </p>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Info;
