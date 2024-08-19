import { useEffect, useMemo, useState } from "react";
import { useFormContext } from "../../../../contexts/NewFormContext";
import FileInput from "../../../atoms/FileInput/FileInput";
import SeamlessInput from "../../../atoms/SeamlessInput/SeamlessInput";

const Header = () => {
  const { form, setForm, setTitle, setDescription } = useFormContext();
  const setFile = (file: File) => {
    console.log("uhh", file);
    setForm((prev) => ({ ...prev, coverFile: file }));
    console.log(form);
  };

  const [image, setImage] = useState("/METRA_CENTER.png");

  useEffect(() => {
    const loadImage = async () => {
      if (form.coverFile) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(form.coverFile);
        fileReader.addEventListener("load", () => {
          setImage(fileReader.result as string);
        });

        return;
      }

      if (form.cover) return setImage(form.cover);

      return "/METRA_CENTER.png";
    };

    loadImage();
  }, [form.cover, form.coverFile, form]);

  const style = useMemo(
    () => ({
      backgroundImage: `url(${image})`,
    }),
    [image],
  );

  return (
    <div
      className="flex w-full h-full justify-center bg-cover flex-shrink-0"
      style={style}
    >
      <div className="flex flex-col gap-4 w-full max-w-[800px] relative justify-center items-start">
        <FileInput className="absolute top-4 left-0" setter={setFile} />
        <SeamlessInput
          value={form.title}
          setter={setTitle}
          placeholder="Título"
          fontSize={36}
          max={40}
        />
        <SeamlessInput
          value={form.description}
          setter={setDescription}
          placeholder="Descripción"
          fontSize={18}
          max={80}
        />
      </div>
    </div>
  );
};

export default Header;
