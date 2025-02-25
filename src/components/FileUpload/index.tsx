import React, { useState } from "react";

interface FileUploadProps {
  onFilesChange: (files: File[] | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFilesChange }) => {
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Handle file selection through input
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const validFiles: File[] = [];
      const invalidFiles: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.size <= 5 * 1024 * 1024 && (file.type === "image/png" || file.type === "image/jpeg")) {
          validFiles.push(file);
        } else {
          invalidFiles.push(file.name);
        }
      }

      if (validFiles.length > 0) {
        setFileNames(validFiles.map(file => file.name));
        onFilesChange(validFiles);
      }

      if (invalidFiles.length > 0) {
        setError(`Invalid files: ${invalidFiles.join(", ")}. Only .png and .jpg files under 5MB are allowed.`);
      }
    }
  };

  // Handle drag events
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files) {
      const validFiles: File[] = [];
      const invalidFiles: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.size <= 5 * 1024 * 1024 && (file.type === "image/png" || file.type === "image/jpeg")) {
          validFiles.push(file);
        } else {
          invalidFiles.push(file.name);
        }
      }

      if (validFiles.length > 0) {
        setFileNames(validFiles.map(file => file.name));
        onFilesChange(validFiles);
      }

      if (invalidFiles.length > 0) {
        setError(`Invalid files: ${invalidFiles.join(", ")}. Only .png and .jpg files under 5MB are allowed.`);
      }
    }
    setIsDragOver(false);
  };

  // Trigger file input when clicking on the dropzone
  const handleAreaClick = () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <div
        className={`p-6 border-2 border-dashed rounded-md text-center cursor-pointer ${isDragOver ? 'border-blue-500' : 'border-gray-300'}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleAreaClick}
      >
        <p className="text-md text-gray-700">
          Drag and drop here to upload <br />
          <span className="text-sm text-gray-500">(.png, .jpg up to 5MB)</span>
        </p>
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id="fileInput"
          multiple
          accept=".png,.jpg"
          directory=""
          webkitdirectory=""
        />
      </div>

      {/* Show selected files */}
      {fileNames.length > 0 && (
        <div className="mt-2 text-sm text-gray-700">
          <strong>Files Selected:</strong>
          <ul className="list-disc ml-4">
            {fileNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Display error message if any */}
      {error && (
        <div className="mt-2 text-sm text-red-600">
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
