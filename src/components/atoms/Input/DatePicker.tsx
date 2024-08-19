import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DatePicker as AriaDatePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Label,
  Popover,
} from "react-aria-components";
import { MdCalendarMonth } from "react-icons/md";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { DateInputProps } from "../../../types/forms/input";
export const DatePicker = ({
  value,
  placeholder,
  label,
  setter,
  grid,
  required,
  readOnly,
  gridPos,
}: DateInputProps) => {
  return (
    <AriaDatePicker
      className="focus:oultine-none w-full gap-2 flex flex-col"
      isReadOnly={readOnly}
      onChange={(v) =>
        setter(v.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone))
      }
      isRequired={required}
      style={
        grid
          ? {
              gridColumn: `span ${grid} / span ${grid}`,
              gridColumnStart: gridPos ? gridPos : "auto",
            }
          : {}
      }
    >
      <Label className="focus:oultine-none ">{label}</Label>
      <Group className="border focus:oultine-none flex w-full h-10   rounded-md px-4 items-center">
        <DateInput className="focus:oultine-none w-full flex">
          {(segment) => (
            <DateSegment
              className="focus:outline-none focus:bg-slate-200 focus:outline-[2px]"
              segment={segment}
            />
          )}
        </DateInput>
        <Button className="focus:outline-none">
          <MdCalendarMonth className="focus:outline-none w-6 h-6" />
        </Button>
      </Group>
      <Popover className="border bg-white rounded-lg shadow-md">
        <Dialog>
          <Calendar className="bg-white focus:oultine-none gap-4  rounded-md  p-4 flex flex-col">
            <header className="focus:oultine-none flex w-full justify-between">
              <Button slot="previous">
                <IoChevronBack className="stroke-brand-blue pr-2 flex-shrink-0 w-8" />
              </Button>
              <Heading />
              <Button slot="next">
                <IoChevronForward className="stroke-brand-blue pr-2 flex-shrink-0 w-8" />
              </Button>
            </header>
            <CalendarGrid className="focus:oultine-none ">
              {(date) => (
                <CalendarCell
                  className={`data-[selected="true"]:bg-brand-blue data-[selected="true"]:text-white hover: rounded-md w-8 h-8 flex items-center justify-center`}
                  date={date}
                />
              )}
            </CalendarGrid>
          </Calendar>
        </Dialog>
      </Popover>
    </AriaDatePicker>
  );
};
