import { useRef } from "react";
import { Button, FileTrigger, FileTriggerProps } from "react-aria-components";
import { useDrop, FileDropItem } from "react-aria";
import { FiImage } from "react-icons/fi";

const FileInput = ({
  className,
  setter,
}: {
  className?: string;
  setter: (file: File) => void;
}) => {
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const { dropProps, isDropTarget } = useDrop({
    ref: dropZoneRef,
    onDrop: async (_files) => {
      const fileDropItems = _files.items.filter((f) => {
        return f.kind === "file";
      }) as FileDropItem[];

      const files = await Promise.all(
        fileDropItems.map(async (f) => await f.getFile()),
      );
      setter(files[0]);
    },
  });
  const handleOnSelect: FileTriggerProps["onSelect"] = (e) => {
    if (!e) return;
    const files = Array.from(e);
    setter(files[0]);
  };

  return (
    <div className={className ? className : ""}>
      <FileTrigger allowsMultiple={false} onSelect={handleOnSelect}>
        <Button className="flex-shrink-0 rounded text-neutral-900 focus:outline-none focus:border-none w-full">
          <div
            {...dropProps}
            ref={dropZoneRef}
            className={`${
              isDropTarget ? "bg-slate-200" : "border border-brand-blue"
            } flex gap-2 bg-neutral-200 w-max px-4 py-2 flex-shrink-0 items-center justify-center rounded`}
          >
            <FiImage className="stroke-brand-blue w-6 h-6" />
            <p className="text-brand-blue">Seleccionar imágen</p>
          </div>
        </Button>
      </FileTrigger>
    </div>
  );
};

export default FileInput;
