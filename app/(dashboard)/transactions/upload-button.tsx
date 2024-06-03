import { Upload } from "lucide-react";
import { useCSVReader } from "react-papaparse";

import { Button } from "@/components/ui/button";

export interface IUploadButtonProps {
  onUpload: (results: any) => void;
}

export default function UploadButton({ onUpload }: IUploadButtonProps) {
  const { CSVReader } = useCSVReader();

  // todo: add paywall
  return (
    <CSVReader onUploadAccepted={onUpload}>
      {({ getRootProps }: any) => (
        <Button size={"sm"} className="w-full lg:w-auto" {...getRootProps()}>
          <Upload className="size-4 mr-2" />
          Import
        </Button>
      )}
    </CSVReader>
  );
}
