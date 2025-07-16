/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import FileUploadItem from "../components/upload";
import Button from "../components/button";
import { toast } from "sonner";

type FileData = { name: string; [key: string]: any } | null;

const Page = () => {
  const [allFiles, setAllFiles] = useState<Record<string, FileData>>({});
  const [isSending, setIsSending] = useState(false);

  const handleFileChange = (uploadId: string, fileData: FileData) => {
    setAllFiles((prev) => ({
      ...prev,
      [uploadId]: fileData,
    }));
  };

  const getUploadedCount = () => {
    return Object.values(allFiles).filter((file) => file !== null).length;
  };

  const uploadAllFiles = async () => {
    setIsSending(true);
    const filesToUpload = Object.values(allFiles).filter(
      (file) => file !== null
    ) as any[];

    const uploadedUrls: string[] = [];

    for (const fileData of filesToUpload) {
      const file = fileData.file ?? fileData; // adapt if needed

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "JTForever");

      try {
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dumcb8shq/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await res.json();
        uploadedUrls.push(data.secure_url);
      } catch (error) {
        console.error("Upload failed:", error);
      }
    }

    toast.success("Thanks for sharing the moment with us");
    setAllFiles({});
    setIsSending(false);
  };

  return (
    <div className="mx-auto bg-[#F1F1F1] min-h-screen py-10">
      <div className="mx-auto max-w-web-max w-mobile-max">
        <div className="mb-6">
          <h2 className="text-3xl md:text-6xl font-cairo font-bold text-gray-900 mb-2 text-center">
            Upload your Beautiful Photos and Videos
          </h2>
          <div className="mt-2 text-sm text-gray-500">
            Files uploaded: {getUploadedCount()} / 21
          </div>
        </div>

        {/* Grid of Upload Areas */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
          {[1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21].map((id) => (
            <FileUploadItem
              key={id}
              id={id.toString()}
              onFileChange={handleFileChange}
              className="w-full"
            />
          ))}
        </div>
        <div className="flex justify-end mt-6">
          <Button
            text="Finish"
            className="bg-purple-500 text-white"
            onClick={uploadAllFiles}
            disabled={isSending || getUploadedCount() === 0}
          />
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
