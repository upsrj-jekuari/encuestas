import { useRef } from "react";
import { useDrop, FileDropItem } from "react-aria";
import { Button, FileTrigger } from "react-aria-components";
import { FiPlus, FiTrash } from "react-icons/fi";
import { FileInputProps } from "../../../types/forms/input";

export default function FileInput({
  file,
  setter,
  grid,
  gridPos,
  readOnly,
}: FileInputProps) {
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const { dropProps, isDropTarget } = useDrop({
    ref: dropZoneRef,
    onDrop: async (_files) => {
      if (readOnly) return;
      const fileDropItems = _files.items.filter((f) => {
        return f.kind === "file";
      }) as FileDropItem[];

      const files = await Promise.all(
        fileDropItems.map(async (f) => await f.getFile()),
      );
      setter(files[0]);
    },
  });

  return (
    <div
      style={
        grid
          ? {
              gridColumn: `span ${grid} / span ${grid}`,
              gridColumnStart: gridPos ? gridPos : "auto",
            }
          : {}
      }
      className="h-max flex-shrink-0 w-full text-neutral-100 flex flex-col gap-2"
    >
      <div className="flex h-max justify-between items-start text-neutral-800 flex-col gap-2">
        <p className="">Archivos</p>
        {!file ? (
          <FileTrigger
            allowsMultiple={false}
            onSelect={(e) => {
              if (!e) return;
              if (readOnly) return;
              const files = Array.from(e);
              setter(files[0]);
            }}
          >
            <Button className="flex-shrink-0 rounded text-neutral-900 focus:outline-none focus:border-none w-full">
              <div
                {...dropProps}
                ref={dropZoneRef}
                className={`${
                  isDropTarget ? "bg-slate-200" : "border border-brand-blue"
                } flex h-[80px] flex-col w-full flex-shrink-0 items-center justify-center rounded`}
              >
                <FiPlus className="stroke-brand-blue stroke-2 w-8 h-8" />
                <p className="text-brand-blue">Agregar archivo</p>
              </div>
            </Button>
          </FileTrigger>
        ) : (
          <div className="border border-brand-blue flex h-[80px] flex-col w-full flex-shrink-0 items-center justify-center rounded">
            <p>{file.name}</p>
            <button onClick={() => setter(null)} className="group">
              <FiTrash className="w-8 h-8 stroke-red-500 group-hover:stroke-red-800" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
