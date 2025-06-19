/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef } from "react";
import { Plus, X, Eye, Upload } from "lucide-react";

interface FileUploadItemProps {
  id: string;
  onFileChange?: (id: string, file: File | null) => void;
  className?: string;
}

const FileUploadItem = ({
  id,
  onFileChange,
  className = "",
}: FileUploadItemProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<{
    name: string;
    size: number;
    type: string;
    file: File;
  } | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: {
    preventDefault: () => void;
    dataTransfer: { files: Iterable<unknown> | ArrayLike<unknown> };
  }) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: any) => {
    const fileData = {
      name: file.name,
      size: file.size,
      type: file.type,
      file: file,
    };

    setUploadedFile(fileData as any);

    // Create preview URL for images
    if (file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url as any);
    }

    // Call parent callback if provided
    if (onFileChange) {
      onFileChange(id, fileData as any);
    }
  };

  const handleClick = () => {
    if (!showPreview) {
      fileInputRef.current?.click();
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setPreviewUrl(null);
    setShowPreview(false);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    if (onFileChange) {
      onFileChange(id, null);
    }
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  // Preview Mode
  if (showPreview && uploadedFile) {
    return (
      <div
        className={`relative border-4 border-[#ACACAC] border-dashed rounded-lg overflow-hidden ${className}`}
      >
        {/* Preview Content */}
        <div className="aspect-square bg-gray-50 flex items-center justify-center">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt={uploadedFile?.name}
              className="max-w-full max-h-full object-contain"
            />
          ) : (
            <div className="text-center p-4">
              <div className="w-16 h-20 bg-gray-400 rounded mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xs font-medium">
                  {uploadedFile.name.split(".").pop()?.toUpperCase()}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-700 truncate">
                {uploadedFile.name}
              </p>
              <p className="text-xs text-gray-500">
                {formatFileSize(uploadedFile.size)}
              </p>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="absolute top-2 right-2 flex gap-1">
          <button
            onClick={togglePreview}
            className="p-1.5 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
          >
            <Upload className="w-3 h-3 text-gray-600" />
          </button>
          <button
            onClick={removeFile}
            className="p-1.5 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors"
          >
            <X className="w-3 h-3 text-red-500" />
          </button>
        </div>

        {/* File Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2">
          <p className="text-xs font-medium truncate">{uploadedFile.name}</p>
          <p className="text-xs opacity-75">
            {formatFileSize(uploadedFile.size)}
          </p>
        </div>
      </div>
    );
  }

  // Upload Mode
  return (
    <div className={className}>
      {/* Upload Area */}
      <div
        className={`relative max-w-[325px] mx-auto rounded-[44px] border-4 border-dashed p-6 text-center cursor-pointer transition-all duration-200 aspect-square flex flex-col items-center justify-center ${
          isDragOver
            ? "border-purple-400 bg-purple-50"
            : uploadedFile
            ? "border-green-300 bg-green-50"
            : "border-gray-300 hover:border-gray-400 bg-white"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileSelect}
          className="hidden"
          accept="image/*,.pdf,.doc,.docx,.txt"
        />

        {!uploadedFile ? (
          <>
            {/* File Icons */}
            <div className="flex justify-center items-center mb-3">
              <div className="relative">
                {/* Back file icon */}
                <div className="w-12 h-9 bg-gray-400 rounded transform rotate-6 absolute -top-1 -right-1"></div>
                {/* Front file icon */}
                <div className="w-12 h-9 bg-gray-500 rounded relative z-10">
                  <div className="absolute top-0 right-0 w-2 h-2 bg-white transform rotate-45 origin-bottom-left"></div>
                </div>

                {/* Plus icon */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center z-20">
                  <Plus className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-600 mb-1 font-cairo">
              Drop files here
            </p>
            <p className="text-xs text-gray-400 font-cairo">
              or click to browse
            </p>
          </>
        ) : (
          <>
            {/* Success State */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-9 bg-green-500 rounded mb-3 flex items-center justify-center">
                <Plus className="w-4 h-4 text-white transform rotate-45" />
              </div>
              <p className="text-xs font-medium text-green-700 mb-1 truncate max-w-full">
                {uploadedFile.name}
              </p>
              <p className="text-xs text-green-600">
                {formatFileSize(uploadedFile.size)}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePreview();
                  }}
                  className="px-2 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition-colors flex items-center gap-1"
                >
                  <Eye className="w-3 h-3" />
                  Preview
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile();
                  }}
                  className="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition-colors flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  Remove
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FileUploadItem;
