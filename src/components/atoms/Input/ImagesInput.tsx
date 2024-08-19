import { useRef } from "react";
import { useDrop, FileDropItem } from "react-aria";
import { Button, FileTrigger } from "react-aria-components";
import { FiPlus } from "react-icons/fi";
import { FilesInputProps } from "../../../types/forms/input";

export default function FilesInput({
  readOnly,
  setter,
  grid,
  gridPos,
}: FilesInputProps) {
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
      setter((prev) => [...prev, ...files]);
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
        <FileTrigger
          allowsMultiple={true}
          onSelect={(e) => {
            if (readOnly) return;
            if (!e) return;
            let files = Array.from(e);
            setter((prev) => [...prev, ...files]);
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
      </div>
    </div>
  );
}
