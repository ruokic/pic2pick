"use client";
import { useState, useEffect, useCallback } from "react";
import PreviewImage from "@/app/ui/picture/PreviewImage";
import { Picture } from "@/app/types/picture";
import Uploader from "@/app/ui/picture/Uploader";

export default function Home() {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const addPictures = useCallback((files: FileList) => {
    setPictures((prev) =>
      prev.concat(
        Array.from(files).map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        )
      )
    );
  }, []);

  useEffect(() => {
    return () => {
      pictures.map((picture) => URL.revokeObjectURL(picture.preview));
    };
  }, []);

  return (
    <main className="flex divide-x h-[calc(100vh-66px)]">
      {/* Picture List */}
      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between">
          파일 목록
          <Uploader pictures={pictures} addPictures={addPictures} />
        </div>
        <div className="flex flex-col gap-2 m-2">
          {pictures.map((picture, index) => (
            <button
              key={picture.preview}
              onClick={() => setSelectedIndex(index)}
            >
              {picture.name}
            </button>
          ))}
        </div>
      </div>
      {/* MetaData of Selected Picture */}
      <div>
        {pictures.length > 0 && <div>{pictures[selectedIndex].name}</div>}
      </div>
      {/* Preview of Selected Picture */}
      <div>
        {pictures.length > 0 && (
          <PreviewImage picture={pictures[selectedIndex]} />
        )}
      </div>
    </main>
  );
}
