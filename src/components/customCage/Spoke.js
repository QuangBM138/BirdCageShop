import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { spokesData } from "./DataCage";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Spoke({ isDisabled, min, max, parentCallback }) {
  const [selected, setSelected] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (parseInt(value, 10) < min || parseInt(value, 10) > max) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };
  const onTrigger = (e) => {
    setSelected(e)
    parentCallback({ item: e, type: "spoke" })
  }
  return (
    <div>
      <div>
        <div className={`flex mt-3 ${isDisabled ? "disabled-element" : ""}`}>
          <Listbox value={selected} onChange={onTrigger}>
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900 w-[40px]">
                  Spoke:{" "}
                </Listbox.Label>
                <div className="relative ml-5">
                  <Listbox.Button className="relative w-[200px] cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                    <span className="flex items-center">
                      <img
                        src={selected.image}
                        alt=""
                        className="h-5 w-5 flex-shrink-0"
                      />
                      <span className="ml-3 block truncate">
                        {selected.name}
                      </span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <ChevronDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {spokesData.map((spoke) => (
                        <Listbox.Option
                          key={spoke.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "bg-indigo-600 text-white"
                                : "text-gray-900",
                              "relative cursor-default select-none py-2 pl-3 pr-9"
                            )
                          }
                          value={spoke}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                <img
                                  src={spoke.image}
                                  alt=""
                                  className="h-5 w-5 flex-shrink-0"
                                />
                                <span
                                  className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    "ml-3 block truncate"
                                  )}
                                >
                                  {spoke.name}
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                  <input
                    className="border ml-5 text-[20px] h-9 rounded-md"
                    placeholder="Quantity"
                    value={inputValue}
                    style={{ fontFamily: "Roboto" }}
                    onChange={handleInputChange}
                    type="number"
                  />
                  {isInvalid && (
                    <div className="text-red-500 mt-2">Spoke must be in range with min: {min} and max: {max}</div>
                  )}
                </div>
              </>
            )}
          </Listbox>


        </div>
      </div>
    </div>
  );
}
