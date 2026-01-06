import { FaSpinner, FaCheck } from "react-icons/fa";
import { useState, type ReactNode } from "react"

type DownloadCVButtonProps = {
    file: string;
    label: ReactNode;
}

type Status = "idle" | "loading" | "success";

function DownloadCVButton({ file, label }: DownloadCVButtonProps) {
  const [status, setStatus] = useState<Status>('idle');
const handleDownload = () => {
    setStatus("loading");

    setTimeout(() => {
        const link = document.createElement("a");
        link.href = file;
        link.download = file.split("/").pop() ?? "cv.pdf";
        link.click();

        setStatus("success");

        setTimeout(() => setStatus("idle"), 2000);
    }, 1000);
}
    return (
        <button onClick={handleDownload} className="bg-green-600 w-[200px] hover:bg-green-400 hover:text-green-700 justify-center rounded-lg gap-2 flex items-center">
          {status === "idle" && label}
          {status === "loading" && (
            <FaSpinner className="animate-spin text-white" />
          )}
          {status === "success" && (
            <>
            <FaCheck />
            Done
            </>
          )}
        </button>
    )
}

export default DownloadCVButton