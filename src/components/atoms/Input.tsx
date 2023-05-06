import * as SelectPrimitive from "@radix-ui/react-select";
import { IconCalendar } from "@tabler/icons-react";
import clsx from "clsx";
import dayjs from "dayjs";
import { get } from "object-path";
import { Controller, useFormContext } from "react-hook-form";

import { Button } from "../ui/button";
import { Calendar, CalendarProps } from "../ui/calendar";
import { Input as InputComponent, InputProps } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Select } from "../ui/select";

type RequiredProps = {
  name: string;
  label: string;
};

type SelectProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>;

const Error = ({ message }: { message: string }) => {
  return <p className="mt-1 text-xs text-red-400">{message}</p>;
};

export const Input = {
  Text: function (props: InputProps & RequiredProps) {
    const {
      register,
      formState: { errors },
    } = useFormContext();

    const error = get(errors, props.name)?.message;

    return (
      <>
        <Label htmlFor={props.name}>{props.label}</Label>
        <InputComponent type="text" {...props} {...register(props.name)} />
        {error && <Error message={error} />}
      </>
    );
  },

  Select: function (props: SelectProps & RequiredProps) {
    const {
      control,
      formState: { errors },
    } = useFormContext();

    const error = get(errors, props.name)?.message;

    return (
      <>
        <Label htmlFor={props.name}>{props.label}</Label>
        <Controller
          control={control}
          name={props.name}
          render={({ field: { onChange, value } }) => (
            <Select {...props} onValueChange={onChange} value={value}>
              {props.children}
            </Select>
          )}
        />
        {error && <Error message={error} />}
      </>
    );
  },

  DatePicker: function (props: CalendarProps & RequiredProps) {
    const {
      control,
      formState: { errors },
      watch,
    } = useFormContext();

    const error = get(errors, props.name)?.message;

    const date = watch(props.name);

    return (
      <>
        <Label htmlFor={props.name}>{props.label}</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={clsx(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <IconCalendar className="w-4 h-4 mr-2" />
              {date ? dayjs(date).format("DD/MM/YYYY") : <span>Pick a date</span>}
              {error && <Error message={error} />}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Controller
              control={control}
              name={props.name}
              render={({ field: { onChange, value, name } }) => (
                <Calendar
                  {...props}
                  id={name}
                  mode={props.mode ?? "single"}
                  selected={value}
                  onSelect={onChange}
                />
              )}
            />
          </PopoverContent>
        </Popover>
      </>
    );
  },
};
