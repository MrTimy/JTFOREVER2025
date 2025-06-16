/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import FileUploadItem from "../components/upload";
import Button from "../components/button";

type FileData = { name: string; [key: string]: any } | null;

const Page = () => {
  const [allFiles, setAllFiles] = useState<Record<string, FileData>>({});

  const handleFileChange = (uploadId: string, fileData: FileData) => {
    setAllFiles((prev) => ({
      ...prev,
      [uploadId]: fileData,
    }));
  };

  const getUploadedCount = () => {
    return Object.values(allFiles).filter((file) => file !== null).length;
  };

  return (
    <div className="mx-auto bg-[#F1F1F1] min-h-screen py-10">
      <div className="mx-auto max-w-web-max w-mobile-max">
        <div className="mb-6">
          <h2 className="text-6xl font-cairo font-bold text-gray-900 mb-2 text-center">
            Pick your photos and Videos
          </h2>
          <div className="mt-2 text-sm text-gray-500">
            Files uploaded: {getUploadedCount()} / 6
          </div>
        </div>

        {/* Grid of Upload Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <FileUploadItem
              key={id}
              id={id.toString()}
              onFileChange={handleFileChange}
              className="w-full"
            />
          ))}
        </div>
        <div className="flex justify-end mt-6">
          <Button text="Finish" className="bg-purple-500 text-white" />
        </div>

        {/* Summary */}
        {getUploadedCount() > 0 && (
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            {Object.entries(allFiles).map(([uploadId, file]) => {
              if (!file) return null;
              return (
                <div
                  key={uploadId}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="text-gray-600">Upload Area {uploadId}:</span>
                  <span className="font-medium text-gray-900">{file.name}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
